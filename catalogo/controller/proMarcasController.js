                                                        
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
            url: URLprotocol+"//"+URLdomain+"/bodyflex/catalogo/model/proMarcasModel.php",
            type:  'post',
            datetype: 'xml',
            async: false,
            cache: false,
        beforeSend: function(){
            $("#espera_marcas").show();
        },
        success:  function(xml){

            //alert('proMarcasModel '+xml);
            
            $("#espera_marcas").hide();
            var xmlDoc = $.parseXML(xml), $xml = $(xmlDoc);
            var codErr = xmlDoc.getElementsByTagName('CODERROR')[0].childNodes[0].nodeValue;
            var desErr = xmlDoc.getElementsByTagName('DESERROR')[0].childNodes[0].nodeValue;

            switch(codErr){
                case "9":

                    var msg='<div style="text-align:center;" class="alert alert-block">';
                    msg+='<b><span style="color: black;">' + '[' + codErr + '] ' + desErr + '</span></b>';
                    msg+='</div>';

                    $('#msgMarca').html(msg);
                    $('#msgMarca').show();

                    break;

                case "8":

                    var msg='<div style="text-align:center;" class="alert alert-block">';
                    msg+='<b><span style="color: black;">' + '[' + codErr + '] ' + desErr + '</span></b>';
                    msg+='</div>';

                    $('#msgMarca').html(msg);
                    $('#msgMarca').show();

                    break;

                case "99":

                    var msg='<div style="text-align:center;" class="alert alert-block">';
                    msg+='<b><span style="color: black;">' + '[' + codErr + '] ' + desErr + '</span></b>';
                    msg+='</div>';

                    $('#msgMarca').html(msg);
                    $('#msgMarca').show();

                    break;

                case "100":

                    var msg='<div style="text-align:center;" class="alert alert-block">';
                    msg+='<b><span style="color: black;">' + '[' + codErr + '] ' + desErr + '</span></b>';
                    msg+='</div>';

                    $('#msgMarca').html(msg);
                    $('#msgMarca').show();

                    break;    

                case "98":

                    var msg='<div style="text-align:center;" class="alert alert-block">';
                    msg+='<button type="button" class="close" data-dismiss="alert">×</button>';
                    msg+='<b><span style="color: black;">' + '[' + codErr + '] ' + desErr + '</span></b>';
                    msg+='</div>';

                    $('#msgMarca').html(msg);
                    $('#msgMarca').show();
                    break;

                default:

                    var dato = xmlDoc.getElementsByTagName('DATO')[0].childNodes[0].nodeValue;                    
                    
                    //alert(dato);
                    
                    $('#collapseBrand').html(dato);
                    $('#collapseBrand').trigger('liszt:updated');

                    $('.marcasCat').iCheck({
                        checkboxClass: 'icheckbox_square-green iCheck-margin'
                    });            

                    break;
                    
            }
        }
    });
        
    $('.marcasCat').on('ifChecked', function(event){
        
        var marcas='';
        var elem=0;
        var cont=0;
        
        $('#marcas').val('');
        $(".marcasCat").each(function(){
            if($(this).is(':checked')){elem+=1;}
        });
        $(".marcasCat").each(function(){
            if($(this).is(':checked')){
                cont+=1;
                if(cont!=elem){
                    marcas+=$(this).attr("id")+',';
                }else{
                    marcas+=$(this).attr("id");
                }
            }
        });
        
        $('#marcas').val(marcas);
        if(consultaProductos){
            consultarProductosCatalogo($('#ultimo').val(), $('#pa').val());
        }
    });
    
    $('.marcasCat').on('ifUnchecked', function(event){

        var marcas = '';
        var elem=0;
        var cont=0;
        
        $('#marcas').val('');
        $(".marcasCat").each(function(){
            if($(this).is(':checked')){elem+=1;}
        });
        
        $(".marcasCat").each(function(){
            if($(this).is(':checked')){
                cont+=1;
                if(cont!=elem){
                    marcas+=$(this).attr("id")+',';
                }else{
                    marcas+=$(this).attr("id");
                }
            }
        });
        $('#marcas').val(marcas);
        if(consultaProductos){
            consultarProductosCatalogo($('#ultimo').val(), $('#pa').val());
        }    
    });
    
    var consultaProductos=true;
    $('#cleanMarcas').on('click', function(event){
        consultaProductos=false; //para evitar consulta para evento "uncheck"
        $(".marcasCat").each(function(){
            $('.marcasCat').iCheck('uncheck'); 
        });
        consultaProductos=true;
        $('#marcas').val('');
        consultarProductosCatalogo($('#ultimo').val(), $('#pa').val());
       
    });
    
});
