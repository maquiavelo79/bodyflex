
<script src="http://code.jquery.com/jquery-1.11.0.min.js"></script> 
<script type="text/javascript">
    $(document).ready(function () {
        var URLdomain   = window.location.host;
        var URLprotocol = window.location.protocol;
        var rutPro=$('#rutPro').val();
        var parametros = {"rutPro" : rutPro};        
        $.ajax({
            data:  parametros,
            url: URLprotocol+"//"+URLdomain+"/bodyflex/profesional/model/perfilProfesionalGetPresentacionModel.php",
            type:  'post',
            async:  false,
            datetype: 'xml',
            success:  function (xml){

                //alert('perfilProfesionalGetPresentacionModel ' + xml);

                var xmlDoc = $.parseXML(xml), $xml = $(xmlDoc);
                var codErr = xmlDoc.getElementsByTagName('CODERROR')[0].childNodes[0].nodeValue;
                var desErr = xmlDoc.getElementsByTagName('DESERROR')[0].childNodes[0].nodeValue;

                switch(codErr){
                    case '9':

                        var msg='<div style="text-align:center;" class="alert alert-block">';
                        msg+='<b><span style="color: #000;">' + '[' + codErr + '] ' + desErr + '</span></b>';
                        msg+='</div>';

                        $('#prePro').html(msg);    
                        $('#prePro').show();
                        break;   

                    case '8':

                        var msg='<div style="text-align:center;" class="alert alert-block">';
                        msg+='<b><span style="color: #000;">' + '[' + codErr + '] ' + desErr + '</span></b>';
                        msg+='</div>';

                        $('#prePro').html(msg);
                        $('#prePro').show();
                        break;

                    case '99':

                        var msg='<div style="text-align:center;" class="alert alert-block">';
                        msg+='<b><span style="color: #000;">' + '[' + codErr + '] ' + desErr + '</span></b>';
                        msg+='</div>';

                        $('#prePro').html(msg);
                        $('#prePro').show();
                        break;
                        
                    case '100':

                        var msg='<div style="text-align:center;" class="alert alert-block">';
                        msg+='<b><span style="color: #000;">' + '[' + codErr + '] ' + desErr + '</span></b>';
                        msg+='</div>';

                        $('#prePro').html(msg);
                        $('#prePro').show();
                        break;    

                    case '98':
                        
                        var msg='<div style="text-align:center;" class="alert alert-block">';
                        msg+='<button type="button" class="close" data-dismiss="alert">×</button>';
                            msg+='<b><span style="color: #000;">' + '[' + codErr + '] ' + desErr + '</span></b>';
                        msg+='</div>';

                        $('#prePro').html(msg);
                        $('#prePro').show();
                        break;
                        
                    default:

                        var datos = xmlDoc.getElementsByTagName('DATOS')[0].childNodes[0].nodeValue;
                        var mail = xmlDoc.getElementsByTagName('MAIL')[0].childNodes[0].nodeValue;
                        
                        //alert(datos);
                        
                        $('#emlPro').val(mail);
                        $('#prePro').html(datos);
                        $('#prePro').show();
                        break;
                }
            }
        });
    });
    
</script>
<section id="features">
    <div id="prePro" class="container"></div>
</section>