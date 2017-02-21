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
        
    }        
    
    
?>

<!DOCTYPE html>
<html lang="en">
<head>
	
	<!-- Basic Page Needs================ -->
            <meta charset="utf-8">
            <title>Bodyflex - [ADM] Registro</title>
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
                
                .stInput{
                    box-shadow: 0 0 6px black; 
                    margin: 0px 0px 0px 0px; 
                    height: 15px; 
                    text-align: center; 
                    color: black; 
                    font-weight: bold; 
                    background-color: papayawhip;
                    font-size: 18px; 
                    text-align: center; 
                    color: black; 
                    width: 400px;
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
                                        
                    <div id="registro" style="display: none;" class="row-fluid sortable">
                        <div class="box span12">
                            <div class="box-header" data-original-title>
                                <h2><i class="halflings-icon edit"></i><span class="break"></span>Postulaciones Aprobadas</h2>
                                <div class="box-icon">
                                    <a href="#" class="btn-minimize"><i class="halflings-icon chevron-up"></i></a>
                                </div>
                            </div>
                            <br>
                            <div class="box-content">
                                <form class="form-horizontal" id="formSlider">
                                    <fieldset>
                                        <div class="control-group">
                                            <label class="control-label" for="appendedInput"><b>Identificador</b></label>
                                            <div class="controls">
                                                <div class="input-append">
                                                    <input id="proIdPos" style="box-shadow: 0 0 2px black; margin: 0px 0px 0px 0px; height: 15px; text-align: center; color: black; font-weight: bold; background-color: whitesmoke; font-size: 14px; text-align: center; color: black; width: 100px;" disabled type="text" maxlength="10" value="">
                                                </div>
                                                <span class="help-inline">
                                                    <span class="help-inline">ID de Postulaci&oacute;n aprobada</span>
                                                </span>
                                               
                                            </div>
                                        </div> 

                                        <div class="control-group">
                                            <label class="control-label" for="appendedInput"><b>Estado</b></label>
                                            <div class="controls">
                                                <div class="input-append">
                                                    <input id="proEst" name="proEst" style="box-shadow: 0 0 2px black; margin: 0px 0px 0px 0px; height: 15px; text-align: center; color: black; font-weight: bold; background-color: whitesmoke; font-size: 14px; text-align: center; color: black; width: 400px;" disabled type="text" maxlength="100">
                                                </div>
                                            </div>
                                        </div>
                                        
                                        <div class="control-group">
                                            <label class="control-label" for="appendedInput"><b>Rut</b></label>
                                            <div class="controls">
                                                <div class="input-append">
                                                    <input id="proRut" name="proRut" style="box-shadow: 0 0 2px black; margin: 0px 0px 0px 0px; height: 15px; text-align: center; color: black; font-weight: bold; background-color: whitesmoke; font-size: 14px; text-align: center; color: black; width: 400px;" type="text" maxlength="100">
                                                </div>
                                            </div>
                                        </div>

                                        <div class="control-group">
                                            <label class="control-label" for="appendedInput"><b>Nombres</b></label>
                                            <div class="controls">
                                                <div class="input-append">
                                                    <input id="proNom" style="box-shadow: 0 0 2px black; margin: 0px 0px 0px 0px; height: 15px; text-align: center; color: black; font-weight: bold; background-color: whitesmoke; font-size: 14px; text-align: center; color: black; width: 400px;" type="text" maxlength="100">
                                                </div>
                                            </div>
                                        </div>

                                        <div class="control-group">
                                            <label class="control-label" for="appendedInput"><b>Apellidos</b></label>
                                            <div class="controls">
                                                <div class="input-append">
                                                    <input id="proApe" style="box-shadow: 0 0 2px black; margin: 0px 0px 0px 0px; height: 15px; text-align: center; color: black; font-weight: bold; background-color: whitesmoke; font-size: 14px; text-align: center; color: black; width: 400px;" type="text" maxlength="100">
                                                </div>
                                            </div>
                                        </div>

                                        <div class="control-group">
                                            <label class="control-label" for="appendedInput"><b>Fecha Nacimiento</b></label>
                                            <div class="controls">
                                                <div class="input-append">
                                                    <input id="proFecNac"  OnKeyPress="javascript: return solo_fecha(event,value,this);" OnBlur="javascript: sale(this);" style="box-shadow: 0 0 2px black; margin: 0px 0px 0px 0px; height: 15px; text-align: center; color: black; font-weight: bold; background-color: whitesmoke; font-size: 14px; text-align: center; color: black; width: 400px;" type="text" maxlength="100">
                                                </div>
                                                <span class="help-inline">
                                                    <span class="help-inline">ej: 01/01/1980</span>
                                                </span>
                                            </div>
                                        </div>
                                        
                                        <div class="control-group">
                                            <label class="control-label" for="appendedInput"><b>Email</b></label>
                                            <div class="controls">
                                                <div class="input-append">
                                                    <input id="proEml" style="box-shadow: 0 0 2px black; margin: 0px 0px 0px 0px; height: 15px; text-align: center; color: black; font-weight: bold; background-color: whitesmoke; font-size: 14px; text-align: center; color: black; width: 400px;" type="text" maxlength="100">
                                                </div>
                                            </div>
                                        </div>

                                        <div class="control-group">
                                            <label class="control-label" for="appendedInput"><b>Fono</b></label>
                                            <div class="controls">
                                                <div class="input-append">
                                                    <input id="proFon" style="box-shadow: 0 0 2px black; margin: 0px 0px 0px 0px; height: 15px; text-align: center; color: black; font-weight: bold; background-color: whitesmoke; font-size: 14px; text-align: center; color: black; width: 400px;" type="text" maxlength="100">
                                                </div>
                                            </div>
                                        </div>

                                        <div class="control-group">
                                            <label class="control-label" for="appendedInput"><b>Celular</b></label>
                                            <div class="controls">
                                                <div class="input-append">
                                                    <input id="proCel" style="box-shadow: 0 0 2px black; margin: 0px 0px 0px 0px; height: 15px; text-align: center; color: black; font-weight: bold; background-color: whitesmoke; font-size: 14px; text-align: center; color: black; width: 400px;" type="text" maxlength="100">
                                                </div>
                                                <span class="help-inline">
                                                    <span class="help-inline">+56 9 7767 7562</span>
                                                </span>
                                            </div>
                                        </div>

                                        <div class="control-group">
                                            <label class="control-label" for="appendedInput"><b>Profesion</b></label>
                                            <div class="controls">
                                                <div class="input-append">
                                                    <input id="proPro" style="box-shadow: 0 0 2px black; margin: 0px 0px 0px 0px; height: 15px; text-align: center; color: black; font-weight: bold; background-color: whitesmoke; font-size: 14px; text-align: center; color: black; width: 400px;" type="text" maxlength="100">
                                                </div>
                                            </div>
                                        </div>

                                        <!-- GIF LOAD-->
                                        <div id="espera" class="form-actions" style="display:none;">
                                            <button type="button" class="close" data-dismiss="alert">×</button>
                                            <h4 class="alert-heading">&nbsp;</h4>
                                        </div>

                                        <!-- alerts -->
                                        <div id="regWarning" class="box-content alerts"></div>

                                        <!-- BOTONES-->
                                        <div class="form-actions" id="botonera">
                                            <button style="background-color: #FFCC00; color: black; font-weight: bold;" type="button" class="btn" id="btnGuardar">Guardar</button>
                                            <button style="background-color: silver; color: black; font-weight: bold;" type="button" class="btn" id="btnCancelar">Cancelar</button>
                                        </div>
                                    </fieldset>
                                </form>
                            </div>
                               
                        </div><!--/span-->
                    </div><!--/row-->
                    
                    <div class="box-content">
                        <table id="tblAprobados" class="table table-bordered table-striped table-condensed">
                            <thead>
                                <tr>
                                    <th>ID</th>
                                    <th>Estado</th>
                                    <th>Nombre</th>
                                    <th>Apellido</th>
                                    <th>Email</th>    
                                </tr>
                            </thead>   
                            <tbody id="tbody"></tbody>
                         </table>  
                         <div id="regWarning2" style="display:none;" class="box-content alerts"></div>
                         <div id="espera" class="form-actions" style="display:none;">
                            <h4 class="alert-heading">&nbsp;</h4>
                         </div>
                         <div id="idPag" class="pagination pagination-centered"></div>     
                    </div>

                </div><!--/.fluid-container-->
            <!-- end: Content -->    
        </div><!--/#content.span10-->
    </div><!--/fluid-row-->
    
    <?php include("../../../bodyflex/admin/modulos/footer.php"); ?>
    <?php include("../../../bodyflex/admin/modulos/javaScript.php"); ?>
    
    <script src="../js/jquery.Rut.js" type="text/javascript"></script> 
    <script type="text/javascript">
        jQuery(document).ready(function(){
            $('#proRut').Rut({
                on_error: function(){
                                        
                    $('#proRut').select();
                    var msg='<div style="text-align:center;" class="alert alert-error">';
                    msg+='<b><span style="color: #000;">Favor ingrese un Rut válido</span></b>';
                    msg+='</div>'; 
                    $('#regWarning').html(msg);
                    $('#regWarning').show();
                    return false;
                    
                },
                format_on: 'keyup'
            });
        });    
    </script>
    
    <script src="../controller/regProController.js"></script>
    <script src='../controller/cerrarSesion.js'></script>
        
    <!-- sweetalert-master-->
        <script src="../sweetalert-master2/sweetalert2.min.js"></script>
        <link rel="stylesheet" type="text/css" href="../sweetalert-master2/sweetalert2.css">
    <!-- sweetalert-master-->
    
    <!-- Datos sesion, solo si esta definida variable sesion ================================= -->
    <?php if(isset($_SESSION['sesion'])){ ?>
        <input type="text" id="email" value="<?= $_SESSION['email'];?>"><br>
        <input type="text" id="nombre" value="<?= $_SESSION['nombre'];?>"><br>
        <input type="text" id="apellido" value="<?= $_SESSION['apellido'];?>"><br>
        <input type="text" id="alias" value="<?= $_SESSION['alias'];?>"><br>
        <input type="text" id="rol" value= "<?= $_SESSION['rol'];?>"><br>
        <input type="text" id="rut" value= "<?= $_SESSION['rut'];?>"><br>
        <input type="text" id="dv" value= "<?= $_SESSION['dv'];?>"><br>
        <input type="text" id="url" value= "<?= $_SESSION['url'];?>"><br>
    <?php } ?>
    <input type="text" id="sesion" value= "<?= $_SESSION['sesion'];?>"><br>
    <input type="text" id="session_id" value= "<?= $_SESSION['sesion_id'];?>"><br>
    <!-- Datos sesion================================= -->    
    
</body>
</html>