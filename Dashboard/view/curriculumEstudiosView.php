<?php
session_start();   

//Navegación - para determinar navegación 
    $nav=5; //Curriculum>Estudios
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
    
?>

<!DOCTYPE html>
<html lang="en">
<head>
	
	<!-- Basic Page Needs================ -->
            <meta charset="utf-8">
            <title>Bodyflex - [PRO] Estudios</title>
            <meta name="description" content="">
            <meta name="author" content="">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
	<!-- end: Meta -->
	
	<!-- start: Mobile Specific -->
            <meta name="viewport" content="width=device-width, initial-scale=1">
	<!-- end: Mobile Specific -->
	
	<!-- start: CSS -->
            <link id="bootstrap-style" href="../css/bootstrap.min.css" rel="stylesheet">
            <link href="../css/bootstrap-responsive.min.css" rel="stylesheet">
            <link id="base-style" href="../css/style.css" rel="stylesheet">
            <link id="base-style-responsive" href="../css/style-responsive.css" rel="stylesheet">
            <link href='http://fonts.googleapis.com/css?family=Open+Sans:300italic,400italic,600italic,700italic,800italic,400,300,600,700,800&subset=latin,cyrillic-ext,latin-ext' rel='stylesheet' type='text/css'>
            
        <!--awesome-->    
            <link rel="stylesheet" href="../../font-awesome-4.5.0/css/font-awesome.min.css">
        <!--awesome--> 
            
        <!-- DATEPICKER -->
            <link rel="stylesheet" href="../widgets/jquery-ui-1.11.3.custom/jquery-ui.css">
            <script src="../widgets/jquery-ui-1.11.3.custom/external/jquery/jquery.js"></script>
            <script src="../widgets/jquery-ui-1.11.3.custom/jquery-ui.js"></script>    
            
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
	
        <script>
            
                $( document ).ready(function(){
                    
                    $("#txtEstDes").cleditor({
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
            
            
                $(function() {
                    var fecha = new Date();
                    var ano = fecha.getFullYear();
                    var rango='1920' + ':' + ano;
                    
                    $( "#date" ).datepicker({
                        after: ['attr'],
                        dateFormat: "dd-mm-yy",
                        altFormat: "ddmmyy",
                        altField: "#alt-date",
                        changeYear: true,
                        changeMonth: true,
                        autoSize: true,
                        monthNamesShort: [ "Ene", "Feb", "Mar", "Abr", "May", "Jun", "Jul", "Ago", "Sep", "Oct", "Nov", "Dic" ],
                        showMonthAfterYear: true,
                        yearRange: rango
                    });
                    
                                    
                //Para escribir solo letras
                $('#txtExpCar').validCampo(' abcdefghijklmnñopqrstuvwxyzáéíóú');
                $('#txtExpIns').validCampo(' abcdefghijklmnñopqrstuvwxyzáéíóú');
                
                $('.date').live('focus', function(){
                    $(this).datepicker({
                        changeMonth: true,
                        changeYear: true,
                        yearRange: '1930:'+(new Date).getFullYear()
                    });
                });
                
            });
            
            function estudios(){

                    var msgImpPer='<p style="text-align: justify; font-size: 16px; font-family: Verdana; color: #1b2426;">Ingresar todos tus estudios es muy importante debido a que los miembros de la comunidad que requieran de <b style="font-size: 16px; color: blue; font-family: Impact, Charcoal, sans-serif;">asesoría deportiva </b> se basarán ciertos criterios para la búsqueda del profesional en base a sus gustos y preferencias, por lo anterior, a modo de ejemplo, algunos criterios por los que podría buscar un determinado cliente podrían ser:</p>';
                    
                    msgImpPer+='<ul style="text-align: left; font-size: 16px; font-family: Verdana; color: #1b2426;">';
                        msgImpPer+='<li>Nivel Académico (Estudios)</li>';
                        msgImpPer+='<li>Experiencia Laboral</li>';
                        msgImpPer+='<li>Experiencia Deportiva</li>';
                        msgImpPer+='<li>Región a la que pertenece el profesional</li>';
                        msgImpPer+='<li>Edad del Profesional</li>';
                        msgImpPer+='<li>Especialidad</li>';
                    msgImpPer+='</ul>';
                    
                    msgImpPer+='<p style="text-align: justify; font-size: 16px; font-family: Verdana; color: #1b2426;">Dado la importancia de esta información, los estudios en tu perfil deben ser lo más veridicos y precisos posible.</p>';
                                                            
                    swal({   
                        title: 'Estudios',   
                        html: msgImpPer,   
                        type: "info", 
                        allowOutsideClick: true,
                        animation: true,
                        width: '600px',
                        confirmButtonColor: '#FFCC00',
                        confirmButtonText: '<span style="color: black; font-weight: bold;">Aceptar</span>'
                    });
                    
            }   
            
            function orden(){

                var msgVtaPre='<p style="font-family: Verdana; font-size: 15px; color: #1b2426;">En este campo debes ingresar (numero) el orden de visualización (ejemplo).</p>'; 

                msgVtaPre+="<br>";
                msgVtaPre+="<b>";
                    msgVtaPre+="<a target='_blank' style='font-size: 20px; color: blue; text-decoration: underline; font-weight: bold;'"; 
                    msgVtaPre+="href='http://drive.google.com/uc?export=view&id=0B82UUH1gaEMAU3pGWklDYVQ5YUE'>";
                    msgVtaPre+='<i class="fa fa-user fa-2x"></i><br>';
                    msgVtaPre+='<b style="font-size: 15px;">Ejemplo1</b>';
                    msgVtaPre+="</a>";
                    msgVtaPre+="<br>";
                    msgVtaPre+="<a target='_blank' style='font-size: 20px; color: blue; text-decoration: underline; font-weight: bold;'"; 
                    msgVtaPre+="href='http://drive.google.com/uc?export=view&id=0B82UUH1gaEMAMkhtZnZyVWNzZ1E'>";
                    msgVtaPre+='<b style="font-size: 15px;">Ejemplo2</b>';
                    msgVtaPre+="</a>";
                msgVtaPre+="</b>";

                swal({   
                    title: 'Orden de Visualización',   
                    html: msgVtaPre,   
                    type: "info", 
                    allowOutsideClick: true,
                    animation: true,
                    confirmButtonColor: '#FFCC00',
                    confirmButtonText: '<span style="color: black; font-weight: bold;">Aceptar</span>'
                });

            }  
            
        </script>
        
        
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
                                        <span class="break"></span>Estudios
                                        &nbsp;&nbsp; <span onclick="estudios();" style="cursor: pointer; color: blue; font-size: 14px; font-family: Century Gothic,CenturyGothic,AppleGothic,sans-serif; font-weight: bold;"><u>¿POR QUÉ ES IMPORTANTE QUE INGRESES TUS ESTUDIOS?</u></span>
                                    </h2>
                                </div>
                                <br>
                                <div class="box-content control-group">
                                    <form class="form-horizontal" id="formEstudios">
                                        <fieldset>
                                            
                                            <div id="conEstId">
                                                <label id="lblEstId" class="control-label" for="appendedInput"><b>Identificador</b></label>
                                                <div class="controls">
                                                    <div class="input-append">
                                                          <input style="background-color: whitesmoke; box-shadow: 0 0 2px black; margin: 0px 0px 0px 0px; font-weight: bold; color: black; text-align: center; color: black;" id="txtEstId" size="30" type="text" maxlength="10" disabled>
                                                    </div>
                                                    <span class="help-inline"></span>
                                                </div>
                                            </div> 
                                            <div id="conEstNom" style="margin-top: 8px;">
                                                <label id="lblEstNom" class="control-label" for="appendedInput"><b>Nombre</b></label>
                                                <div class="controls">
                                                    <div class="input-append">
                                                        <input id="txtEstNom" placeholder="Pedagogía en Educación Física" size="30" type="text" maxlength="200" style="background-color: whitesmoke; box-shadow: 0 0 2px black; margin: 0px 0px 0px 0px; font-weight: bold; color: black; text-align: center; color: black; width: 500px;">
                                                    </div>
                                                </div>
                                            </div>
                                            <div id="conEstTip" style="margin-top: 8px;">
                                                <label id="lblEstTip" class="control-label" for="appendedInput"><b>Tipo</b></label>
                                                <div class="controls">					
                                                    <select id="txtEstTip" style="background-color: whitesmoke; box-shadow: 0 0 2px black; margin: 0px 0px 0px 0px; font-weight: bold; color: black; text-align: left; width: 400px">
                                                        <option selected="">(SELECCIONE)</option>  
                                                        <option value="TÉCNICO">TÉCNICO</option>
                                                        <option value="PROFESIONAL">PROFESIONAL</option>
                                                        <option value="GRADO ACADÉMICO">GRADO ACADÉMICO</option>
                                                        <option value="PROFESIONAL CON GRADO ACADÉMICO">PROFESIONAL CON GRADO ACADÉMICO</option>
                                                        <option value="CERTIFICACIÓN">CERTIFICACIÓN</option>
                                                        <option value="DIPLOMADO">DIPLOMADO</option>
                                                        <option value="CURSO">CURSO</option>
                                                    </select>
                                                </div>
                                            </div>  
                                            <div id="conEstIns" style="margin-top: 8px;">
                                                <label id="lblEstIns"  class="control-label" for="appendedInput"><b>Instituci&oacute;n</b></label>
                                                <div class="controls">
                                                    <div class="input-append">
                                                        <input id="txtEstIns" size="16" type="text" maxlength="100" placeholder="Pontificia Universidad Católica de Chile PUC" style="background-color: whitesmoke; box-shadow: 0 0 2px black; margin: 0px 0px 0px 0px; font-weight: bold; color: black; text-align: center; color: black; width: 500px;">
                                                    </div>
                                                </div>
                                            </div>
                                            
                                            <!-- FECHA -->                                            
                                            <div id="conEstFec" style="margin-top: 8px;">
                                                <label  class="control-label" for="fechaDesde"><b>Fecha</b></label>
                                                <div class="controls">
                                                    <input type="text" id="date" name="datepicker" style="background-color: whitesmoke; box-shadow: 0 0 2px black; margin: 0px 0px 0px 0px; font-weight: bold; color: black; text-align: center; color: black;">
                                                    <span class="help-inline">Titulación, egreso o en curso.</span>
                                                </div>  
                                            </div>
                                            
                                            <!-- AÑOS DURACIÓN (combo)-->                                            
                                            <div id="conEstDur" style="margin-top: 8px;">
                                                <label id="lblTip" class="control-label" for="appendedInput"><b>Duración (años)</b></label>
                                                <div class="controls">					
                                                    <select id="cmbDur" style="background-color: whitesmoke; box-shadow: 0 0 2px black; margin: 0px 0px 0px 0px; font-weight: bold; color: black; text-align: center; color: black;">
                                                        <option selected="selected">(SELECCIONE)</option>  
                                                        <option value="1">1</option>
                                                        <option value="2">2</option>
                                                        <option value="3">3</option>
                                                        <option value="4">4</option>
                                                        <option value="5">5</option>
                                                        <option value="6">6</option>
                                                        <option value="Menos de un año">Menos de un año</option>
                                                    </select>
                                                </div>
                                            </div>  
                                            
                                            <div id="conEstCon" style="margin-top: 8px;">
                                                <label id="lblEstFin" class="control-label" for="appendedInput"><b>Condición</b></label>
                                                <div class="controls">					
                                                    <select id="cmbEstCon" style="background-color: whitesmoke; box-shadow: 0 0 2px black; margin: 0px 0px 0px 0px; font-weight: bold; color: black; text-align: center; color: black;">
                                                        <option selected>(SELECCIONE)</option>  
                                                        <option value="TITULADO">TITULADO</option>
                                                        <option value="EGRESADO">EGRESADO</option>
                                                        <option value="GRADUADO">GRADUADO</option>
                                                        <option value="CERTIFICADO">CERTIFICADO</option>
                                                        <option value="ESTUDIANTE">ESTUDIANTE</option>
                                                        <option value="DIPLOMADO">DIPLOMADO</option>
                                                    </select>
                                                </div>
                                            </div>  
                                           
                                            <div id="conEstFlick" style="margin-top: 8px;">
                                                <label id="lblEstFlick"  class="control-label" for="appendedInput"><b>Posici&oacute;n</b></label>
                                                <div class="controls">
                                                    <div class="input-append">
                                                        <input style="background-color: whitesmoke; box-shadow: 0 0 2px black; margin: 0px 0px 0px 0px; font-weight: bold; color: black; text-align: center; color: black;" id="txtPos" size="16" type="text" maxlength="11">
                                                    </div>
                                                    <span class="help-inline">
                                                        <i class="fa fa-info-circle fa-2x" style="color: green; cursor: pointer;" onclick="orden();"></i>
                                                    </span> 
                                                    <span class="help-inline">
                                                        Orden para visualización en pefil.
                                                    </span>
                                                </div>
                                            </div>       

                                            <br>
                                            
<!--                                            <div id="conExpDes" style="margin-top: 8px;">
                                                <label id="lblExpDes" class="control-label" for="textarea2"><b>Descripción</b></label>
                                                <div class="controls">
                                                    <textarea style="background-color: whitesmoke; box-shadow: 0 0 2px black; margin: 0px 0px 0px 0px; font-weight: bold; color: black; text-align: center; color: black;" class="cleditor" id="txtEstDes" name="textarea2" rows="5"></textarea>
                                                    <span class="help-inline"><b>Breve descripci&oacute;n de la formación.</b></span>
                                                </div>
                                            </div>-->
                                            
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
<!--                                                    <button type="button" style="border-color: silver; background-color: silver; color: black; font-weight: bold; width: 100px;" class="btn" id="btnProbar">Probar</button>-->
                                                </div>
                                        </fieldset>
                                    </form>
                                </div>
                        </div><!--/span-->
                    </div><!--/row-->
                    <div class="row-fluid sortable">		
                        <div class="box span12">
                            <div class="box-header" data-original-title>
                                <h2 style="font-size: 14px; font-family: Century Gothic,CenturyGothic,AppleGothic,sans-serif; font-weight: bold; color: black;">
                                    <i class="halflings-icon edit"></i>
                                    <span class="break"></span>
                                    Estudios Ingresados                                    
                                </h2>
                            </div>
                            <div class="box-content" id="conTabla"><!--contenedor de tabla -->
                                <table id="tblEstudios" class="table table-striped table-bordered bootstrap-datatable">
                                    <thead>
                                        <tr>
                                            <th>Id</th>
                                            <th>Nombre</th>
                                            <th>Tipo</th>
                                            <th>Institución</th>
                                            <th>Condición</th>
                                            <th>Fecha</th>
                                            <th>Duración</th>
                                            <th>Posici&oacute;n</th>
<!--                                            <th>Descripci&oacute;n</th>-->
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
       
    <!-- sweetalert-master-->
        <script src="../sweetalert-master2/sweetalert2.min.js"></script>
        <link rel="stylesheet" type="text/css" href="../sweetalert-master2/sweetalert2.css">
    <!-- sweetalert-master-->
    
    <div class="clearfix"></div>
    <?php include("../../../bodyflex/Dashboard/modulos/footer.php"); ?>
    <!-- start: JavaScript-->
        <?php include("../../../bodyflex/Dashboard/modulos/javaScript.php"); ?>
    <script src="../controller/curriculumEstudiosController.js"></script>
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
        <input type="text" id="idPos" value= "<?= $_SESSION['idPos'] ;?>"><br>
    <?php } ?>
    <input type="hidden" id="sesion" value= "<?= $_SESSION['sesion'];?>">
    <input type="hidden" id="session_id" value= "<?= $_SESSION['sesion_id'];?>">
    <!-- Datos sesion================================= -->    
    
</body>
</html>
