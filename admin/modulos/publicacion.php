<script>
    
    $( document ).ready(function(){
        document.querySelector('button#modalInfo').onclick = function(){
            var msg="<p style='color: black; font-size: 16px; font-family: Helvetica, Georgia, Arial, Garamond;'>Estimado profesional, ingresa y graba la publicación para posteriormente <b>etiquetar</b>, <b>referenciar</b> y <b>publicar!</b></p>";
            swal({
                title: "Publicación",
                text: msg,
                type: "warning",
                confirmButtonColor: "#DD6B55",
                html: true,
                animation: false
            });
        };
        
        document.querySelector('button#modalImgDrive').onclick = function(){
            var msg="<p style='color: black; font-size: 16px; font-family: Helvetica, Georgia, Arial, Garamond;'>Aqui debes ingresar el identificador de la imagen de google drive. <br><br> (ej: <b>0BwscgrEmxbyLZ0JOMENReUlyWWM</b>) <br><br>Recuerda que la carpeta que contiene las imagenes en google drive la debes establecer como publica.<br><br><b><a target='_blank' style='font-size: 20px; color: blue; text-decoration: underline; font-weight: bold;' href='http://drive.google.com/uc?export=view&id=0B82UUH1gaEMAQVRRTnZnTDAwUzA'>Ver imagen</a></b></p>";
            swal({
                title: "ID google drive",
                text: msg,
                type: "warning",
                confirmButtonColor: "#DD6B55",
                html: true,
                animation: false
            });
        };
        
        
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
       $("#modalInfo").click();    
    }
    function pubImgDrive(){
       $("#modalImgDrive").click();    
    }
    
</script>

<!-- PUBLICACIÓN -->
<div id="divItemPublicacion" class="row-fluid sortable">
    <div class="box span12">    
        <input type="hidden" id="valPub">
        <div class="box-header" data-original-title>
            <h2><i class="halflings-icon edit"></i><span class="break"></span>Publicación</h2>
            <div class="box-icon">
                <a href="#" class="btn-minimize"><i class="halflings-icon chevron-up"></i></a>
            </div>
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
                        <label class="control-label" for=""><b>ID google drive</b></label>
                        <div class="controls">
                            <input style="background-color: whitesmoke; box-shadow: 0 0 2px black; margin: 0px 0px 0px 0px; font-weight: bold; color: black; width: 280px; text-align: center; color: black;" type="text" id="txtPuFli" placeholder="Tamaño sugerido 800 x 350..." maxlength="28">
                            <span class="help-inline"><i onclick="pubImgDrive();" style="color: #FFCC00; cursor: pointer;" class="fa fa-info-circle fa-2x"></i>&nbsp; Imagen sugerida 800 x 350</span>
                        </div>
                    </div>
                    <div class="control-group">
                        <label class="control-label" for=""><b>Tipo</b></label>
                        <div class="controls">
                            <select id="cmbTipPub" style="background-color: whitesmoke; box-shadow: 0 0 2px black; margin: 0px 0px 0px 0px; font-weight: bold; color: black; text-align: center; color: black;">
                                <option value="(SELECCIONE)">(SELECCIONE)</option>
                                <option value="ARTICULO">ARTICULO</option>
                                <option value="EVENTO">EVENTO</option>
                            </select>
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
                            Nueva
                        </button>
                        <button style="border-color: silver; background-color: #FFCC00; color: black; font-weight: bold; width: 100px; width: 100px; margin-left: 10px; float: left;" type="button" class="btn" id="btnGuardar">
                            Guardar
                        </button>
                        <button style="border-color: silver; background-color: silver; color: black; font-weight: bold; width: 100px; margin-left: 10px; float: left;" type="button" class="btn btn-info btn-setting" id="btnEliminar">
                            Eliminar
                        </button>
                        <button style="border-color: silver; background-color: silver; color: black; font-weight: bold; width: 100px; margin-left: 10px; float: left;" type="button" class="btn" id="btnProbar" onclick="pruebaPublicacion();">
                            Probar
                        </button>
                        <div style="float: left;" id="divPublicar">&nbsp;
                            <button style="border-color: silver; background-color: silver; color: black; font-weight: bold; margin-left: 10px; width: 100px;" type="button" class="btn btn-info btn-setting" onclick="publicarPublicacion();" id="btnPublicar">
                                <i class="icon-bullhorn"></i>&nbsp;Publicar
                            </button>
                        </div>    
                        
                        <div id="pubInfo" onclick="pubInfo();" style="float: right; margin-right: 50%; cursor: pointer;">
                            <i style="color: #FFCC00;" class="fa fa-info-circle fa-3x"></i>
                        </div>
                        
                        <button type="button" class="btn btn-info btn-setting" id="btnMensajeria" style="display: none; float: left;">
                            hideMensajeria
                        </button>
                        
                    </div>
                </fieldset>
            </form>
        </div>
    </div>    
</div><!--/row-->

<button id="modalInfo" style="display: none;">modalInfo</button>
<button id="modalImgDrive" style="display: none;">modalImgDrive</button>

<!-- PUBLICACIÓN -->

<!--<p style="color: black; font-size: 18px; font-family: 'Calibri', Helvetica, Georgia, Arial, Garamond;">Estimado profesional, ingresa y graba la publicación para posteriormente <b>etiquetar</b>, <b>referenciar</b> y <b>publicar!</b></p>-->
<!--<p style="color: black; font-size: 18px; font-family: 'Calibri', Helvetica, Georgia, Arial, Garamond;">Aqui debes ingresar el identificador de la imagen de google drive (ej: <b>0BwscgrEmxbyLZ0JOMENReUlyWWM</b>),<br> recuerda que la carpeta que contiene las imagenes la debes establecer como publica.</p>-->
<!--<p style='color: black; font-size: 18px; font-family: Calibri, Helvetica, Georgia, Arial, Garamond;'>Aqui debes ingresar el identificador de la imagen de google drive (ej: <b>0BwscgrEmxbyLZ0JOMENReUlyWWM</b>), recuerda que la carpeta que contiene las imagenes en google drive la debes establecer como publica.<br><b><a href="http://drive.google.com/uc?export=view&id=0B82UUH1gaEMAMzV6RjJocmVBQVE">Ver imagen</a></b></p>-->
<!--var msg="<p style='font-size: 12px; font-weight: bold; color: black; font-size: 18px; font-family: Calibri, Helvetica, Georgia, Arial, Garamond;'>Aqui debes ingresar el identificador de la imagen de google drive (ej: <b>0BwscgrEmxbyLZ0JOMENReUlyWWM</b>), recuerda que la carpeta que contiene las imagenes en google drive la debes establecer como publica.<br><b><a href='http://drive.google.com/uc?export=view&id=0B82UUH1gaEMAQVRRTnZnTDAwUzA'>Ver imagen</a></b></p>";-->