<?php
session_start();     

//Navegación - para determinar navegación 
    $nav=1;
//Nivel -- para determinar ruta de archivos incluidos
    $nivel=2; 
    
    if($_SESSION['sesion']!=1){
        header("Location: ../../index.php");
    }
    
    if(!isset($_SESSION['sesion'])){
        $_SESSION['sesion']=0;
        //$_SESSION['sesion_id']='';
        $_SESSION['email']='';
        $_SESSION['nombre']='';
        $_SESSION['apellido']='';
        $_SESSION['alias']='';
        $_SESSION['rol']='';
        $_SESSION['rut']='';
        $_SESSION['dv']='';
        $_SESSION['url']='';
        
    }        
    
    //VARIABLE DE SESION DE AMBITO LOCAL
    if(!isset($_SESSION['spId'])){
        $_SESSION['spId']=0;
    }else{
        if($_SESSION['spId']!=''){
            $_SESSION['spId']=0;
        }
    }        
    
    
?>

<!DOCTYPE html>
<html lang="en">
<head>
	
	<!-- Basic Page Needs================ -->
            <meta charset="utf-8">
            <title>Bodyflex - Servicios Profesionales</title>
            <meta name="description" content="">
            <meta name="author" content="">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
	<!-- end: Meta -->
	
	<!-- start: Mobile Specific -->
            <meta name="viewport" content="width=device-width, initial-scale=1">
	<!-- end: Mobile Specific -->
	
        <!--awesome-->    
            <link rel="stylesheet" href="../../font-awesome-4.5.0/css/font-awesome.min.css">
        <!--awesome-->   
        
	<!-- start: CSS -->
            <link id="bootstrap-style" href="../css/bootstrap.min.css" rel="stylesheet">
            <link href="../css/bootstrap-responsive.min.css" rel="stylesheet">
            <link id="base-style" href="../css/style.css" rel="stylesheet">
            <link id="base-style-responsive" href="../css/style-responsive.css" rel="stylesheet">
            <link href='http://fonts.googleapis.com/css?family=Open+Sans:300italic,400italic,600italic,700italic,800italic,400,300,600,700,800&subset=latin,cyrillic-ext,latin-ext' rel='stylesheet' type='text/css'>
            <script src="http://code.jquery.com/jquery-1.11.0.min.js"></script>
            <script type="text/javascript">
                $(document).ready(function (){
                    $("#txtDesCor").cleditor({
                        width: 500, // width not including margins, borders or padding
                        height: 250, // height not including margins, borders or padding
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
                    $("#txtDesDet").cleditor({
                        width: 800, // width not including margins, borders or padding
                        height: 250, // height not including margins, borders or padding
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
            <style>
                .ajustarDesCor{
                    width: 200px;
                    float: left;
                    white-space: pre; /* CSS 2.0 */
                    white-space: pre-wrap; /* CSS 2.1 */
                    white-space: pre-line; /* CSS 3.0 */
                    white-space: -pre-wrap; /* Opera 4-6 */
                    white-space: -o-pre-wrap; /* Opera 7 */
                    white-space: -moz-pre-wrap; /* Mozilla */
                    white-space: -hp-pre-wrap; /* HP */
                    word-wrap: break-word; /* IE 5+ */
                }
                .ajustarDesLar{
                    width: 500px;
                    float: left;
                    white-space: pre; /* CSS 2.0 */
                    white-space: pre-wrap; /* CSS 2.1 */
                    white-space: pre-line; /* CSS 3.0 */
                    white-space: -pre-wrap; /* Opera 4-6 */
                    white-space: -o-pre-wrap; /* Opera 7 */
                    white-space: -moz-pre-wrap; /* Mozilla */
                    white-space: -hp-pre-wrap; /* HP */
                    word-wrap: break-word; /* IE 5+ */
                }
                thead, tbody { display: block; }
                tbody {
                    height: 300px;       /* Just for the demo          */
                    overflow-y: auto;    /* Trigger vertical scroll    */
                    overflow-x: hidden;  /* Hide the horizontal scroll */
                }
            </style>
            
	<!-- end: CSS -->
	
        <!-- Favicons=============================================== -->
            <link rel="apple-touch-icon-precomposed" sizes="144x144" href="../images/apple-touch-icon-144.png">
            <link rel="apple-touch-icon-precomposed" sizes="114x114" href="../images/apple-touch-icon-114.png">
            <link rel="apple-touch-icon-precomposed" sizes="72x72" href="../images/apple-touch-icon-72.png">
            <link rel="apple-touch-icon-precomposed" href="../images/apple-touch-icon-57.png">
            <link rel="shortcut icon" href="../images/favicon.ico">
	<!-- Favicons=============================================== -->
		
</head>

<body>
    <!-- start: Header -->
    <?php include("../../../bodyflex/admin/modulos/header.php"); ?>
    <!-- start: Header -->
	
    <div class="container-fluid-full">
        <div class="row-fluid">

            <!-- start: Main Menu -->
            <?php include("../modulos/menu.php"); ?>
            <!-- end: Main Menu -->

            <!-- start: Content -->
                <div id="content" class="span10">
			
                    <!-- start: navegación-->
                    <?php include("../modulos/navegacion.php"); ?>
                    <!-- end: navegación -->
		    
                    <!-- HEADER -->
                        <?php include("../modulos/headerUser.php"); ?>
                    <!-- HEADER -->
                    
                    <div class="row-fluid sortable">
                        <div class="box span12">
                                <div class="box-header" data-original-title>
                                    <h2><i class="halflings-icon edit"></i><span class="break"></span>Servicio Profesional</h2>
                                    <div class="box-icon">
                                        <a href="#" class="btn-minimize"><i class="halflings-icon chevron-up"></i></a>
                                    </div>
                                </div>
                                <br>
                                <div class="box-content">
                                    <form class="form-horizontal" id="formSlider">
                                        <fieldset>
                                            
                                            <div id="conHeadId" class="control-group">
                                                <label id="lblHeadId" class="control-label" for="appendedInput"><b>Identificador</b></label>
                                                <div class="controls">
                                                    <div class="input-append">
                                                        <input style="background-color: whitesmoke; box-shadow: 0 0 2px black; margin: 0px 0px 0px 0px; font-weight: bold; color: black; width: 200px; text-align: center; color: black;" id="txtSerId" size="30" type="text" maxlength="10" disabled  value="">
                                                    </div>
                                                    <span class="help-inline"></span>
                                                </div>
                                            </div> 
                                            
                                            <div id="conTit1" class="control-group">
                                                <label id="lbltit1" class="control-label" for="appendedInput"><b>Nombre Servicio</b></label>
                                                <div class="controls">
                                                    <div class="input-append">
                                                          <input style="background-color: whitesmoke; box-shadow: 0 0 2px black; margin: 0px 0px 0px 0px; font-weight: bold; color: black; width: 490px; text-align: center; color: black;" id="txtNomSer" size="30" type="text" maxlength="100">
                                                    </div>
                                                </div>
                                            </div>
                                            
                                            <div id="conTit1" class="control-group">
                                                <label id="lbltit1" class="control-label" for="appendedInput"><b>Clase &Iacute;cono</b></label>
                                                <div class="controls">
                                                    <div class="input-append">
                                                        <input style="background-color: whitesmoke; box-shadow: 0 0 2px black; margin: 0px 0px 0px 0px; font-weight: bold; color: black; width: 200px; text-align: center; color: black;" id="txtClaIco" size="30" type="text" maxlength="30">
                                                    </div>
                                                    <span class="help-inline">https://fortawesome.github.io/Font-Awesome/icons/ (Ejemplo: fa fa-futbol-o)</span>
                                                </div>
                                            </div>
                                            
                                            <div id="conFlick" class="control-group">
                                                <label id="lblfli"  class="control-label" for="appendedInput"><b>ID google drive</b></label>
                                                <div class="controls">
                                                    <div class="input-append">
                                                        <input style="background-color: whitesmoke; box-shadow: 0 0 2px black; margin: 0px 0px 0px 0px; font-weight: bold; color: black; width: 490px; text-align: center; color: black;" id="txtIdFli" size="16" type="text" maxlength="100">
                                                    </div>
                                                <span class="help-inline">Id imagen Google Drive asociada al servicio</span>
                                                </div>
                                            </div>
                                            
                                            <div id="divPublicacion" class="control-group">
                                                <label id="lbltxt" class="control-label" for="textarea2"><b>Descripci&oacute;n corta</b></label>
                                                <div class="controls">
                                                    <textarea class="cleditor" id="txtDesCor" name="txtDesCor" rows="5"></textarea>
                                                    <span class="help-inline">Máximo 100 caracteres!</span>
                                                </div>
                                            </div>
                                            
                                            <div id="divPublicacion" class="control-group">
                                                <label id="lbltxt" class="control-label" for="textarea2"><b>Descripci&oacute;n detallada</b></label>
                                                <div class="controls">
                                                    <textarea class="cleditor" id="txtDesDet" name="txtDesDet" rows="5"></textarea>
                                                    <span class="help-inline">Máximo 1000 caracteres!</span>
                                                </div>
                                            </div>
                                             
                                            <!-- GIF LOAD-->
                                                <div id="espera" class="form-actions" style="display:none;">
                                                    <button type="button" class="close" data-dismiss="alert">×</button>
                                                    <h4 class="alert-heading">&nbsp;</h4>
                                                </div>

                                            <!-- alerts -->
                                            <div id="conWarning" class="box-content alerts"></div>
                                            
                                            <!-- BOTONES-->
                                                <div class="form-actions" id="botonera">
                                                    <button type="button" style="border-color: silver; background-color: #FFCC00; color: black; font-weight: bold; width: 100px;" class="btn" id="btnGuardar">Guardar</button>
                                                    <button type="button" style="border-color: silver; background-color: silver; color: black; font-weight: bold; width: 100px;" class="btn btn-info btn-setting" id="btnEliminar">Eliminar</button>
                                                    <button type="reset" style="border-color: silver; background-color: silver; color: black; font-weight: bold; width: 100px;" class="btn" id="btnLimpiar">Limpiar</button>
                                                </div>
                                        </fieldset>
                                    </form>
                                </div>
                        </div><!--/span-->
                    </div><!--/row-->
                    
                    <div class="row-fluid sortable">		
                        <div class="box span12">
                            <div class="box-header" data-original-title>
                                <h2><i class="halflings-icon edit"></i><span class="break"></span>Servicios Profesionales ingresados</h2>
                                <div class="box-icon">
                                    <a href="#" class="btn-minimize"><i class="halflings-icon chevron-up"></i></a>
                                    <a href="#" class="btn-close"><i class="halflings-icon remove"></i></a>
                                </div>
                            </div>
                            <div class="box-content" id="conTabla"><!--contenedor de tabla -->
                                <input id="cantSlider" type="hidden" value=0>
                                <table id="tblSlider" class="table table-striped table-bordered bootstrap-datatable">
                                    <thead>
                                        <tr>
                                            <th class="ajustar">Id</th>
                                            <th class="ajustar">Nombre</th>
                                            <th class="ajustar">Clase</th>
                                            <th class="ajustar">ID google</th>
                                            <th class="ajustar">Desc. Corta</th>
                                            <th class="ajustar">Desc. Detallada</th>
                                        </tr>
                                    </thead>   
                                    <tbody id="tbody">
                                        
                                    </tbody>
                                </table>   
                            </div>
                        </div><!--/span-->
                    </div><!--/row-->
                </div><!--/.fluid-container-->
            <!-- end: Content -->    
        </div><!--/#content.span10-->
    </div><!--/fluid-row-->
		
    <div class="modal hide fade" id="myModal"></div>
   
    <div class="clearfix"></div>
    <?php include("../../../bodyflex/admin/modulos/footer.php"); ?>
    
    <!-- start: JavaScript-->
        <?php include("../../../bodyflex/admin/modulos/javaScript.php"); ?>
    <script src="../controller/serviciosProfesionalController.js"></script>
        <script src='../controller/cerrarSesion.js'></script>
    <!-- end: JavaScript-->
    
    <!-- Datos sesion, solo si esta definida variable sesion ================================= -->
    <?php if(isset($_SESSION['sesion'])){ ?>
        <input type="hidden" id="email" value="<?= $_SESSION['email'];?>">
        <input type="hidden" id="nombre" value="<?= $_SESSION['nombre'];?>">
        <input type="hidden" id="apellido" value="<?= $_SESSION['apellido'];?>">
        <input type="hidden" id="alias" value="<?= $_SESSION['alias'];?>">
        <input type="hidden" id="rol" value= "<?= $_SESSION['rol'];?>">
        <input type="hidden" id="rut" value= "<?= $_SESSION['rut'];?>">
        <input type="hidden" id="dv" value= "<?= $_SESSION['dv'];?>">
        <input type="hidden" id="url" value= "<?= $_SESSION['url'];?>">
        <input type="hidden" id="spId" value= "<?= $_SESSION['spId'] ;?>">
    <?php } ?>
    <input type="hidden" id="sesion" value= "<?= $_SESSION['sesion'];?>">
    <input type="hidden" id="session_id" value= "<?= $_SESSION['sesion_id'];?>">
    <!-- Datos sesion================================= -->    
    
</body>
</html>
