<?php
    
session_start(); 
$itemMenu=6;

//Navegación - para determinar navegación 
    $nav=0;
//Nivel -- para determinar ruta de archivos incluidos
    $nivel=1; 
    
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
    
    if($_SESSION['sesion']!=1){
        header("Location: ../index.php");
    }
    
?>

<!DOCTYPE html>
<html lang="en">
<head>
	
	<!-- Basic Page Needs================ -->
            <meta charset="utf-8">
            <title>Bodyflex - CPANEL [ADM]</title>
            <meta name="description" content="">
            <meta name="author" content="">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
	<!-- end: Meta -->
	
	<!-- start: Mobile Specific -->
            <meta name="viewport" content="width=device-width, initial-scale=1">
	<!-- end: Mobile Specific -->
	
	<!-- start: CSS -->
            <link id="bootstrap-style" href="css/bootstrap.min.css" rel="stylesheet">
            <link href="css/bootstrap-responsive.min.css" rel="stylesheet">
            <link id="base-style" href="css/style.css" rel="stylesheet">
            <link id="base-style-responsive" href="css/style-responsive.css" rel="stylesheet">
            <link href='http://fonts.googleapis.com/css?family=Open+Sans:300italic,400italic,600italic,700italic,800italic,400,300,600,700,800&subset=latin,cyrillic-ext,latin-ext' rel='stylesheet' type='text/css'>
            <link rel="stylesheet" href="../font-awesome-4.5.0/css/font-awesome.min.css">
	<!-- end: CSS -->
	
        <!-- Favicons=============================================== -->
            <link rel="apple-touch-icon-precomposed" sizes="144x144" href="../imagenes/apple-touch-icon-144.png">
            <link rel="apple-touch-icon-precomposed" sizes="114x114" href="../imagenes/apple-touch-icon-114.png">
            <link rel="apple-touch-icon-precomposed" sizes="72x72" href="../imagenes/apple-touch-icon-72.png">
            <link rel="apple-touch-icon-precomposed" href="../imagenes/apple-touch-icon-57.png">
            <link rel="shortcut icon" href="../imagenes/favicon.ico">
	<!-- Favicons=============================================== -->
                
</head>

<body>
        <!-- start: Header -->
	<?php include("../admin/modulos/header.php"); ?>
	<!-- start: Header -->
        <div class="container-fluid-full">
            <div class="row-fluid">
                <?php include("../menu/menuAdm.php"); ?>
                <!-- start: Content -->
                <div id="content" class="span10">	
                    <?php include("../admin/modulos/navegacion.php"); ?>
                    <?php include("../admin/modulos/indicadoresRectangular4.php"); ?>	
                    <?php include("../admin/modulos/histogramas2.php"); ?>    
                    <?php include("../admin/modulos/indicadoresCirculares6.php"); ?>    
                    <?php include("../admin/modulos/histogramas3.php"); ?>  
                    <?php include("../admin/modulos/eventos3.php"); ?>	
                    <?php include("../admin/modulos/indicadoresCuadrados6.php"); ?>                            
                </div>
            </div><!--/#content.span10-->
        </div><!--/fluid-row-->
		
	<div class="modal hide fade" id="myModal">
            <div style="color: black; background-color: #FFCC00; font-weight: bold;" class="modal-header">
                <button type="button" class="close" data-dismiss="modal">×</button>
                <h3>Settings</h3>
            </div>
            <div class="modal-body">
                <p>Here settings can be configured...</p>
            </div>
            <div class="modal-footer">
                <a href="#" class="btn" data-dismiss="modal">Close</a>
                <a href="#" class="btn btn-primary">Save changes</a>
            </div>
	</div>
	
	<div class="clearfix"></div>
	
	<footer>
            <p>
                <span style="text-align:left;float:left">Bodyflex &copy; 2015</span>
            </p>
	</footer>
	
	<!-- start: JavaScript-->
            <script src='controller/cerrarSesion.js'></script>
            <?php include("../admin/modulos/javaScript.php"); ?>
	<!-- end: JavaScript-->
	        
        <!-- Datos sesion, solo si esta definida variable sesion ================================= -->
        <?php if(isset($_SESSION['sesion'])){ ?>
            email: <input type="text" id="email" value="<?= $_SESSION['email'];?>">
            nombre: <input type="text" id="nombre" value="<?= $_SESSION['nombre'];?>">
            apellido: <input type="text" id="apellido" value="<?= $_SESSION['apellido'];?>">
            alias: <input type="text" id="alias" value="<?= $_SESSION['alias'];?>">
            rol: <input type="text" id="rol" value= "<?= $_SESSION['rol'];?>">
            rut: <input type="text" id="rut" value= "<?= $_SESSION['rut'];?>">
            dv: <input type="text" id="dv" value= "<?= $_SESSION['dv'];?>">
            url: <input type="text" id="url" value= "<?= $_SESSION['url'];?>">
        <?php } ?>
        sesion: <input type="text" id="sesion" value= "<?= $_SESSION['sesion'];?>">
        sesion_id: <input type="text" id="session_id" value= "<?= $_SESSION['sesion_id']; ?>">
        itemMenu: <input type="text" id="itemMenu" value= "<?= $itemMenu; ?>">
        <!-- Datos sesion================================= -->
        
        
</body>
</html>
