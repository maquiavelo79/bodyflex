<script>
    
    $(document).ready(function(){
       
        $("#txtPu").cleditor({
            width: 610, // width not including margins, borders or padding
            height: 300, // height not including margins, borders or padding
            controls: // controls to add to the toolbar
                "bold italic underline strikethrough subscript superscript | font size " +
                "style | color highlight removeformat | bullets numbering | outdent " +
                "indent | alignleft center alignright justify | undo redo | " +
                "rule image link unlink | cut copy paste pastetext | print source",
            colors: // colors in the color popup
                "FFF FCC FC9 FF9 FFC 9F9 9FF CFF CCF FCF " +
                "CCC F66 F96 FF6 FF3 6F9 3FF 6FF 99F F9F " +
                "BBB F00 F90 FC6 FF0 3F3 6CC 3CF 66C C6C " +
                "999 C00 F60 FC3 FC0 3C0 0CC 36F 63F C3C " +
                "666 900 C60 C93 990 090 399 33F 60C 939 " +
                "333 600 930 963 660 060 366 009 339 636 " +
                "000 300 630 633 330 030 033 006 309 303",
            fonts: // font names in the font popup
                "Arial,Arial Black,Comic Sans MS,Courier New,Narrow,Garamond," +
                "Georgia,Impact,Sans Serif,Serif,Tahoma,Trebuchet MS,Verdana",
            sizes: // sizes in the font size popup
                "1,2,3,4,5,6,7",
            styles: // styles in the style popup
                [["Paragraph", "<p>"], ["Header 1", "<h1>"], ["Header 2", "<h2>"],
                ["Header 3", "<h3>"],  ["Header 4","<h4>"],  ["Header 5","<h5>"],
                ["Header 6","<h6>"]],
            useCSS: false, // use CSS to style HTML when possible (not supported in ie)
            docType: // Document type contained within the editor
                '<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">',
            docCSSFile: // CSS file used to style the document contained within the editor
                "",
            bodyStyle: // style to assign to document body contained within the editor
                "margin:4px; font:10pt Arial,Verdana; cursor:text; background-color: whitesmoke; margin: 0px 0px 0px 0px"
        });
        
        
        
    }); 

    function pubInfo(){
        var msg="<p style='color: black; font-size: 16px; font-family: Verdana;'>Estimado profesional, ingresa y graba la publicación para posteriormente; <br> <b style='font-size: 18px; color: blue; font-family: Impact, Charcoal, sans-serif;'>Etiquetar</b>, <b style='font-size: 18px; color: blue; font-family: Impact, Charcoal, sans-serif;'>Referenciar</b> y <b style='font-size: 18px; color: blue; font-family: Impact, Charcoal, sans-serif;'>Publicar</b>.</p>";                  
        swal({
            title: 'Publicación',   
            html: msg,
            type: "info",
            animation: true,
            confirmButtonColor: '#FFCC00',
            confirmButtonText: '<span style="color: black; font-weight: bold;">Aceptar</span>'
        }); 
    }
    
    function pubImgDrive(){

        var msgVtaPre="<p style='color: black; font-size: 16px; font-family: Verdana;'>Aqui debes ingresar la URL que contiene la imagen de cabecera para tu publicación. <br><br> <b style='font-size: 18px; color: blue;'>El tamaño ideal de la imagen es de 800x350</b> <br><br>Recuerda que la carpeta que contiene las imagenes en google drive la debes establecer como publica.</p>";                  
        msgVtaPre+="<br>";
        msgVtaPre+="<b>";
            msgVtaPre+="<a target='_blank' style='font-size: 20px; color: blue; text-decoration: underline; font-weight: bold;'"; 
            msgVtaPre+="href='http://drive.google.com/uc?export=view&id=0B82UUH1gaEMAa3poVUVQMk1OS00'>";
            msgVtaPre+='<img style="width: 210px; height: 140px;" src="../../images/url.jpg"><br>Ejemplo';
            msgVtaPre+="</a>";
        msgVtaPre+="</b>";

        swal({   
            title: 'URL Imagen',   
            html: msgVtaPre,   
            type: "info", 
            allowOutsideClick: true,
            animation: true,
            confirmButtonColor: '#FFCC00',
            confirmButtonText: '<span style="color: black; font-weight: bold;">Aceptar</span>'
        });

    } 
    
    function pubTipo(){

        var msgVtaPre='<p style="text-align: center; font-size: 16px; font-family: Verdana; color: #1b2426;">Los tipos de publicaciones se categorizan en:</p>';                  
        msgVtaPre+="<br>";
        msgVtaPre+='<ul style="text-align: left; font-size: 16px; font-family: Verdana; color: #1b2426;">';
            msgVtaPre+='<li><b style="font-size: 16px; color: blue; font-family: Impact, Charcoal, sans-serif;">Artículo</b>: Información profesional del interes.</li>';
            msgVtaPre+='<li><b style="font-size: 16px; color: blue; font-family: Impact, Charcoal, sans-serif;">Evento</b>: Acontecimiento que debe darse a conocer.</li>';
            msgVtaPre+='<li><b style="font-size: 16px; color: blue; font-family: Impact, Charcoal, sans-serif;">Información</b>: Comunicar algo de importancia.</li>';
        msgVtaPre+='</ul><br>';

        swal({   
            title: 'Tipos de Publicación',   
            html: msgVtaPre,   
            type: "info", 
            allowOutsideClick: true,
            animation: true,
            width: '480px',
            confirmButtonColor: '#FFCC00',
            confirmButtonText: '<span style="color: black; font-weight: bold;">Aceptar</span>'
        });

    } 
    
    function paraQuePublicar(){

	var msgImpPer='<p style="text-align: center; color: black; font-size: 16px; font-family: Verdana;">Las publicaciones son el mecanismo más efectivo para darte a conocer como un <b style="font-size: 18px; color: blue;">asesor deportivo experimentado</b>, también te permiten <b style="font-size: 18px; color: blue;">fidelizar</b> a una audiencia ávida de conocimiento profesional, al compartir información por medio artículos de interés <b style="font-size: 18px; color: blue;">incrementas en número de seguidores</b>, aumentando tus probabilidades de proporcionar <b style="font-size: 18px; color: blue;">asesoría deportiva</b> y <b style="font-size: 18px; color: blue;">vender productos</b> por medio de tu perfil web profesional.</p><br>';
        msgImpPer+='<img style="width: 300px; height: 140px;" src="../../images/foto-Personal-trainer1.jpg">';
	swal({   
		title: "Publicaciones",   
		html: msgImpPer,   
		type: "success", 
		allowOutsideClick: true,
		animation: true,
		width: '500px',
		confirmButtonColor: '#FFCC00',
		confirmButtonText: '<span style="color: black; font-weight: bold;">Aceptar</span>'
	});
	
    }   

    
</script>
<style>
    #paraQue{
        cursor: pointer; 
        color: blue; 
        font-size: 14px; 
        font-family: Century Gothic,CenturyGothic,AppleGothic,sans-serif; 
        font-weight: bold;
        margin-left: 20px;
    }
</style>    
<!-- PUBLICACIÓN -->
<div id="divItemPublicacion" class="row-fluid sortable">
    <div class="box span12">    
        <input type="hidden" id="valPub">
        <div class="box-header" data-original-title>
            <h2 class="titH2">
                <i class="halflings-icon edit"></i>
                <span class="break"></span>Publicación
                <span id="paraQue" onclick="paraQuePublicar();">
                    <u>¿PARA QUÉ REALIZAR PUBLICACIONES?</u>
                </span>
            </h2>
        </div>
        <br>
        <div class="box-content">
            <form class="form-horizontal" id="formPublicacion">
                <fieldset>
                    <div class="control-group">
                        <label class="control-label" for=""><b>Título</b></label>
                        <div class="controls">
                            <input type="text" id="txtPuTit" style="background-color: whitesmoke; box-shadow: 0 0 2px black; margin: 0px 0px 0px 0px; font-weight: bold; color: black; text-align: center; color: black; width: 600px;" placeholder="Escriba el título de la publicación...">
                        </div>
                    </div>
                    <div class="control-group">
                        <label class="control-label" for=""><b>URL Imagen</b></label>
                        <div class="controls">
                            <input style="background-color: whitesmoke; box-shadow: 0 0 2px black; margin: 0px 0px 0px 0px; font-weight: bold; color: black; width: 600px; text-align: center; color: black;" type="text" id="txtPuFli" placeholder="Tamaño sugerido 800 x 350..." maxlength="500">
                            <span class="help-inline">
                                <i onclick="pubImgDrive();" style="color: green; cursor: pointer;" class="fa fa-info-circle fa-2x"></i>
                                &nbsp; Imagen sugerida 800 x 350
                            </span>
                        </div>
                    </div>
                    <div class="control-group">
                        <label class="control-label" for=""><b>Tipo</b></label>
                        <div class="controls">
                            <select id="cmbTipPub" style="background-color: whitesmoke; box-shadow: 0 0 2px black; margin: 0px 0px 0px 0px; font-weight: bold; color: black; text-align: center; color: black;">
                                <option value="(SELECCIONE)">(SELECCIONE)</option>
                                <option value="ARTICULO">ARTICULO</option>
                                <option value="EVENTO">EVENTO</option>
                                <option value="INFORMACIÓN">INFORMACIÓN</option>
                            </select>
                            <i onclick="pubTipo();" style="margin-left: 5px; color: green; cursor: pointer;" class="fa fa-info-circle fa-2x"></i>
                        </div>
                    </div>
                    
                    <div class="control-group">
                        <label id="lbltxt" class="control-label" for="textarea2"><b>Bajada</b></label>
                        <div class="controls">
                            <textarea id="txtPuBa" rows="5" style="background-color: whitesmoke; box-shadow: 0 0 2px black; margin: 0px 0px 0px 0px; font-weight: bold; color: black; color: black; width: 600px;"  placeholder="Parrafo de hasta 500 catacteres que describe de que trata la publicación...."></textarea>
                        </div>
                    </div>   
                    <div id="divPublicacion" class="control-group hidden-phone">
                        <div class="controls">
                            <textarea class="cleditor" id="txtPu" name="txtPu" rows="5"></textarea>
                            <span class="help-inline">Máximo 3000 caracteres!</span>
                        </div>
                    </div>
                    <!-- GIF LOAD-->
                    <div id="espera" class="form-actions" style="display:none;">
                        <button type="button" class="close" data-dismiss="alert">×</button>
                        <h4 class="alert-heading">&nbsp;</h4>
                    </div>

                    <!-- alerts -->
                    <div id="warningPublicacion" class="box-content alerts"></div>

                    <!-- BOTONES-->
                    <div class="form-actions" id="botonera">
                        <button style="border-color: silver; background-color: silver; color: black; font-weight: bold; width: 100px; float: left;" type="button" class="btn" id="btnLimpiar">
                            <i class="fa fa-refresh"></i>
                            Nueva
                        </button>
                        <button style="border-color: silver; background-color: #FFCC00; color: black; font-weight: bold; width: 100px; margin-left: 5px; float: left;" type="button" class="btn" id="btnGuardar">
                            <i class="fa fa-plus-circle"></i>&nbsp;
                            Guardar
                        </button>
                        <button style="border-color: silver; background-color: silver; color: black; font-weight: bold; width: 100px; margin-left: 5px; float: left;" type="button" class="btn btn-info btn-setting" id="btnEliminar">
                            <i class="fa fa-minus-circle"></i>&nbsp;
                            Eliminar
                        </button>
                        <button style="border-color: silver; background-color: silver; color: black; font-weight: bold; width: 100px; margin-left: 5px; float: left;" type="button" class="btn" id="btnProbar" onclick="pruebaPublicacion();">
                            <i class="fa fa-cogs"></i>
                            Probar
                        </button>
                        <div style="float: left; margin-left: 5px;" id="divPublicar">&nbsp;
                            <button style="border-color: silver; background-color: silver; color: black; font-weight: bold; width: 100px;" type="button" class="btn btn-info btn-setting" onclick="publicarPublicacion();" id="btnPublicar">
                                <i class="icon-bullhorn"></i>&nbsp;
                                Publicar
                            </button>
                        </div>    
                        
                        <div id="pubInfo" onclick="pubInfo();" style="float: right; margin-right: 50%; cursor: pointer;">
                            <i style="color: green;" class="fa fa-info-circle fa-2x"></i>
                        </div>
                        
                        <button style="display: none; float: left;" type="button" class="btn btn-info btn-setting" id="btnMensajeria"> 
                            hideMensajeria
                        </button>
                        
                    </div>
                </fieldset>
            </form>
        </div>
    </div>    
</div><!--/row-->


<!-- PUBLICACIÓN -->

<!--<p style="color: black; font-size: 18px; font-family: 'Calibri', Helvetica, Georgia, Arial, Garamond;">Estimado profesional, ingresa y graba la publicación para posteriormente <b>etiquetar</b>, <b>referenciar</b> y <b>publicar!</b></p>-->
<!--<p style="color: black; font-size: 18px; font-family: 'Calibri', Helvetica, Georgia, Arial, Garamond;">Aqui debes ingresar el identificador de la imagen de google drive (ej: <b>0BwscgrEmxbyLZ0JOMENReUlyWWM</b>),<br> recuerda que la carpeta que contiene las imagenes la debes establecer como publica.</p>-->
<!--<p style='color: black; font-size: 18px; font-family: Calibri, Helvetica, Georgia, Arial, Garamond;'>Aqui debes ingresar el identificador de la imagen de google drive (ej: <b>0BwscgrEmxbyLZ0JOMENReUlyWWM</b>), recuerda que la carpeta que contiene las imagenes en google drive la debes establecer como publica.<br><b><a href="http://drive.google.com/uc?export=view&id=0B82UUH1gaEMAMzV6RjJocmVBQVE">Ver imagen</a></b></p>-->
<!--var msg="<p style='font-size: 12px; font-weight: bold; color: black; font-size: 18px; font-family: Calibri, Helvetica, Georgia, Arial, Garamond;'>Aqui debes ingresar el identificador de la imagen de google drive (ej: <b>0BwscgrEmxbyLZ0JOMENReUlyWWM</b>), recuerda que la carpeta que contiene las imagenes en google drive la debes establecer como publica.<br><b><a href='http://drive.google.com/uc?export=view&id=0B82UUH1gaEMAQVRRTnZnTDAwUzA'>Ver imagen</a></b></p>";-->