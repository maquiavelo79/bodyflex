<script src="http://code.jquery.com/jquery-1.11.0.min.js"></script> 
<script type="text/javascript">
    $(document).ready(function (){
        var URLdomain   = window.location.host;
        var URLprotocol = window.location.protocol;

        var email=$('#email').val();
        var rol=$('#rol').val();
        var sw=0;
        var ultimo=0;
        var pa=1;

        var parametros = { 
                            "email" : email 
                            ,   "sw" : sw 
                            ,   "ultimo" : ultimo 
                            ,   "pa" : pa
                            ,   "rol" : rol
                        };        
        $.ajax({
            data:  parametros,
            url: URLprotocol+"//"+URLdomain+"/bodyflex/Mensajes/model/mensajesConsultaModel.php",
            type:  'post',
            async:  true,
            datetype: 'xml',
            success:  function (xml){

                //alert('onload: mensajesConsultaModel ' + xml);

                var xmlDoc = $.parseXML(xml), $xml = $(xmlDoc);
                var codErr = xmlDoc.getElementsByTagName('CODERROR')[0].childNodes[0].nodeValue;
                var desErr = xmlDoc.getElementsByTagName('DESERROR')[0].childNodes[0].nodeValue;

                switch(codErr){
                    case '9':

                        var msg='<div style="text-align:center;" class="alert alert-block">';
                        msg+='<b><span style="color: #000;">' + '[' + codErr + '] ' + desErr + '</span></b>';
                        msg+='</div>';

                        $('#conWarningMsg').html(msg);    
                        $('#conWarningMsg').show();
                        break;   

                    case '8':

                        var msg='<div style="text-align:center;" class="alert alert-block">';
                        msg+='<b><span style="color: #000;">' + '[' + codErr + '] ' + desErr + '</span></b>';
                        msg+='</div>';

                        $('#conWarningMsg').html(msg);
                        $('#conWarningMsg').show();
                        break;

                    case '99':

                        var msg='<div style="text-align:center;" class="alert alert-block">';
                        msg+='<b><span style="color: #000;">' + '[' + codErr + '] ' + desErr + '</span></b>';
                        msg+='</div>';

                        $('#conWarningMsg').html(msg);
                        $('#conWarningMsg').show();
                        break;

                    case '100':

                        var msg='<div style="text-align:center;" class="alert alert-block">';
                        msg+='<b><span style="color: #000;">' + '[' + codErr + '] ' + desErr + '</span></b>';
                        msg+='</div>';

                        $('#conWarningMsg').html(msg);
                        $('#conWarningMsg').show();
                        break;    

                    case '98':
                        
                        //alert('se metio en 98');
                        
                        var msg='<div style="text-align:center;" class="alert alert-block">';
                        msg+='<button type="button" class="close" data-dismiss="alert">×</button>';
                        msg+='<b><span style="color: #000;">Bandeja sin mensajes XXX</span></b>';
                        msg+='</div>';

                        $('#conWarningMsg').html(msg);
                        $('#conWarningMsg').show();
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
                            var lin = xmlDoc.getElementsByTagName('LEIDO_INCIDENTE')[0].childNodes[0].nodeValue;
                            
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
                            $('#inc').val(lin);
                            
                            $('#asunto').html(lAsu);
                            $('#alias').html(lAli);
                            $('#mail').html(lMai);
                            $('#fecha').html(lFec);
                            $('#mensaje').html(lMsg);
                            
                        }else{
                            $('#detalleMensaje').hide();    
                        }    
                        
                        $('#listaMensajes').html(datos); // todos los mensajes                       
                        $('#idPag').html(paginacion); //paginación
                        break;
                }
            }
        });  
        
        $('#listaMensajes').on('click', 'tr', function(event){
     
            var id = $(this).attr( "id" );
            var alias = $(this).attr( "alias" );
            var msgRes = $(this).attr( "msgRes" );
            var fecha = $(this).attr( "fecha" );
            var leido = $(this).attr( "leido" );
            var email = $("#email").val();  //email de quien recibe, destinatario
            var incidente = $(this).attr( "incidente" );
                      
            //restablecemos formato
            $('#listaMensajes tr').css('background','white');
            $('#listaMensajes tr').css('color','black');
            
            //aplicamos formato
            $(this).css('background','gray');
            $(this).css('color','white');
           
            $('#warningResp').html('');
            $('#warningResp').hide();
            $('#respuesta').val('');
                        
            if(leido==0){
                
                //var msgLeido='<span class="from"><span class="glyphicons dislikes"><i></i></span>'+alias+'</span><span class="title">'+msgRes+'</span><span class="date">'+fecha+'</span>';
                               
                var msgLeido ='<td><span class="from"><span class="glyphicons dislikes"><i></i></span>'+alias+'</span></td>';
                msgLeido+='<td><span class="title">'+msgRes+'</span></td>';
                msgLeido+='<td><span class="date">'+fecha+'</span></td>';
                                
                $(this).html(msgLeido);
            }

            var parametros = {
                "mId" : id
                ,   "email" : email
            };   
            
            $.ajax({
                data:  parametros,
                url: URLprotocol+"//"+URLdomain+"/bodyflex/Mensajes/model/mensajesObtieneDetalleModel.php",
                type:  'post',
                async:  true,
                datetype: 'xml',
                success:  function (xml){

                    //alert('mensajesObtieneDetalleModel ' + xml);

                    var xmlDoc = $.parseXML(xml), $xml = $(xmlDoc);
                    var codErr = xmlDoc.getElementsByTagName('CODERROR')[0].childNodes[0].nodeValue;
                    var desErr = xmlDoc.getElementsByTagName('DESERROR')[0].childNodes[0].nodeValue;

                    switch(codErr){
                        case '9':

                            var msg='<div style="text-align:center;" class="alert alert-block">';
                            msg+='<b><span style="color: #000;">' + '[' + codErr + '] ' + desErr + '</span></b>';
                            msg+='</div>';

                            $('#conWarningMsg').html(msg);    
                            $('#conWarningMsg').show();
                            break;   

                        case '8':

                            var msg='<div style="text-align:center;" class="alert alert-block">';
                            msg+='<b><span style="color: #000;">' + '[' + codErr + '] ' + desErr + '</span></b>';
                            msg+='</div>';

                            $('#conWarningMsg').html(msg);
                            $('#conWarningMsg').show();
                            break;

                        case '99':

                            var msg='<div style="text-align:center;" class="alert alert-block">';
                            msg+='<b><span style="color: #000;">' + '[' + codErr + '] ' + desErr + '</span></b>';
                            msg+='</div>';

                            $('#conWarningMsg').html(msg);
                            $('#conWarningMsg').show();
                            break;

                        case '100':

                            var msg='<div style="text-align:center;" class="alert alert-block">';
                            msg+='<b><span style="color: #000;">' + '[' + codErr + '] ' + desErr + '</span></b>';
                            msg+='</div>';

                            $('#conWarningMsg').html(msg);
                            $('#conWarningMsg').show();
                            break;    

                        case '98':

                            var msg='<div style="text-align:center;" class="alert alert-block">';
                            msg+='<b><span style="color: #000;">' + '[' + codErr + '] ' + desErr + '</span></b>';
                            msg+='</div>';

                            $('#conWarningMsg').html(msg);
                            $('#conWarningMsg').show();
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
                            $('#inc').val(incidente);
                                
                            $('#asunto').html(asu);
                            $('#alias').html(ali);
                            $('#mail').html(mai);
                            $('#fecha').html(fec);
                            $('#mensaje').html(msg);
                            $('#detalleMensaje').show();
                                                        
                            break;
                    }
                }
            });  
            
            if(leido==0){
            
                $.ajax({
                    data:  parametros,
                    url: URLprotocol+"//"+URLdomain+"/bodyflex/Mensajes/model/mensajesSetComoLeidoModel.php",
                    type:  'post',
                    async:  true,
                    datetype: 'xml',
                    success:  function (xml){

                        //alert('mensajesSetComoLeidoModel ' + xml);

                        var xmlDoc = $.parseXML(xml), $xml = $(xmlDoc);
                        var codErr = xmlDoc.getElementsByTagName('CODERROR')[0].childNodes[0].nodeValue;
                        var desErr = xmlDoc.getElementsByTagName('DESERROR')[0].childNodes[0].nodeValue;

                        switch(codErr){
                            case '9':

                                var msg='<div style="text-align:center;" class="alert alert-block">';
                                msg+='<b><span style="color: #000;">' + '[' + codErr + '] ' + desErr + '</span></b>';
                                msg+='</div>';

                                $('#conWarningMsg').html(msg);    
                                $('#conWarningMsg').show();
                                break;   

                            case '8':

                                var msg='<div style="text-align:center;" class="alert alert-block">';
                                msg+='<b><span style="color: #000;">' + '[' + codErr + '] ' + desErr + '</span></b>';
                                msg+='</div>';

                                $('#conWarningMsg').html(msg);
                                $('#conWarningMsg').show();
                                break;

                            case '99':

                                var msg='<div style="text-align:center;" class="alert alert-block">';
                                msg+='<b><span style="color: #000;">' + '[' + codErr + '] ' + desErr + '</span></b>';
                                msg+='</div>';

                                $('#conWarningMsg').html(msg);
                                $('#conWarningMsg').show();
                                break;

                            case '100':

                                var msg='<div style="text-align:center;" class="alert alert-block">';
                                msg+='<b><span style="color: #000;">' + '[' + codErr + '] ' + desErr + '</span></b>';
                                msg+='</div>';

                                $('#conWarningMsg').html(msg);
                                $('#conWarningMsg').show();
                                break;    

                            case '98':

                                var msg='<div style="text-align:center;" class="alert alert-block">';
                                msg+='<b><span style="color: #000;">' + '[' + codErr + '] ' + desErr + '</span></b>';
                                msg+='</div>';

                                $('#conWarningMsg').html(msg);
                                $('#conWarningMsg').show();
                                break;

                            default:

                                var noLei = xmlDoc.getElementsByTagName('NOLEIDOS')[0].childNodes[0].nodeValue;  
                                if(noLei==0){
                                    $('#msgNew').hide();    
                                }else{   
                                    $('#msgNew').html(noLei);
                                }
                                break;
                                
                        }
                    }
                });  
            }
            
            if($('#rol').val()!='ADM'){
                consultaMensajesSoporte();
            }
            
        });           
    });   
     
    function consultaMensajes(sw,ultimo,pa){
    
    //alert('consultaMensajes');
    
        var URLdomain   = window.location.host;
        var URLprotocol = window.location.protocol;

        var email=$('#email').val();
        var rol=$('#rol').val();
        var parametros = { 
                            "email" : email 
                            ,   "sw" : sw 
                            ,   "ultimo" : ultimo 
                            ,   "pa" : pa 
                            ,   "rol" : rol 
                        };        
        $.ajax({
            data:  parametros,
            url: URLprotocol+"//"+URLdomain+"/bodyflex/Mensajes/model/mensajesConsultaModel.php",
            type:  'post',
            async:  true,
            datetype: 'xml',
            success:  function (xml){

                //alert('function: mensajesConsultaModel ' + xml);

                var xmlDoc = $.parseXML(xml), $xml = $(xmlDoc);
                var codErr = xmlDoc.getElementsByTagName('CODERROR')[0].childNodes[0].nodeValue;
                var desErr = xmlDoc.getElementsByTagName('DESERROR')[0].childNodes[0].nodeValue;

                switch(codErr){
                    case '9':

                        var msg='<div style="text-align:center;" class="alert alert-block">';
                        msg+='<b><span style="color: #000;">' + '[' + codErr + '] ' + desErr + '</span></b>';
                        msg+='</div>';

                        $('#conWarningMsg').html(msg);    
                        $('#conWarningMsg').show();
                        break;   

                    case '8':

                        var msg='<div style="text-align:center;" class="alert alert-block">';
                        msg+='<b><span style="color: #000;">' + '[' + codErr + '] ' + desErr + '</span></b>';
                        msg+='</div>';

                        $('#conWarningMsg').html(msg);
                        $('#conWarningMsg').show();
                        break;

                    case '99':

                        var msg='<div style="text-align:center;" class="alert alert-block">';
                        msg+='<b><span style="color: #000;">' + '[' + codErr + '] ' + desErr + '</span></b>';
                        msg+='</div>';

                        $('#conWarningMsg').html(msg);
                        $('#conWarningMsg').show();
                        break;

                    case '100':

                        var msg='<div style="text-align:center;" class="alert alert-block">';
                        msg+='<b><span style="color: #000;">' + '[' + codErr + '] ' + desErr + '</span></b>';
                        msg+='</div>';

                        $('#conWarningMsg').html(msg);
                        $('#conWarningMsg').show();
                        break;    

                    case '98':
                        
                        var msg='<div style="text-align:center;" class="alert alert-block">';
                        msg+='<b><span style="color: #000;">' + '[' + codErr + '] ' + desErr + '</span></b>';
                        msg+='</div>';

                        $('#conWarningMsg').html(msg);
                        $('#conWarningMsg').show();
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
                            var lin = xmlDoc.getElementsByTagName('LEIDO_INCIDENTE')[0].childNodes[0].nodeValue;
                            
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
                            $('#inc').val(lin);
                            
                            $('#asunto').html(lAsu);
                            $('#alias').html(lAli);
                            $('#mail').html(lMai);
                            $('#fecha').html(lFec);
                            $('#mensaje').html(lMsg);
                            
                        }else{
                            $('#detalleMensaje').hide();    
                        }    
                        
                        //$('#msgNew').html(nuevos); //mensajes nuevos
                        $('#listaMensajes').html(datos); // todos los mensajes                       
                        $('#idPag').html(paginacion); //paginación
                        break;
                }
            }
        });  
        
    }; 
    
    function infoMsg(){

        var msgImpPer='<p style="text-align: center; font-size: 16px; font-family: Verdana; color: #1b2426;">Al tu Inbox ingresan los mensajes que realizan las <b style="font-size: 16px; color: blue; font-family: Impact, Charcoal, sans-serif;">personas que visitan</b> tu perfil web profesional.</p>';

        swal({   
                title: 'Mensajes',
                text: msgImpPer,
                imageUrl: '../../images/sobre.jpg',
                imageWidth: 150,
                imageHeight: 150,
                animation: false,
                confirmButtonColor: '#FFCC00',
                confirmButtonText: '<span style="color: black; font-weight: bold;">Aceptar</span>'
        });

    }
    
    function confirmarCierreIncidente(incidente){
       
        swal({
            title: 'Cerrar incidente <b>'+ incidente+ '</b>?',
            //html: "Esta acción cerrará la incidencia!",
            type: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Si, cerrar ahora!'
        }).then(function () {
            var r=cerrarIncidente(incidente);
            if(r==0){
                swal(
                  'Cerrada!',
                  'Incidencia cerrada éxitosamente.',
                  'success'
                )
            }
        })
        
    }
    
    function cerrarIncidente(incidente){
        
        var retunCodErr=0;
        var URLdomain   = window.location.host;
        var URLprotocol = window.location.protocol;
        var parametros = { "incidente" : incidente };
        
        $.ajax({
            data:  parametros,
            url: URLprotocol+"//"+URLdomain+"/bodyflex/Mensajes/model/mensajesCerrarIncidenteModel.php",
            type:  'post',
            async:  false, //debe ser falso por la llamada del alert
            datetype: 'xml',
            success:  function (xml){

                //alert('mensajesCerrarIncidenteModel ' + xml);

                var xmlDoc = $.parseXML(xml), $xml = $(xmlDoc);
                var codErr = xmlDoc.getElementsByTagName('CODERROR')[0].childNodes[0].nodeValue;
                var desErr = xmlDoc.getElementsByTagName('DESERROR')[0].childNodes[0].nodeValue;
                retunCodErr=codErr;

                switch(codErr){
                    case '9':

                        var msg='<div style="text-align:center;" class="alert alert-block">';
                        msg+='<b><span style="color: #000;">' + '[' + codErr + '] ' + desErr + '</span></b>';
                        msg+='</div>';

                        $('#conWarningMsg').html(msg);    
                        $('#conWarningMsg').show();
                        break;   

                    case '99':

                        var msg='<div style="text-align:center;" class="alert alert-block">';
                        msg+='<b><span style="color: #000;">' + '[' + codErr + '] ' + desErr + '</span></b>';
                        msg+='</div>';

                        $('#conWarningMsg').html(msg);
                        $('#conWarningMsg').show();
                        break;

                    case '100':

                        var msg='<div style="text-align:center;" class="alert alert-block">';
                        msg+='<b><span style="color: #000;">' + '[' + codErr + '] ' + desErr + '</span></b>';
                        msg+='</div>';

                        $('#conWarningMsg').html(msg);
                        $('#conWarningMsg').show();
                        break;    

                    default:

                        var sw=0;
                        var ultimo=0;
                        var pa=1;
                        consultaMensajes(sw,ultimo,pa);
                        break;
                        
                }
            }
        });  
        return retunCodErr;
    }
    
    function abrirIncidente(){
        
        var URLdomain   = window.location.host;
        var URLprotocol = window.location.protocol;
        var incidente = $(this).attr( "incidente" );
        var parametros = { "incidente" : incidente };
        
        $.ajax({
            data:  parametros,
            url: URLprotocol+"//"+URLdomain+"/bodyflex/Mensajes/model/mensajesAbrirIncidenteModel.php",
            type:  'post',
            async:  false, //debe ser falso por la llamada del alert
            datetype: 'xml',
            success:  function (xml){

                //alert('mensajesConsultaModel ' + xml);

                var xmlDoc = $.parseXML(xml), $xml = $(xmlDoc);
                var codErr = xmlDoc.getElementsByTagName('CODERROR')[0].childNodes[0].nodeValue;
                var desErr = xmlDoc.getElementsByTagName('DESERROR')[0].childNodes[0].nodeValue;

                switch(codErr){
                    case '9':

                        var msg='<div style="text-align:center;" class="alert alert-block">';
                        msg+='<b><span style="color: #000;">' + '[' + codErr + '] ' + desErr + '</span></b>';
                        msg+='</div>';

                        $('#conWarningMsg').html(msg);    
                        $('#conWarningMsg').show();
                        break;   

                    case '99':

                        var msg='<div style="text-align:center;" class="alert alert-block">';
                        msg+='<b><span style="color: #000;">' + '[' + codErr + '] ' + desErr + '</span></b>';
                        msg+='</div>';

                        $('#conWarningMsg').html(msg);
                        $('#conWarningMsg').show();
                        break;

                    case '100':

                        var msg='<div style="text-align:center;" class="alert alert-block">';
                        msg+='<b><span style="color: #000;">' + '[' + codErr + '] ' + desErr + '</span></b>';
                        msg+='</div>';

                        $('#conWarningMsg').html(msg);
                        $('#conWarningMsg').show();
                        break;    

                    default:

                        var sw=0;
                        var ultimo=0;
                        var pa=1;
                        consultaMensajes(sw,ultimo,pa);
                        break;
                        
                }
            }
        });  
    }
    
</script>
<style>
    #infoMsg{
        margin-left: 10px; 
        color: green; 
        cursor: pointer;
    }
</style>
<div style="width: 50%; height: 650px;" class="span7"> <!-- border-color: black; border-style: double; -->
    <h1>Inbox <i id="infoMsg" onclick="infoMsg();" class="fa fa-info-circle"></i></h1>
    <table class="table table-bordered">
        <thead>
            <tr>
                <th>De</th>
                <th>Mensaje...</th>
                <th>Fecha</th>                                         
            </tr>
        </thead>   
        <tbody id="listaMensajes">

        </tbody>
    </table>  

    <div id="conWarningMsg" style="display: none;" class="box-content alerts"></div>
    
    <div id='idPag' class="pagination pagination-centered"></div>   
    <div id="divLoadPag" class="col-sm-3 text-right" style="display: none;">
        <div id='espera' style="width: 200px; height: 80px; margin-left: 40%;">&nbsp;</div>
    </div>  
    
    
        <!-- DATOS DEL REGISTRO SELECCIONADO-->
        INCIDENTE<input type="text" id="inc" value=""><!-- INCIDENTE -->
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