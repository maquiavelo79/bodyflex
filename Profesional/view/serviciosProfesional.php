

<?php

    session_start();
    $nivel=2;
   
    //DATOS REQUERIDOS PARA EL FUNCIONAMIENTO DE ESTA PAGINA
    $id=$_REQUEST['id'];
    $rutPro=$_REQUEST['rut'];
    
    //$poseeContenido=publicacionPoseeContenido($puId);
    
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
    <title>Bodyflex - Servicio</title>
    <meta name="description" content="">
    <meta name="author" content="">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">

    <!-- CSS============================== -->
    <link href='http://fonts.googleapis.com/css?family=Roboto+Condensed:700,400,300' rel='stylesheet' type='text/css'>
    <link rel='stylesheet' href='../../css/bootstrap.css'>
    <link rel='stylesheet' href='../../css/flexslider.css'>
    <link rel='stylesheet' href='../../js/fancybox/jquery.fancybox.css'>
    <link rel='stylesheet' href='../../style.css'>
    <link rel='stylesheet' href='../../css/mediaqueries.css'>
    <link rel='stylesheet' href='../../colors/default.css'>

    <!-- Favicons
    ================================================== -->
    <link rel="apple-touch-icon-precomposed" sizes="144x144" href="../../imagenes/apple-touch-icon-144.png">
    <link rel="apple-touch-icon-precomposed" sizes="114x114" href="../../imagenes/apple-touch-icon-114.png">
    <link rel="apple-touch-icon-precomposed" sizes="72x72" href="../../imagenes/apple-touch-icon-72.png">
    <link rel="apple-touch-icon-precomposed" href="../../imagenes/apple-touch-icon-57.png">
    <link rel="shortcut icon" href="../../imagenes/favicon.ico">   
    
<!--    <link rel="stylesheet" href="../../Magnific-Popup-master/dist/magnific-popup.css">-->
    <link rel="stylesheet" href="../../css/mensaje.css">
    <script src="http://code.jquery.com/jquery-1.11.0.min.js"></script>   
    <script src='../../js/jquery-1.10.1.min.js'></script>
<!--    <script src="../../Magnific-Popup-master/dist/jquery.magnific-popup.js"></script>   -->
        
    <script src="http://code.jquery.com/jquery-1.11.0.min.js"></script> 
    <script type="text/javascript">
        $(document).ready(function () {

            var URLdomain   = window.location.host;
            var URLprotocol = window.location.protocol;

            var rutPro=$('#rutPro').val();
            var id=$('#id').val();
            var parametros = { 
                                "rutPro" : rutPro 
                                ,   "id" : id
                              };        
            $.ajax({
                data:  parametros,
                url: URLprotocol+"//"+URLdomain+"/bodyflex/profesional/model/perfilProfesionalGetDetServiciosModel.php",
                type:  'post',
                async:  false,
                datetype: 'xml',
                success:  function (xml){

                    //alert('perfilProfesionalGetDetServiciosModel ' + xml);

                    var xmlDoc = $.parseXML(xml), $xml = $(xmlDoc);
                    var codErr = xmlDoc.getElementsByTagName('CODERROR')[0].childNodes[0].nodeValue;
                    var desErr = xmlDoc.getElementsByTagName('DESERROR')[0].childNodes[0].nodeValue;

                    switch(codErr){
                        case '9':

                            var msg='<div style="text-align:center;" class="alert alert-block">';
                            msg+='<button type="button" class="close" data-dismiss="alert">×</button>';
                                msg+='<b><span style="color: #000;">' + '[' + codErr + '] ' + desErr + '</span></b>';
                            msg+='</div>';

                            $('#divArticulo').html(msg);    
                            $('#divArticulo').show();
                            break;   

                        case '8':

                            var msg='<div style="text-align:center;" class="alert alert-block">';
                            msg+='<button type="button" class="close" data-dismiss="alert">×</button>';
                                msg+='<b><span style="color: #000;">' + '[' + codErr + '] ' + desErr + '</span></b>';
                            msg+='</div>';

                            $('#divArticulo').html(msg);
                            $('#divArticulo').show();
                            break;

                        case '99':

                            var msg='<div style="text-align:center;" class="alert alert-block">';
                            msg+='<button type="button" class="close" data-dismiss="alert">×</button>';
                                msg+='<b><span style="color: #000;">' + '[' + codErr + '] ' + desErr + '</span></b>';
                            msg+='</div>';

                            $('#divArticulo').html(msg);
                            $('#divArticulo').show();
                            break;

                        case '100':

                            var msg='<div style="text-align:center;" class="alert alert-block">';
                            msg+='<button type="button" class="close" data-dismiss="alert">×</button>';
                                msg+='<b><span style="color: #000;">' + '[' + codErr + '] ' + desErr + '</span></b>';
                            msg+='</div>';

                            $('#divArticulo').html(msg);
                            $('#divArticulo').show();
                            break;    

                        case '98':

                            var msg='<div style="text-align:center;" class="alert alert-block">';
                            msg+='<button type="button" class="close" data-dismiss="alert">×</button>';
                                msg+='<b><span style="color: #000;">' + '[' + codErr + '] ' + desErr + '</span></b>';
                            msg+='</div>';

                            $('#divArticulo').html(msg);
                            $('#divArticulo').show();
                            break;

                        default:

                            var datos = xmlDoc.getElementsByTagName('DATOS')[0].childNodes[0].nodeValue;
                            var titulo = xmlDoc.getElementsByTagName('TITULO')[0].childNodes[0].nodeValue;
                            var profesional = xmlDoc.getElementsByTagName('PROFESIONAL')[0].childNodes[0].nodeValue;

                            //alert('profesional ' + profesional);

                            $('#t1').html(titulo);
                            $('#t1').show();

                            $('#divProf').html(profesional);
                            $('#divProf').show();

                            $('#divArticulo').html(datos);
                            $('#divArticulo').show();
                            break;
                    }
                }
            });

            //CONTABILIZAMOS VISITA AL SERVICIO
            var serId=$('#id').val();
            var sesionId=$('#session_id').val();
            var email=$('#email').val();
            var rutPro=$('#rutPro').val();

//            alert('serId ' + serId);
//            alert('sesionId ' + sesionId);
//            alert('email ' + email);
//            alert('rutPro ' + rutPro);

            var parametros2 = { 
                                "serId" : serId ,   
                                "sesionId" : sesionId, 
                                "email" : email,
                                "rutPro" : rutPro
                           };   
            $.ajax({
                data:  parametros2,
                url: URLprotocol+"//"+URLdomain+"/bodyflex/profesional/model/servicioProCuentaVisitaModel.php",
                type:  'post',
                async:  false,
                datetype: 'xml',
                success:  function (xml){

                    //alert('servicioProCuentaVisitaModel ' + xml);

                    var xmlDoc = $.parseXML(xml), $xml = $(xmlDoc);
                    var codErr = xmlDoc.getElementsByTagName('CODERROR')[0].childNodes[0].nodeValue;
                    var desErr = xmlDoc.getElementsByTagName('DESERROR')[0].childNodes[0].nodeValue;

                    switch(codErr){
                        case '9':

                            var msg='<div style="text-align:center;" class="alert alert-block">';
                            msg+='<button type="button" class="close" data-dismiss="alert">×</button>';
                                msg+='<b><span style="color: #000;">' + '[' + codErr + '] ' + desErr + '</span></b>';
                            msg+='</div>';

                            $('#warning-articulo').html(msg);    
                            $('#warning-articulo').show();
                            break;   

                        case '8':

                            var msg='<div style="text-align:center;" class="alert alert-block">';
                            msg+='<button type="button" class="close" data-dismiss="alert">×</button>';
                                msg+='<b><span style="color: #000;">' + '[' + codErr + '] ' + desErr + '</span></b>';
                            msg+='</div>';

                            $('#warning-articulo').html(msg);
                            $('#warning-articulo').show();
                            break;

                        case '99':

                            var msg='<div style="text-align:center;" class="alert alert-block">';
                            msg+='<button type="button" class="close" data-dismiss="alert">×</button>';
                                msg+='<b><span style="color: #000;">' + '[' + codErr + '] ' + desErr + '</span></b>';
                            msg+='</div>';

                            $('#warning-articulo').html(msg);
                            $('#warning-articulo').show();
                            break;

                        case '100':

                            var msg='<div style="text-align:center;" class="alert alert-block">';
                            msg+='<button type="button" class="close" data-dismiss="alert">×</button>';
                                msg+='<b><span style="color: #000;">' + '[' + codErr + '] ' + desErr + '</span></b>';
                            msg+='</div>';

                            $('#warning-articulo').html(msg);
                            $('#warning-articulo').show();
                            break;    

                        case '98':
                            //NO HACER NADA
                            break;
                        default:
                            //NO HACER NADA                
                            break;
                    }
                }
            });    
                         
        });   
        
        function webProfesional(){
            var URLdomain   = window.location.host;
            var URLprotocol = window.location.protocol;
            var urlPerfil = URLprotocol+"//"+URLdomain+"/bodyflex/profesional/index.php";
            var rutPro = $('#rutPro').val();

            var form = $('<form action="' + urlPerfil + '" method="post" target="_self">' +
              '<input type="hidden" id="rutPro" name="rutPro" value="' + rutPro + '" />' +
              '<input type="hidden" id="prueba" name="prueba" value="0" />' +
              '</form>');
            $('body').append(form);
            form.submit();
        }
        
    </script>
    
    
</head>
<body class="">
    <?php include("../../modulos/mobile_bar.php"); ?>
    <div id="page">
        <?php include("../modulos/menu.php"); ?>
        <div id="page-title">
            <div class="container">
                <div class="row">
                    <div id="t1" class="col-xs-12">
                        <h2>TITULO</h2>
                    </div>
                </div>
            </div>
        </div>
        
        <main id="main" class="container">        
            <div class="row">
                <div class="col-lg-9 col-sm-8" id="divArticulo"></div>
                <div class="sidebar col-lg-3 col-sm-4">
                    <aside class="widget post-type">
                        <div class="row">
                            <div id="divProf" class="col-sm-12 col-xs-6 item"></div>
                        </div>
                    </aside>
                    <br>
                    <aside class="widget post-type">
                        <h3 class="s-title">&#191;Te gusta el servicio?</h3>
                        <div class="row">
                            <div id="divLike" class="col-sm-12 col-xs-6 item"></div>
                        </div>
                    </aside>
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
                    <a class="button read-more" href="../../registroUsuario/vista/registroUsuarioView.php">Registro</a>
                </div>
            </article>
        </main>
        
        <footer id="footer">
            <div class="container">
                <div class="row">
                    <?php include("../../modulos/textWidget.php"); ?>
                    <?php include("../../modulos/aboutWidget.php"); ?>        
                    <?php include("../../modulos/twitterWidget.php"); ?>     
                    <?php include("../../modulos/searchWidget.php"); ?>    
                    <?php include("../../modulos/textWidget2.php"); ?>		
                </div>
                <hr/>
                <?php include("../../modulos/creditos.php"); ?>    
            </div>
        </footer>
        
</div> <!-- #page -->

<?php include("../../modulos/mobileMenu.php"); ?>

<!-- Javascript ================================= -->
<script src='../controller/servicioProfesionalLike.js'></script>

    <!-- Datos sesion ================================= -->
    <?php if(isset($_SESSION['sesion'])){ ?>
        <input type="hidden" id="email" value="<?= $_SESSION['email'];?>">
        <input type="hidden" id="nombre" value="<?= $_SESSION['nombre'];?>">
        <input type="hidden" id="apellido" value="<?= $_SESSION['apellido'];?>">
        <input type="hidden" id="alias" value="<?= $_SESSION['alias'];?>">
        <input type="hidden" id="rol" value= "<?= $_SESSION['rol'];?>">
        <input type="hidden" id="rut" value= "<?= $_SESSION['rut'];?>">
        <input type="hidden" id="dv" value= "<?= $_SESSION['dv'];?>">
        <input type="hidden" id="url" value= "<?= $_SESSION['url'];?>">
        
        <input type="hidden" id="id" value= "<?= $id; ?>">
        <input type="hidden" id="rutPro" value= "<?= $rutPro; ?>">
        
    <?php } ?>
    session_id: <input type="text" id="session_id" value= "<?= session_id();?>"><br>
    sesion: <input type="text" id="sesion" value= "<?= $_SESSION['sesion'];?>"><br>
    
    <!-- Datos sesion ================================= -->
    
</body>
</html>