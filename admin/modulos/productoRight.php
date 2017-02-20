<script src="http://code.jquery.com/jquery-1.11.0.min.js"></script> 
<script type="text/javascript">
    $(document).ready(function (){
        $("#detPro").cleditor({
            width: 590, // width not including margins, borders or padding
            height: 530, // height not including margins, borders or padding
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
</script>

<div style="margin-bottom: 10px; width: 50%;" class="span5 noMarginLeft">				
    
    <div class="row-fluid sortable">
        <div class="box span12">
            <div class="box-header" data-original-title>
                <h2 style="font-weight: bold; color: black;">
                    <i class="halflings-icon edit"></i>
                    <span class="break"></span>Detalle Producto
                </h2>
            </div>
            <br>
            <div id="divDetProd" class="control-group">
                <div class="controls">
                    <div id="divDetPro" class="control-group">
                        <div class="controls">
                            <div style="width: 600px; height: 580px; margin-left: 50px;">
                                <textarea id="detPro" name="detPro" rows="5" maxlength="500"></textarea>
                                <span class="help-inline">Máximo 500 caracteres!</span>
                                <span id="icoEsp" class="help-inline"><i style="color: red;"class="fa fa-times fa-2x"></i></span>
                            </div>    
                        </div>
                    </div>
                </div>
            </div>
        </div>    
    </div>
    
    <div class="row-fluid sortable" style="margin-top: 10px;"> <!-- style="border-style: solid; border-color: red;" -->
        <div class="box span12">
            <div style="height: 70px;" class="box-header" data-original-title>
                <h2 style="display:block;">
                    <i class="fa fa-shopping-cart"></i>
                    <span style="font-weight: bold;" class="break">PROFESIONAL</span>
                    <span style="font-weight: bold; font-size: 12px; color: blue;">[Cat&aacute;logo]</span>
                    <br><br>
                    <b style="font-size: 12px; font-weight: bold; color: black;">(1) Calcula monto de comisi&oacute;n por venta por cat&aacute;logo en base al porcentaje de comisi&oacute;n ingresado y Utilidad BFX(1).</b><br> 
                </h2>
                <div id="divActCat" style="display:none;"><div id="CAT_espera"></div></div>
            </div>
            <br>
            <div class="box-content">
                <div id="divImp" class="control-group">
                    <div class="controls">
                        <span id="icoPc" class="help-inline"><i style="color: red;"class="fa fa-times fa-2x"></i></span>
                        <div class="input-append" style="margin-left: 140px;">
                            <label style="font-size: 18px; margin-top: 25px; font-weight: bold;">(1)</label>
                        </div>&nbsp;
                        <div class="input-append">
                            <label style="margin-left: 10px; font-weight: bold; font-size: 12px; color: blue;">[% Comisi&oacute;n (ej: 0.1)]</label>
                            <input id="txtPorComPro" disabled placeholder="(%) Comisión" type="text" maxlength="100" style="background-color: whitesmoke; box-shadow: 0 0 2px black; margin: 0px 0px 0px 0px; font-weight: bold; color: black; text-align: center; color: black; font-size: 18px; font-family: Helvetica, Georgia, Arial, Garamond; width: 150px;">
                        </div>&nbsp;
                        <div class="input-append">
                            <label style="margin-top: 25px; font-size: 18px; font-weight: bold;">(=)</label>
                        </div>&nbsp;
                        <div class="input-append">
                            <label style="margin-left: 30px; font-weight: bold; font-size: 12px; color: blue;">[$ Comisi&oacute;n]</label>
                            <input id="txtMonComPro" disabled placeholder="Comisión" type="text" maxlength="100" style="background-color: bisque; box-shadow: 0 0 2px black; margin: 0px 0px 0px 0px; font-weight: bold; color: black; text-align: center; color: black; font-size: 18px; font-family: Helvetica, Georgia, Arial, Garamond; width: 150px;">
                        </div>
                    </div>
                </div>
            </div>
        </div><!--/span-->
    </div><!--/row-->  
    
    
    <div class="row-fluid sortable" style="margin-top: 10px;"> <!-- style="border-style: solid; border-color: red;" -->
        <div class="box span12">
            <div style="height: 20px;" class="box-header" data-original-title>
                <h2>
                    <i class="fa fa-usd fa-lg"></i>
                    <span style="font-weight: bold;" class="break">BODYFLEX</span>
                    <span style="font-weight: bold; font-size: 12px; color: blue;">[Utiilidad Neta]</span>
                </h2>
            </div>
            <br>
            <div class="box-content">
                <div id="divImp" class="control-group">                    
                    <div class="controls">
                        <div class="input-append">
                            <label style="margin-left: 150px; font-weight: bold; font-size: 12px; color: blue;">[Cat&aacute;logo]</label>
                            <input id="txtMonUti" disabled placeholder="[Catálogo]" type="text" maxlength="10" style="background-color: whitesmoke; box-shadow: 0 0 6px black; margin: 0px 0px 0px 0px; font-weight: bold; color: black; text-align: center; color: black; font-size: 18px; font-family: Helvetica, Georgia, Arial, Garamond; width: 150px; margin-left: 100px;">
                        </div>&nbsp;
                        <div class="input-append">
                            <label style="margin-left: 50px; font-weight: bold; font-size: 12px; color: blue;">[Presencial]</label>
                            <input id="txtMonUti2" disabled placeholder="[Presencial]" type="text" maxlength="10" style="background-color: whitesmoke; box-shadow: 0 0 6px black; margin: 0px 0px 0px 0px; font-weight: bold; color: black; text-align: center; color: black; font-size: 18px; font-family: Helvetica, Georgia, Arial, Garamond; width: 150px; margin-left: 10px;">
                        </div>
                        <div class="input-append">
                            <label style="margin-left: 50px; font-weight: bold; font-size: 12px; color: blue;">[BFX Shop]</label>
                            <input id="txtMonUti3" disabled placeholder="[BFX Shop]" type="text" maxlength="10" style="background-color: whitesmoke; box-shadow: 0 0 6px black; margin: 0px 0px 0px 0px; font-weight: bold; color: black; text-align: center; color: black; font-size: 18px; font-family: Helvetica, Georgia, Arial, Garamond; width: 150px; margin-left: 10px;">
                        </div>
                    </div>
                </div>
            </div>
        </div><!--/span-->
    </div><!--/row-->   
    
    <div class="row-fluid sortable" style="margin-top: 10px;"> <!-- style="border-style: solid; border-color: red;" -->
        <div class="box span12">
            <div style="height: 90px;" class="box-header" data-original-title>
                <h2>
                    <i class="fa fa-shopping-cart"></i>
                    <span style="font-weight: bold;" class="break">PRODUCTO</span>
                    <span style="font-weight: bold; font-size: 12px; color: blue;">[Old Price]</span>
                    <br><br>
                    <b style="text-align: justify; font-size: 12px; font-weight: bold; color: black;">El objetivo de este ítem es conservar los precios anteriores del producto para Publico y Profesionales con propósito de visualizar como producto rebajado en catálogo, los precios aqui presentes deberían ser superiores a los precios actuales para Publico y Profesional.</b><br> 
                </h2>
            </div>
            <br>
            <div class="box-content">
                <div class="control-group">
                    <div class="controls">
                        <div class="input-append">
                            <label style="margin-left: 170px; font-weight: bold; font-size: 12px; color: blue;">[Publico]</label>
                            <input id="txtPreAntPub" placeholder="$ Publico" type="text" maxlength="100" style="background-color: whitesmoke; box-shadow: 0 0 2px black; margin: 0px 0px 0px 0px; font-weight: bold; color: black; text-align: center; color: black; font-size: 18px; font-family: Helvetica, Georgia, Arial, Garamond; width: 180px; margin-left: 160px;">
                        </div>&nbsp;
                        <div class="input-append">
                            <label style="margin-left: 70px; font-weight: bold; font-size: 12px; color: blue;">[Profesional]</label>
                            <input id="txtPreAntProX" placeholder="$ Profesional" type="text" maxlength="100" style="background-color: whitesmoke; box-shadow: 0 0 2px black; margin: 0px 0px 0px 0px; font-weight: bold; color: black; text-align: center; color: black; font-size: 18px; font-family: Helvetica, Georgia, Arial, Garamond; width: 180px; margin-left: 40px;">
                        </div>
                    </div>
                </div>
            </div>
        </div><!--/span-->
    </div><!--/row-->  
    
</div>