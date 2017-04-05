<script src="http://code.jquery.com/jquery-1.11.0.min.js"></script> 
<script type="text/javascript">
    $(document).ready(function (){
        var URLdomain   = window.location.host;
        var URLprotocol = window.location.protocol;
        
        $('#btnResponder').click(function(){
                
            var rutOri = $("#rut").val(); //rut origen (del profesional)
            var rutDes = $("#ror").val(); //rut destino (quien inicio el contacto)
            var tip = "R"; //TIPO=R=RESPUESTA
            var key = $("#key").val(); //KEY=Identificador de conversación
            var res = $.trim($("#respuesta").val()); //mensaje de la respuesta
            var asu = $("#asu").val(); //asunto, siempre se responde con el asunto de origen
            var ali = $("#alias").val(); //alias, alias de origen del mensaje, en este caso de quien contesta
            var ade = $("#ali").val(); //alias, alias del destinatario del mensaje
            var email = $("#email").val(); //mail del quien envia el mensaje, en este caso de quien responde
            var mai = $("#mai").val(); //mail del quien envia el mensaje, en este caso de quien responde    
                
            if($('#id').val()==''){
                var msg='<div style="text-align:center; background-color: red;" class="alert alert-error">';
                msg+='<b><span style="color: #000;">Para responder debe existir un mensaje actual.</span></b>';
                msg+='</div>';
                $('#warningResp').html(msg);
                $('#warningResp').show();
                return false;
            }

            if(res.length==0){
                var msg='<div style="text-align:center; background-color: red;" class="alert alert-error">';
                msg+='<b><span style="color: #000;">Favor agrege un mensaje a su respuesta.</span></b>';
                msg+='</div>';
                $('#warningResp').html(msg);
                $('#warningResp').show();
                return false;
            }
            
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
                url: URLprotocol+"//"+URLdomain+"/bodyflex/Dashboard/model/mensajesIngresaRespModel.php",
                type:  'post',
                datetype: 'xml',
                beforeSend: function(){
                    $("#divLoad").show();
                    $("#divBtn").hide();
                },
                success:  function (xml){

                    //alert('mensajesIngresaRespModel ' + xml);

                    $("#divLoad").hide();
                    $("#divBtn").show();
                    
                    var xmlDoc = $.parseXML(xml), $xml = $(xmlDoc);
                    var codErr = xmlDoc.getElementsByTagName('CODERROR')[0].childNodes[0].nodeValue;
                    var desErr = xmlDoc.getElementsByTagName('DESERROR')[0].childNodes[0].nodeValue;

                    switch(codErr){
                        case '9':

                            var msg='<div style="text-align:center;" class="alert alert-block">';
                            msg+='<b><span style="color: #000;">' + '[' + codErr + '] ' + desErr + '</span></b>';
                            msg+='</div>';

                            $('#warningResp').html(msg);    
                            $('#warningResp').show();
                            break;   

                        case '8':

                            var msg='<div style="text-align:center;" class="alert alert-block">';
                            msg+='<b><span style="color: #000;">' + '[' + codErr + '] ' + desErr + '</span></b>';
                            msg+='</div>';

                            $('#warningResp').html(msg);
                            $('#warningResp').show();
                            break;

                        case '99':

                            var msg='<div style="text-align:center;" class="alert alert-block">';
                            msg+='<b><span style="color: #000;">' + '[' + codErr + '] ' + desErr + '</span></b>';
                            msg+='</div>';

                            $('#warningResp').html(msg);
                            $('#warningResp').show();
                            break;

                        case '100':

                            var msg='<div style="text-align:center;" class="alert alert-block">';
                            msg+='<b><span style="color: #000;">' + '[' + codErr + '] ' + desErr + '</span></b>';
                            msg+='</div>';

                            $('#warningResp').html(msg);
                            $('#warningResp').show();
                            break;    

                        case '98':

                            var msg='<div style="text-align:center;" class="alert alert-block">';
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

                            //$("#pagMsg").trigger("click");
                            $('#warningResp').html(msg);
                            $('#warningResp').show();
                            
                            
                            break;
                    }
                }
            });   
        });
        
        //$('#btnEliminar').click(function(){
        $('#btnEliminar').live('click', function() { 

            //alert('btnEliminar');

            var strModal='';
            var asu = $('#asu').val();

                strModal+='<div style="color: black; background-color: #FFCC00; font-weight: bold;" class="modal-header">';
                    strModal+='<button type="button" class="close" data-dismiss="modal">×</button>';
                    strModal+='<h3>Eliminar publicación</h3>';
                strModal+='</div>';
                strModal+='<div class="modal-body" id="modalBody">';
                    strModal+='<p>¿Desea eliminar mensaje <b>' + asu + '</b>?</p><br>';
                strModal+='</div>';
                strModal+='<div class="modal-footer">';
                    strModal+='<a class="btn" data-dismiss="modal">Cancelar</a>';
                    strModal+='<a id="btnEli" class="btn btn-primary">Eliminar</a>';
                strModal+='</div>';

            $('#myModal').html(strModal);

        });
        
        //$('#btnEli').click(function(){
        $('#btnEli').live('click', function() {     
                
            //alert('btnEli');    
                
            var load='<div id="espera" style="width: 200px; height: 80px; margin-left: 30%;">&nbsp;</div>';    
            var id = $("#id").val(); //id mensaje
            var parametros = {
                "id" : id
            };        
            
            $.ajax({
                data:  parametros,
                url: URLprotocol+"//"+URLdomain+"/bodyflex/Dashboard/model/mensajesEliminaModel.php",
                type:  'post',
                datetype: 'xml',
                beforeSend: function(){
                    $("#divLoad").show();
                    $("#divBtn").hide();
                    $("#modalBody").html(load);
                    $("#modalBody").show();
                },
                success:  function (xml){

                    //alert('mensajesEliminaModel ' + xml);

                    $("#divLoad").hide();
                    $("#divBtn").show();
                    
                    var xmlDoc = $.parseXML(xml), $xml = $(xmlDoc);
                    var codErr = xmlDoc.getElementsByTagName('CODERROR')[0].childNodes[0].nodeValue;
                    var desErr = xmlDoc.getElementsByTagName('DESERROR')[0].childNodes[0].nodeValue;

                    switch(codErr){
                        case '9':

                            var msg='<div style="text-align:center;" class="alert alert-block">';
                            msg+='<b><span style="color: #000;">' + '[' + codErr + '] ' + desErr + '</span></b>';
                            msg+='</div>';

                            $("#modalBody").html(msg);
                            $("#modalBody").show();
                            setTimeout(function() {$('#myModal').modal('hide');}, 750);      

                            $('#warningResp').html(msg);    
                            $('#warningResp').show();
                            break;   

                        case '8':

                            var msg='<div style="text-align:center;" class="alert alert-block">';
                            msg+='<b><span style="color: #000;">' + '[' + codErr + '] ' + desErr + '</span></b>';
                            msg+='</div>';

                            $("#modalBody").html(msg);
                            $("#modalBody").show();
                            setTimeout(function() {$('#myModal').modal('hide');}, 750); 

                            $('#warningResp').html(msg);
                            $('#warningResp').show();
                            break;

                        case '99':

                            var msg='<div style="text-align:center;" class="alert alert-block">';
                            msg+='<b><span style="color: #000;">' + '[' + codErr + '] ' + desErr + '</span></b>';
                            msg+='</div>';

                            $("#modalBody").html(msg);
                            $("#modalBody").show();
                            setTimeout(function() {$('#myModal').modal('hide');}, 750);     

                            $('#warningResp').html(msg);
                            $('#warningResp').show();
                            break;
                            
                        case '100':

                            var msg='<div style="text-align:center;" class="alert alert-block">';
                            msg+='<b><span style="color: #000;">' + '[' + codErr + '] ' + desErr + '</span></b>';
                            msg+='</div>';

                            $("#modalBody").html(msg);
                            $("#modalBody").show();
                            setTimeout(function() {$('#myModal').modal('hide');}, 750);     

                            $('#warningResp').html(msg);
                            $('#warningResp').show();
                            break;    

                        default:

                            var msg='<div style="text-align:center;" class="alert alert-success">';
                            msg+='<i class="fa fa-check fa-2x"></i>&nbsp;';
                            msg+='<b><span style="color: #000;">Mensaje eliminado exitosamente!.</span></b>';
                            msg+='</div>';

                            $("#modalBody").html(msg);
                            $("#modalBody").show();
                            setTimeout(function() {$('#myModal').modal('hide');}, 750); 

                            //$("#pagMsg").trigger("click");
                            $('#warningResp').html(msg);
                            $('#warningResp').show();

                            var sw=0;
                            var ultimo=0;
                            var pa=1;
                            
                            consultaMensajes(sw,ultimo,pa);
                                                        
                            break;
                    }
                }
            });   
        });
        
    });   
</script>
<style>

    .message1 .header {
	margin-bottom: 30px;
    }

    .message1 .header h1{
        background: #67C2EF; /* rgba(103, 194, 239, 1); */
        color: #fff;
        text-shadow: 0px -1px 0px rgba(0,0,0,.15);
        margin: -20px -20px 10px -20px;
        padding: 20px;
    }

    .message1 .header i {
        margin-top: 1px;
    }

    .message1 .header .from {
        display: inline-block;
        width: 70%;
        font-size: 12px;
    }

    .message1 .header .date {
        display: inline-block;
        width: 29%;
        text-align: right;
        float: right;
        font-size: 12px;
    }

    .message1 .attachments {
        border-top: 3px solid #f9f9f9;
        border-bottom: 3px solid #f9f9f9;
        padding: 10px 0px;
        margin-bottom: 20px;
        font-size: 12px;
    }

    .message1 .attachments ul {
        list-style: none;
        margin: 0;
    }

    .message1 .attachments ul li {
        margin: 10px 0;
    }

    .message1 .attachments ul li span.label {
        font-size: 12px !important;
    }

    .message1 .attachments ul li span.quickMenu {
        float: right;
        text-align: right;
    }

    .message1 .attachments ul li span.quickMenu .glyphicons {
        padding: 5px 0 5px 25px;
    }

    .message1 .attachments ul li span.quickMenu .glyphicons i:before{
        font-size: 14px;
        margin: -2px 0px 0px 5px;
        color: #3b3b41;
    }
    
    .dark1 {
	background: #fdfdfd;
	text-shadow: 0px 1px 1px #fff !important;
	padding: 20px;
/*	top: -28px;*/
	right: -28px;
/*	margin-bottom: -56px;*/
	margin-right: -30px;
	position: relative;
	border-left: 2px solid #eee;
	min-height: 90%;
	overflow: hidden;	
    }
    
    .message1{
        width: 580px;
    }
    
</style>
<div style="width: 680px;" id="detalleMensaje" class="span5 noMarginLeft"> <!-- border-color: black; border-style: double; -->				
    <div class="message1 dark1"> 

        <div class="header">
            <h1 style="color: black; font-size: 22px; background-color: silver;" id="asunto"></h1>
            <div class="from"><i class="halflings-icon user"></i> <b id="aliasOri"></b> / <div id="mail"></div></div>
            <div class="date"><i class="halflings-icon time"></i><b id="fecha"></b></div>
            <div class="menu"></div>
        </div>

        <div class="content">
            <p id="mensaje"></p>
        </div>
        
        <fieldset>
            <textarea style="background-color: whitesmoke; box-shadow: 0 0 2px black; margin: 0px 0px 0px 0px; font-weight: bold; color: black; " tabindex="3" class="input-xlarge span12" id="respuesta" name="body" rows="12" placeholder="Puedes responder aqui!"></textarea>
        </fieldset>
        <br>
        <div id="warningResp" style="display: none;"></div>
        <div id="divBtn">
            <button style="border-color: silver; background-color: #FFCC00; color: black; font-weight: bold; width: 100px;" type="button" class="btn btn-small btn-primary" id="btnResponder">Responder</button>
            <button style="border-color: silver; background-color: silver; color: black; font-weight: bold; width: 100px;" type="button" class="btn btn-small btn-danger btn-setting" id="btnEliminar">Eliminar</button>
<!--                                                        class="btn btn-info btn-setting"-->
        </div>
        <div id="divLoad" class="col-sm-3 text-right" style="display: none;">
            <div id='espera' style="width: 200px; height: 80px; margin-left: 30%;">&nbsp;</div>
        </div>  
        
    </div>	
</div>