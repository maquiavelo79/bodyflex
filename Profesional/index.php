<?php
    
include("./model/conection.php");
include("./model/profesionalPoseePublicacion.php");
include("./model/profesionalPoseeProductos.php");
include("./model/profesionalPoseeVenta.php");

$poseePub = 0;
$poseePro = 0;

    session_start();
    $nivel=2;
   
    //$prueba=0;
    $rutPro = $_REQUEST['rutPro'];
    $prueba = $_REQUEST['prueba'];
   
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
    
    $poseePub = profesionalPoseePublicaciones($rutPro);
    $poseePro = profesionalPoseeProductos($rutPro);
    $poseeVta = profesionalPoseeVenta($rutPro, $_SESSION['sesion_id']);
    
?>

<!DOCTYPE html>
<html lang="en">
<head>
    
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta name="description" content="">
    <meta name="author" content="webthemez">
    
    <title>Bodyflex - Profesional</title>
    
    <!-- core CSS -->
    <link href="css/bootstrap.min.css" rel="stylesheet">
    <link href="css/font-awesome.min.css" rel="stylesheet">
    <link href="css/animate.min.css" rel="stylesheet">
    <link href="css/owl.carousel.css" rel="stylesheet">
    <link href="css/owl.transitions.css" rel="stylesheet">
    <link href="css/prettyPhoto.css" rel="stylesheet">
    <link href="css/styles.css" rel="stylesheet"> 
        
    <!--    sweetalert-master-->
    <script src="sweetalert-master/dist/sweetalert.min.js"></script>
    <link rel="stylesheet" type="text/css" href="sweetalert-master/dist/sweetalert.css">
    <script src="http://code.jquery.com/jquery-1.11.0.min.js"></script>


    
    <script>
        $( document ).ready(function(){
            document.querySelector('button#modalSeguir').onclick = function(){
                var msg1='<p style="color: #1b2426;">Estimado visitante, sólo miembros de la comunidad pueden <b><big>seguir</big></b> a un profesional.<br>';
                msg1+='<a class="button read-more" target="_blank" href="../registroUsuario/vista/registroUsuarioView.php"><b style="color:black;"><big><u>Registrate</u></big></b></a> y se parte de nuestra comunidad deportiva!</p>';
                swal({   
                    title: 'Registrate',   
                    text: msg1,   
                    type: "warning", 
                    confirmButtonColor: "#DD6B55",
                    html: true,
                    allowOutsideClick: true

                });
            };
            
            document.querySelector('button#modalLike').onclick = function(){
                var msg2='<p style="color: #1b2426;">Estimado visitante, sólo miembros de la comunidad pueden <b><big>votar</big></b> a un profesional.<br>';
                msg2+='<a class="button read-more" target="_blank" href="../registroUsuario/vista/registroUsuarioView.php"><b style="color:black;"><big><u>Registrate</u></big></b></a> y se parte de nuestra comunidad deportiva!</p>';
                swal({   
                    title: 'Registrate',    
                    text: msg2,   
                    type: "warning",   
                    confirmButtonColor: "#DD6B55",
                    html: true,
                    allowOutsideClick: true

                });
            };           
            
            var URLdomain   = window.location.host;
            var URLprotocol = window.location.protocol;
            
            var sesionId=$('#session_id').val();
            var parametros = { "se" : sesionId };  
            
            //Obtiene Cantidad de Productos Carro Compras
            $.ajax({
                data:  parametros,
                url: URLprotocol+"//"+URLdomain+"/bodyflex/profesional/model/productoProGetCantProCantModel.php",
                type:  'post',
                async:  false,
                datetype: 'xml',
                success:  function (xml){

                    //alert('productoProGetCantProCantModel ' + xml);

                    var xmlDoc = $.parseXML(xml), $xml = $(xmlDoc);
                    var codErr = xmlDoc.getElementsByTagName('CODERROR')[0].childNodes[0].nodeValue;
                    var desErr = xmlDoc.getElementsByTagName('DESERROR')[0].childNodes[0].nodeValue;

                    switch(codErr){
                        case '9':

                            var msg='<div style="text-align:center;" class="alert alert-block">';
                            msg+='<b><span style="color: #000;">' + '[' + codErr + '] ' + desErr + '</span></b>';
                            msg+='</div>';

                            $('#warning-btn-Carro').show();
                            $('#warning-Carro').html(msg);    
                            $('#warning-Carro').show();
                            break;   

                        case '8':

                            var msg='<div style="text-align:center;" class="alert alert-block">';
                            msg+='<b><span style="color: #000;">' + '[' + codErr + '] ' + desErr + '</span></b>';
                            msg+='</div>';

                            $('#warning-btn-Carro').show();
                            $('#warning-Carro').html(msg);
                            $('#warning-Carro').show();
                            break;

                        case '99':

                            var msg='<div style="text-align:center;" class="alert alert-block">';
                            msg+='<b><span style="color: #000;">' + '[' + codErr + '] ' + desErr + '</span></b>';
                            msg+='</div>';

                            $('#warning-btn-Carro').show();
                            $('#warning-Carro').html(msg);
                            $('#warning-Carro').show();
                            break;
                    
                        default:
                            
                            var nP = xmlDoc.getElementsByTagName('DATOS')[0].childNodes[0].nodeValue;

                            //alert('nP '+nP);

                                var numPro='<a id="anclaCarrito">';
                                    numPro+='<div id="pCarroCompra">Carro de compras</div>';
                                    numPro+='<div id="itemsCarrito">';
                                    if(nP==0){
                                        numPro+='<div id="dSim">vac&iacute;o &nbsp;<i class="fa fa-shopping-cart fa-lg"></i></div>';
                                    }else{
                                        numPro+='<div id="dSim">'+nP+' &nbsp; Productos &nbsp;<i class="fa fa-shopping-cart fa-lg"></i></div>';
                                    }  
                                    numPro+='</div>';
                                numPro+='</a>';
                            
                            $('#mnuCarrito').html(numPro);
                            $('#mnuCarrito').show();
                            break;
    
                    }
                }
            });     

        }); 

        
    function goCarro(){
        
        var URLdomain   = window.location.host;
        var URLprotocol = window.location.protocol;
        var rut=$('#rutPro').val();

        var url = URLprotocol+"//"+URLdomain+"/bodyflex/profesional/view/carroCompras.php";
        var form = $('<form action="' + url + '" method="post"><input type="text" id="rutPro" name="rutPro" value="' + rut + '" /></form>');
        $('body').append(form);
        form.submit();

    }    
           
    </script>
    
        
        
    <style>
        body { padding-top: 50px; }
        /*#####################
        Additional Styles (required)
        ######################*/
        #myCarousel .thumbnail {
            margin-bottom: 0;
        }
        .carousel-control.left, .carousel-control.right {
            background-image:none !important;
        }
        .carousel-control {

            top:40%;
            color: black;
            bottom:auto;
            padding-top:4px;
            width:30px;
            height:30px;
            text-shadow:none;
            opacity:1;
                
        }
        .carousel-control:hover {
            color: #FFCC00;
        }
        .carousel-control.left, .carousel-control.right {
            background-image:none !important;
        }
        .carousel-control.right {
                left:auto;
                right:-32px;
        }
        .carousel-control.left {
                right:auto;
                left:-32px;
        }
        .carousel-indicators {
            bottom:-30px;
        }
        .carousel-indicators li {
            border-radius:0;
            width:10px;
            height:10px;
            background:#FFCC00;
            border:1px solid #ccc;
        }
        .carousel-indicators .active {
                width:12px;
                height:12px;
                background:black;
                border-color:#3276b1;
        }
    </style>
            
    <link rel="shortcut icon" href="images/ico/favicon.ico"> 
    
</head> 

<body id="home">
    
    <?php include("../Profesional/modulos/header.php"); ?>
    <?php include("../Profesional/modulos/slider.php"); ?>
    <?php include("../Profesional/modulos/profesionalSeguir.php"); ?>
    <?php include("../Profesional/modulos/presentacion.php"); ?>    
    <?php include("../Profesional/modulos/servicios.php"); ?>
    <?php include("../Profesional/modulos/curriculum.php"); ?>
    <?php include("../Profesional/modulos/portafolio.php"); ?>
    <?php include("../Profesional/modulos/profesionalLike.php"); ?>
    <?php 
        if($poseePub==1){
            include("../Profesional/modulos/publicaciones.php");
        }
    ?>
    <?php include("../Profesional/modulos/profesionalDenunciar.php"); ?>
    <?php 
        if($poseePro==1){
            include("../Profesional/modulos/productos.php");
        }
     ?>
    <?php include("../Profesional/modulos/contactenos.php"); ?>       
    <?php include("../Profesional/modulos/contacto.php"); ?>  
    <?php include("../Profesional/modulos/footer.php"); ?>  
        
    <!-- Modal -->
    <button id="modalSeguir" style="display: none;">modalSeguir</button>
    <button id="modalLike" style="display: none;">modalLike</button>

    <!-- Datos sesion, solo si esta definida variable sesion ================================= -->
    <?php if(isset($_SESSION['sesion'])){ ?>
        <input type="hidden" id="email" value="<?= $_SESSION['email']; ?>">
        <input type="hidden" id="nombre" value="<?= $_SESSION['nombre']; ?>">
        <input type="hidden" id="apellido" value="<?= $_SESSION['apellido']; ?>">
        <input type="hidden" id="alias" value="<?= $_SESSION['alias']; ?>">
        <input type="hidden" id="rol" value= "<?= $_SESSION['rol']; ?>">
        <input type="hidden" id="rut" value= "<?= $_SESSION['rut']; ?>">
        <input type="hidden" id="dv" value= "<?= $_SESSION['dv']; ?>">
        <input type="hidden" id="url" value= "<?= $_SESSION['url']; ?>">
        <input type="hidden" id="rutPro" value= "<?= $rutPro; ?>">
    <?php } ?>
        
        <input type="hidden" id="sesion" value= "<?= $_SESSION['sesion']; ?>">
        <input type="hidden" id="session_id" value= "<?= $_SESSION['sesion_id']; ?>">
        <input type="hidden" id="prueba" value="<?=$prueba;?>">
    <!-- Datos sesion================================= -->    

    
    <!-- DATOS PROFESIONAL -->
    <input type="hidden" id="rutPro" value="<?= $rutPro; ?>">
    <input type="hidden" id="emlPro" value=""> <!-- SE OBTIENE EN SECCIÓN PRESENTACIÓN -->
    <!-- DATOS PROFESIONAL -->
    
    <script src="controller/profesionalSeguir.js"></script>
    <script src="controller/profesionalDenunciar.js"></script>
    <script src="controller/profesionalLike.js"></script>
    
    <!--Scritp Templates-->
    <script src="js/jquery.js"></script>
    <script src="js/bootstrap.min.js"></script>
    <script src="js/owl.carousel.min.js"></script>
    <script src="js/mousescroll.js"></script>
    <script src="js/smoothscroll.js"></script>
    <script src="js/jquery.prettyPhoto.js"></script>
    <script src="js/jquery.isotope.min.js"></script>
    <script src="js/jquery.inview.min.js"></script>
    <script src="js/wow.min.js"></script>
    <script src="js/custom-scripts.js"></script>
    <script src="http://maps.google.com/maps/api/js?sensor=true"></script>
    <script src="//ajax.googleapis.com/ajax/libs/jquery/1.11.1/jquery.min.js"></script>

<!--    <script>
        $( document ).ready(function(){                
            $(function () {
                $('[data-toggle="tooltip"]').tooltip();
            });
        });    
    </script>-->
    
    
</body>
</html>