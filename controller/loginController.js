
$(document).ready(function (){
 
var URLdomain   = window.location.host;
var URLprotocol = window.location.protocol;

    $('#ingreso').click(function(){

        var email = $('#email').val();
        var password = $("input[name='password']").val();

        if(email == '') {
            $('#help').hide();
            $('#mensaje').show();
            var shtml='<span class="warningLogin1">Debe ingresar email</span>';
            $('#mensaje').html(shtml);
            return false;
        }
        if(password == '') {
            $('#help').hide();
            $('#mensaje').show();
            var shtml='<span class="warningLogin1">Debe ingresar password</span>';
            $('#mensaje').html(shtml);
            return false;
        }

        //Validamos email
        var regex = /[\w-\.]{2,}@([\w-]{2,}\.)*([\w-]{2,}\.)[\w-]{2,4}/;
        if (!regex.test(email)) {
            $('#help').hide();
            $('#mensaje').show();
            var shtml='<span class="warningLogin1">Debe ingresar email válido</span>';
            $('#mensaje').html(shtml);
            return false;
        }

        //alert('email ' + email);
        //alert('password ' + password);

        //Segunda llamada
        var parametros = {"email" : email, "password" : password };
        $.ajax({
            data:  parametros,
            url: URLprotocol+"//"+URLdomain+"/bodyflex/model/loginModel.php",
            type:  'post',
            datetype: 'xml',
            beforeSend: function(){
                $('#espera').show();
                $('#help').hide();
                $('#mensaje').hide();
            },
            success:  function (xml){
                
                //alert('xml ' + xml);
                
                //var elXML='<SALIDA><ERROR><CODERROR>0</CODERROR><DESERROR>OPERACION EXITOSA!</DESERROR></ERROR><DATOS><![CDATA[1]]></DATOS></SALIDA>';
                
                $('#espera').hide();
                $('#help').hide();
              
                var xmlDoc = $.parseXML(xml), $xml = $(xmlDoc);
                var codErr = xmlDoc.getElementsByTagName('CODERROR')[0].childNodes[0].nodeValue;
                var desErr = xmlDoc.getElementsByTagName('DESERROR')[0].childNodes[0].nodeValue;
                
                switch(codErr){
                    case '9':
                            
                        var msg='<div style="text-align:center;" class="alert alert-block">';
                        msg+='<b><span style="color: #000;">' + '[' + codErr + '] ' + desErr + '</span></b>';
                        msg+='</div>';

                        $('#mensaje').html(msg);
                        $('#mensaje').show();
                        break;

                    case '8':

                        var msg='<div style="text-align:center;" class="alert alert-block">';
                        msg+='<b><span style="color: #000;">' + '[' + codErr + '] ' + desErr + '</span></b>';
                        msg+='</div>';

                        $('#mensaje').html(msg);
                        $('#mensaje').show();
                        break;

                    case '99':

                        var msg='<div style="text-align:center;" style="text-align:center;" class="alert alert-block">';
                        msg+='<b><span style="color: #000;">' + '[' + codErr + '] ' + desErr + '</span></b>';
                        msg+='</div>';

                        $('#mensaje').html(msg);
                        $('#mensaje').show();
                        break;

                    case '98':

                        var msg='<div style="text-align:center;" style="text-align:center;" class="alert alert-block">';
                        msg+='<b><span style="color: #000;">' + '[' + codErr + '] ' + desErr + '</span></b>';
                        msg+='</div>';

                        $('#mensaje').html(msg);
                        $('#mensaje').show();
                        break;
                    
                    case '100':

                        var msg='<div style="text-align:center;" style="text-align:center;" class="alert alert-block">';
                        msg+='<b><span style="color: #000;">' + '[' + codErr + '] ' + desErr + '</span></b>';
                        msg+='</div>';

                        $('#mensaje').html(msg);
                        $('#mensaje').show();
                        break;    
                        
                    default:
                
                        var datos = xmlDoc.getElementsByTagName('DATOS')[0].childNodes[0].nodeValue;
                        if(datos==1){
                            $('#mensaje').hide();
                            $('#espera').show();
                            setTimeout("redireccionar()", 1000); //tiempo expresado en milisegundos
                        }else{
                            $('#mensaje').show();
                            $('#mensaje').html("<span style='color:red; font-size: 18px; font-weight: bold;'>Usuario y/o contraseña incorrecta.</span>");
                        }
              
                }
            }
        }); 

    });
    
});
 
    
function redireccionar(){
    var URLdomain   = window.location.host;
    var URLprotocol = window.location.protocol;
    window.location.href=URLprotocol+"//"+URLdomain+"/bodyflex/index.php";
}  