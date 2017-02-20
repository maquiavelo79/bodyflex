
jQuery(document).ready(function() {

var URLdomain   = window.location.host;
var URLprotocol = window.location.protocol;

    //XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX    
        //var rut=$('#rut').val();
    //XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX    
    
    //var load='<div id="espera" class="form-actions" style="display:none;"></div>';                                            
    
    $.ajax({
            url: URLprotocol+"//"+URLdomain+"/bodyflex/Publicaciones/model/publicacionCategoriasEtiquetaConsultaModel.php",
            type:  'post',
            datetype: 'xml',
            async: true,
            success:  function (xml){

            //alert('publicacionCategoriasEtiquetaConsultaModel '+xml);

            var xmlDoc = $.parseXML(xml), $xml = $(xmlDoc);
            var codErr = xmlDoc.getElementsByTagName('CODERROR')[0].childNodes[0].nodeValue;
            var desErr = xmlDoc.getElementsByTagName('DESERROR')[0].childNodes[0].nodeValue;
                       
            switch(codErr){
                    case '9':

                        var msg='<div style="text-align:center;" class="alert alert-block">';
                        msg+='<b><span style="color: #000;">' + '[' + codErr + '] ' + desErr + '</span></b>';
                        msg+='</div>';

                        $("#warningCat").html(msg);
                        break;   
                    
                    case '8':

                        var msg='<div style="text-align:center;" class="alert alert-block">';
                        msg+='<b><span style="color: #000;">' + '[' + codErr + '] ' + desErr + '</span></b>';
                        msg+='</div>';

                        $("#warningCat").html(msg);
                        break;     
                    
                    case '99':

                        var msg='<div style="text-align:center;" class="alert alert-block">';
                        msg+='<b><span style="color: #000;">' + '[' + codErr + '] ' + desErr + '</span></b>';
                        msg+='</div>';

                        $("#warningCat").html(msg);
                        break;     
                        
                    case '100':

                        var msg='<div style="text-align:center;" class="alert alert-block">';
                        msg+='<b><span style="color: #000;">' + '[' + codErr + '] ' + desErr + '</span></b>';
                        msg+='</div>';

                        $("#warningCat").html(msg);
                        break;         
                       
                    case '98':

                        var msg='<div style="text-align:center;" class="alert alert-block">';
                        msg+='<button type="button" class="close" data-dismiss="alert">×</button>';
                            msg+='<b><span style="color: #000;">' + '[' + codErr + '] ' + desErr + '</span></b>';
                        msg+='</div>';

                        $("#warningCat").html(msg);
                        break;     
                    
                    default:
                        
                        var strVal;
                        
                        $('#cmbAgrCat').empty();
                        $('#cmbSelCat').empty();
                        $('#cmbCat').empty();
                      
                        $('#cmbAgrCat').append($('<option>', {value:'(SELECCIONE)', text:'(SELECCIONE)'}));
                        $('#cmbSelCat').append($('<option>', {value:'(SELECCIONE)', text:'(SELECCIONE)'}));
                        $('#cmbCat').append($('<option>', {value:'(SELECCIONE)', text:'(SELECCIONE)'}));
                        
                        $xml.find('REGISTRO').each(function () {
                            strVal=$(this).text().replace(/(^\s*)|(\s*$)/g,"");
                            if(strVal.length>0){
                                $('#cmbAgrCat').append($('<option>', {value:strVal, text:strVal}));
                                $('#cmbSelCat').append($('<option>', {value:strVal, text:strVal}));
                                $('#cmbCat').append($('<option>', {value:strVal, text:strVal}));
                            }
                        });
                        
                        $('#cmbAgrCat').trigger('liszt:updated');
                        $('#cmbSelCat').trigger('liszt:updated');
                        $('#cmbCat').trigger('liszt:updated');
                        break;

                }

        }
    });
    
          
    
       
       
    //Cuando cambia categoría deben cambiar etiquetas!!
    $("#cmbCat").change(function(){
        
        
        //alert($('#cmbCat').val());
        if($('#cmbCat').val()!='(SELECCIONE)'){        
            var parametros = {"cat" : $('#cmbCat').val()};            
            $.ajax({
                data:  parametros,
                url: URLprotocol+"//"+URLdomain+"/bodyflex/Publicaciones/model/publicacionEtiquetaConsultaModel.php",
                type:  'post',
                datetype: 'xml',
                async: true,
                success:  function (xml){

                //alert(xml);

                var xmlDoc = $.parseXML(xml), $xml = $(xmlDoc);
                var codErr = xmlDoc.getElementsByTagName('CODERROR')[0].childNodes[0].nodeValue;
                var desErr = xmlDoc.getElementsByTagName('DESERROR')[0].childNodes[0].nodeValue;

                switch(codErr){
                    case '9':

                            var msg='<b><span style="color: #000;">' + '[' + codErr + '] ' + desErr + '</span></b>';
                            $('#warningEtiPub').html(msg);
                            $('#warningEtiPub').show();
                            break;   

                        case '8':

                            var msg='<b><span style="color: #000;">' + '[' + codErr + '] ' + desErr + '</span></b>';
                            $('#warningEtiPub').html(msg);
                            $('#warningEtiPub').show();
                            break;   

                        case '99':

                            var msg='<b><span style="color: #000;">' + '[' + codErr + '] ' + desErr + '</span></b>';
                            $('#warningEtiPub').html(msg);
                            $('#warningEtiPub').show();
                            break;     
                            
                        case '100':

                            var msg='<b><span style="color: #000;">' + '[' + codErr + '] ' + desErr + '</span></b>';
                            $('#warningEtiPub').html(msg);
                            $('#warningEtiPub').show();
                            break;         

                        case '98':

                            var msg='<b><span style="color: #000;">' + '[' + codErr + '] ' + desErr + '</span></b>';
                            $('#warningEtiPub').html(msg);
                            $('#warningEtiPub').show();
                            break;     

                    default:

                        var str='';
                        var cont=0;

                        //TOMAMOS LO SELECCIONADO
                        $( "#cmbEti option:selected" ).each(function() {
                            str += $(this).val() + "#";
                            cont+=1;
                        });

                        //LIMPIAMOS COMBO
                        $('#cmbEti').empty();

                        var cat;
                        var sw;         
                        var strEti;

                        //AGREGAMOS PRODUCTO DE CONSULTA             
                        $xml.find('REGISTRO').each(function () {
                            strEti=$(this).text().replace(/(^\s*)|(\s*$)/g,"");
                            cat = $('#cmbCat').val() + '|' + strEti; 
                            if(strEti.length>0){
                                sw=0;
                                $("#cmbEti option").each(function(){    
                                    //alert('agrega os de la categoria');
                                    if($(this).val()==cat){
                                        sw=1;   
                                    }
                                    if(sw==1){
                                        return false;
                                    }
                                });
                                if(sw==0){
                                    $('#cmbEti').append($('<option>', {value:cat, text:strEti}));
                                }
                            }
                        });    
                        $('#cmbEti').trigger('liszt:updated');     
                        //AGREGAMOS PRODUCTO DE CONSULTA     


                        //AGREGAMOS ELEMENTOS SELECCIONADOS
                            var tex;
                            var sw2;
                            var e=str.split('#');
                            if(cont>0){
                                //alert('antes de entrar al for');
                                for(var j=0; j<cont; j++){
                                    //alert('entro en el for');
                                    sw2=0;
                                    $("#cmbEti option").each(function(){
                                        if($(this).val()==e[j]){
                                            sw2=1;
                                        }
                                    });
                                    if(sw2==0){
                                        //alert('agrega los seleccionados existentes');
                                        tex=e[j].split('|');
                                        $('#cmbEti').append($('<option>', {value:e[j], text:tex[1]}));
                                        $("#cmbEti option[value='" + e[j] + "']").prop('selected', true);   //ESTABLECEMOS COMO SELECCIONADO 
                                    }else{
                                        $("#cmbEti option[value='" + e[j] + "']").prop('selected', true);
                                    }

                                }   
                            }
                         //AGREGAMOS ELEMENTOS SELECCIONADOS                    
                        $('#cmbEti').trigger('liszt:updated');
                        break;    
                    }
                }
            });
        }else{
            $('#cmbEti').trigger('liszt:updated');
        }
        
        
    });   
             
    $("#cmbEti").change(function() {
      
        var pId = $('#puId').val(); 
        var cmbCat = $('#cmbCat').val(); 

        $("#cmbEti option").each(function(){
            //alert($(this).attr('value'));
            if($(this).attr('selected')){
                //SE INGRESAN
                var val = $(this).attr('value');
                var par = val.split('|');

                //alert('Ingresa: [pId, cat, eti] = ' + '[' + pId + ', ' + par[0] + ', ' + par[1] + ']');
               
                var parametros1 = {
                    "pId" : pId,
                    "cat" : par[0],
                    "eti" : par[1]
                }; 
                
                //alert('Agrega ' + pId + ' ' +  par[0] + ' ' + par[1]);

                $.ajax({
                    data:  parametros1,
                    url: URLprotocol+"//"+URLdomain+"/bodyflex/Publicaciones/model/publicacionAgregaEtiquetaModel.php",
                    type:  'post',
                    datetype: 'xml',
                    async: true,
                    success: function(xml){ 
                    
                        //alert('publicacionAgregaEtiquetaModel ' + xml);
                    
                        var xmlDoc = $.parseXML(xml), $xml = $(xmlDoc);
                        var codErr = xmlDoc.getElementsByTagName('CODERROR')[0].childNodes[0].nodeValue;
                        var desErr = xmlDoc.getElementsByTagName('DESERROR')[0].childNodes[0].nodeValue;
                        
                        switch(codErr){
                            case '9':

                                var msg='<b><span style="color: #000;">' + '[' + codErr + '] ' + desErr + '</span></b>';
                                $('#warningEtiPub').html(msg);
                                $('#warningEtiPub').show();
                                break;   

                            case '8':

                                var msg='<b><span style="color: #000;">' + '[' + codErr + '] ' + desErr + '</span></b>';
                                $('#warningEtiPub').html(msg);
                                $('#warningEtiPub').show();
                                break;   

                            case '99':

                                var msg='<b><span style="color: #000;">' + '[' + codErr + '] ' + desErr + '</span></b>';
                                $('#warningEtiPub').html(msg);
                                $('#warningEtiPub').show();
                                break;     
                                
                            case '100':

                                var msg='<b><span style="color: #000;">' + '[' + codErr + '] ' + desErr + '</span></b>';
                                $('#warningEtiPub').html(msg);
                                $('#warningEtiPub').show();
                                break;         

                            case '98':
                                //LA ETIQUETA YA SE ENCUENTRA ASOCIADA A LA PUBLICACION
                                break;     
                                
                            default:
                                //INDICAMOS QUE POSEE ETIQUETAS
                                var datos = xmlDoc.getElementsByTagName('DATOS')[0].childNodes[0].nodeValue;
                                var cantidad = xmlDoc.getElementsByTagName('CANTIDAD')[0].childNodes[0].nodeValue;
                                
                                $('#poseeEti').val(datos);
                                $('#etiquetasIngresadas').val(cantidad);
                                break;
                        }
                    }
                });  
                
            }else{
                //SE ELIMINAN    
                var val = $(this).attr('value');
                var par=val.split('|');
                
                //alert('Elimina: [pId, cat, eti] = ' + '[' + pId + ', ' + par[0] + ', ' + par[1] + ']');
                
                var parametros2 = {
                    "pId" : pId,
                    "cat" : par[0],
                    "eti" : par[1]
                }; 

                $.ajax({
                    data:  parametros2,
                    url: URLprotocol+"//"+URLdomain+"/bodyflex/Publicaciones/model/publicacionEliminaEtiquetaModel.php",
                    type:  'post',
                    datetype: 'xml',
                    async: true,
                    success: function(xml){ 
                    
                        //alert('publicacionEliminaEtiquetaModel ' + xml);
                    
                        var xmlDoc = $.parseXML(xml), $xml = $(xmlDoc);
                        var codErr = xmlDoc.getElementsByTagName('CODERROR')[0].childNodes[0].nodeValue;
                        var desErr = xmlDoc.getElementsByTagName('DESERROR')[0].childNodes[0].nodeValue;
                        
                        switch(codErr){
                            case '9':

                                var msg='<b><span style="color: #000;">' + '[' + codErr + '] ' + desErr + '</span></b>';
                                $('#warningEtiPub').html(msg);
                                $('#warningEtiPub').show();
                                break;   

                            case '8':

                                var msg='<b><span style="color: #000;">' + '[' + codErr + '] ' + desErr + '</span></b>';
                                $('#warningEtiPub').html(msg);
                                $('#warningEtiPub').show();
                                break;   

                            case '99':

                                var msg='<b><span style="color: #000;">' + '[' + codErr + '] ' + desErr + '</span></b>';
                                $('#warningEtiPub').html(msg);
                                $('#warningEtiPub').show();
                                break;  
                            
                            case '100':

                                var msg='<b><span style="color: #000;">' + '[' + codErr + '] ' + desErr + '</span></b>';
                                $('#warningEtiPub').html(msg);
                                $('#warningEtiPub').show();
                                break;  

                            case '98':
                                //SE PRETENDE ELIMINAR UNA ETIQUETA QUE NO EXISTE O NO SE ENCUENRA SOCIADA A LA PUBLICACIÓN (NO DEBERÍA SUCEDER)
                                break;     
                            
                            case '97':
                                //PUBLICACION SIN ETIQUETAS
                                $('#poseeEti').val(0);
                                break;   

                            default:
                                //SOLO CARGA LAS ETIQUETAS ASICIADAS A LA CATEGORIA CORRESPONDIENTE
                                var cantidad = xmlDoc.getElementsByTagName('CANTIDAD')[0].childNodes[0].nodeValue;
                                
                                if(cantidad==0){
                                    $('#poseeEti').val(0);
                                }else{
                                    $('#poseeEti').val(1);
                                }
                                
                                $('#etiquetasIngresadas').val(cantidad);
                                cargaEtiquetasXCategoriaAlEliminar(cmbCat, par[1]);
                                break;
                        }
                    }
                }); 
            };
         });
         
        $('#esperaEti').show();
        setTimeout(function() {
            $('#esperaEti').hide();
        }, 1500); 
        
    });
    
    $('#btnReEtiquetar').click(function(){
        $('#myModal').html('');

        var strModal='';
        var id = $('#txtPuId').val();
        var tit = $('#txtPuTit').val();

            strModal+='<div class="modal-header">';
                strModal+='<button type="button" class="close" data-dismiss="modal">×</button>';
                strModal+='<h3><i class="fa fa-exclamation-triangle"></i>&nbsp;Volver a Etiquetar</h3>';
            strModal+='</div>';
            strModal+='<div class="modal-body" id="modalBody">';
                strModal+='¿Deseas volver a etiquetar publicación: <br><b>'+'['+  id + '] - ' + tit + '</b>?<br>';
                strModal+='<div id="idMsgRee">Esta acción <b>eliminará</b> las etiquetas almacenadas asociadas a la publicación.</div>';
            strModal+='</div>';
            strModal+='<div class="modal-footer">';
                strModal+='<a class="btn" data-dismiss="modal"><i class="fa fa-times"></i>&nbsp;Cancelar</a>';
                strModal+='<a id="btnReEti" style="border-color: silver; background-color: #FFCC00; color: black; font-weight: bold;" class="btn btn-primary"><i class="fa fa-check-circle"></i>&nbsp;Re-Etiquetar</a>';
            strModal+='</div>';

        $('#myModal').html(strModal);
        $('#myModal').show();

    });
    
    $(document).on("click", "#btnReEti", function(event){

    //alert('btnReEti');

        //var rut = $('#txtHeaderRut').val(); 
        var id = $('#txtPuId').val(); 

        //Div de Carga
        var strLoad='<div id="espera" class="modal-body"></div>';

        //AJAX
        var parametros = {"id" : id};            

        //escondemos mensajería
        //$('#warningPublicacion').hide();

        $.ajax({
            data:  parametros,
            url: URLprotocol+"//"+URLdomain+"/bodyflex/Publicaciones/model/publicacionEtiquetaEliminaAllPublicacionModel.php",
            type:  'post',
            datetype: 'xml',
            async: true,
            beforeSend: function(){
                $("#idMsgRee").html(strLoad);
            },
            success:  function (xml){     
                
                //alert('publicacionEtiquetaEliminaAllPublicacionModel ' + xml);
                
                var xmlDoc = $.parseXML(xml), $xml = $(xmlDoc);
                var codErr = xmlDoc.getElementsByTagName('CODERROR')[0].childNodes[0].nodeValue;
                var desErr = xmlDoc.getElementsByTagName('DESERROR')[0].childNodes[0].nodeValue;

                switch(codErr){
                    case '9':

                        var msg='<div style="text-align:center;" class="alert alert-block">';
                        msg+='<b><span style="color: #000;">' + '[' + codErr + '] ' + desErr + '</span></b>';
                        msg+='</div>';

                        $('#warningEtiPub').html(msg);
                        $('#warningEtiPub').show();
                        break;   

                    case '8':

                        var msg='<div style="text-align:center;" class="alert alert-block">';
                        msg+='<b><span style="color: #000;">' + '[' + codErr + '] ' + desErr + '</span></b>';
                        msg+='</div>';

                        $('#warningEtiPub').html(msg);
                        $('#warningEtiPub').show();
                        break;   

                    case '99':

                        var msg='<div style="text-align:center;" class="alert alert-block">';
                        msg+='<b><span style="color: #000;">' + '[' + codErr + '] ' + desErr + '</span></b>';
                        msg+='</div>';

                        $('#warningEtiPub').html(msg);
                        $('#warningEtiPub').show();
                        break;  
                    
                    case '100':

                        var msg='<div style="text-align:center;" class="alert alert-block">';
                        msg+='<b><span style="color: #000;">' + '[' + codErr + '] ' + desErr + '</span></b>';
                        msg+='</div>';

                        $('#warningEtiPub').html(msg);
                        $('#warningEtiPub').show();
                        break;  

                    case '98':

                        var msg='<div style="text-align:center;" class="alert alert-block">';
                        msg+='<b><span style="color: #000;">' + '[' + codErr + '] ' + desErr + '</span></b>';
                        msg+='</div>';

                        $('#warningEtiPub').html(msg);
                        $('#warningEtiPub').show();
                        break;     
                    
                    default:
                        
                        var datos = xmlDoc.getElementsByTagName('DATOS')[0].childNodes[0].nodeValue;
                        if(datos!='1'){
                            
                            var msg='<div style="text-align:center;" class="alert alert-block">';
                            msg+='<b><span style="color: #000;">' + '[' + codErr + '] ' + desErr + '</span></b>';
                            msg+='</div>';

                            $("#modalBody").html(msg);
                            setTimeout(function() {$('#myModal').modal('hide');}, 1500);    

                            $('#warningEtiPub').html(msg);
                            $('#warningEtiPub').show();
                            return false;
                            
                        }else{
                                                        
                            $('#cmbCat').empty();
                            $('#cmbCat').prop('disabled',false);
                            $('#cmbCat').trigger('liszt:updated'); 
                            
                            $('#cmbEti').empty();
                            $('#cmbEti').prop('disabled',false);
                            $('#cmbEti').trigger('liszt:updated'); 
                            
                            $('#poseeEti').val(0);
                            $('#etiquetasIngresadas').val(0);
                            
                            var msg='<b><span style="color: #000;">Re-etiquetado exitoso!.</span></b>';                           
                            $("#modalBody").html(msg);
                            setTimeout(function() {$('#myModal').modal('hide');}, 1500);    
                            cargaCategorias();
                            
                        }
                        break;
                }
            }
        });
                
        //alert('cargando categorías');
        $('#cmbCat').removeAttr('disabled');
        $('#cmbEti').removeAttr('disabled');
        $('#divBtnEti').hide();

    }); 
    //FIN RE-ETIQUETAR
    
    $('#typeahead').typeahead({
       source: function(query, process){
            //alert('typeahead');
            $.ajax({
                url: URLprotocol+"//"+URLdomain+"/bodyflex/Publicaciones/model/publicacionCategoriasEtiquetaJSONConsultaModel.php",
                type: 'POST',
                data: 'query=' + query,
                dataType: 'JSON',
                async: true,
                success: function(data){
                    process(data);
                }
            });
       }
    });
    
    $('#typeaheadEti').typeahead({
       source: function(query, process){
             var parametros = { 
                "cat" : $('#cmbSelCat').val(),
                "eti": $('#typeaheadEti').val()
            };     
            $.ajax({
                url: URLprotocol+"//"+URLdomain+"/bodyflex/Publicaciones/model/publicacionEtiquetaJSONConsultaModel.php",
                type: 'POST',
                data: parametros,
                dataType: 'JSON',
                async: true,
                success: function(data){
                    process(data);
                }
            });
       }
    });

    
    $('#btnGuardarCat').click(function(){
        
        var strModal='';
        var cat = $('#typeahead').val();

        $('#myModal').html('');
        if(cat.length>0){
           
            strModal+='<div class="modal-header">';
                strModal+='<button type="button" class="close" data-dismiss="modal">×</button>';
                strModal+='<h3><i class="fa fa-exclamation-triangle"></i>&nbsp;Agregar categoría</h3>';
            strModal+='</div>';
            strModal+='<div class="modal-body" id="modalBody">';
                strModal+='¿Desea agregar categoría <b>' + cat + '</b> al listado de categorías?';
            strModal+='</div>';
            strModal+='<div class="modal-footer">';
                strModal+='<a class="btn" data-dismiss="modal"><i class="fa fa-minus-circle"></i>&nbsp;Cancelar</a>';
                strModal+='<a id="btnAgrCat" style="border-color: silver; background-color: #FFCC00; color: black; font-weight: bold;" class="btn btn-primary"><i class="fa fa-plus-circle"></i>&nbsp;Agregar</a>';
            strModal+='</div>';

            $('#myModal').html(strModal);
            $('#myModal').show();
            
        }else{
            
            strModal+='<div class="modal-header">';
                strModal+='<button type="button" class="close" data-dismiss="modal">×</button>';
                strModal+='<h3><i class="fa fa-exclamation-triangle"></i>&nbsp;Agregar categoría</h3>';
            strModal+='</div>';
            strModal+='<div class="modal-body" id="modalBody">';
                strModal+='Para agregar debes <b>escribir</b> una nueva categoría.';
            strModal+='</div>';
            strModal+='<div class="modal-footer">';
                strModal+='<a class="btn btn-primary" style="border-color: silver; background-color: #FFCC00; color: black; font-weight: bold;" data-dismiss="modal"><i class="fa fa-plus-circle"></i>&nbsp;Aceptar</a>';
            strModal+='</div>';

            $('#myModal').html(strModal);
            $('#myModal').show();
            
        }
                
    });   
    
    
    $(document).on("click", "#btnAgrCat", function(event){

        var rut = $('#rut').val(); 
        var cat = $('#typeahead').val(); 

        //alert('rut ' + rut);
        //alert('cat ' + cat);

        //Div de Carga
        var strLoad='<div id="espera" class="modal-body"></div>';
                
        //AJAX
            var parametros = { "rut" : rut, "cat" : cat };            

            $.ajax({
                    data:  parametros,
                    url: URLprotocol+"//"+URLdomain+"/bodyflex/Publicaciones/model/publicacionCategoriasEtiquetaAgregaModel.php",
                    type:  'post',
                    datetype: 'xml',
                    beforeSend: function(){
                        $("#modalBody").html(strLoad);
                    },
                    success:  function (xml){     
                    
                    //alert(xml);
                    
                    var xmlDoc = $.parseXML(xml), $xml = $(xmlDoc);
                    var codErr = xmlDoc.getElementsByTagName('CODERROR')[0].childNodes[0].nodeValue;
                    var desErr = xmlDoc.getElementsByTagName('DESERROR')[0].childNodes[0].nodeValue;
                    
                    switch(codErr){
                        case '9':

                            var msg='<b><span style="color: #000;">' + '[' + codErr + '] ' + desErr + '</span></b>';                        
                            $("#modalBody").html(msg);
                            setTimeout(function() {$('#myModal').modal('hide');}, 1000); 
                            break;
                        
                        case '8':

                            var msg='<b><span style="color: #000;">' + '[' + codErr + '] ' + desErr + '</span></b>';
                            $("#modalBody").html(msg);
                            setTimeout(function() {$('#myModal').modal('hide');}, 1000); 
                            break;
                        
                        case '99':

                            var msg='<b><span style="color: #000;">' + '[' + codErr + '] ' + desErr + '</span></b>';
                            $("#modalBody").html(msg);
                            setTimeout(function() {$('#myModal').modal('hide');}, 1000); 
                            break;
                            
                        case '100':

                            var msg='<b><span style="color: #000;">' + '[' + codErr + '] ' + desErr + '</span></b>';
                            $("#modalBody").html(msg);
                            setTimeout(function() {$('#myModal').modal('hide');}, 1000); 
                            break;    
                        
                        case '98':

                            var msg='<b><span style="color: #000;">' + '[' + codErr + '] ' + desErr + '</span></b>';
                            $("#modalBody").html(msg);
                            setTimeout(function() {$('#myModal').modal('hide');}, 1000); 
                            break;
                        
                        default:

                            var msg='<b><span style="color: #000;">Categoría agregada exitosamente!</span></b>';
                            $("#modalBody").html(msg);
                            
                            //limpiamos input
                            $('#typeahead').val('');
                            
                            setTimeout(function() {$('#myModal').modal('hide');}, 1000); 
                            cargaCategorias(); 
                            
                            break;  
                }              
            }
        });
    });
    
    
    $('#btnEliminarCatX').click(function(){
        $('#myModal').html('');
        
        var strModal='';
        var cat = $('#cmbAgrCat').val();
        
        //alert('cat ' + cat);
        if(cat!='(SELECCIONE)'){
            
            strModal+='<div class="modal-header">';
                strModal+='<button type="button" class="close" data-dismiss="modal">×</button>';
                strModal+='<h3><i class="fa fa-exclamation-triangle"></i>&nbsp;Eliminar categoría</h3>';
            strModal+='</div>';
            strModal+='<div class="modal-body" id="modalBody">';
                strModal+='¿Desea eliminar categoría <b>' + cat + '</b> al listado de categorías?';
            strModal+='</div>';
            strModal+='<div class="modal-footer">';
                strModal+='<a class="btn" data-dismiss="modal">Cancelar</a>';
                strModal+='<a id="btnEliCat" style="border-color: silver; background-color: #FFCC00; color: black; font-weight: bold;" class="btn btn-primary"><i class="fa fa-minus-circle"></i>&nbsp;Eliminar</a>';
            strModal+='</div>';
            
            $('#myModal').html(strModal);
            $('#myModal').show();
            
        }else{
            
            strModal+='<div class="modal-header">';
                strModal+='<button type="button" class="close" data-dismiss="modal">×</button>';
                strModal+='<h3><i class="fa fa-exclamation-triangle"></i>&nbsp;Eliminar categoría</h3>';
            strModal+='</div>';
            strModal+='<div style="text-align: center;" class="modal-body" id="modalBody">';
                strModal+='<p>Para eliminar debes seleccionar una <b>categoría</b> del listado de cagerorías, <br>recuerda que sólo el <b>propietario</b> puede eliminar.</p>';
            strModal+='</div>';
            strModal+='<div class="modal-footer">';
                strModal+='<a data-dismiss="modal" style="border-color: silver; background-color: #FFCC00; color: black; font-weight: bold;" class="btn btn-primary">Aceptar</a>';
            strModal+='</div>';
            
            $('#myModal').html(strModal);
            $('#myModal').show();
        }
        
    });   
    
  
    $(document).on("click", "#btnEliCat", function(event){

        var rut = $('#rut').val(); 
        var cat = $('#cmbAgrCat').val(); 

        //Div de Carga
        var strLoad='<div id="espera" class="modal-body"></div>';
                
        //AJAX
        var parametros = { "rut" : rut, "cat" : cat };            
        
            $.ajax({
                data:  parametros,
                url: URLprotocol+"//"+URLdomain+"/bodyflex/Publicaciones/model/publicacionCategoriasEtiquetaEliminaModel.php",
                type:  'post',
                datetype: 'xml',
                async: true,
                beforeSend: function(){
                    $("#modalBody").html(strLoad);
                },
                success:  function(xml){     
                
                var xmlDoc = $.parseXML(xml), $xml = $(xmlDoc);
                var codErr = xmlDoc.getElementsByTagName('CODERROR')[0].childNodes[0].nodeValue;
                var desErr = xmlDoc.getElementsByTagName('DESERROR')[0].childNodes[0].nodeValue;
                
                switch(codErr){
                    case '9':
                            
                        var msg='<b><span style="color: #000; text-align:center;">' + '[' + codErr + '] ' + desErr + '</span></b>';
                        $("#modalBody").html(msg);
                        break;
                        
                    case '8':

                        var msg='<b><span style="color: #000; text-align:center;">' + '[' + codErr + '] ' + desErr + '</span></b>';
                        $("#modalBody").html(msg);
                        break;
                    
                    case '99':

                        var msg='<b><span style="color: #000; text-align:center;">' + '[' + codErr + '] ' + desErr + '</span></b>';
                        $("#modalBody").html(msg);
                        break;
                        
                    case '100':

                        var msg='<b><span style="color: #000; text-align:center;">' + '[' + codErr + '] ' + desErr + '</span></b>';
                        $("#modalBody").html(msg);
                        break;    
                    
                    case '98':

                        var msg='<b><span style="color: #000; text-align:center;">' + '[' + codErr + '] ' + desErr + '</span></b>';
                        $("#modalBody").html(msg);
                        break;
                    
                    case '97':

                        var msg='<span style="font-weight: bold; color: black; text-align:center;">' + '[' + codErr + '] ' + desErr + '</span>';
                        $("#modalBody").html(msg);
                        break;    
                    
                    case '96':

                        var msg='<b><span style="color: #000; text-align:center;">' + '[' + codErr + '] ' + desErr + '</span></b>';
                        $("#modalBody").html(msg);
                        break;    
                    
                    case '95':

                        var msg='<b><span style="color: #000; text-align:center;">' + '[' + codErr + '] ' + desErr + '</span></b>';
                        $("#modalBody").html(msg);
                        break;    
                    
                    default:
                        
                        cargaCategorias();                  
                        var msg='<b><span style="color: #000; text-align:center;">Eliminación exitosa!</span></b>';
                        $("#modalBody").html(msg);
                        setTimeout(function() {$('#myModal').modal('hide');}, 1500); 
                        break;  
                        
                }              
            }
        });
    });
    
    $('#btnGuardarEti').click(function(){
        $('#myModal').html('');
        
        var strModal='';
        var cat = $('#cmbSelCat').val();
        var eti = $('#typeaheadEti').val();

        if(cat=='(SELECCIONE)'){
            
            strModal+='<div class="modal-header">';
                strModal+='<button type="button" class="close" data-dismiss="modal">×</button>';
                strModal+='<h3><i class="fa fa-exclamation-triangle"></i>&nbsp;Agregar etiqueta a categoría</h3>';
            strModal+='</div>';
            strModal+='<div class="modal-body" id="modalBody">';
                strModal+='Para agregar <b>etiqueta</b> debe seleccionar una <b>categoría</b>';
            strModal+='</div>';
            strModal+='<div class="modal-footer">';
                strModal+='<a data-dismiss="modal" style="border-color: silver; background-color: #FFCC00; color: black; font-weight: bold;" class="btn btn-primary">Aceptar</a>';
            strModal+='</div>';
            
            $('#myModal').html(strModal);
            $('#myModal').show();
            
        }else{
            
            //EVALUAMOS ETIQUETAS
            if(eti.length<=0){
                
                strModal+='<div class="modal-header">';
                strModal+='<button type="button" class="close" data-dismiss="modal">×</button>';
                strModal+='<h3><i class="fa fa-exclamation-triangle"></i>&nbsp;Agregar etiqueta a categoría</h3>';
                strModal+='</div>';
                strModal+='<div class="modal-body" id="modalBody">';
                    strModal+='Para agregar debe escribir una <b>etiqueta</b>';
                strModal+='</div>';
                strModal+='<div class="modal-footer">';
                    strModal+='<a data-dismiss="modal" style="border-color: silver; background-color: #FFCC00; color: black; font-weight: bold;" class="btn btn-primary">Aceptar</a>';
                strModal+='</div>';

                $('#myModal').html(strModal);
                $('#myModal').show();
                
            }else{
                
                strModal+='<div class="modal-header">';
                    strModal+='<button type="button" class="close" data-dismiss="modal">×</button>';
                    strModal+='<h3><i class="fa fa-exclamation-triangle"></i>&nbsp;Agregar etiqueta a categoría</h3>';
                strModal+='</div>';
                strModal+='<div class="modal-body" id="modalBody">';
                    strModal+='¿Desea agregar etiqueta <b>' + eti + '</b> a la categoría <b>' + cat + '</b>?';
                strModal+='</div>';
                strModal+='<div class="modal-footer">';
                    strModal+='<a class="btn" data-dismiss="modal">Cancelar</a>';
                    strModal+='<a id="btnAgrEti" style="border-color: silver; background-color: #FFCC00; color: black; font-weight: bold;" class="btn btn-primary"><i class="fa fa-plus-circle"></i>&nbsp;Agregar</a>';
                strModal+='</div>';

                $('#myModal').html(strModal);
                $('#myModal').show();
                
            }
            
        }
        
    });   
    
    $(document).on("click", "#btnAgrEti", function(event){

        var rut = $('#rut').val(); 
        var cat = $('#cmbSelCat').val();
        var eti = $('#typeaheadEti').val();

        //Div de Carga
        var strLoad='<div id="espera" class="modal-body"></div>';
                
        //AJAX
        var parametros = { "rut" : rut, "cat" : cat, "eti" : eti };            
        $.ajax({
                data:  parametros,
                url: URLprotocol+"//"+URLdomain+"/bodyflex/Publicaciones/model/publicacionEtiquetaAgregaModel.php",
                type:  'post',
                datetype: 'xml',
                async: true,
                beforeSend: function(){
                    $("#modalBody").html(strLoad);
                },
                success:  function (xml){     

                var xmlDoc = $.parseXML(xml), $xml = $(xmlDoc);
                var codErr = xmlDoc.getElementsByTagName('CODERROR')[0].childNodes[0].nodeValue;
                var desErr = xmlDoc.getElementsByTagName('DESERROR')[0].childNodes[0].nodeValue;

                switch(codErr){
                    case '9':

                        var msg='<b><span style="color: #000;">' + '[' + codErr + '] ' + desErr + '</span></b>';
                        $("#warningEti").html(msg);
                        $("#modalBody").html(msg);
                        setTimeout(function() {$('#myModal').modal('hide');}, 1500); 
                        break;

                    case '8':

                        var msg='<b><span style="color: #000;">' + '[' + codErr + '] ' + desErr + '</span></b>';
                        $("#warningEti").html(msg);
                        $("#modalBody").html(msg);
                        setTimeout(function() {$('#myModal').modal('hide');}, 1500); 
                        break;

                    case '99':

                        var msg='<b><span style="color: #000;">' + '[' + codErr + '] ' + desErr + '</span></b>';
                        $("#warningEti").html(msg);
                        $("#modalBody").html(msg);
                        setTimeout(function() {$('#myModal').modal('hide');}, 1500); 
                        break;

                    case '100':

                        var msg='<b><span style="color: #000;">' + '[' + codErr + '] ' + desErr + '</span></b>';
                        $("#warningEti").html(msg);
                        $("#modalBody").html(msg);
                        setTimeout(function() {$('#myModal').modal('hide');}, 1500); 
                        break;    

                    case '98':

                        var msg='<b><span style="color: #000;">' + '[' + codErr + '] ' + desErr + '</span></b>';
                        $("#warningEti").html(msg);
                        $("#modalBody").html(msg);
                        setTimeout(function() {$('#myModal').modal('hide');}, 1500); 
                        break;

                    default:

                        var msg='<b><span style="color: #000;">Etiqueta ingresada exitosamente!</span></b>';
                        $("#warningEti").html('');
                        $("#modalBody").html(msg);
                        setTimeout(function() {$('#myModal').modal('hide');}, 1500); 
                        consultaEtiquetasPorCategoria();    
                        break;  
            }              
        }
    });
    });
    
    $('#btnEliminarEtiX').click(function(){
        $('#myModal').html('');
                
        var strModal='';
        var eti = $('#cmbSelEti').val();
        var cat = $('#cmbSelCat').val();
        
        if(cat=='(SELECCIONE)'){
            
            strModal+='<div class="modal-header">';
            strModal+='<button type="button" class="close" data-dismiss="modal">×</button>';
            strModal+='<h3><i class="fa fa-exclamation-triangle"></i>&nbsp;Eliminar etiqueta</h3>';
            strModal+='</div>';
            strModal+='<div class="modal-body" id="modalBody">';
                strModal+='Para eliminar <b>etiqueta</b> debe seleccionar una <b>categoría.</b>';
            strModal+='</div>';
            strModal+='<div class="modal-footer">';
                strModal+='<a data-dismiss="modal" style="border-color: silver; background-color: #FFCC00; color: black; font-weight: bold;" class="btn btn-primary">Aceptar</a>';
            strModal+='</div>';

            $('#myModal').html(strModal);
            $('#myModal').show();
        
        }else{
            //EVALUAMOS ETIQUETA
            if(eti=='(SELECCIONE)'){
                
                strModal+='<div class="modal-header">';
                strModal+='<button type="button" class="close" data-dismiss="modal">×</button>';
                strModal+='<h3><i class="fa fa-exclamation-triangle"></i>&nbsp;Eliminar etiqueta</h3>';
                strModal+='</div>';
                strModal+='<div class="modal-body" id="modalBody">';
                    strModal+='Para eliminar debe seleccionar una <b>etiqueta</b>';
                strModal+='</div>';
                strModal+='<div class="modal-footer">';
                    strModal+='<a data-dismiss="modal" style="border-color: silver; background-color: #FFCC00; color: black; font-weight: bold;" class="btn btn-primary">Aceptar</a>';
                strModal+='</div>';

                $('#myModal').html(strModal);
                $('#myModal').show();
                
            }else{
                
                strModal+='<div class="modal-header">';
                    strModal+='<button type="button" class="close" data-dismiss="modal">×</button>';
                    strModal+='<h3><i class="fa fa-exclamation-triangle"></i>&nbsp;Eliminar etiqueta</h3>';
                strModal+='</div>';
                strModal+='<div class="modal-body" id="modalBody">';
                    strModal+='¿Desea eliminar la etiqueta <b>' + eti + '</b> de la categoría <b>' + cat + '</b>';
                strModal+='</div>';
                strModal+='<div class="modal-footer">';
                    strModal+='<a class="btn" data-dismiss="modal"><i class="fa fa-times"></i>&nbsp;Cancelar</a>';
                    strModal+='<a id="btnEliEti" style="border-color: silver; background-color: #FFCC00; color: black; font-weight: bold;" class="btn btn-primary"><i class="fa fa-minus-circle"></i>&nbsp;Eliminar</a>';
                strModal+='</div>';

                $('#myModal').html(strModal);
                $('#myModal').show();
                
            }
            
        }

    });   
    
    $(document).on("click", "#btnEliEti", function(event){

        var rut = $('#rut').val(); 
        var cat = $('#cmbSelCat').val(); 
        var eti = $('#cmbSelEti').val();

        //Div de Carga
        var strLoad='<div id="espera" class="modal-body"></div>';
                
        //AJAX
        var parametros = { "rut" : rut, "cat" : cat, "eti" : eti };            

            $.ajax({
                data:  parametros,
                url: URLprotocol+"//"+URLdomain+"/bodyflex/Publicaciones/model/publicacionEtiquetaEliminaModel.php",
                type:  'post',
                datetype: 'xml',
                async: true,
                beforeSend: function(){
                    $("#modalBody").html(strLoad);
                },
                success:  function (xml){     
                
                //alert(xml);
                
                var xmlDoc = $.parseXML(xml), $xml = $(xmlDoc);
                var codErr = xmlDoc.getElementsByTagName('CODERROR')[0].childNodes[0].nodeValue;
                var desErr = xmlDoc.getElementsByTagName('DESERROR')[0].childNodes[0].nodeValue;
                
                switch(codErr){
                    case '9':

                        var msg='<div style="text-align:center;" class="alert alert-block">';
                        msg+='<b><span style="color: #000;">' + '[' + codErr + '] ' + desErr + '</span></b>';
                        msg+='</div>'; 
                        var msg2='<b><span style="color: #000;">' + '[' + codErr + '] ' + desErr + '</span></b>';
                        $('#warningEti').html(msg);
                        $("#modalBody").html(msg2);
                        setTimeout(function() {$('#myModal').modal('hide');}, 1000); 
                        break;
                        
                    case '8':

                        var msg='<div style="text-align:center;" class="alert alert-block">';
                        msg+='<b><span style="color: #000;">' + '[' + codErr + '] ' + desErr + '</span></b>';
                        msg+='</div>'; 
                        var msg2='<b><span style="color: #000;">' + '[' + codErr + '] ' + desErr + '</span></b>';
                        $('#warningEti').html(msg);
                        $("#modalBody").html(msg2);
                        setTimeout(function() {$('#myModal').modal('hide');}, 1000); 
                        break;
                    
                    case '99':

                        var msg='<div style="text-align:center;" class="alert alert-block">';
                        msg+='<b><span style="color: #000;">' + '[' + codErr + '] ' + desErr + '</span></b>';
                        msg+='</div>'; 
                        var msg2='<b><span style="color: #000;">' + '[' + codErr + '] ' + desErr + '</span></b>';
                        $('#warningEti').html(msg);
                        $("#modalBody").html(msg2);
                        setTimeout(function() {$('#myModal').modal('hide');}, 1000); 
                        break;
                    
                    case '100':

                        var msg='<div style="text-align:center;" class="alert alert-block">';
                        msg+='<b><span style="color: #000;">' + '[' + codErr + '] ' + desErr + '</span></b>';
                        msg+='</div>'; 
                        var msg2='<b><span style="color: #000;">' + '[' + codErr + '] ' + desErr + '</span></b>';
                        $('#warningEti').html(msg);
                        $("#modalBody").html(msg2);
                        setTimeout(function() {$('#myModal').modal('hide');}, 1000); 
                        break;    
                        
                    case '97':

                        var msg='<div style="text-align:center;" class="alert alert-block">';
                        msg+='<b><span style="color: #000;">' + '[' + codErr + '] ' + desErr + '</span></b>';
                        msg+='</div>'; 
                        var msg2='<b><span style="color: #000;">' + '[' + codErr + '] ' + desErr + '</span></b>';
                        $('#warningEti').html(msg);
                        $("#modalBody").html(msg2);
                        setTimeout(function() {$('#myModal').modal('hide');}, 1000); 
                        break;    
                        
                    case '96':

                        var msg='<div style="text-align:center;" class="alert alert-block">';
                        msg+='<b><span style="color: #000;">' + '[' + codErr + '] ' + desErr + '</span></b>';
                        msg+='</div>'; 
                        var msg2='<b><span style="color: #000;">' + '[' + codErr + '] ' + desErr + '</span></b>';
                        $('#warningEti').html(msg);
                        $("#modalBody").html(msg2);
                        setTimeout(function() {$('#myModal').modal('hide');}, 1000); 
                        break;        
                        
                    default:
                        
                        var msg='<div style="text-align:center;" class="alert alert-success">';
                        msg+='<b><span style="color: #000;">' + '[' + codErr + '] ' + desErr + '</span></b>';
                        msg+='</div>';    
                        var msg2='<b><span style="color: #000;">Etiqueta eliminada exitosamente!.</span></b>';    
                        $("#modalBody").html(msg2);
                        setTimeout(function() {$('#myModal').modal('hide');}, 1000); 
                        consultaEtiquetasPorCategoria();  
                        break;  
                }              
            }
        });
    });
    
    
    
    $( "#cmbSelCat" ).change(function() {
        
        $('#cmbSelEti').empty();
        $('#cmbSelEti').trigger('liszt:updated');
        
        if($('#cmbSelCat').val()!='(SELECCIONE)'){
            var parametros = {
                            "cat" : $('#cmbSelCat').val(),
                            "eti" : ''
                        };            
            $.ajax({
                data:  parametros,
                url: URLprotocol+"//"+URLdomain+"/bodyflex/Publicaciones/model/publicacionEtiquetaConsultaModel.php",
                type:  'post',
                datetype: 'xml',
                async: true,
                success:  function (xml){

                //alert(xml);

                var xmlDoc = $.parseXML(xml), $xml = $(xmlDoc);
                var codErr = xmlDoc.getElementsByTagName('CODERROR')[0].childNodes[0].nodeValue;
                var desErr = xmlDoc.getElementsByTagName('DESERROR')[0].childNodes[0].nodeValue;

                switch(codErr){
                    case '9':

                        var msg='<div style="text-align:center;" class="alert alert-block">';
                        msg+='<b><span style="color: #000;">' + '[' + codErr + '] ' + desErr + '</span></b>';
                        msg+='</div>';                    

                        $("#warningEti").html(msg);
                        break;   

                    case '8':

                        var msg='<div style="text-align:center;" class="alert alert-block">';
                        msg+='<b><span style="color: #000;">' + '[' + codErr + '] ' + desErr + '</span></b>';
                        msg+='</div>';              

                        $("#warningEti").html(msg);
                        break;   

                    case '99':

                        var msg='<div style="text-align:center;" class="alert alert-block">';
                        msg+='<b><span style="color: #000;">' + '[' + codErr + '] ' + desErr + '</span></b>';
                        msg+='</div>';                

                        $("#warningEti").html(msg);
                        break;   
                        
                    case '100':

                        var msg='<div style="text-align:center;" class="alert alert-block">';
                        msg+='<b><span style="color: #000;">' + '[' + codErr + '] ' + desErr + '</span></b>';
                        msg+='</div>';                

                        $("#warningEti").html(msg);
                        break;       

                    case '98':

                        var msg='<div style="text-align:center;" class="alert alert-block">';
                        msg+='<b><span style="color: #000;">' + '[' + codErr + '] ' + desErr + '</span></b>';
                        msg+='</div>';                  

                        $("#warningEti").html(msg);
                        break;   

                    default:

                        var val;
                        $('#cmbSelEti').empty();
                        $('#cmbSelEti').append($('<option>', {value:'(SELECCIONE)', text:'(SELECCIONE)'}));
                        //AGREGAMOS PRODUCTO DE CONSULTA             
                            $xml.find('REGISTRO').each(function () {
                                val=$(this).text().replace(/(^\s*)|(\s*$)/g,"");
                                if(val.length>0){
                                    $('#cmbSelEti').append($('<option>', {value:val, text:val}));
                                }
                            });     
                        //AGREGAMOS PRODUCTO DE CONSULTA     
                        $('#cmbSelEti').trigger('liszt:updated');
                        $('#warningEti').html('');
                        break;

                    }
                }
            }); 
        }else{
            $('#cmbSelEti').empty();
            $('#cmbSelEti').trigger('liszt:updated');
        }    
            
            
    });
    
});

function cargaCategorias(){
    var URLdomain   = window.location.host;
    var URLprotocol = window.location.protocol;
    
        $.ajax({
                url: URLprotocol+"//"+URLdomain+"/bodyflex/Publicaciones/model/publicacionCategoriasEtiquetaConsultaModel.php",
                type:  'post',
                datetype: 'xml',
                async: true,
                success:  function (xml){
                               
                //alert(xml);    
                    
                var xmlDoc = $.parseXML(xml), $xml = $(xmlDoc);
                var codErr = xmlDoc.getElementsByTagName('CODERROR')[0].childNodes[0].nodeValue;
                var desErr = xmlDoc.getElementsByTagName('DESERROR')[0].childNodes[0].nodeValue;
                                
                //alert('codErr ' + codErr);
                
                switch(codErr){
                    case '9':

                        var msg='<div style="text-align:center;">';
                        msg+='<b><span style="color: #000;">' + '[' + codErr + '] ' + desErr + '</span></b>';
                        msg+='</div>';
                        $("#warningCat").html(msg);
                        break;   
                    
                    case '8':

                        var msg='<div style="text-align:center;">';
                        msg+='<b><span style="color: #000;">' + '[' + codErr + '] ' + desErr + '</span></b>';
                        msg+='</div>';
                        $("#warningCat").html(msg);
                        break;     
                    
                    case '99':

                        var msg='<div style="text-align:center;">';
                        msg+='<b><span style="color: #000;">' + '[' + codErr + '] ' + desErr + '</span></b>';
                        msg+='</div>';
                        $("#warningCat").html(msg);
                        break;     
                     
                    case '100':

                        var msg='<div style="text-align:center;">';
                        msg+='<b><span style="color: #000;">' + '[' + codErr + '] ' + desErr + '</span></b>';
                        msg+='</div>';
                        $("#warningCat").html(msg);
                        break;         
                        
                    case '98':

                        var msg='<div style="text-align:center;">';
                        msg+='<b><span style="color: #000;">' + '[' + codErr + '] ' + desErr + '</span></b>';
                        msg+='</div>';
                        $("#warningCat").html(msg);
                        break;     
                    
                    default:
                        
                        var strVal;
                        
                        $('#cmbAgrCat').empty();
                        $('#cmbSelCat').empty();
                        $('#cmbCat').empty();
                      
                        $('#cmbAgrCat').append($('<option>', {value:'(SELECCIONE)', text:'(SELECCIONE)'}));
                        $('#cmbSelCat').append($('<option>', {value:'(SELECCIONE)', text:'(SELECCIONE)'}));
                        $('#cmbCat').append($('<option>', {value:'(SELECCIONE)', text:'(SELECCIONE)'}));
                        
                        $xml.find('REGISTRO').each(function () {
                            strVal=$(this).text().replace(/(^\s*)|(\s*$)/g,"");
                            if(strVal.length>0){
                                $('#cmbAgrCat').append($('<option>', {value:strVal, text:strVal}));
                                $('#cmbSelCat').append($('<option>', {value:strVal, text:strVal}));
                                $('#cmbCat').append($('<option>', {value:strVal, text:strVal}));
                            }
                        });
                        
                        $('#cmbAgrCat').trigger('liszt:updated');
                        $('#cmbSelCat').trigger('liszt:updated');
                        $('#cmbCat').trigger('liszt:updated');
                        break;

                }
            }
        });
    }
    
    function cargaEtiquetas(){
        
        var URLdomain   = window.location.host;
        var URLprotocol = window.location.protocol;
        
        var parametros = {"cat" : ''};            
        $.ajax({
            data:  parametros,
            url: URLprotocol+"//"+URLdomain+"/bodyflex/Publicaciones/model/publicacionEtiquetaConsultaModel.php",
            type:  'post',
            datetype: 'xml',
            async: true,
            success:  function (xml){
            
            //alert('publicacionEtiquetaConsultaModel ' + xml);
            
            var xmlDoc = $.parseXML(xml), $xml = $(xmlDoc);
            var codErr = xmlDoc.getElementsByTagName('CODERROR')[0].childNodes[0].nodeValue;
            var desErr = xmlDoc.getElementsByTagName('DESERROR')[0].childNodes[0].nodeValue;
                
            switch(codErr){
                case '9':

                    var msg='<div style="text-align:center;">';
                    msg+='<b><span style="color: #000;">Error: No es posible conectar con base de datos.</span></b>';
                    msg+='</div>';                
                    $("#divMantEtiquetas").html(msg);
                    break;   
                
                case '8':

                    var msg='<div style="text-align:center;">';
                    msg+='<b><span style="color: #000;">Error: Procedimiento no retorna datos.</span></b>';
                    msg+='</div>';
                    $("#divMantEtiquetas").html(msg);
                    break;   
                
                case '99':

                    var msg='<div style="text-align:center;">';
                    msg+='<b><span style="color: #000;">'+ desErr +'</span></b>';
                    msg+='</div>';
                    $("#divMantEtiquetas").html(msg);
                    break;   
                
                case '100':

                    var msg='<div style="text-align:center;">';
                    msg+='<b><span style="color: #000;">'+ desErr +'</span></b>';
                    msg+='</div>';
                    $("#divMantEtiquetas").html(msg);
                    break;   
                
                default:
                
                    $('#cmbSelEti').empty();
                    $('#cmbEti').empty();
                    
                    var strVal;
                    $('#cmbSelEti').append($('<option>', {value:'(SELECCIONE)', text:'(SELECCIONE)'}));
                    $xml.find('REGISTRO').each(function () {        
                        strVal=$(this).text().replace(/(^\s*)|(\s*$)/g,"");
                        if(strVal.length>0){
                            $('#cmbSelEti').append($('<option>', {value:strVal, text:strVal}));
                        }
                    });
                    $('#cmbSelEti').trigger('liszt:updated');
                    break;
                }
            }
        });  
    }
    
    
    function consultaEtiquetasPorCategoria(){
        
        var URLdomain   = window.location.host;
        var URLprotocol = window.location.protocol;
                
        var cat = $('#cmbSelCat').val();
        var parametros2 = {
                            "rut" : '',
                            "cat" : cat,
                            "eti" : ''
                        };       

        $.ajax({
            data:  parametros2,
            url: URLprotocol+"//"+URLdomain+"/bodyflex/Publicaciones/model/publicacionEtiquetaConsultaModel.php",
            type:  'post',
            datetype: 'xml',
            async: true,
            success:  function (xml){

            var xmlDoc = $.parseXML(xml), $xml = $(xmlDoc);
            var codErr = xmlDoc.getElementsByTagName('CODERROR')[0].childNodes[0].nodeValue;
            var desErr = xmlDoc.getElementsByTagName('DESERROR')[0].childNodes[0].nodeValue;

            switch(codErr){
                case '9':

                    var msg='<div style="text-align:center;">';
                    msg+='<b><span style="color: #000;">' + '[' + codErr + '] ' + desErr + '</span></b>';
                    msg+='</div>';       
                    $("#warningEti").html(msg);
                    break;   

                case '8':

                    var msg='<div style="text-align:center;">';
                    msg+='<b><span style="color: #000;">' + '[' + codErr + '] ' + desErr + '</span></b>';
                    msg+='</div>';              
                    $("#warningEti").html(msg);
                    break;       

                case '99':

                    var msg='<div style="text-align:center;">';
                    msg+='<b><span style="color: #000;">' + '[' + codErr + '] ' + desErr + '</span></b>';
                    msg+='</div>';               
                    $("#warningEti").html(msg);
                    break;    

                case '100':

                    var msg='<div style="text-align:center;">';
                    msg+='<b><span style="color: #000;">' + '[' + codErr + '] ' + desErr + '</span></b>';
                    msg+='</div>';               
                    $("#warningEti").html(msg);
                    break;     

                case '98':

                    var msg='<div style="text-align:center;">';
                    msg+='<b><span style="color: #000;">' + '[' + codErr + '] ' + desErr + '</span></b>';
                    msg+='</div>';                  

                    //LIMPIAMOS COMBO
                    $('#cmbSelEti').empty();
                    $('#cmbSelEti').trigger('liszt:updated');
                    $("#warningEti").html(msg);
                    break;    

                default:

                    var cat;
                    var val;

                    $('#cmbSelEti').empty();
                    $('#cmbSelEti').append($('<option>', {value:'(SELECCIONE)', text:'(SELECCIONE)'}));
                    
                    //AGREGAMOS PRODUCTO DE CONSULTA             
                    $xml.find('REGISTRO').each(function () {
                        val=$(this).text().replace(/(^\s*)|(\s*$)/g,"");
                        cat = $('#cmbCat').val() + '|' + val; 
                        if(val.length>0){
                            $('#cmbSelEti').append($('<option>', {value:val, text:val}));
                        }
                    });    

                    $('#cmbSelEti').trigger('liszt:updated');
                    
                    //Limpiamos imput
                    $('#typeaheadEti').val('');
                    break;

                }
            }
        });  
        
    }
    
    function cargaEtiquetasXCategoriaAlEliminar(cat, etiDel){
    //ESTA FUNCION SOLO SE EJECUTA AL ELIMINAR UNA ETIQUETA ASOCIADA A LA PUBLICACIÓN    
    // etiDel = ETIQUETA ELIMINADA    
                
        var URLdomain   = window.location.host;
        var URLprotocol = window.location.protocol;
        
        var parametros2 = { "cat" : cat };       

        $.ajax({
            data:  parametros2,
            url: URLprotocol+"//"+URLdomain+"/bodyflex/Publicaciones/model/publicacionObtieneEtiquetasCategoria.php",
            type:  'post',
            datetype: 'xml',
            async: true,
            success:  function (xml){

            var xmlDoc = $.parseXML(xml), $xml = $(xmlDoc);
            var codErr = xmlDoc.getElementsByTagName('CODERROR')[0].childNodes[0].nodeValue;
            var desErr = xmlDoc.getElementsByTagName('DESERROR')[0].childNodes[0].nodeValue;

            switch(codErr){
                case '9':

                    var msg='<div style="text-align:center;">';
                    msg+='<b><span style="color: #000;">' + '[' + codErr + '] ' + desErr + '</span></b>';
                    msg+='</div>';      
                    $("#warningEtiPub").html(msg);
                    break;   

                case '8':

                    var msg='<div style="text-align:center;">';
                    msg+='<b><span style="color: #000;">' + '[' + codErr + '] ' + desErr + '</span></b>';
                    msg+='</div>';               
                    $("#warningEtiPub").html(msg);
                    break;       

                case '99':

                    var msg='<div style="text-align:center;">';
                    msg+='<b><span style="color: #000;">' + '[' + codErr + '] ' + desErr + '</span></b>';
                    msg+='</div>';               
                    $("#warningEtiPub").html(msg);
                    break;    

                case '100':

                    var msg='<div style="text-align:center;">';
                    msg+='<b><span style="color: #000;">' + '[' + codErr + '] ' + desErr + '</span></b>';
                    msg+='</div>';               
                    $("#warningEtiPub").html(msg);
                    break;        

                case '98':

                    var msg='<div style="text-align:center;">';
                    msg+='<b><span style="color: #000;">' + '[' + codErr + '] ' + desErr + '</span></b>';
                    msg+='</div>';                  
                    $("#warningEtiPub").html(msg);
                    break;    

                default:

                    //GUARDAMOS ETIQUETAS EXISTENTES Y SELECCIONADAS
                    var strElm='';
                    $("#cmbEti option:selected").each(function(){
                        strElm+=$(this).val()+'#';
                    });
                                        
                    //AGREGAMOS PRODUCTO DE CONSULTA    
                    var strCatEti='';
                    var matrix;
                    $('#cmbEti').empty();
                    $xml.find('ETIQUETA').each(function () {
                        strCatEti=$(this).text().replace(/(^\s*)|(\s*$)/g,"");
                        matrix=strCatEti.split('|');
                        if(matrix[0].length>0){ //VALIDAMOS EXIETENCIA DE CATEGORIAS
                            if(matrix[1].length>0){ //VALIDAMOS EXIETENCIA DE ETIQUETAS
                                if(matrix[1]!=etiDel){ //NO AGREGAMOS LA QUE ELIMINAMOS
                                    $('#cmbEti').append($('<option>', {value:strCatEti, text:matrix[1]}));
                                    $('#cmbEti option').prop('selected',true);
                                }
                            }
                        }
                    });
                    $('#cmbEti').trigger('liszt:updated');    
                                                     
                    //AGREGAMOS LAS ETIQUETAS RESTANTES                                 
                    var matrix2='';    
                    var matrix1=strElm.split('#');
                    $.each(matrix1, function(i, val){
                        if(matrix1[i]!=''){
                            matrix2=matrix1[i].split('|');
                            $('#cmbEti').append($('<option>', {value:matrix1[i], text:matrix2[1]}));
                            $('#cmbEti option').prop('selected',true);
                        }
                    });
                    $('#cmbEti').trigger('liszt:updated');

                    //Limpiamos imput
                    $('#typeaheadEti').val('');
                    
                    break;

                }
            }
        });  
        
    }
    
    function publicacionObtenerEtiquetasRelacionadas(){
        //UNA OPCION ES RECONSTRUIR EL COMBO Y AGREGARLO POR MEDIO DE FUNCION html
            //DETERMINA ETIQUETAS QUE ACTUALMENTE POSEE EL ARTÍCULO
                 
            var URLdomain   = window.location.host;
            var URLprotocol = window.location.protocol;  
                 
            var parametros = {"id" : $('#txtPuId').val()};          
            $.ajax({
                data:  parametros,
                url: URLprotocol+"//"+URLdomain+"/bodyflex/Publicaciones/model/publicacionConsultaEtiquetaPublicacionModel.php",
                type:  'post',
                datetype: 'xml',
                async: true,
                success:  function(xml){ 
                    
                    //alert('publicacionConsultaEtiquetaPublicacionModel ' + xml);
                    
                    var xmlDoc = $.parseXML(xml), $xml = $(xmlDoc);
                    var codErr = xmlDoc.getElementsByTagName('CODERROR')[0].childNodes[0].nodeValue;
                    var desErr = xmlDoc.getElementsByTagName('DESERROR')[0].childNodes[0].nodeValue;
                    
                    switch(codErr){
                        case '9':
                            
                            var msg='<div style="text-align:center;">';
                            msg+='<button type="button" class="close" data-dismiss="alert">×</button>';
                            msg+='<b><span style="color: #000;">' + '[' + codErr + '] ' + desErr + '</span></b>';
                            msg+='</div>';             
                            $("#warningEtiPub").html(msg);
                            break;   
                            
                        case '8':
                            
                            var msg='<div style="text-align:center;">';
                            msg+='<button type="button" class="close" data-dismiss="alert">×</button>';
                            msg+='<b><span style="color: #000;">' + '[' + codErr + '] ' + desErr + '</span></b>';
                            msg+='</div>';     
                            $("#warningEtiPub").html(msg);
                            break;       
                        
                        case '99':
                            
                            var msg='<div style="text-align:center;">';
                            msg+='<button type="button" class="close" data-dismiss="alert">×</button>';
                            msg+='<b><span style="color: #000;">' + '[' + codErr + '] ' + desErr + '</span></b>';
                            msg+='</div>';
                            $("#warningEtiPub").html(msg);
                            break;      
                        
                        case '100':
                            
                            var msg='<div style="text-align:center;">';
                            msg+='<button type="button" class="close" data-dismiss="alert">×</button>';
                            msg+='<b><span style="color: #000;">' + '[' + codErr + '] ' + desErr + '</span></b>';
                            msg+='</div>';
                            $("#warningEtiPub").html(msg);
                            break;      
                        
                        case '98':
                          
                            //SI LA PUBLICACIÓN NO POSEE REGISTROS NO HACEMOS NADA
                                //CARGAMOS COMBO CATEGORIAS
                                    cargaCategorias();

                                //INICIALIZAMOS COMBO ETIQUETAS
                                $('#cmbEti').empty();
                                $('#cmbEti').prop('disabled', false);
                                $('#cmbEti').trigger('liszt:updated');                 

                                //ESCONDEMOS BOTON DE REETIQUETADO
                                $('#divBtnEti').hide(); 
                            
                                //ESTABLECEMOS QUE NO POSEE ETIQUETAS
                                    $('#poseeEti').val(0);     
                            
                            break;

                        default:
                            
                            var strCatEti;
                            var matrix;
                  
                            //CREAMOS COMBO CON CATEGORÍA EXISTENTE             
                                $('#cmbCat').empty();                                                               
                                $("#cmbCat").attr('disabled', 'disabled');
                                $('#cmbCat').trigger('liszt:updated');      
                            
                            //CREAMOS COMBO CON ETIQUETAS EXISTENTES
                                $('#cmbEti').empty();
                                $xml.find('ETIQUETA').each(function () {
                                    strCatEti = $(this).text().replace(/(^\s*)|(\s*$)/g,"");
                                    matrix = strCatEti.split('|');
                                    if(matrix[0].length>0){ //EXISTENCIA DE CATEGORIA
                                        if(matrix[1].length>0){ //EXISTENCIA DE ETIQUETA
                                            $('#cmbEti').append($('<option>', {value:strCatEti, text:matrix[1]}));
                                            $('#cmbEti option').prop('selected',true);
                                        }
                                    }
                                });
                                
                                $("#cmbEti").attr('disabled', 'disabled');
                                $('#cmbEti').trigger('liszt:updated');    
                            
                                //MOSTRAMOS BOTON RE-ETIQUETAR
                                $('#divBtnEti').show();
                            
                                //ESTABLECEMOS QUE SI POSEE ETIQUETAS
                                    $('#poseeEti').val(1); 
                            
                            break;
                    }                    
                }
            });

    }