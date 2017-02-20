<?php
 
    session_start();
    $nivel=2;
    $itemMenu=2;
    
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
<html class="no-js" lang="en">
<head>
    <!-- Basic Page Needs::::::-->
    <meta charset="utf-8">
    <title>Bodyflex - Publicaciones</title>
    <meta name="description" content="">
    <meta name="author" content="">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">

    <!-- Favicons::::-->
    <link rel="apple-touch-icon-precomposed" sizes="144x144" href="../imagenes/apple-touch-icon-144.png">
    <link rel="apple-touch-icon-precomposed" sizes="114x114" href="../imagenes/apple-touch-icon-114.png">
    <link rel="apple-touch-icon-precomposed" sizes="72x72" href="../imagenes/apple-touch-icon-72.png">
    <link rel="apple-touch-icon-precomposed" href="../imagenes/apple-touch-icon-57.png">
    <link rel="shortcut icon" href="../imagenes/favicon.ico">

    <style>
        
        #country-list li{padding: 10px; background:#FAFAFA;border-bottom:#F0F0F0 1px solid;}
        #country-list li:hover{background:#F0F0F0;}
        
        #categoria-list{list-style:none;margin:0;padding:0;width:100%;}
        #categoria-list li{padding: 10px; background:#FAFAFA;border-bottom:#F0F0F0 1px solid;}
        #categoria-list li:hover{background:#F0F0F0;}
        
        #etiqueta-list{list-style:none;margin:0;padding:0;width:100%;}
        #etiqueta-list li{padding: 10px; background:#FAFAFA;border-bottom:#F0F0F0 1px solid;}
        #etiqueta-list li:hover{background:#F0F0F0;}
        
        #referencia-list{list-style:none;margin:0;padding:0;width:100%;}
        #referencia-list li{padding: 10px; background:#FAFAFA;border-bottom:#F0F0F0 1px solid;}
        #referencia-list li:hover{background:#F0F0F0;}
        
        #prof-list{list-style:none;margin:0;padding:0;width:100%;}
        #prof-list li{padding: 10px; background:#FAFAFA;border-bottom:#F0F0F0 1px solid;}
        #prof-list li:hover{background:#F0F0F0;}
        
    </style>
    
    
    <?php include("../modulos/estilos.php"); ?>
    <link href="../js/jquery-ui-1.11.4.custom/jquery-ui.css" rel="stylesheet">
    <script src="http://code.jquery.com/jquery-1.11.0.min.js"></script>
    <script>
        $(document).ready(function(){
            
            var URLdomain   = window.location.host;
            var URLprotocol = window.location.protocol;
            
            //TITULO PUBLICACIÓN
            $("#search-box").keyup(function(tecla){
                
                //alert(tecla.keyCode);
                
                if(tecla.keyCode!=27){
                    var strDato=$(this).val();
                    if(strDato.trim().length>0){
                        $.ajax({
                            type: "POST",
                            url: URLprotocol+"//"+URLdomain+"/bodyflex/model/consultaTitulosPublicacion.php",
                            data:'keyword='+$(this).val(),
                            datetype:'xml',
                            async: true,
                            beforeSend: function(){
                                $("#suggesstion-box").hide();
                                $("#suggesstion-box").html('');
                                $("#search-box").css("background","#FFF url(LoaderIcon.gif) no-repeat 165px");
                            },
                            success: function(xml){
                                
                                //alert('consultaTitulosPublicacion ' + xml);
                                
                                var xmlDoc = $.parseXML(xml), $xml = $(xmlDoc);
                                var codErr = xmlDoc.getElementsByTagName('CODERROR')[0].childNodes[0].nodeValue;
                                var desErr = xmlDoc.getElementsByTagName('DESERROR')[0].childNodes[0].nodeValue;
                                var msg= '[' + codErr + '] ' + desErr;
                                
                                switch(codErr){
                                    case '9':

                                        $("#suggesstion-box").show();
                                        $("#suggesstion-box").html(msg);
                                        $("#search-box").css("background","#FFF");
                                        break;   

                                    case '8':

                                        $("#suggesstion-box").show();
                                        $("#suggesstion-box").html(msg);
                                        $("#search-box").css("background","#FFF");
                                        break;     

                                    case '99':

                                        $("#suggesstion-box").show();
                                        $("#suggesstion-box").html(msg);
                                        $("#search-box").css("background","#FFF");
                                        break;     
                                        
                                    case '100':

                                        $("#suggesstion-box").show();
                                        $("#suggesstion-box").html(msg);
                                        $("#search-box").css("background","#FFF");
                                        break;         

                                    case '98':

                                        //NO MOSTRAMOS NADA PARA QUE EL USUARIO IGUALMENTE REALICE LA BUSQUEDA
                                        //ALMACENANDO SU SOLICITUD PARA POSTERIOR ANÁLISIS
                                        
                                        var dato = xmlDoc.getElementsByTagName('DATOS')[0].childNodes[0].nodeValue;    
                                        $("#titBsq").val(dato);
                                        $("#suggesstion-box").hide();
                                        $("#suggesstion-box").html('');
                                        $("#search-box").css("background","#FFF");
                                        break;     

                                    default:
                                        
                                        var datos = xmlDoc.getElementsByTagName('DATOS')[0].childNodes[0].nodeValue;
                                        
                                        $("#suggesstion-box").show();
                                        $("#suggesstion-box").html(datos);
                                        $("#search-box").css("background","#FFF");
                                        
                                        break;
                                    }
                            }
                        });
                    }else{
                        $("#suggesstion-box").hide();
                    }    
                }else{
                    $("#suggesstion-box").hide();
                }
            });  
            
            //CATEGORIA PUBLICACIÓN
            $("#search-categoria").keyup(function(tecla){
                if(tecla.keyCode!=27){
                    var strDato=$(this).val();
                    if(strDato.trim().length>0){
                        $.ajax({
                            type: "POST",
                            url: URLprotocol+"//"+URLdomain+"/bodyflex/model/csuPublicacionFormCatModel.php",
                            data:'keyword='+$(this).val(),
                            datetype: 'xml',
                            async: true,
                            beforeSend: function(){
                                $("#suggesstion-box-categoria").hide();
                                $("#suggesstion-box-categoria").html('');
                                $("#search-categoria").css("background","#FFF url(LoaderIcon.gif) no-repeat 165px");
                            },
                            success: function(xml){
                                           
                                var xmlDoc = $.parseXML(xml), $xml = $(xmlDoc);
                                var codErr = xmlDoc.getElementsByTagName('CODERROR')[0].childNodes[0].nodeValue;
                                var desErr = xmlDoc.getElementsByTagName('DESERROR')[0].childNodes[0].nodeValue;
                                var msg = '[' + codErr + '] ' + desErr;
                                
                                switch(codErr){
                                    case '9':
                                        
                                        $("#suggesstion-box-categoria").show();
                                        $("#suggesstion-box-categoria").html(msg);
                                        $("#search-categoria").css("background","#FFF");
                                        break;   

                                    case '8':

                                        $("#suggesstion-box-categoria").show();
                                        $("#suggesstion-box-categoria").html(msg);
                                        $("#search-categoria").css("background","#FFF");
                                        break;     

                                    case '99':

                                        $("#suggesstion-box-categoria").show();
                                        $("#suggesstion-box-categoria").html(msg);
                                        $("#search-categoria").css("background","#FFF");
                                        break;     

                                    case '100':

                                        $("#suggesstion-box-categoria").show();
                                        $("#suggesstion-box-categoria").html(msg);
                                        $("#search-categoria").css("background","#FFF");
                                        break;       

                                    case '98':
                                        
                                        //NO MOSTRAMOS NADA PAR QUE EL USUARIO IGUALMENTE REALICE LA BUSQUEDA
                                        //ALMACENANDO SU PRETENCIÓN
                                        
                                        var dato = xmlDoc.getElementsByTagName('DATOS')[0].childNodes[0].nodeValue;  
                                        $("#catBsq").val(dato);
                                        $("#suggesstion-box-categoria").hide();
                                        $("#suggesstion-box-categoria").html('');
                                        $("#search-categoria").css("background","#FFF");
                                        break;     

                                    default:

                                        var datos = xmlDoc.getElementsByTagName('DATOS')[0].childNodes[0].nodeValue;
                                        $("#suggesstion-box-categoria").show();
                                        $("#suggesstion-box-categoria").html(datos);
                                        $("#search-categoria").css("background","#FFF");
                                        break;

                                }
                            }
                        });
                    }else{
                        $("#suggesstion-box-categoria").hide();
                    }    
                }else{
                    $("#suggesstion-box-categoria").hide();
                }
            });  
            
            //ETIQUETA PUBLICACIÓN
            $("#search-etiqueta").keyup(function(tecla){
                if(tecla.keyCode!=27){
                    var strDato=$(this).val();
                    if(strDato.trim().length>0){
                        $.ajax({
                            type: "POST",
                            url: URLprotocol+"//"+URLdomain+"/bodyflex/model/csuPublicacionFormEtiModel.php",
                            data:'keyword='+$(this).val(),
                            datetype: 'xml',
                            async: true,
                            beforeSend: function(){
                                $("#suggesstion-box-etiqueta").hide();
                                $("#suggesstion-box-etiqueta").html('');
                                $("#search-etiqueta").css("background","#FFF url(LoaderIcon.gif) no-repeat 165px");
                            },
                            success: function(xml){
                                
                                //alert('csuPublicacionFormEtiModel ' + xml);
                                
                                var xmlDoc = $.parseXML(xml), $xml = $(xmlDoc);
                                var codErr = xmlDoc.getElementsByTagName('CODERROR')[0].childNodes[0].nodeValue;
                                var desErr = xmlDoc.getElementsByTagName('DESERROR')[0].childNodes[0].nodeValue;
                                var msg = '[' + codErr + '] ' + desErr;
                                
                                switch(codErr){
                                    case '9':
                                        
                                        $("#suggesstion-box-etiqueta").show();
                                        $("#suggesstion-box-etiqueta").html(msg);
                                        $("#search-etiqueta").css("background","#FFF");
                                        break;   

                                    case '8':

                                        $("#suggesstion-box-etiqueta").show();
                                        $("#suggesstion-box-etiqueta").html(msg);
                                        $("#search-etiqueta").css("background","#FFF");
                                        break;     

                                    case '99':

                                        $("#suggesstion-box-etiqueta").show();
                                        $("#suggesstion-box-etiqueta").html(msg);
                                        $("#search-etiqueta").css("background","#FFF");
                                        break;     

                                    case '100':

                                        $("#suggesstion-box-etiqueta").show();
                                        $("#suggesstion-box-etiqueta").html(msg);
                                        $("#search-etiqueta").css("background","#FFF");
                                        break;        

                                    case '98':
                                        
                                        //NO MOSTRAMOS NADA PAR QUE EL USUARIO IGUALMENTE REALICE LA BUSQUEDA
                                        //ALMACENANDO SU PRETENCIÓN
                                        var dato = xmlDoc.getElementsByTagName('DATOS')[0].childNodes[0].nodeValue; 
                                        $("#etiBsq").val(dato);
                                        $("#suggesstion-box-etiqueta").hide();
                                        $("#suggesstion-box-etiqueta").html('');
                                        $("#search-etiqueta").css("background","#FFF");
                                        break;     

                                    default:

                                        var datos = xmlDoc.getElementsByTagName('DATOS')[0].childNodes[0].nodeValue;
                                        $("#suggesstion-box-etiqueta").show();
                                        $("#suggesstion-box-etiqueta").html(datos);
                                        $("#search-etiqueta").css("background","#FFF");
                                        break;

                                }
                            }
                        });
                    }else{
                        $("#suggesstion-box-etiqueta").hide();
                    }    
                }else{
                    $("#suggesstion-box-etiqueta").hide();
                }
            }); 
            
            //REFERENCIA PUBLICACIÓN
            $("#search-referencia").keyup(function(tecla){
                if(tecla.keyCode!=27){
                    var strDato=$(this).val();
                    if(strDato.trim().length>0){
                        $.ajax({
                            type: "POST",
                            url: URLprotocol+"//"+URLdomain+"/bodyflex/model/csuPublicacionFormRefModel.php",
                            data:'keyword='+$(this).val(),
                            datetype: 'xml',
                            async: true,
                            beforeSend: function(){
                                $("#suggesstion-box-referencia").hide();
                                $("#suggesstion-box-referencia").html('');
                                $("#search-referencia").css("background","#FFF url(LoaderIcon.gif) no-repeat 165px");
                            },
                            success: function(xml){
                                
                                //alert('csuPublicacionFormRefModel ' + xml);
                                
                                var xmlDoc = $.parseXML(xml), $xml = $(xmlDoc);
                                var codErr = xmlDoc.getElementsByTagName('CODERROR')[0].childNodes[0].nodeValue;
                                var desErr = xmlDoc.getElementsByTagName('DESERROR')[0].childNodes[0].nodeValue;
                                var msg = '[' + codErr + '] ' + desErr;
                                
                                switch(codErr){
                                    case '9':
                                        
                                        $("#suggesstion-box-referencia").show();
                                        $("#suggesstion-box-referencia").html(msg);
                                        $("#search-referencia").css("background","#FFF");
                                        break;   

                                    case '8':

                                        $("#suggesstion-box-referencia").show();
                                        $("#suggesstion-box-referencia").html(msg);
                                        $("#search-referencia").css("background","#FFF");
                                        break;     

                                    case '99':

                                        $("#suggesstion-box-referencia").show();
                                        $("#suggesstion-box-referencia").html(msg);
                                        $("#search-referencia").css("background","#FFF");
                                        break;    
                                        
                                    case '100':

                                        $("#suggesstion-box-referencia").show();
                                        $("#suggesstion-box-referencia").html(msg);
                                        $("#search-referencia").css("background","#FFF");
                                        break;         

                                    case '98':
                                              
                                        //NO MOSTRAMOS NADA PAR QUE EL USUARIO IGUALMENTE REALICE LA BUSQUEDA
                                        //ALMACENANDO SU PRETENCIÓN
                                        var datos = xmlDoc.getElementsByTagName('DATOS')[0].childNodes[0].nodeValue;
                                        $("#refBsq").val(datos);
                                        $("#suggesstion-box-referencia").hide();
                                        $("#suggesstion-box-referencia").html();
                                        $("#search-referencia").css("background","#FFF");
                                        break;     

                                    default:
                                        
                                        var datos = xmlDoc.getElementsByTagName('DATOS')[0].childNodes[0].nodeValue;
                                        $("#suggesstion-box-referencia").show();
                                        $("#suggesstion-box-referencia").html(datos);
                                        $("#search-referencia").css("background","#FFF");
                                        break;

                                }
                            }
                        });
                    }else{
                        $("#suggesstion-box-referencia").hide();
                    }    
                }else{
                    $("#suggesstion-box-referencia").hide();
                }
            }); 
            
            //PROFESIONAL PUBLICACIÓN
            $("#search-box-prof").keyup(function(tecla){
                if(tecla.keyCode!=27){ //keyCode==27=>ESCAPE
                    var strDato=$(this).val();
                    if(strDato.trim().length>0){
                        $.ajax({
                            type: "POST",
                            url: URLprotocol+"//"+URLdomain+"/bodyflex/model/csuPublicacionFormProfModel.php",
                            data:'keyword='+$(this).val(),
                            datetype: 'xml',
                            async: true,
                            beforeSend: function(){
                                $("#suggesstion-box-prof").hide();
                                $("#suggesstion-box-prof").html('');
                                $("#search-box-prof").css("background","#FFF url(LoaderIcon.gif) no-repeat 165px");
                            },
                            success: function(xml){
                                
                                //alert('csuPublicacionFormProfModel ' + xml);
                                
                                var xmlDoc = $.parseXML(xml), $xml = $(xmlDoc);
                                var codErr = xmlDoc.getElementsByTagName('CODERROR')[0].childNodes[0].nodeValue;
                                var desErr = xmlDoc.getElementsByTagName('DESERROR')[0].childNodes[0].nodeValue;
                                var msg = '[' + codErr + '] ' + desErr;
                                
                                switch(codErr){
                                    case '9':
                                        
                                        $("#suggesstion-box-prof").show();
                                        $("#suggesstion-box-prof").html(msg);
                                        $("#search-box-prof").css("background","#FFF");
                                        break;   

                                    case '8':

                                        $("#suggesstion-box-prof").show();
                                        $("#suggesstion-box-prof").html(msg);
                                        $("#search-box-prof").css("background","#FFF");
                                        break;     

                                    case '99':

                                        $("#suggesstion-box-prof").show();
                                        $("#suggesstion-box-prof").html(msg);
                                        $("#search-box-prof").css("background","#FFF");
                                        break;     

                                    case '100':

                                        $("#suggesstion-box-prof").show();
                                        $("#suggesstion-box-prof").html(msg);
                                        $("#search-box-prof").css("background","#FFF");
                                        break;         

                                    case '98':
                                        
                                        //NO MOSTRAMOS NADA PAR QUE EL USUARIO IGUALMENTE REALICE LA BUSQUEDA
                                        //ALMACENANDO SU PRETENCIÓN
                                        var datos = xmlDoc.getElementsByTagName('DATOS')[0].childNodes[0].nodeValue;
                                        $("#proBsq").val(datos);
                                        $("#suggesstion-box-prof").hide();
                                        $("#suggesstion-box-prof").html('');
                                        $("#search-box-prof").css("background","#FFF");
                                        break;     

                                    default:
                                        
                                        var datos = xmlDoc.getElementsByTagName('DATOS')[0].childNodes[0].nodeValue;
                                        $("#suggesstion-box-prof").html(datos);
                                        $("#suggesstion-box-prof").show();
                                        $("#search-box-prof").css("background","#FFF");
                                        break;

                                }
                            }
                        });
                    }else{
                        $("#suggesstion-box-prof").hide();
                    }    
                }else{
                    $("#suggesstion-box-prof").hide();
                }
            }); 
            
            $("#search-box").click(function() {
                $("#suggesstion-box-categoria").hide();
                $("#suggesstion-box-etiqueta").hide();
                $("#suggesstion-box-referencia").hide();
                $("#suggesstion-box-prof").hide();
            });

            $("#search-categoria").click(function() {
                $("#suggesstion-box").hide();
                $("#suggesstion-box-etiqueta").hide();
                $("#suggesstion-box-referencia").hide();
                $("#suggesstion-box-prof").hide();
            });

            $("#search-etiqueta").click(function() {
                $("#suggesstion-box").hide();
                $("#suggesstion-box-categoria").hide();
                $("#suggesstion-box-referencia").hide();
                $("#suggesstion-box-prof").hide();
            });

            $("#search-referencia").click(function() {
                $("#suggesstion-box").hide();
                $("#suggesstion-box-categoria").hide();
                $("#suggesstion-box-etiqueta").hide();
                $("#suggesstion-box-prof").hide();
            });

            $("#search-box-prof").click(function() {
                $("#suggesstion-box").hide();
                $("#suggesstion-box-categoria").hide();
                $("#suggesstion-box-etiqueta").hide();
                $("#suggesstion-box-referencia").hide();
            });
            
        });

        function selectTitulo(val, puId){
            //alert('selectTitulo: ' + val);
            $("#search-box").val(val);
            $('#puIdBsq').val(puId);
            $("#suggesstion-box").hide();
        }
        function selectCategoria(val){
            //alert('selectTitulo: ' + val);
            $("#search-categoria").val(val);
            $("#suggesstion-box-categoria").hide();
        }
        function selectEtiqueta(val){
            //alert('selectTitulo: ' + val);
            $("#search-etiqueta").val(val);
            $("#suggesstion-box-etiqueta").hide();
        }
        function selectReferencia(val){
            //alert('selectTitulo: ' + val);
            $("#search-referencia").val(val);
            $("#suggesstion-box-referencia").hide();
        }
        function selectProf(val, rut){
            //alert('selectProf: ' + val + ' ' + rut);
            $("#search-box-prof").val(val);
            $('#rutPro').val(rut);
            $("#suggesstion-box-prof").hide();
        }


    </script>    
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
                <!-- listado de publicaciones resumidas -->
                <?php include("../view/publicacionesRsmView.php"); ?>    
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
        
    <script src="../js/jquery-ui-1.11.4.custom/external/jquery/jquery.js"></script>
    <script src="../js/jquery-ui-1.11.4.custom/jquery-ui.js"></script>
   
    <!-- Datos sesion, solo si esta definida variable sesion ================================= -->
    <?php if(isset($_SESSION['sesion'])){ ?>
        <input type="text" id="email" value="<?= $_SESSION['email'];?>">
        <input type="text" id="nombre" value="<?= $_SESSION['nombre'];?>">
        <input type="text" id="apellido" value="<?= $_SESSION['apellido'];?>">
        <input type="text" id="alias" value="<?= $_SESSION['alias'];?>">
        <input type="text" id="rol" value= "<?= $_SESSION['rol'];?>">
        <input type="text" id="rut" value= "<?= $_SESSION['rut'];?>">
        <input type="text" id="dv" value= "<?= $_SESSION['dv'];?>">
        <input type="text" id="url" value= "<?= $_SESSION['url'];?>">
    <?php } ?>
    
    <input type="text" id="rutPro" value="0">
    <input type="text" id="titBsq" value="">   <!-- titulo buscado --> 
    <input type="text" id="catBsq" value="">   <!-- categoría buscada --> 
    <input type="text" id="etiBsq" value="">   <!-- etiqueta buscada --> 
    <input type="text" id="refBsq" value="">   <!-- referencia buscada -->  
    <input type="text" id="proBsq" value="">   <!-- nombre profesional buscado -->  
    
    <input type="text" id="sesion" value= "<?= $_SESSION['sesion'];?>">
    <input type="text" id="session_id" value= "<?= $_SESSION['sesion_id']; ?>">
    <input type="text" id="itemMenu" value= "<?= $itemMenu; ?>">

            
</body>
</html>
