
jQuery(document).ready(function() {

    var URLdomain   = window.location.host;
    var URLprotocol = window.location.protocol;
    var elementos='';
    
    //AJAX
    $.ajax({
            url: URLprotocol+"//"+URLdomain+"/bodyflex/catalogo/model/slider1CsuModel.php",
            type:  'post',
            datetype: 'xml',
            async: true,
        success:  function(xml){

            //alert('slider1CsuModel '+xml);

            var xmlDoc = $.parseXML(xml), $xml = $(xmlDoc);
            var codErr = xmlDoc.getElementsByTagName('CODERROR')[0].childNodes[0].nodeValue;
            var desErr = xmlDoc.getElementsByTagName('DESERROR')[0].childNodes[0].nodeValue;

            //codErr="98";

            switch(codErr){
                case "9":

                    var msg='<div style="text-align:center; height: 600px;" class="alert alert-danger">';
                    msg+='<button type="button" class="close" data-dismiss="alert">×</button>';
                    msg+='<div style="color: black; margin-top: 250px;"><b><span>' + '[' + codErr + '] ' + desErr + '</span></b></div>';
                    msg+='</div>';

                    $("#S1").html(msg).trigger('liszt:updated');;
                    break;

                case "8":

                    var msg='<div style="text-align:center; height: 600px;" class="alert alert-danger">';
                    msg+='<button type="button" class="close" data-dismiss="alert">×</button>';
                    msg+='<div style="color: black; margin-top: 250px;"><b><span>' + '[' + codErr + '] ' + desErr + '</span></b></div>';
                    msg+='</div>';

                    $("#S1").html(msg).trigger('liszt:updated');;
                    break;

                case "99":

                    var msg='<div style="text-align:center; height: 600px;" class="alert alert-danger">';
                    msg+='<button type="button" class="close" data-dismiss="alert">×</button>';
                    msg+='<div style="color: black; margin-top: 250px;"><b><span>' + '[' + codErr + '] ' + desErr + '</span></b></div>';
                    msg+='</div>';

                    $("#S1").html(msg).trigger('liszt:updated');;
                    break;

                case "100":

                    var msg='<div style="text-align:center; height: 600px;" class="alert alert-danger">';
                    msg+='<button type="button" class="close" data-dismiss="alert">×</button>';
                    msg+='<div style="color: black; margin-top: 250px;"><b><span>' + '[' + codErr + '] ' + desErr + '</span></b></div>';
                    msg+='</div>';

                    $("#S1").html(msg).trigger('liszt:updated');;
                    break;    

                case "98":

                    var msg='<div style="text-align:center; height: 600px;" class="alert alert-danger">';
                    msg+='<button type="button" class="close" data-dismiss="alert">×</button>';
                    msg+='<div style="color: black; margin-top: 250px;"><b><span>' + '[' + codErr + '] ' + desErr + '</span></b></div>';
                    msg+='</div>';

                    $("#S1").html(msg).trigger('liszt:updated');;
                    break;
                    
                case "97":

                    var msg='<div style="text-align:center; height: 600px;" class="alert alert-danger">';
                    msg+='<button type="button" class="close" data-dismiss="alert">×</button>';
                    msg+='<div style="color: black; margin-top: 250px;"><b><span>' + '[' + codErr + '] ' + desErr + '</span></b></div>';
                    msg+='</div>';

                    $("#S1").html(msg).trigger('liszt:updated');;
                    break;    

                default:

                    var datos = xmlDoc.getElementsByTagName('DATO')[0].childNodes[0].nodeValue;
                    $("#S1").html(datos).trigger('liszt:updated');;
                    break;
            }
        }
    });

    //AJAX
    $.ajax({
            url: URLprotocol+"//"+URLdomain+"/bodyflex/catalogo/model/slider2CsuModel.php",
            type:  'post',
            datetype: 'xml',
            async: true,
        beforeSend: function(){
            $("#espera").show();
        },
        success:  function(xml){

            //alert('slider2CsuModel '+ xml);

            var xmlDoc = $.parseXML(xml), $xml = $(xmlDoc);
            var codErr = xmlDoc.getElementsByTagName('CODERROR')[0].childNodes[0].nodeValue;
            var desErr = xmlDoc.getElementsByTagName('DESERROR')[0].childNodes[0].nodeValue;

            //codErr="98";

            switch(codErr){
                case "9":

                    var msg='<div style="text-align:center; height: 600px;" class="alert alert-danger">';
                    msg+='<button type="button" class="close" data-dismiss="alert">×</button>';
                    msg+='<div style="color: black; margin-top: 250px;"><b><span>' + '[' + codErr + '] ' + desErr + '</span></b></div>';
                    msg+='</div>';

                    $("#S2").html(msg).trigger('liszt:updated');;
                    break;

                case "8":

                    var msg='<div style="text-align:center; height: 600px;" class="alert alert-danger">';
                    msg+='<button type="button" class="close" data-dismiss="alert">×</button>';
                    msg+='<div style="color: black; margin-top: 250px;"><b><span>' + '[' + codErr + '] ' + desErr + '</span></b></div>';
                    msg+='</div>';

                    $("#S2").html(msg).trigger('liszt:updated');;
                    break;

                case "99":

                    var msg='<div style="text-align:center; height: 600px;" class="alert alert-danger">';
                    msg+='<button type="button" class="close" data-dismiss="alert">×</button>';
                    msg+='<div style="color: black; margin-top: 250px;"><b><span>' + '[' + codErr + '] ' + desErr + '</span></b></div>';
                    msg+='</div>';

                    $("#S2").html(msg).trigger('liszt:updated');;
                    break;

                case "100":

                    var msg='<div style="text-align:center; height: 600px;" class="alert alert-danger">';
                    msg+='<button type="button" class="close" data-dismiss="alert">×</button>';
                    msg+='<div style="color: black; margin-top: 250px;"><b><span>' + '[' + codErr + '] ' + desErr + '</span></b></div>';
                    msg+='</div>';

                    $("#S2").html(msg).trigger('liszt:updated');;
                    break;

                case "98":

                    var msg='<div style="text-align:center; height: 600px;" class="alert alert-danger">';
                    msg+='<button type="button" class="close" data-dismiss="alert">×</button>';
                    msg+='<div style="color: black; margin-top: 250px;"><b><span>' + '[' + codErr + '] ' + desErr + '</span></b></div>';
                    msg+='</div>';

                    $("#S2").html(msg).trigger('liszt:updated');;
                    break;

                case "97":

                    var msg='<div style="text-align:center; height: 600px;" class="alert alert-danger">';
                    msg+='<button type="button" class="close" data-dismiss="alert">×</button>';
                    msg+='<div style="color: black; margin-top: 250px;"><b><span>' + '[' + codErr + '] ' + desErr + '</span></b></div>';
                    msg+='</div>';

                    $("#S2").html(msg).trigger('liszt:updated');;
                    break;        

                default:

                    var datos = xmlDoc.getElementsByTagName('DATO')[0].childNodes[0].nodeValue;
                    $("#S2").html(datos).trigger('liszt:updated');
                    break;
            }
        }
    });
    
    //AJAX
    $.ajax({
            url: URLprotocol+"//"+URLdomain+"/bodyflex/catalogo/model/slider3CsuModel.php",
            type:  'post',
            datetype: 'xml',
            async: true,
        beforeSend: function(){
            $("#espera").show();
        },
        success:  function(xml){

            //alert('slider3CsuModel '+xml);

            var xmlDoc = $.parseXML(xml), $xml = $(xmlDoc);
            var codErr = xmlDoc.getElementsByTagName('CODERROR')[0].childNodes[0].nodeValue;
            var desErr = xmlDoc.getElementsByTagName('DESERROR')[0].childNodes[0].nodeValue;

            //codErr="98";

            switch(codErr){
                case "9":

                    var msg='<div style="text-align:center; height: 600px;" class="alert alert-danger">';
                    msg+='<button type="button" class="close" data-dismiss="alert">×</button>';
                    msg+='<div style="color: black; margin-top: 250px;"><b><span>' + '[' + codErr + '] ' + desErr + '</span></b></div>';
                    msg+='</div>';

                    $("#S3").html(msg).trigger('liszt:updated');;
                    break;

                case "8":

                    var msg='<div style="text-align:center; height: 600px;" class="alert alert-danger">';
                    msg+='<button type="button" class="close" data-dismiss="alert">×</button>';
                    msg+='<div style="color: black; margin-top: 250px;"><b><span>' + '[' + codErr + '] ' + desErr + '</span></b></div>';
                    msg+='</div>';

                    $("#S3").html(msg).trigger('liszt:updated');;
                    break;

                case "99":

                    var msg='<div style="text-align:center; height: 600px;" class="alert alert-danger">';
                    msg+='<button type="button" class="close" data-dismiss="alert">×</button>';
                    msg+='<div style="color: black; margin-top: 250px;"><b><span>' + '[' + codErr + '] ' + desErr + '</span></b></div>';
                    msg+='</div>';

                    $("#S3").html(msg).trigger('liszt:updated');;
                    break;

                case "100":

                    var msg='<div style="text-align:center; height: 600px;" class="alert alert-danger">';
                    msg+='<button type="button" class="close" data-dismiss="alert">×</button>';
                    msg+='<div style="color: black; margin-top: 250px;"><b><span>' + '[' + codErr + '] ' + desErr + '</span></b></div>';
                    msg+='</div>';

                    $("#S3").html(msg).trigger('liszt:updated');;
                    break;

                case "98":

                    var msg='<div style="text-align:center; height: 600px;" class="alert alert-danger">';
                    msg+='<button type="button" class="close" data-dismiss="alert">×</button>';
                    msg+='<div style="color: black; margin-top: 250px;"><b><span>' + '[' + codErr + '] ' + desErr + '</span></b></div>';
                    msg+='</div>';

                    $("#S3").html(msg).trigger('liszt:updated');;
                    break;

                case "97":

                    var msg='<div style="text-align:center; height: 600px;" class="alert alert-danger">';
                    msg+='<button type="button" class="close" data-dismiss="alert">×</button>';
                    msg+='<div style="color: black; margin-top: 250px;"><b><span>' + '[' + codErr + '] ' + desErr + '</span></b></div>';
                    msg+='</div>';

                    $("#S3").html(msg).trigger('liszt:updated');;
                    break;        

                default:

                    var datos = xmlDoc.getElementsByTagName('DATO')[0].childNodes[0].nodeValue;
                    $("#S3").html(datos).trigger('liszt:updated');
                    break;
            }
        }
    });
    
    //AJAX
    $.ajax({
            url: URLprotocol+"//"+URLdomain+"/bodyflex/catalogo/model/slider4CsuModel.php",
            type:  'post',
            datetype: 'xml',
            async: true,
        beforeSend: function(){
            $("#espera").show();
        },
        success:  function(xml){

           //alert('slider4CsuModel '+xml);

            var xmlDoc = $.parseXML(xml), $xml = $(xmlDoc);
            var codErr = xmlDoc.getElementsByTagName('CODERROR')[0].childNodes[0].nodeValue;
            var desErr = xmlDoc.getElementsByTagName('DESERROR')[0].childNodes[0].nodeValue;

            //codErr="98";

            switch(codErr){
                case "9":

                    var msg='<div style="text-align:center; height: 600px;" class="alert alert-danger">';
                    msg+='<button type="button" class="close" data-dismiss="alert">×</button>';
                    msg+='<div style="color: black; margin-top: 250px;"><b><span>' + '[' + codErr + '] ' + desErr + '</span></b></div>';
                    msg+='</div>';

                    $("#S4").html(msg).trigger('liszt:updated');;
                    break;

                case "8":

                    var msg='<div style="text-align:center; height: 600px;" class="alert alert-danger">';
                    msg+='<button type="button" class="close" data-dismiss="alert">×</button>';
                    msg+='<div style="color: black; margin-top: 250px;"><b><span>' + '[' + codErr + '] ' + desErr + '</span></b></div>';
                    msg+='</div>';

                    $("#S4").html(msg).trigger('liszt:updated');;
                    break;

                case "99":

                    var msg='<div style="text-align:center; height: 600px;" class="alert alert-danger">';
                    msg+='<button type="button" class="close" data-dismiss="alert">×</button>';
                    msg+='<div style="color: black; margin-top: 250px;"><b><span>' + '[' + codErr + '] ' + desErr + '</span></b></div>';
                    msg+='</div>';

                    $("#S4").html(msg).trigger('liszt:updated');;
                    break;

                case "100":

                    var msg='<div style="text-align:center; height: 600px;" class="alert alert-danger">';
                    msg+='<button type="button" class="close" data-dismiss="alert">×</button>';
                    msg+='<div style="color: black; margin-top: 250px;"><b><span>' + '[' + codErr + '] ' + desErr + '</span></b></div>';
                    msg+='</div>';

                    $("#S4").html(msg).trigger('liszt:updated');;
                    break;

                case "98":

                    var msg='<div style="text-align:center; height: 600px;" class="alert alert-danger">';
                    msg+='<button type="button" class="close" data-dismiss="alert">×</button>';
                    msg+='<div style="color: black; margin-top: 250px;"><b><span>' + '[' + codErr + '] ' + desErr + '</span></b></div>';
                    msg+='</div>';

                    $("#S4").html(msg).trigger('liszt:updated');;
                    break;
                    
                case "97":

                    var msg='<div style="text-align:center; height: 600px;" class="alert alert-danger">';
                    msg+='<button type="button" class="close" data-dismiss="alert">×</button>';
                    msg+='<div style="color: black; margin-top: 250px;"><b><span>' + '[' + codErr + '] ' + desErr + '</span></b></div>';
                    msg+='</div>';

                    $("#S4").html(msg).trigger('liszt:updated');;
                    break;     
                
                default:

                    var datos = xmlDoc.getElementsByTagName('DATO')[0].childNodes[0].nodeValue;
                    $("#S4").html(datos).trigger('liszt:updated');
                    break;
            }
        }
    });
    
    //AJAX
    $.ajax({
            url: URLprotocol+"//"+URLdomain+"/bodyflex/catalogo/model/slider5CsuModel.php",
            type:  'post',
            datetype: 'xml',
            async: true,
        beforeSend: function(){
            $("#espera").show();
        },
        success:  function(xml){

            //alert('slider5CsuModel '+xml);

            var xmlDoc = $.parseXML(xml), $xml = $(xmlDoc);
            var codErr = xmlDoc.getElementsByTagName('CODERROR')[0].childNodes[0].nodeValue;
            var desErr = xmlDoc.getElementsByTagName('DESERROR')[0].childNodes[0].nodeValue;

            //codErr="98";

            switch(codErr){
                case "9":

                    var msg='<div style="text-align:center; height: 600px;" class="alert alert-danger">';
                    msg+='<button type="button" class="close" data-dismiss="alert">×</button>';
                    msg+='<div style="color: black; margin-top: 250px;"><b><span>' + '[' + codErr + '] ' + desErr + '</span></b></div>';
                    msg+='</div>';

                    $("#S5").html(msg).trigger('liszt:updated');;
                    break;

                case "8":

                    var msg='<div style="text-align:center; height: 600px;" class="alert alert-danger">';
                    msg+='<button type="button" class="close" data-dismiss="alert">×</button>';
                    msg+='<div style="color: black; margin-top: 250px;"><b><span>' + '[' + codErr + '] ' + desErr + '</span></b></div>';
                    msg+='</div>';

                    $("#S5").html(msg).trigger('liszt:updated');;
                    break;

                case "99":

                    var msg='<div style="text-align:center; height: 600px;" class="alert alert-danger">';
                    msg+='<button type="button" class="close" data-dismiss="alert">×</button>';
                    msg+='<div style="color: black; margin-top: 250px;"><b><span>' + '[' + codErr + '] ' + desErr + '</span></b></div>';
                    msg+='</div>';

                    $("#S5").html(msg).trigger('liszt:updated');;
                    break;

                case "100":

                    var msg='<div style="text-align:center; height: 600px;" class="alert alert-danger">';
                    msg+='<button type="button" class="close" data-dismiss="alert">×</button>';
                    msg+='<div style="color: black; margin-top: 250px;"><b><span>' + '[' + codErr + '] ' + desErr + '</span></b></div>';
                    msg+='</div>';

                    $("#S5").html(msg).trigger('liszt:updated');;
                    break;

                case "98":

                    var msg='<div style="text-align:center; height: 600px;" class="alert alert-danger">';
                    msg+='<button type="button" class="close" data-dismiss="alert">×</button>';
                    msg+='<div style="color: black; margin-top: 250px;"><b><span>' + '[' + codErr + '] ' + desErr + '</span></b></div>';
                    msg+='</div>';

                    $("#S5").html(msg).trigger('liszt:updated');;
                    break;

                case "97":

                    var msg='<div style="text-align:center; height: 600px;" class="alert alert-danger">';
                    msg+='<button type="button" class="close" data-dismiss="alert">×</button>';
                    msg+='<div style="color: black; margin-top: 250px;"><b><span>' + '[' + codErr + '] ' + desErr + '</span></b></div>';
                    msg+='</div>';

                    $("#S5").html(msg).trigger('liszt:updated');;
                    break;        

                default:

                    var datos = xmlDoc.getElementsByTagName('DATO')[0].childNodes[0].nodeValue;
                    
                    //alert(datos);
                    
                    $("#S5").html(datos).trigger('liszt:updated');
                    break;
            }
        }
    });
    
    //AJAX
    $.ajax({
            url: URLprotocol+"//"+URLdomain+"/bodyflex/catalogo/model/slider6CsuModel.php",
            type:  'post',
            datetype: 'xml',
            async: true,
        beforeSend: function(){
            $("#espera").show();
        },
        success:  function(xml){

            //alert('slider6CsuModel '+xml);

            var xmlDoc = $.parseXML(xml), $xml = $(xmlDoc);
            var codErr = xmlDoc.getElementsByTagName('CODERROR')[0].childNodes[0].nodeValue;
            var desErr = xmlDoc.getElementsByTagName('DESERROR')[0].childNodes[0].nodeValue;

            //codErr="98";

            switch(codErr){
                case "9":

                    var msg='<div style="text-align:center; height: 600px;" class="alert alert-danger">';
                    msg+='<button type="button" class="close" data-dismiss="alert">×</button>';
                    msg+='<div style="color: black; margin-top: 250px;"><b><span>' + '[' + codErr + '] ' + desErr + '</span></b></div>';
                    msg+='</div>';

                    $("#S6").html(msg).trigger('liszt:updated');;
                    break;

                case "8":

                    var msg='<div style="text-align:center; height: 600px;" class="alert alert-danger">';
                    msg+='<button type="button" class="close" data-dismiss="alert">×</button>';
                    msg+='<div style="color: black; margin-top: 250px;"><b><span>' + '[' + codErr + '] ' + desErr + '</span></b></div>';
                    msg+='</div>';

                    $("#S6").html(msg).trigger('liszt:updated');;
                    break;

                case "99":

                    var msg='<div style="text-align:center; height: 600px;" class="alert alert-danger">';
                    msg+='<button type="button" class="close" data-dismiss="alert">×</button>';
                    msg+='<div style="color: black; margin-top: 250px;"><b><span>' + '[' + codErr + '] ' + desErr + '</span></b></div>';
                    msg+='</div>';

                    $("#S6").html(msg).trigger('liszt:updated');;
                    break;

                case "100":

                    var msg='<div style="text-align:center; height: 600px;" class="alert alert-danger">';
                    msg+='<button type="button" class="close" data-dismiss="alert">×</button>';
                    msg+='<div style="color: black; margin-top: 250px;"><b><span>' + '[' + codErr + '] ' + desErr + '</span></b></div>';
                    msg+='</div>';

                    $("#S6").html(msg).trigger('liszt:updated');;
                    break;

                case "98":

                    var msg='<div style="text-align:center; height: 600px;" class="alert alert-danger">';
                    msg+='<button type="button" class="close" data-dismiss="alert">×</button>';
                    msg+='<div style="color: black; margin-top: 250px;"><b><span>' + '[' + codErr + '] ' + desErr + '</span></b></div>';
                    msg+='</div>';

                    $("#S6").html(msg).trigger('liszt:updated');;
                    break;

                default:

                    var datos = xmlDoc.getElementsByTagName('DATO')[0].childNodes[0].nodeValue;
                    $("#S6").html(datos).trigger('liszt:updated');
                    break;
            }
        }
    });
    
    //AJAX
    $.ajax({
            url: URLprotocol+"//"+URLdomain+"/bodyflex/catalogo/model/slider7CsuModel.php",
            type:  'post',
            datetype: 'xml',
            async: true,
        beforeSend: function(){
            $("#espera").show();
        },
        success:  function(xml){

            //alert('slider7CsuModel '+xml);

            var xmlDoc = $.parseXML(xml), $xml = $(xmlDoc);
            var codErr = xmlDoc.getElementsByTagName('CODERROR')[0].childNodes[0].nodeValue;
            var desErr = xmlDoc.getElementsByTagName('DESERROR')[0].childNodes[0].nodeValue;

            //codErr="98";

            switch(codErr){
                case "9":

                    var msg='<div style="text-align:center; height: 600px;" class="alert alert-danger">';
                    msg+='<button type="button" class="close" data-dismiss="alert">×</button>';
                    msg+='<div style="color: black; margin-top: 250px;"><b><span>' + '[' + codErr + '] ' + desErr + '</span></b></div>';
                    msg+='</div>';

                    $("#S7").html(msg).trigger('liszt:updated');;
                    break;

                case "8":

                    var msg='<div style="text-align:center; height: 600px;" class="alert alert-danger">';
                    msg+='<button type="button" class="close" data-dismiss="alert">×</button>';
                    msg+='<div style="color: black; margin-top: 250px;"><b><span>' + '[' + codErr + '] ' + desErr + '</span></b></div>';
                    msg+='</div>';

                    $("#S7").html(msg).trigger('liszt:updated');;
                    break;

                case "99":

                    var msg='<div style="text-align:center; height: 600px;" class="alert alert-danger">';
                    msg+='<button type="button" class="close" data-dismiss="alert">×</button>';
                    msg+='<div style="color: black; margin-top: 250px;"><b><span>' + '[' + codErr + '] ' + desErr + '</span></b></div>';
                    msg+='</div>';

                    $("#S7").html(msg).trigger('liszt:updated');;
                    break;

                case "100":

                    var msg='<div style="text-align:center; height: 600px;" class="alert alert-danger">';
                    msg+='<button type="button" class="close" data-dismiss="alert">×</button>';
                    msg+='<div style="color: black; margin-top: 250px;"><b><span>' + '[' + codErr + '] ' + desErr + '</span></b></div>';
                    msg+='</div>';

                    $("#S7").html(msg).trigger('liszt:updated');;
                    break;

                case "98":

                    var msg='<div style="text-align:center; height: 600px;" class="alert alert-danger">';
                    msg+='<button type="button" class="close" data-dismiss="alert">×</button>';
                    msg+='<div style="color: black; margin-top: 250px;"><b><span>' + '[' + codErr + '] ' + desErr + '</span></b></div>';
                    msg+='</div>';

                    $("#S7").html(msg).trigger('liszt:updated');;
                    break;

                default:

                    var datos = xmlDoc.getElementsByTagName('DATO')[0].childNodes[0].nodeValue;
                    $("#S7").html(datos).trigger('liszt:updated');
                    break;
            }
        }
    });
    
    crearSwiper(); 

    //CONTROLADOR DE EVENTOS EN SLIDER
//    $(document).on("click", ".box-slider-content", function(event){        
//        
//        var url=$(this).attr('url');
//        var id=$(this).attr('id');
//                
//        url=URLprotocol+"//"+URLdomain+url;
//
//        if(id!=0){
//            var form = $('<form action="' + url + '" method="post" target="_self">' +
//                '<input type="hidden" id="id" name="id" value="' + id + '" />' +
//                '</form>');
//            $('body').append(form);
//            form.submit();
//        }
//        
//    });
    
//    $(document).on("click", ".btn-stroke-light", function(event){    
//        
//        var url=$(this).attr('url');
//        var id=$(this).attr('id');
//                
//        url=URLprotocol+"//"+URLdomain+url;
//
//        if(id!=0){
//            var form = $('<form action="' + url + '" method="post" target="_self">' +
//                '<input type="hidden" id="id" name="id" value="' + id + '" />' +
//                '</form>');
//            $('body').append(form);
//            form.submit();
//        }
//        
//    });
    
     
 });
 
 
 var formatNumber = {
 separador: ".", // separador para los miles
 sepDecimal: ',', // separador para los decimales
 formatear:function (num){
  num +='';
  var splitStr = num.split('.');
  var splitLeft = splitStr[0];
  var splitRight = splitStr.length > 1 ? this.sepDecimal + splitStr[1] : '';
  var regx = /(\d+)(\d{3})/;
  while (regx.test(splitLeft)) {
  splitLeft = splitLeft.replace(regx, '$1' + this.separador + '$2');
  }
  return this.simbol + splitLeft  +splitRight;
 },
 new:function(num, simbol){
  this.simbol = simbol ||'';
  return this.formatear(num);
 }
 
};


