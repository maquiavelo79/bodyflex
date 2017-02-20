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
            <title>Bodyflex - [PRO] Datos Complementarios</title>
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
            
            <script>
        
                function regProPro(){

                    var msgVtaPre='<p style="font-family: Verdana; text-align: justify; font-size: 16px; color: #1b2426;">';
                    msgVtaPre+='Aqui debes agrear tu <b style="font-size: 18px; color: blue; font-family: Impact, Charcoal, sans-serif;">Profesión</b>, si tienes más de una agrega la que más te represente o quiereas dar a conocer.</p>';
                    swal({   
                        title: 'Profesion',   
                        html: msgVtaPre,   
                        type: "info", 
                        allowOutsideClick: true,
                        animation: true,
                        confirmButtonColor: '#FFCC00',
                        confirmButtonText: '<span style="color: black; font-weight: bold;">Aceptar</span>'
                    });

                }   
                
                function regProEsp(){

                    var msgVtaPre='<p style="text-align: justify; font-family: Verdana; font-size: 16px; color: #1b2426;">Aqui debes agrear tu <b style="font-size: 18px; color: blue; font-family: Impact, Charcoal, sans-serif;">Especialidad</b>, si tienes más de una agrega la que más te represente o quiereas dar a conocer.</p>';                  
                    swal({   
                        title: 'Especialidad',   
                        html: msgVtaPre,   
                        type: "info", 
                        allowOutsideClick: true,
                        animation: true,
                        confirmButtonColor: '#FFCC00',
                        confirmButtonText: '<span style="color: black; font-weight: bold;">Aceptar</span>'
                    });

                }   
                
                function regProGD(){

                    var msgVtaPre='<p style="text-align: justify; font-family: Verdana; font-size: 16px; color: #1b2426;">Aqui debes agrear tu <b style="font-size: 18px; color: blue; font-family: Impact, Charcoal, sans-serif;">ID Google Drive</b> que hace referencia a tu foto principal de perfil profesional en Bodyflex.</p><br>';                  
                    msgVtaPre+="<b>";
                        msgVtaPre+="<a target='_blank' style='font-size: 20px; color: green; text-decoration: underline; font-weight: bold;'"; 
                        msgVtaPre+="href='http://drive.google.com/uc?export=view&id=0B82UUH1gaEMARmFTTzhJaEJwMTQ'>";
                        msgVtaPre+='<img style="width: 70px; height: 70px;" src="../../images/iconos/gd.ico">';
                        msgVtaPre+='<br><label style="font-weight: bold;font-size: 18px; color: blue;">Ejemplo</label>';
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
      
            </script>
            
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
                    
                    <div style="height: 650px;"> <!-- border-style: solid; border-color: blue; -->
                        <?php include("../modulos/regProLeft.php"); ?>
                        <?php include("../modulos/regProRight.php"); ?>
                    </div>

                </div><!--/.fluid-container-->
            <!-- end: Content -->    
            
        </div><!--/#content.span10-->
    </div><!--/fluid-row-->
    
    <?php include("../../../bodyflex/Dashboard/modulos/footer.php"); ?>
    <?php include("../../../bodyflex/Dashboard/modulos/javaScript.php"); ?>
    
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
        <input type="text" id="idPos" value= "<?= $_SESSION['idPos'] ;?>"><br>
    <?php } ?>
    <input type="text" id="sesion" value= "<?= $_SESSION['sesion'];?>"><br>
    <input type="text" id="session_id" value= "<?= $_SESSION['sesion_id'];?>"><br>
    <!-- Datos sesion================================= -->    
    
</body>
</html>
