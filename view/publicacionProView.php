<?php
include("../model/publicacionCsuPoseeContenido.php"); 

    session_start();
    $nivel=2;
   
    //DATOS REQUERIDOS PARA EL FUNCIONAMIENTO DE ESTA PAGINA
    $puId=$_REQUEST['puId'];
    $puPru=$_REQUEST['puPru']; //prueba publicación => 0=ES PRUEBA | 1=NO ES PRUEBA
    $proRut=$_REQUEST['proRut']; //RUT DEL PROFESIONAL AUTOR DE LA PUBLICACIÓN
    
    $poseeContenido=publicacionPoseeContenido($puId);
    
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
        $_SESSION['idPub']='';
    } 
    
?>

<!doctype html>
<!--[if IE 8]><html class="no-js lt-ie9" lang="en"><![endif]-->
<!--[if gt IE 8]><!--> <html class="no-js" lang="en"> <!--<![endif]-->
<head>
    <!-- Basic Page Needs =========== -->
    <meta charset="utf-8">
    <title>Bodyflex - Publicaci&oacute;n</title>
    <meta name="description" content="">
    <meta name="author" content="">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">

    <!-- CSS============================== -->
    <?php include("../modulos/estilos.php"); ?>

    <!--awesome-->    
        <link rel="stylesheet" href="../font-awesome-4.5.0/css/font-awesome.min.css">
    <!--awesome-->       
    
    <!-- Favicons
    ================================================== -->
    <link rel="apple-touch-icon-precomposed" sizes="144x144" href="../imagenes/apple-touch-icon-144.png">
    <link rel="apple-touch-icon-precomposed" sizes="114x114" href="../imagenes/apple-touch-icon-114.png">
    <link rel="apple-touch-icon-precomposed" sizes="72x72" href="../imagenes/apple-touch-icon-72.png">
    <link rel="apple-touch-icon-precomposed" href="../imagenes/apple-touch-icon-57.png">
    <link rel="shortcut icon" href="../imagenes/favicon.ico">   
    
    <link rel="stylesheet" href="../Magnific-Popup-master/dist/magnific-popup.css">
    <link rel="stylesheet" href="../css/mensaje.css">
    <script src="http://code.jquery.com/jquery-1.11.0.min.js"></script>   
    <script src='../js/jquery-1.10.1.min.js'></script>
    <script src="../Magnific-Popup-master/dist/jquery.magnific-popup.js"></script>   

    <script type="text/javascript">
      $(document).ready(function(){
        $('.popup-with-zoom-anim').magnificPopup({
          type: 'inline',

          fixedContentPos: false,
          fixedBgPos: true,

          overflowY: 'auto',

          closeBtnInside: true,
          preloader: false,
          
          midClick: true,
          removalDelay: 300,
          mainClass: 'my-mfp-zoom-in'
        });
      });
    </script>
    
</head>
<body class="">
    <?php include("../modulos/mobile_bar.php"); ?>
    <div id="page">
        
        <?php if($puPru==0){ ?>
            <?php include("../modulos/menu.php"); ?>
        <?php } ?>
        
        <div id="page-title">
            <div class="container">
                <div class="row">
                    <div id="t1" class="col-xs-12"></div>
                    <input id="puId" type="hidden" value="<?=$puId?>"/>
                    <input id="puPru" type="hidden" value="<?=$puPru?>"/>
                    <input id="proRut" type="hidden" value="<?=$proRut?>"/>
                </div>
            </div>
        </div>
        
        <main id="main" class="container">        
            <div class="row">
                <div class="col-lg-9 col-sm-8">  
                    <?php include("../modulos/publicacionArticulo.php"); ?>
                    <?php
                        if($poseeContenido==1){
                            include("../modulos/publicacionGaleria.php"); 
                        }
                    ?>
                    <?php include("../modulos/publicacionReferencia.php"); ?>     
                    <?php if($puPru==0){ ?> <!-- muestra cuando no es prueba-->
                        <?php include("../modulos/publicacionComentarios.php"); ?>    
                        <?php include("../modulos/publicacionFormComentario.php"); ?> 
                    <?php } ?>
                </div>
                <div class="sidebar col-lg-3 col-sm-4">
                    <?php if($puPru==0){ ?> <!-- muestra  cuando no es prueba-->
                        <?php include("../modulos/publicacionElProfesional.php"); ?>
                        <?php include("../modulos/publicacionProfesionalLike.php"); ?>
                        <?php include("../modulos/publicacionProfesionalSeguir.php"); ?>
                        <?php include("../modulos/publicacionDenunciarArticulo.php"); ?>
                    <?php } ?> 
                </div>
            </div>
        </main>
        
        <a id="gatMsg" class="popup-with-zoom-anim" href="#small-dialog" style="display: none;">mensajería</a>
        <main id="small-dialog" class="zoom-anim-dialog mfp-hide" style="width: 650px; display: none;">
            <article class="row entry" style="width: 600px;">
                <div class="entry-content" style="width: 600px;">
                    <h1 class="entry-title"><a>Estimado visitante.</a></h1>
                    <p id="mensaje" style="text-align: justify;">
                    </p>
                    <a class="button read-more" target="_blank" href="../registroUsuario/vista/registroUsuarioView.php">Registro</a>
                </div>
            </article>
        </main>
        
        <?php if($puPru==0){ ?> <!-- muestra cuando no es prueba-->
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
        <?php } ?>
        
</div> <!-- #page -->

<?php include("../modulos/mobileMenu.php"); ?>

<!-- Javascript ================================= -->
<script src='../controller/publicacionProController.js'></script>
<script src='../controller/publicacionComentariosController.js'></script>
<script src='../controller/publicacionLike.js'></script>
<script src='../controller/publicacionSeguir.js'></script>
<script src='../controller/publicacionDenunciarArticulo.js'></script>

    <!-- Datos sesion ================================= -->
    <?php if(isset($_SESSION['sesion'])){ ?>
        email:<input type="text" id="email" value="<?= $_SESSION['email'];?>"><br>
        nombre:<input type="text" id="nombre" value="<?= $_SESSION['nombre'];?>"><br>
        apellido:<input type="text" id="apellido" value="<?= $_SESSION['apellido'];?>"><br>
        alias:<input type="text" id="alias" value="<?= $_SESSION['alias'];?>"><br>
        rol:<input type="text" id="rol" value= "<?= $_SESSION['rol'];?>"><br>
        rut:<input type="text" id="rut" value= "<?= $_SESSION['rut'];?>"><br>
        dv:<input type="text" id="dv" value= "<?= $_SESSION['dv'];?>"><br>
        url:<input type="text" id="url" value= "<?= $_SESSION['url'];?>"><br>
    <?php } ?>
        
    session_id:<input type="text" id="session_id" value= "<?= session_id();?>"><br>
    sesion<input type="text" id="sesion" value= "<?= $_SESSION['sesion'];?>"><br>
    denunciado<input type="text" id="denunciado"><br>
    <!-- Datos sesion ================================= -->
    
    puId:<input type="text" id="puId" value= "<?= $puId;?>"><br>
    puPru:<input type="text" id="puPru" value= "<?= $puPru;?>"><br>
    proRut:<input type="text" id="proRut" value= "<?= $proRut;?>"><br>

</body>
</html>