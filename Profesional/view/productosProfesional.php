
<?php

    session_start();
    $nivel=2;
   
    //DATOS REQUERIDOS PARA EL FUNCIONAMIENTO DE ESTA PAGINA
    $id=$_REQUEST['id']; //ID DEL PRODUCTO
    $rutPro=$_REQUEST['rutPro']; //RUT DEL PROFESIONAL
    $prueba=$_REQUEST['prueba']; //1=PRUEBA, 0=no PRUEBA
    
    //echo 'id ' . $id . '<br>';
    //echo 'rutPro ' . $rutPro . '<br>';
        
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
<!--[if gt IE 8]><!--> <html class="no-js" lang="en"> <!--<![endif]-->
<head>
    <!-- Basic Page Needs =========== -->
    <meta charset="utf-8">
    <title>Bodyflex - Producto</title>
    <meta name="description" content="">
    <meta name="author" content="">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    
    <?php include("../modulos/prodFavicon.php"); ?>
    <?php include("../modulos/prodEstilos.php"); ?>
    <?php include("../modulos/prodJavaScript.php"); ?>   
    
    <link rel="stylesheet" href="../../font-awesome-4.5.0/css/font-awesome.min.css">

    <!-- Magnific Popup core CSS file -->
    <link rel="stylesheet" href="../../Magnific-Popup-master/dist/magnific-popup.css">

    <!-- jQuery 1.7.2+ or Zepto.js 1.0+ -->
    <script src="//ajax.googleapis.com/ajax/libs/jquery/1.9.1/jquery.min.js"></script>
    
    <!-- Magnific Popup core JS file -->
    <script src="../../Magnific-Popup-master/dist/jquery.magnific-popup.js"></script>   
      
    <script type="text/javascript">
        $(document).ready(function() {
            $('.popup-gallery').magnificPopup({
		delegate: 'a',
		type: 'image',
		tLoading: 'Loading image #%curr%...',
		mainClass: 'mfp-img-mobile',
		gallery: {
			enabled: true,
			navigateByImgClick: true,
			preload: [0,1] // Will preload 0 - before current, and 1 after the current image
		},
		image: {
			tError: '<a href="%url%">La imagen #%curr%</a> no pudo ser cargada.',
			titleSrc: function(item) {
                            return item.el.attr('title');
			}
		}
            });
            
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
            
                        
            var URLdomain   = window.location.host;
            var URLprotocol = window.location.protocol;

            var rutPro=$('#rutPro').val();
            var id=$('#id').val();
            var parametros = { "rutPro" : rutPro, "id" : id };     
                              
            $.ajax({
                data:  parametros,
                url: URLprotocol+"//"+URLdomain+"/bodyflex/profesional/model/perfilProfesionalGetDetProductoModel.php",
                type:  'post',
                async:  true,
                datetype: 'xml',
                success:  function (xml){

                    //alert('perfilProfesionalGetDetProductoModel ' + xml);

                    var xmlDoc = $.parseXML(xml), $xml = $(xmlDoc);
                    var codErr = xmlDoc.getElementsByTagName('CODERROR')[0].childNodes[0].nodeValue;
                    var desErr = xmlDoc.getElementsByTagName('DESERROR')[0].childNodes[0].nodeValue;

                    switch(codErr){
                        case '9':

                            var msg='<div style="text-align:center;" class="alert alert-block">';
                            msg+='<b><span style="color: #000;">' + '[' + codErr + '] ' + desErr + '</span></b>';
                            msg+='</div>';

                            $('#warning-Producto').html(msg);    
                            $('#warning-Producto').show();
                            break;   

                        case '8':

                            var msg='<div style="text-align:center;" class="alert alert-block">';
                            msg+='<b><span style="color: #000;">' + '[' + codErr + '] ' + desErr + '</span></b>';
                            msg+='</div>';

                            $('#warning-Producto').html(msg);
                            $('#warning-Producto').show();
                            break;

                        case '99':

                            var msg='<div style="text-align:center;" class="alert alert-block">';
                            msg+='<b><span style="color: #000;">' + '[' + codErr + '] ' + desErr + '</span></b>';
                            msg+='</div>';

                            $('#warning-Producto').html(msg);
                            $('#warning-Producto').show();
                            break;
                            
                        case '100':

                            var msg='<div style="text-align:center;" class="alert alert-block">';
                            msg+='<b><span style="color: #000;">' + '[' + codErr + '] ' + desErr + '</span></b>';
                            msg+='</div>';

                            $('#warning-Producto').html(msg);
                            $('#warning-Producto').show();
                            break;    

                        case '98':

                            var msg='<div style="text-align:center;" class="alert alert-block">';
                            msg+='<b><span style="color: #000;">' + '[' + codErr + '] ' + desErr + '</span></b>';
                            msg+='</div>';

                            $('#warning-Producto').html(msg);
                            $('#parametros').show();
                            break;

                        default:

                            var nomPro = xmlDoc.getElementsByTagName('NOMPRO')[0].childNodes[0].nodeValue;
                            var proDes = xmlDoc.getElementsByTagName('PRODES')[0].childNodes[0].nodeValue;
                            var catPro = xmlDoc.getElementsByTagName('PROCAT')[0].childNodes[0].nodeValue;
                            var rsmMar = xmlDoc.getElementsByTagName('RSMMAR')[0].childNodes[0].nodeValue;
                            var rsmCodPro = xmlDoc.getElementsByTagName('RSMCODPRO')[0].childNodes[0].nodeValue;
                            var rsmEstPro = xmlDoc.getElementsByTagName('RSMESTPRO')[0].childNodes[0].nodeValue;
                            var rsmPrePro = xmlDoc.getElementsByTagName('RSMPREPRO')[0].childNodes[0].nodeValue;
                            var rsmPreAntPro = xmlDoc.getElementsByTagName('RSMPREANTPRO')[0].childNodes[0].nodeValue;
                            var datPro = xmlDoc.getElementsByTagName('DATPRO')[0].childNodes[0].nodeValue;
                            var imgPri = xmlDoc.getElementsByTagName('IMGPRI')[0].childNodes[0].nodeValue;
                            var proUn = xmlDoc.getElementsByTagName('PROUN')[0].childNodes[0].nodeValue;
                            
                            if(codErr==0){
                                var proFot = xmlDoc.getElementsByTagName('PRO_FOT')[0].childNodes[0].nodeValue;  
                                var proNomCom = xmlDoc.getElementsByTagName('PRO_NOM')[0].childNodes[0].nodeValue;  
                                var proTip = xmlDoc.getElementsByTagName('PRO_TIP')[0].childNodes[0].nodeValue; 
                            }
                                                                              
                            $('#nomPro').html(nomPro);
                            $('#desPro').html(proDes);
                            $('#datPro').html(datPro); //datos del producto
                            $('#rsmMar').html(rsmMar);
                            $('#rsmCodPro').html('Código producto: '+rsmCodPro);
                            $('#codPro').val(rsmCodPro);
                            $('#rsmEstPro').html('Producto '+rsmEstPro);
                            $('#rsmPrePro').html('Precio: '+rsmPrePro);
                            
                            //TRATAMIENTO COMBO UNIDADES
                            if(proUn>0){
                                var strCmbUni='<select id="cartUni">';
                                for(var i=1; i<=proUn; i++){
                                    strCmbUni+='<option value="'+i+'">'+i+'</option>';
                                }
                                strCmbUni+='</select>';
                                strCmbUni+='<button id="cartAdd" type="button">+ Agregar al Carro</button>';
                                $('#contCart').html(strCmbUni);
                            }else{
                                $('#contCart').hide(); 
                            }    
                            //TRATAMIENTO COMBO UNIDADES
                            
                            rsmPrePro=rsmPrePro.replace('$','');
                            rsmPrePro=rsmPrePro.replace('.','');
                            
                            $('#prePro').val(rsmPrePro);
                            
                            if(rsmPreAntPro!='$0'){
                                $('#rsmPreAntPro').html('Normal: '+rsmPreAntPro);
                            }else{
                                $('#rsmPreAntPro').hide();
                            }    
                            
                            $('#imgPrincipal').val(imgPri);
                            
                            if(codErr==0){
                                var strPro='<a target="_self" style="cursor: pointer;" onclick="webProfesional();">';
                                    strPro+="<img src='" + proFot + "' width='700' height='504' alt='Foto principal del profesional' />";
                                    strPro+='<div class="item-desc">';
                                        strPro+='<h4>'+proNomCom+'</h4>';
                                        strPro+='<b>'+proTip+'</b>';
                                    strPro+='</div>';
                                strPro+='</a>';
                                $('#divProf').html(strPro);
                                $('#divProf').show();
                            }
                            
                            break;
                    }
                }
            });
            
            
            //OBTENER IMAGENES ASOCIADAS
            var proId=$('#id').val();
            
            //alert('proId ' + proId);

            var parametros3 = { "id" : proId };   
            $.ajax({
                data:  parametros3,
                url: URLprotocol+"//"+URLdomain+"/bodyflex/profesional/model/productoProGetImgModel.php",
                type:  'post',
                async:  true,
                datetype: 'xml',
                success:  function (xml){

                    //alert('productoProGetImgModel ' + xml);

                    var xmlDoc = $.parseXML(xml), $xml = $(xmlDoc);
                    var codErr = xmlDoc.getElementsByTagName('CODERROR')[0].childNodes[0].nodeValue;
                    var desErr = xmlDoc.getElementsByTagName('DESERROR')[0].childNodes[0].nodeValue;

                    switch(codErr){
                        case '9':

                            var msg='<div style="text-align:center;" class="alert alert-block">';
                            msg+='<b><span style="color: #000;">' + '[' + codErr + '] ' + desErr + '</span></b>';
                            msg+='</div>';

                            $('#warning-Producto').html(msg);    
                            $('#warning-Producto').show();
                            break;   

                        case '8':

                            var msg='<div style="text-align:center;" class="alert alert-block">';
                            msg+='<b><span style="color: #000;">' + '[' + codErr + '] ' + desErr + '</span></b>';
                            msg+='</div>';

                            $('#warning-Producto').html(msg);
                            $('#warning-Producto').show();
                            break;

                        case '99':

                            var msg='<div style="text-align:center;" class="alert alert-block">';
                            msg+='<b><span style="color: #000;">' + '[' + codErr + '] ' + desErr + '</span></b>';
                            msg+='</div>';

                            $('#warning-Producto').html(msg);
                            $('#warning-Producto').show();
                            break;
                            
                        case '100':

                            var msg='<div style="text-align:center;" class="alert alert-block">';
                            msg+='<b><span style="color: #000;">' + '[' + codErr + '] ' + desErr + '</span></b>';
                            msg+='</div>';

                            $('#warning-Producto').html(msg);
                            $('#warning-Producto').show();
                            break;    

                        case '98':
                            
                            var msg='<div style="text-align:center;" class="alert alert-block">';
                            msg+='<b><span style="color: #000;">' + '[' + codErr + '] ' + desErr + '</span></b>';
                            msg+='</div>';

                            $('#warning-Producto').html(msg);
                            $('#warning-Producto').show();
                            break;
                            
                        default:    
                            
                            var datos = xmlDoc.getElementsByTagName('DATOS')[0].childNodes[0].nodeValue;
                            $('#galeria').html(datos);
                            $('#galeria').show();
                            
                            break;
                           
                    }
                }
            });
            
            
            $('#imgPri').load(function(){

                var maxWidth = 800; // Max width for the image
                var maxHeight = 350;    // Max height for the image
                var ratio = 0;  // Used for aspect ratio
                var width = $(this).width();    // Current image width
                var height = $(this).height();  // Current image height

                // Check if the current width is larger than the max
                if(width > maxWidth){
                    ratio = maxWidth / width;   // get ratio for scaling image
                    $(this).css("width", maxWidth); // Set new width
                    $(this).css("height", height * ratio);  // Scale height based on ratio
                    height = height * ratio;    // Reset height to match scaled image
                    width = width * ratio;    // Reset width to match scaled image
                }

                // Check if current height is larger than max
                if(height > maxHeight){
                    ratio = maxHeight / height; // get ratio for scaling image
                    $(this).css("height", maxHeight);   // Set new height
                    $(this).css("width", width * ratio);    // Scale width based on ratio
                    width = width * ratio;    // Reset width to match scaled image
                    height = height * ratio;    // Reset height to match scaled image
                }               
            });
            

            var proId=$('#id').val();
            var sesionId=$('#session_id').val();
            var email=$('#email').val();
            var rutPro=$('#rutPro').val();

            var parametros2 = { "id" : proId , "se" : sesionId, "email" : email, "rutPro" : rutPro };   

            //CONTABILIZAMOS VISITA AL PRODUCTO, SIEMPRE Y CUANDO NO SEA UNA PRUEBA
            if($('#prueba').val()==0){
                
                $.ajax({
                    data:  parametros2,
                    url: URLprotocol+"//"+URLdomain+"/bodyflex/profesional/model/productoProCuentaVisitaModel.php",
                    type:  'post',
                    async:  true,
                    datetype: 'xml',
                    success:  function (xml){

                        //alert('productoProCuentaVisitaModel ' + xml);

                        var xmlDoc = $.parseXML(xml), $xml = $(xmlDoc);
                        var codErr = xmlDoc.getElementsByTagName('CODERROR')[0].childNodes[0].nodeValue;
                        var desErr = xmlDoc.getElementsByTagName('DESERROR')[0].childNodes[0].nodeValue;

                        switch(codErr){
                            case '9':

                                var msg='<div style="text-align:center;" class="alert alert-block">';
                                msg+='<b><span style="color: #000;">' + '[' + codErr + '] ' + desErr + '</span></b>';
                                msg+='</div>';

                                $('#warning-Producto').html(msg);    
                                $('#warning-Producto').show();
                                break;   

                            case '8':

                                var msg='<div style="text-align:center;" class="alert alert-block">';
                                msg+='<b><span style="color: #000;">' + '[' + codErr + '] ' + desErr + '</span></b>';
                                msg+='</div>';

                                $('#warning-Producto').html(msg);
                                $('#warning-Producto').show();
                                break;

                            case '99':

                                var msg='<div style="text-align:center;" class="alert alert-block">';
                                msg+='<b><span style="color: #000;">' + '[' + codErr + '] ' + desErr + '</span></b>';
                                msg+='</div>';

                                $('#warning-Producto').html(msg);
                                $('#warning-Producto').show();
                                break;

                            case '100':

                                var msg='<div style="text-align:center;" class="alert alert-block">';
                                msg+='<b><span style="color: #000;">' + '[' + codErr + '] ' + desErr + '</span></b>';
                                msg+='</div>';

                                $('#warning-Producto').html(msg);
                                $('#warning-Producto').show();
                                break;    

                        }
                    }
                }); 
                
                //Obtiene Cantidad de Productos Carro Compras
                $.ajax({
                    data:  parametros2,
                    url: URLprotocol+"//"+URLdomain+"/bodyflex/profesional/model/productoProGetCantProCantModel.php",
                    type:  'post',
                    async:  true,
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

                                $('#warning-Producto').html(msg);    
                                $('#warning-Producto').show();
                                break;   

                            case '8':

                                var msg='<div style="text-align:center;" class="alert alert-block">';
                                msg+='<b><span style="color: #000;">' + '[' + codErr + '] ' + desErr + '</span></b>';
                                msg+='</div>';

                                $('#warning-Producto').html(msg);
                                $('#warning-Producto').show();
                                break;

                            case '99':

                                var msg='<div style="text-align:center;" class="alert alert-block">';
                                msg+='<b><span style="color: #000;">' + '[' + codErr + '] ' + desErr + '</span></b>';
                                msg+='</div>';

                                $('#warning-Producto').html(msg);
                                $('#warning-Producto').show();
                                break;

                            case '100':

                                var msg='<div style="text-align:center;" class="alert alert-block">';
                                msg+='<b><span style="color: #000;">' + '[' + codErr + '] ' + desErr + '</span></b>';
                                msg+='</div>';

                                $('#warning-Producto').html(msg);
                                $('#warning-Producto').show();
                                break;    

                            default:

                                var datos = xmlDoc.getElementsByTagName('DATOS')[0].childNodes[0].nodeValue;
                                if(datos==0){
                                    //var numPro ='<div style="font-size: 10px; font-family: Arial,Helvetica,sans-serif; text-align: right; font-weight: bold;">&nbsp;vac&iacute;o &nbsp;<i class="fa fa-shopping-cart fa-lg"></i></div>';

                                    var numPro='<a>';
                                        numPro+='<div style="font-size: 12px; font-family: Arial,Helvetica,sans-serif; font-weight: bold;">Carro de compras</div>';
                                        numPro+='<div id="itemsCarrito">';
                                            numPro+='<div  style="font-size: 10px; font-family: Arial,Helvetica,sans-serif; text-align: right; font-weight: bold;">&nbsp;vac&iacute;o &nbsp;<i class="fa fa-shopping-cart fa-lg"></i></div>';
                                        numPro+='</div>';
                                    numPro+='</a>';

                                }else{
                                    //var numPro ='<div onclick="goCarro();" style="font-size: 10px; font-family: Arial,Helvetica,sans-serif; text-align: right; font-weight: bold;">'+ datos +' &nbsp; Productos &nbsp;<i class="fa fa-shopping-cart fa-lg"></i></div>';

                                    var numPro='<a onclick="goCarro();">';
                                        numPro+='<div style="font-size: 12px; font-family: Arial,Helvetica,sans-serif; font-weight: bold;">Carro de compras</div>';
                                        numPro+='<div id="itemsCarrito">';
                                            numPro+='<div  style="font-size: 10px; font-family: Arial,Helvetica,sans-serif; text-align: right; font-weight: bold;">'+datos+' &nbsp; Productos &nbsp;<i class="fa fa-shopping-cart fa-lg"></i></div>';
                                        numPro+='</div>';
                                    numPro+='</a>';
                                }    

                                $('#mnuCarrito').html(numPro);
                                $('#mnuCarrito').show();

                                break;

                        }
                    }
                });
            }               
            
        });
                
        function goBack() {
            var URLdomain   = window.location.host;
            var URLprotocol = window.location.protocol;
            var rut=$('#rutPro').val();
            var url = URLprotocol+"//"+URLdomain+"/bodyflex/profesional/index.php#mnuProductos";
            var form = $('<form action="' + url + '" method="post"><input type="text" id="rutPro" name="rutPro" value="' + rut + '" /><input type="text" id="prueba" name="prueba" value="0" /></form>');
            $('body').append(form);
            form.submit();
            
        }

        function goCarro(){
        
            var URLdomain   = window.location.host;
            var URLprotocol = window.location.protocol;
            var rut=$('#rutPro').val();
            
            var url = URLprotocol+"//"+URLdomain+"/bodyflex/profesional/view/carroCompras.php";
            var form = $('<form action="' + url + '" method="post"><input type="text" id="rutPro" name="rutPro" value="' + rut + '" /></form>');
            $('body').append(form);
            form.submit();
            
        }
        
        function webProfesional(){
            var URLdomain   = window.location.host;
            var URLprotocol = window.location.protocol;
            var urlPerfil = URLprotocol+"//"+URLdomain+"/bodyflex/profesional/index.php";
            var rutPro = $('#rutPro').val();
           
            //alert('rutPro ' + rutPro);
           
            var form = $('<form action="' + urlPerfil + '" method="post" target="_self">' +
              '<input type="hidden" id="rutPro" name="rutPro" value="' + rutPro + '" />' +
              '<input type="hidden" id="prueba" name="prueba" value="0" />' +
              '</form>');
            $('body').append(form);
            form.submit();
            
        }
        
    </script>
    <style>
        
        #nomPro{
            
            height: 25px; 
            text-align: left; 
            width: 750px; 
            color: black; 
            font-family: Helvetica, Georgia, Arial, Garamond; 
            font-weight: bold;
            
        }
        
    </style>
</head>
<body class="">
    <?php include("../../modulos/mobile_bar.php"); ?>
    <div id="page">
        
        <?php 
            if($prueba==0){
                include("../modulos/menu.php"); 
            }
        ?>

        <!--        <div id="page-title">
            <div class="container">
                <div class="row">
                    <div id="t1" class="col-xs-12">
                        <h2>TITULO</h2>
                    </div>
                </div>
            </div>
        </div>-->
        
        <br><br>
        <main id="main" class="container">        
            <div class="row">
                <div class="col-lg-9 col-sm-8">  
                    <article class="row entry">
                        <div class="col-lg-1 visible-lg">
                            <time datetime="2013-10-10">26 <span>NOE</span></time>
                        </div>
                        <div class="col-md-12 col-lg-11">
                            <div class="entry-wrap">
                                <aside class="widget post-type">
                                    <h3 id="nomPro" style="font-weight: bold; font-size: 20px;" class="s-title">Zapatillas de Outdoor Hombre 356908</h3> <!-- border-style: solid; border-color: red; -->
                                    <div class="row">
                                        <div class="col-sm-12 col-xs-6 item">
                                            <a>
                                                <section class="magnific-all">
                                                    <div id="datPro" class="half center">
                                                        <img id="imgPri" style="display: block; margin-left: auto; margin-right: auto;" src="">
                                                        <div class="item-desc">
                                                            <h4>Nombre Producto</h4>
                                                            <b>Categoria1</b>
                                                        </div>
                                                    </div>    
                                                </section>
                                            </a>
                                        </div>
                                    </div>
                                    
                                </aside>
                                
                                <div id="warning-Producto" style="text-align:center; border-color: #FFCC00; border-style: solid; display: none;" class="alert alert-block">
                                    <b><span style="color: #000;"><i class="fa fa-exclamation-triangle"></i>&nbsp;Error no es posible eliminar.</span></b>
                                </div>
                                
                                <div id="galeria" style="margin-top: 30px;" class="popup-gallery"></div>
                                
                                <br><br>
                                
                                <!-- style="margin: 0px 3px 30px 3px; width: 250px; border-color: red; border-style: solid; border: 1px solid #222534; border-radius: 7px;"-->
                                <div class="entry-wrap" style="border: 1px solid #222534; border-radius: 7px; padding: 0px 0px 0px 0px;"><!-- border-color: red; border-style: solid; --> 
                                    <div class="entry-content" style="border: 1px solid #222534; border-radius: 7px;"> <!-- style="border-color: blue; border-style: solid;"-->
                                        <div id="warning-articulo" class="alert alert-error" style="display: none;"></div>
                                        <div class="entry-meta">
                                            <div id="desPro" style="text-align : justify; font-size: 16px;">
                                                ¿Te aburre entrenar sola? Aprovecha la motivación interminable de tu mejor amigo para salir a&amp;nbsp;correr con él. Aunque suene contradictorio, practicar&amp;nbsp;ejercicio con regularidad reduce la fatiga y mejora la actividad física. ¡Es mejor estimulante que la cafeína! Y, cuesta creerlo, pero al franquear el umbral de tu casa una lluviosa mañana de domingo, una vez superados los primeros minutos de cansancio y agarrotamiento, se activan tus endorfinas con el consiguiente subidón de energía. Y la satisfacción al acabar no tiene precio. En el Reino Unido ya existe un boot camp para humanos… y sus perros. Solo los primeros pierden peso (hasta 6 kilos en una semana), pero todos, amos y mascotas, pueden hincarle el diente a un plan de ejercicios quemagrasas, apuntarse a talleres de nutrición y mimarse (por separado, claro). Los beneficios de achuchar a un gatito se han demostrado por numerosos estudios, y van de reducir el&amp;nbsp;estrés a mejorar la salud cardiaca. Siguiendo el ejemplo británico Lady Dinah&amp;#39;s, en Madrid funciona La Gatoteca, el espacio de la ONG Abriga, donde podemos dar rienda suelta a nuestro amor por los felinos y además adoptarlos. (C/Argumosa, 28). Y tú, ¿eres perruna o gatuna? 
                                            </div>
                                        </div>
                                    </div>
                                </div> 
                            </div>
                        </div>
                        
                    </article>
                </div>
                <div class="sidebar col-lg-3 col-sm-4">
                    <?php include("../modulos/productoElProfesional.php"); ?>
                    <?php include("../modulos/productoProfesionalResumen.php"); ?>
                    <?php 
                        if($prueba==0){
                            include("../modulos/productoProfesionalLike.php"); 
                        }    
                    ?>
                    <?php 
                        if($prueba==0){
                            include("../modulos/productoDenunciar.php"); 
                        }    
                    ?>
                    
                </div>
            </div>
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
<script src='../controller/productoProfesionalController.js'></script>
<script src='../controller/productoProfesionalLike.js'></script>
<script src='../controller/productoProfesionalDenunciar.js'></script>

    <!--    sweetalert-master-->
    <script src="../sweetalert-master/dist/sweetalert.min.js"></script>
    <link rel="stylesheet" type="text/css" href="../sweetalert-master/dist/sweetalert.css">
<!--    <script src="http://code.jquery.com/jquery-1.11.0.min.js"></script>-->


    <!-- Datos sesion ================================= -->
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
        
    session_id: <input type="text" id="session_id" value= "<?= session_id();?>"><br>
    sesion: <input type="text" id="sesion" value= "<?= $_SESSION['sesion'];?>"><br>
    
    id<input type="text" id="id" value= "<?= $id; ?>"><br>
    rutPro<input type="text" id="rutPro" value= "<?= $rutPro; ?>"><br>   
    prueba<input type="text" id="prueba" value= "<?= $prueba; ?>"><br>   
    
    imgPrincipal<input type="text" id="imgPrincipal" value=""><br>   
    <!-- Datos sesion ================================= -->
    
</body>
</html>