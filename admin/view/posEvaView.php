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
            <title>Bodyflex - [ADM] Evaluaci&oacute;n Postulaci&oacute;n</title>
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
            }); 
            function pubImgDrive(){
               $("#modalImgDrive").click();    
            }
        </script>
        
        
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
                                    <h2><i class="halflings-icon edit"></i><span class="break"></span>Evaluaci&oacute;n de postulaciones</h2>
                                    <div class="box-icon">
                                        <a href="#" class="btn-minimize"><i class="halflings-icon chevron-up"></i></a>
                                    </div>
                                </div>
                               
                        </div><!--/span-->
                    </div><!--/row-->
                    
                    <div class="box-content">
                        <table class="table table-bordered table-striped table-condensed">
                            <thead>
                                <tr>
                                    <th>ID</th>
                                    <th>Nombre</th>
                                    <th>Apellido</th>
                                    <th>Email</th>    
                                    <th>Fecha</th>    
                                </tr>
                            </thead>   
                            <tbody id="tbody">
<!--                                <tr>
                                    <td>1</td>
                                    <td class="center">Francisco Javier</td>
                                    <td class="center">Calderon Navarro</td>
                                    <td class="center">fjcalderon@uc.cl</td>
                                    <td class="center">01/01/2016 15:00</td>
                                    <td class="center">
                                        <span style="text-align: center; color: black; cursor: pointer;" class="label label-warning">EVALUAR</span>
                                    </td>                                       
                                </tr>-->
                            </tbody>
                         </table>  
                         <div id="posWarning" style="display:none;" class="box-content alerts"></div>
                         <div id="espera" class="form-actions" style="display:none;">
                            <h4 class="alert-heading">&nbsp;</h4>
                         </div>
                         <div id="idPag" class="pagination pagination-centered">
<!--                            <ul>
                                <li><a href="#">Prev</a></li>
                                <li class="active">
                                    <a href="#">1</a>
                                </li>
                                <li><a href="#">2</a></li>
                                <li><a href="#">3</a></li>
                                <li><a href="#">4</a></li>
                                <li><a href="#">Next</a></li>
                            </ul>-->
                        </div>     
                    </div>

                </div><!--/.fluid-container-->
            <!-- end: Content -->    
        </div><!--/#content.span10-->
    </div><!--/fluid-row-->

    
<!--    <span id='1' style="font-weight: bold; color: white; text-align: center; cursor: pointer;" class="label label-success">EVALUAR</span>-->
<!--        <span id='a' style="background-color: #FFCC00; text-align: center; font-weight: bold; color: black; cursor: pointer;" class="label label-warning">DETENER</span>
        <span id='a' style="background-color: #FFCC00; text-align: center; font-weight: bold; color: white; cursor: pointer;" class="label label-success">APROBAR</span>
        <span id='a' style="background-color: #FFCC00; text-align: center; font-weight: bold; color: white; cursor: pointer;" class="label label-important">RECHAZAR</span>-->
    
<!--    <div style="text-align:center;" class="alert alert-error">
    <b><span style="color: black;">Postulación  n° 10 derivada a etapa de Evaluacion.</span></b>
    </div>-->
    
    <!--Modales-->
        <button id="modalImgDrive" style="display: none;">modalImgDrive</button>
        <div class="modal hide fade" id="myModal"></div>
    <!--Modales-->
    
    <div class="clearfix"></div>
    <?php include("../../../bodyflex/admin/modulos/footer.php"); ?>
    <!-- start: JavaScript-->
        <?php include("../../../bodyflex/admin/modulos/javaScript.php"); ?>
    <script src="../controller/posEvaController.js"></script>
        <script src='../controller/cerrarSesion.js'></script>
    <!-- end: JavaScript-->
    
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
