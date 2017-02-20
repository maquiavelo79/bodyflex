<?php
session_start();         
//Navegación - para determinar navegación 
    $nav=9; //Mensajeria
//Nivel -- para determinar ruta de archivos incluidos
    $nivel=2; 

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
    
    if($_SESSION['sesion']!=1){
        header("Location: ../index.php");
    }    

?>

<!DOCTYPE html>
<html lang="en">
<head>
	
    <!-- start: Meta -->
    <meta charset="utf-8">
    <title>Bodyflex - [PRO] Mensajes</title>
    <meta name="description" content="Bootstrap Metro Dashboard">
    <meta name="author" content="Dennis Ji">
    
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
            <?php include("../modulos/menu.php"); ?>
            <!-- end: Main Menu -->

            <!-- start: Content -->
            <div id="content" class="span10">		
                <!-- start: navegación-->
                <?php include("../modulos/navegacion.php"); ?>
                <!-- end: navegación -->
                
                <!-- HEADER -->
                    <?php include("../modulos/headerUser.php"); ?>
                    <br>
                <!-- HEADER -->
                
                <div class="row-fluid">	
                    <?php include("../modulos/mensajesLista.php"); ?>
                    <?php include("../modulos/mensajesDetalle.php"); ?>
                </div>
                
            </div>
        </div><!--/#content.span10-->
    </div><!--/fluid-row-->

    <!--/modal-->
        <div class="modal hide fade" id="myModal"></div>
    <!--/modal-->
    
    <?php include("../../../bodyflex/Dashboard/modulos/footer.php"); ?>
    <?php include("../../../bodyflex/Dashboard/modulos/javaScript.php"); ?>
    <script src='../controller/cerrarSesion.js'></script>
    
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
