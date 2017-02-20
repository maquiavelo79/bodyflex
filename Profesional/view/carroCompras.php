
<?php

    session_start();
    $nivel=2;
        
    $rutPro=$_REQUEST['rutPro']; //RUT DEL PROFESIONAL
    
    
    
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
    <title>Bodyflex - Carro Compras</title>
    <meta name="description" content="">
    <meta name="author" content="">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    
    <?php include("../modulos/prodFavicon.php"); ?>
    <?php include("../modulos/prodEstilos.php"); ?>
    <?php include("../modulos/prodJavaScript.php"); ?>   
    
    <link rel="stylesheet" href="../../font-awesome-4.5.0/css/font-awesome.min.css">

    <!-- jQuery 1.7.2+ or Zepto.js 1.0+ -->
    <script src="//ajax.googleapis.com/ajax/libs/jquery/1.9.1/jquery.min.js"></script>
      
    <script type="text/javascript">
        $(document).ready(function() {
            
            //$('#warning-btn-Carro').show();
            
            var URLdomain   = window.location.host;
            var URLprotocol = window.location.protocol;
            
            //Obtiene Nombre Completo del Profesional [posiblemente se puedan agregar mas campos]
            var rutPro=$('#rutPro').val();
            var param = { "rutPro" : rutPro };  
            $.ajax({
                data:  param,
                url: URLprotocol+"//"+URLdomain+"/bodyflex/profesional/model/productoProGetNomProModel.php",
                type:  'post',
                async:  false,
                datetype: 'xml',
                success:  function (xml){

                    //alert('productoProGetNomProModel ' + xml);

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
                    
                        case '100':

                            var msg='<div style="text-align:center;" class="alert alert-block">';
                            msg+='<b><span style="color: #000;">' + '[' + codErr + '] ' + desErr + '</span></b>';
                            msg+='</div>';

                            $('#warning-btn-Carro').show();
                            $('#warning-Carro').html(msg);
                            $('#warning-Carro').show();
                            break;    
                    
                        default:
                            
                            var np = xmlDoc.getElementsByTagName('DATOS')[0].childNodes[0].nodeValue;
                            $('#nomProfesional').html(np);
                            $('#nomProfesional').show();
                            break;
    
                    }
                }
            });
            
            
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
                    
                        case '100':

                            var msg='<div style="text-align:center;" class="alert alert-block">';
                            msg+='<b><span style="color: #000;">' + '[' + codErr + '] ' + desErr + '</span></b>';
                            msg+='</div>';

                            $('#warning-btn-Carro').show();
                            $('#warning-Carro').html(msg);
                            $('#warning-Carro').show();
                            break;    
                    
                        default:
                            
                            var nP = xmlDoc.getElementsByTagName('DATOS')[0].childNodes[0].nodeValue;
                            
                            var numPro='<a>';
                                numPro+='<div style="font-size: 12px; font-family: Arial,Helvetica,sans-serif; font-weight: bold;">Carro de compras</div>';
                                numPro+='<div id="itemsCarrito">';
                                    numPro+='<div  style="font-size: 10px; font-family: Arial,Helvetica,sans-serif; text-align: right; font-weight: bold;">'+nP+' &nbsp; Productos &nbsp;<i class="fa fa-shopping-cart fa-lg"></i></div>';
                                numPro+='</div>';
                            numPro+='</a>';
                            
                            $('#mnuCarrito').html(numPro);
                            $('#mnuCarrito').show();
                            break;
    
                    }
                }
            });
            
            //Obtiene Productos Carro Compras
            $.ajax({
                data:  parametros,
                url: URLprotocol+"//"+URLdomain+"/bodyflex/profesional/model/perfilProGetProCartModel.php",
                type:  'post',
                async:  false,
                datetype: 'xml',
                success:  function (xml){

                    //alert('perfilProGetProCartModel ' + xml);

                    var xmlDoc = $.parseXML(xml), $xml = $(xmlDoc);
                    var codErr = xmlDoc.getElementsByTagName('CODERROR')[0].childNodes[0].nodeValue;
                    var desErr = xmlDoc.getElementsByTagName('DESERROR')[0].childNodes[0].nodeValue;

                    switch(codErr){
                        case '9':

                            var msg='<div style="text-align:center;" class="alert alert-block">';
                                msg+='<b><span style="color: #000;">' + '[' + codErr + '] ' + desErr + '</span></b>';
                            msg+='</div>';

                            $('#warning-btn-Carro').show();
                            $('#rsmCompra1').hide();
                            $('#warning-Carro').html(msg);    
                            $('#warning-Carro').show();
                            break;   

                        case '8':

                            var msg='<div style="text-align:center;" class="alert alert-block">';
                                msg+='<b><span style="color: #000;">' + '[' + codErr + '] ' + desErr + '</span></b>';
                            msg+='</div>';

                            $('#warning-btn-Carro').show();
                            $('#rsmCompra1').hide();
                            $('#warning-Carro').html(msg);
                            $('#warning-Carro').show();
                            break;

                        case '99':

                            var msg='<div style="text-align:center;" class="alert alert-block">';
                                msg+='<b><span style="color: #000;">' + '[' + codErr + '] ' + desErr + '</span></b>';
                            msg+='</div>';

                            $('#warning-btn-Carro').show();
                            $('#rsmCompra1').hide();
                            $('#warning-Carro').html(msg);
                            $('#warning-Carro').show();
                            break;
                    
                        case '100':

                            var msg='<div style="text-align:center;" class="alert alert-block">';
                                msg+='<b><span style="color: #000;">' + '[' + codErr + '] ' + desErr + '</span></b>';
                            msg+='</div>';

                            $('#warning-btn-Carro').show();
                            $('#rsmCompra1').hide();
                            $('#warning-Carro').html(msg);
                            $('#warning-Carro').show();
                            break;    
                    
                        case '98':

                            var msg='<div style="text-align:center;" class="alert alert-block">';
                                msg+='<b><span style="color: #000;">' + '[' + codErr + '] ' + desErr + '</span></b>';
                            msg+='</div>';

                            $('#warning-btn-Carro').show();
                            $('#rsmCompra1').hide();
                            $('#warning-Carro').html(msg);
                            $('#warning-Carro').show();
                            break;
                            
                        default:
                            
                            var datos = xmlDoc.getElementsByTagName('DATOS')[0].childNodes[0].nodeValue;
                            var totCom = xmlDoc.getElementsByTagName('TOTCOM')[0].childNodes[0].nodeValue;
                            var tot = '<div id="txtMtoSubTot">'+totCom+'</div>';
                            
                            $('#mtoSubTotal').html(tot);
                            $('#container').html(datos);
                            break;
    
                    }
                }
            });
                        
            //$('.fa-plus').click(function(){
            $(document.body).on('click', '.fa-plus' ,function(){
            
                var key=$(this).attr("key");
                var mas=1;
                var menos=0;
                 
                var parametros = { 
                    "key" : key 
                    ,  "mas" : mas 
                    ,  "menos" : menos 
                };  
                 
                //Obtiene Cantidad de Productos Carro Compras
                $.ajax({
                    data:  parametros,
                    url: URLprotocol+"//"+URLdomain+"/bodyflex/profesional/model/perfilProGetAddReduceCartModel.php",
                    type:  'post',
                    async:  false,
                    datetype: 'xml',
                    success:  function (xml){

                        //alert('perfilProGetAddReduceCartModel ' + xml);

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

                            case '100':

                                var msg='<div style="text-align:center;" class="alert alert-block">';
                                msg+='<b><span style="color: #000;">' + '[' + codErr + '] ' + desErr + '</span></b>';
                                msg+='</div>';

                                $('#warning-btn-Carro').show();
                                $('#warning-Carro').html(msg);
                                $('#warning-Carro').show();
                                break;    

                            default:

                                var cantidad = xmlDoc.getElementsByTagName('CANTIDAD')[0].childNodes[0].nodeValue;
                                var subTotal = xmlDoc.getElementsByTagName('SUBTOTAL')[0].childNodes[0].nodeValue;
                                var total = xmlDoc.getElementsByTagName('TOTAL')[0].childNodes[0].nodeValue;    
                                var totPro = xmlDoc.getElementsByTagName('NUMPRO')[0].childNodes[0].nodeValue;

                                //1° Cantidad Productos    
                                var elm='#items_'+key;
                                $(elm).val(cantidad);
                                                               
                                //2° Subtotal venta
                                var sBT='#subTotal_'+key;
                                var totVta='<div id="monTot_'+key+'" class="monTot">'+subTotal+'</div>';
                                $(sBT).html(totVta);
                                                               
                                //3° Total venta
                                var vTA='<div id="txtMtoSubTot">'+total+'</div>';
                                $('#mtoSubTotal').html(vTA);      
                                
                                //4° Actualizamos menú
                                var numPro='<a>';
                                    numPro+='<div style="font-size: 12px; font-family: Arial,Helvetica,sans-serif; font-weight: bold;">Carro de compras</div>';
                                    numPro+='<div id="itemsCarrito">';
                                        numPro+='<div  style="font-size: 10px; font-family: Arial,Helvetica,sans-serif; text-align: right; font-weight: bold;">'+totPro+' &nbsp; Productos &nbsp;<i class="fa fa-shopping-cart fa-lg"></i></div>';
                                    numPro+='</div>';
                                numPro+='</a>';
                           
                                $('#mnuCarrito').html(numPro);
                                $('#mnuCarrito').show();
                                
                                break;

                        }
                    }
                }); 

            });
            
            //$('.fa-minus').click(function(){
            $(document.body).on('click', '.fa-minus' ,function(){
            
                var key=$(this).attr("key");
                var mas=0;
                var menos=1;
                 
                var parametros = { 
                    "key" : key 
                    ,  "mas" : mas 
                    ,  "menos" : menos 
                };  
                 
                //Obtiene Cantidad de Productos Carro Compras
                $.ajax({
                    data:  parametros,
                    url: URLprotocol+"//"+URLdomain+"/bodyflex/profesional/model/perfilProGetAddReduceCartModel.php",
                    type:  'post',
                    async:  false,
                    datetype: 'xml',
                    success:  function (xml){

                        //alert('perfilProGetAddReduceCartModel ' + xml);

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

                            case '100':

                                var msg='<div style="text-align:center;" class="alert alert-block">';
                                msg+='<b><span style="color: #000;">' + '[' + codErr + '] ' + desErr + '</span></b>';
                                msg+='</div>';

                                $('#warning-btn-Carro').show();
                                $('#warning-Carro').html(msg);
                                $('#warning-Carro').show();
                                break;    

                            default:

                                var cantidad = xmlDoc.getElementsByTagName('CANTIDAD')[0].childNodes[0].nodeValue;
                                var subTotal = xmlDoc.getElementsByTagName('SUBTOTAL')[0].childNodes[0].nodeValue;
                                var total = xmlDoc.getElementsByTagName('TOTAL')[0].childNodes[0].nodeValue;  
                                var totPro = xmlDoc.getElementsByTagName('NUMPRO')[0].childNodes[0].nodeValue;

                                //1° Cantidad Productos    
                                var elm='#items_'+key;
                                $(elm).val(cantidad);
                                                               
                                //2° Subtotal venta
                                var sBT='#subTotal_'+key;
                                var totVta='<div id="monTot_'+key+'" class="monTot">'+subTotal+'</div>';
                                $(sBT).html(totVta);
                                                               
                                //3° Total venta
                                var vTA='<div id="txtMtoSubTot">'+total+'</div>';
                                $('#mtoSubTotal').html(vTA);   
                                
                                //4° Actualizamos menú
                                var numPro='<a>';
                                    numPro+='<div style="font-size: 12px; font-family: Arial,Helvetica,sans-serif; font-weight: bold;">Carro de compras</div>';
                                    numPro+='<div id="itemsCarrito">';
                                        numPro+='<div  style="font-size: 10px; font-family: Arial,Helvetica,sans-serif; text-align: right; font-weight: bold;">'+totPro+' &nbsp; Productos &nbsp;<i class="fa fa-shopping-cart fa-lg"></i></div>';
                                    numPro+='</div>';
                                numPro+='</a>';
                           
                                $('#mnuCarrito').html(numPro);
                                $('#mnuCarrito').show();
                                
                                break;

                        }
                    }
                }); 

            });
            
            $(document.body).on('click', '.fa-times' ,function(){
                
                var key=$(this).attr("key");
                var parametros = { 
                    "key" : key 
                };
                
                //Obtiene Cantidad de Productos Carro Compras
                $.ajax({
                    data:  parametros,
                    url: URLprotocol+"//"+URLdomain+"/bodyflex/profesional/model/perfilProDelCartModel.php",
                    type:  'post',
                    async:  false,
                    datetype: 'xml',
                    success:  function (xml){

                        //alert('perfilProDelCartModel ' + xml);

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

                            case '98':

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

                            case '100':

                                var msg='<div style="text-align:center;" class="alert alert-block">';
                                msg+='<b><span style="color: #000;">' + '[' + codErr + '] ' + desErr + '</span></b>';
                                msg+='</div>';

                                $('#warning-btn-Carro').show();
                                $('#warning-Carro').html(msg);
                                $('#warning-Carro').show();
                                break;    

                            default:

                                var totPro = xmlDoc.getElementsByTagName('CANTIDAD')[0].childNodes[0].nodeValue;    

                                var numPro='<a>';
                                    numPro+='<div style="font-size: 12px; font-family: Arial,Helvetica,sans-serif; font-weight: bold;">Carro de compras</div>';
                                    numPro+='<div id="itemsCarrito">';
                                        numPro+='<div  style="font-size: 10px; font-family: Arial,Helvetica,sans-serif; text-align: right; font-weight: bold;">'+totPro+' &nbsp; Productos &nbsp;<i class="fa fa-shopping-cart fa-lg"></i></div>';
                                    numPro+='</div>';
                                numPro+='</a>';

                                $('#mnuCarrito').html('');
                                $('#mnuCarrito').html(numPro);
                                $('#mnuCarrito').show();   
                               
                                consultaProductosCarro(); 
       
                                break;    

                        }
                    }
                }); 
                
            }
            
        );


    });
              
        
        function consultaProductosCarro(){
        
            var URLdomain   = window.location.host;
            var URLprotocol = window.location.protocol;
        
            var se=$('#session_id').val();
            
            var parametros2 = { 
                "se" : se 
            };  

            //Obtiene Productos Carro Compras
            $.ajax({
                data:  parametros2,
                url: URLprotocol+"//"+URLdomain+"/bodyflex/profesional/model/perfilProGetProCartModel.php",
                type:  'post',
                async:  false,
                datetype: 'xml',
                success:  function (xml){

                    //alert('perfilProGetProCartModel ' + xml);

                    var xmlDoc = $.parseXML(xml), $xml = $(xmlDoc);
                    var codErr = xmlDoc.getElementsByTagName('CODERROR')[0].childNodes[0].nodeValue;
                    var desErr = xmlDoc.getElementsByTagName('DESERROR')[0].childNodes[0].nodeValue;

                    switch(codErr){
                        case '9':

                            var msg='<div style="text-align:center;" class="alert alert-block">';
                            msg+='<b><span style="color: #000;">' + '[' + codErr + '] ' + desErr + '</span></b>';
                            msg+='</div>';

                            $('#warning-btn-Carro').show();
                            $('#rsmCompra1').hide();
                            $('#warning-Carro').html(msg);    
                            $('#warning-Carro').show();
                            break;   

                        case '8':

                            var msg='<div style="text-align:center;" class="alert alert-block">';
                            msg+='<b><span style="color: #000;">' + '[' + codErr + '] ' + desErr + '</span></b>';
                            msg+='</div>';

                            $('#warning-btn-Carro').show();
                            $('#rsmCompra1').hide();
                            $('#warning-Carro').html(msg);
                            $('#warning-Carro').show();
                            break;

                        case '99':

                            var msg='<div style="text-align:center;" class="alert alert-block">';
                            msg+='<b><span style="color: #000;">' + '[' + codErr + '] ' + desErr + '</span></b>';
                            msg+='</div>';

                            $('#warning-btn-Carro').show();
                            $('#rsmCompra1').hide();
                            $('#warning-Carro').html(msg);
                            $('#warning-Carro').show();
                            break;
                            
                        case '100':

                            var msg='<div style="text-align:center;" class="alert alert-block">';
                            msg+='<b><span style="color: #000;">' + '[' + codErr + '] ' + desErr + '</span></b>';
                            msg+='</div>';

                            $('#warning-btn-Carro').show();
                            $('#rsmCompra1').hide();
                            $('#warning-Carro').html(msg);
                            $('#warning-Carro').show();
                            break;    
                        
                        case '98':

                            var msg='<div style="text-align:center;" class="alert alert-block">';
                            msg+='<b><span style="color: #000;">' + '[' + codErr + '] ' + desErr + '</span></b>';
                            msg+='</div>';
                            
                            $('#mtoSubTotal').html('$0');
                            $('#container').html('');
                            $('#container').trigger('liszt:updated');

                            $('#warning-btn-Carro').show();
                            $('#rsmCompra1').hide();
                            $('#warning-Carro').html(msg);
                            $('#warning-Carro').show();
                            break;
                            
                        default:

                            var datos = xmlDoc.getElementsByTagName('DATOS')[0].childNodes[0].nodeValue;
                            var totCom = xmlDoc.getElementsByTagName('TOTCOM')[0].childNodes[0].nodeValue;
                            var tot = '<div id="txtMtoSubTot">'+totCom+'</div>';

                            $('#mtoSubTotal').html(tot);
                            $('#container').html(datos);
                            $('#container').trigger('liszt:updated');
                            break;

                    }
                }
            });
            
        }
 
        function volverPerfilProfesional(rut){

            var URLdomain   = window.location.host;
            var URLprotocol = window.location.protocol;
            var url = URLprotocol+"//"+URLdomain+"/bodyflex/profesional/index.php";
            var form = $('<form action="' + url + '" method="post">' +
            '<input type="text" id="prueba" name="prueba" value="0" />' +
            '<input type="text" id="rutPro" name="rutPro" value="' + rut + '" />' +
            '</form>');

            $('body').append(form);
            form.submit();

        }
 
 
    </script>
    <style>

        #container {
            
            margin-left: 60px;
            margin-right: 60px;
            text-align:center;
            height: 400px; 
            width: 980px; 
            overflow-y: scroll;
            
        }

        #imagen {
            
            float:left;
            width: 16%;
            height:100px;        
            border-style: groove; 
            border-color: black;
            
        }

        #descripcion {
            
            display: inline-block;
            float:left;
            margin-left: 5px;
            margin-right: 5px;
            width: 40%;
            height:100px; 
            border-style: groove; 
            border-color: grey;

        }
        
        #precio {
            
            display: inline-block;
            float:left;
            margin-left: 5px;
            margin-right: 5px;
            width: 8%;
            height:100px; 
            border-style: groove; 
            border-color: grey;
                        
        }

        #cantidad {
            
            display: inline-block;
            float:left;
            width: 10%;
            height:100px; 
            margin-left: 5px;
            margin-right: 5px;
            border-style: groove; 
            border-color: grey;
            
        }
        
        #total {
            
            display: inline-block;
            float:left;
            margin-left: 5px;
            margin-right: 5px;
            width: 10%;
            height:100px; 
            border-style: groove; 
            border-color: grey;
            
        }
        
        #eliminar {
            
            display: inline-block;
            float:left;
            margin-left: 5px;
            margin-right: 5px;
            width: 8%;
            height:100px; 
            border-style: groove; 
            border-color: grey;
            
        }
        
        #main{
            
            height: 580px; 
            
        }
        
        .imgProducto {
            
            max-width: 100%;
            max-height: 100%;
                        
        }

        #marca{
            margin-top: 5px; 
            color: black;
        }
        
        #detalle{
            
            font-family: Helvetica, Georgia, Arial, Garamond; color: black; 
            font-size: 16px; 
            font-weight: bold;
            
        }
        
        #txtSubTot{
            
            font-family: Helvetica, Georgia, Arial, Garamond; color: black; 
            font-size: 26px; 
            font-weight: bold;
            text-align: center;
            color: #323e41;
            margin-top: 5px;
            
        }
        
        #txtMtoSubTot{
            
            font-family: Helvetica, Georgia, Arial, Garamond; color: black; 
            font-size: 26px; 
            font-weight: bold;
            text-align: center;
            color: #323e41;
            margin-top: 5px;
            
        }
        
        #mtoSubTotal {
            
            display: inline-block;
            float:left;
            width: 150px;
            height:60px; 
            margin-left: 5px;
            margin-right: 5px;
            
        }
       
        #codProducto{
            
            font-weight: bold; 
            font-family: Helvetica, Georgia, Arial, Garamond;
            
        }
        
        #monPro{

            font-weight: bold; 
            font-size: 16px; 
            color: black; 
            text-align: center;
            margin-top: 30px;
    
        }
        
        .monTot{

            font-weight: bold; 
            font-size: 18px; 
            color: red; 
            text-align: center;
            margin-top: 30px;
    
        }
        
/*        #items{
            
            width: 40px; 
            text-align: center; 
            font-weight: bold; 
            font-size: 16px;
            
            border-style: solid;
            border-color: red;
            
        }*/
        
/*        .items{
            
            width: 40px; 
            text-align: center; 
            font-weight: bold; 
            font-size: 16px;
            
            border-style: solid;
            border-color: blue;
            
        }*/
        
        
        #divBtnComprar {
            
            display: inline-block;
            float:left;
            width: 200px; 
            height: 60px; 
            margin-left: 5px;
            margin-right: 5px;
            
        }
        
                
        #btnComprar{
            
            padding-left: 5px; 
            padding-right: 5px; 
            text-align: center; 
            margin-left: 15px; 
            margin-right: 15px;
            width: 160px; 
            height: 50px;
            font-size: 18px;
            
        }
        
        #palSubTotal {
            
            display: inline-block;
            float:left;
            width: 150px;
            height:60px; 
            margin-left: 5px;
            margin-right: 5px;
            
        }
        
        #btnWar{
                   
            display: inline-block;
            float:left;
            width: 150px;
            height:40px; 
            margin-top: 20px;
            margin-left: 450px;
                        
        }
        
        #rsmCompra1{
            height: 90px; 
            width: 975px; 
            margin-left: 60px;
            border-style: solid;
        }
        
        #rsmCompra2{
            margin-top: 15px; 
            margin-left: 230px;
        }
        
        #calProfesional{
            font-size: 22px;
            font-family: Helvetica, Georgia, Arial, Garamond;
            color:  white;
            cursor: pointer;
            text-align: left;
            margin-left: 300px;
        }
        
        #nomProfesional{
            font-size: 22px;
            font-family: Helvetica, Georgia, Arial, Garamond;
            color: #FFCC00;
            cursor: pointer;
            text-align: left;
        }
        #page-title{
            margin-bottom: 15px;
        }
        
    </style>
</head>
<body class="">
    <?php include("../../modulos/mobile_bar.php"); ?>
    <div id="page">
        <?php include("../modulos/menu.php"); ?>

        <div id="page-title" style="height: 130px;">
            <div class="container">
                <h2>Carro de Compras</h2>
            </div>
            <h3 onclick="volverPerfilProfesional(<?= $rutPro; ?>);" id="calProfesional">Profesional:&nbsp;&nbsp;
                <span id="nomProfesional">Francisco Javier Calderón Navarro</span>
                &nbsp;&nbsp;<i class="fa fa-reply fa-lg"></i>
            </h3>
        </div>
        
        <main id="main" class="container">        
           
            <div id="container"></div>
            
            <br>
            
            <div id="rsmCompra1">
                <div id="rsmCompra2">
                    <div id="palSubTotal"><div id="txtSubTot">SUBTOTAL</div></div>                      
                    <div id="mtoSubTotal"><div id="txtMtoSubTot"></div></div>
                     <div id="divBtnComprar">
                        <button id="btnComprar" type="button">Comprar</button>        
                    </div>
                </div>    
            </div> 
            <div id="warning-Carro" style="text-align:center; border-color: #FFCC00; border-style: solid; display: none;" class="alert alert-block"></div>
            <div id="warning-btn-Carro" style="display: none;"><button onclick="volverPerfilProfesional(<?= $rutPro; ?>);" id="btnWar" type="button">Volver</button></div>
            
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


    <!--    sweetalert-master-->
    <script src="../sweetalert-master/dist/sweetalert.min.js"></script>
    <link rel="stylesheet" type="text/css" href="../sweetalert-master/dist/sweetalert.css">


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
        
    session_id<input type="text" id="session_id" value= "<?= session_id();?>"><br>
    sesion<input type="text" id="sesion" value= "<?= $_SESSION['sesion'];?>" ><br>
    rutPro<input type="text" id="rutPro" value= "<?= $rutPro; ?>"><br> 
    
    <!-- Datos sesion ================================= -->
    
</body>
</html>