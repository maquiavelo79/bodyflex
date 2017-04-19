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
        $_SESSION['idPos']='';
        
    }        
    
?>
<!--<h3 style="margin-top: 5px; font-size: medium; height: 30px; color: black; font-weight: bold;"><a>'.$pMa.'</a></h3>-->

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
    
    <title>Bodyflex - Cat&aacute;logo</title>
    <!-- Bootstrap core CSS -->
    <link href="../assets/bootstrap/css/bootstrap.css" rel="stylesheet">

    <script src="http://code.jquery.com/jquery-1.11.0.min.js"></script> 
    
    <!-- styles needed by swiper slider -->
    <link href="../assets/plugins/swiper-master/css/swiper.min.css" rel="stylesheet">

    <!-- Custom styles for this template -->
    <link href="../assets/css/style.css" rel="stylesheet">

    <style>
        #esperaAddCatMod{
            background: url("../images/circular_gris_50x50.gif") no-repeat top center;
        }
        #esperaDatos{
            background: url("../images/circular_rojo_483.gif") no-repeat top center;
        }
        #esperaColeccion{
            background: url("../images/circular_rojo_483.gif") no-repeat top center;
            height: 100px;
        }
        #esperaMarcas{
            background: url("../images/circular_rojo_483.gif") no-repeat top center;
            height: 100px;
        }
        
        #S1_espera{
            background: url("../images/circular_rojo_483.gif") no-repeat top center;
            height: 100px;
            margin-top: 220px;
        }
        #S2_espera{
            background: url("../images/circular_rojo_483.gif") no-repeat top center;
            height: 100px;
            margin-top: 220px;
        }
        #S3_espera{
            background: url("../images/circular_rojo_483.gif") no-repeat top center;
            height: 100px;
            margin-top: 220px;
        }
        #S4_espera{
            background: url("../images/circular_rojo_483.gif") no-repeat top center;
            height: 100px;
            margin-top: 220px;
        }
        #S5_espera{
            background: url("../images/circular_rojo_483.gif") no-repeat top center;
            height: 100px;
            margin-top: 220px;
        }
        #S6_espera{
            background: url("../images/circular_rojo_483.gif") no-repeat top center;
            height: 100px;
            margin-top: 220px;
        }
        #S7_espera{
            background: url("../images/circular_rojo_483.gif") no-repeat top center;
            height: 100px;
            margin-top: 220px;
        }       
        #esperaProductos{
            background: url("../images/circular_rojo_483.gif") no-repeat top center;
            height: 100px;
            width: 100px;
            margin-top: 25px;
            margin-left: 25px;
            
        }
        #modal_dialog{
            border-radius: 20px; 
            margin-top: 200px; 
            border-color: red; 
            border-style: hidden; 
            width: 150px; 
            height: 150px; 
            opacity: 0.9;
        }  
        .box-btn{
            float: left;
            background: transparent;
            font-size: 53px;
            color: #4D4E56;
            font-weight: 300;
            cursor: pointer;
            border-radius: 2px;
            line-height: 0.5;
            border: none;
            outline: none;
        }
        .glyphicon{
          transition: color .3s linear;
        }  
        .box-btn .red{
          color: red;
        }
        
    </style>
    
    <!-- include pace script for automatic web page progress bar  -->
    <script>
        
        paceOptions = {
            elements: true
        };
    
        jQuery(document).ready(function() {
            
            $(document).on("click", ".box-slider-content", function(event){    
                
                var URLdomain   = window.location.host;
                var URLprotocol = window.location.protocol;
        
                var id=$(this).attr('id');
                var tipo=$(this).attr('tipo');

                if (tipo=='PRODUCTO'){
                    if(id>0){
                        var urlPerfil = URLprotocol+"//"+URLdomain+"/bodyflex/catalogo/view/proDetView.php";
                        var form = $('<form action="' + urlPerfil + '" method="post" target="_self">' +
                          '<input type="hidden" id="id" name="id" value="' + id + '" />' +
                          '</form>');
                        $('body').append(form);
                        form.submit();
                    }
                }else{
                 
                    var urlPerfil = URLprotocol+"//"+URLdomain+"/bodyflex/catalogo/view/proColView.php";
                    var form = $('<form action="' + urlPerfil + '" method="post" target="_self">' +
                      '<input type="hidden" id="id" name="id" value="' + id + '" />' +
                      '<input type="hidden" id="idCat1" name="idCat1" value="0" />' +
                      '<input type="hidden" id="idCat2" name="idCat2" value="0" />' +
                      '<input type="hidden" id="idCat3" name="idCat3" value="0" />' +
                      '</form>');
                    $('body').append(form);
                    form.submit();
                 
                }

            });
            
            $("#proImrMod").on( "click", ".thumbLink", function(){
                //Imagen pequeña secundaria
                var imgPri='';
                var imgPeq='';
                var img=$(this).attr('urlImg');

                imgPri+='<a class="product-largeimg-link">';
                    imgPri+='<img src="'+img+'" class="img-responsive product-largeimg" alt="img">';
                imgPri+='</a>';

                //1° Insertamos imagen pequeña en principal
                    $('#proImpMod').html(imgPri);
                    $('#proImpMod').trigger('liszt:updated');

                //2° Armamos de imagen principal una pequeña
                    var imgAdd='';
                    var sGD=$('#txtUrlImgPri').val();
                    imgAdd+='<a urlImg="'+sGD+'" class="thumbLink">';
                    imgAdd+='<img data-large="'+sGD+'" alt="img" class="img-responsive" src="'+sGD+'">';
                    imgAdd+='</a>';

                //3° Agregamos imagen principal al conjunto de pequeñas
                    imgPeq+=$('#txtProImrMod').val();
                    imgPeq+=imgAdd;
                    $('#proImrMod').html(imgPeq);
                    $('#proImrMod').trigger('liszt:updated');

            });
    
            $("#proImpMod").on( "click", ".product-largeimg-link", function() {
                //Imagen grande principal
                var URLdomain   = window.location.host;
                var URLprotocol = window.location.protocol;
                var urlPerfil = URLprotocol+"//"+URLdomain+"/bodyflex/catalogo/view/proDetView.php";
                var id=$('#txtProID').val();

                var form = $('<form action="' + urlPerfil + '" method="post" target="_blank">' +
                  '<input type="hidden" id="id" name="id" value="' + id + '" />' +
                  '</form>');
                $('body').append(form);
                form.submit();

            });
            
            $('#productslider').on("click", ".glyphicon-heart", function(event){
                var origen='VITRINA';
                var rut=$('#rut').val();
                var id=$(this).attr('id').replace('icoPV_','');
                setWishList(rut, id, origen);
            });
            
            $('#productos').on("click", ".glyphicon-heart", function(event){
                var origen='PRODUCTO';
                var rut=$('#rut').val();
                var id=$(this).attr('id').replace('icoPP_','');
                setWishList(rut, id, origen);
            });
            
        });
    
        function setWishList(rut, idPro, origen){
            
            $('#myModal').modal('show'); 
            var URLdomain   = window.location.host;
            var URLprotocol = window.location.protocol;

            //AJAX
            var parametros = { 
                "rut" : rut 
                ,   "idPro" : idPro    
            };    
            
            $.ajax({
                    data:  parametros,
                    url: URLprotocol+"//"+URLdomain+"/bodyflex/catalogo/model/setWishListModel.php",
                    type:  'post',
                    datetype: 'xml',
                    async: true,
                success:  function(xml){

                    //alert('setWishListModel ' + xml);
                    
                    var xmlDoc = $.parseXML(xml), $xml = $(xmlDoc);
                    var codErr = xmlDoc.getElementsByTagName('CODERROR')[0].childNodes[0].nodeValue;
                    var desErr = xmlDoc.getElementsByTagName('DESERROR')[0].childNodes[0].nodeValue;

                    switch(codErr){
                        case "9":

                            var msg='<div style="text-align:center;" class="alert alert-block">';
                            msg+='<b><span style="color: black;">' + '[' + codErr + '] ' + desErr + '</span></b>';
                            msg+='</div>';

                            $('#esperaProductos').hide();
                            $('#modal_dialog').html(msg);
                            break;

                        case "8":

                            var msg='<div style="text-align:center;" class="alert alert-block">';
                            msg+='<b><span style="color: black;">' + '[' + codErr + '] ' + desErr + '</span></b>';
                            msg+='</div>';

                            $('#esperaProductos').hide();
                            $('#modal_dialog').html(msg);
                            break;

                        case "99":

                            var msg='<div style="text-align:center;" class="alert alert-block">';
                            msg+='<b><span style="color: black;">' + '[' + codErr + '] ' + desErr + '</span></b>';
                            msg+='</div>';

                            $('#esperaProductos').hide();
                            $('#modal_dialog').html(msg);
                            break;

                        case "100":

                            var msg='<div style="text-align:center;" class="alert alert-block">';
                            msg+='<b><span style="color: black;">' + '[' + codErr + '] ' + desErr + '</span></b>';
                            msg+='</div>';

                            $('#esperaProductos').hide();
                            $('#modal_dialog').html(msg);
                            break;    

                        case "98":

                            var msg='<div style="text-align:center;" class="alert alert-block">';
                            msg+='<button type="button" class="close" data-dismiss="alert">×</button>';
                            msg+='<b><span style="color: black;">' + '[' + codErr + '] ' + desErr + '</span></b>';
                            msg+='</div>';

                            $('#esperaProductos').hide();
                            $('#modal_dialog').html(msg);
                            break;

                        default:
                            
                            //datos=[1|2]; 1=AGREGO, 2=ELIMINO
                            $('#myModal').modal('hide');
                            var codErr = xmlDoc.getElementsByTagName('CODERROR')[0].childNodes[0].nodeValue;
                            var idIco=''; //ID del icono
                             
                            if(origen=='VITRINA'){ 
                                idIco="#icoPV_"+idPro;
                            }else{
                                idIco="#icoPP_"+idPro;
                            }
                            
                            if(codErr==1){ //AGREGO WISHLIST    
                                $(idIco).css("color", "red");                            
                            }else{//QUITO WISHLIST
                                $(idIco).css("color", "gray");
                            }       
                            
                            $(idIco).trigger('liszt:updated');
                            break;

                    }
                }
            });
        }
    
    </script>
    
    <script src="../controller/sliderCatController.js"></script>
    <script src="../controller/vitrinaController.js"></script>
    <script src="../controller/productosController.js"></script>
    <script src="../controller/coleccionesController.js"></script>
    <script src="../controller/marcasController.js"></script>
    <script src="../assets/js/pace.min.js"></script>   
    
</head>

<body>
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

    <!--/.banner style1-->
    <!--/.banner style1-->
    <div class="banner banner-boxes">
    <div class="slider-content"><span class="prevControl sliderControl"> <i class="fa fa-angle-left fa-3x "></i></span>
        <span class="nextControl sliderControl"> <i class="fa fa-angle-right fa-3x "></i></span>

        <div class="swiper-container swiper-container-h">
            <div id="elementos" class="swiper-wrapper">
                
                <div id="S1" class="swiper-slide slide-2x"><div id="S1_espera"></div></div>
                <div id="S2" class="swiper-slide slide-2x"><div id="S2_espera"></div></div>
                <div id="S3" class="swiper-slide slide-2x"><div id="S3_espera"></div></div>
                <div id="S4" class="swiper-slide slide-2x"><div id="S4_espera"></div></div>
                <div id="S5" class="swiper-slide slide-2x"><div id="S5_espera"></div></div>
                <div id="S6" class="swiper-slide slide-2x"><div id="S6_espera"></div></div>
                <div id="S7" class="swiper-slide slide-2x"><div id="S7_espera"></div></div>
                
            </div>
            <div class="box-pagination swiper-pagination"></div>
        </div>

        <!--/.full-container-->
    </div>
</div>
<!--/.banner style1-->

<?php include("../modulos/vitrina.php"); ?>

<div class="parallax-section parallax-image-1">
    <div class="container">
        <div class="row ">
            <div class="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                <div class="parallax-content clearfix">
                    <h1 class="parallaxPrce"> Aumenta tus ingresos </h1>
                    <h2 style="color: #FFCC00;" class="uppercase">OFRECE PRODUCTOS Y SERVICIOS</h2>
                    <h3 style="color: whitesmoke; font-size: 19px; font-weight: bolder;"> 
                        Los profesionales del deporte en <span>Bodyflex</span> 
                        disponen de variados mecanismos que benefician su economía. 
                    </h3>
                    <div style="clear:both"></div>
                    <a data-target="#modal-size-guide" data-toggle="modal" style="color: #FFCC00;" class="btn btn-discover">
                        <i class="fa fa-lightbulb-o" aria-hidden="true"></i> SABER M&Aacute;S 
                    </a>
                </div>
            </div>
        </div>
        <!--/.row-->
    </div>
    <!--/.container-->
</div>
<!--/.parallax-image-1-->

<div class="container main-container">
    <div class="morePost row featuredPostContainer style2 globalPaddingTop ">
        <h3 id="titProd" class="section-title style2 text-center"><span>PRODUCTOS</span></h3>
        <div class="container">
            <div id="productos" class="row xsResponse"></div>
            <div class="row">
                <div id="ultimo" class="load-more-block text-center">
                    <a id="btnMas" class="btn btn-thin"> 
                        <i class="fa fa-plus-sign">+</i> M&aacute;s productos
                    </a>
                </div>
            </div>
            
            <div class="modal fade" id="myModal" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">
                <div id="modal_dialog" class="modal-dialog">
                    <div id="esperaProductos" class="modal-body"></div>
                </div>
            </div>
            
        </div>
    </div>
    <hr class="no-margin-top">
    <div class="width100 section-block ">
        <div id="colecciones" class="row featureImg">
            <div id="esperaColeccion"></div>
        </div>
    </div>
    <!--/.section-block-->

    <div class="width100 section-block">
        <h3 class="section-title">
            <span>MARCAS</span> 
            <a id="nextBrand" class="link pull-right carousel-nav"> 
                <i class="fa fa-angle-right"></i>
            </a> 
            <a id="prevBrand" class="link pull-right carousel-nav"> 
                <i class="fa fa-angle-left"></i> 
            </a>
        </h3>
        <div class="row">
            <div id="marcas"class="col-lg-12">
                <div id="esperaMarcas"></div>
            </div>
        </div>
    </div>
    
</div>
<!--main-container-->

<div class="parallax-section parallax-image-2">
    <div class="w100 parallax-section-overley">
        <div class="container">
            <div class="row">
                <div class="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                    <div class="parallax-content clearfix">
                        <h1 class="xlarge"> OFRECE PRODUCTOS Y SERVICIOS </h1>
                        <h5 style="color: whitesmoke; font-size: 24px;" class="parallaxSubtitle"> 
                            Te explicamos como mejorar tu economía utilizando las herramientas que <b style="color: #FFCC00;" >Bodyflex</b> pone a disposición de los profesionales del deporte. 
                        </h5>
                        <a style="color: #FFCC00; width: 300px;" class="btn btn-discover">
                            <i class="fa fa-lightbulb-o" aria-hidden="true"></i> SERVICIOS 
                        </a>
                        <a style="color: #FFCC00; width: 300px;" class="btn btn-discover">
                            <i class="fa fa-lightbulb-o" aria-hidden="true"></i> VENTA PRESENCIAL 
                        </a>
                        <a style="color: #FFCC00; width: 300px;" class="btn btn-discover">
                            <i class="fa fa-lightbulb-o" aria-hidden="true"></i> VENTA POR CAT&Aacute;LOGO 
                        </a>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
<!--/.parallax-section-->

<!-- Product Details Modal  -->
<!-- Modal -->       
<div id="divModalVitrina" style="display: none;" data-toggle="modal" data-target="#productSetailsModalAjax">GATILLA MODAL</div>
<div id="divModalProducto" style="display: none;" data-toggle="modal" data-target="#productSetailsModalAjax">GATILLA MODAL</div>
<div style="display: none;" class="modal fade" id="productSetailsModalAjax" tabindex="-1" role="dialog" aria-labelledby="productSetailsModalAjaxLabel" aria-hidden="true">
    <div class="modal-dialog">
        <div class="modal-content">
            <?php include("../modulos/modalProducto.php"); ?>
        </div>
    </div>
</div>
<!-- End Modal -->

<!-- FOOTER -->
    <?php include("../modulos/footer.php"); ?>
<!-- FOOTER -->

<!-- modal detalle del negocio -->
    <?php include("../modulos/proDetDetNeg.php"); ?>

<!-- Le javascript
================================================== -->

<!-- Placed at the end of the document so the pages load faster -->
<script type="text/javascript" src="../assets/js/jquery/jquery-1.10.1.min.js"></script>
<script src="../assets/bootstrap/js/bootstrap.min.js"></script>
<script src="../assets/plugins/swiper-master/js/swiper.jquery.min.js"></script>
<script>
    function crearSwiper(){
        var swiper = new Swiper('.swiper-container', {
            pagination: '.swiper-pagination',
            nextButton: '.nextControl',
            prevButton: '.prevControl',
            keyboardControl: true,
            paginationClickable: true,
            slidesPerView: 'auto',
            autoResize: true,
            resizeReInit: true,
            spaceBetween: 0,
            freeMode: true
        });
    }    

</script>

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

<!-- include carousel slider plugin  -->
<script src="../assets/js/owl.carousel.min.js"></script>

<!-- jQuery select2 // custom select   -->
<script src="http://cdnjs.cloudflare.com/ajax/libs/select2/4.0.0/js/select2.min.js"></script>

<!-- include touchspin.js // touch friendly input spinner component   -->
<script src="../assets/js/bootstrap.touchspin.js"></script>

<!-- include custom script for only homepage  -->
<script src="../assets/js/home.js"></script>

<!-- include custom script for site  -->
<script src="../assets/js/script.js"></script>

<script src='../controller/cerrarSesion.js'></script>

    <!-- sweetalert-master-->
        <script src="../sweetalert-master2/sweetalert2.min.js"></script>
        <link rel="stylesheet" type="text/css" href="../sweetalert-master2/sweetalert2.css">
    <!-- sweetalert-master-->

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
    txtProID: <input type="text" id="txtProID" value= ""><br>
    
    <!-- MODAL PRODUCTO VITRINA-->
        <input type="hidden" id="txtProNomMod" value= ""><br>
        <input type="hidden" id="txtProCodMod" value= ""><br>
        <input type="hidden" id="txtProPreMod" value= ""><br>
        <input type="hidden" id="txtProPraMod" value= ""><br>
        <input type="hidden" id="txtProDetMod" value= ""><br>
        <input type="hidden" id="txtProCanMod" value= ""><br>
        <input type="hidden" id="txtProMedMod" value= ""><br>
        <input type="hidden" id="txtProColMod" value= ""><br>    
        <input type="hidden" id="txtUrlImgPri" value= ""><!-- URL IMAGEN PRINCIPAL -->
        <input type="hidden" id="txtProImpMod" value= ""><!-- IMAGEN PRINCIPAL -->
        <input type="hidden" id="txtProImrMod" value= ""><!-- RESTO DE IMAGENES -->
    <!-- MODAL PRODUCTO -->

    txtMsg: <input type="text" id="txtMsg" value= ""><br> <!-- MENSAJERIA -->
    item: <input type="text" id="item" value=""><br> <!-- item -->
    producto: <input type="text" id="producto" value=""><br> <!-- producto -->
    load: <input type="text" id="load" value=""><br> <!-- load -->
    mensaje: <input type="text" id="mensaje" value=""><br> <!-- mensaje -->
    
</body>
</html>
