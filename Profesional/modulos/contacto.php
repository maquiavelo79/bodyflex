
<script src="http://ajax.googleapis.com/ajax/libs/jqueryui/1.10.3/jquery-ui.min.js"></script> 
<script type="text/javascript">
 
    $( document ).ready(function() {
        var URLdomain   = window.location.host;
        var URLprotocol = window.location.protocol;
    
        if($('#sesion').val()==0){
        
            $('#asunto').prop('disabled', true);
            $('#mensaje').prop('disabled', true);

            var msg='<div style="text-align:center;" class="alert alert-block">';
            msg+='<i class="fa fa-times">&nbsp;&nbsp;';
                    msg+='<b><span style="color: black; font-family: Arial; font-size: medium; font-weight: bold;">Solo usuarios REGISTRADOS pueden contactar al profesional.</span></b>';
                msg+='</i>';    
            msg+='</div>';

            $('#divBtn').html(msg);

        }else{
            $('#asunto').prop('disabled', false);
            $('#mensaje').prop('disabled', false);
        }
        
        var rutPro=$('#rutPro').val();  
        var parametros = {"rutPro" : rutPro};        
        
        $.ajax({
            data:  parametros,
            url: URLprotocol+"//"+URLdomain+"/bodyflex/profesional/model/perfilProfesionalGetCoo.php",
            type:  'post',
            async:  false,
            datetype: 'xml',
            success:  function (xml){

                //alert('perfilProfesionalGetCoo ' + xml);

                var xmlDoc = $.parseXML(xml), $xml = $(xmlDoc);
                var codErr = xmlDoc.getElementsByTagName('CODERROR')[0].childNodes[0].nodeValue;
                var desErr = xmlDoc.getElementsByTagName('DESERROR')[0].childNodes[0].nodeValue;

                switch(codErr){
                    case '9':

                        var msg='<div style="text-align:center;" class="alert alert-block">';
                        msg+='<b>';
                                msg+='<i class="fa fa-exclamation-triangle fa-2x">&nbsp;&nbsp;';
                                    msg+='<span style="color: black; font-family: Arial; font-size: medium; font-weight: bold;">' + '[' + codErr + '] ' + desErr + '</span>'; 
                                msg+='</i>';
                            msg+='</b>';
                        msg+='</div>';    

                        $('#warning').html(msg);    
                        $('#warning').show();
                        break;   

                    case '8':

                        var msg='<div style="text-align:center;" class="alert alert-block">';
                        msg+='<b>';
                                msg+='<i class="fa fa-exclamation-triangle fa-2x">&nbsp;&nbsp;';
                                    msg+='<span style="color: black; font-family: Arial; font-size: medium; font-weight: bold;">' + '[' + codErr + '] ' + desErr + '</span>'; 
                                msg+='</i>';
                            msg+='</b>';
                        msg+='</div>';    

                        $('#warning').html(msg);
                        $('#warning').show();
                        break;

                    case '99':

                        var msg='<div style="text-align:center;" class="alert alert-block">';
                        msg+='<button type="button" class="close" data-dismiss="alert">×</button>';
                            msg+='<b>';
                                msg+='<i class="fa fa-exclamation-triangle fa-2x">&nbsp;&nbsp;';
                                    msg+='<span style="color: black; font-family: Arial; font-size: medium; font-weight: bold;">' + '[' + codErr + '] ' + desErr + '</span>'; 
                                msg+='</i>';
                            msg+='</b>';
                        msg+='</div>';    

                        $('#warning').html(msg);
                        $('#warning').show();
                        break;

                    case '100':

                        var msg='<div style="text-align:center;" class="alert alert-block">';
                        msg+='<button type="button" class="close" data-dismiss="alert">×</button>';
                            msg+='<b>';
                                msg+='<i class="fa fa-exclamation-triangle fa-2x">&nbsp;&nbsp;';
                                    msg+='<span style="color: black; font-family: Arial; font-size: medium; font-weight: bold;">' + '[' + codErr + '] ' + desErr + '</span>'; 
                                msg+='</i>';
                            msg+='</b>';
                        msg+='</div>';    

                        $('#warning').html(msg);
                        $('#warning').show();
                        break;    

                    default:

                        var lat = xmlDoc.getElementsByTagName('LAT')[0].childNodes[0].nodeValue;
                        var lgn = xmlDoc.getElementsByTagName('LGN')[0].childNodes[0].nodeValue;
                        
                        var strMaps='<div id="google-map" style="height:400px" data-latitude="'+lat+'" data-longitude="'+lgn+'"></div>';
                        $('#divGoogleMaps').html(strMaps);
                        
                        break;
                }
            }
        });
        
    });

    
    function enviarMsgPro(){
    var URLdomain   = window.location.host;
    var URLprotocol = window.location.protocol;

        var rut=$('#rut').val();   
        var rutPro=$('#rutPro').val();
        var asunto=$('#asunto').val();
        var mensaje=$('#mensaje').val();
        var rol=$('#rol').val();
        var email=$('#email').val();
        var emlPro=$('#emlPro').val();
            
        var parametros = { 
                            "rut" : rut
                            ,   "rutPro" : rutPro 
                            ,   "mensaje" : mensaje 
                            ,   "asunto" : asunto 
                            ,   "rol" : rol 
                            ,   "email" : email
                            ,   "emlPro" : emlPro
                        };        
        $.ajax({
            data:  parametros,
            url: URLprotocol+"//"+URLdomain+"/bodyflex/profesional/model/perfilProfesionalEnviarMensaje.php",
            type:  'post',
            async:  false,
            datetype: 'xml',
            success:  function (xml){

                //alert('perfilProfesionalEnviarMensaje ' + xml);

                var xmlDoc = $.parseXML(xml), $xml = $(xmlDoc);
                var codErr = xmlDoc.getElementsByTagName('CODERROR')[0].childNodes[0].nodeValue;
                var desErr = xmlDoc.getElementsByTagName('DESERROR')[0].childNodes[0].nodeValue;

                switch(codErr){
                    case '9':

                        var msg='<div style="text-align:center;" class="alert alert-block">';
                        msg+='<b>';
                                msg+='<i class="fa fa-exclamation-triangle fa-2x">&nbsp;&nbsp;';
                                    msg+='<span style="color: black; font-family: Arial; font-size: medium; font-weight: bold;">' + '[' + codErr + '] ' + desErr + '</span>'; 
                                msg+='</i>';
                            msg+='</b>';
                        msg+='</div>';    

                        $('#warning').html(msg);    
                        $('#warning').show();
                        break;   

                    case '8':

                        var msg='<div style="text-align:center;" class="alert alert-block">';
                        msg+='<b>';
                                msg+='<i class="fa fa-exclamation-triangle fa-2x">&nbsp;&nbsp;';
                                    msg+='<span style="color: black; font-family: Arial; font-size: medium; font-weight: bold;">' + '[' + codErr + '] ' + desErr + '</span>'; 
                                msg+='</i>';
                            msg+='</b>';
                        msg+='</div>';    

                        $('#warning').html(msg);
                        $('#warning').show();
                        break;

                    case '99':

                        var msg='<div style="text-align:center;" class="alert alert-block">';
                        msg+='<button type="button" class="close" data-dismiss="alert">×</button>';
                            msg+='<b>';
                                msg+='<i class="fa fa-exclamation-triangle fa-2x">&nbsp;&nbsp;';
                                    msg+='<span style="color: black; font-family: Arial; font-size: medium; font-weight: bold;">' + '[' + codErr + '] ' + desErr + '</span>'; 
                                msg+='</i>';
                            msg+='</b>';
                        msg+='</div>';    

                        $('#warning').html(msg);
                        $('#warning').show();
                        break;

                    case '100':

                        var msg='<div style="text-align:center;" class="alert alert-block">';
                        msg+='<button type="button" class="close" data-dismiss="alert">×</button>';
                            msg+='<b>';
                                msg+='<i class="fa fa-exclamation-triangle fa-2x">&nbsp;&nbsp;';
                                    msg+='<span style="color: black; font-family: Arial; font-size: medium; font-weight: bold;">' + '[' + codErr + '] ' + desErr + '</span>'; 
                                msg+='</i>';
                            msg+='</b>';
                        msg+='</div>';    

                        $('#warning').html(msg);
                        $('#warning').show();
                        break;    

                    default:

                        var msg='<div style="text-align:center;" class="alert alert-success">';
                        msg+='<button type="button" class="close" data-dismiss="alert">×</button>';
                            msg+='<i class="fa fa-check-circle fa-2x">&nbsp;&nbsp;';
                                msg+='<b><span style="color: black; font-family: Arial; font-size: 14px; font-weight: bold;">El profesional se contactará con usted a la brevedad posible (CPANEL).</span></b>';
                            msg+='</i>';
                        msg+='</div>';

                        $('#asunto').prop('disabled',true);
                        $('#mensaje').prop('disabled',true);
                        $('#btnEnviar').hide();
                        
                        $('#warning').html(msg);
                        $('#warning').show();
                        
                        cuentaContactosProfesional();
                        
                        break;
                }
            }
        });

    }   
    
    function cuentaContactosProfesional(){
    
        var URLdomain   = window.location.host;
        var URLprotocol = window.location.protocol;
        var rut=$('#rut').val();   
        var rutPro=$('#rutPro').val();
                    
        var parametros = { 
                            "rut" : rut
                            ,   "rutPro" : rutPro 
                        };        
        $.ajax({
            data:  parametros,
            url: URLprotocol+"//"+URLdomain+"/bodyflex/profesional/model/perfilProfesionalCuentaContacto.php",
            type:  'post',
            async:  false,
            datetype: 'xml',
            success:  function (xml){

                //alert('perfilProfesionalEnviarMensaje ' + xml);

                var xmlDoc = $.parseXML(xml), $xml = $(xmlDoc);
                var codErr = xmlDoc.getElementsByTagName('CODERROR')[0].childNodes[0].nodeValue;
                var desErr = xmlDoc.getElementsByTagName('DESERROR')[0].childNodes[0].nodeValue;

                switch(codErr){
                    case '9':

                        var msg='<div style="text-align:center;" class="alert alert-block">';
                        msg+='<button type="button" class="close" data-dismiss="alert">×</button>';
                            msg+='<b>';
                                msg+='<i class="fa fa-exclamation-triangle fa-2x">';
                                    msg+='<span style="color: black; font-family: Arial; font-size: medium; font-weight: bold;">' + '[' + codErr + '] ' + desErr + '</span>'; 
                                msg+='</i>';
                            msg+='</b>';
                        msg+='</div>';    

                        $('#warning').html(msg);    
                        $('#warning').show();
                        break;   

                    case '8':

                        var msg='<div style="text-align:center;" class="alert alert-block">';
                        msg+='<button type="button" class="close" data-dismiss="alert">×</button>';
                            msg+='<b>';
                                msg+='<i class="fa fa-exclamation-triangle fa-2x">';
                                    msg+='<span style="color: black; font-family: Arial; font-size: medium; font-weight: bold;">' + '[' + codErr + '] ' + desErr + '</span>'; 
                                msg+='</i>';
                            msg+='</b>';
                        msg+='</div>';    

                        $('#warning').html(msg);
                        $('#warning').show();
                        break;

                    case '99':

                        var msg='<div style="text-align:center;" class="alert alert-block">';
                        msg+='<button type="button" class="close" data-dismiss="alert">×</button>';
                            msg+='<b>';
                                msg+='<i class="fa fa-exclamation-triangle fa-2x">';
                                    msg+='<span style="color: black; font-family: Arial; font-size: medium; font-weight: bold;">' + '[' + codErr + '] ' + desErr + '</span>'; 
                                msg+='</i>';
                            msg+='</b>';
                        msg+='</div>';    

                        $('#warning').html(msg);
                        $('#warning').show();
                        break;

                    case '100':

                        var msg='<div style="text-align:center;" class="alert alert-block">';
                        msg+='<button type="button" class="close" data-dismiss="alert">×</button>';
                            msg+='<b>';
                                msg+='<i class="fa fa-exclamation-triangle fa-2x">';
                                    msg+='<span style="color: black; font-family: Arial; font-size: medium; font-weight: bold;">' + '[' + codErr + '] ' + desErr + '</span>'; 
                                msg+='</i>';
                            msg+='</b>';
                        msg+='</div>';    

                        $('#warning').html(msg);
                        $('#warning').show();
                        break;    

                    default:
                        //CASO EXITOSO NO HACEMOS NADA
                        break;
                }
            }
        });

    }   
    
</script>

<section id="contact">
    <div class="container-wrapper">
        <div class="container contact-info">
            <div class="row">
                <div class="col-sm-4 col-md-4">
                    <div class="contact-form">
                        <h3>Contact Info</h3>
                        <address>
                          <strong>Amazing Company, Inc.</strong><br>
                          12345 NewYork, Street 125<br>
                          United States 94107<br>
                          <abbr title="Phone">P:</abbr> (123) 456-7890
                        </address>
                    </div>
                </div>
                <div class="col-sm-8 col-md-8">
                    <div class="contact-form">
                        <div class="form-group">
                            <input type="text" value="<?= $_SESSION['nombre']?> &nbsp; <?= $_SESSION['apellido']?>" name="name" class="form-control" placeholder="Nombre" disabled>
                        </div>
                        <div class="form-group">
                            <input type="text" maxlength="100" id="asunto" name="asunto" class="form-control" placeholder="Asunto" required>
                        </div>
                        <div class="form-group">
                            <textarea name="message" maxlength="2000" id="mensaje" class="form-control" rows="8" placeholder="Mensaje" required></textarea>
                        </div>
                        <div id="warning" class="form-group">
                            <div style="text-align:center; display: none;" class="alert alert-block">
                                <button type="button" class="close" data-dismiss="alert">×</button>
                                <b>
                                    <i class="fa fa-exclamation-triangle fa-2x">
                                        <span style="color: black; font-family: Arial; font-size: medium; font-weight: bold;">Algun mensaje aca!!</span>
                                    </i>
                                </b>
                            </div>
                        </div>
                        <div id="divBtn">
                            <button id="btnEnviar" class="btn btn-primary" onclick="enviarMsgPro();">Enviar</button>
                        </div>    
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div id="divGoogleMaps">
        <div id="google-map" style="height:400px" data-latitude="40.7141667" data-longitude="-74.00638891"></div>
    </div>
</section><!--/#bottom-->