
jQuery(document).ready(function() {

    var URLdomain   = window.location.host;
    var URLprotocol = window.location.protocol;
  
   //AJAX
    $.ajax({
            url: URLprotocol+"//"+URLdomain+"/bodyflex/catalogo/model/marcasCsuModel.php",
            type:  'post',
            datetype: 'xml',
            async: true,
        success:  function(xml){

            //alert('marcasCsuModel '+xml);

            var xmlDoc = $.parseXML(xml), $xml = $(xmlDoc);
            var codErr = xmlDoc.getElementsByTagName('CODERROR')[0].childNodes[0].nodeValue;
            var desErr = xmlDoc.getElementsByTagName('DESERROR')[0].childNodes[0].nodeValue;

            switch(codErr){
                case "9":

                    var msg='<div style="text-align:center;" class="alert alert-block">';
                    msg+='<b><span style="color: black;">' + '[' + codErr + '] ' + desErr + '</span></b>';
                    msg+='</div>';

                    $('#marcas').html(msg);
                    $('#marcas').show();

                    break;

                case "8":

                    var msg='<div style="text-align:center;" class="alert alert-block">';
                    msg+='<b><span style="color: black;">' + '[' + codErr + '] ' + desErr + '</span></b>';
                    msg+='</div>';

                    $('#marcas').html(msg);
                    $('#marcas').show();

                    break;

                case "99":

                    var msg='<div style="text-align:center;" class="alert alert-block">';
                    msg+='<b><span style="color: black;">' + '[' + codErr + '] ' + desErr + '</span></b>';
                    msg+='</div>';

                    $('#marcas').html(msg);
                    $('#marcas').show();

                    break;

                case "100":

                    var msg='<div style="text-align:center;" class="alert alert-block">';
                    msg+='<b><span style="color: black;">' + '[' + codErr + '] ' + desErr + '</span></b>';
                    msg+='</div>';

                    $('#marcas').html(msg);
                    $('#marcas').show();

                    break;    

                case "98":

                    var msg='<div style="text-align:center;" class="alert alert-block">';
                    msg+='<button type="button" class="close" data-dismiss="alert">×</button>';
                    msg+='<b><span style="color: black;">' + '[' + codErr + '] ' + desErr + '</span></b>';
                    msg+='</div>';

                    $('#marcas').html(msg);
                    $('#marcas').show();

                    break;

                default:

                    $('#esperaMarcas').hide();
                    var datos = xmlDoc.getElementsByTagName('DATO')[0].childNodes[0].nodeValue;
                    
                    //alert('datos ' + datos);
                    
                    $('#marcas').html(datos).trigger('liszt:updated');
                    break;
                    
            }
        }
    });
    
    var consultaProductos=true;
    $('#cleanMarcas').on('click', function(event){
        consultaProductos=false; //para evitar consulta para evento "uncheck"
        $(".rangoPrecio").each(function(){
            $('.rangoPrecio').iCheck('uncheck'); 
        });
        consultaProductos=true;
        $('#rangos').val('');
        consultarProductosCatalogo($('#ultimo').val(), $('#pa').val());
       
    });
                   
});
 

