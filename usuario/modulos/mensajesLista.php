<script src="http://code.jquery.com/jquery-1.11.0.min.js"></script> 
<script type="text/javascript">
    $(document).ready(function (){
        //var rut=$('#rut').val();
        var email=$('#email').val();
        var sw=0;
        var ultimo=0;
        var pa=1;
        
        //alert('rut ' + rut);
        
        var parametros = { 
                            "email" : email 
                            ,   "sw" : sw 
                            ,   "ultimo" : ultimo 
                            ,   "pa" : pa 
                        };        
        $.ajax({
            data:  parametros,
            url:   '../model/mensajesConsultaModel.php',
            type:  'post',
            async:  false,
            datetype: 'xml',
            success:  function (xml){

                //alert('mensajesConsultaModel ' + xml);

                var xmlDoc = $.parseXML(xml), $xml = $(xmlDoc);
                var codErr = xmlDoc.getElementsByTagName('CODERROR')[0].childNodes[0].nodeValue;
                var desErr = xmlDoc.getElementsByTagName('DESERROR')[0].childNodes[0].nodeValue;

                switch(codErr){
                    case '9':

                        var msg='<div style="text-align:center;" class="alert alert-block">';
                        msg+='<button type="button" class="close" data-dismiss="alert">×</button>';
                            msg+='<b><span style="color: #000;">' + '[' + codErr + '] ' + desErr + '</span></b>';
                        msg+='</div>';

                        $('#listaMensajes').html(msg);    
                        $('#listaMensajes').show();
                        break;   

                    case '8':

                        var msg='<div style="text-align:center;" class="alert alert-block">';
                        msg+='<button type="button" class="close" data-dismiss="alert">×</button>';
                            msg+='<b><span style="color: #000;">' + '[' + codErr + '] ' + desErr + '</span></b>';
                        msg+='</div>';

                        $('#listaMensajes').html(msg);
                        $('#listaMensajes').show();
                        break;

                    case '99':

                        var msg='<div style="text-align:center;" class="alert alert-block">';
                        msg+='<button type="button" class="close" data-dismiss="alert">×</button>';
                            msg+='<b><span style="color: #000;">' + '[' + codErr + '] ' + desErr + '</span></b>';
                        msg+='</div>';

                        $('#listaMensajes').html(msg);
                        $('#listaMensajes').show();
                        break;

                    case '98':
                        
                        var msg='<div style="text-align:center;" class="alert alert-block">';
                        msg+='<button type="button" class="close" data-dismiss="alert">×</button>';
                            msg+='<b><span style="color: #000;">' + '[' + codErr + '] ' + desErr + '</span></b>';
                        msg+='</div>';

                        $('#listaMensajes').html(msg);
                        $('#listaMensajes').show();
                        break;
                        
                    default:

                        var datos = xmlDoc.getElementsByTagName('HTML')[0].childNodes[0].nodeValue;
                        var paginacion = xmlDoc.getElementsByTagName('PAGINACION')[0].childNodes[0].nodeValue;
                        var nuevos = xmlDoc.getElementsByTagName('NUEVOS')[0].childNodes[0].nodeValue;
                        var exLei = xmlDoc.getElementsByTagName('LEIDO_EXISTE')[0].childNodes[0].nodeValue; //EXISTE ALGUN MSG LEIDO? SI? ENTONCES TOMA EL ULTIMO
                        
                        if(exLei==1){
                            
                            var lAsu = xmlDoc.getElementsByTagName('LEIDO_ASUNTO')[0].childNodes[0].nodeValue;
                            var lAli = xmlDoc.getElementsByTagName('LEIDO_ALIAS')[0].childNodes[0].nodeValue;
                            var lMai = xmlDoc.getElementsByTagName('LEIDO_MAIL')[0].childNodes[0].nodeValue;
                            var lFec = xmlDoc.getElementsByTagName('LEIDO_FECHA')[0].childNodes[0].nodeValue;
                            var lMsg = xmlDoc.getElementsByTagName('LEIDO_MSG')[0].childNodes[0].nodeValue;
                            var lid = xmlDoc.getElementsByTagName('LEIDO_ID')[0].childNodes[0].nodeValue;
                            var lLe = xmlDoc.getElementsByTagName('LEIDO_LEIDO')[0].childNodes[0].nodeValue;
                            var lTi = xmlDoc.getElementsByTagName('LEIDO_TIPO')[0].childNodes[0].nodeValue;
                            var lCo = xmlDoc.getElementsByTagName('LEIDO_CORRELATIVO')[0].childNodes[0].nodeValue;
                            var lKe = xmlDoc.getElementsByTagName('LEIDO_KEY')[0].childNodes[0].nodeValue;
                            var lRo = xmlDoc.getElementsByTagName('LEIDO_RUTORI')[0].childNodes[0].nodeValue;
                            
                            $('#id').val(lid); 
                            $('#fec').val(lFec); 
                            $('#lei').val(lLe);
                            $('#tip').val(lTi); 
                            $('#cor').val(lCo); 
                            $('#key').val(lKe); 
                            $('#msg').val(lMsg);  
                            $('#asu').val(lAsu);
                            $('#ali').val(lAli); 
                            $('#mai').val(lMai);                      
                            $('#ror').val(lRo);   
                            
                            $('#asunto').html(lAsu);
                            $('#alias').html(lAli);
                            $('#mail').html(lMai);
                            $('#fecha').html(lFec);
                            $('#mensaje').html(lMsg);
                            
                        }else{
                            $('#detalleMensaje').hide();    
                        }    
                        
                        $('#msgNew').html(nuevos); //mensajes nuevos
                        $('#listaMensajes').html(datos); // todos los mensajes                       
                        $('#idPag').html(paginacion); //paginación
                        break;
                }
            }
        });  
        
        $('#listaMensajes').on('click', 'li', function(event){
        
            var id = $(this).attr( "id" );
            var alias = $(this).attr( "alias" );
            var msgRes = $(this).attr( "msgRes" );
            var fecha = $(this).attr( "fecha" );
            var leido = $(this).attr( "leido" );
            var email = $("#email").val();  //email de quien recibe, destinatario
           
            //var msgLeido='<li id="'+id+'" alias="'+alias+'" msgRes="'+msgRes+'" fecha="'+fecha+'"><span class="from"><span class="glyphicons dislikes"><i></i></span>'+alias+'</span><span class="title">'+msgRes+'</span><span class="date">'+fecha+'</span></li>';
            if(leido==0){
                var msgLeido='<span class="from"><span class="glyphicons dislikes"><i></i></span>'+alias+'</span><span class="title">'+msgRes+'</span><span class="date">'+fecha+'</span>';
                $(this).html(msgLeido);
            }

            var parametros = {
                "mId" : id
                ,   "email" : email
            };        
            $.ajax({
                data:  parametros,
                url:   '../model/mensajesObtieneDetalleModel.php',
                type:  'post',
                async:  false,
                datetype: 'xml',
                success:  function (xml){

                    //alert('mensajesObtieneDetalleModel ' + xml);

                    var xmlDoc = $.parseXML(xml), $xml = $(xmlDoc);
                    var codErr = xmlDoc.getElementsByTagName('CODERROR')[0].childNodes[0].nodeValue;
                    var desErr = xmlDoc.getElementsByTagName('DESERROR')[0].childNodes[0].nodeValue;

                    switch(codErr){
                        case '9':

                            var msg='<div style="text-align:center;" class="alert alert-block">';
                            msg+='<button type="button" class="close" data-dismiss="alert">×</button>';
                                msg+='<b><span style="color: #000;">' + '[' + codErr + '] ' + desErr + '</span></b>';
                            msg+='</div>';

                            $('#listaMensajes').html(msg);    
                            $('#listaMensajes').show();
                            break;   

                        case '8':

                            var msg='<div style="text-align:center;" class="alert alert-block">';
                            msg+='<button type="button" class="close" data-dismiss="alert">×</button>';
                                msg+='<b><span style="color: #000;">' + '[' + codErr + '] ' + desErr + '</span></b>';
                            msg+='</div>';

                            $('#listaMensajes').html(msg);
                            $('#listaMensajes').show();
                            break;

                        case '99':

                            var msg='<div style="text-align:center;" class="alert alert-block">';
                            msg+='<button type="button" class="close" data-dismiss="alert">×</button>';
                                msg+='<b><span style="color: #000;">' + '[' + codErr + '] ' + desErr + '</span></b>';
                            msg+='</div>';

                            $('#listaMensajes').html(msg);
                            $('#listaMensajes').show();
                            break;

                        case '98':

                            var msg='<div style="text-align:center;" class="alert alert-block">';
                            msg+='<button type="button" class="close" data-dismiss="alert">×</button>';
                                msg+='<b><span style="color: #000;">' + '[' + codErr + '] ' + desErr + '</span></b>';
                            msg+='</div>';

                            $('#listaMensajes').html(msg);
                            $('#listaMensajes').show();
                            break;

                        default:

                            var id = xmlDoc.getElementsByTagName('ID')[0].childNodes[0].nodeValue;
                            var fec = xmlDoc.getElementsByTagName('FECHA')[0].childNodes[0].nodeValue;
                            var lei = xmlDoc.getElementsByTagName('LEIDO')[0].childNodes[0].nodeValue;
                            var tip = xmlDoc.getElementsByTagName('TIPO')[0].childNodes[0].nodeValue;
                            var cor = xmlDoc.getElementsByTagName('CORRELATIVO')[0].childNodes[0].nodeValue;
                            var key = xmlDoc.getElementsByTagName('KEY')[0].childNodes[0].nodeValue;
                            var msg = xmlDoc.getElementsByTagName('MENSAJE')[0].childNodes[0].nodeValue;
                            var asu = xmlDoc.getElementsByTagName('ASUNTO')[0].childNodes[0].nodeValue;
                            var ali = xmlDoc.getElementsByTagName('ALIAS')[0].childNodes[0].nodeValue;
                            var mai = xmlDoc.getElementsByTagName('MAIL')[0].childNodes[0].nodeValue;                        
                            var ror = xmlDoc.getElementsByTagName('RUT_ORIGEN')[0].childNodes[0].nodeValue; 

                            $('#id').val(id);
                            $('#fec').val(fec);
                            $('#lei').val(1);
                            $('#tip').val(tip);
                            $('#cor').val(cor);
                            $('#key').val(key);
                            $('#msg').val(msg);
                            $('#asu').val(asu);
                            $('#ali').val(ali);
                            $('#mai').val(mai);
                            $('#ror').val(ror);
                                
                            $('#detalleMensaje').show();
                            $('#asunto').html(asu);
                            $('#alias').html(ali);
                            $('#mail').html(mai);
                            $('#fecha').html(fec);
                            $('#mensaje').html(msg);

                            break;
                    }
                }
            });  
            
            if(leido==0){
            
                $.ajax({
                    data:  parametros,
                    url:   '../model/mensajesSetComoLeidoModel.php',
                    type:  'post',
                    async:  false,
                    datetype: 'xml',
                    success:  function (xml){

                        //alert('mensajesConsultaModel ' + xml);

                        var xmlDoc = $.parseXML(xml), $xml = $(xmlDoc);
                        var codErr = xmlDoc.getElementsByTagName('CODERROR')[0].childNodes[0].nodeValue;
                        var desErr = xmlDoc.getElementsByTagName('DESERROR')[0].childNodes[0].nodeValue;

                        switch(codErr){
                            case '9':

                                var msg='<div style="text-align:center;" class="alert alert-block">';
                                msg+='<button type="button" class="close" data-dismiss="alert">×</button>';
                                    msg+='<b><span style="color: #000;">' + '[' + codErr + '] ' + desErr + '</span></b>';
                                msg+='</div>';

                                $('#listaMensajes').html(msg);    
                                $('#listaMensajes').show();
                                break;   

                            case '8':

                                var msg='<div style="text-align:center;" class="alert alert-block">';
                                msg+='<button type="button" class="close" data-dismiss="alert">×</button>';
                                    msg+='<b><span style="color: #000;">' + '[' + codErr + '] ' + desErr + '</span></b>';
                                msg+='</div>';

                                $('#listaMensajes').html(msg);
                                $('#listaMensajes').show();
                                break;

                            case '99':

                                var msg='<div style="text-align:center;" class="alert alert-block">';
                                msg+='<button type="button" class="close" data-dismiss="alert">×</button>';
                                    msg+='<b><span style="color: #000;">' + '[' + codErr + '] ' + desErr + '</span></b>';
                                msg+='</div>';

                                $('#listaMensajes').html(msg);
                                $('#listaMensajes').show();
                                break;

                            case '98':

                                var msg='<div style="text-align:center;" class="alert alert-block">';
                                msg+='<button type="button" class="close" data-dismiss="alert">×</button>';
                                    msg+='<b><span style="color: #000;">' + '[' + codErr + '] ' + desErr + '</span></b>';
                                msg+='</div>';

                                $('#listaMensajes').html(msg);
                                $('#listaMensajes').show();
                                break;

                            default:

                                var noLei = xmlDoc.getElementsByTagName('NOLEIDOS')[0].childNodes[0].nodeValue;  
                                $('#msgNew').html(noLei);
                                break;   
                                
                        }
                    }
                });  
            }
        });           
    });   
     
    function consultaMensajes(email,sw,ultimo,pa){
        
        var parametros = { 
                            "email" : email 
                            ,   "sw" : sw 
                            ,   "ultimo" : ultimo 
                            ,   "pa" : pa 
                        };        
        $.ajax({
            data:  parametros,
            url:   '../model/mensajesConsultaModel.php',
            type:  'post',
            async:  false,
            datetype: 'xml',
            beforeSend: function(){
                    $("#divLoadPag").show();
                    $("#idPag").hide();
                },
            success:  function (xml){

                //alert('mensajesConsultaModel ' + xml);

                $("#idPag").show();
                $("#divLoadPag").hide();
                
                var xmlDoc = $.parseXML(xml), $xml = $(xmlDoc);
                var codErr = xmlDoc.getElementsByTagName('CODERROR')[0].childNodes[0].nodeValue;
                var desErr = xmlDoc.getElementsByTagName('DESERROR')[0].childNodes[0].nodeValue;

                switch(codErr){
                    case '9':

                        var msg='<div style="text-align:center;" class="alert alert-block">';
                        msg+='<button type="button" class="close" data-dismiss="alert">×</button>';
                            msg+='<b><span style="color: #000;">' + '[' + codErr + '] ' + desErr + '</span></b>';
                        msg+='</div>';

                        $('#listaMensajes').html(msg);    
                        $('#listaMensajes').show();
                        break;   

                    case '8':

                        var msg='<div style="text-align:center;" class="alert alert-block">';
                        msg+='<button type="button" class="close" data-dismiss="alert">×</button>';
                            msg+='<b><span style="color: #000;">' + '[' + codErr + '] ' + desErr + '</span></b>';
                        msg+='</div>';

                        $('#listaMensajes').html(msg);
                        $('#listaMensajes').show();
                        break;

                    case '99':

                        var msg='<div style="text-align:center;" class="alert alert-block">';
                        msg+='<button type="button" class="close" data-dismiss="alert">×</button>';
                            msg+='<b><span style="color: #000;">' + '[' + codErr + '] ' + desErr + '</span></b>';
                        msg+='</div>';

                        $('#listaMensajes').html(msg);
                        $('#listaMensajes').show();
                        break;

                    case '98':
                        
                        var msg='<div style="text-align:center;" class="alert alert-block">';
                        msg+='<button type="button" class="close" data-dismiss="alert">×</button>';
                            msg+='<b><span style="color: #000;">' + '[' + codErr + '] ' + desErr + '</span></b>';
                        msg+='</div>';

                        $('#listaMensajes').html(msg);
                        $('#listaMensajes').show();
                        break;
                        
                    default:

                        var datos = xmlDoc.getElementsByTagName('HTML')[0].childNodes[0].nodeValue;
                        var paginacion = xmlDoc.getElementsByTagName('PAGINACION')[0].childNodes[0].nodeValue;
                        
                        $('#listaMensajes').html(datos);
                        $('#listaMensajes').show();
                        
                        $('#idPag').html(paginacion);
                        $('#idPag').show();
                        break;
                }
            }
        });  
    }; 
     
     
</script>

<div class="span7">
    <h1>Inbox</h1>
    
    <ul id="listaMensajes" class="messagesList"></ul>
    <div id='idPag' class="pagination pagination-centered"></div>
    <br>
    <div id="divLoadPag" class="col-sm-3 text-right" style="display: none;">
        <div id='espera' style="width: 200px; height: 80px; margin-left: 40%;">&nbsp;</div>
    </div>  
    
    <!-- DATOS DEL REGISTRO SELECCIONADO-->
        <input type="hidden" id="id" value="">
        <input type="hidden" id="fec" value="">
        <input type="hidden" id="lei" value="">
        <input type="hidden" id="tip" value="">
        <input type="hidden" id="cor" value="">
        <input type="hidden" id="key" value="">
        <input type="hidden" id="msg" value=""> 
        <input type="hidden" id="asu" value="">
        <input type="hidden" id="ali" value="">
        <input type="hidden" id="mai" value="">                   
        <input type="hidden" id="ror" value="">              
    <!-- DATOS DEL REGISTRO SELECCIONADO-->
    
</div>