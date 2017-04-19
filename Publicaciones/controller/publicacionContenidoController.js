
jQuery(document).ready(function() {

var URLdomain   = window.location.host;
var URLprotocol = window.location.protocol;

    //XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX    
        //var rut=13661574;
        var rut=$('#rut').val();
    //XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX 
        
    
    $(document).on("click", "#btnAgrCon", function(event){

    //alert('btnAgrRef');

        var puId = $('#txtPuId').val(); 
        var tipCon = $('#cmbTipCon').val(); 
        var url = $('#txtUrlCon').val(); 
        var idCon = $('#txtIdCon').val(); // ID de contenido ingresada si existe //

        //Div de Carga
        var strLoad='<div id="espera" class="modal-body"></div>';
                
        //AJAX
        var parametros = {
            "puId" : puId,
            "tipCon" : tipCon,
            "url" : url,
            "idCon" : idCon
        };            

        $.ajax({
                data:  parametros,
                url: URLprotocol+"//"+URLdomain+"/bodyflex/Publicaciones/model/publicacionAgregaContenidoModel.php",   
                type:  'post',
                datetype: 'xml',
                async: true,
                beforeSend: function(){
                    $("#modalBody").html(strLoad);
                },
                success:  function(xml){     
                
                //alert(xml);
                
                var xmlDoc = $.parseXML(xml), $xml = $(xmlDoc);
                var codErr = xmlDoc.getElementsByTagName('CODERROR')[0].childNodes[0].nodeValue;
                var desErr = xmlDoc.getElementsByTagName('DESERROR')[0].childNodes[0].nodeValue;
                
                switch(codErr){
                    case '9':
                            
                        var msg='<div style="text-align:center;">';
                        msg+='<button type="button" class="close" data-dismiss="alert">×</button>';
                        msg+='<b><span style="color: #000;">' + '[' + codErr + '] ' + desErr + '</span></b>';
                        msg+='</div>';
                        $('#warningConAso').html(msg);
                        break;

                    case '8':

                        var msg='<div style="text-align:center;">';
                        msg+='<button type="button" class="close" data-dismiss="alert">×</button>';
                        msg+='<b><span style="color: #000;">' + '[' + codErr + '] ' + desErr + '</span></b>';
                        msg+='</div>';
                        $('#warningConAso').html(msg);
                        break;

                    case '99':

                        var msg='<div style="text-align:center;">';
                        msg+='<button type="button" class="close" data-dismiss="alert">×</button>';
                        msg+='<b><span style="color: #000;">' + '[' + codErr + '] ' + desErr + '</span></b>';
                        msg+='</div>';
                        $('#warningConAso').html(msg);
                        break;

                    case '100':

                        var msg='<div style="text-align:center;">';
                        msg+='<button type="button" class="close" data-dismiss="alert">×</button>';
                        msg+='<b><span style="color: #000;">' + '[' + codErr + '] ' + desErr + '</span></b>';
                        msg+='</div>';
                        $('#warningConAso').html(msg);
                        break;    

                    case '98':

                        var msg='<div style="text-align:center;">';
                        msg+='<button type="button" class="close" data-dismiss="alert">×</button>';
                            msg+='<b><span style="color: #000;">' + '[' + codErr + '] ' + desErr + '</span></b>';
                        msg+='</div>';
                        $('#warningConAso').html(msg);
                        break;
                    
                    default:

                        var msg='<b><span style="color: #000; text-align: center;">Operación exitosa!.</span></b>';
                        $("#modalBody").html(msg);

                        //limpiamos inpuT, menos ID de Publicación
                        $('#cmbTipCon option[value="(SELECCIONE)"]').prop('selected', true);
                        $('#cmbTipCon').trigger('liszt:updated');
                        $('#txtUrlCon').val('');
                        $('#txtIdCon').val(''); 
   
                        //Limpiamos warning
                        $('#warningConAso').html('');
   
                        var parametros2 = {"puId" : puId};  
                        $.ajax({
                            data:  parametros2,
                            url: URLprotocol+"//"+URLdomain+"/bodyflex/Publicaciones/model/publicacionConsultaContenidoModel.php",
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
                                        
                                        var msg='<div style="text-align:center;">';
                                        msg+='<b><span style="color: #000;">' + '[' + codErr + '] ' + desErr + '</span></b>';
                                        msg+='</div>';
           
                                        $('#warningConAso').html(msg);
                                        $("#modalBody").html(msg);
                                        setTimeout(function() {$('#modalBody').modal('hide');}, 750); 
                                        break;
                                        
                                    case '8':
                                        
                                        var msg='<div style="text-align:center;">';
                                        msg+='<b><span style="color: #000;">' + '[' + codErr + '] ' + desErr + '</span></b>';
                                        msg+='</div>';
                                        
                                        $('#warningConAso').html(msg);
                                        $("#modalBody").html(msg);
                                        setTimeout(function() {$('#modalBody').modal('hide');}, 750); 
                                        break;
                                    
                                    case '100':
                                        
                                        var msg='<div style="text-align:center;">';
                                        msg+='<b><span style="color: #000;">' + '[' + codErr + '] ' + desErr + '</span></b>';
                                        msg+='</div>';
                                        
                                        $('#warningConAso').html(msg);
                                        $("#modalBody").html(msg);
                                        setTimeout(function() {$('#modalBody').modal('hide');}, 750); 
                                        break;
                                    
                                    case '99':
                                        
                                        var msg='<div style="text-align:center;">';
                                        msg+='<b><span style="color: #000;">' + '[' + codErr + '] ' + desErr + '</span></b>';
                                        msg+='</div>';
                                        
                                        $('#warningConAso').html(msg);
                                        $("#modalBody").html(msg);
                                        setTimeout(function() {$('#modalBody').modal('hide');}, 750); 
                                        break;
                                    
                                    case '98':
                            
                                        var msg='<div style="text-align:center;">';
                                        msg+='<b><span style="color: #000;">' + '[' + codErr + '] ' + desErr + '</span></b>';
                                        msg+='</div>';

                                        $('#warningConAso').html(msg);
                                        $("#modalBody").html(msg);
                                        setTimeout(function() {$('#modalBody').modal('hide');}, 750); 
                                        break;
                        
                                    default:
                                        
                                        var datos = xmlDoc.getElementsByTagName('DATOS')[0].childNodes[0].nodeValue;
                                        $('#listConAsociadas').html(datos);
                                            
                                }              
                            }
                        });   
                            
                        setTimeout(function() {$('#myModal').modal('hide');}, 750);
                        break;  
                        
                }              
            }
        });
  
    });
   
   
   
    $('#a-table-con').on('click', 'tbody tr', function(event){

        var conID, conTip, conURL;
        
        //asignamos valores a elementos
        $('#txtIdCon').attr('value','');
        $('#txtUrlCon').attr('value','');
        $("#cmbTipCon").prop('selectedIndex',0);
        $('#cmbTipCon').trigger('liszt:updated');

        //restablecemos formato
        $('table tr').css('background','white');
        $('table tr').css('color','black');

        //aplicamos formato
        $(this).css('background','gray');
        $(this).css('color','white');

        //Obtenemos valores de campos    
            $(this).children("td").each(function(index){
                switch(index){
                    case 0:	
                        conID = $(this).text();
                        break;
                    case 1:
                        conTip = $(this).text();
                        break;
                    case 2:
                        conURL = $(this).text();
                        break;
                }
            });
                
            $('#botoneraCon').hide();
            $('#esperaCon').show();
                 
            //asignamos valores a elementos
            $('#txtIdCon').attr('value',conID);
            $('#txtUrlCon').attr('value',conURL);

            var cmb = document.getElementById("cmbTipCon"); 
            for (var i = 0; i < cmb.length; i++) {
                //  Aca haces referencia al "option" actual
                var opt = cmb[i];

                // Haces lo que te de la gana aca
                if(conTip == opt.value){
                   $("#cmbTipCon").prop('selectedIndex',i);
                   $('#cmbTipCon').trigger('liszt:updated');
                   break;
                }
            }

            //restablecemos
            $('#botoneraCon').show();
            $('#esperaCon').hide();
             
             
            //Solo las imagenes pueden ser visualizadas 
            if(conTip=='IMAGEN'){
                var botones ="<i data-toggle='tooltip' title='ver imagen!' onclick='getImagen("  +'"'+ conURL + '"' + ");' style='color: green; margin-top: 100px; cursor: pointer;' class='fa fa-picture-o fa-4x'></i>";        
            }else{
                var botones ='<i style="margin-top: 100px;" class="fa fa-picture-o fa-4x"></i>';
            }
            
            botones+='<i onclick="getHelpImage();" class="fa fa-info-circle fa-4x" style="margin-top: 40px; color: green; cursor: pointer;"></i>';
            $('#right').html(botones);
                
  
    });
        
    $(document).on("click", "#btnLimpiarCon", function(event){

        $('#botoneraCon').hide();
        $('#esperaCon').show();

        $('#a-table-con tr').each(function(){
            $(this).css('background','white');
            $(this).css('color','black');
        });    

        //setTimeout(function(){
                
            //$('#txtPuId').val(''); IDENTIFICADOR DE PUBLICACIÓN NO LIMPIAR
            $('#cmbTipCon').val('(SELECCIONE)'); 
            $('#cmbTipCon').trigger('liszt:updated');
            $('#txtUrlCon').val(''); 
            $('#txtIdCon').val(''); // ID de referencia ingresada si existe //

            //restablecemos
            $('#botoneraCon').show();
            $('#esperaCon').hide();
                
        //}, 250);
        
        var botones ='<i style="margin-top: 100px;" class="fa fa-picture-o fa-4x"></i>';        
        botones+='<i onclick="getHelpImage();" class="fa fa-info-circle fa-4x" style="margin-top: 40px; color: green; cursor: pointer;"></i>';
        $('#right').html(botones);


    });

    $('#btnGuardarCon').click(function(){
                       
        var strModal='';
        var id = $('#txtUrlCon').val();
        var cmb = $('#cmbTipCon').val();

        if(checkURL(id, cmb)){            
            if(id.length>0 && cmb.length>0){

                strModal+='<div style="color: black; background-color: #FFCC00; font-weight: bold;" class="modal-header">';
                    strModal+='<button type="button" class="close" data-dismiss="modal">×</button>';
                    strModal+='<h3><b><i class="fa fa-exclamation-triangle"></i>&nbsp;Agregar contenido</b></h3>';
                strModal+='</div>';
                strModal+='<div class="modal-body" id="modalBody">';
                    strModal+='<p>¿Desea agregar contenido <b>' + id + '</b> al listado de contenidos?</p>';
                strModal+='</div>';
                strModal+='<div class="modal-footer">';
                    strModal+='<a class="btn" data-dismiss="modal"><i class="fa fa-times"></i>&nbsp;Cancelar</a>';
                    strModal+='<a id="btnAgrCon" style="border-color: silver; background-color: #FFCC00; color: black; font-weight: bold;" class="btn btn-primary"><i class="fa fa-plus-circle"></i>&nbsp;Agregar</a>';
                strModal+='</div>';

                $('#myModal').html(strModal);
                $('#myModal').modal('show');

            }else{

                strModal+='<div style="color: black; background-color: #FFCC00; font-weight: bold;" class="modal-header">';
                    strModal+='<button type="button" class="close" data-dismiss="modal">×</button>';
                    strModal+='<h3><b><i class="fa fa-exclamation-triangle"></i>&nbsp;Atención</b></h3>';
                strModal+='</div>';
                strModal+='<div class="modal-body" id="modalBody">';
                    strModal+='<p style="text-align: center;">Por favor seleccione <b>tipo de contenido</b> e ingrese la <b>URL</b> de la imagen o video!</p>';
                strModal+='</div>';
                strModal+='<div class="modal-footer">';
                    strModal+='<a class="btn btn-primary" style="border-color: silver; background-color: #FFCC00; color: black; font-weight: bold;" data-dismiss="modal"><i class="fa fa-plus-circle"></i>&nbsp;Aceptar</a>';
                strModal+='</div>';

                $('#myModal').html(strModal);
                $('#myModal').modal('show');

            }
        }else{
            //URL no valida
            strModal+='<div style="color: black; background-color: #FFCC00; font-weight: bold;" class="modal-header">';
                strModal+='<button type="button" class="close" data-dismiss="modal">×</button>';
                strModal+='<h3><b><i class="fa fa-exclamation-triangle"></i>&nbsp;URL no válida</b></h3>';
            strModal+='</div>';
            strModal+='<div class="modal-body" id="modalBody">';
                strModal+='<p>La URL ingresada <b>' + id + '</b> no es válida!</p>';
            strModal+='</div>';
            strModal+='<div class="modal-footer">';
                strModal+='<a id="btn" data-dismiss="modal" style="border-color: silver; background-color: #FFCC00; color: black; font-weight: bold;" class="btn btn-primary"><i class="fa fa-plus-circle"></i>&nbsp;Aceptar</a>';
            strModal+='</div>';

            $('#myModal').html(strModal);
            $('#myModal').modal('show');
        }    
    }); 
    
    $('#btnEliminarCon').click(function(){
            
        var strModal='';
        var nom = $('#txtUrlCon').val();

        //alert('nom ' + nom);

        if(nom.length>0){

            strModal+='<div style="color: black; background-color: #FFCC00; font-weight: bold;" class="modal-header">';
                strModal+='<button type="button" class="close" data-dismiss="modal">×</button>';
                strModal+='<h3><i class="fa fa-exclamation-triangle"></i>&nbsp;Publicación - Eliminar contenido</h3>';
            strModal+='</div>';
            strModal+='<div class="modal-body" id="modalBody">';
                strModal+='<p>¿Desea eliminar contenido <b>' + nom + '</b> al listado de contenidos?</p><br>';
            strModal+='</div>';
            strModal+='<div class="modal-footer">';
                strModal+='<a class="btn" data-dismiss="modal"><i class="fa fa-times"></i>&nbsp;Cancelar</a>';
                strModal+='<a id="btnEliCon" style="border-color: silver; background-color: #FFCC00; color: black; font-weight: bold;" class="btn btn-primary"><i class="fa fa-minus-circle"></i>&nbsp;Eliminar</a>';
            strModal+='</div>';

           $('#myModal').html(strModal);
           $('#myModal').modal('show');
            
        }else{
            $('#myModal').modal('hide');
        }
    }); 
    
    $(document).on("click", "#btnEliCon", function(event){

        var puId = $('#txtPuId').val(); 
        var conId = $('#txtIdCon').val(); // ID de referencia ingresada si existe //

        //Div de Carga
        var strLoad='<div id="espera" class="modal-body"></div>';
                
        //AJAX
        var parametros = {
                        "puId" : puId,
                        "conId" : conId
        };            

        $.ajax({
                data:  parametros,
                url: URLprotocol+"//"+URLdomain+"/bodyflex/Publicaciones/model/publicacionEliminaContenidoModel.php",
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
                        $('#warningConAso').html(msg);
                        $("#modalBody").html(msg);
                        setTimeout(function() {$('#modalBody').modal('hide');}, 750); 
                        break;
                    
                    case '8':

                        var msg='<b><span style="color: #000;">' + '[' + codErr + '] ' + desErr + '</span></b>';
                        $('#warningConAso').html(msg);
                        $("#modalBody").html(msg);
                        setTimeout(function() {$('#modalBody').modal('hide');}, 750); 
                        break;
                    
                    case '99':

                        var msg='<b><span style="color: #000;">' + '[' + codErr + '] ' + desErr + '</span></b>';
                        $('#warningConAso').html(msg);
                        $("#modalBody").html(msg);
                        setTimeout(function() {$('#modalBody').modal('hide');}, 750); 
                        break;
                    
                    case '100':

                        var msg='<b><span style="color: #000;">' + '[' + codErr + '] ' + desErr + '</span></b>';
                        $('#warningConAso').html(msg);
                        $("#modalBody").html(msg);
                        setTimeout(function() {$('#modalBody').modal('hide');}, 750); 
                        break;
                    
                    default:

                        var msg='<b><span style="color: #000;">Operación exitosa!.</span></b>';
                        $("#modalBody").html(msg);

                        //limpiamos inpuT, menos ID de Publicación
                        $('#cmbTipCon option[value="(SELECCIONE)"]').prop('selected', true);
                        $('#cmbTipCon').trigger('liszt:updated');
                        $('#txtUrlCon').val('');
                        $('#txtIdCon').val(''); 
                              
                        //Consulta actualiza referencias      
                        var parametros2 = {"puId" : puId};  
                        $.ajax({
                            data:  parametros2,
                            url: URLprotocol+"//"+URLdomain+"/bodyflex/Publicaciones/model/publicacionConsultaContenidoModel.php",
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
                                        
                                        var msg='<div style="text-align:center;">';
                                        msg+='<b><span style="color: #000;">' + '[' + codErr + '] ' + desErr + '</span></b>';
                                        msg+='</div>';
                                        
                                        $("#warningConAso").html(msg);
                                        $("#modalBody").html(msg);
                                        setTimeout(function() {$('#modalBody').modal('hide');}, 750); 
                                        break;
                                        
                                    case '8':
                                        
                                        var msg='<div style="text-align:center;">';
                                        msg+='<b><span style="color: #000;">' + '[' + codErr + '] ' + desErr + '</span></b>';
                                        msg+='</div>';
                                        
                                        $("#warningConAso").html(msg);
                                        $("#modalBody").html(msg);
                                        setTimeout(function() {$('#modalBody').modal('hide');}, 750); 
                                        break;
                                      
                                    case '99':
                                        
                                        var msg='<div style="text-align:center;">';
                                        msg+='<b><span style="color: #000;">' + '[' + codErr + '] ' + desErr + '</span></b>';
                                        msg+='</div>';
                                        
                                        $("#warningConAso").html(msg);
                                        $("#modalBody").html(msg);
                                        setTimeout(function() {$('#modalBody').modal('hide');}, 750); 
                                        break;
                                        
                                    case '100':
                                        
                                        var msg='<div style="text-align:center;">';
                                        msg+='<b><span style="color: #000;">' + '[' + codErr + '] ' + desErr + '</span></b>';
                                        msg+='</div>';
                                        
                                        $("#warningConAso").html(msg);
                                        $("#modalBody").html(msg);
                                        setTimeout(function() {$('#modalBody').modal('hide');}, 750); 
                                        break;    
                                    
                                    case '98':
                                        
                                        var msg='<div style="text-align:center;">';
                                        msg+='<b><span style="color: #000;">' + '[' + codErr + '] ' + desErr + '</span></b>';
                                        msg+='</div>';
                                        
                                        $("#warningConAso").html(msg);
                                        $("#modalBody").html(msg);
                                        
                                        //limpiamos listado
                                        $('#listConAsociadas').html('');
                                        setTimeout(function() {$('#modalBody').modal('hide');}, 750); 
                                        break;
                                        
                                    default:
                                        
                                        var datos = xmlDoc.getElementsByTagName('DATOS')[0].childNodes[0].nodeValue;
                                        $('#listConAsociadas').html(datos);
                                            
                                }              
                            }
                        });         
                              
                        setTimeout(function() {$('#myModal').modal('hide');}, 750);
                        break;  
                        
                }              
            }
        });
  
    });
   
    
});

function checkURL(url, cmb) {
    if(cmb=='IMAGEN'){
        return(url.match(/\.(jpeg|jpg|gif|png)$/) != null);
    }else{
        return true; //no aplica para videos
    }
}