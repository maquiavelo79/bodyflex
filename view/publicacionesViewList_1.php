<?php
 
    session_start();
    $nivel=2;
   
?>
<!doctype html>
<!--[if IE 8]><html class="no-js lt-ie9" lang="en"><![endif]-->
<!--[if gt IE 8]><!--> 
<html class="no-js" lang="en"> <!--<![endif]-->
<head>

	<!-- Basic Page Needs=============== -->
	<meta charset="utf-8">
	<title>Bodyflex - Publicaciones</title>
	<meta name="description" content="">
	<meta name="author" content="">
	<meta name="viewport" content="width=device-width, initial-scale=1.0">

	<!-- CSS========= -->
        <?php include("../modulos/estilos.php"); ?>
         
	<!-- Favicons
	================================================== -->
	<link rel="apple-touch-icon-precomposed" sizes="144x144" href="../imagenes/apple-touch-icon-144.png">
        <link rel="apple-touch-icon-precomposed" sizes="114x114" href="../imagenes/apple-touch-icon-114.png">
        <link rel="apple-touch-icon-precomposed" sizes="72x72" href="../imagenes/apple-touch-icon-72.png">
        <link rel="apple-touch-icon-precomposed" href="../imagenes/apple-touch-icon-57.png">
        <link rel="shortcut icon" href="../imagenes/favicon.ico">

      
</head>
<body class="publicaciones">
    <?php include("../modulos/mobile_bar.php"); ?>
    <div id="page">
	<?php include("../modulos/menu.php"); ?>
        <div id="page-title">
            <div class="container">
                <div class="row">
                    <div class="col-xs-12">
                        <h2>Publicaciones</h2>
                    </div>
                </div>
            </div>
        </div>

    <?php include("../modulos/formPublicacion.php"); ?>     
           
    <main id="main" class="container">
        <div class="row">
            <div class="col-lg-9 col-sm-8">
                <?php include("../view/publicacionesResumidasView.php"); ?>    
            </div>
            <div class="sidebar col-lg-3 col-sm-4">
                <?php include("../modulos/publicacionPromocion.php"); ?> 
                
                <!-- WIDGET: FORMULARIO BUSQUEDA -->
                <!-- WIDGET: CALENDARIO -->
                <!-- WIDGET: TEXTO-->
                <!-- WIDGET: FLICKR-->
                <!-- WIDGET: TITULOS-->
              
            </div>
        </div>
    </main>

    <footer id="footer">
        <div class="container">
            <div class="row">
                <?php include("../modulos/textWidget.php"); ?>
                <?php include("../modulos/aboutWidget.php"); ?>        
                <?php include("../modulos/twitterWidget.php"); ?>     
                <?php include("../modulos/searchWidget.php"); ?>    
                <?php include("../modulos/textWidget2.php"); ?>		
            </div>
            <hr/>
            <?php include("../modulos/creditos.php"); ?>    
        </div>
    </footer>
</div> <!-- #page -->

<?php include("../modulos/mobileMenu.php"); ?>

<!-- Javascript ================================= -->
<?php include("../modulos/javaScriptComunes.php"); ?>
<script src='../controller/publicacionFormBsq.js'></script>


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
<?php } ?>

</body>
</html>