
jQuery(document).ready(function() {

    var URLdomain   = window.location.host;
    var URLprotocol = window.location.protocol;
  
    //OBTIENE DETALLE PRODUCTO
    var parametros = { "idPro" : $('#idPro').val() };  
    $.ajax({
            data:  parametros,
            url: URLprotocol+"//"+URLdomain+"/bodyflex/catalogo/model/proDetCsuProRelModel.php",
            type:  'post',
            datetype: 'xml',
            async: true,
        beforeSend: function(){
            $("#espera").show();
        },
        success:  function(xml){

            //alert('proDetCsuProRelModel '+xml);

            var xmlDoc = $.parseXML(xml), $xml = $(xmlDoc);
            var codErr = xmlDoc.getElementsByTagName('CODERROR')[0].childNodes[0].nodeValue;
            var desErr = xmlDoc.getElementsByTagName('DESERROR')[0].childNodes[0].nodeValue;

            switch(codErr){
                case "9":

                    $("#espera").hide();

                    var msg='<div style="text-align:center;" class="alert alert-block">';
                    msg+='<b><span style="color: black;">' + '[' + codErr + '] ' + desErr + '</span></b>';
                    msg+='</div>';

                    $('#proColores').html(msg);
                    $('#proColores').show();

                    break;

                case "8":

                    $("#espera").hide();

                    var msg='<div style="text-align:center;" class="alert alert-block">';
                    msg+='<b><span style="color: black;">' + '[' + codErr + '] ' + desErr + '</span></b>';
                    msg+='</div>';

                    $('#proColores').html(msg);
                    $('#proColores').show();

                    break;

                case "99":

                    $("#espera").hide();

                    var msg='<div style="text-align:center;" class="alert alert-block">';
                    msg+='<b><span style="color: black;">' + '[' + codErr + '] ' + desErr + '</span></b>';
                    msg+='</div>';

                    $('#proColores').html(msg);
                    $('#proColores').show();

                    break;

                case "100":

                    $("#espera").hide();

                    var msg='<div style="text-align:center;" class="alert alert-block">';
                    msg+='<b><span style="color: black;">' + '[' + codErr + '] ' + desErr + '</span></b>';
                    msg+='</div>';

                    $('#proColores').html(msg);
                    $('#proColores').show();

                    break;    

                case "98":

                    $("#espera").hide();

                    var msg='<div style="text-align:center;" class="alert alert-block">';
                    msg+='<button type="button" class="close" data-dismiss="alert">×</button>';
                    msg+='<b><span style="color: black;">' + '[' + codErr + '] ' + desErr + '</span></b>';
                    msg+='</div>';

                    $('#proColores').html(msg);
                    $('#proColores').show();
                    break;

                default:

                    $("#espera").hide();
                    var dato = xmlDoc.getElementsByTagName('DATO')[0].childNodes[0].nodeValue;
                    $('#divProRel').html(dato).trigger('liszt:updated');
                    break;
                    
            }
        }
    });
    
    //$('.hasCart').click(function(){
    $(document).on("click", ".hasCart", function(event){    
        
        var url=$(this).attr('url');
        var id=$(this).attr('id');

        url=URLprotocol+"//"+URLdomain+url;

        var form = $('<form action="' + url + '" method="post" target="_self">' +
            '<input type="hidden" id="id" name="id" value="' + id + '" />' +
            '</form>');
        $('body').append(form);
        form.submit();
       
    });
    
    
});
 
 

