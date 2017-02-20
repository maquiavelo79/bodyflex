function limpiarForm(){
        
        //alert('btnLimpiar');

        //HABILITAR ELEMENTOS
        $('#poseeEti').val(0);
            //PUBLICACION
                //INPUTS
                $('#txtPuTit').prop('disabled',false);
                $('#txtPuFli').prop('disabled',false);
                $("#cmbTipPub").attr('disabled', false).trigger("liszt:updated");
                $('#txtPuBa').prop('disabled',false);
                $('#txtPu').cleditor()[0].disable(false);

                //BOTONES
                $('#btnLimpiar').prop('disabled',false);
                $('#btnGuardar').prop('disabled',false);
                $('#btnEliminar').prop('disabled',false);
                $('#btnProbar').prop('disabled',false);
                $('#btnPublicar').prop('disabled',false);
                
            //IMAGEN                  
                //BOTONES
                $('#btnPublicar').prop('disabled',false); 
		$('#btnImgGuardar').prop('disabled',false); 
                $('#output').prop('disabled',false);
                
            //MANTENEDOR DE CATEGORIAS
                //INPUTS
                $("#cmbAgrCat").attr('disabled', false).trigger("liszt:updated");
                $('#typeahead').prop('disabled',false);
                
                //BOTONES
                $('#file').prop('disabled',false); 
                $('#btnEliminarCat').prop('disabled',false);

            //MANTENEDOR DE ETIQUETAS
                //INPUTS
                $("#cmbSelCat").attr('disabled', false).trigger("liszt:updated");
                $("#cmbSelEti").attr('disabled', false).trigger("liszt:updated");
                $('#typeaheadEti').prop('disabled',false);

                //BOTONES
                $('#btnGuardarEti').prop('disabled',false);
                $('#btnEliminarEti').prop('disabled',false);
                
            //ETIQUETAS PUBLICACION
                //INPUTS
                $("#cmbCat").attr('disabled', false).trigger("liszt:updated");
                
            //Limpiamos Etiquetas
                $("#cmbEti").empty().trigger("liszt:updated");
                
            //PREGUNTAMOS SI POSEE ETIQUETAS
                //alert('$(#poseeEti).val() ' + $('#poseeEti').val());
                //if($('#poseeEti').val()==1){
                    //$("#cmbEti").attr('disabled', true).trigger("liszt:updated");
                //}else{
                    //$("#cmbEti").attr('disabled', false).trigger("liszt:updated");
                //}

                //BOTONES
                $('#btnReEtiquetar').prop('disabled',false);
                
            //REFERENCIAS
                //INPUTS
                    $("#cmbTipRef").attr('disabled', false).trigger("liszt:updated");
                    $('#txtNomRef').prop('disabled',false);
                    $('#txtDesRef').prop('disabled',false);
                //BOTONES
                    $('#btnGuardarRef').prop('disabled',false);
                    $('#btnEliminarRef').prop('disabled',false);
                //GRILLA
                    $('#listRefAsociadas').html('');
        //HABILITAR ELEMENTOS

        //limpiamos entradas  
        $('#txtPuId').attr('value','');
        $('#puId').attr('value','');
        
        $('#txtPuEst').attr('value','');
        $('#txtPuFCre').attr('value','');
        $('#txtPuFMod').attr('value','');
        $('#txtPuFPu').attr('value','');
        $('#txtPuTit').attr('value','');
        $('#txtPu').attr('value','');
        $('#txtPuFli').attr('value','');
        $('#txtPuBa').attr('value','');
        
        $("#cmbTipPub option[value='(SELECCIONE)']").attr("selected",true);
        $('#cmbTipPub').trigger('liszt:updated');
        
        $('#txtPu').cleditor()[0].focus();
        $('#txtPu').cleditor()[0].clear();
        $('#txtPu').cleditor()[0].execCommand('inserthtml','&nbsp;'); 

        //habilitamos boton modificar, eliminar y cancelar
            $('#btnGuardar').prop('disabled',false);
            $('#btnEliminar').prop('disabled',true);
            $('#btnLimpiar').prop('disabled',true);
            $('#btnProbar').prop('disabled',true);      
            $('#btnPublicar').prop('disabled',true);    
        
        //restablecemos sesion
            publicacionEstablecerSesion(); 
        
        //cargamos elementos
            cargaCategorias();
            cargaEtiquetas();
            cargaReferencias();
        
        //Escondemos etiquetas
            $('#divEtiquetado').hide();
            $("#divImgPublicacion").hide();
            
        //Escondemos referencias
            $('#divReferencias').hide();
        
        //Escondemos contenido
            $('#divContenido').hide();
        
        //Escondemos botón de re-etiquetar
            $('#divBtnEti').hide();
        
        //Limpiamos grilla        
            $('#tblPublicaciones tr').each(function(){
                $(this).removeClass('highlight');   
            });
               
        var botones ='<i style="margin-top: 100px;" class="fa fa-picture-o fa-4x"></i>';
        $('#right').html(botones);
        
        $('#warningPublicacion').html('');
       
        
        
        
        
        //limpiamos entradas  
//        $('#txtPuId').attr('value','');
//        $('#txtPuEst').attr('value','');
//        $('#txtPuFCre').attr('value','');
//        $('#txtPuFMod').attr('value','');
//        $('#txtPuFPu').attr('value','');
//        $('#txtPuTit').attr('value','');
//        $('#txtPuFli').attr('value','');
//        $('#txtPuBa').attr('value','');
//        $("#cmbTipPub option[value='(SELECCIONE)']").attr("selected",true);
//        $('#cmbTipPub').trigger('liszt:updated');
//        
//        $('#txtPu').cleditor()[0].focus();
//        $('#txtPu').cleditor()[0].clear();

        //habilitamos boton modificar, eliminar y cancelar
//            $('#btnGuardar').prop('disabled',false);
//            $('#btnEliminar').prop('disabled',true);
//            $('#btnLimpiar').prop('disabled',true);
//            $('#btnProbar').prop('disabled',true);   
//            //$('#btnImagen').prop('disabled',true); 
//            $('#btnPublicar').prop('disabled',true);    
        
        //cargamos elementos
//            cargaCategorias();
//            cargaEtiquetas();
//            cargaReferencias();
//        
//        //Escondemos etiquetas
//            $('#divEtiquetado').hide();
//            $("#divImgPublicacion").hide();
//            
//        //Escondemos referencias
//            $('#divReferencias').hide();
//        
//        //Limpiamos grilla        
//            $('#tblPublicaciones tr').each(function(){
//                $(this).removeClass('highlight');   
//            });
//        
//        $('#warningPublicacion').html('');
        
        
    }

    function llamaralancla(){
        //alert('llamaralancla');
        document.location.href = "publicacionView.php#divItemPublicacion";
    }

    function mostrarMsgPublicacion(){
        
        //alert('mostrarMsgPublicacion');
        
        var URLdomain   = window.location.host;
        var URLprotocol = window.location.protocol;
        
        //Consultamos referencias para actualización de tabla
        var puId = $('#txtPuId').val();    
        var parametros2 = {"puId" : puId};  
            
        $.ajax({
                data:  parametros2,
                url: URLprotocol+"//"+URLdomain+"/bodyflex/Dashboard/model/publicacionVerificaElementosModel.php",
                type:  'post',
                datetype: 'xml',
                async: false,
                beforeSend: function(){
                    $("#espera").show();
                },
                success:  function (xml){
                                
                    //alert('publicacionVerificaElementosModel ' + xml);
                    
                    $("#espera").hide();
                    var xmlDoc = $.parseXML(xml), $xml = $(xmlDoc);
                    var codErr = xmlDoc.getElementsByTagName('CODERROR')[0].childNodes[0].nodeValue;
                    var desErr = xmlDoc.getElementsByTagName('DESERROR')[0].childNodes[0].nodeValue;
                    
                    switch(codErr){
                        case '9':
                            
                            var strModal='';
                            strModal+='<div class="modal-header">';
                                strModal+='<h3><i class="fa fa-exclamation-triangle"></i>&nbsp;Alerta publicación</h3>';
                            strModal+='</div>';
                            strModal+='<div class="modal-body" id="modalBody">';                           
                            strModal+='<p>Error: No es posible conectar con base de datos.</p>';
                            strModal+='</div>';
                            strModal+='<div class="modal-footer">';
                                strModal+='<a id="btnAceptar" style="border-color: silver; background-color: #FFCC00; color: black; font-weight: bold;" class="btn btn-primary" data-dismiss="modal">Aceptar</a>';
                            strModal+='</div>';
                            $("#myModal").html(strModal);
                            $("#myModal").modal('show');
                            break;
                        
                        case '8':
                            
                            var strModal='';
                            strModal+='<div class="modal-header">';
                                strModal+='<h3><i class="fa fa-exclamation-triangle"></i>&nbsp;Alerta publicación</h3>';
                            strModal+='</div>';
                            strModal+='<div class="modal-body" id="modalBody">';                           
                            strModal+='<p>Error: Procedimiento no retorna datos.</p>';
                            strModal+='</div>';
                            strModal+='<div class="modal-footer">';
                                strModal+='<a id="btnAceptar" style="border-color: silver; background-color: #FFCC00; color: black; font-weight: bold;" class="btn btn-primary" data-dismiss="modal">Aceptar</a>';
                            strModal+='</div>';
                            $("#myModal").html(strModal);
                            $("#myModal").modal('show');
                            break;
                        
                        case '99':
                            
                            var strModal='';
                            strModal+='<div class="modal-header">';
                                strModal+='<h3><i class="fa fa-exclamation-triangle"></i>&nbsp;Alerta publicación</h3>';
                            strModal+='</div>';
                            strModal+='<div class="modal-body" id="modalBody">';                           
                            strModal+='<p>' +'['+ codErr +'] '+ desErr + '</p>';
                            strModal+='</div>';
                            strModal+='<div class="modal-footer">';
                                strModal+='<a id="btnAceptar" style="border-color: silver; background-color: #FFCC00; color: black; font-weight: bold;" class="btn btn-primary" data-dismiss="modal">Aceptar</a>';
                            strModal+='</div>';
                            $("#myModal").html(strModal);
                            $("#btnPublicaciones").click();
                            break;
                        
                        case '100':
                            
                            var strModal='';
                            strModal+='<div class="modal-header">';
                                strModal+='<h3><i class="fa fa-exclamation-triangle"></i>&nbsp;Alerta publicación</h3>';
                            strModal+='</div>';
                            strModal+='<div class="modal-body" id="modalBody">';                           
                            strModal+='<p>' +'['+ codErr +'] '+ desErr + '</p>';
                            strModal+='</div>';
                            strModal+='<div class="modal-footer">';
                                strModal+='<a id="btnAceptar" style="border-color: silver; background-color: #FFCC00; color: black; font-weight: bold;" class="btn btn-primary" data-dismiss="modal">Aceptar</a>';
                            strModal+='</div>';
                            $("#myModal").html(strModal);
                            $("#btnPublicaciones").click();
                            break;
                        
                        default: 

                            var cod = xmlDoc.getElementsByTagName('CODIGO')[0].childNodes[0].nodeValue;
                            
                            var strMsgModal='';
                            var strModal='';
                            strModal+='<div class="modal-header">';
                                strModal+='<h3><i class="fa fa-exclamation-triangle"></i>&nbsp;Alerta publicación</h3>';
                            strModal+='</div>';
                            strModal+='<div class="modal-body" id="modalBody">';
                            
                            switch(cod){
                                case '1': break;
                                case '2': 
                                    strMsgModal+='<p>Publicación <b>no etiquetada</b> favor etiquetar antes de publicar</p>';
                                    break;
                                case '3': 
                                    strMsgModal+='<p>Publicación <b>sin referencias</b> debe indicar de donde se obtuvo la información.</p>';
                                    break;
                                case '4': 
                                    strMsgModal+='<p>Publicación <b>sin referencias ni etiquetas</b> favor regularizar antes de publicar.</p>';
                                    break;       
                            }
                            
                            strModal+=strMsgModal;
                            strModal+='</div>';
                            strModal+='<div class="modal-footer">';
                                strModal+='<a id="btnAceptar" style="border-color: silver; background-color: #FFCC00; color: black; font-weight: bold;" class="btn btn-primary" data-dismiss="modal">Aceptar</a>';
                            strModal+='</div>';
                                        
                            if(strMsgModal.length>0){    
                                $("#myModal").html(strModal);
                                $("#myModal").modal('show');        
                            }
                            
                            llamaralancla();                  
                            break;     
                        
                    }              
                }
            }); 
                
    }
    
    function pruebaPublicacion(){

        var URLdomain   = window.location.host;
        var URLprotocol = window.location.protocol;

        var puId = $('#txtPuId').val(); 
        var parametros = {"puId" : puId};  
        $.ajax({
            data:  parametros,
            url: URLprotocol+"//"+URLdomain+"/bodyflex/Dashboard/model/publicacionValidaModel.php",
            type:  'post',
            datetype: 'xml',
            async: false,
            success:  function (xml){     

                //alert('xml ' + xml);

                var xmlDoc = $.parseXML(xml), $xml = $(xmlDoc);
                var codErr = xmlDoc.getElementsByTagName('CODERROR')[0].childNodes[0].nodeValue;
                var desErr = xmlDoc.getElementsByTagName('DESERROR')[0].childNodes[0].nodeValue;

                switch(codErr){
                    case '9':
                        
                        var msg='<div style="text-align:center;" class="alert alert-error">';
                        msg+='<b><span style="color: black;">' + '[' + codErr + '] ' + desErr + '</span></b>';
                        msg+='</div>';

                        $("#warningPublicacion").html(msg);
                        break;
                        
                    case '8':
                        
                        var msg='<div style="text-align:center;" class="alert alert-error">';
                        msg+='<b><span style="color: black;">' + '[' + codErr + '] ' + desErr + '</span></b>';
                        msg+='</div>';
                        
                        $("#warningPublicacion").html(msg);
                        break;
                    
                    case '99':
                        
                        var msg='<div style="text-align:center;" class="alert alert-error">';
                        msg+='<b><span style="color: black;">' + '[' + codErr + '] ' + desErr + '</span></b>';
                        msg+='</div>';
                        
                        $("#warningPublicacion").html(msg);
                        break;
                    
                    case '100':
                        
                        var msg='<div style="text-align:center;" class="alert alert-error">';
                        msg+='<b><span style="color: black;">' + '[' + codErr + '] ' + desErr + '</span></b>';
                        msg+='</div>';
                        
                        $("#warningPublicacion").html(msg);
                        break;
                    
                    default:
                        
                        var desErr = xmlDoc.getElementsByTagName('DATOS')[0].childNodes[0].nodeValue;
                        
                        var strMsgModal='';
                        var strModal='';
                        strModal+='<div class="modal-header">';
                        strModal+='<h3><i class="fa fa-exclamation-triangle"></i>&nbsp;Alerta publicación</h3>';
                        strModal+='</div>';
                        strModal+='<div class="modal-body" id="modalBody">';
                        
                        switch(desErr){
                            case '5': //SIN ETIQUETAS NI REFERENCIAS

                                var msg='<p style="text-align: justify; color:black;">Publicación <b>no posee etiquetas ni referencias,</b> favor regularizar antes de probar o publicar.</p>';
                                strMsgModal+=msg;
                                break;
                                
                            case '6': //SIN ETIQUETAS
                                
                                var msg='<p style="text-align: justify; color:black;">Publicación <b>no posee etiquetas,</b> favor regularizar antes de probar o publicar.</p>';
                                strMsgModal+=msg;
                                break;
                                
                            case '7': //SIN REFERENCIAS
                                
                                var msg='<p style="text-align: justify; color:black;">Publicación <b>no posee referencias,</b> favor regularizar antes de probar o publicar.</p>';
                                strMsgModal+=msg;
                                break;
                                
                            case '8': //POSEE ETIQUETAS Y REFERENCIAS
                                
                                strMsgModal+='';    
                                break;
                            case '4': //SIN IMAGEN ASOCIADA
                                
                                msg+='<p style="text-align: justify; color:black;">Publicación <b>no posee IMAGEN</b> asociada, favor asocie imagen antes de probar o publicar.</p>';
                                strMsgModal+=msg;
                                break;        
                        }
                        
                        strModal+=strMsgModal;
                        strModal+='</div>';
                        strModal+='<div class="modal-footer">';
                            strModal+='<a id="btnAceptar" style="border-color: silver; background-color: #FFCC00; color: black; font-weight: bold;" class="btn btn-primary" data-dismiss="modal">Aceptar</a>';
                        strModal+='</div>';
                                
                        //alert('strMsgModal ' + strMsgModal);
                        
                        if(strMsgModal.length>0){                                
                          
                            $("#myModal").html(strModal);
                            $("#myModal").modal('show');
                            return false;
                            
                        }else{
                            
                            var proRut=$('#rut').val();
                            var puPru = 1;
                            var url = URLprotocol+"//"+URLdomain+"/bodyflex/view/publicacionProView.php";
                            var form = $('<form action="' + url + '" method="post" target="_blank">' +
                              '<input type="hidden" name="puId" value="' + puId + '" />' +
                              '<input type="hidden" name="puPru" value="' + puPru + '" />' +
                              '<input type="hidden" name="proRut" value="' + proRut + '" />' +
                              '</form>');                     
                            $('body').append(form);
                            form.submit();

                        }

                }         
            }
        }); 

    }
    
    
    function modalPublicacion(){
        
        var strModal='';
        strModal+='<div class="modal-header">';
            strModal+='<h3><i class="fa fa-exclamation-triangle"></i>&nbsp;Publicación de artículo</h3>';
        strModal+='</div>';
        strModal+='<div class="modal-body" id="modalBody">';
            strModal+='<p>El artículo será <b>publicado</b> ¿Deseas proceder?</b>.</p><br>';
            strModal+='<b>Nota</b>: Si posteriormente deseas modificar el artículo, entonces debes cambiar su estado presionando el botón <b>"Editar".';
        strModal+='</div>';
        strModal+='<div class="modal-footer">';
            strModal+='<a onclick="return false;" class="btn" data-dismiss="modal"><i class="fa fa-times"></i>&nbsp;Cancelar</a>';
            strModal+='<a onclick="publicarPublicacion();" style="border-color: silver; background-color: #FFCC00; color: black; font-weight: bold;" class="btn btn-primary" data-dismiss="modal"><i class="fa fa-plus-circle"></i>&nbsp;Aceptar</a>';
        strModal+='</div>';
        $("#myModal").html(strModal);
        $("#btnMensajeria").click();
        
    }
    
    function modalEdicion(){

        var strModal='';
        strModal+='<div class="modal-header">';
            strModal+='<h3><i class="fa fa-exclamation-triangle"></i>&nbsp;Edición artículo</h3>';
        strModal+='</div>';
        strModal+='<div class="modal-body" id="modalBody">';
            strModal+='<p>Este artículo cambiará su estado para <b>edición</b> ¿desea continuar?</b></p>';
        strModal+='</div>';
        strModal+='<div class="modal-footer">';
            strModal+='<a onclick="editarPublicacion();" style="border-color: silver; background-color: #FFCC00; color: black; font-weight: bold;" class="btn btn-primary" data-dismiss="modal"><i class="fa fa-pencil-square-o"></i>&nbsp;Aceptar</a>';
        strModal+='</div>';
        $("#myModal").html(strModal);
        $("#myModal").modal('show');
          
    }
    
    function publicarPublicacion(){

        var URLdomain   = window.location.host;
        var URLprotocol = window.location.protocol;

        var puId = $('#txtPuId').val(); 
        var parametros = {"puId" : puId}; 
        var rCodErr;
        var rDesErr;
        
        $.ajax({
                data:  parametros,
                url: URLprotocol+"//"+URLdomain+"/bodyflex/Dashboard/model/publicacionValidaModel.php",
                type:  'post',
                async:  false,  
                datetype: 'xml',
                success:  function(xml){     

                    var xmlDoc = $.parseXML(xml), $xml = $(xmlDoc);
                    var codErr = xmlDoc.getElementsByTagName('CODERROR')[0].childNodes[0].nodeValue;
                    var desErr = xmlDoc.getElementsByTagName('DESERROR')[0].childNodes[0].nodeValue;

                    rCodErr=codErr; 
                    rDesErr=desErr;

                    switch(codErr){
                        case '9':

                            var msg='<b><span style="color: #000;">' + '[' + codErr + '] ' + desErr + '</span></b>';
                            $('#valPub').val(codErr);   
                            $("#warningPublicacion").html(msg);
                            break;

                        case '8':

                            var msg='<b><span style="color: #000;">' + '[' + codErr + '] ' + desErr + '</span></b>';
                            $('#valPub').val(codErr);   
                            $("#warningPublicacion").html(msg);
                            break;

                        case '99':

                            var msg='<b><span style="color: #000;">' + '[' + codErr + '] ' + desErr + '</span></b>';
                            $('#valPub').val(codErr);    
                            $("#warningPublicacion").html(msg);
                            break;
                            
                        case '100':

                            var msg='<b><span style="color: #000;">' + '[' + codErr + '] ' + desErr + '</span></b>';
                            $('#valPub').val(codErr);    
                            $("#warningPublicacion").html(msg);
                            break;    

                        default:

                            var dato = xmlDoc.getElementsByTagName('DATOS')[0].childNodes[0].nodeValue;
                            $('#valPub').val(dato);
                            
                    } 
                }                
        });
                
       //alert('valPub '+$('#valPub').val());        
                
        if($('#valPub').val()==8){

                var sw=0;
                var puId = $('#txtPuId').val(); 
                var parametros = {
                    'puId' : puId
                    , 'sw': sw
                };  
                $.ajax({
                        data:  parametros,
                        url: URLprotocol+"//"+URLdomain+"/bodyflex/Dashboard/model/publicacionPublicarModel.php",
                        type:  'post',
                        async:  false, 
                        datetype: 'xml',
                        beforeSend: function(){

                            var strModal='';
                            strModal+='<div class="modal-header">';
                                strModal+='<h3><i class="fa fa-exclamation-triangle"></i>&nbsp;Publicación de artículo</h3>';
                            strModal+='</div>';
                            strModal+='<div class="modal-body" id="modalBody">';
                                strModal+='<div id="espera" class="modal-body">Publicando...........</div>';
                            strModal+='</div>';
                            strModal+='<div class="modal-footer">';
                                strModal+='<a class="btn btn-primary" style="border-color: silver; background-color: #FFCC00; color: black; font-weight: bold;" data-dismiss="modal"><i class="fa fa-plus-circle"></i>&nbsp;Aceptar</a>';
                            strModal+='</div>';
                            $("#myModal").html(strModal);          
                            $("#myModal").show();
                            $("#myModal").modal('show');
                            
                        },
                        success:  function (xml){
                        
                        //alert('publicionPublicarModel ' + xml);
                        
                        var xmlDoc = $.parseXML(xml), $xml = $(xmlDoc);
                        var codErr = xmlDoc.getElementsByTagName('CODERROR')[0].childNodes[0].nodeValue;
                        var desErr = xmlDoc.getElementsByTagName('DESERROR')[0].childNodes[0].nodeValue;
                        
                        switch(codErr){
                            case '9':
                                
                                var msg='<div style="text-align:center;" class="alert alert-block">';
                                msg+='<b><span style="color: #000;">' + '[' + codErr + '] ' + desErr + '</span></b>';
                                msg+='</div>';  
                                
                                var strModal='';    
                                strModal+='<div class="modal-header">';
                                    strModal+='<h3><i class="fa fa-exclamation-triangle"></i>&nbsp;Publicación de artículo</h3>';
                                strModal+='</div>';
                                strModal+='<div class="modal-body" id="modalBody">';
                                    strModal+=msg;
                                strModal+='</div>';
                                strModal+='<div class="modal-footer">';
                                    strModal+='<a class="btn btn-primary" style="border-color: silver; background-color: #FFCC00; color: black; font-weight: bold;" data-dismiss="modal">Aceptar</a>';
                                strModal+='</div>';
                                $("#myModal").html(strModal);  
                                $("#myModal").modal('show');  
                                setTimeout(function() {$('#myModal').modal('hide');}, 1500);
                                break;

                            case '8':
                                
                                var msg='<div style="text-align:center;" class="alert alert-block">';
                                msg+='<b><span style="color: #000;">' + '[' + codErr + '] ' + desErr + '</span></b>';
                                msg+='</div>';  
                                
                                var strModal='';    
                                strModal+='<div class="modal-header">';
                                    strModal+='<h3><i class="fa fa-exclamation-triangle"></i>&nbsp;Publicación de artículo</h3>';
                                strModal+='</div>';
                                strModal+='<div class="modal-body" id="modalBody">';
                                    strModal+=msg;
                                strModal+='</div>';
                                strModal+='<div class="modal-footer">';
                                    strModal+='<a class="btn btn-primary" style="border-color: silver; background-color: #FFCC00; color: black; font-weight: bold;" data-dismiss="modal">Aceptar</a>';
                                strModal+='</div>';
                                $("#myModal").html(strModal);  
                                $("#myModal").modal('show');  
                                setTimeout(function() {$('#myModal').modal('hide');}, 1500);
                                break;        

                            case '99':
                                
                                var msg='<div style="text-align:center;" class="alert alert-block">';
                                msg+='<b><span style="color: #000;">' + '[' + codErr + '] ' + desErr + '</span></b>';
                                msg+='</div>';  
                                
                                var strModal='';    
                                strModal+='<div class="modal-header">';
                                    strModal+='<button type="button" class="close" data-dismiss="modal">×</button>';
                                    strModal+='<h3><i class="fa fa-exclamation-triangle"></i>&nbsp;Publicación de artículo</h3>';
                                strModal+='</div>';
                                strModal+='<div class="modal-body" id="modalBody">';
                                    strModal+=msg;
                                strModal+='</div>';
                                strModal+='<div class="modal-footer">';
                                    strModal+='<a class="btn btn-primary" style="border-color: silver; background-color: #FFCC00; color: black; font-weight: bold;" data-dismiss="modal">Aceptar</a>';
                                strModal+='</div>';
                                $("#myModal").html(strModal);  
                                $("#myModal").modal('show');  
                                setTimeout(function() {$('#myModal').modal('hide');}, 1500);
                                break;                

                            case '100':
                                
                                var msg='<div style="text-align:center;" class="alert alert-block">';
                                msg+='<b><span style="color: #000;">' + '[' + codErr + '] ' + desErr + '</span></b>';
                                msg+='</div>';  
                                
                                var strModal='';    
                                strModal+='<div class="modal-header">';
                                    strModal+='<button type="button" class="close" data-dismiss="modal">×</button>';
                                    strModal+='<h3><i class="fa fa-exclamation-triangle"></i>&nbsp;Publicación de artículo</h3>';
                                strModal+='</div>';
                                strModal+='<div class="modal-body" id="modalBody">';
                                    strModal+=msg;
                                strModal+='</div>';
                                strModal+='<div class="modal-footer">';
                                    strModal+='<a class="btn btn-primary" style="border-color: silver; background-color: #FFCC00; color: black; font-weight: bold;" data-dismiss="modal">Aceptar</a>';
                                strModal+='</div>';
                                $("#myModal").html(strModal);  
                                $("#myModal").modal('show');  
                                setTimeout(function() {$('#myModal').modal('hide');}, 1500);
                                break;           

                            default:

                                var datos = xmlDoc.getElementsByTagName('DATOS')[0].childNodes[0].nodeValue;

                                $('#txtPuFPu').val(datos);

                                var strModal='';
                                strModal+='<div class="modal-header">';
                                    strModal+='<h3><i class="fa fa-exclamation-triangle"></i>&nbsp;Publicación de artículo</h3>';
                                strModal+='</div>';
                                strModal+='<div class="modal-body" id="modalBody">';
                                    strModal+='<div class="modal-body">Artículo <b>publicado</b> exitosamente!.</div>';
                                strModal+='</div>';
                                strModal+='<div class="modal-footer">';
                                    strModal+='<a class="btn btn-primary" style="border-color: silver; background-color: #FFCC00; color: black; font-weight: bold;" data-dismiss="modal">Aceptar</a>';
                                strModal+='</div>';
                                $("#myModal").html(strModal);    
                                $("#myModal").modal('show');    
                                setTimeout(function() {$('#myModal').modal('hide');}, 1500);
                                break;
                                
                        }

                    }
                }); 

                var boton='<button style="border-color: silver; background-color: #FFCC00; color: black; font-weight: bold; margin-left: 10px; width: 100px;" type="button" class="btn btn-info btn-setting" onclick="modalEdicion();" id="btnPublicar">';
                boton+='<i class="fa fa-pencil-square-o"></i>Editar';
                boton+='</button>';
                
                //SETEAMOS ESTADO
                    $('#txtPuEst').val('PUBLICADA');
                
                $('#divPublicar').html(boton); 
                $('#divPublicar').trigger('liszt:updated'); 
                
                //CONSULTAMOS REGISTROS
                    var rut=$('#rut').val();
                    consultaPublicaciones(rut, 0, $('#txtUlt').val(), $('#txtPa').val());
                    
                //PINTAMOS REGISTRO
                    pintaRegistro($('#txtPuId').val());
                
                //INHABILITAMOS ELEMENTOS
                    evaluarEstadoPublicacion('PUBLICADA');                    
                
        }else{
            
            var strMsgModal='';
            var strModal='';
            
            strModal+='<div class="modal-header">';
                strModal+='<h3><i class="fa fa-exclamation-triangle"></i>&nbsp;Alerta publicación</h3>';
            strModal+='</div>';
            strModal+='<div class="modal-body" id="modalBody">';

            switch($('#valPub').val()){
                case '9':

                        var msg='<p style="color: black;">' + '[' + rCodErr + '] ' + rDesErr + '</p>';
                        msg+='<p style="color: black;">' + '[' + rCodErr + '] ' + rDesErr + '</p>';
                        $("#warningPublicacion").html(msg);
                        break;
                        
                case '8':
                    
                        var msg='<div style="text-align:center;" class="alert alert-error"></div>';                    
                        msg+='<p style="color: black;">' + '[' + rCodErr + '] ' + rDesErr + '</p>';
                        $("#warningPublicacion").html(msg);
                        break;
                        
                case '5': //SIN ETIQUETAS NI REFERENCIAS
                    
                        var msg='<div style="text-align:center;" class="alert alert-block">';
                        msg+='<p style="color: black;">Publicación <b>no posee etiquetas ni referencias,</b> favor regularizar antes de probar o publicar.</p></div>';
                        $("#warningPublicacion").html(msg);
                        
                        var msg2='<p style="color: black;">Publicación <b>no posee etiquetas ni referencias,</b> favor regularizar antes de probar o publicar.</p></div>';                                     
                        strMsgModal+=msg2;
                        break;
                        
                case '6': //SIN ETIQUETAS
                    
                        var msg='<div style="text-align:center;" class="alert alert-block">';
                        msg+='<p style="color: black;">Publicación <b>no posee etiquetas,</b> favor regularizar antes de probar o publicar.</p>';
                        msg+='</div>';
                        
                        $("#warningPublicacion").html(msg);
                        var msg2='<p style="color: black;">Publicación <b>no posee etiquetas,</b> favor regularizar antes de probar o publicar.</p>';
                        strMsgModal+=msg2;
                        break;
                        
                case '7': //SIN REFERENCIAS
                    
                        var msg='<div style="text-align:center;" class="alert alert-block">';
                        msg+='<p style="color: black;">Publicación <b>no posee referencias,</b> favor regularizar antes de probar o publicar.</p></div>';
                        $("#warningPublicacion").html(msg);
                                             
                        var msg2='<p style="color: black;">Publicación <b>no posee referencias,</b> favor regularizar antes de probar o publicar.</p>';
                        strMsgModal+=msg2;
                        break;
                        
                case '4': //SIN IMAGEN ASOCIADA
                                        
                        var msg='<div style="text-align:center;" class="alert alert-block">';
                        msg+='<p style="color: black;">Publicación <b>no posee IMAGEN asociada,</b> favor agregue una imagen antes de probar o publicar.</p>';
                        msg+='</div>';
                        $("#warningPublicacion").html(msg);
                        
                        var msg2='<p style="color: black;">Publicación <b>no posee IMAGEN asociada,</b> favor agregue una imagen antes de probar o publicar.</p>';
                        strMsgModal+=msg2;
                        break;        
                        
                case '99': //SIN IMAGEN ASOCIADA
                    
                        var msg='<div style="text-align:center;" class="alert alert-error">';
                        msg+='<p style="color: black;">' + '[' + rCodErr + '] ' + rDesErr + '</p></div>';
                        $("#warningPublicacion").html(msg);
                        
                        msg2='<p style="color: black;">' + '[' + rCodErr + '] ' + rDesErr + '</p>';
                        strMsgModal+=msg2;
                        break;        
                    
                case '100': 
                    
                        var msg='<div style="text-align:center;" class="alert alert-error">';
                        msg+='<p style="color: black;">' + '[' + rCodErr + '] ' + rDesErr + '</p></div>';
                        $("#warningPublicacion").html(msg);
                        
                        msg2='<p style="color: black;">' + '[' + rCodErr + '] ' + rDesErr + '</p></div>';
                        strMsgModal+=msg2;
                        break;             

            }
            
            strModal+=strMsgModal;
            strModal+='</div>';
            strModal+='<div class="modal-footer">';
                strModal+='<a id="btnAceptar" class="btn btn-primary" style="border-color: silver; background-color: #FFCC00; color: black; font-weight: bold;" data-dismiss="modal">Aceptar</a>';
            strModal+='</div>';

            $("#myModal").html(strModal);
            $("#myModal").modal('show');
        
        }
    }  
    
    function editarPublicacion(){
        
        var URLdomain   = window.location.host;
        var URLprotocol = window.location.protocol;
        
        var strModal='';        
        var puId = $('#txtPuId').val(); 
        var sw=1;
        
        //alert('puId ' + puId);
        
        var parametros = {
            'puId' : puId
            , 'sw': sw
        };  
        $.ajax({
                data:  parametros,
                url: URLprotocol+"//"+URLdomain+"/bodyflex/Dashboard/model/publicacionPublicarModel.php",
                type:  'post',
                datetype: 'xml',
                async:  false,
                beforeSend: function(){
                    
                    strModal+='<div class="modal-header">';
                        strModal+='<h3><i class="fa fa-exclamation-triangle"></i>&nbsp;Publicación de artículo</h3>';
                    strModal+='</div>';
                    strModal+='<div class="modal-body" id="modalBody">';
                        strModal+='<div id="espera" class="modal-body">Cambiando a <b>edición</b>.......<div id="esperaWarning"></div></div>';
                    strModal+='</div>';
                    strModal+='<div class="modal-footer">';
                        strModal+='<a class="btn btn-primary" style="border-color: silver; background-color: #FFCC00; color: black; font-weight: bold;" data-dismiss="modal">Aceptar</a>';
                    strModal+='</div>';
                    $("#myModal").html(strModal);          
                    $("#myModal").modal('show');          
                    strModal='';
                    
                },
                success:  function (xml){
                
                    //alert('editarPublicacion ' + xml);
                
                    var xmlDoc = $.parseXML(xml), $xml = $(xmlDoc);
                    var codErr = xmlDoc.getElementsByTagName('CODERROR')[0].childNodes[0].nodeValue;
                    var desErr = xmlDoc.getElementsByTagName('DESERROR')[0].childNodes[0].nodeValue;
                            
                    switch(codErr){
                        case '9':

                            strModal+='<div class="modal-header">';
                                strModal+='<h3><i class="fa fa-exclamation-triangle"></i>&nbsp;Publicación de artículo</h3>';
                            strModal+='</div>';
                            strModal+='<div class="modal-body" id="modalBody">';
                                strModal+='<div class="modal-body">' + '[' + codErr + '] ' + desErr + '</div>';
                            strModal+='</div>';
                            strModal+='<div class="modal-footer">';
                                strModal+='<a class="btn btn-primary" style="border-color: silver; background-color: #FFCC00; color: black; font-weight: bold;" data-dismiss="modal">Aceptar</a>';
                            strModal+='</div>';
                            $("#myModal").html(strModal);  
                            $("#myModal").modal('show');  
                            setTimeout(function() {$('#myModal').modal('hide');}, 1500);
                            break;

                        case '8':

                            strModal+='<div class="modal-header">';
                                strModal+='<h3><i class="fa fa-exclamation-triangle"></i>&nbsp;Publicación de artículo</h3>';
                            strModal+='</div>';
                            strModal+='<div class="modal-body" id="modalBody">';
                                strModal+='<div class="modal-body">' + '[' + codErr + '] ' + desErr + '</div>';
                            strModal+='</div>';
                            strModal+='<div class="modal-footer">';
                                strModal+='<a class="btn btn-primary" style="border-color: silver; background-color: #FFCC00; color: black; font-weight: bold;" data-dismiss="modal">Aceptar</a>';
                            strModal+='</div>';
                            $("#myModal").html(strModal);  
                            $("#myModal").modal('show');  
                            setTimeout(function() {$('#myModal').modal('hide');}, 1500);
                            break;    

                        case '99':

                            strModal+='<div class="modal-header">';
                                strModal+='<h3><i class="fa fa-exclamation-triangle"></i>&nbsp;Publicación de artículo</h3>';
                            strModal+='</div>';
                            strModal+='<div class="modal-body" id="modalBody">';
                                strModal+='<div class="modal-body">' + '[' + codErr + '] ' + desErr + '</div>';
                            strModal+='</div>';
                            strModal+='<div class="modal-footer">';
                                strModal+='<a class="btn btn-primary" style="border-color: silver; background-color: #FFCC00; color: black; font-weight: bold;" data-dismiss="modal">Aceptar</a>';
                            strModal+='</div>';
                            $("#myModal").html(strModal);  
                            $("#myModal").modal('show');  
                            setTimeout(function() {$('#myModal').modal('hide');}, 1500);
                            break;      
                        
                        case '100':

                            strModal+='<div class="modal-header">';
                                strModal+='<h3><i class="fa fa-exclamation-triangle"></i>&nbsp;Publicación de artículo</h3>';
                            strModal+='</div>';
                            strModal+='<div class="modal-body" id="modalBody">';
                                strModal+='<div class="modal-body">' + '[' + codErr + '] ' + desErr + '</div>';
                            strModal+='</div>';
                            strModal+='<div class="modal-footer">';
                                strModal+='<a class="btn btn-primary" style="border-color: silver; background-color: #FFCC00; color: black; font-weight: bold;" data-dismiss="modal">Aceptar</a>';
                            strModal+='</div>';
                            $("#myModal").html(strModal);  
                            $("#myModal").modal('show');  
                            setTimeout(function() {$('#myModal').modal('hide');}, 1500);
                            break;      

                        default:

                            var datos = xmlDoc.getElementsByTagName('DATOS')[0].childNodes[0].nodeValue;
                            $('#txtPuFPu').val(datos);
                            strModal+='<div class="modal-header">';
                                strModal+='<h3><i class="fa fa-exclamation-triangle"></i>&nbsp;Publicación de artículo</h3>';
                            strModal+='</div>';
                            strModal+='<div class="modal-body" id="modalBody">';
                                strModal+='<div class="modal-body">Puede <b>editar</b> el artículo!.</div>';
                            strModal+='</div>';
                            strModal+='<div class="modal-footer">';
                                strModal+='<a class="btn btn-primary" style="border-color: silver; background-color: #FFCC00; color: black; font-weight: bold;" data-dismiss="modal">Aceptar</a>';
                            strModal+='</div>';
                            $("#myModal").html(strModal);      
                            $("#myModal").modal(strModal);      
                            setTimeout(function() {$('#myModal').modal('hide');}, 1500);
                            break;

                    }
                
            }
        }); 
             
        //RECUPERAMOS CONTENIDO DE PUBLICACION
             publicacionObtenerContenidoPublicacion(); 
                
        //Cargamos registros
            var rut=$('#rut').val();
            consultaPublicaciones(rut, 0, $('#txtUlt').val(), $('#txtPa').val());
            
        //pintamos registro
            pintaRegistro($('#txtPuId').val());
        
        var boton='<button style="margin-left: 10px; width: 100px; border-color: silver; background-color: #FFCC00; color: black; font-weight: bold;" type="button" class="btn btn-info btn-setting" onclick="publicarPublicacion();" id="btnPublicar">';
        boton+='<i class="icon-bullhorn"></i>&nbsp;Publicar';
        boton+='</button>';
        
        $('#divPublicar').html(boton); 
        $('#divPublicar').trigger('liszt:updated');
        
        //SETEAMOS ESTADO
            $('#txtPuEst').val('EDITANDO');
       
        //HABILITAMOS ELEMENTOS
            evaluarEstadoPublicacion('EDITANDO');
                
    }
    
    function deshabilitar(){

        $('#txtPuTit').prop('disabled',true);
        $('#txtPu').prop('disabled',true);
        $('#btnGuardar').prop('disabled',true);
        $('#btnEliminar').prop('disabled',true);
        $('#btnLimpiar').prop('disabled',true);
        $('#btnProbar').prop('disabled',true);
        $('#btnPublicar').prop('disabled',true);

    }
    
    function habilitar(){

        $('#txtPuTit').prop('disabled',false);
        $('#txtPu').prop('disabled',false);
        $('#btnGuardar').prop('disabled',false);
        $('#btnEliminar').prop('disabled',false);
        $('#btnLimpiar').prop('disabled',false);
        $('#btnProbar').prop('disabled',false);
        $('#btnPublicar').prop('disabled',false);

    }
    
    function cargaCategorias(){
    var URLdomain   = window.location.host;
    var URLprotocol = window.location.protocol;
    
        $.ajax({
                url: URLprotocol+"//"+URLdomain+"/bodyflex/Dashboard/model/publicacionCategoriasEtiquetaConsultaModel.php",
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
            url: URLprotocol+"//"+URLdomain+"/bodyflex/Dashboard/model/publicacionEtiquetaConsultaModel.php",
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

                    var msg='<div class="alert alert-block">';
                    msg+='<b><span style="color: #000;">Error: No es posible conectar con base de datos.</span></b>';
                    msg+='</div>';                

                    $("#divMantEtiquetas").html(msg);
                    break;   
                
                case '8':

                    var msg='<div class="alert alert-block">';
                    msg+='<b><span style="color: #000;">Error: Procedimiento no retorna datos.</span></b>';
                    msg+='</div>';

                    $("#divMantEtiquetas").html(msg);
                    break;   
                
                case '99':

                    var msg='<div class="alert alert-block">';
                    msg+='<b><span style="color: #000;">'+ desErr +'</span></b>';
                    msg+='</div>';

                    $("#divMantEtiquetas").html(msg);
                    break;   
                
                case '100':

                    var msg='<div class="alert alert-block">';
                    msg+='<b><span style="color: #000;">'+ desErr +'</span></b>';
                    msg+='</div>';

                    $("#divMantEtiquetas").html(msg);
                    break;   
                
                default:
                
                    $('#cmbSelEti').empty();
                    $('#cmbEti').empty();
                    
                    var strVal;
                    
                    $('#cmbSelEti').append($('<option>', {value:'(SELECCIONE)', text:'(SELECCIONE)'}));
                    //$('#cmbEti').append($('<option>', {value:'(SELECCIONE)', text:'(SELECCIONE)'}));
                    
                    $xml.find('REGISTRO').each(function () {        
                        strVal=$(this).text().replace(/(^\s*)|(\s*$)/g,"");
                        if(strVal.length>0){
                            $('#cmbSelEti').append($('<option>', {value:strVal, text:strVal}));
                            //$('#cmbEti').append($('<option>', {value:strVal, text:strVal}));
                        }
                    });
                    
                    $('#cmbSelEti').trigger('liszt:updated');
                    //$('#cmbEti').trigger('liszt:updated'); 
                                                            
                    break;

                }
            }
        });  
    }
    
    function cargaReferencias(){
        
        var URLdomain   = window.location.host;
        var URLprotocol = window.location.protocol;
        
        //Consultamos referencias para actualización de tabla
            var puId = $('#txtPuId').val();
            var parametros2 = {"puId" : puId};  
            $.ajax({
                    data:  parametros2,
                    url: URLprotocol+"//"+URLdomain+"/bodyflex/Dashboard/model/publicacionConsultaReferenciaModel.php",
                    type:  'post',
                    datetype: 'xml',
                    async: true,
                    success:  function (xml){     
                    
                        var xmlDoc = $.parseXML(xml), $xml = $(xmlDoc);
                        var codErr = xmlDoc.getElementsByTagName('CODERROR')[0].childNodes[0].nodeValue;
                        var desErr = xmlDoc.getElementsByTagName('DESERROR')[0].childNodes[0].nodeValue;
                    
                        switch(codErr){
                            case '9':

                                var msg='<div class="alert alert-block">';
                                msg+='<button type="button" class="close" data-dismiss="alert">×</button>';
                                msg+='<b><span style="color: #000;">Error: No es posible conectar con base de datos.</span></b>';
                                msg+='</div>';
                                $('#listRefAsociadas').html(msg);
                                $('#listRefAsociadas').show();
                                break;

                            case '8':

                                var msg='<div class="alert alert-block">';
                                msg+='<button type="button" class="close" data-dismiss="alert">×</button>';
                                msg+='<b><span style="color: #000;">Error: Procedimiento no retorna datos.</span></b>';
                                msg+='</div>';
                                $('#listRefAsociadas').html(msg);
                                $('#listRefAsociadas').show();
                                break;

                            case '99':

                                var msg='<div class="alert alert-block">';
                                msg+='<button type="button" class="close" data-dismiss="alert">×</button>';
                                msg+='<b><span style="color: #000;">' + codErr + ' ' + desErr + '</span></b>';
                                msg+='</div>';
                                $('#listRefAsociadas').html(msg);
                                $('#listRefAsociadas').show();
                                break;

                            case '100':

                                var msg='<div class="alert alert-block">';
                                msg+='<button type="button" class="close" data-dismiss="alert">×</button>';
                                msg+='<b><span style="color: #000;">' + codErr + ' ' + desErr + '</span></b>';
                                msg+='</div>';
                                $('#listRefAsociadas').html(msg);
                                $('#listRefAsociadas').show();
                                break;    

                            case '98':

                                var msg='<div class="alert alert-block">';
                                msg+='<button type="button" class="close" data-dismiss="alert">×</button>';
                                msg+='<b><span style="color: #000;">Favor agregue referencias.</span></b>';
                                msg+='</div>';
                                $('#listRefAsociadas').html(msg);
                                $('#listRefAsociadas').show();
                                break;

                            default:

                                var strVal;
                                $('#cmbTipRef').empty();
                                $('#cmbTipRef').append($('<option>', {value:'(SELECCIONE)', text:'(SELECCIONE)'}));
                                $xml.find('REGISTRO').each(function () {  
                                    strVal=$(this).text().replace(/(^\s*)|(\s*$)/g,"");
                                    if(strVal.length>0){
                                        $('#cmbTipRef').append($('<option>', {value:strVal, text:strVal}));
                                    }
                                });
                                $('#cmbTipRef').trigger('liszt:updated');
                                break;
                                
                        }             
                    }
            }); 
            
    }
    
    function consultaPublicaciones(rut,sw,ultimo,pa){
        
        var URLdomain   = window.location.host;
        var URLprotocol = window.location.protocol;

        //AJAX
        var parametros = { 
                            "rut" : rut ,
                            "sw" : sw  ,
                            "ultimo" : ultimo,
                            "pa" : pa 
                        };            
       
        $.ajax({
                data:  parametros,
                url: URLprotocol+"//"+URLdomain+"/bodyflex/Dashboard/model/publicacionConsultaModel.php",
                type:  'post',
                datetype: 'xml',
                async: true,
            beforeSend: function(){
                $("#espera").show();
            },
            success:  function (xml){
                
                //alert(xml);
                
                var xmlDoc = $.parseXML(xml), $xml = $(xmlDoc);
                var codErr = xmlDoc.getElementsByTagName('CODERROR')[0].childNodes[0].nodeValue;
                var desErr = xmlDoc.getElementsByTagName('DESERROR')[0].childNodes[0].nodeValue;
                
                switch(codErr){
                    case '9':
                        
                        $("#espera").hide();
                            var msg='<div class="alert alert-block">';
                            msg+='<b><span style="color: #000;">Error: No es posible conectar con base de datos.</span></b>';
                            msg+='</div>';
                            
                        $('#warningPublicacion').html(msg);
                        $('#warningPublicacion').show();
                        break;   
                    
                    case '8':
                        
                        $("#espera").hide();
                            var msg='<div class="alert alert-block">';
                            msg+='<b><span style="color: #000;">Error: Procedimiento no retorna datos.</span></b>';
                            msg+='</div>';
                            
                        $('#warningPublicacion').html(msg);
                        $('#warningPublicacion').show();
                        break;   
                  
                    case '99':

                        var msg='<div class="alert alert-block">';
                        msg+='<b><span style="color: #000;">' + desErr + '</span></b>';
                        msg+='</div>';

                        $('#warningPublicacion').html(msg);
                        $('#warningPublicacion').show();
                        break;     
                        
                    case '100':

                        var msg='<div class="alert alert-block">';
                        msg+='<b><span style="color: #000;">' + desErr + '</span></b>';
                        msg+='</div>';

                        $('#warningPublicacion').html(msg);
                        $('#warningPublicacion').show();
                        break;      
                        
                    default:
                        
                        var datos = xmlDoc.getElementsByTagName('DATOS')[0].childNodes[0].nodeValue;
                        var paginacion = xmlDoc.getElementsByTagName('PAGINACION')[0].childNodes[0].nodeValue;
                                                
                        $("#espera").hide();
                        $('#tbody').html(datos);
                        $('#idPag').html(paginacion);
                        
                        break;
                }
            }
        });
       
    };
	
function limpiar(){
  
        //HABILITAR ELEMENTOS
        $('#poseeEti').val(0);
            //PUBLICACION
                //INPUTS
                $('#txtPuTit').prop('disabled',false);
                $('#txtPuFli').prop('disabled',false);
                $("#cmbTipPub").attr('disabled', false).trigger("liszt:updated");
                $('#txtPuBa').prop('disabled',false);
                $('#txtPu').cleditor()[0].disable(false);

                //BOTONES
                $('#btnLimpiar').prop('disabled',false);
                $('#btnGuardar').prop('disabled',false);
                $('#btnEliminar').prop('disabled',false);
                $('#btnProbar').prop('disabled',false);
                $('#btnPublicar').prop('disabled',false);
                
            //IMAGEN                  
                //BOTONES
                $('#btnPublicar').prop('disabled',false); 
		$('#btnImgGuardar').prop('disabled',false); 
                $('#output').prop('disabled',false);
                
            //MANTENEDOR DE CATEGORIAS
                //INPUTS
                $("#cmbAgrCat").attr('disabled', false).trigger("liszt:updated");
                $('#typeahead').prop('disabled',false);
                
                //BOTONES
                $('#file').prop('disabled',false); 
                $('#btnEliminarCat').prop('disabled',false);

            //MANTENEDOR DE ETIQUETAS
                //INPUTS
                $("#cmbSelCat").attr('disabled', false).trigger("liszt:updated");
                $("#cmbSelEti").attr('disabled', false).trigger("liszt:updated");
                $('#typeaheadEti').prop('disabled',false);

                //BOTONES
                $('#btnGuardarEti').prop('disabled',false);
                $('#btnEliminarEti').prop('disabled',false);
                
            //ETIQUETAS PUBLICACION
                //INPUTS
                $("#cmbCat").attr('disabled', false).trigger("liszt:updated");
                
            //PREGUNTAMOS SI POSEE ETOIQUETAS
                //alert('$(#poseeEti).val() ' + $('#poseeEti').val());
                if($('#poseeEti').val()==1){
                    $("#cmbEti").attr('disabled', true).trigger("liszt:updated");
                }else{
                    $("#cmbEti").attr('disabled', false).trigger("liszt:updated");
                }

                //BOTONES
                $('#btnReEtiquetar').prop('disabled',false);
                
            //REFERENCIAS
                //INPUTS
                    $("#cmbTipRef").attr('disabled', false).trigger("liszt:updated");
                    $('#txtNomRef').prop('disabled',false);
                    $('#txtDesRef').prop('disabled',false);
                //BOTONES
                    $('#btnGuardarRef').prop('disabled',false);
                    $('#btnEliminarRef').prop('disabled',false);
        //HABILITAR ELEMENTOS
        
        
        //limpiamos entradas  
        $('#txtPuId').attr('value','');
        $('#puId').attr('value','');
        
        $('#txtPuEst').attr('value','');
        $('#txtPuFCre').attr('value','');
        $('#txtPuFMod').attr('value','');
        $('#txtPuFPu').attr('value','');
        $('#txtPuTit').attr('value','');
        $('#txtPuFli').attr('value','');
        $('#txtPuBa').attr('value','');
        
        $("#cmbTipPub option[value='(SELECCIONE)']").attr("selected",true);
        $('#cmbTipPub').trigger('liszt:updated');
        
        $('#txtPu').cleditor()[0].focus();
        $('#txtPu').cleditor()[0].clear();

        //habilitamos boton modificar, eliminar y cancelar
            $('#btnGuardar').prop('disabled',false);
            $('#btnEliminar').prop('disabled',true);
            $('#btnLimpiar').prop('disabled',true);
            $('#btnProbar').prop('disabled',true);    
            $('#btnPublicar').prop('disabled',true);    
        
        //cargamos elementos
            cargaCategorias();
            cargaEtiquetas();
            cargaReferencias();
        
        //Escondemos etiquetas
            $('#divEtiquetado').hide();
            $("#divImgPublicacion").hide();
            
        //Escondemos referencias
            $('#divReferencias').hide();
        
        //Limpiamos grilla        
            $('#tblPublicaciones tr').each(function(){
                $(this).removeClass('highlight');   
            });
        
        $('#warningPublicacion').html('');
        
    }

    function pintaRegistro(id){
                
        //recorremos tabla para pintar registro actual
        var puID=0;
        $('#tblPublicaciones tr').each(function(){
            var sw=0;
            $(this).children("td").each(function(index){
                switch (index){
                    case 0:	
                        puID = $(this).text();
                        if(puID==$('#txtPuId').val()){
                            sw=1;
                        }
                        break;  
                }
            });
            if(sw==1){
                $(this).addClass('highlight').siblings().removeClass('highlight'); 
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
            url: URLprotocol+"//"+URLdomain+"/bodyflex/Dashboard/model/publicacionEtiquetaConsultaModel.php",
            type:  'post',
            datetype: 'xml',
            async: true,
            success:  function (xml){

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

                    //LIMPIAMOS COMBO
                    $('#cmbSelEti').empty();
                    $('#cmbSelEti').trigger('liszt:updated');

                    $("#warningEti").html(msg);
                    break;    

                default:

                    var cat;
                    var val;

                    $('#cmbSelEti').empty();
                    //$('#cmbEti').empty();

                    //AGREGAMOS PRODUCTO DE CONSULTA             
                    $xml.find('REGISTRO').each(function () {
                        val=$(this).text().replace(/(^\s*)|(\s*$)/g,"");
                        cat = $('#cmbCat').val() + '|' + val; 
                        if(val.length>0){
                            $('#cmbSelEti').append($('<option>', {value:val, text:val}));
                            //$('#cmbEti').append($('<option>', {value:val, text:cat}));   
                        }
                    });    

                    $('#cmbSelEti').trigger('liszt:updated');
                    //$('#cmbEti').trigger('liszt:updated');

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
            url: URLprotocol+"//"+URLdomain+"/bodyflex/Dashboard/model/publicacionObtieneEtiquetasCategoria.php",
            type:  'post',
            datetype: 'xml',
            async: true,
            success:  function (xml){

            var xmlDoc = $.parseXML(xml), $xml = $(xmlDoc);
            var codErr = xmlDoc.getElementsByTagName('CODERROR')[0].childNodes[0].nodeValue;
            var desErr = xmlDoc.getElementsByTagName('DESERROR')[0].childNodes[0].nodeValue;

            switch(codErr){
                case '9':

                    var msg='<div style="text-align:center;" class="alert alert-block">';
                    msg+='<b><span style="color: #000;">' + '[' + codErr + '] ' + desErr + '</span></b>';
                    msg+='</div>';       

                    $("#warningEtiPub").html(msg);
                    break;   

                case '8':

                    var msg='<div style="text-align:center;" class="alert alert-block">';
                    msg+='<b><span style="color: #000;">' + '[' + codErr + '] ' + desErr + '</span></b>';
                    msg+='</div>';               

                    $("#warningEtiPub").html(msg);
                    break;       

                case '99':

                    var msg='<div style="text-align:center;" class="alert alert-block">';
                    msg+='<b><span style="color: #000;">' + '[' + codErr + '] ' + desErr + '</span></b>';
                    msg+='</div>';               

                    $("#warningEtiPub").html(msg);
                    break;    

                case '100':

                    var msg='<div style="text-align:center;" class="alert alert-block">';
                    msg+='<b><span style="color: #000;">' + '[' + codErr + '] ' + desErr + '</span></b>';
                    msg+='</div>';               

                    $("#warningEtiPub").html(msg);
                    break;        

                case '98':

                    var msg='<div style="text-align:center;" class="alert alert-block">';
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
 
    function evaluarEstadoPublicacion(est){
        
        //alert('evaluarEstadoPublicacion ' + est);
        
        if(est=='PUBLICADA'){

            //PUBLICACION
                //INPUTS
                $('#txtPuTit').prop('disabled',true);
                $('#txtPuFli').prop('disabled',true);
                $("#cmbTipPub").attr('disabled', true).trigger("liszt:updated");
                $('#txtPuBa').prop('disabled',true);
                $('#txtPu').cleditor()[0].disable(true);

                //BOTONES               
                $('#btnLimpiar').prop('disabled',false);
                $('#btnGuardar').prop('disabled',true);
                $('#btnEliminar').prop('disabled',true);
                $('#btnProbar').prop('disabled',true);

            //MANTENEDOR DE CATEGORIAS
                //INPUTS
                $("#cmbAgrCat").attr('disabled', true).trigger("liszt:updated");
                $('#typeahead').prop('disabled',true);

                //BOTONES
                $('#btnGuardarCat').prop('disabled',true);
                $('#btnEliminarCatX').prop('disabled',true);

            //MANTENEDOR DE ETIQUETAS
                //INPUTS
                $("#cmbSelCat").attr('disabled', true).trigger("liszt:updated");
                $("#cmbSelEti").attr('disabled', true).trigger("liszt:updated");
                $('#typeaheadEti').prop('disabled',true);

                //BOTONES
                $('#btnGuardarEti').prop('disabled',true);
                $('#btnEliminarEtiX').prop('disabled',true);
                
            //ETIQUETAS PUBLICACION
                //INPUTS
                $("#cmbCat").attr('disabled', true).trigger("liszt:updated");
                $("#cmbEti").attr('disabled', true).trigger("liszt:updated");

                //BOTONES
                $('#btnReEtiquetar').prop('disabled',true);
            
            //REFERENCIAS
                //INPUTS
                    $("#cmbTipRef").attr('disabled', true).trigger("liszt:updated");
                    $('#txtNomRef').prop('disabled',true);
                    $('#txtDesRef').prop('disabled',true);
                //BOTONES
                    $('#btnGuardarRef').prop('disabled',true);
                    $('#btnEliminarRef').prop('disabled',true);
                    $('#btnLimpiarRef').prop('disabled',true);
                    
            //CONTENIDO
                $('#cmbTipCon').prop('disabled',true);
                $('#txtUrlCon').prop('disabled',true);
                $('#btnGuardarCon').prop('disabled',true);
                $('#btnEliminarCon').prop('disabled',true);
                $('#btnLimpiarCon').prop('disabled',true);
                                               
        }else{
            
            //PUBLICACION
                //INPUTS
                $('#txtPuTit').prop('disabled',false);
                $('#txtPuFli').prop('disabled',false);
                $("#cmbTipPub").attr('disabled', false).trigger("liszt:updated");
                $('#txtPuBa').prop('disabled',false);
                $('#txtPu').cleditor()[0].disable(false);

                //BOTONES
                $('#btnLimpiar').prop('disabled',false);
                $('#btnGuardar').prop('disabled',false);
                $('#btnEliminar').prop('disabled',false);
                $('#btnProbar').prop('disabled',false);
                $('#btnPublicar').prop('disabled',false);
                
            //IMAGEN                  
                //BOTONES
                $('#btnPublicar').prop('disabled',false); 

            //MANTENEDOR DE CATEGORIAS
                //INPUTS
                $("#cmbAgrCat").attr('disabled', false).trigger("liszt:updated");
                $('#typeahead').prop('disabled',false);
                
                //BOTONES
                $('#btnGuardarCat').prop('disabled',false);
                $('#btnEliminarCatX').prop('disabled',false);

            //MANTENEDOR DE ETIQUETAS
                //INPUTS
                $("#cmbSelCat").attr('disabled', false).trigger("liszt:updated");
                $("#cmbSelEti").attr('disabled', false).trigger("liszt:updated");
                $('#typeaheadEti').prop('disabled',false);

                //BOTONES
                $('#btnGuardarEti').prop('disabled',false);
                $('#btnEliminarEtiX').prop('disabled',false);
                
            //ETIQUETAS PUBLICACION
                //INPUTS
                $("#cmbCat").attr('disabled', false).trigger("liszt:updated");      
                
                //PREGUNTAMOS SI POSEE ETOIQUETAS
                
                //alert('poseeEti ' + $('#poseeEti').val());
                
                if($('#poseeEti').val()==1){
                    $("#cmbEti").attr('disabled', true).trigger("liszt:updated");
                }else{
                    //alert('entro en 0');
                    $("#cmbEti").attr('disabled', false).trigger("liszt:updated");
                    $("#cmbEti").empty();
                }

                //BOTONES
                $('#btnReEtiquetar').prop('disabled',false);
                
            //REFERENCIAS
                //INPUTS
                    $("#cmbTipRef").attr('disabled', false).trigger("liszt:updated");
                    $('#txtNomRef').prop('disabled',false);
                    $('#txtDesRef').prop('disabled',false);
                //BOTONES
                    $('#btnGuardarRef').prop('disabled',false);
                    $('#btnEliminarRef').prop('disabled',false);
                    $('#btnLimpiarRef').prop('disabled',false);
            
            //CONTENIDO
                $('#cmbTipCon').prop('disabled',false);
                $('#txtUrlCon').prop('disabled',false);
                $('#btnGuardarCon').prop('disabled',false);
                $('#btnEliminarCon').prop('disabled',false);
                $('#btnLimpiarCon').prop('disabled',false);
            
        }
        
    }
    
    
    function publicacionObtenerReferenciasAsociadas(){
        //OBTENEMOS REFERENCIAS ASOCIADAS A LA PUBLICACIÓN
        
        var URLdomain   = window.location.host;
        var URLprotocol = window.location.protocol;
        
            $("#warningRefAso").html('');
            $("#listRefAsociadas").html('');
            $('#listRefAsociadas').trigger('liszt:updated'); 
        
            var puId = $('#txtPuId').val();
            var parametros2 = {"puId" : puId};  
            $.ajax({
                    data:  parametros2,
                    url: URLprotocol+"//"+URLdomain+"/bodyflex/Dashboard/model/publicacionConsultaReferenciaAsociadaModel.php",
                    type:  'post',
                    datetype: 'xml',
                    async: true,
                    success:  function (xml){     
                    
                    //alert('xml ' + xml);
                    
                    var xmlDoc = $.parseXML(xml), $xml = $(xmlDoc);
                    var codErr = xmlDoc.getElementsByTagName('CODERROR')[0].childNodes[0].nodeValue;
                    var desErr = xmlDoc.getElementsByTagName('DESERROR')[0].childNodes[0].nodeValue;
                    
                    switch(codErr){
                        case '9':
                            
                            var msg='<div style="text-align:center;" class="alert alert-block">';
                            msg+='<button type="button" class="close" data-dismiss="alert">×</button>';
                            msg+='<b><span style="color: #000;">' + '[' + codErr + '] ' + desErr + '</span></b>';
                            msg+='</div>';
                        
                            $('#warningRefAso').html(msg);
                            break;
                            
                        case '8':

                            var msg='<div style="text-align:center;" class="alert alert-block">';
                            msg+='<button type="button" class="close" data-dismiss="alert">×</button>';
                            msg+='<b><span style="color: #000;">' + '[' + codErr + '] ' + desErr + '</span></b>';
                            msg+='</div>';
                        
                            $('#warningRefAso').html(msg);
                            break;
                        
                        case '99':

                            var msg='<div style="text-align:center;" style="text-align:center;" class="alert alert-block">';
                            msg+='<button type="button" class="close" data-dismiss="alert">×</button>';
                            msg+='<b><span style="color: #000;">' + '[' + codErr + '] ' + desErr + '</span></b>';
                            msg+='</div>';
                        
                            $('#warningRefAso').html(msg);
                            break;
                          
                        case '100':

                            var msg='<div style="text-align:center;" style="text-align:center;" class="alert alert-block">';
                            msg+='<button type="button" class="close" data-dismiss="alert">×</button>';
                            msg+='<b><span style="color: #000;">' + '[' + codErr + '] ' + desErr + '</span></b>';
                            msg+='</div>';
                        
                            $('#warningRefAso').html(msg);
                            break;    
                            
                        case '98':
                            
                            var msg='<div style="text-align:center;" class="alert alert-block">';
                            msg+='<button type="button" class="close" data-dismiss="alert">×</button>';
                            msg+='<b><span style="color: #000;">' + '[' + codErr + '] ' + desErr + '</span></b>';
                            msg+='</div>';
                        
                            $('#warningRefAso').html(msg);
                            break;
                        
                        default:
                            
                            var datos = xmlDoc.getElementsByTagName('DATOS')[0].childNodes[0].nodeValue;
                            $("#listRefAsociadas").html(datos);
                            $('#listRefAsociadas').trigger('liszt:updated');    
                            
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
                url: URLprotocol+"//"+URLdomain+"/bodyflex/Dashboard/model/publicacionConsultaEtiquetaPublicacionModel.php",
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
                            
                            var msg='<div style="text-align:center;" class="alert alert-block">';
                            msg+='<button type="button" class="close" data-dismiss="alert">×</button>';
                            msg+='<b><span style="color: #000;">' + '[' + codErr + '] ' + desErr + '</span></b>';
                            msg+='</div>';             

                            $("#warningEtiPub").html(msg);
                            break;   
                            
                        case '8':
                            
                            var msg='<div style="text-align:center;" class="alert alert-block">';
                            msg+='<button type="button" class="close" data-dismiss="alert">×</button>';
                            msg+='<b><span style="color: #000;">' + '[' + codErr + '] ' + desErr + '</span></b>';
                            msg+='</div>';     

                            $("#warningEtiPub").html(msg);
                            break;       
                        
                        case '99':
                            
                            var msg='<div style="text-align:center;" class="alert alert-block">';
                            msg+='<button type="button" class="close" data-dismiss="alert">×</button>';
                            msg+='<b><span style="color: #000;">' + '[' + codErr + '] ' + desErr + '</span></b>';
                            msg+='</div>';

                            $("#warningEtiPub").html(msg);
                            break;      
                        
                        case '100':
                            
                            var msg='<div style="text-align:center;" class="alert alert-block">';
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
    
    
    function publicacionObtenerBajada(){
        var URLdomain   = window.location.host;
        var URLprotocol = window.location.protocol;
        var parametros = {"id" : $('#txtPuId').val()};          
        $.ajax({
                data:  parametros,
                url: URLprotocol+"//"+URLdomain+"/bodyflex/Dashboard/model/publicacionObtenerBajadaModel.php",
                type:  'post',
                datetype: 'xml',
                async: true,
                success:  function(xml){ 
                    
                    //alert('publicacionObtenerBajadaModel ' + xml);
                    
                    var xmlDoc = $.parseXML(xml), $xml = $(xmlDoc);
                    var codErr = xmlDoc.getElementsByTagName('CODERROR')[0].childNodes[0].nodeValue;
                    var desErr = xmlDoc.getElementsByTagName('DESERROR')[0].childNodes[0].nodeValue;
                    
                    switch(codErr){
                        case '9':

                            $("#espera").hide();
                            
                            var msg='<div style="text-align:center;" class="alert alert-block">';
                            msg+='<b><span style="color: #000;">Error: No es posible conectar con base de datos.</span></b>';
                            msg+='</div>';
                            
                           $('#warningPublicacion').html(msg);
                           $('#warningPublicacion').show();
                            break;   

                        case '8':

                            $("#espera").hide();
                            
                            var msg='<div style="text-align:center;" class="alert alert-block">';
                            msg+='<b><span style="color: #000;">' + '[' + codErr + '] ' + desErr + '</span></b>';
                            msg+='</div>';
                        
                            $('#warningPublicacion').html(msg);
                            $('#warningPublicacion').show();
                            break;   

                        case '99':

                            var msg='<div style="text-align:center;" class="alert alert-block">';
                            msg+='<b><span style="color: #000;">' + '[' + codErr + '] ' + desErr + '</span></b>';
                            msg+='</div>';

                            $("#warningPublicacion").html(msg);
                            $('#warningPublicacion').show();
                            break;     

                        case '100':

                            var msg='<div style="text-align:center;" class="alert alert-block">';
                            msg+='<b><span style="color: #000;">' + '[' + codErr + '] ' + desErr + '</span></b>';
                            msg+='</div>';

                            $("#warningPublicacion").html(msg);
                            $('#warningPublicacion').show();
                            break;         

                        case '98':

                            var msg='<div style="text-align:center;" class="alert alert-block">';
                            msg+='<b><span style="color: #000;">' + '[' + codErr + '] ' + desErr + '</span></b>';
                            msg+='</div>';

                            $('#warningPublicacion').html(msg);
                            $('#warningPublicacion').show();
                            break;    

                        default:

                            var datos = xmlDoc.getElementsByTagName('DATOS')[0].childNodes[0].nodeValue;
                            $('#txtPuBa').val(datos);

                            $('#warningPublicacion').html('');
                            $('#warningPublicacion').hide();
                            break;
                            
                    }    
                }
            });
    }
    
    function publicacionObtenerContenidoPublicacion(){
        //OBTENER CONTENIDO DE PUBLICACIÓN
        
        var URLdomain   = window.location.host;
        var URLprotocol = window.location.protocol;
        
            var parametros = {"id" : $('#txtPuId').val()};            
            $.ajax({
                data:  parametros,
                url: URLprotocol+"//"+URLdomain+"/bodyflex/Dashboard/model/publicacionObtenerModel.php",
                type:  'post',
                datetype: 'xml',
                async: true,
                success:  function(xml){
                    
                    alert('publicacionObtenerModel' + xml);
                    
                    var xmlDoc = $.parseXML(xml), $xml = $(xmlDoc);
                    var codErr = xmlDoc.getElementsByTagName('CODERROR')[0].childNodes[0].nodeValue;
                    var desErr = xmlDoc.getElementsByTagName('DESERROR')[0].childNodes[0].nodeValue;
                    
                    switch(codErr){
                        case '9':

                            $("#espera").hide();
                            
                            var msg='<div style="text-align:center;" class="alert alert-block">';
                            msg+='<button type="button" class="close" data-dismiss="alert">×</button>';
                            msg+='<b><span style="color: #000;">' + '[' + codErr + '] ' + desErr + '</span></b>';
                            msg+='</div>';
                            
                           $('#warningPublicacion').html(msg);
                           $('#warningPublicacion').show();
                            break;   

                        case '8':

                            $("#espera").hide();
                            
                            var msg='<div style="text-align:center;" class="alert alert-block">';
                            msg+='<button type="button" class="close" data-dismiss="alert">×</button>';
                            msg+='<b><span style="color: #000;">' + '[' + codErr + '] ' + desErr + '</span></b>';
                            msg+='</div>';
                            
                            $('#warningPublicacion').html(msg);
                            $('#warningPublicacion').show();
                            break;   

                        case '99':

                            var msg='<div style="text-align:center;" class="alert alert-block">';
                            msg+='<button type="button" class="close" data-dismiss="alert">×</button>';
                            msg+='<b><span style="color: #000;">' + '[' + codErr + '] ' + desErr + '</span></b>';
                            msg+='</div>';

                            $("#warningPublicacion").html(msg);
                            $('#warningPublicacion').show();
                            break;     

                        case '100':

                            var msg='<div style="text-align:center;" class="alert alert-block">';
                            msg+='<button type="button" class="close" data-dismiss="alert">×</button>';
                            msg+='<b><span style="color: #000;">' + '[' + codErr + '] ' + desErr + '</span></b>';
                            msg+='</div>';

                            $("#warningPublicacion").html(msg);
                            $('#warningPublicacion').show();
                            break;         

                        case '98':

                            var msg='<div style="text-align:center;" class="alert alert-block">';
                            msg+='<button type="button" class="close" data-dismiss="alert">×</button>';
                            msg+='<b><span style="color: #000;">' + '[' + codErr + '] ' + desErr + '</span></b>';
                            msg+='</div>';

                            $('#warningPublicacion').html(msg);
                            $('#warningPublicacion').show();
                            break;    

                        default:

                            var datos = xmlDoc.getElementsByTagName('DATOS')[0].childNodes[0].nodeValue;
                           
                            $('#txtPu').cleditor()[0].focus();
                            $('#txtPu').cleditor()[0].clear();
                            $('#txtPu').cleditor()[0].execCommand('inserthtml',datos); 
                            $('#txtPu').trigger('liszt:updated');
                            
                            $('#warningPublicacion').html('');
                            $('#warningPublicacion').hide();
                            break;
                    }                 
                }
            });
    }
    
    
    function publicacionObtenerContenido(){
        //OBTENER CONTENIDO IMAGENES Y VIDEOS ASOCIADOS
        
        var URLdomain   = window.location.host;
        var URLprotocol = window.location.protocol;
        
        var parametros2 = {"puId" : $('#puId').val()};  
        $.ajax({
            data:  parametros2,
            url: URLprotocol+"//"+URLdomain+"/bodyflex/Dashboard/model/publicacionConsultaContenidoModel.php",
            type:  'post',
            datetype: 'xml',
            async: true,
            success:  function (xml){     

                //alert('publicacionConsultaContenidoModel ' + xml);

                var xmlDoc = $.parseXML(xml), $xml = $(xmlDoc);
                var codErr = xmlDoc.getElementsByTagName('CODERROR')[0].childNodes[0].nodeValue;
                var desErr = xmlDoc.getElementsByTagName('DESERROR')[0].childNodes[0].nodeValue;

                switch(codErr){
                    case '9':

                        var msg='<div style="text-align:center;" class="alert alert-block">';
                        msg+='<button type="button" class="close" data-dismiss="alert">×</button>';
                        msg+='<b><span style="color: #000;">' + '[' + codErr + '] ' + desErr + '</span></b>';
                        msg+='</div>';

                        $('#warningConAso').html(msg);
                        //$("#modalBody").html(msg);
                        setTimeout(function() {$('#modalBody').modal('hide');}, 750); 
                        break;

                    case '8':

                        var msg='<div style="text-align:center;" class="alert alert-block">';
                        msg+='<button type="button" class="close" data-dismiss="alert">×</button>';
                        msg+='<b><span style="color: #000;">' + '[' + codErr + '] ' + desErr + '</span></b>';
                        msg+='</div>';

                        $('#warningConAso').html(msg);
                        //$("#modalBody").html(msg);
                        setTimeout(function() {$('#modalBody').modal('hide');}, 750); 
                        break;

                    case '99':

                        var msg='<div style="text-align:center;" style="text-align:center;" class="alert alert-block">';
                        msg+='<button type="button" class="close" data-dismiss="alert">×</button>';
                        msg+='<b><span style="color: #000;">' + '[' + codErr + '] ' + desErr + '</span></b>';
                        msg+='</div>';

                        $('#warningConAso').html(msg);
                        //$("#modalBody").html(msg);
                        setTimeout(function() {$('#modalBody').modal('hide');}, 750); 
                        break;

                    case '100':

                        var msg='<div style="text-align:center;" style="text-align:center;" class="alert alert-block">';
                        msg+='<button type="button" class="close" data-dismiss="alert">×</button>';
                        msg+='<b><span style="color: #000;">' + '[' + codErr + '] ' + desErr + '</span></b>';
                        msg+='</div>';

                        $('#warningConAso').html(msg);
                        //$("#modalBody").html(msg);
                        setTimeout(function() {$('#modalBody').modal('hide');}, 750); 
                        break;    

                    case '98':

                        var msg='<div style="text-align:center;" class="alert alert-block">';
                        msg+='<button type="button" class="close" data-dismiss="alert">×</button>';
                        msg+='<b><span style="color: #000;">' + '[' + codErr + '] ' + desErr + '</span></b>';
                        msg+='</div>';

                        //Establece botón gris sin evento
                        var botones ='<i style="margin-top: 100px;" class="fa fa-picture-o fa-4x"></i>';        
                        $('#right').html(botones);

                        $('#listConAsociadas').html('');
                        $('#warningConAso').html(msg);
                        //$("#modalBody").html(msg);
                        setTimeout(function() {$('#modalBody').modal('hide');}, 750); 
                        break;

                    default:
                       
                        //Establece botón gris sin evento
                        var botones ='<i style="margin-top: 100px;" class="fa fa-picture-o fa-4x"></i>';        
                        $('#right').html(botones);
                        
                        $('#warningConAso').html('');
                        var datos = xmlDoc.getElementsByTagName('DATOS')[0].childNodes[0].nodeValue;
                        $('#listConAsociadas').html(datos);
                        
                }              
            }
        });   
                        
    }
    
    function publicacionEstablecerSesion(){
        
        var URLdomain   = window.location.host;
        var URLprotocol = window.location.protocol;
        
        var parametros = {"id" : $('#puId').val()};            
        $.ajax({
            data:  parametros,
            url: URLprotocol+"//"+URLdomain+"/bodyflex/Dashboard/model/publicacionEstableceIdEnSesionModel.php",
            type:  'post',
            async: true
        });
                
    }
    
    function limpiaString(cadena){
       //alert('limpiaString');
        var patron13 = /^[0-9a-zA-ZáéíóúÁÉÍÓÚäëïöüÄËÏÖÜàèìòùÀÈÌÒÙñÑ\s\'\:\.\,\;-]*$/;
        return cadena.replace(patron13,'');
        
    }
    
    function escapeXML(string){

        var str = string;
        str = str.replace(/\&/g,"&amp;");
        str = str.replace(/\>/g,"&gt;");
        str = str.replace(/\</g,"&lt;");
        str = str.replace(/\"/g,"&quot;");
        str = str.replace(/\'/g,"&apos;");

        return str;
        
}

var normalize = (function() {
  var from = "ÃÀÁÄÂÈÉËÊÌÍÏÎÒÓÖÔÙÚÜÛãàáäâèéëêìíïîòóöôùúüûÑñÇç", 
      to   = "AAAAAEEEEIIIIOOOOUUUUaaaaaeeeeiiiioooouuuunncc",
      mapping = {};
 
  for(var i = 0, j = from.length; i < j; i++ )
      mapping[ from.charAt( i ) ] = to.charAt( i );
 
  return function( str ){
      var ret = [];
      for( var i = 0, j = str.length; i < j; i++ ) {
          var c = str.charAt( i );
          if( mapping.hasOwnProperty( str.charAt( i ) ) )
              ret.push( mapping[ c ] );
          else
              ret.push( c );
      }      
      return ret.join( '' );
  };
 
})();