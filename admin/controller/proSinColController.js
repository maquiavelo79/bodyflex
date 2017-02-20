
jQuery(document).ready(function() {
           
    var URLdomain   = window.location.host;
    var URLprotocol = window.location.protocol;

    //OBTIENE COLECCIONES
    $.ajax({
            url: URLprotocol+"//"+URLdomain+"/bodyflex/admin/model/proSinColModel.php",
            type:  'post',
            datetype: 'xml',
            async: true,
        beforeSend: function(){
            $("#espera").show();
            $('#proCol').hide();
        },
        success:  function (xml){

            //alert('proSinColModel ' + xml);

            $("#espera").hide();
            var xmlDoc = $.parseXML(xml), $xml = $(xmlDoc);
            var codErr = xmlDoc.getElementsByTagName('CODERROR')[0].childNodes[0].nodeValue;
            var desErr = xmlDoc.getElementsByTagName('DESERROR')[0].childNodes[0].nodeValue;

            switch(codErr){
                case "9":

                    $("#espera").hide();

                    var msg='<div style="text-align:center;" class="alert alert-block">';
                    msg+='<b><span style="color: black;">' + '[' + codErr + '] ' + desErr + '</span></b>';
                    msg+='</div>';

                    $('#warning').html(msg);
                    $('#warning').show();

                    break;

                case "8":

                    $("#espera").hide();

                    var msg='<div style="text-align:center;" class="alert alert-block">';
                    msg+='<b><span style="color: black;">' + '[' + codErr + '] ' + desErr + '</span></b>';
                    msg+='</div>';

                    $('#warning').html(msg);
                    $('#warning').show();

                    break;

                case "99":

                    $("#espera").hide();

                    var msg='<div style="text-align:center;" class="alert alert-block">';
                    msg+='<b><span style="color: black;">' + '[' + codErr + '] ' + desErr + '</span></b>';
                    msg+='</div>';

                    $('#warning').html(msg);
                    $('#warning').show();
                    break;

                case "100":

                    $("#espera").hide();

                    var msg='<div style="text-align:center;" class="alert alert-block">';
                    msg+='<b><span style="color: black;">' + '[' + codErr + '] ' + desErr + '</span></b>';
                    msg+='</div>';

                    $('#warning').html(msg);
                    $('#warning').show();
                    break;    

                case "98":
                    
                    $("#espera").hide();

                    var msg='<div style="text-align:center;" class="alert alert-block">';
                    msg+='<b><span style="color: black;">' + '[' + codErr + '] ' + desErr + '</span></b>';
                    msg+='</div>';

                    $('#warning').html(msg);
                    $('#warning').show();
                    break;

                default:
                    
                    $('#proCol').show();
                    var datos = xmlDoc.getElementsByTagName('DATOS')[0].childNodes[0].nodeValue;
                    var rsm = xmlDoc.getElementsByTagName('RSM')[0].childNodes[0].nodeValue;
                    $('#categorias').html(datos);
                    $('#rsm').html(rsm);
                    $('#rsm').trigger('liszt:updated');
                    $('#categorias').trigger('liszt:updated');
                    break;
                    
            }
        }
    }); 
    
    $('.proSinCol').live('click', function() { 

        $.ajax({
                url: URLprotocol+"//"+URLdomain+"/bodyflex/admin/model/proSinColDetModel.php",
                type:  'post',
                datetype: 'xml',
                async:  true,
            beforeSend: function(){
                $("#espera").show();
            },
            success:  function (xml){

                //alert('proSinColDetModel ' + xml);                

                $("#espera").hide();
                var xmlDoc = $.parseXML(xml), $xml = $(xmlDoc);
                var codErr = xmlDoc.getElementsByTagName('CODERROR')[0].childNodes[0].nodeValue;
                var desErr = xmlDoc.getElementsByTagName('DESERROR')[0].childNodes[0].nodeValue;

                switch(codErr){
                    case '9':

                        var msg='<div style="text-align:center;" class="alert alert-block">';
                        msg+='<b><span style="color: black;">' + '[' + codErr + '] ' + desErr + '</span></b>';
                        msg+='</div>';

                        $('#warning').html(msg);
                        $('#warning').show();

                        break; 

                    case '8':

                        var msg='<div style="text-align:center;" class="alert alert-block">';
                        msg+='<b><span style="color: black;">' + '[' + codErr + '] ' + desErr + '</span></b>';
                        msg+='</div>';

                        $('#warning').html(msg);
                        $('#warning').show();

                        break; 

                    case '99':

                        var msg='<div style="text-align:center;" class="alert alert-block">';
                        msg+='<b><span style="color: black;">' + '[' + codErr + '] ' + desErr + '</span></b>';
                        msg+='</div>';

                        $('#warning').html(msg);
                        $('#warning').show();

                        break; 

                    case '100':

                        var msg='<div style="text-align:center;" class="alert alert-block">';
                        msg+='<b><span style="color: black;">' + '[' + codErr + '] ' + desErr + '</span></b>';
                        msg+='</div>';

                        $('#warning').html(msg);
                        $('#warning').show();

                        break; 

                    case '98':

                        var msg='<div style="text-align:center;" class="alert alert-block">';
                        msg+='<b><span style="color: black;">' + '[' + codErr + '] ' + desErr + '</span></b>';
                        msg+='</div>';

                        $('#warning').html(msg);
                        $('#warning').show();

                        break;

                    default:

                        var datos = xmlDoc.getElementsByTagName('DATOS')[0].childNodes[0].nodeValue;
                        $('#proDet').html(datos);
                        $('#myModal').show();
                        $('#showModal').click();
                        break;

                }
            }
        });

    }); 
    
    $('.registro').live('click', function(){ 
        
        var id=$(this).attr('id');
        var urlProducto = URLprotocol+"//"+URLdomain+"/bodyflex/catalogo/view/proDetView.php";
        var form = $('<form action="' + urlProducto + '" method="post" target="_blank">' +
        '<input type="hidden" id="id" name="id" value="' + id + '" />' +
        '</form>');
        $('body').append(form);
        form.submit();

    }); 
    
    
});




