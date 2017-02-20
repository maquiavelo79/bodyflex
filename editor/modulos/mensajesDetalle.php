<script src="http://code.jquery.com/jquery-1.11.0.min.js"></script> 
<script type="text/javascript">
    $(document).ready(function (){
        $('#btnResponder').click(function(){
        
            if($('#id').val()==''){
                var msg='<div style="text-align:center; background-color: red;" class="alert alert-error">';
                msg+='<button type="button" class="close" data-dismiss="alert">×</button>';
                    msg+='<b><span style="color: #000;">Para responder debe existir un mensaje actual.</span></b>';
                msg+='</div>';
                $('#listaMensajes').html(msg);
                return false;
            }
        
            var rutOri = $("#rut").val(); //rut origen (del profesional)
            var rutDes = $("#ror").val(); //rut destino (quien inicio el contacto)
            var tip = "R"; //TIPO=R=RESPUESTA
            var key = $("#key").val(); //KEY=Identificador de conversación
            var res = $("#respuesta").val(); //mensaje de la respuesta
            var asu = $("#asu").val(); //asunto, siempre se responde con el asunto de origen
            var ali = $("#alias").val(); //alias, alias de origen del mensaje, en este caso de quien contesta
            var ade = $("#ali").val(); //alias, alias del destinatario del mensaje
            var email = $("#email").val(); //mail del quien envia el mensaje, en este caso de quien responde
            var mai = $("#mai").val(); //mail del quien envia el mensaje, en este caso de quien responde
            
            var msg = '          ' + '<br>';
            msg+= '<b>De</b>: ' + $("#mai").val() + '<br>';
            msg+='<b>Enviado el: </b>: ' + $("#fec").val() + '<br>';
            msg+='<b>Para: </b>: ' + $("#email").val() + '<br>';
            msg+='<b>Asunto: </b>: ' + $("#asu").val() + '<br>';
            msg+= '          ' + '<br>';
            msg+= $("#msg").val();
                        
            res+='<br>'+msg;
            
            var parametros = {
                "rutOri" : rutOri
                ,   "rutDes" : rutDes
                ,   "tip" : tip
                ,   "key" : key
                ,   "res" : res
                ,   "asu" : asu
                ,   "ali" : ali
                ,   "ade" : ade
                ,   "email" : email
                ,   "mai" : mai
            };        
            
            $.ajax({
                data:  parametros,
                url:   '../model/mensajesIngresaRespModel.php',
                type:  'post',
                datetype: 'xml',
                beforeSend: function(){
                    $("#divLoad").show();
                    $("#divBtn").hide();
                },
                success:  function (xml){

                    //alert('mensajesIngresaRespModel ' + xml);

                    $("#divLoad").hide();
                    //$("#divBtn").show();
                    
                    var xmlDoc = $.parseXML(xml), $xml = $(xmlDoc);
                    var codErr = xmlDoc.getElementsByTagName('CODERROR')[0].childNodes[0].nodeValue;
                    var desErr = xmlDoc.getElementsByTagName('DESERROR')[0].childNodes[0].nodeValue;

                    switch(codErr){
                        case '9':

                            var msg='<div style="text-align:center;" class="alert alert-block">';
                            msg+='<button type="button" class="close" data-dismiss="alert">×</button>';
                                msg+='<b><span style="color: #000;">' + '[' + codErr + '] ' + desErr + '</span></b>';
                            msg+='</div>';

                            $('#warningResp').html(msg);    
                            $('#warningResp').show();
                            break;   

                        case '8':

                            var msg='<div style="text-align:center;" class="alert alert-block">';
                            msg+='<button type="button" class="close" data-dismiss="alert">×</button>';
                                msg+='<b><span style="color: #000;">' + '[' + codErr + '] ' + desErr + '</span></b>';
                            msg+='</div>';

                            $('#warningResp').html(msg);
                            $('#warningResp').show();
                            break;

                        case '99':

                            var msg='<div style="text-align:center;" class="alert alert-block">';
                            msg+='<button type="button" class="close" data-dismiss="alert">×</button>';
                                msg+='<b><span style="color: #000;">' + '[' + codErr + '] ' + desErr + '</span></b>';
                            msg+='</div>';

                            $('#warningResp').html(msg);
                            $('#warningResp').show();
                            break;

                        case '98':

                            var msg='<div style="text-align:center;" class="alert alert-block">';
                            msg+='<button type="button" class="close" data-dismiss="alert">×</button>';
                                msg+='<b><span style="color: #000;">' + '[' + codErr + '] ' + desErr + '</span></b>';
                            msg+='</div>';

                            $('#warningResp').html(msg);
                            $('#warningResp').show();
                            break;

                        default:

                            var msg='<div style="text-align:center;" class="alert alert-success">';
                            msg+='<button type="button" class="close" data-dismiss="alert">×</button>';
                                msg+='<b><span style="color: #000;">Respuesta enviada exitosamente!.</span></b>';
                                msg+='<i class="fa fa-camera-retro fa-2x"></i>';
                            msg+='</div>';

                            $("#pagMsg").trigger("click");
                            $('#warningResp').html(msg);
                            $('#warningResp').show();
                            
                            
                            break;
                    }
                }
            });   
        });
        
        
    });   
</script>
<div style="width: 38%;" id="detalleMensaje" class="span5 noMarginLeft">				
    <div class="message dark">
        <div class="header">
            <h1 style="color: black; font-size: 22px;" id="asunto"></h1>
            <div class="from"><i class="halflings-icon user"></i> <b id="aliasOri"></b> / <div id="mail"></div></div>
            <div class="date"><i class="halflings-icon time"></i><b id="fecha"></b></div>
            <div class="menu"></div>
        </div>

        <div class="content">
            <p id="mensaje"></p>
        </div>
        
        <fieldset>
            <textarea tabindex="3" class="input-xlarge span12" id="respuesta" name="body" rows="12" placeholder="Puedes responder aqui!"></textarea>
        </fieldset>

        <div id="divBtn">
            <button style="width: 100px;" type="button" class="btn btn-small btn-primary" id="btnResponder">Responder</button>
            <button style="width: 100px;" type="button" class="btn btn-small btn-danger" id="btnEliminar">Eliminar</button>
        </div>

        <br>
        <div id="divLoad" class="col-sm-3 text-right" style="display: none;">
            <div id='espera' style="width: 200px; height: 80px; margin-left: 30%;">&nbsp;</div>
        </div>  
        <br>
        <div id="warningResp" style="display: none;"></div>
        
    </div>	
</div>