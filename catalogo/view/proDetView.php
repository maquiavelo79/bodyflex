<?php
include("../model/fotosCatalogoCsuModel.php");
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
        $_SESSION['idPos']='';
        
    }        
    
    $idPro=$_REQUEST['id'];
    
    $codErr='';
    $imgGD1=''; //Imagen catalogo principal
    $imgGD2=''; //Imagen detalle de producto
    
    $strXML=obtenerImagenes();
    $img = new SimpleXMLElement($strXML);
    $codErr=$img->ERROR->CODERROR;   
    if($codErr==0){
        $imgGD1=$img->FOTO1;
        $imgGD2=$img->FOTO2;
    }else{
        $imgGD1='../../images/bg14.jpg';
        $imgGD2='../images/product_details/bg9.jpg';
    }
    
?>

<!DOCTYPE html>
<html lang="en">
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">

        <!-- Fav and touch icons -->
        <link rel="apple-touch-icon-precomposed" sizes="144x144" href="../assets/ico/apple-touch-icon-144.png">
        <link rel="apple-touch-icon-precomposed" sizes="114x114" href="../assets/ico/apple-touch-icon-114.png">
        <link rel="apple-touch-icon-precomposed" sizes="72x72" href="../assets/ico/apple-touch-icon-72.png">
        <link rel="apple-touch-icon-precomposed" href="../assets/ico/apple-touch-icon-57.png">
        <link rel="shortcut icon" href="../assets/ico/favicon.ico">

        <title>Bodyflex - Detalle Producto</title>
        <!-- Bootstrap core CSS -->
        <link href="../assets/bootstrap/css/bootstrap.css" rel="stylesheet">

        <!-- Custom styles for this template -->
        <link href="../assets/css/style.css" rel="stylesheet">
        <link href="../assets/css/home-v7.css" rel="stylesheet">
        <link href="../assets/css/cart-nav.css" rel="stylesheet">
        <link href="../assets/css/product-details-5.css" rel="stylesheet">

        <!-- gall-item Gallery for gallery page -->
        <link href="../assets/plugins/magnific/magnific-popup.css" rel="stylesheet">

        <!-- bxSlider CSS file -->
        <link href="../assets/plugins/bxslider/jquery.bxslider.css" rel="stylesheet"/>

        <style>
            #esperaAddCat{
                background: url("../images/circular_gris_50x50.gif") no-repeat top center;
                height: 50px;
            }
            #esperaEnvCom{
                background: url("../images/circular_gris_50x50.gif") no-repeat top center;
                height: 50px;
            }
            #esperaListaCom{
                background: url("../images/circular_gris_50x50.gif") no-repeat top center;
                height: 50px;
            }
            #espera_img{
                background: url("../images/circular_gris_100x100.gif") no-repeat top center;
                height: 100px;
                margin-top: 180px;
            }
        </style>

        <!-- include pace script for automatic web page progress bar  -->

        <script>
            paceOptions = {
                elements: true
            };
        </script>

        <script src="../assets/js/pace.min.js"></script>

    </head> 

<body>


<!-- Fixed navbar start -->
<div class="navbar navbar-tshop navbar-fixed-top megamenu" role="navigation">
    <?php include("../modulos/header.php"); ?>
    <div class="container">
        <div class="navbar-header">
            <a class="navbar-brand " href="index.php"> 
                <img src="../images/logo.png" alt="TSHOP"> 
            </a>
        </div>
        <?php include("../modulos/menu.php"); ?>
    </div>
</div>
<section class="section-product-info">
    <div class="container-1400 container   main-container product-details-container ">
        <div class="row">
            <?php include("../modulos/proDetImg.php"); ?>
            <?php include("../modulos/proDetEspPro.php"); ?>
        </div>
        <div style="clear:both"></div>
    </div>
</section>

<section class="section-product-info-bottom">
    <div class="product-details-bottom-bar">
        <div class="container-1400 container">
            <div class="row">
                <div class="col-lg-8">
                    <ul class="list-unstyled list-inline social-inline">
                        <li class="hasShareCount"><span>Share <span class="count">120</span></span>
                        </li>
                        <li><a><i class="fa fa-facebook-f"></i></a></li>
                        <li><a><i class="fa fa-twitter"></i> </a></li>
                        <li><a><i class="fa fa-google-plus"></i> </a></li>
                        <li><a><i class="fa fa-instagram"></i> </a></li>
                    </ul>
                </div>
                <div class="col-lg-4">
                    <div class="review-title-bar">
                        <a class="scrollto pull-right" href="#product-review">
                            <i class="fa fa-comment-o"></i> 12 Review
                        </a>
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>

<?php include("../modulos/proDetMsg.php"); ?>
<?php include("../modulos/proDetSec1.php"); ?>
<?php include("../modulos/proDetLisCom.php"); ?>
<?php include("../modulos/proDetProRel.php"); ?>

<footer class="main-footer">
    <?php include("../modulos/proDetFooter.php"); ?>
</footer>

<!-- modal detalle del negocio -->
    <?php include("../modulos/proDetDetNeg.php"); ?>
<!-- Modal comentario-->
    <?php include("../modulos/proDetCom.php"); ?>


<script src="https://ajax.googleapis.com/ajax/libs/jquery/1.10.1/jquery.min.js"></script>
<script src="../assets/bootstrap/js/bootstrap.min.js"></script>
<!-- include jqueryCycle plugin -->
<script src="../assets/js/jquery.cycle2.min.js"></script>
<!-- include easing plugin -->
<script src="../assets/js/jquery.easing.1.3.js"></script>
<!-- include  parallax plugin -->
<script type="text/javascript" src="../assets/js/jquery.parallax-1.1.js"></script>
<!-- optionally include helper plugins -->
<script type="text/javascript" src="../assets/js/helper-plugins/jquery.mousewheel.min.js"></script>
<!-- include mCustomScrollbar plugin //Custom Scrollbar  -->
<script type="text/javascript" src="../assets/js/jquery.mCustomScrollbar.js"></script>
<!-- include icheck plugin // customized checkboxes and radio buttons   -->
<script type="text/javascript" src="../assets/plugins/icheck-1.x/icheck.min.js"></script>
<!-- include grid.js // for equal Div height  -->
<script src="../assets/js/grids.js"></script>
<!-- jQuery select2 // custom select   -->
<script src="http://cdnjs.cloudflare.com/ajax/libs/select2/4.0.0/js/select2.min.js"></script>
<!-- include touchspin.js // touch friendly input spinner component   -->
<script src="../assets/js/bootstrap.touchspin.js"></script>
<!-- include carousel slider plugin  -->
<script src="../assets/js/owl.carousel.min.js"></script>

<!-- Llamada a Servicios SP -->
<script src='../controller/proDetController.js'></script>
<script src='../controller/proDetLisComController.js'></script>
<script src='../controller/proDetProRelController.js'></script>
<script src="../assets/plugins/magnific/jquery.magnific-popup.min.js"></script>
<script>
    $(document).ready(function () {

        $('#bx-pager .popup-youtube, #bx-pager .popup-vimeo, #bx-pager .popup-gmaps').click(function (ev) {
            // stop click event in bxslider
            ev.preventDefault();
            ev.stopPropagation();
        });

        $('.popup-youtube, .popup-vimeo, .popup-gmaps').magnificPopup({
          //  disableOn: 700,
            type: 'iframe',
            mainClass: 'mfp-fade',
            removalDelay: 160,
            preloader: false,
            fixedContentPos: false
        });
    });


</script>

<script src='../assets/js/jquery.zoom.js'></script>
<script>
    $(document).ready(function () {

        // Product ZOOM

        $('.zoomContent').zoom();


        $('.gall-item').magnificPopup({
            type: 'image',
            gallery: {
                enabled: true
            }
        });


        // Fake Click Event to show popup

        $(".zoomContent").click(function () {
            $(this).find('.gall-item').trigger('click');
        });


    });


</script>


<!-- bxSlider Javascript file -->
<script src="../assets/plugins/bxslider/plugins/jquery.fitvids.js"></script>
<script src="../assets/plugins/bxslider/jquery.bxslider.min.js"></script>

<script>

    function contenidoImagen(){
            
            var $$mainImgSliderPager = $('#bx-pager');

            // Slider
            var $mainImgSlider = $('.bxslider').bxSlider({
                pagerCustom: '#bx-pager',
                video: true,
                useCSS: false,
                mode: 'vertical',
                touchEnabled: false,
                controls: false
            });

            // initiates responsive slide
            var settings = function () {
                var mobileSettings = {
                    slideWidth: 60,
                    minSlides: 2,
                    maxSlides: 4,
                    slideMargin: 10,
                    controls: false

                };
                var pcSettings = {
                    mode: 'vertical',
                    minSlides: 4,
                    pager: false,
                    slideMargin: 10,
                    nextSelector: '.product-view-thumb-nav.next',
                    prevSelector: '.product-view-thumb-nav.prev',
                    nextText: ' <i class="fa fa-angle-down"></i>',
                    prevText: ' <i class="fa fa-angle-up"></i>'
                };
                return ($(window).width() < 768) ? mobileSettings : pcSettings;
            }

            var thumbSlider;

            function tourLandingScript() {
                thumbSlider.reloadSlider(settings());
            }

            thumbSlider = $('.has-carousel-v .product-view-thumb').bxSlider(settings());
            $(window).resize(tourLandingScript);

        }    

</script>

<script src="../assets/plugins/rating/bootstrap-rating.min.js"></script>
<script>
    $(function () {
        // for popup rating section
        $('.rating-tooltip-manual').rating({
            extendSymbol: function () {
                var title;
                $(this).tooltip({
                    container: 'body',
                    placement: 'bottom',
                    trigger: 'manual',
                    title: function () {
                        return title;
                    }
                });
                $(this).on('rating.rateenter', function (e, rate) {
                    title = rate;
                    $(this).tooltip('show');
                })
                        .on('rating.rateleave', function () {
                            $(this).tooltip('hide');
                        });
            }
        });

    });
</script>


<script type="text/javascript" src="../assets/js/skrollr.min.js"></script>
<script type="text/javascript">
    var isMobile = function () {
        //console.log("Navigator: " + navigator.userAgent);
        return /(iphone|ipod|ipad|android|blackberry|windows ce|palm|symbian)/i.test(navigator.userAgent);
    };

    if (isMobile()) {
        // For  mobile , ipad, tab

    } else {

        if ($(window).width() < 768) {
        } else {
            var s = skrollr.init({forceHeight: false});
        }

    }


</script>


<!-- include custom script for site  -->
<script src="../assets/js/script.js"></script>

<!-- Reveal Animations When You Scroll  -->
<script src="../assets/js/wow.min.js"></script>
<script>
    new WOW().init();
</script>
    
    <script src='../controller/cerrarSesion.js'></script>
    
    <!-- Datos sesion, solo si esta definida variable sesion ================================= -->
    <?php if(isset($_SESSION['sesion'])){ ?>
        email<input type="text" id="email" value="<?= $_SESSION['email'];?>"><br>
        nombre<input type="text" id="nombre" value="<?= $_SESSION['nombre'];?>"><br>
        apellido<input type="text" id="apellido" value="<?= $_SESSION['apellido'];?>"><br>
        alias<input type="text" id="alias" value="<?= $_SESSION['alias'];?>"><br>
        rol<input type="text" id="rol" value= "<?= $_SESSION['rol'];?>"><br>
        rut<input type="text" id="rut" value= "<?= $_SESSION['rut'];?>"><br>
        dv<input type="text" id="dv" value= "<?= $_SESSION['dv'];?>"><br>
        url<input type="text" id="url" value= "<?= $_SESSION['url'];?>"><br>
    <?php } ?>
    sesion<input type="text" id="sesion" value= "<?= $_SESSION['sesion'];?>"><br>
    session_id<input type="text" id="session_id" value= "<?= $_SESSION['sesion_id'];?>"><br>
    idPro<input type="text" id="idPro" value= "<?=$idPro;?>"><br>
    proCat<input type="text" id="proCat" value=""><br>


</body>
</html>

