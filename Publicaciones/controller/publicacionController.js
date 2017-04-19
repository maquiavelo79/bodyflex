
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
        var parametros = { "rut" : rut, "sw" : sw, "ultimo" : ultimo, "pa" : pa };            
        
        $.ajax({
                data:  parametros,
                url: URLprotocol+"//"+URLdomain+"/bodyflex/Publicaciones/model/publicacionConsultaModel.php",
                type:  'post',
                datetype: 'xml',
                async: true,
            beforeSend: function(){
                $("#espera").show();
            },
            success: function (xml){
                
                //alert('publicacionConsultaModel '+xml);
                
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

                        $("#espera").hide();
                        habilitar();
                        var msg='<div style="text-align:center;" class="alert alert-block">';
                        msg+='<button type="button" class="close" data-dismiss="alert">×</button>';
                        msg+='<b><span style="color: black;"><span style="font-size: 22px; color: orangered; font-family: Impact, Charcoal, sans-serif;">Estimado profesional!</span><br><span style="font-size: 13px; color: blue;">TE INVITAMOS A ESCRIBIR PUBLICACIONES, COMPARTE INFORMACIÓN Y CONOCIMIENTO PARA NUESTRA COMUNIDAD! </sapn></span></b>';
                        msg+='<div id="esperaWarning"></div>';
                        msg+='</div>';
                        $('#warningPublicacion').html(msg);
                        $('#warningPublicacion').show();
                        setTimeout(function() {
                            $('#warningPublicacion').hide();
                        }
                        , 5000); 
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
            msg+='<div id="esperaWarning"></div>';
            msg+='</div>';
            
            $('#warningPublicacion').html(msg);
            $('#warningPublicacion').show();
                        
            setTimeout(function() {
                $('#warningPublicacion').hide();
            }
            , 1500); 
            return false;
            
        }  
        
        if(fli == '') {

            var msg='<div style="text-align:center;" class="alert alert-error">';
            msg+'<button type="button" class="close" data-dismiss="alert">×</button>';
            msg+='<b><span style="color: #000;">Por favor agregue identificador de imagen Google Drive.</b>';
            msg+='<div id="esperaWarning"></div>';
            msg+='</div>';
            
            $('#warningPublicacion').html(msg);
            $('#warningPublicacion').show();
            setTimeout(function() {
                $('#warningPublicacion').hide();
            }
            , 1500); 
            return false;
            
        }
        
        if(tip == '(SELECCIONE)') {

            var msg='<div style="text-align:center;" class="alert alert-error">';
            msg+'<button type="button" class="close" data-dismiss="alert">×</button>';
            msg+='<b><span style="color: #000;">Por favor agrege tipo de publicación.</b>';
            msg+='<div id="esperaWarning"></div>';
            msg+='</div>';
            
            $('#warningPublicacion').html(msg);
            $('#warningPublicacion').show();
            setTimeout(function() {
                $('#warningPublicacion').hide();
            }
            , 1500); 
            return false;
            
        }
        
        if(pu == '') {
                        
            $('#txtPuTit').removeClass('error');   
            $('#txtPuFli').removeClass('error');   
            $('#txtPuBa').removeClass('error');   
                     
            var msg='<div style="text-align:center;" class="alert alert-error">';
            msg+'<button type="button" class="close" data-dismiss="alert">×</button>';
            msg+='<b><span style="color: #000;">Por favor ingrese publicación.</b>';
            msg+='<div id="esperaWarning"></div>';
            msg+='</div>';
            
            $('#warningPublicacion').html(msg);
            $('#warningPublicacion').show();
            setTimeout(function() {
                $('#warningPublicacion').hide();
            }
            , 1500); 
            return false;
            
        }
        
        if(baj == '') {

            var msg='<div style="text-align:center;" class="alert alert-error">';
            msg+'<button type="button" class="close" data-dismiss="alert">×</button>';
            msg+='<b><span style="color: #000;">Por favor ingrese bajada de publicación.</b>';
            msg+='<div id="esperaWarning"></div>';
            msg+='</div>';
            
            $('#warningPublicacion').html(msg);
            $('#warningPublicacion').show();
            setTimeout(function() {
                $('#warningPublicacion').hide();
            }
            , 1500); 
            return false;
            
        }
        
        $('#txtPuTit').removeClass('error');
        $('#txtPu').removeClass('error');  
        $('#txtPuFli').removeClass('error'); 
        $('#txtPuBa').removeClass('error'); 
        $('#warningPublicacion').hide();

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
                url: URLprotocol+"//"+URLdomain+"/bodyflex/Publicaciones/model/publicacionAgregaModel.php",
                type:  'post',
                datetype: 'xml',
                async: false,
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
                        break;
                        
                    case '8': // NO INGRESO NI ACTUALIZÓ
                        
                        var msg='<div style="text-align:center;" class="alert alert-block">';
                        msg+='<b><span style="color: #000;">' + '[' + codErr + '] ' + desErr + '</span></b>';
                        msg+='</div>';

                        $('#warningPublicacion').html(msg);
                        $('#warningPublicacion').show();
                        break;
                        
                    case '100':
                        
                        var msg='<div style="text-align:center;" class="alert alert-block">';
                        msg+='<b><span style="color: #000;">' + '[' + codErr + '] ' + desErr + '</span></b>';
                        msg+='</div>';
                        $("#warningPublicacion").html(msg);
                        $('#warningPublicacion').show();
                        break;     
                    
                    case '99':
                        
                        var msg='<div style="text-align:center;" class="alert alert-block">';
                        msg+='<b><span style="color: #000;">' + '[' + codErr + '] ' + desErr + '</span></b>';
                        msg+='</div>';
                        
                        //desHabilitar
                        $("#warningPublicacion").html(msg);
                        $('#warningPublicacion').show();
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
                            msg+='<div id="esperaWarning"></div>';
                            msg+='</div>';
                        }else{
                            msg='<div style="text-align:center; color: black;" class="alert alert-success">';
                            msg+='<button type="button" class="close" data-dismiss="alert">×</button>';
                            msg+='<b style="color: black;">Publicación modificada exitosamente!.</b>';
                            msg+='<div id="esperaWarning"></div>';
                            msg+='</div>';
                        }
                       
                        $('#warningPublicacion').html(msg);
                        $('#warningPublicacion').show();
                        setTimeout(function() {
                            $('#warningPublicacion').hide();
                        }
                        , 1500); 

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

            strModal+='<div style="color: black; background-color: #FFCC00; font-weight: bold;" class="modal-header">';
                strModal+='<h3><i class="fa fa-exclamation-triangle"></i>&nbsp;Eliminar publicación</h3>';
            strModal+='</div>';
            strModal+='<div class="modal-body" id="modalBody">';
                strModal+='<p>¿Deseas eliminar publicación <b>' + tit + '</b>?</p>';
            strModal+='</div>';
            strModal+='<div class="modal-footer">';
                strModal+='<a class="btn" data-dismiss="modal"><i class="fa fa-times"></i>&nbsp;Cancelar</a>';
                strModal+='<a id="btnEliPu" style="border-color: silver; background-color: #FFCC00; color: black; font-weight: bold;" class="btn btn-primary"><i class="fa fa-minus-circle"></i>&nbsp;Eliminar</a>';
            strModal+='</div>';

        $('#myModal').html(strModal);
        $('#myModal').modal('show');

    });

    $(document).on("click", "#btnEliPu", function(event){

        var rut=$('#rut').val();
        var id = $('#txtPuId').val(); 
        //var img = $('#nomImg').val();

        //Div de Carga
        var strLoad='<div id="espera" class="modal-body"></div>';
        
        //AJAX
        var parametros = { "id" : id };            

        //escondemos mensajería
        $('#warningPublicacion').hide();

        $.ajax({
            
            data:  parametros,
            url: URLprotocol+"//"+URLdomain+"/bodyflex/Publicaciones/model/publicacionEliminaModel.php",
            type:  'post',
            datetype: 'xml',
            async: true,
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
                        
                        var msg='<div style="text-align:center;">';
                        msg+='<b><span style="color: #000;">' + '[' + codErr + '] ' + desErr + '</span></b>';
                        msg+='</div>';

                        $("#modalBody").html(msg);
                        $("#modalBody").show();    
                        setTimeout(function() {$('#myModal').modal('hide');}, 1500);

                        $('#warningPublicacion').html(msg);
                        $('#warningPublicacion').show();
                        break;
                        
                    case '8':
                        
                        var msg='<div style="text-align:center;">';
                        msg+='<b><span style="color: #000;">' + '[' + codErr + '] ' + desErr + '</span></b>';
                        msg+='</div>';

                        $("#modalBody").html(msg);
                        $("#modalBody").show();    
                        setTimeout(function() {$('#myModal').modal('hide');}, 1500);

                        $('#warningPublicacion').html(msg);
                        $('#warningPublicacion').show();
                        
                        break;
                    
                    case '99':
                        
                        var msg='<div style="text-align:center;">';
                        msg+='<b><span style="color: #000;">' + '[' + codErr + '] ' + desErr + '</span></b>';
                        msg+='</div>';

                        $("#modalBody").html(msg);
                        $("#modalBody").show();    
                        setTimeout(function() {$('#myModal').modal('hide');}, 1500);

                        $('#warningPublicacion').html(msg);
                        $('#warningPublicacion').show();
                        break;
                        
                    case '100':
                        
                        var msg='<div style="text-align:center;">';
                        msg+='<b><span style="color: #000;">' + '[' + codErr + '] ' + desErr + '</span></b>';
                        msg+='</div>';

                        $("#modalBody").html(msg);
                        $("#modalBody").show();    
                        setTimeout(function() {$('#myModal').modal('hide');}, 1500);

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
                        setTimeout(function() {$('#myModal').modal('hide');}, 1500);
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
    $('#txtPu').cleditor()[0].clear();
    
    $('#txtPuFli').attr('value','');
    $('#txtPuBa').attr('value','');

    $("#cmbTipPub option[value='(SELECCIONE)']").attr("selected",true);
    $('#cmbTipPub').trigger('liszt:updated');

//        $('#txtPu').cleditor()[0].focus();
//        $('#txtPu').cleditor()[0].clear();
//        $('#txtPu').cleditor()[0].execCommand('inserthtml','&nbsp;'); 

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
    botones+='<i onclick="getHelpImage();" class="fa fa-info-circle fa-4x" style="margin-top: 40px; color: #FFCC00; cursor: pointer;"></i>';
    $('#right').html(botones);

    $('#warningPublicacion').html('');

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
        url: URLprotocol+"//"+URLdomain+"/bodyflex/Publicaciones/model/publicacionVerificaElementosModel.php",
        type:  'post',
        datetype: 'xml',
        async: true,
        success:  function (xml){

            //alert('publicacionVerificaElementosModel ' + xml);

            var xmlDoc = $.parseXML(xml), $xml = $(xmlDoc);
            var codErr = xmlDoc.getElementsByTagName('CODERROR')[0].childNodes[0].nodeValue;
            var desErr = xmlDoc.getElementsByTagName('DESERROR')[0].childNodes[0].nodeValue;

            switch(codErr){
                case '9':

                    var strModal='';
                    strModal+='<div style="color: black; background-color: #FFCC00; font-weight: bold;" class="modal-header">';
                        strModal+='<h3><i class="fa fa-exclamation-triangle"></i>&nbsp;Alerta publicación</h3>';
                    strModal+='</div>';
                    strModal+='<div class="modal-body" id="modalBody">';                           
                    strModal+='<p>Error: No es posible conectar con base de datos.</p>';
                    strModal+='</div>';
                    strModal+='<div class="modal-footer">';
                        strModal+='<a id="btnAceptar" style="border-color: silver; background-color: #FFCC00; color: black; font-weight: bold;" class="btn btn-primary" data-dismiss="modal">Aceptar</a>';
                    strModal+='</div>';
                    $("#myModal").html(strModal);
                    $("#btnPublicaciones").click();
                    break;

                case '8':

                    var strModal='';
                    strModal+='<div style="color: black; background-color: #FFCC00; font-weight: bold;" class="modal-header">';
                        strModal+='<h3><i class="fa fa-exclamation-triangle"></i>&nbsp;Alerta publicación</h3>';
                    strModal+='</div>';
                    strModal+='<div class="modal-body" id="modalBody">';                           
                    strModal+='<p>Error: Procedimiento no retorna datos.</p>';
                    strModal+='</div>';
                    strModal+='<div class="modal-footer">';
                        strModal+='<a id="btnAceptar" style="border-color: silver; background-color: #FFCC00; color: black; font-weight: bold;" class="btn btn-primary" data-dismiss="modal">Aceptar</a>';
                    strModal+='</div>';
                    $("#myModal").html(strModal);
                    $("#btnPublicaciones").click();
                    break;

                case '99':

                    var strModal='';
                    strModal+='<div style="color: black; background-color: #FFCC00; font-weight: bold;" class="modal-header">';
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
                    strModal+='<div style="color: black; background-color: #FFCC00; font-weight: bold;" class="modal-header">';
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
                    strModal+='<div style="color: black; background-color: #FFCC00; font-weight: bold;" class="modal-header">';
                        strModal+='<h3><i class="fa fa-exclamation-triangle"></i>&nbsp;Alerta publicación</h3>';
                    strModal+='</div>';
                    strModal+='<div class="modal-body" id="modalBody">';

                    switch(cod){
                        case '1': break;
                        case '2': 
                            strMsgModal+='<p>Publicación <b>NO ETIQUETADA</b> favor etiquetar antes de probar o publicar</p>';
                            break;
                        case '3': 
                            strMsgModal+='<p>Publicación <b>SIN REFERENCIAS</b> te sugerimos referenciar tu publicación.</p>';
                            break;
                        case '4': 
                            strMsgModal+='<p>Publicación <b>SIN REFERENCIAS NI ETIQUETAS</b> favor validar condición.</p>';
                            break;       
                    }

                    strModal+=strMsgModal;
                    strModal+='</div>';
                    strModal+='<div class="modal-footer">';
                        strModal+='<a id="btnAceptar" style="border-color: silver; background-color: #FFCC00; color: black; font-weight: bold;" class="btn btn-primary" data-dismiss="modal"><i class="fa fa-times"></i>&nbsp;Aceptar</a>';
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

    function llamaralancla(){
        document.location.href = "publicacionView.php#divItemPublicacion";
    }

    function pruebaPublicacion(){

        var URLdomain   = window.location.host;
        var URLprotocol = window.location.protocol;
        var puId = $('#txtPuId').val(); 
        var rCodErr;
        var rDesErr;
        
        var parametros = {"puId" : puId};  
        $.ajax({
            data:  parametros,
            url: URLprotocol+"//"+URLdomain+"/bodyflex/Publicaciones/model/publicacionValidaModel.php",
            type:  'post',
            datetype: 'xml',
            async: true,
            beforeSend: function(){
                $("#espera").show();
            },
            success:  function (xml){     
                
                $("#espera").hide();
                
                //alert('Prueba: ' + xml);
                
                var xmlDoc = $.parseXML(xml), $xml = $(xmlDoc);
                var codErr = xmlDoc.getElementsByTagName('CODERROR')[0].childNodes[0].nodeValue;
                var desErr = xmlDoc.getElementsByTagName('DESERROR')[0].childNodes[0].nodeValue;

                rCodErr=codErr; 
                rDesErr=desErr;

                switch(codErr){
                    case '9':
                        
                        var msg='<div style="text-align:center;">';
                        msg+='<b><span style="color: black;">' + '[' + codErr + '] ' + desErr + '</span></b>';
                        msg+='</div>';
                        $("#warningPublicacion").html(msg);
                        $("#warningPublicacion").show();
                        break;
                        
                    case '8':
                        
                        var msg='<div style="text-align:center;">';
                        msg+='<b><span style="color: black;">' + '[' + codErr + '] ' + desErr + '</span></b>';
                        msg+='</div>';
                        $("#warningPublicacion").html(msg);
                        $("#warningPublicacion").show();
                        break;
                    
                    case '99':
                        
                        var msg='<div style="text-align:center;">';
                        msg+='<b><span style="color: black;">' + '[' + codErr + '] ' + desErr + '</span></b>';
                        msg+='</div>';
                        $("#warningPublicacion").html(msg);
                        $("#warningPublicacion").show();
                        break;
                    
                    case '100':
                        
                        var msg='<div style="text-align:center;">';
                        msg+='<b><span style="color: black;">' + '[' + codErr + '] ' + desErr + '</span></b>';
                        msg+='</div>';
                        $("#warningPublicacion").html(msg);
                        $("#warningPublicacion").show();
                        break;
                    
                    default:
                        
                        var dato = xmlDoc.getElementsByTagName('DATO')[0].childNodes[0].nodeValue;
                        
                        var titulo='';
                        var texto='';
                       
                        switch(dato){
                            case '1': //SIN REFERENCIAS E IMAGENES -> PASA
                                titulo='Referencias e imágenes';
                                texto='Publicación sin referencias ni imágenes <br> ¿Deseas continuar?';
                                break;          
                            case '2': //SIN ETIQUETAS E IMAGENES -> NO PASA
                                titulo='Etiquetas e imágenes';
                                texto='Favor asocie al menos etiquetas para posteriormente probar.';
                                break;
                            case '3': //SIN ETIQUETAS NI REFERENCIAS -> NO PASA
                                titulo='Etiquetas y referencias';
                                texto='Favor asocie al menos etiquetas para posteriormente probar';
                                break;            
                            case '4': //SIN IMÁGENES -> PASA
                                titulo='Contenido';
                                texto='Publicación sin contenido (imágenes/videos)<br> ¿Deseas continuar?';
                                break;    
                            case '5': //SIN REFERENCIAS -> PASA
                                titulo='Referencias';
                                texto='Publicación sin referencias <br> ¿Desea continuar?';
                                break;       
                            case '6': //SIN ETIQUETAS -> NO PASA
                                titulo='Etiquetas';
                                texto='Favor asocie etiquetas para posteriormente probar';
                                break;           
                            case '7': //TODO -> PASA
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
                                break;                   
                            case '8': //NADA -> NO PASA
                                titulo='Publicación sin asociaciones';
                                texto='Publicación sin etiquetas, referencias e imágenes <br> debe asociar al menos etiquetas para posteriormente probar';
                                break;        
                        }

                        switch(dato){//SIN REFERENCIAS E IMAGENES -> PASA
                            case '1': 
                                swal({
                                    title: titulo,   
                                    html: texto,
                                    type: 'warning',
                                    showCancelButton: true,
                                    confirmButtonColor: '#FFCC00',
                                    cancelButtonColor: 'gray',
                                    confirmButtonText: '<i style="color: black; font-weight: bold;" class="fa fa-check-circle"></i>&nbsp;<span style="color: black; font-weight: bold;">Aceptar</span>'
                                }).then(function(){
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
                                });
                                break;
                            case '2': //SIN ETIQUETAS E IMAGENES -> NO PASA
                                swal({
                                    title: titulo,   
                                    text: texto,
                                    type: 'warning',
                                    showCancelButton: false,
                                    confirmButtonColor: '#FFCC00',
                                    confirmButtonText: '<i style="color: black; font-weight: bold;" class="fa fa-check-circle"></i>&nbsp;<span style="color: black; font-weight: bold;">Aceptar</span>'
                                });
                                break;
                            case '3': //SIN ETIQUETAS NI REFERENCIAS -> NO PASA
                                swal({
                                    title: titulo,   
                                    text: texto,
                                    type: 'error',
                                    showCancelButton: false,
                                    confirmButtonColor: '#FFCC00',
                                    confirmButtonText: '<i style="color: black; font-weight: bold;" class="fa fa-check-circle"></i>&nbsp;<span style="color: black; font-weight: bold;">Aceptar</span>'
                                });
                                break;
                            case '4': //SIN IMÁGENES -> PASA
                                swal({
                                    title: titulo,   
                                    text: texto,
                                    type: 'warning',
                                    showCancelButton: true,
                                    confirmButtonColor: '#FFCC00',
                                    cancelButtonColor: 'gray',
                                    confirmButtonText: '<i style="color: black; font-weight: bold;" class="fa fa-check-circle"></i>&nbsp;<span style="color: black; font-weight: bold;">Aceptar</span>'
                                }).then(function(){
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
                                });
                                break;
                            case '5': //SIN REFERENCIAS -> PASA
                                swal({
                                    title: titulo,   
                                    text: texto,
                                    type: 'warning',
                                    showCancelButton: true,
                                    confirmButtonColor: '#FFCC00',
                                    cancelButtonColor: 'gray',
                                    confirmButtonText: '<i style="color: black; font-weight: bold;" class="fa fa-check-circle"></i>&nbsp;<span style="color: black; font-weight: bold;">Aceptar</span>'
                                }).then(function(){
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
                                });
                                break;
                            case '6': //SIN ETIQUETAS -> NO PASA
                                swal({
                                    title: titulo,   
                                    text: texto,
                                    type: 'error',
                                    showCancelButton: false,
                                    confirmButtonColor: '#FFCC00',
                                    confirmButtonText: '<i style="color: black; font-weight: bold;" class="fa fa-check-circle"></i>&nbsp;<span style="color: black; font-weight: bold;">Aceptar</span>'
                                });
                                break;
                            case '8': //NADA -> NO PASA
                                swal({
                                    title: titulo,   
                                    text: texto,
                                    type: 'error',
                                    showCancelButton: false,
                                    confirmButtonColor: '#FFCC00',
                                    confirmButtonText: '<i style="color: black; font-weight: bold;" class="fa fa-check-circle"></i>&nbsp;<span style="color: black; font-weight: bold;">Aceptar</span>'
                                });
                                break;
                        }
       
                }         
            }
        }); 

    }
    
    
    function modalPublicacion(){
        
        //alert('modalPublicacion');
        
        //var puId = $('#txtPuId').val(); 
        var strModal='';
        strModal+='<div style="color: black; background-color: #FFCC00; font-weight: bold;" class="modal-header">';
            strModal+='<h3><i class="fa fa-exclamation-triangle"></i>&nbsp;Publicación de artículo</h3>';
        strModal+='</div>';
        strModal+='<div class="modal-body" id="modalBody">';
            strModal+='<p>El artículo será <b>publicado</b> ¿Deseas proceder?</b>.</p>';
            strModal+='<b>Nota</b>: Si posteriormente deseas modificar el artículo, entonces debes cambiar su estado presionando el botón <b>"Editar".';
        strModal+='</div>';
        strModal+='<div class="modal-footer">';
            strModal+='<a onclick="return false;" class="btn" data-dismiss="modal"><i class="fa fa-minus-circle"></i>&nbsp;Cancelar</a>';
            strModal+='<a onclick="publicarPublicacion();" style="border-color: silver; background-color: #FFCC00; color: black; font-weight: bold;" class="btn btn-primary" data-dismiss="modal"><i class="fa fa-check-circle"></i>&nbsp;Aceptar</a>';
        strModal+='</div>';
        
        //alert('btnMensajeria');
        
        $("#myModal").html(strModal);
        //$("#btnMensajeria").click();
        
          
    }
    
    function modalEdicion(){

        //alert('modalEdicion');

        var strModal='';
        strModal+='<div style="color: black; background-color: #FFCC00; font-weight: bold;" class="modal-header">';
            strModal+='<h3><i class="fa fa-exclamation-triangle"></i>&nbsp;Edición de artículo</h3>';
        strModal+='</div>';
        strModal+='<div class="modal-body" id="modalBody">';
            strModal+='<p>Este artículo cambiará su estado para poder ser <b>editado</b> ¿desea continuar?</b></p>';
        strModal+='</div>';
        strModal+='<div class="modal-footer">';
            strModal+='<a onclick="return false;" class="btn" data-dismiss="modal"><i class="fa fa-times"></i>&nbsp;Cancelar</a>';
            strModal+='<a onclick="editarPublicacion();" style="border-color: silver; background-color: #FFCC00; color: black; font-weight: bold;" class="btn btn-primary" data-dismiss="modal"><i class="fa fa-pencil-square-o"></i>&nbsp;Aceptar</a>';
        strModal+='</div>';
    
        $('#myModal').html(strModal);
        $('#myModal').modal('show');
          
    }
    
    function publicarPublicacion(){

        var URLdomain   = window.location.host;
        var URLprotocol = window.location.protocol;

        var puId = $('#txtPuId').val(); 
        var parametros = {"puId" : puId}; 
        var rCodErr;
        var rDesErr;
               
        //alert('puId ' + puId);
        
        $.ajax({
                data:  parametros,
                url: URLprotocol+"//"+URLdomain+"/bodyflex/Publicaciones/model/publicacionValidaModel.php",
                type:  'post',
                async:  false,  
                datetype: 'xml',
                beforeSend: function(){
                    $("#espera").show();
                },
                success:  function(xml){     
                    
                    //alert('publicacionValidaModel: ' + xml);
                    
                    $("#espera").hide();
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
                            $("#warningPublicacion").show();
                            break;

                        case '88':

                            var msg='<b><span style="color: #000;">' + '[' + codErr + '] ' + desErr + '</span></b>';
                            $('#valPub').val(codErr);   
                            $("#warningPublicacion").html(msg);
                            $("#warningPublicacion").show();
                            break;

                        case '99':

                            var msg='<b><span style="color: #000;">' + '[' + codErr + '] ' + desErr + '</span></b>';
                            $('#valPub').val(codErr);    
                            $("#warningPublicacion").html(msg);
                            $("#warningPublicacion").show();
                            break;
                            
                        case '100':

                            var msg='<b><span style="color: #000;">' + '[' + codErr + '] ' + desErr + '</span></b>';
                            $('#valPub').val(codErr);    
                            $("#warningPublicacion").html(msg);
                            $("#warningPublicacion").show();
                            break;    

                        default:

                            var codigo = xmlDoc.getElementsByTagName('DATO')[0].childNodes[0].nodeValue;
                            $('#valPub').val(codigo);
                            
                    } 
                }                
        });
                               
        if($('#valPub').val()==7){
            publicar();                 
        }else{
            
            var titulo='';
            var texto='';
            var strMsgModal='';
            var strModal='';
            var codVal=$('#valPub').val();
            
            strModal+='<div style="color: black; background-color: #FFCC00; font-weight: bold;" class="modal-header">';
                strModal+='<h3><i class="fa fa-exclamation-triangle"></i>&nbsp;Alerta publicación</h3>';
            strModal+='</div>';
            strModal+='<div class="modal-body" id="modalBody">';

            switch(codVal){          
                case '1': //SIN REFERENCIAS E IMAGENES -> PASA
                    titulo='publicación sin referencias ni imágenes';
                    texto='¿Desea continuar?';
                    break;          
                case '2': //SIN ETIQUETAS E IMAGENES -> NO PASA
                    titulo='publicación sin etiquetas ni imágenes';
                    texto='Favor asocie etiquetas para posteriormente pubicar';
                    break;
                case '3': //SIN ETIQUETAS NI REFERENCIAS -> NO PASA
                    titulo='publicación sin etiquetas ni ferencias';
                    texto='Favor asocie etiquetas para posteriormente pubicar';
                    break;            
                case '4': //SIN IMÁGENES -> PASA
                    titulo='publicación sin imágenes';
                    texto='¿Desea continuar?';
                    break;    
                case '5': //SIN REFERENCIAS -> PASA
                    titulo='publicación sin referencias';
                    texto='¿Desea continuar?';
                    break;       
                case '6': //SIN ETIQUETAS -> NO PASA
                    titulo='publicación sin etiquetas';
                    texto='Favor asocie etiquetas para posteriormente pubicar';
                    break;           
                case '7': //TODO -> PASA
                    publicar();  
                    break;                   
                case '8': //NO POSEE NADA -> NO PASA
                    titulo='Publicación sin contenido';
                    texto='Favor asocie etiquetas, referencias e imagenes para posteriormente pubicar';
                    break;        
            }
            
            strModal+=strMsgModal;
            strModal+='</div>';
            strModal+='<div class="modal-footer">';
                strModal+='<a id="btnAceptar" class="btn btn-primary" style="border-color: silver; background-color: #FFCC00; color: black; font-weight: bold;" data-dismiss="modal"><i class="fa fa-times"></i>&nbsp;Aceptar</a>';
            strModal+='</div>';

            if(codVal=='9' || codVal=='88' || codVal=='99' || codVal=='100'){
                $("#myModal").html(strModal);
                $("#myModal").modal('show');
            }else{
                switch(codVal){//SIN REFERENCIAS E IMAGENES -> PASA
                    case '1': 
                        swal({
                            title: '<p style="font-family: Verdana; font-size: 22px; color: black; text-align: center;">Referencias e Imágenes</p>',   
                            text: "Publicación sin Referencias ni imágenes ¿Desea publicar?",
                            type: 'warning',
                            showCancelButton: true,
                            confirmButtonColor: '#FFCC00',
                            cancelButtonColor: 'gray',
                            confirmButtonText: '<i style="color: black; font-weight: bold;" class="fa fa-check-circle"></i>&nbsp;<span style="color: black; font-weight: bold;">Aceptar</span>'
                        }).then(function(){
                            publicar();                 
                        });
                        break;
                    case '2': //SIN ETIQUETAS E IMAGENES -> NO PASA
                        swal({
                            title: titulo,   
                            text: texto,
                            type: 'warning',
                            showCancelButton: false,
                            confirmButtonColor: '#FFCC00',
                            confirmButtonText: '<i style="color: black; font-weight: bold;" class="fa fa-check-circle"></i>&nbsp;<span style="color: black; font-weight: bold;">Aceptar</span>'
                        });
                        break;
                    case '3': //SIN ETIQUETAS NI REFERENCIAS -> NO PASA
                        swal({
                            title: titulo,   
                            text: texto,
                            type: 'error',
                            showCancelButton: false,
                            confirmButtonColor: '#FFCC00',
                            confirmButtonText: '<i style="color: black; font-weight: bold;" class="fa fa-check-circle"></i>&nbsp;<span style="color: black; font-weight: bold;">Aceptar</span>'
                        });
                        break;
                    case '4': //SIN IMÁGENES -> PASA
                        swal({
                            title: '<p style="font-family: Verdana; font-size: 22px; color: black; text-align: center;">Imágenes</p>',   
                            text: "Publicación sin imágenes ¿Desea publicar?",
                            type: 'warning',
                            showCancelButton: true,
                            confirmButtonColor: '#FFCC00',
                            cancelButtonColor: 'gray',
                            confirmButtonText: '<i style="color: black; font-weight: bold;" class="fa fa-check-circle"></i>&nbsp;<span style="color: black; font-weight: bold;">Aceptar</span>'
                        }).then(function(){
                            publicar();                 
                        });
                        break;
                    case '5': //SIN REFERENCIAS -> PASA
                        swal({
                            title: '<p style="font-family: Verdana; font-size: 22px; color: black; text-align: center;">Referencias</p>',   
                            text: "Publicación sin Referencias ¿Desea publicar?",
                            type: 'warning',
                            showCancelButton: true,
                            confirmButtonColor: '#FFCC00',
                            cancelButtonColor: 'gray',
                            confirmButtonText: '<i style="color: black; font-weight: bold;" class="fa fa-check-circle"></i>&nbsp;<span style="color: black; font-weight: bold;">Aceptar</span>'
                        }).then(function(){
                            publicar();                 
                        });
                        break;
                    case '6': //SIN ETIQUETAS -> NO PASA
                        swal({
                            title: titulo,   
                            text: texto,
                            type: 'error',
                            showCancelButton: false,
                            confirmButtonColor: '#FFCC00',
                            confirmButtonText: '<i style="color: black; font-weight: bold;" class="fa fa-check-circle"></i>&nbsp;<span style="color: black; font-weight: bold;">Aceptar</span>'
                        });
                        break;
                    case '8': //NADA -> NO PASA
                        swal({
                            title: titulo,   
                            text: texto,
                            type: 'error',
                            showCancelButton: false,
                            confirmButtonColor: '#FFCC00',
                            confirmButtonText: '<i style="color: black; font-weight: bold;" class="fa fa-check-circle"></i>&nbsp;<span style="color: black; font-weight: bold;">Aceptar</span>'
                        });
                        break;
                }
            }
                        
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
                url: URLprotocol+"//"+URLdomain+"/bodyflex/Publicaciones/model/publicacionPublicarModel.php",
                type:  'post',
                datetype: 'xml',
                async:  false,
                beforeSend: function(){
                    
                    strModal+='<div style="color: black; background-color: #FFCC00; font-weight: bold;" class="modal-header">';
                        strModal+='<h3><i class="fa fa-exclamation-triangle"></i>&nbsp;Publicación de artículo</h3>';
                    strModal+='</div>';
                    strModal+='<div class="modal-body" id="modalBody">';
                        strModal+='<div class="modal-body">Cambiando a <b>edición</b>...........<div id="esperaWarning"></div></div>';
                    strModal+='</div>';
                    strModal+='<div class="modal-footer">';
                        strModal+='<a class="btn btn-primary" style="border-color: silver; background-color: #FFCC00; color: black; font-weight: bold;" data-dismiss="modal"><i class="fa fa-check-circle"></i>&nbsp;Aceptar</a>';
                    strModal+='</div>';
                    $("#myModal").html(strModal);          
                    strModal='';
                    
                },
                success:  function (xml){
                
                    //alert('editarPublicacion ' + xml);
                
                    var xmlDoc = $.parseXML(xml), $xml = $(xmlDoc);
                    var codErr = xmlDoc.getElementsByTagName('CODERROR')[0].childNodes[0].nodeValue;
                    var desErr = xmlDoc.getElementsByTagName('DESERROR')[0].childNodes[0].nodeValue;
                            
                    switch(codErr){
                        case '9':

                            strModal+='<div style="color: black; background-color: #FFCC00; font-weight: bold;" class="modal-header">';
                                strModal+='<h3><i class="fa fa-exclamation-triangle"></i>&nbsp;Publicación de artículo</h3>';
                            strModal+='</div>';
                            strModal+='<div class="modal-body" id="modalBody">';
                                strModal+='<div class="modal-body">' + '[' + codErr + '] ' + desErr + '</div>';
                            strModal+='</div>';
                            strModal+='<div class="modal-footer">';
                                strModal+='<a class="btn btn-primary" style="border-color: silver; background-color: #FFCC00; color: black; font-weight: bold;" data-dismiss="modal">Aceptar</a>';
                            strModal+='</div>';
                            $("#myModal").html(strModal);  
                            setTimeout(function() {$('#myModal').modal('hide');}, 1500);
                            break;

                        case '8':

                            strModal+='<div style="color: black; background-color: #FFCC00; font-weight: bold;" class="modal-header">';
                                strModal+='<h3><i class="fa fa-exclamation-triangle"></i>&nbsp;Publicación de artículo</h3>';
                            strModal+='</div>';
                            strModal+='<div class="modal-body" id="modalBody">';
                                strModal+='<div class="modal-body">' + '[' + codErr + '] ' + desErr + '</div>';
                            strModal+='</div>';
                            strModal+='<div class="modal-footer">';
                                strModal+='<a class="btn btn-primary" style="border-color: silver; background-color: #FFCC00; color: black; font-weight: bold;" data-dismiss="modal">Aceptar</a>';
                            strModal+='</div>';
                            $("#myModal").html(strModal);  
                            setTimeout(function() {$('#myModal').modal('hide');}, 1500);
                            break;    

                        case '99':

                            strModal+='<div style="color: black; background-color: #FFCC00; font-weight: bold;" class="modal-header">';
                                strModal+='<h3><i class="fa fa-exclamation-triangle"></i>&nbsp;Publicación de artículo</h3>';
                            strModal+='</div>';
                            strModal+='<div class="modal-body" id="modalBody">';
                                strModal+='<div class="modal-body">' + '[' + codErr + '] ' + desErr + '</div>';
                            strModal+='</div>';
                            strModal+='<div class="modal-footer">';
                                strModal+='<a class="btn btn-primary" style="border-color: silver; background-color: #FFCC00; color: black; font-weight: bold;" data-dismiss="modal">Aceptar</a>';
                            strModal+='</div>';
                            $("#myModal").html(strModal);  
                            setTimeout(function() {$('#myModal').modal('hide');}, 1500);
                            break;      
                        
                        case '100':

                            strModal+='<div style="color: black; background-color: #FFCC00; font-weight: bold;" class="modal-header">';
                                strModal+='<h3><i class="fa fa-exclamation-triangle"></i>&nbsp;Publicación de artículo</h3>';
                            strModal+='</div>';
                            strModal+='<div class="modal-body" id="modalBody">';
                                strModal+='<div class="modal-body">' + '[' + codErr + '] ' + desErr + '</div>';
                            strModal+='</div>';
                            strModal+='<div class="modal-footer">';
                                strModal+='<a class="btn btn-primary" style="border-color: silver; background-color: #FFCC00; color: black; font-weight: bold;" data-dismiss="modal">Aceptar</a>';
                            strModal+='</div>';
                            $("#myModal").html(strModal);  
                            setTimeout(function() {$('#myModal').modal('hide');}, 1500);
                            break;      

                        default:

                            var datos = xmlDoc.getElementsByTagName('DATOS')[0].childNodes[0].nodeValue;

                            $('#txtPuFPu').val(datos);

                            strModal+='<div style="color: black; background-color: #FFCC00; font-weight: bold;" class="modal-header">';
                                strModal+='<h3><i class="fa fa-exclamation-triangle"></i>&nbsp;Publicación de artículo</h3>';
                            strModal+='</div>';
                            strModal+='<div class="modal-body" id="modalBody">';
                                strModal+='<div class="modal-body">Puede <b>editar</b> el artículo!.</div>';
                            strModal+='</div>';
                            strModal+='<div class="modal-footer">';
                                strModal+='<a class="btn btn-primary" style="border-color: silver; background-color: #FFCC00; color: black; font-weight: bold;" data-dismiss="modal">Aceptar</a>';
                            strModal+='</div>';
                            $("#myModal").html(strModal);      
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

        //alert('deshabilitar');

        $('#txtPuTit').prop('disabled',true);
        $('#txtPu').prop('disabled',true);

        $('#btnGuardar').prop('disabled',true);
        $('#btnEliminar').prop('disabled',true);
        $('#btnLimpiar').prop('disabled',true);
        $('#btnProbar').prop('disabled',true);
        $('#btnPublicar').prop('disabled',true);

    }
    
    function habilitar(){

        //alert('publicacionFunciones.js habilitar');

        $('#txtPuTit').prop('disabled',false);
        $('#txtPu').prop('disabled',false);
        
        $('#btnGuardar').prop('disabled',false);
        $('#btnEliminar').prop('disabled',false);
        $('#btnLimpiar').prop('disabled',false);
        $('#btnProbar').prop('disabled',false);
        $('#btnPublicar').prop('disabled',false);

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
                url: URLprotocol+"//"+URLdomain+"/bodyflex/Publicaciones/model/publicacionConsultaModel.php",
                type:  'post',
                datetype: 'xml',
                async: false,
            success:  function (xml){
                
                //alert(xml);
                
                var xmlDoc = $.parseXML(xml), $xml = $(xmlDoc);
                var codErr = xmlDoc.getElementsByTagName('CODERROR')[0].childNodes[0].nodeValue;
                var desErr = xmlDoc.getElementsByTagName('DESERROR')[0].childNodes[0].nodeValue;
                
                switch(codErr){
                    case '9':
                        
                        $("#espera").hide();
                            var msg='<div style="text-align:center;">';
                            msg+='<b><span style="color: #000;">Error: No es posible conectar con base de datos.</span></b>';
                            msg+='</div>';
                        $('#warningPublicacion').html(msg);
                        $('#warningPublicacion').show();
                        break;   
                    
                    case '8':
                        
                        $("#espera").hide();
                            var msg='<div style="text-align:center;">';
                            msg+='<b><span style="color: #000;">Error: Procedimiento no retorna datos.</span></b>';
                            msg+='</div>';
                        $('#warningPublicacion').html(msg);
                        $('#warningPublicacion').show();
                        break;   
                  
                    case '99':

                        var msg='<div style="text-align:center;">';
                        msg+='<b><span style="color: #000;">' + desErr + '</span></b>';
                        msg+='</div>';
                        $('#warningPublicacion').html(msg);
                        $('#warningPublicacion').show();
                        break;     
                        
                    case '100':

                        var msg='<div style="text-align:center;">';
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
                        //recorremos tabla para pintar registro actual
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
    
    function publicacionObtenerBajada(){
        var URLdomain   = window.location.host;
        var URLprotocol = window.location.protocol;
        var parametros = {"id" : $('#txtPuId').val()};          
        $.ajax({
                data:  parametros,
                url: URLprotocol+"//"+URLdomain+"/bodyflex/Publicaciones/model/publicacionObtenerBajadaModel.php",
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
                            var msg='<div style="text-align:center;">';
                            msg+='<b><span style="color: #000;">Error: No es posible conectar con base de datos.</span></b>';
                            msg+='</div>';
                            $('#warningPublicacion').html(msg);
                            $('#warningPublicacion').show();
                            break;   

                        case '8':

                            $("#espera").hide();
                            var msg='<div style="text-align:center;">';
                            msg+='<b><span style="color: #000;">' + '[' + codErr + '] ' + desErr + '</span></b>';
                            msg+='</div>';
                            $('#warningPublicacion').html(msg);
                            $('#warningPublicacion').show();
                            break;   

                        case '99':

                            var msg='<div style="text-align:center;">';
                            msg+='<b><span style="color: #000;">' + '[' + codErr + '] ' + desErr + '</span></b>';
                            msg+='</div>';
                            $("#warningPublicacion").html(msg);
                            $('#warningPublicacion').show();
                            break;     

                        case '100':

                            var msg='<div style="text-align:center;">';
                            msg+='<b><span style="color: #000;">' + '[' + codErr + '] ' + desErr + '</span></b>';
                            msg+='</div>';
                            $("#warningPublicacion").html(msg);
                            $('#warningPublicacion').show();
                            break;         

                        case '98':

                            var msg='<div style="text-align:center;">';
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
                url: URLprotocol+"//"+URLdomain+"/bodyflex/Publicaciones/model/publicacionObtenerModel.php",
                type:  'post',
                datetype: 'xml',
                async: false,
                success:  function(xml){
                    
                    //alert('publicacionObtenerModel ' + xml);
                    
                    var xmlDoc = $.parseXML(xml), $xml = $(xmlDoc);
                    var codErr = xmlDoc.getElementsByTagName('CODERROR')[0].childNodes[0].nodeValue;
                    var desErr = xmlDoc.getElementsByTagName('DESERROR')[0].childNodes[0].nodeValue;
                    
                    switch(codErr){
                        case '9':

                            $("#espera").hide();
                            
                            var msg='<div style="text-align:center;">';
                            msg+='<button type="button" class="close" data-dismiss="alert">×</button>';
                            msg+='<b><span style="color: #000;">' + '[' + codErr + '] ' + desErr + '</span></b>';
                            msg+='</div>';
                            $('#warningPublicacion').html(msg);
                            $('#warningPublicacion').show();
                            break;   

                        case '8':

                            $("#espera").hide();
                            var msg='<div style="text-align:center;">';
                            msg+='<button type="button" class="close" data-dismiss="alert">×</button>';
                            msg+='<b><span style="color: #000;">' + '[' + codErr + '] ' + desErr + '</span></b>';
                            msg+='</div>';
                            $('#warningPublicacion').html(msg);
                            $('#warningPublicacion').show();
                            break;   

                        case '99':

                            var msg='<div style="text-align:center;">';
                            msg+='<button type="button" class="close" data-dismiss="alert">×</button>';
                            msg+='<b><span style="color: #000;">' + '[' + codErr + '] ' + desErr + '</span></b>';
                            msg+='</div>';
                            $("#warningPublicacion").html(msg);
                            $('#warningPublicacion').show();
                            break;     

                        case '100':

                            var msg='<div style="text-align:center;">';
                            msg+='<button type="button" class="close" data-dismiss="alert">×</button>';
                            msg+='<b><span style="color: #000;">' + '[' + codErr + '] ' + desErr + '</span></b>';
                            msg+='</div>';
                            $("#warningPublicacion").html(msg);
                            $('#warningPublicacion').show();
                            break;         

                        case '98':

                            var msg='<div style="text-align:center;">';
                            msg+='<button type="button" class="close" data-dismiss="alert">×</button>';
                            msg+='<b><span style="color: #000;">' + '[' + codErr + '] ' + desErr + '</span></b>';
                            msg+='</div>';
                            $('#warningPublicacion').html(msg);
                            $('#warningPublicacion').show();
                            break;    

                        default:

                            var datos = xmlDoc.getElementsByTagName('DATOS')[0].childNodes[0].nodeValue;
                           
                            $('#txtPu').cleditor()[0].disable(false);
                            $('#txtPu').cleditor()[0].focus();
                            $('#txtPu').cleditor()[0].clear();
                            $('#txtPu').cleditor()[0].execCommand('inserthtml',datos); 

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
            url: URLprotocol+"//"+URLdomain+"/bodyflex/Publicaciones/model/publicacionConsultaContenidoModel.php",
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

                        var msg='<div style="text-align:center;">';
                        msg+='<button type="button" class="close" data-dismiss="alert">×</button>';
                        msg+='<b><span style="color: #000;">' + '[' + codErr + '] ' + desErr + '</span></b>';
                        msg+='</div>';

                        $('#warningConAso').html(msg);
                        setTimeout(function() {$('#modalBody').modal('hide');}, 1500); 
                        break;

                    case '8':

                        var msg='<div style="text-align:center;">';
                        msg+='<button type="button" class="close" data-dismiss="alert">×</button>';
                        msg+='<b><span style="color: #000;">' + '[' + codErr + '] ' + desErr + '</span></b>';
                        msg+='</div>';

                        $('#warningConAso').html(msg);
                        setTimeout(function() {$('#modalBody').modal('hide');}, 1500); 
                        break;

                    case '99':

                        var msg='<div style="text-align:center;" style="text-align:center;">';
                        msg+='<button type="button" class="close" data-dismiss="alert">×</button>';
                        msg+='<b><span style="color: #000;">' + '[' + codErr + '] ' + desErr + '</span></b>';
                        msg+='</div>';

                        $('#warningConAso').html(msg);
                        setTimeout(function() {$('#modalBody').modal('hide');}, 1500); 
                        break;

                    case '100':

                        var msg='<div style="text-align:center;">';
                        msg+='<button type="button" class="close" data-dismiss="alert">×</button>';
                        msg+='<b><span style="color: #000;">' + '[' + codErr + '] ' + desErr + '</span></b>';
                        msg+='</div>';

                        $('#warningConAso').html(msg);
                        setTimeout(function() {$('#modalBody').modal('hide');}, 1500); 
                        break;    

                    case '98':

                        var msg='<div style="text-align:center;">';
                        msg+='<button type="button" class="close" data-dismiss="alert">×</button>';
                        msg+='<b><span style="color: #000;">' + '[' + codErr + '] ' + desErr + '</span></b>';
                        msg+='</div>';

                        //Establece botón gris sin evento
                        var botones ='<i style="margin-top: 100px;" class="fa fa-picture-o fa-4x"></i>';  
                        botones+='<i onclick="getHelpImage();" class="fa fa-info-circle fa-4x" style="margin-top: 40px; color: green; cursor: pointer;"></i>';
                        $('#right').html(botones);

                        $('#listConAsociadas').html('');
                        $('#warningConAso').html(msg);
                        setTimeout(function() {$('#modalBody').modal('hide');}, 1500); 
                        break;

                    default:
                       
                        //Establece botón gris sin evento
                        var botones ='<i style="margin-top: 100px;" class="fa fa-picture-o fa-4x"></i>'; 
                        botones+='<i onclick="getHelpImage();" class="fa fa-info-circle fa-4x" style="margin-top: 40px; color: green; cursor: pointer;"></i>';
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
            url: URLprotocol+"//"+URLdomain+"/bodyflex/Publicaciones/model/publicacionEstableceIdEnSesionModel.php",
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


function publicar(){
var URLdomain   = window.location.host;
var URLprotocol = window.location.protocol;    
    
    var sw=0;
    var puId = $('#txtPuId').val(); 
    var parametros = { 'puId' : puId, 'sw': sw };  
    $.ajax({
            data:  parametros,
            url: URLprotocol+"//"+URLdomain+"/bodyflex/Publicaciones/model/publicacionPublicarModel.php",
            type:  'post',
            async:  false, 
            datetype: 'xml',
            beforeSend: function(){

                var strModal='';
                strModal+='<div style="color: black; background-color: #FFCC00; font-weight: bold;" class="modal-header">';
                    strModal+='<h3><i class="fa fa-check-circle"></i>&nbsp;Publicación de artículo</h3>';
                strModal+='</div>';
                strModal+='<div class="modal-body" id="modalBody">';
                    strModal+='<div class="modal-body"><b>Publicado........</b><div id="esperaWarning"></div></div>';
                strModal+='</div>';
                strModal+='<div class="modal-footer">';
                    strModal+='<a class="btn btn-primary" style="border-color: silver; background-color: #FFCC00; color: black; font-weight: bold;" data-dismiss="modal"><i class="fa fa-check-circle"></i>&nbsp;Aceptar</a>';
                strModal+='</div>';
                $("#myModal").html(strModal);          
                $("#myModal").modal('show');

            },
            success:  function (xml){

            //alert('publicionPublicarModel ' + xml);

            var xmlDoc = $.parseXML(xml), $xml = $(xmlDoc);
            var codErr = xmlDoc.getElementsByTagName('CODERROR')[0].childNodes[0].nodeValue;
            var desErr = xmlDoc.getElementsByTagName('DESERROR')[0].childNodes[0].nodeValue;

            switch(codErr){
                case '9':

                    var msg='<div style="text-align:center;">';
                    msg+='<b><span style="color: #000;">' + '[' + codErr + '] ' + desErr + '</span></b>';
                    msg+='</div>';  

                    var strModal='';    
                    strModal+='<div style="color: black; background-color: #FFCC00; font-weight: bold;" class="modal-header">';
                        strModal+='<h3><i class="fa fa-exclamation-triangle"></i>&nbsp;Publicación de artículo</h3>';
                    strModal+='</div>';
                    strModal+='<div class="modal-body" id="modalBody">';
                        strModal+=msg;
                    strModal+='</div>';
                    strModal+='<div class="modal-footer">';
                        strModal+='<a class="btn btn-primary" style="border-color: silver; background-color: #FFCC00; color: black; font-weight: bold;" data-dismiss="modal"><i class="fa fa-times"></i>&nbsp;Aceptar</a>';
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
                    strModal+='<div style="color: black; background-color: #FFCC00; font-weight: bold;" class="modal-header">';
                        strModal+='<h3><i class="fa fa-exclamation-triangle"></i>&nbsp;Publicación de artículo</h3>';
                    strModal+='</div>';
                    strModal+='<div class="modal-body" id="modalBody">';
                        strModal+=msg;
                    strModal+='</div>';
                    strModal+='<div class="modal-footer">';
                        strModal+='<a class="btn btn-primary" style="border-color: silver; background-color: #FFCC00; color: black; font-weight: bold;" data-dismiss="modal"><i class="fa fa-times"></i>&nbsp;Aceptar</a>';
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
                    strModal+='<div style="color: black; background-color: #FFCC00; font-weight: bold;" class="modal-header">';
                        strModal+='<button type="button" class="close" data-dismiss="modal">×</button>';
                        strModal+='<h3><i class="fa fa-exclamation-triangle"></i>&nbsp;Publicación de artículo</h3>';
                    strModal+='</div>';
                    strModal+='<div class="modal-body" id="modalBody">';
                        strModal+=msg;
                    strModal+='</div>';
                    strModal+='<div class="modal-footer">';
                        strModal+='<a class="btn btn-primary" style="border-color: silver; background-color: #FFCC00; color: black; font-weight: bold;" data-dismiss="modal"><i class="fa fa-times"></i>&nbsp;Aceptar</a>';
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
                    strModal+='<div style="color: black; background-color: #FFCC00; font-weight: bold;" class="modal-header">';
                        strModal+='<button type="button" class="close" data-dismiss="modal">×</button>';
                        strModal+='<h3><i class="fa fa-exclamation-triangle"></i>&nbsp;Publicación de artículo</h3>';
                    strModal+='</div>';
                    strModal+='<div class="modal-body" id="modalBody">';
                        strModal+=msg;
                    strModal+='</div>';
                    strModal+='<div class="modal-footer">';
                        strModal+='<a class="btn btn-primary" style="border-color: silver; background-color: #FFCC00; color: black; font-weight: bold;" data-dismiss="modal"><i class="fa fa-times"></i>&nbsp;Aceptar</a>';
                    strModal+='</div>';
                    $("#myModal").html(strModal);  
                    $("#myModal").modal('show');
                    setTimeout(function() {$('#myModal').modal('hide');}, 1500);
                    break;           

                default:

                    var datos = xmlDoc.getElementsByTagName('DATOS')[0].childNodes[0].nodeValue;

                    $('#txtPuFPu').val(datos);

                    var strModal='';
                    strModal+='<div style="color: black; background-color: #FFCC00; font-weight: bold;" class="modal-header">';
                        strModal+='<h3><i class="fa fa-check-circle"></i>&nbsp;Publicación de artículo</h3>';
                    strModal+='</div>';
                    strModal+='<div class="modal-body" id="modalBody">';
                        strModal+='<div class="modal-body">Artículo <b>publicado</b> exitosamente!.....<div id="esperaWarning"></div></div>';
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
        boton+='<i class="fa fa-pencil-square-o"></i>&nbsp;Editar';
    boton+='</button>';

    //SETEAMOS ESTADO
        $('#txtPuEst').val('PUBLICADA');

    $('#divPublicar').html(boton); 
    $('#divPublicar').trigger('liszt:updated'); 

    //CONSULTAMOS REGISTROS
        var rut=$('#rut').val();
        consultaPublicaciones(rut, 0, $('#txtUlt').val(), $('#txtPa').val());

    //PINTAMOS REGISTRO
        pintaRegistro();

    //INHABILITAMOS ELEMENTOS
        evaluarEstadoPublicacion('PUBLICADA');    
}