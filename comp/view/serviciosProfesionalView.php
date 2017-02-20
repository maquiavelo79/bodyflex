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

            <noscript>
                <div class="alert alert-block span10">
                    <h4 class="alert-heading">Warning!</h4>
                    <p>You need to have <a href="http://en.wikipedia.org/wiki/JavaScript" target="_blank">JavaScript</a> enabled to use this site.</p>
                </div>
            </noscript>

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
                                                <label id="lblHeadId" class="control-label" for="appendedInput">Identificador</label>
                                                <div class="controls">
                                                    <div class="input-append">
                                                        <input id="txtSerId" size="30" type="text" maxlength="10" disabled  value="">
                                                    </div>
                                                    <span class="help-inline"></span>
                                                </div>
                                            </div> 
                                            
                                            <div id="conTit1" class="control-group">
                                                <label id="lbltit1" class="control-label" for="appendedInput">Nombre Servicio</label>
                                                <div class="controls">
                                                    <div class="input-append">
                                                          <input id="txtNomSer" size="30" type="text" maxlength="30">
                                                    </div>
                                                    <span class="help-inline">Máximo 50 caracteres</span>
                                                </div>
                                            </div>
                                            
                                            <div id="conTit1" class="control-group">
                                                <label id="lbltit1" class="control-label" for="appendedInput">Clase &Iacute;cono</label>
                                                <div class="controls">
                                                    <div class="input-append">
                                                          <input id="txtClaIco" size="30" type="text" maxlength="30">
                                                    </div>
                                                    <span class="help-inline">awesome</span>
                                                </div>
                                            </div>
                                            
                                            <div id="conFlick" class="control-group">
                                                <label id="lblfli"  class="control-label" for="appendedInput">ID Flickr</label>
                                                <div class="controls">
                                                    <div class="input-append">
                                                        <input id="txtIdFli" size="16" type="text" maxlength="11">
                                                    </div>
                                                <span class="help-inline">Identificador de imagen (Ej: 16807518868)</span>
                                                </div>
                                            </div>
                                            
                                            <div id="divPublicacion" class="control-group hidden-phone">
                                                <label id="lbltxt" class="control-label" for="textarea2">Descripci&oacute;n corta</label>
                                                <div class="controls">
                                                    <textarea class="cleditor" id="txtDesCor" name="txtDesCor" rows="5"></textarea>
                                                    <span class="help-inline">Máximo 100 caracteres!</span>
                                                </div>
                                            </div>
                                            
                                            <div id="divPublicacion" class="control-group hidden-phone">
                                                <label id="lbltxt" class="control-label" for="textarea2">Descripci&oacute;n detallada</label>
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
                                                    <button type="button" class="btn" id="btnGuardar">Guardar</button>
                                                    <button type="button" class="btn btn-info btn-setting" id="btnEliminar">Eliminar</button>
                                                    <button type="reset" class="btn" id="btnLimpiar">Limpiar</button>
                                                </div>
                                        </fieldset>
                                    </form>
                                </div>
                        </div><!--/span-->
                    </div><!--/row-->
                    
                    <!-- imagen slider -->
                    <div class="row-fluid sortable">
                        <div class="box span12">
                            <div class="box-header" data-original-title>
                                <h2><i class="halflings-icon edit"></i><span class="break"></span>Imagen Servicio Profesional</h2>
                                <div class="box-icon">
                                    <a href="#" class="btn-minimize"><i class="halflings-icon chevron-up"></i></a>
                                </div>
                            </div><br>
                            <div class="box-content">
                                <?php include("../modulos/serviciosProfesionalImagen.php"); ?>  
                            </div>
                        </div>
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
                                            <th style="width: 5%;">Id</th>
                                            <th style="width: 10%;">Nombre</th>
                                            <th style="width: 10%;">Clase</th>
                                            <th style="width: 10%;">Imagen</th>
                                            <th style="width: 10%;">N° Flickr</th>
                                            <th style="width: 15%;">Desc. Corta</th>
                                            <th style="width: 40%;">Desc. Detallada</th>
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
        <script src='controller/cerrarSesion.js'></script>
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
