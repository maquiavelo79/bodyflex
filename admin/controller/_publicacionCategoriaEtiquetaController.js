
jQuery(document).ready(function() {

var URLdomain   = window.location.host;
var URLprotocol = window.location.protocol;

    //XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX    
        var rut=$('#rut').val();
    //XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX    
    
    var load='<div id="espera" class="form-actions" style="display:none;"></div>';                                            
    
    $.ajax({
            url: URLprotocol+"//"+URLdomain+"/bodyflex/admin/model/publicacionCategoriasEtiquetaConsultaModel.php",
            type:  'post',
            datetype: 'xml',
            success:  function (xml){

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
    
          
    $('#tblPublicaciones').on('click', 'tbody tr', function(event){

    var puID, puEst, puFc, puFm, puFp, puTit, puFli, puTip;

    //limpiamos mensajería
        $('#warningEtiPub').html('');
        $('#warRefPub').html('');
        $('#warningPublicacion').html('');
        $('#message').html('');

        //Obtenemos valores de campos    
            $(this).children("td").each(function(index){
                switch (index){
                    case 0:	
                            puID = $(this).text();
                            break;
                    case 1:
                            puEst = $(this).text();
                            break;
                    case 2:
                            puFc = $(this).text();
                            break;
                    case 3:
                            puFm = $(this).text();
                            break;
                    case 4:
                            puFp = $(this).text();
                            break;
                    case 5:
                            puTit = $(this).text();
                            break;
                    case 6:
                            puFli = $(this).text();
                            break;
                    case 7:
                            puTip = $(this).text();
                            break;     
                }
            });

        //asignamos valores a elementos
            $('#txtPuId').attr('value',puID);
            $('#puId').attr('value',puID);
            
            $('#txtPuEst').attr('value',puEst);
            $('#txtPuFCre').attr('value',puFc);
            $('#txtPuFMod').attr('value',puFm);
            $('#txtPuFPu').attr('value',puFp);
            $('#txtPuTit').attr('value',puTit);
            $('#txtPuFli').attr('value',puFli);

            var cont=0;
            $("#cmbTipPub option").each(function(){
                if(puTip==$(this).val()){
                    $("#cmbTipPub option[value="+puTip+"]").attr("selected",true);
                    $('#cmbTipPub').trigger('liszt:updated');
                }
                cont+=1;
            });

        //Establecemos botón
            if(puEst=='PUBLICADA'){
                var boton='<button style="border-color: silver; background-color: silver; color: black; font-weight: bold; margin-left: 10px; width: 100px;" type="button" class="btn btn-info btn-setting" onclick="modalEdicion();" id="btnPublicar">';
                boton+='<i class="fa fa-pencil-square-o"></i>&nbsp;Editar';
                boton+='</button>';
            }else{    
                var boton='<button style="border-color: silver; background-color: silver; color: black; font-weight: bold; margin-left: 10px; width: 100px;" type="button" class="btn btn-info btn-setting" onclick="publicarPublicacion();" id="btnPublicar">';
                boton+='<i class="icon-bullhorn"></i>&nbsp;Publicar';
                boton+='</button>';
            }
            
            $('#divPublicar').html(boton);
            $('#divPublicar').trigger('liszt:updated');
            
            //OBTENCIÓN
            publicacionEstablecerSesion();            
            publicacionObtenerContenidoPublicacion();        
            publicacionObtenerBajada();
            
            //VALIDACIÓN
            publicacionObtenerEtiquetasRelacionadas();
            publicacionObtenerContenido();        
            publicacionObtenerReferenciasAsociadas();

            //mostramos DIV de etiquetado
            $("#divEtiquetado").css("display", "block");
            $("#divReferencias").css("display", "block");
            $("#divImgPublicacion").css("display", "block");
            $("#divContenido").css("display", "block");

            //Pintamos Fila    
            $(this).addClass('highlight').siblings().removeClass('highlight');

            //Limpiamos alertas anteriores
            $('#warningPublicacion').hide();
            
            //VERIFICAR ELEMENTOS Y MOSTRAR MSG SI APLICA (publicacionVerificaElementosModel)
            mostrarMsgPublicacion();
            
            //EVALUAMOS ESTADO PUBLICACION PARA HABILITAR I INHABILITAR
            evaluarEstadoPublicacion(puEst);
            
    });   
       
       
    //Cuando cambia categoría deben cambiar etiquetas!!
    $("#cmbCat").change(function(){
        
        
        //alert($('#cmbCat').val());
        if($('#cmbCat').val()!='(SELECCIONE)'){        
            var parametros = {"cat" : $('#cmbCat').val()};            
            $.ajax({
                data:  parametros,
                url: URLprotocol+"//"+URLdomain+"/bodyflex/admin/model/publicacionEtiquetaConsultaModel.php",
                type:  'post',
                datetype: 'xml',
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
                    url: URLprotocol+"//"+URLdomain+"/bodyflex/admin/model/publicacionAgregaEtiquetaModel.php",
                    type:  'post',
                    datetype: 'xml',
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
                    url: URLprotocol+"//"+URLdomain+"/bodyflex/admin/model/publicacionEliminaEtiquetaModel.php",
                    type:  'post',
                    datetype: 'xml',
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
        }, 750); 
    });
    
    $('#btnReEtiquetar').click(function(){
        $('#myModal').html('');

        var strModal='';
        var id = $('#txtPuId').val();
        var tit = $('#txtPuTit').val();

            strModal+='<div class="modal-header">';
                strModal+='<button type="button" class="close" data-dismiss="modal">×</button>';
                strModal+='<h3>Publicación - Volver a Etiquetar</h3>';
            strModal+='</div>';
            strModal+='<div class="modal-body" id="modalBody">';
                strModal+='¿Desea volver a etiquetar publicación <b>'+'['+  id + '] - ' + tit + '</b>?<br>';
                strModal+='<div id="idMsgRee">Esta acción <b>eliminará</b> las etiquetas almacenadas asociadas a la publicación.</div>';
            strModal+='</div>';
            strModal+='<div class="modal-footer">';
                strModal+='<a class="btn" data-dismiss="modal">Cancelar</a>';
                strModal+='<a id="btnReEti" style="border-color: silver; background-color: #FFCC00; color: black; font-weight: bold;" class="btn btn-primary">Re-Etiquetar</a>';
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
            url: URLprotocol+"//"+URLdomain+"/bodyflex/admin/model/publicacionEtiquetaEliminaAllPublicacionModel.php",
            type:  'post',
            datetype: 'xml',
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
                            setTimeout(function() {$('#myModal').modal('hide');}, 1000);    

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
                            setTimeout(function() {$('#myModal').modal('hide');}, 1000);    
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
                url: URLprotocol+"//"+URLdomain+"/bodyflex/admin/model/publicacionCategoriasEtiquetaJSONConsultaModel.php",
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
                url: URLprotocol+"//"+URLdomain+"/bodyflex/admin/model/publicacionEtiquetaJSONConsultaModel.php",
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
        
        //alert('btnGuardarCat');
        
        var strModal='';
        var cat = $('#typeahead').val();

        $('#myModal').html('');

        if(cat.length>0){
           
            strModal+='<div class="modal-header">';
                strModal+='<button type="button" class="close" data-dismiss="modal">×</button>';
                strModal+='<h3>Publicación - Agregar categoría</h3>';
            strModal+='</div>';
            strModal+='<div class="modal-body" id="modalBody">';
                strModal+='¿Desea agregar categoría <b>' + cat + '</b> al listado de categorías?';
            strModal+='</div>';
            strModal+='<div class="modal-footer">';
                strModal+='<a class="btn" data-dismiss="modal">Cancelar</a>';
                strModal+='<a id="btnAgrCat" style="border-color: silver; background-color: #FFCC00; color: black; font-weight: bold;" class="btn btn-primary">Agregar</a>';
            strModal+='</div>';

            $('#myModal').html(strModal);
            $('#myModal').show();
            
        }else{
            
            strModal+='<div class="modal-header">';
                strModal+='<button type="button" class="close" data-dismiss="modal">×</button>';
                strModal+='<h3>Publicación - Agregar categoría</h3>';
            strModal+='</div>';
            strModal+='<div class="modal-body" id="modalBody">';
                strModal+='Para agregar debes <b>escribir</b> una nueva categoría.';
            strModal+='</div>';
            strModal+='<div class="modal-footer">';
                strModal+='<a class="btn btn-primary" style="border-color: silver; background-color: #FFCC00; color: black; font-weight: bold;" data-dismiss="modal">Aceptar</a>';
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
        var parametros = {
                        "rut" : rut,
                        "cat" : cat
        };            

            $.ajax({
                    data:  parametros,
                    url: URLprotocol+"//"+URLdomain+"/bodyflex/admin/model/publicacionCategoriasEtiquetaAgregaModel.php",
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
                strModal+='<h3>Publicación - Eliminar categoría</h3>';
            strModal+='</div>';
            strModal+='<div class="modal-body" id="modalBody">';
                strModal+='¿Desea eliminar categoría <b>' + cat + '</b> al listado de categorías?';
            strModal+='</div>';
            strModal+='<div class="modal-footer">';
                strModal+='<a class="btn" data-dismiss="modal">Cancelar</a>';
                strModal+='<a id="btnEliCat" style="border-color: silver; background-color: #FFCC00; color: black; font-weight: bold;" class="btn btn-primary">Eliminar</a>';
            strModal+='</div>';
            
            $('#myModal').html(strModal);
            $('#myModal').show();
            
        }else{
            
            strModal+='<div class="modal-header">';
                strModal+='<button type="button" class="close" data-dismiss="modal">×</button>';
                strModal+='<h3>Publicación - Eliminar categoría</h3>';
            strModal+='</div>';
            strModal+='<div class="modal-body" id="modalBody">';
                strModal+='<p>Para eliminar debes seleccionar una <b>categoría</b> del listado de cagerorías.<br>';
                strModal+='<i>Recuerde que sólo el <b>creador</b> de la categoría la puede eliminar</i></p><br>';
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

        //alert('rut ' + rut);
        //alert('cat ' + cat);

        //Div de Carga
        var strLoad='<div id="espera" class="modal-body"></div>';
                
        //AJAX
        var parametros = {
                        "rut" : rut,
                        "cat" : cat
        };            
        
            $.ajax({
                data:  parametros,
                url: URLprotocol+"//"+URLdomain+"/bodyflex/admin/model/publicacionCategoriasEtiquetaEliminaModel.php",
                type:  'post',
                datetype: 'xml',
                beforeSend: function(){
                    $("#modalBody").html(strLoad);
                },
                success:  function(xml){     
                
                var xmlDoc = $.parseXML(xml), $xml = $(xmlDoc);
                var codErr = xmlDoc.getElementsByTagName('CODERROR')[0].childNodes[0].nodeValue;
                var desErr = xmlDoc.getElementsByTagName('DESERROR')[0].childNodes[0].nodeValue;
                
                switch(codErr){
                    case '9':
                            
                        var msg='<b><span style="color: #000;">' + '[' + codErr + '] ' + desErr + '</span></b>';
                        $("#warningCat").html(msg);    
                        $("#modalBody").html(msg);
                        setTimeout(function() {$('#myModal').modal('hide');}, 1000); 
                        break;
                        
                    case '8':

                        var msg='<b><span style="color: #000;">' + '[' + codErr + '] ' + desErr + '</span></b>';
                        $("#warningCat").html(msg);
                        $("#modalBody").html(msg);
                        setTimeout(function() {$('#myModal').modal('hide');}, 1000); 
                        break;
                    
                    case '99':

                        var msg='<b><span style="color: #000;">' + '[' + codErr + '] ' + desErr + '</span></b>';
                        $("#warningCat").html(msg);
                        $("#modalBody").html(msg);
                        setTimeout(function() {$('#myModal').modal('hide');}, 1000); 
                        break;
                        
                    case '100':

                        var msg='<b><span style="color: #000;">' + '[' + codErr + '] ' + desErr + '</span></b>';
                        $("#warningCat").html(msg);
                        $("#modalBody").html(msg);
                        setTimeout(function() {$('#myModal').modal('hide');}, 1000); 
                        break;    
                    
                    case '98':

                        var msg='<b><span style="color: #000;">' + '[' + codErr + '] ' + desErr + '</span></b>';
                        $("#warningCat").html(msg);
                        $("#modalBody").html(msg);
                        setTimeout(function() {$('#myModal').modal('hide');}, 1000); 
                        break;
                    
                    case '97':

                        var msg='<b><span style="color: #000;">' + '[' + codErr + '] ' + desErr + '</span></b>';
                        $("#warningCat").html(msg);
                        $("#modalBody").html(msg);
                        setTimeout(function() {$('#myModal').modal('hide');}, 1000); 
                        break;    
                    
                    case '96':

                        var msg='<b><span style="color: #000;">' + '[' + codErr + '] ' + desErr + '</span></b>';
                        $("#warningCat").html(msg);
                        $("#modalBody").html(msg);
                        setTimeout(function() {$('#myModal').modal('hide');}, 1000); 
                        break;    
                    
                    case '95':

                        var msg='<b><span style="color: #000;">' + '[' + codErr + '] ' + desErr + '</span></b>';
                        $("#warningCat").html(msg);
                        $("#modalBody").html(msg);
                        setTimeout(function() {$('#myModal').modal('hide');}, 1000); 
                        break;    
                    
                    default:
                                          
                        var msg='<b><span style="color: #000;">Categoría eliminada exitosamente!</span></b>';
                        $("#modalBody").html(msg);
                        setTimeout(function() {$('#myModal').modal('hide');}, 1000); 
                        cargaCategorias();
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
                strModal+='<h3>Publicación - Agregar etiqueta a categoría</h3>';
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
                strModal+='<h3>Publicación - Agregar etiqueta a categoría</h3>';
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
                        strModal+='<h3>Publicación - Agregar etiqueta a categoría</h3>';
                strModal+='</div>';
                strModal+='<div class="modal-body" id="modalBody">';
                        strModal+='¿Desea agregar etiqueta <b>' + eti + '</b> a la categoría <b>' + cat + '</b>?';
                strModal+='</div>';
                strModal+='<div class="modal-footer">';
                        strModal+='<a class="btn" data-dismiss="modal">Cancelar</a>';
                        strModal+='<a id="btnAgrEti" style="border-color: silver; background-color: #FFCC00; color: black; font-weight: bold;" class="btn btn-primary">Agregar</a>';
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
        var parametros = {
                        "rut" : rut,
                        "cat" : cat,
                        "eti" : eti
        };            

            $.ajax({
                    data:  parametros,
                    url: URLprotocol+"//"+URLdomain+"/bodyflex/admin/model/publicacionEtiquetaAgregaModel.php",
                    type:  'post',
                    datetype: 'xml',
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
                            setTimeout(function() {$('#myModal').modal('hide');}, 1000); 
                            break;
                        
                        case '8':

                            var msg='<b><span style="color: #000;">' + '[' + codErr + '] ' + desErr + '</span></b>';
                            $("#warningEti").html(msg);
                            $("#modalBody").html(msg);
                            setTimeout(function() {$('#myModal').modal('hide');}, 1000); 
                            break;
                            
                        case '99':

                            var msg='<b><span style="color: #000;">' + '[' + codErr + '] ' + desErr + '</span></b>';
                            $("#warningEti").html(msg);
                            $("#modalBody").html(msg);
                            setTimeout(function() {$('#myModal').modal('hide');}, 1000); 
                            break;
                            
                        case '100':

                            var msg='<b><span style="color: #000;">' + '[' + codErr + '] ' + desErr + '</span></b>';
                            $("#warningEti").html(msg);
                            $("#modalBody").html(msg);
                            setTimeout(function() {$('#myModal').modal('hide');}, 1000); 
                            break;    
                        
                        case '98':

                            var msg='<b><span style="color: #000;">' + '[' + codErr + '] ' + desErr + '</span></b>';
                            $("#warningEti").html(msg);
                            $("#modalBody").html(msg);
                            setTimeout(function() {$('#myModal').modal('hide');}, 1000); 
                            break;
                        
                        default:

                            var msg='<b><span style="color: #000;">Etiqueta ingresada exitosamente!</span></b>';
                            $("#warningEti").html('');
                            $("#modalBody").html(msg);
                            setTimeout(function() {$('#myModal').modal('hide');}, 1000); 
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
        
        //alert('cat ' + cat);
        //alert('eti ' + eti);

        if(cat=='(SELECCIONE)'){
            
            strModal+='<div class="modal-header">';
            strModal+='<button type="button" class="close" data-dismiss="modal">×</button>';
            strModal+='<h3>Publicación - Eliminar etiqueta</h3>';
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
                strModal+='<h3>Publicación - Eliminar etiqueta</h3>';
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
                    strModal+='<h3>Publicación - Eliminar etiqueta</h3>';
                strModal+='</div>';
                strModal+='<div class="modal-body" id="modalBody">';
                    strModal+='¿Desea eliminar la etiqueta <b>' + eti + '</b> de la categoría <b>' + cat + '</b>';
                strModal+='</div>';
                strModal+='<div class="modal-footer">';
                    strModal+='<a class="btn" data-dismiss="modal">Cancelar</a>';
                    strModal+='<a id="btnEliEti" style="border-color: silver; background-color: #FFCC00; color: black; font-weight: bold;" class="btn btn-primary">Eliminar</a>';
                strModal+='</div>';

                $('#myModal').html(strModal);
                $('#myModal').show();
                
            }
            
        }

        

    });   
    
    $(document).on("click", "#btnEliEti", function(event){

    //alert('btnEliEti');

        var rut = $('#rut').val(); 
        var cat = $('#cmbSelCat').val(); 
        var eti = $('#cmbSelEti').val();

        //alert('rut ' + rut);
        //alert('cat ' + cat);

        //Div de Carga
        var strLoad='<div id="espera" class="modal-body"></div>';
                
        //AJAX
        var parametros = {
                        "rut" : rut,
                        "cat" : cat,
                        "eti" : eti
        };            

            $.ajax({
                data:  parametros,
                url: URLprotocol+"//"+URLdomain+"/bodyflex/admin/model/publicacionEtiquetaEliminaModel.php",
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
                url: URLprotocol+"//"+URLdomain+"/bodyflex/admin/model/publicacionEtiquetaConsultaModel.php",
                type:  'post',
                datetype: 'xml',
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

