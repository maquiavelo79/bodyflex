
jQuery(document).ready(function() {

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
            url: URLprotocol+"//"+URLdomain+"/bodyflex/catalogo/model/proDctoModel.php",
            type:  'post',
            datetype: 'xml',
            async: false,
            cache: false,
        beforeSend: function(){
            $("#espera_dcto").show();
        },
        success:  function(xml){

            //alert('proColoresModel '+xml);
            
            $("#espera_dcto").hide();
            var xmlDoc = $.parseXML(xml), $xml = $(xmlDoc);
            var codErr = xmlDoc.getElementsByTagName('CODERROR')[0].childNodes[0].nodeValue;
            var desErr = xmlDoc.getElementsByTagName('DESERROR')[0].childNodes[0].nodeValue;

            switch(codErr){
                case "9":

                    var msg='<div style="text-align:center;" class="alert alert-block">';
                    msg+='<b><span style="color: black;">' + '[' + codErr + '] ' + desErr + '</span></b>';
                    msg+='</div>';

                    $('#msgdcto').html(msg);
                    $('#msgdcto').show();

                    break;

                case "8":

                    var msg='<div style="text-align:center;" class="alert alert-block">';
                    msg+='<b><span style="color: black;">' + '[' + codErr + '] ' + desErr + '</span></b>';
                    msg+='</div>';

                    $('#msgdcto').html(msg);
                    $('#msgdcto').show();

                    break;

                case "99":

                    var msg='<div style="text-align:center;" class="alert alert-block">';
                    msg+='<b><span style="color: black;">' + '[' + codErr + '] ' + desErr + '</span></b>';
                    msg+='</div>';

                    $('#msgdcto').html(msg);
                    $('#msgdcto').show();

                    break;

                case "100":

                    var msg='<div style="text-align:center;" class="alert alert-block">';
                    msg+='<b><span style="color: black;">' + '[' + codErr + '] ' + desErr + '</span></b>';
                    msg+='</div>';

                    $('#msgdcto').html(msg);
                    $('#msgdcto').show();

                    break;    

                case "98":

                    var msg='<div style="text-align:center;" class="alert alert-block">';
                    msg+='<button type="button" class="close" data-dismiss="alert">×</button>';
                    msg+='<b><span style="color: black;">' + '[' + codErr + '] ' + desErr + '</span></b>';
                    msg+='</div>';

                    $('#msgdcto').html(msg);
                    $('#msgdcto').show();
                    break;

                default:

                    var dato = xmlDoc.getElementsByTagName('DATO')[0].childNodes[0].nodeValue;
                    var numEti = xmlDoc.getElementsByTagName('ELEMENTOS')[0].childNodes[0].nodeValue;
                    $('#collapseThree').html(dato);
                    $('#collapseThree').trigger('liszt:updated');
                    $('.dctoCat').iCheck({
                        checkboxClass: 'icheckbox_square-green iCheck-margin'
                    }); 
                    break;
                    
            }
        }
    });
    
    $('.dctoCat').on('ifChecked', function(event){
      
        var etiquetas = '';
        var elem=0;
        var cont=0;
        
        $('#etiquetas').val('');
        $(".dctoCat").each(function(){
            if($(this).is(':checked')){elem+=1;}
        });
        
        $(".dctoCat").each(function(){
            if($(this).is(':checked')){
                cont+=1;
                if(cont!=elem){
                    etiquetas+=$(this).attr("id")+',';
                }else{
                    etiquetas+=$(this).attr("id");
                }
            }
        });
        
        $('#etiquetas').val(etiquetas);
        if(consultaProductos){
            consultarProductosCatalogo($('#ultimo').val(), $('#pa').val());
        }    
    });
    
    $('.dctoCat').on('ifUnchecked', function(event){
      
        var etiquetas = '';
        var elem=0;
        var cont=0;
        
        $('#etiquetas').val('');
        $(".dctoCat").each(function(){
            if($(this).is(':checked')){elem+=1;}
        });
        
        $(".dctoCat").each(function(){
            if($(this).is(':checked')){
                cont+=1;
                if(cont!=elem){
                    etiquetas+=$(this).attr("id")+',';
                }else{
                    etiquetas+=$(this).attr("id");
                }
            }
        });
        
        $('#etiquetas').val(etiquetas);
        if(consultaProductos){
            consultarProductosCatalogo($('#ultimo').val(), $('#pa').val());
        }    
    });
    
    var consultaProductos=true;
    $('#cleanEti').on('click', function(event){
        consultaProductos=false; //para evitar consulta para evento "uncheck"
        $(".dctoCat").each(function(){
            $('.dctoCat').iCheck('uncheck'); 
        });
        consultaProductos=true;
        $('#etiquetas').val('');
        consultarProductosCatalogo($('#ultimo').val(), $('#pa').val());
       
    });
    
});
