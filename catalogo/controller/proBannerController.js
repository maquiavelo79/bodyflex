
jQuery(document).ready(function() {

    var URLdomain   = window.location.host;
    var URLprotocol = window.location.protocol;
  
    //alert('proBannerController ' + $('#idColeccion').val() +'|'+ $('#idCat1').val()+'|'+$('#idCat2').val()+'|'+$('#idCat3').val());
      
    //OBTIENE MENU IZQUIERDO EN BASE A SELECCIÓN
    var parametros = { 
                        "idColeccion" : $('#idColeccion').val() 
                        ,   "idCat1" : ($('#idCat1').val()!=''?$('#idCat1').val():0) 
                        ,   "idCat2" : ($('#idCat2').val()!=''?$('#idCat2').val():0) 
                        ,   "idCat3" : ($('#idCat3').val()!=''?$('#idCat3').val():0) 
                    };  
    $.ajax({
            data:  parametros,
            url: URLprotocol+"//"+URLdomain+"/bodyflex/catalogo/model/proBannerModel.php",
            type:  'post',
            datetype: 'xml',
            async: true,
        beforeSend: function(){
            $("#espera_banner").show();
        },
        success:  function(xml){

            //alert('proColCatModel ' + xml);

            $("#espera_banner").hide();
            var xmlDoc = $.parseXML(xml), $xml = $(xmlDoc);
            var codErr = xmlDoc.getElementsByTagName('CODERROR')[0].childNodes[0].nodeValue;
            var desErr = xmlDoc.getElementsByTagName('DESERROR')[0].childNodes[0].nodeValue;

            switch(codErr){
                case "9":

                    var msg='<div style="text-align:center;" class="alert alert-block">';
                    msg+='<b><span style="color: black;">' + '[' + codErr + '] ' + desErr + '</span></b>';
                    msg+='</div>';

                    $('#msgBanner').html(msg);
                    $('#msgBanner').show();

                    break;

                case "8":

                    var msg='<div style="text-align:center;" class="alert alert-block">';
                    msg+='<b><span style="color: black;">' + '[' + codErr + '] ' + desErr + '</span></b>';
                    msg+='</div>';

                    $('#msgBanner').html(msg);
                    $('#msgBanner').show();

                    break;

                case "99":

                    var msg='<div style="text-align:center;" class="alert alert-block">';
                    msg+='<b><span style="color: black;">' + '[' + codErr + '] ' + desErr + '</span></b>';
                    msg+='</div>';

                    $('#msgBanner').html(msg);
                    $('#msgBanner').show();

                    break;

                case "100":

                    var msg='<div style="text-align:center;" class="alert alert-block">';
                    msg+='<b><span style="color: black;">' + '[' + codErr + '] ' + desErr + '</span></b>';
                    msg+='</div>';

                    $('#msgBanner').html(msg);
                    $('#msgBanner').show();

                    break;    

                case "98":

                    var msg='<div style="text-align:center;" class="alert alert-block">';
                    msg+='<button type="button" class="close" data-dismiss="alert">×</button>';
                    msg+='<b><span style="color: black;">' + '[' + codErr + '] ' + desErr + '</span></b>';
                    msg+='</div>';

                    $('#msgBanner').html(msg);
                    $('#msgBanner').show();
                    break;

                default:

                    var nombre = xmlDoc.getElementsByTagName('NOMBRE')[0].childNodes[0].nodeValue;
                    var img = xmlDoc.getElementsByTagName('IMG')[0].childNodes[0].nodeValue;
                    var htmlBanner='<h2>'+nombre+'</h2><div class="categoryImage"><img src="'+img+'" class="img-responsive" alt="img"></div>';
                    $('#htmlBanner').html(htmlBanner);
                    $('#htmlBanner').show().trigger('liszt:updated');
                    break;
                    
            }
        }
    });
    
});
 
 

