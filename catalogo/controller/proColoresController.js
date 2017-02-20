
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
            url: URLprotocol+"//"+URLdomain+"/bodyflex/catalogo/model/proColoresModel.php",
            type:  'post',
            datetype: 'xml',
            async: false,
            cache: false,
        beforeSend: function(){
            $("#espera_colores").show();
        },
        success:  function(xml){

            //alert('proColoresModel '+xml);
            
            $("#espera_colores").hide();
            var xmlDoc = $.parseXML(xml), $xml = $(xmlDoc);
            var codErr = xmlDoc.getElementsByTagName('CODERROR')[0].childNodes[0].nodeValue;
            var desErr = xmlDoc.getElementsByTagName('DESERROR')[0].childNodes[0].nodeValue;

            switch(codErr){
                case "9":

                    var msg='<div style="text-align:center;" class="alert alert-block">';
                    msg+='<b><span style="color: black;">' + '[' + codErr + '] ' + desErr + '</span></b>';
                    msg+='</div>';

                    $('#msgColores').html(msg);
                    $('#msgColores').show();

                    break;

                case "8":

                    var msg='<div style="text-align:center;" class="alert alert-block">';
                    msg+='<b><span style="color: black;">' + '[' + codErr + '] ' + desErr + '</span></b>';
                    msg+='</div>';

                    $('#msgColores').html(msg);
                    $('#msgColores').show();

                    break;

                case "99":

                    var msg='<div style="text-align:center;" class="alert alert-block">';
                    msg+='<b><span style="color: black;">' + '[' + codErr + '] ' + desErr + '</span></b>';
                    msg+='</div>';

                    $('#msgColores').html(msg);
                    $('#msgColores').show();

                    break;

                case "100":

                    var msg='<div style="text-align:center;" class="alert alert-block">';
                    msg+='<b><span style="color: black;">' + '[' + codErr + '] ' + desErr + '</span></b>';
                    msg+='</div>';

                    $('#msgColores').html(msg);
                    $('#msgColores').show();

                    break;    

                case "98":

                    var msg='<div style="text-align:center;" class="alert alert-block">';
                    msg+='<button type="button" class="close" data-dismiss="alert">×</button>';
                    msg+='<b><span style="color: black;">' + '[' + codErr + '] ' + desErr + '</span></b>';
                    msg+='</div>';

                    $('#msgColores').html(msg);
                    $('#msgColores').show();
                    break;

                default:

                    var dato = xmlDoc.getElementsByTagName('DATO')[0].childNodes[0].nodeValue;
                    $('#collapseColor').html(dato);
                    $('#collapseColor').trigger('liszt:updated');
                    $('.coloresCat').iCheck({
                        checkboxClass: 'icheckbox_square-green iCheck-margin'
                    });    
                    break;
                    
            }
        }
    });
    
    $('.coloresCat').on('ifChecked', function(event){
        
        var colores = '';
        var elem=0;
        var cont=0;
        
        $('#colores').val('');
        $(".coloresCat").each(function(){
            if($(this).is(':checked')){elem+=1;}
        });
        
        $(".coloresCat").each(function(){
            if($(this).is(':checked')){
                cont+=1;
                if(cont!=elem){
                    colores+=$(this).attr("id")+',';
                }else{
                    colores+=$(this).attr("id");
                }
            }
        });
        $('#colores').val(colores);
        if(consultaProductos){
            consultarProductosCatalogo($('#ultimo').val(), $('#pa').val());
        }
    });
    
    $('.coloresCat').on('ifUnchecked', function(event){

        var colores = '';
        var elem=0;
        var cont=0;
        
        $('#colores').val('');
        $(".coloresCat").each(function(){
            if($(this).is(':checked')){elem+=1;}
        });
        
        $(".coloresCat").each(function(){
            if($(this).is(':checked')){
                cont+=1;
                if(cont!=elem){
                    colores+=$(this).attr("id")+',';
                }else{
                    colores+=$(this).attr("id");
                }
            }
        });
        $('#colores').val(colores);
        if(consultaProductos){
            consultarProductosCatalogo($('#ultimo').val(), $('#pa').val());
        }
    });
   
    var consultaProductos=true;
    $('#cleanColores').on('click', function(event){
        consultaProductos=false; //para evitar consulta para evento "uncheck"
        $(".coloresCat").each(function(){
            $('.coloresCat').iCheck('uncheck'); 
        });
        consultaProductos=true;
        $('#colores').val('');
        consultarProductosCatalogo($('#ultimo').val(), $('#pa').val());
       
    });
    
});
