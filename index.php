<?php
    
    session_start();
    
    //Todo Visitante Posee Sesion
    $_SESSION['sesion_id']=session_id();
    
    $nivel=1;
    $itemMenu=1;
        
    //el valor de las variables de session cambia al logearse
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

<!doctype html>
<!--[if IE 8]><html class="no-js lt-ie9" lang="en"><![endif]-->
<!--[if gt IE 8]><!--> 
<html class="no-js" lang="en"> <!--<![endif]-->
<head>

	<!-- Basic Page Needs
  ================================================== -->
	<meta charset="utf-8">
	<title>Bodyflex - Fitness Professionals</title>
	<meta name="description" content="">
	<meta name="author" content="">
	<meta name="viewport" content="width=device-width, initial-scale=1.0">

	<!-- CSS 
 ================================================== -->
    <link href='http://fonts.googleapis.com/css?family=Roboto+Condensed:700,400,300' rel='stylesheet' type='text/css'>
    <link rel='stylesheet' href='css/bootstrap.css'>
    <link rel='stylesheet' href='css/flexslider.css'>
    <link rel='stylesheet' href='js/fancybox/jquery.fancybox.css'>
    <link rel='stylesheet' href='style.css'>
    <link rel='stylesheet' href='css/mediaqueries.css'>
    <link rel='stylesheet' href='colors/default.css'>    

	<!-- Favicons
	================================================== -->     
        <link rel="apple-touch-icon-precomposed" sizes="144x144" href="imagenes/apple-touch-icon-144.png">
        <link rel="apple-touch-icon-precomposed" sizes="114x114" href="imagenes/apple-touch-icon-114.png">
        <link rel="apple-touch-icon-precomposed" sizes="72x72" href="imagenes/apple-touch-icon-72.png">
        <link rel="apple-touch-icon-precomposed" href="imagenes/apple-touch-icon-57.png">
        <link rel="shortcut icon" href="imagenes/favicon.ico">

        <!-- JS-->     
        <script src="http://code.jquery.com/jquery-1.11.0.min.js"></script>
        
	<!-- hammer reload
	================================================== -->
        <?php include("../bodyflex/modulos/hammerReload.php"); ?>
        
</head>
<body class="home">
<?php include("../bodyflex/modulos/mobile_bar.php"); ?>
<div id="page">     
    
    <!-- Menú segun rol logeado -->
    <?php
       include("../bodyflex/modulos/menu.php"); 
    ?>
    
    <?php include("../bodyflex/modulos/slideshow.php"); ?>
    <main id="main" class="container">
        <div class="row">
            <div class="col-sm-12">	
                <?php include("../bodyflex/modulos/populares.php"); ?>    
                <?php include("../bodyflex/modulos/promoPrincipal.php"); ?>
                <div class="row">
                    <?php include("../bodyflex/modulos/articuloResumido.php"); ?>
                    <div class="col-lg-3 col-sm-4 sidebar">
                        <?php include("../bodyflex/modulos/instructores2.php"); ?>
                            <?php if(isset($_SESSION['sesion'])){ ?>
                                <?php if($_SESSION['sesion']){ ?>
                                    <?php include("../bodyflex/modulos/formSesion.php"); ?>         
                                <?php }else{ ?>    
                                    <?php include("../bodyflex/modulos/formLogin.php"); ?>
                                <?php } ?>    
                            <?php }else{ ?>    
                                <?php include("../bodyflex/modulos/formLogin.php"); ?>
                            <?php } ?>
                    </div>
                </div>
            </div>
        </div>
    </main>
    <footer id="footer">
        <div class="container">
            <div class="row">
                <?php include("../bodyflex/modulos/textWidget.php"); ?>
                <?php include("../bodyflex/modulos/aboutWidget.php"); ?>        
                <?php include("../bodyflex/modulos/twitterWidget.php"); ?>     
                <?php include("../bodyflex/modulos/searchWidget.php"); ?>    
                <?php include("../bodyflex/modulos/textWidget2.php"); ?>		
            </div>
            <hr/>
            <?php include("../bodyflex/modulos/creditos.php"); ?>    
        </div>
    </footer>
</div>
<?php include("../bodyflex/modulos/mobileMenu.php"); ?>

    
<!-- Javascript
================================================== -->
<script src="http://code.jquery.com/jquery-1.11.0.min.js"></script>
<script src='js/jquery-1.10.1.min.js'></script>
<script src='js/superfish.js'></script>
<script src='js/jquery.flexslider-min.js'></script>
<script src='js/jquery.mmenu.min.js'></script>
<script src='js/fancybox/jquery.fancybox.pack.js'></script>
<script src='js/contact.js'></script>
<script src='js/scripts.js'></script>
<script src='controller/loginController.js'></script>

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
    <input type="hidden" id="sesion" value= "<?= $_SESSION['sesion'];?>">
    <input type="hidden" id="session_id" value= "<?= $_SESSION['sesion_id']; ?>">
    <input type="hidden" id="itemMenu" value= "<?= $itemMenu; ?>">
    
<!--[if (gte IE 6)&(lte IE 8)]>
<script type="text/javascript" src="js/selectivizr-min.js"></script>
<![endif]-->
</body>
</html>