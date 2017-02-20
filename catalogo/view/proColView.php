<?php
session_start();     

//Navegación - para determinar navegación 
    $nav=1; //slider
//Nivel -- para determinar ruta de archivos incluidos
    $nivel=2; 
    
//    unset($idColeccion);
//    unset($idCat1);
//    unset($idCat2);
//    unset($idCat3);
    
    $idColeccion=$_REQUEST['id'];
    $idCat1=$_REQUEST['idCat1'];
    $idCat2=$_REQUEST['idCat2'];
    $idCat3=$_REQUEST['idCat3'];
    
    if($_SESSION['sesion']!=1){
        header("Location: ../../index.php");
    }
    
//    echo 'idColeccion ' . isset($idColeccion);
//    exit();
    
    
    if(!isset($idColeccion)){
        header("Location: ../view/index.php");
    }
    if(!isset($idCat2)){
        header("Location: ../view/index.php");
    }
    if(!isset($idCat3)){
        header("Location: ../view/index.php");
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
        
    <title>Bodyflex - Colección</title>
    <!-- Bootstrap core CSS -->
    <link href="../assets/bootstrap/css/bootstrap.css" rel="stylesheet">

    <!-- Custom styles for this template -->
    <link href="../assets/css/style.css" rel="stylesheet">
    <style>
        #espera_dcto{
            background: url("../images/circular_gris_50x50.gif") no-repeat top center;
            height: 50px;
        }
        #espera_colores{
            background: url("../images/circular_gris_50x50.gif") no-repeat top center;
            height: 50px;
        }
        #espera_marcas{
            background: url("../images/circular_gris_50x50.gif") no-repeat top center;
            height: 50px;
        }
        #espera_rango{
            background: url("../images/circular_gris_50x50.gif") no-repeat top center;
            height: 50px;
        }
        #espera_categoria{
            background: url("../images/circular_gris_50x50.gif") no-repeat top center;
            height: 50px;
        }
        #espera_navegacion{
            background: url("../images/circular_gris_32x32.gif") no-repeat top center;
            height: 32px;
        }
        #espera_banner{
            background: url("../images/circular_gris_100x100.gif") no-repeat top center;
            height: 100px;
        }
        #espera_subCat{
            background: url("../images/circular_gris_50x50.gif") no-repeat top center;
            height: 50px;
        }
        #espera_filtro{
            background: url("../images/circular_gris_50x50.gif") no-repeat top center;
            height: 50px;
        }
        #espera_productos{
            background: url("../images/circular_gris_100x100.gif") no-repeat top center;
            height: 100px;
        }
        .loadModal{
            margin-top: 220px;
            background: url("../images/circular_rojo_483.gif") no-repeat top center;
            height: 100px;
        }
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
        #modal_dialog{
            border-radius: 20px; 
            margin-top: 200px; 
            border-color: red; 
            border-style: hidden; 
            width: 150px; 
            height: 150px; 
            opacity: 0.9;
        }    
        #consultaProductos{
            background: url("../images/circular_rojo_483.gif") no-repeat top center;
            height: 100px;
            width: 100px;
            margin-top: 25px;
            margin-left: 25px;
            
        }
    </style>
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
<!-- /.Fixed navbar  -->

<div class="container main-container headerOffset">

    <!-- Main component call to action -->
    <?php include("../modulos/navegacion.php"); ?>
    <!-- /.row  -->

    <div class="row">

        <!--left column-->
        <div class="col-lg-3 col-md-3 col-sm-12">
            <div class="panel-group" id="accordionNo">
                
                <!--Category-->
                <?php include("../modulos/proColCat.php"); ?>
                <!--/Category menu end-->
                
                <!--Rango de Precios-->
                <?php include("../modulos/proRanPre.php"); ?>
                <!--/Rango de Precios-->

                <!--Marcas-->    
                <?php include("../modulos/proMar.php"); ?>
                <!--/Marcas-->

                <!--Colores-->    
                <?php include("../modulos/proColores.php"); ?>
                <!--/Colores-->
                
                <!--Productos con y sin descuento-->    
                <?php include("../modulos/proDescuento.php"); ?>
                <!--Productos con y sin descuento-->   
                
            </div>
        </div>

        <!--right column-->
        <div class="col-lg-9 col-md-9 col-sm-12">
            
            <!--bannerColeccion-->    
            <?php include("../modulos/proBannerCol.php"); ?>
            <!--bannerColeccion-->   
            
            <!--subCategorias-->    
            <?php include("../modulos/proSubCat.php"); ?>
            <!--subCategorias-->   

            <!--filtro productos-->    
            <?php include("../modulos/proFiltros.php"); ?>
            <!--filtro productos-->   
            
            <!--productos coleccion-->    
            <?php include("../modulos/proColeccion.php"); ?>
            <!--productos coleccion-->   

        </div>
        <!--/right column end-->
    </div>
    <!-- /.row  -->
</div>
<!-- /main container -->

<div class="gap"></div>
<!-- Product Details Modal  -->

<!-- Modal -->       
<div id="divModalColeccion" style="display: none;" data-toggle="modal" data-target="#productSetailsModalAjax">GATILLA MODAL</div>
<div style="display: none;" class="modal fade" id="productSetailsModalAjax" tabindex="-1" role="dialog" aria-labelledby="productSetailsModalAjaxLabel" aria-hidden="true">
    <div class="modal-dialog">
        <div class="modal-content">
            <?php include("../modulos/modalProducto.php"); ?>
        </div>
    </div>
</div>
<div class="modal fade" id="myModal" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">
    <div id="modal_dialog" class="modal-dialog">
        <div id="consultaProductos" class="modal-body"></div>
    </div>
</div>
<!-- End Modal -->
<!-- Scroll  -->      
<div style="display: none;" id="scroll">
    <a class="scroll-to-top">
        <span class="glyphicon glyphicon-arrow-up"></span>
        <span class="sr-only">Ir arriba</span>
    </a>
</div>    
<!-- Scroll -->       

<!-- FOOTER -->
    <?php include("../modulos/footer.php"); ?>
<!-- FOOTER -->

<!-- Le javascript
================================================== -->

<!-- Placed at the end of the document so the pages load faster -->
<script src="https://ajax.googleapis.com/ajax/libs/jquery/1.10.1/jquery.min.js"></script>
<script src="../assets/bootstrap/js/bootstrap.min.js"></script>
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

<!-- include custom script for site  -->
<script src="../assets/js/script.js"></script>
<script src='../controller/cerrarSesion.js'></script>
<script src='../controller/proColCatController.js'></script>
<script src='../controller/proColNavController.js'></script>
<script src='../controller/proBannerController.js'></script>
<script src='../controller/proSubCatController.js'></script>
<script src='../controller/proRanPreController.js'></script>
<script src='../controller/proMarcasController.js'></script>
<script src='../controller/proColoresController.js'></script>
<script src='../controller/proDctoController.js'></script>
<script src='../controller/proCsuProductos.js'></script>

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
    <input type="hidden" id="session_id" value= "<?= $_SESSION['sesion_id'];?>">
    
    <input type="hidden" id="idColeccion" value= "<?=$idColeccion;?>">
    <input type="hidden" id="idCat1" value= "<?=$idCat1;?>">
    <input type="hidden" id="idCat2" value= "<?=$idCat2;?>">
    <input type="hidden" id="idCat3" value= "<?=$idCat3;?>">
    
    <input type="hidden" id="rangos" value= "">
    <input type="hidden" id="marcas" value= "">
    <input type="hidden" id="colores" value= "">
    <input type="hidden" id="etiquetas" value= "">
    <input type="hidden" id="pa" value="1">
    <input type="text" id="ultimo" value="0">
    
    <!-- MODAL PRODUCTO -->
    <input type="hidden" id="txtProID" value= "">
    <input type="hidden" id="txtProNomMod" value= "">
    <input type="hidden" id="txtProCodMod" value= "">
    <input type="hidden" id="txtProPreMod" value= "">
    <input type="hidden" id="txtProPraMod" value= "">
    <input type="hidden" id="txtProDetMod" value= "">
    <input type="hidden" id="txtProCanMod" value= "">
    <input type="hidden" id="txtProMedMod" value= "">
    <input type="hidden" id="txtProColMod" value= "">
        
    <!-- MODAL PRODUCTO -->
    <input type="hidden" id="txtUrlImgPri" value= ""><!-- URL IMAGEN PRINCIPAL -->
    <input type="hidden" id="txtProImpMod" value= ""><!-- IMAGEN PRINCIPAL -->
    <input type="hidden" id="txtProImrMod" value= ""><!-- RESTO DE IMAGENES -->
    <!-- MODAL PRODUCTO -->
        
    <input type="hidden" id="txtMsg" value= ""><!-- MENSAJERIA -->
    <input type="hidden" id="item" value=""><!-- item -->
    <input type="hidden" id="producto" value=""><!-- producto -->
    <input type="hidden" id="load" value=""><!-- load -->
    <input type="hidden" id="mensaje" value=""><!-- mensaje -->
    
</body>
</html>
