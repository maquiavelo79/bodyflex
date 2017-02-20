
jQuery(document).ready(function(){

var URLdomain   = window.location.host;
var URLprotocol = window.location.protocol;
      
    //XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX    
        var rut=$('#rut').val();
    //XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX 

        //AJAX
        var sw=0;
        var pa=1;
        var ultimo=0;
        var parametros = { 
                            "rut" : rut ,
                            "sw" : sw  ,
                            "ultimo" : ultimo   ,
                            "pa" : pa 
                        };            
       
        $.ajax({
                data:  parametros,
                url: URLprotocol+"//"+URLdomain+"/bodyflex/admin/model/publicacionConsultaModel.php",
                type:  'post',
                datetype: 'xml',
            beforeSend: function(){
                    $("#espera").show();
            },
            success: function (xml){
                
                //alert(xml);
                
                var xmlDoc = $.parseXML(xml), $xml = $(xmlDoc);
                var codErr = xmlDoc.getElementsByTagName('CODERROR')[0].childNodes[0].nodeValue;
                var desErr = xmlDoc.getElementsByTagName('DESERROR')[0].childNodes[0].nodeValue;
                
                switch(codErr){
                    case '9':
                        
                        $("#espera").hide();
                        
                        var msg='<div style="text-align:center;" class="alert alert-block">';
                        msg+='<b><span style="color: #000;">' + '[' + codErr + '] ' + desErr + '</span></b>';
                        msg+='</div>';
                        
                        $('#conWarning').html(msg);
                        $('#conWarning').show();
                        
                        //desHabilitar
                        
                        break;   
                    
                    case '8':
                        
                        $("#espera").hide();
                        
                        var msg='<div style="text-align:center;" class="alert alert-block">';
                        msg+='<b><span style="color: #000;">' + '[' + codErr + '] ' + desErr + '</span></b>';
                        msg+='</div>';
                        
                        $('#conWarning').html(msg);
                        $('#conWarning').show();
                        
                        //desHabilitar
                        
                        break;   
                  
                    case '99':

                        var msg='<div style="text-align:center;" class="alert alert-block">';
                        msg+='<b><span style="color: #000;">' + '[' + codErr + '] ' + desErr + '</span></b>';
                        msg+='</div>';

                        $("#warningCat").html(msg);
                        $('#conWarning').show();
                        
                        //desHabilitar
                        
                        break;     
                        
                    case '100':

                        var msg='<div style="text-align:center;" class="alert alert-block">';
                        msg+='<b><span style="color: #000;">' + '[' + codErr + '] ' + desErr + '</span></b>';
                        msg+='</div>';

                        $("#warningCat").html(msg);
                        $('#conWarning').show();
                        
                        //desHabilitar
                        
                        break;         
                    
                    case '98':

                        var msg='<div style="text-align:center;" class="alert alert-block">';
                        msg+='<b><span style="color: #000;">' + '[' + codErr + '] ' + desErr + '</span></b>';
                        msg+='</div>';

                        $("#espera").hide();
                        
                        habilitar();
                        
                        $('#warningPublicacion').html(msg);
                        $('#tbody').html('');
                        $('#idPag').html('');
                        
                        break;    
                        
                    default:
                        
                        var datos = xmlDoc.getElementsByTagName('DATOS')[0].childNodes[0].nodeValue;
                        var paginacion = xmlDoc.getElementsByTagName('PAGINACION')[0].childNodes[0].nodeValue;
                                                
                        $("#espera").hide();
                        
                        //habilitar();
                        
                        $('#tbody').html(datos);
                        $('#idPag').html(paginacion);
                        
                        break;
                }
            }
        });
       
        //no mostramos DIV de etiquetado ni referencias
        $("#divEtiquetado").css("display", "none");
        $("#divReferencias").css("display", "none");
        $("#divImgPublicacion").css("display", "none");
        $("#divContenido").css("display", "none");
        
        limpiar();
        publicacionEstablecerSesion(); 
        cargaCategorias();
        cargaReferencias();
        

    
 $('#btnGuardar').click(function(){
        $(this).addClass('btn btn-primary');
        $('#warningPublicacion').hide();
            
        //OBTENEMOS VALORES
        var rut=$('#rut').val();
        var id = $('#txtPuId').val(); 
        var tit = $('#txtPuTit').val(); 
        var pu = $('#txtPu').val(); 
        var fli = $('#txtPuFli').val(); 
        var baj = $('#txtPuBa').val(); 
        var tip = $('#cmbTipPub').val(); 

        if(tit == '') {
        
            var msg='<div style="text-align:center;" class="alert alert-error">';
            msg+'<button type="button" class="close" data-dismiss="alert">×</button>';
            msg+='<b><span style="color: #000;">Por favor agregue título de publicación.</b>';
            msg+='</div>';
            
            $('#warningPublicacion').html(msg);
            $('#warningPublicacion').show();
            return false;
            
        }  
        
        if(fli == '') {

            var msg='<div style="text-align:center;" class="alert alert-error">';
            msg+'<button type="button" class="close" data-dismiss="alert">×</button>';
            msg+='<b><span style="color: #000;">Por favor agregue identificador de imagen Google Drive.</b>';
            msg+='</div>';
            
            $('#warningPublicacion').html(msg);
            $('#warningPublicacion').show();
            return false;
            
        }
        
        if(tip == '(SELECCIONE)') {

            var msg='<div style="text-align:center;" class="alert alert-error">';
            msg+'<button type="button" class="close" data-dismiss="alert">×</button>';
            msg+='<b><span style="color: #000;">Por favor agrege tipo de publicación.</b>';
            msg+='</div>';
            
            $('#warningPublicacion').html(msg);
            $('#warningPublicacion').show();
            return false;
            
        }
        
        if(pu == '') {
                        
            $('#txtPuTit').removeClass('error');   
            $('#txtPuFli').removeClass('error');   
            $('#txtPuBa').removeClass('error');   
                     
            var msg='<div style="text-align:center;" class="alert alert-error">';
            msg+'<button type="button" class="close" data-dismiss="alert">×</button>';
            msg+='<b><span style="color: #000;">Por favor ingrese publicación.</b>';
            msg+='</div>';
            
            $('#warningPublicacion').html(msg);
            $('#warningPublicacion').show();
            return false;
            
        }
        
        if(baj == '') {

            var msg='<div style="text-align:center;" class="alert alert-error">';
            msg+'<button type="button" class="close" data-dismiss="alert">×</button>';
            msg+='<b><span style="color: #000;">Por favor ingrese bajada de publicación.</b>';
            msg+='</div>';
            
            $('#warningPublicacion').html(msg);
            $('#warningPublicacion').show();
            return false;
            
        }
        
        $('#txtPuTit').removeClass('error');
        $('#txtPu').removeClass('error');  
        $('#txtPuFli').removeClass('error'); 
        $('#txtPuBa').removeClass('error'); 
        $('#warningPublicacion').hide();

        //LIMPIAMOS ENTRADAS
            //tit =   normalize(tit);
            //pu  =   normalize(pu);
            //baj =   normalize(baj);
            
            //alert('pu ' + pu);
        //LIMPIAMOS ENTRADAS    

            //AJAX
            var parametros = {
                            "rut" : rut,
                            "id" : id,
                            "tit": tit,
                            "pu": pu,
                            "fli": fli,
                            "baj": baj,
                            "tip": tip
            };            

            $.ajax({
                data:  parametros,
                url: URLprotocol+"//"+URLdomain+"/bodyflex/admin/model/publicacionAgregaModel.php",
                type:  'post',
                datetype: 'xml',
            beforeSend: function(){
                $("#espera").show();
            },
            success:  function (xml){     
                
                //alert('publicacionAgregaModel ' + xml);
                
                $("#espera").hide();
                var xmlDoc = $.parseXML(xml), $xml = $(xmlDoc);
                var codErr = xmlDoc.getElementsByTagName('CODERROR')[0].childNodes[0].nodeValue;
                var desErr = xmlDoc.getElementsByTagName('DESERROR')[0].childNodes[0].nodeValue;
                
                switch(codErr){
                    case '9':
                        
                        var msg='<div style="text-align:center;" class="alert alert-block">';
                        msg+='<b><span style="color: #000;">' + '[' + codErr + '] ' + desErr + '</span></b>';
                        msg+='</div>';

                        $('#warningPublicacion').html(msg);
                        $('#warningPublicacion').show();
                        
                        //mostramos DIV de etiquetado
//                        $("#divEtiquetado").css("display", "none");
//                        $("#divReferencias").css("display", "none");
//                        $("#divImgPublicacion").css("display", "none");
                        
                        //desHabilitar
                        break;
                        
                    case '8': // NO INGRESO NI ACTUALIZÓ
                        
                        var msg='<div style="text-align:center;" class="alert alert-block">';
                        msg+='<b><span style="color: #000;">' + '[' + codErr + '] ' + desErr + '</span></b>';
                        msg+='</div>';

                        $('#warningPublicacion').html(msg);
                        $('#warningPublicacion').show();
                        
                        //mostramos DIV de etiquetado
//                        $("#divEtiquetado").css("display", "none");
//                        $("#divReferencias").css("display", "none");
//                        $("#divImgPublicacion").css("display", "none");
                        
                        //desHabilitar
                        break;
                        
                    case '100':
                        
                        var msg='<div style="text-align:center;" class="alert alert-block">';
                        msg+='<b><span style="color: #000;">' + '[' + codErr + '] ' + desErr + '</span></b>';
                        msg+='</div>';
                        
                        //desHabilitar
                        $("#warningPublicacion").html(msg);
                        break;     
                    
                    case '99':
                        
                        var msg='<div style="text-align:center;" class="alert alert-block">';
                        msg+='<b><span style="color: #000;">' + '[' + codErr + '] ' + desErr + '</span></b>';
                        msg+='</div>';
                        
                        //desHabilitar
                        $("#warningPublicacion").html(msg);
                        break;     
                        
                    default:

                        var accion = xmlDoc.getElementsByTagName('ACCION')[0].childNodes[0].nodeValue,
                        id = xmlDoc.getElementsByTagName('IDENTIFICADOR')[0].childNodes[0].nodeValue,
                        est = xmlDoc.getElementsByTagName('ESTADO')[0].childNodes[0].nodeValue,
                        feCre = xmlDoc.getElementsByTagName('FECHA_CREACION')[0].childNodes[0].nodeValue,
                        feMod = xmlDoc.getElementsByTagName('FECHA_MODIFICACION')[0].childNodes[0].nodeValue,
                        fePub = xmlDoc.getElementsByTagName('FECHA_PUBLICACION')[0].childNodes[0].nodeValue,
                        titulo = xmlDoc.getElementsByTagName('TITULO')[0].childNodes[0].nodeValue,
                        publicacion = xmlDoc.getElementsByTagName('PUBLICACION')[0].childNodes[0].nodeValue,
                        flickr = xmlDoc.getElementsByTagName('FLICKR')[0].childNodes[0].nodeValue,
                        bajada = xmlDoc.getElementsByTagName('BAJADA')[0].childNodes[0].nodeValue;
                
                        //SETEAMOS ID DE PUBLICACION
                        $('#txtPuId').val(id); 
                        $('#puId').val(id); 
                        
                        $('#txtPuEst').val(est); //ESTADO
                        $('#txtPuFCre').val(feCre); //FECHA CREACIÓN
                        $('#txtPuFMod').val(feMod); //FECHA MODIFICACIÓN
                        $('#txtPuTit').val(titulo); //TITULO
                        $('#txtPu').val(publicacion); //PUBLICACION
                        $('#txtPuFli').val(flickr); //FLICKR
                        $('#txtPuBa').val(bajada); //BAJADA
                                                
                        if(fePub!='#'){
                            $('#txtPuFPu').val(fePub); //FECHA PUBLICACIÓN
                        }else{
                            $('#txtPuFPu').val('');
                        }    

                        var msg;
                        if(accion=='1'){
                            msg='<div style="text-align:center; color: black:" class="alert alert-success">';
                            msg+='<button type="button" class="close" data-dismiss="alert">×</button>';
                            msg+='<b style="color: black;">Publicación ingresada exitosamente!.</b>';
                            msg+='</div>';
                        }else{
                            msg='<div style="text-align:center; color: black;" class="alert alert-success">';
                            msg+='<button type="button" class="close" data-dismiss="alert">×</button>';
                            msg+='<b style="color: black;">Publicación modificada exitosamente!.</b>';
                            msg+='</div>';
                        }
                       
                        $('#warningPublicacion').html(msg);
                        $('#warningPublicacion').show();

                        if(accion==1){
                            consultaPublicaciones(rut, 0, 0, 1);
                        }else{
                            consultaPublicaciones(rut, 0, $('#txtUlt').val(), $('#txtPa').val());                            
                            pintaRegistro($('#txtPuId').val());
                        }         
                        
                        //deshabilitamos botones
                        $('#btnPublicar').prop('disabled',true);
                        $('#btnProbar').prop('disabled',true);
                                                
                        //mostramos DIV de etiquetado
                        $("#divEtiquetado").css("display", "block");
                        $("#divReferencias").css("display", "block");
                        $("#divImgPublicacion").css("display", "block");
                        $("#divContenido").css("display", "block");
                        
                        habilitar();
                                               
                        break;
                    
                }        
                
            }
        });
    
    });
   
    $('#btnEliminar').click(function(){

        var strModal='';
        var tit = $('#txtPuTit').val();

            strModal+='<div class="modal-header">';
                strModal+='<h3>Eliminar publicación</h3>';
            strModal+='</div>';
            strModal+='<div class="modal-body" id="modalBody">';
                strModal+='<p>¿Desea eliminar publicación <b>' + tit + '</b>?</p><br>';
            strModal+='</div>';
            strModal+='<div class="modal-footer">';
                strModal+='<a class="btn" data-dismiss="modal">Cancelar</a>';
                strModal+='<a id="btnEliPu" style="border-color: silver; background-color: #FFCC00; color: black; font-weight: bold;" class="btn btn-primary">Eliminar</a>';
            strModal+='</div>';

        $('#myModal').html(strModal);

    });

    $(document).on("click", "#btnEliPu", function(event){

        var rut=$('#rut').val();
        var id = $('#txtPuId').val(); 
        //var img = $('#nomImg').val();

        //Div de Carga
        var strLoad='<div id="espera" class="modal-body"></div>';
        
        //AJAX
        var parametros = {
                            "id" : id
                            //,   "img" : img
                        };            

        //escondemos mensajería
        $('#warningPublicacion').hide();

        $.ajax({
            
            data:  parametros,
            url: URLprotocol+"//"+URLdomain+"/bodyflex/admin/model/publicacionEliminaModel.php",
            type:  'post',
            datetype: 'xml',
            beforeSend: function(){
                $("#modalBody").html(strLoad);
            },
            success:  function (xml){     
                
                //alert('publicacionEliminaModel ' + xml);
                
                var xmlDoc = $.parseXML(xml), $xml = $(xmlDoc);
                var codErr = xmlDoc.getElementsByTagName('CODERROR')[0].childNodes[0].nodeValue;
                var desErr = xmlDoc.getElementsByTagName('DESERROR')[0].childNodes[0].nodeValue;
                
                switch(codErr){
                    case '9':
                        
                        var msg='<div style="text-align:center;" class="alert alert-block">';
                        msg+='<b><span style="color: #000;">' + '[' + codErr + '] ' + desErr + '</span></b>';
                        msg+='</div>';

                        $("#modalBody").html(msg);
                        $("#modalBody").show();    
                        setTimeout(function() {$('#myModal').modal('hide');}, 1000);

                        $('#warningPublicacion').html(msg);
                        $('#warningPublicacion').show();
                        
                        break;
                        
                    case '8':
                        
                        var msg='<div style="text-align:center;" class="alert alert-block">';
                        msg+='<b><span style="color: #000;">' + '[' + codErr + '] ' + desErr + '</span></b>';
                        msg+='</div>';

                        $("#modalBody").html(msg);
                        $("#modalBody").show();    
                        setTimeout(function() {$('#myModal').modal('hide');}, 1000);

                        $('#warningPublicacion').html(msg);
                        $('#warningPublicacion').show();
                        
                        break;
                    
                    case '99':
                        
                        var msg='<div style="text-align:center;" class="alert alert-block">';
                        msg+='<b><span style="color: #000;">' + '[' + codErr + '] ' + desErr + '</span></b>';
                        msg+='</div>';

                        $("#modalBody").html(msg);
                        $("#modalBody").show();    
                        setTimeout(function() {$('#myModal').modal('hide');}, 1000);

                        $('#warningPublicacion').html(msg);
                        $('#warningPublicacion').show();
                        
                        break;
                        
                    case '100':
                        
                        var msg='<div style="text-align:center;" class="alert alert-block">';
                        msg+='<b><span style="color: #000;">' + '[' + codErr + '] ' + desErr + '</span></b>';
                        msg+='</div>';

                        $("#modalBody").html(msg);
                        $("#modalBody").show();    
                        setTimeout(function() {$('#myModal').modal('hide');}, 1000);

                        $('#warningPublicacion').html(msg);
                        $('#warningPublicacion').show();
                        
                        break;    
                    
                    case '0':

                        //Cargamos registros
                        consultaPublicaciones(rut, 0, 0, 1);

                        //Limpiamos formulario
                        limpiarForm();

                        var msg='<b><span style="color: #000;">Operación exitosa!.</span></b>';    

                        $("#modalBody").html(msg);
                        $("#modalBody").show();
                        setTimeout(function() {$('#myModal').modal('hide');}, 1000);
                        break; 
                        
                }                
            }
        });

    });

    $('#btnLimpiar').click(function(){

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
                $('#cmbEti').prop('disabled',false);
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
        
    });
  
});


    
    
    
    