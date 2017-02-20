<?php
session_start();     

//Navegación - para determinar navegación 
    $nav=1; //slider
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
        $_SESSION['idPos']='';
        
    }        
    
    //VARIABLE DE SESION DE AMBITO LOCAL
    if(!isset($_SESSION['pId'])){
        $_SESSION['pId']=0;
    }else{
        if($_SESSION['pId']!=''){
            $_SESSION['pId']=0;
        }
    }            
    
    
?>

<!DOCTYPE html>
<html lang="en">
<head>
	
	<!-- Basic Page Needs================ -->
            <meta charset="utf-8">
            <title>Bodyflex - [PRO] Presentaci&oacute;n</title>
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
            
            <style>
                .ajustar{
                    width: 1000px;
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
            </style>
            
	<!-- end: CSS -->
	
        <!-- Favicons=============================================== -->
            <link rel="apple-touch-icon-precomposed" sizes="144x144" href="../images/apple-touch-icon-144.png">
            <link rel="apple-touch-icon-precomposed" sizes="114x114" href="../images/apple-touch-icon-114.png">
            <link rel="apple-touch-icon-precomposed" sizes="72x72" href="../images/apple-touch-icon-72.png">
            <link rel="apple-touch-icon-precomposed" href="../images/apple-touch-icon-57.png">
            <link rel="shortcut icon" href="../images/favicon.ico">
	<!-- Favicons=============================================== -->
		
        <script>
            $( document ).ready(function(){
                                
                $("#textarea2").cleditor({
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

            function pubImgDrive(){

                var msgVtaPre="<p style='text-align: justify; color: black; font-size: 16px; font-family: Verdana;'>Aqui debes ingresar el identificador de la imagen alojada Google Drive. <br><br> (Ejemplo: <b style='font-size: 18px; color: blue;'>0BwscgrEmxbyLZ0JOMENReUlyWWM</b>) <br><br>Recuerda que la carpeta que contiene las imagenes en google drive la debes establecer como publica.</p>";                  
                msgVtaPre+="<br>";
                msgVtaPre+="<b>";
                        msgVtaPre+="<a target='_blank' style='font-size: 20px; color: blue; text-decoration: underline; font-weight: bold;'"; 
                        msgVtaPre+="href='http://drive.google.com/uc?export=view&id=0B82UUH1gaEMARmFTTzhJaEJwMTQ'>";
                        msgVtaPre+='<img style="width: 70px; height: 70px;" src="../../images/iconos/gd.ico"><br>Ejemplo';
                        msgVtaPre+="</a>";
                msgVtaPre+="</b>";

                swal({   
                    title: 'ID Google Drive',   
                    html: msgVtaPre,   
                    type: "info", 
                    allowOutsideClick: true,
                    animation: true,
                    confirmButtonColor: '#FFCC00',
                    confirmButtonText: '<span style="color: black; font-weight: bold;">Aceptar</span>'
                });

            } 
             
            function queEsPresentacion(){

                var msgVtaPre='<p style="text-align: justify; font-family: Verdana: 15px; color: #1b2426;">Esta sección contiene la presentación del profesional hacia la comunidad, te recomendamos ser breve pero <b style="font-size: 18px; color: blue; font-family: Impact, Charcoal, sans-serif;">contundente</b>, obtén un resumen que le permita a la audiencia informarse sobre ti en un párrafo.</p>'; 
                
                msgVtaPre+="<br>";
                msgVtaPre+="<b>";
                    msgVtaPre+="<a target='_blank' style='font-size: 20px; color: blue; text-decoration: underline; font-weight: bold;'"; 
                    msgVtaPre+="href='http://drive.google.com/uc?export=view&id=0B82UUH1gaEMAXzFOLVllbVJYNEU'>";
                    msgVtaPre+='<i class="fa fa-user fa-2x"></i><br>';
                    msgVtaPre+='<b style="font-size: 15px;">Ejemplo</b>';
                    msgVtaPre+="</a>";
                msgVtaPre+="</b>";
                
                swal({   
                    title: 'Presentación',   
                    html: msgVtaPre,   
                    type: "info", 
                    allowOutsideClick: true,
                    animation: true,
                    confirmButtonColor: '#FFCC00',
                    confirmButtonText: '<span style="color: black; font-weight: bold;">Aceptar</span>'
                });

            }  
            
        </script>
        
</head>

<body>
    <!-- start: Header -->
    <?php include("../../../bodyflex/Dashboard/modulos/header.php"); ?>
    <!-- start: Header -->
	
    <div class="container-fluid-full">
        <div class="row-fluid">

            <!-- start: Main Menu -->
            <?php include("../../menu/menu.php"); ?>
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
                                    <h2 style="font-size: 14px; font-family: Century Gothic,CenturyGothic,AppleGothic,sans-serif; font-weight: bold; color: black;">
                                        <i class="halflings-icon edit"></i>
                                        <span class="break"></span>Presentaci&oacute;n
                                        &nbsp;&nbsp; <span onclick="queEsPresentacion();" style="cursor: pointer; color: blue; font-size: 14px; font-family: Century Gothic,CenturyGothic,AppleGothic,sans-serif; font-weight: bold;"><u>¿QUE ES LA PRESENTACIÓN?</u></span>
                                    </h2>
                                </div>
                                <br>
                                <div class="box-content">
                                    <form class="form-horizontal" id="formPresentacion">
                                        <fieldset>
                                            <div id="conFlick" class="control-group">
                                                <label id="lblfli"  class="control-label" for="appendedInput"<b>ID google drive</b></label>
                                                <div class="controls">
<!--                                                    <div class="input-append">-->
                                                        <input placeholder="ID Imagen 640 x 480" id="appendedInput3" size="16" type="text" maxlength="200" style="background-color: whitesmoke; box-shadow: 0 0 2px black; margin: 0px 0px 0px 0px; font-weight: bold; color: black; width: 300px; text-align: center; color: black;">
                                                        <span class="help-inline"><i onclick="pubImgDrive();" style="color: green; cursor: pointer;" class="fa fa-info-circle fa-2x"></i>&nbsp; Tama&#241;o sugerido 640 x 480</span>
<!--                                                    </div>-->
<!--                                                <span class="help-inline">Imagen recomendada 640 x 480</span>-->
                                                </div>
                                            </div>

                                                <div id="divPublicacion" class="control-group">
                                                    <label id="lbltxt" class="control-label" for="textarea2"><b>Texto presentaci&oacute;n</b></label>
                                                    <div class="controls">
                                                        <textarea style="background-color: whitesmoke; box-shadow: 0 0 2px black; margin: 0px 0px 0px 0px; font-weight: bold; color: black;" class="cleditor" id="textarea2" name="textarea2" rows="5"></textarea>
                                                        <span class="help-inline">Máximo 2000 caracteres!</span>
                                                    </div>
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
                                                    <button style="border-color: silver; background-color: #FFCC00; color: black; font-weight: bold; width: 100px;" type="button" class="btn" id="btnGuardar">
                                                        <i class="fa fa-plus-circle"></i>
                                                        Guardar
                                                    </button>
                                                    <button style="border-color: silver; background-color: silver; color: black; font-weight: bold; width: 100px;" type="button" class="btn btn-info btn-setting" id="btnEliminar">
                                                        <i class="fa fa-minus-circle"></i>
                                                        Eliminar
                                                    </button>

                                                </div>
                                        </fieldset>
                                    </form>
                                </div>
                        </div><!--/span-->
                    </div><!--/row-->                    
                </div><!--/.fluid-container-->
            <!-- end: Content -->    
        </div><!--/#content.span10-->
    </div><!--/fluid-row-->

    <div class="modal hide fade" id="myModal"></div>
    
    <div class="clearfix"></div>
    <?php include("../../../bodyflex/Dashboard/modulos/footer.php"); ?>
    <!-- start: JavaScript-->
        <?php include("../../../bodyflex/Dashboard/modulos/javaScript.php"); ?>
        <script src="../controller/presentacionController.js"></script>
        <script src='../controller/cerrarSesion.js'></script>
    <!-- end: JavaScript-->
    
    <!-- sweetalert-master-->
        <script src="../sweetalert-master2/sweetalert2.min.js"></script>
        <link rel="stylesheet" type="text/css" href="../sweetalert-master2/sweetalert2.css">
    <!-- sweetalert-master-->
    
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
        <input type="hidden" id="pId" value= "<?= $_SESSION['pId'] ;?>">
        <input type="text" id="idPos" value= "<?= $_SESSION['idPos'] ;?>"><br>
    <?php } ?>
    <input type="hidden" id="sesion" value= "<?= $_SESSION['sesion'];?>">
    <input type="hidden" id="session_id" value= "<?= $_SESSION['sesion_id'];?>">
    <!-- Datos sesion================================= -->    
    
</body>
</html>
