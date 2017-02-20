<script src="http://code.jquery.com/jquery-1.11.0.min.js"></script> 
<script>    
jQuery(document).ready(function() {

    var URLdomain   = window.location.host;
    var URLprotocol = window.location.protocol;
  
    //OBTIENE WHATSAPP DE CONTACTO
    $.ajax({
            url: URLprotocol+"//"+URLdomain+"/bodyflex/catalogo/model/proDetCsuContactoModel.php",
            type:  'post',
            datetype: 'xml',
            async: false,
        beforeSend: function(){
            $("#espera").show();
        },
        success:  function(xml){

            //alert('proDetCsuContactoModel '+xml);

            var xmlDoc = $.parseXML(xml), $xml = $(xmlDoc);
            var codErr = xmlDoc.getElementsByTagName('CODERROR')[0].childNodes[0].nodeValue;
            var desErr = xmlDoc.getElementsByTagName('DESERROR')[0].childNodes[0].nodeValue;

            switch(codErr){
                case "9":

                    $("#espera").hide();

                    var msg='<div style="text-align:center;" class="alert alert-block">';
                    msg+='<b><span style="color: black;">' + '[' + codErr + '] ' + desErr + '</span></b>';
                    msg+='</div>';

                    $('#contacto').html(msg);
                    $('#contacto').show();

                    break;

                case "8":

                    $("#espera").hide();

                    var msg='<div style="text-align:center;" class="alert alert-block">';
                    msg+='<b><span style="color: black;">' + '[' + codErr + '] ' + desErr + '</span></b>';
                    msg+='</div>';

                    $('#contacto').html(msg);
                    $('#contacto').show();

                    break;

                case "99":

                    $("#espera").hide();

                    var msg='<div style="text-align:center;" class="alert alert-block">';
                    msg+='<b><span style="color: black;">' + '[' + codErr + '] ' + desErr + '</span></b>';
                    msg+='</div>';

                    $('#contacto').html(msg);
                    $('#contacto').show();

                    break;

                case "100":

                    $("#espera").hide();

                    var msg='<div style="text-align:center;" class="alert alert-block">';
                    msg+='<b><span style="color: black;">' + '[' + codErr + '] ' + desErr + '</span></b>';
                    msg+='</div>';

                    $('#contacto').html(msg);
                    $('#contacto').show();

                    break;    

                case "98":

                    $("#espera").hide();

                    var msg='<div style="text-align:center;" class="alert alert-block">';
                    msg+='<button type="button" class="close" data-dismiss="alert">×</button>';
                    msg+='<b><span style="color: black;">' + '[' + codErr + '] ' + desErr + '</span></b>';
                    msg+='</div>';

                    $('#contacto').html(msg);
                    $('#contacto').show();

                    break;

                default:

                    $("#espera").hide();
                    var num = xmlDoc.getElementsByTagName('DATO')[0].childNodes[0].nodeValue;
                    var contacto='<a>'; 
                        contacto+='<span>'; 
                            contacto+='<i class="fa fa-whatsapp fa-lg"></i>';
                        contacto+='</span>'; 
                        contacto+='<span class="hidden-xs" style="margin-left:5px">'+num+'</span>';
                    contacto+='</a>';
                    $('#contacto').html(contacto);
                    break;
                    
            }
        }
    });
    
   
    var usuario ='<span style="font-weight: bold; font-size: 14px; color: #FFCC00;" class="hidden-xs">'+$('#nombre').val()+' '+$('#apellido').val()+'</span>'; 
    $('#usuario').html(usuario);
        
});
 
function backToCatalogo(){
    var URLdomain   = window.location.host;
    var URLprotocol = window.location.protocol;
    var urlPerfil = URLprotocol+"//"+URLdomain+"/bodyflex/Dashboard/view/catProVtaView.php";
    var form = $('<form action="' + urlPerfil + '" method="post" target="_self"></form>');
    $('body').append(form);
    form.submit();
}
</script>
<div class="navbar-top">
    <div class="container">
        <div class="row">
            <div class="col-lg-6 col-sm-6 col-xs-6 col-md-6">
                <div class="pull-left ">
                    <ul class="userMenu ">
                        <li>
                            <a href="#"> 
                                <span class="hidden-xs">CONTACTO</span>
                                <i class="glyphicon glyphicon-info-sign hide visible-xs "></i> 
                            </a>
                        </li>
                        <li id="contacto" class="phone-number">
                            <a> 
                                <span> 
                                    <i class="fa fa-whatsapp fa-lg"></i>
                                </span> 
                                <span class="hidden-xs" style="margin-left:5px">+56977677562</span>
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
            <div class="col-lg-6 col-sm-6 col-xs-6 col-md-6 no-margin no-padding">
                <div class="pull-right">
                    <ul class="userMenu">
                        <li>
                            <a id="usuario">
                                <span style="font-weight: bold; font-size: 14px;" class="hidden-xs"></span> 
                            </a>
                        </li>
                        <li class="hidden-xs">
                            <a href="#" title="volver" onclick="backToCatalogo();">
                                <i style="color: #FFCC00;" class="fa fa-angle-double-left fa-lg" aria-hidden="true"></i>
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
</div>
<!--/.navbar-top-->