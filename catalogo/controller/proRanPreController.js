jQuery(document).ready(function() {

//alert('proRanPreController');

    var URLdomain   = window.location.host;
    var URLprotocol = window.location.protocol;
    var parametros = { 
                        "coleccion" : $('#idColeccion').val() 
                        ,   "categoria1" : $('#idCat1').val() 
                        ,   "categoria2" : $('#idCat2').val() 
                        ,   "categoria3" : $('#idCat3').val() 
                    };  
 
    $.ajax({
            data:  parametros,
            url: URLprotocol+"//"+URLdomain+"/bodyflex/catalogo/model/proRanPreModel.php",
            type:  'post',
            datetype: 'xml',
            async: false,
            cache: false,
        beforeSend: function(){
            $("#espera_rango").show();
        },
        success:  function(xml){

            //alert('proRanPreModel '+xml);
            
            $("#espera_rango").hide();
            var xmlDoc = $.parseXML(xml), $xml = $(xmlDoc);
            var codErr = xmlDoc.getElementsByTagName('CODERROR')[0].childNodes[0].nodeValue;
            var desErr = xmlDoc.getElementsByTagName('DESERROR')[0].childNodes[0].nodeValue;

            switch(codErr){
                case "9":

                    var msg='<div style="text-align:center;" class="alert alert-block">';
                    msg+='<b><span style="color: black;">' + '[' + codErr + '] ' + desErr + '</span></b>';
                    msg+='</div>';

                    $('#msgRango').html(msg);
                    $('#msgRango').show();

                    break;

                case "8":

                    var msg='<div style="text-align:center;" class="alert alert-block">';
                    msg+='<b><span style="color: black;">' + '[' + codErr + '] ' + desErr + '</span></b>';
                    msg+='</div>';

                    $('#msgRango').html(msg);
                    $('#msgRango').show();

                    break;

                case "99":

                    var msg='<div style="text-align:center;" class="alert alert-block">';
                    msg+='<b><span style="color: black;">' + '[' + codErr + '] ' + desErr + '</span></b>';
                    msg+='</div>';

                    $('#msgRango').html(msg);
                    $('#msgRango').show();

                    break;

                case "100":

                    var msg='<div style="text-align:center;" class="alert alert-block">';
                    msg+='<b><span style="color: black;">' + '[' + codErr + '] ' + desErr + '</span></b>';
                    msg+='</div>';

                    $('#msgRango').html(msg);
                    $('#msgRango').show();

                    break;    

                case "98":

                    var msg='<div style="text-align:center;" class="alert alert-block">';
                    msg+='<button type="button" class="close" data-dismiss="alert">×</button>';
                    msg+='<b><span style="color: black;">' + '[' + codErr + '] ' + desErr + '</span></b>';
                    msg+='</div>';

                    $('#msgRango').html(msg);
                    $('#msgRango').show();
                    break;

                default:

                    var dato = xmlDoc.getElementsByTagName('DATO')[0].childNodes[0].nodeValue;
                    $('#collapsePrice').html(dato);
                    $('#collapsePrice').trigger('liszt:updated');
                    $('.rangoPrecio').iCheck({
                        radioClass: 'iradio_square-green iChk iCheck-margin'
                    });    
                    break;
            }
        }
       
    });
       
    var consultaProductos=true;
    $('.rangoPrecio').on('ifChecked', function(event){
        
        //alert('ifChecked');
        
        var rangos='';
        var elem=0;
        var cont=0;
        
        $(".rangoPrecio").each(function(){
            if($(this).is(':checked')){elem+=1;}
        });
        
        $(".rangoPrecio").each(function(){
            if($(this).is(':checked')){
                cont+=1;
                if(cont!=elem){
                    rangos+=$(this).attr("id")+',';
                }else{
                    rangos+=$(this).attr("id");
                }
            }
        });
        $('#rangos').val(rangos);
        consultarProductosCatalogo($('#ultimo').val(), $('#pa').val());
        
    });
        
    $('#cleanRangos').on('click', function(event){
        
        //alert('label-danger');
        
        consultaProductos=false; //para evitar consulta para evento "uncheck"
        $(".rangoPrecio").each(function(){
            $('.rangoPrecio').iCheck('uncheck'); 
        });
        consultaProductos=true;
        $('#rangos').val('');
        consultarProductosCatalogo($('#ultimo').val(), $('#pa').val());
       
    });
    
});
