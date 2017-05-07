<script src="http://code.jquery.com/jquery-1.11.0.min.js"></script> 
<script>    
jQuery(document).ready(function() {

    var URLdomain   = window.location.host;
    var URLprotocol = window.location.protocol;
    var rut=$('#rut').val();            //RUT ORIGEN
    var parametros = { "rut" : rut };        
  
    //OBTIENE WHATSAPP DE CONTACTO
    $.ajax({
            data:  parametros,
            url: URLprotocol+"//"+URLdomain+"/bodyflex/catalogo/model/proCsuRspSoporte.php",
            type:  'post',
            datetype: 'xml',
            async: true,
        beforeSend: function(){
            $("#espera").show();
        },
        success:  function(xml){

            //alert('proCsuRspSoporte '+xml);

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

                default:

                    $("#espera").hide();
                    var cant = xmlDoc.getElementsByTagName('CANTIDAD')[0].childNodes[0].nodeValue;
                    if(cant>0){
                        $('#numRspSoporte').show();
                        $('#numRspSoporte').val(cant);
                    }else{
                        $('#numRspSoporte').hide();
                    }    
                    break;
                    
            }
        }
    });
    
    $("#txtNombreProfesional").val($('#nombre').val()+' '+$('#apellido').val());
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

function solicitud_de_Soporte(){
    
    swal({
        title: '<i class="fa fa-life-ring"></i>&nbsp;SOPORTE',
        input: 'textarea',
        inputAttributes: {
            'maxlength': 150
        },
        showCancelButton: true,
        html: '<p style="text-align: justify; font-size: 16px; font-family: Verdana; color: ##566573;">Si necesitas ayuda comunicate con nosotros enviandonos tus dudas, nos comunicaremos a la brevedad posible por medio de tu <b>bandeja de mensajes</b></p>',
        confirmButtonText: 'Enviar',
        showLoaderOnConfirm: true,
        preConfirm: function (mensaje) {
          return new Promise(function (resolve, reject) {
            setTimeout(function() {
              if (mensaje.trim().length=='0'){
                reject('Debes escribir un mensaje.')
              }else{
                //alert('mensaje ' + mensaje);  
                $("#mensajeSoporte").val(mensaje);  
                var respuesta = generarRegistroSoporte(); 
                switch(respuesta){
                    case 9: reject('Retorna 9')
                        break;
                    case 99: reject('Retorna 99')
                        break;
                    case 100: reject('Retorna 100')
                        break;    
                    default:
                        resolve()
                        break;
                }    
              }
            }, 2000)
          })
        },
        allowOutsideClick: false
    }).then(function (email) {
        swal({
          type: 'success',
          title: 'Mensaje enviado !',
          html: '<pre style="font-size: 13px; font-weight: bold; color: blue;">Gracias por tu mensaje, te contactaremos a la brevedad posible!</pre> '
        })
    })
    
}

function generarRegistroSoporte(){
    
    var URLdomain   = window.location.host;
    var URLprotocol = window.location.protocol;

    var rut=$('#rut').val();            //RUT ORIGEN
    var asunto='SOPORTE';      
    var mensajeSoporte=$('#mensajeSoporte').val();    
    var rol=$('#rol').val();            //ROL QUE ENVÍA EL MENSAJE
    var email=$('#email').val();        //EMAIL ORIGEN
    var resultado=0;


    var parametros = { 
                        "rut" : rut
                        ,   "mensaje" : mensajeSoporte 
                        ,   "asunto" : asunto 
                        ,   "rol" : rol 
                        ,   "email" : email
                    };        
    $.ajax({
        data:  parametros,
        url: URLprotocol+"//"+URLdomain+"/bodyflex/catalogo/model/proContactSoporte.php",
        type:  'post',
        async:  false,
        datetype: 'xml',
        success:  function (xml){

            //alert('proContactSoporte ' + xml);

            var xmlDoc = $.parseXML(xml), $xml = $(xmlDoc);
            var codErr = xmlDoc.getElementsByTagName('CODERROR')[0].childNodes[0].nodeValue;
            var desErr = xmlDoc.getElementsByTagName('DESERROR')[0].childNodes[0].nodeValue;

            switch(codErr){
                case '9':
                    resultado=9;
                    break;   

                case '99':
                    resultado=99;
                    break;

                case '100':
                    resultado=100;
                    break;    

                default:
                    resultado=0;
                    break;
            }
        }
    });
    return resultado;
    
}

</script>
<div class="navbar-top">
    <div class="container">
        <div class="row">
            <div class="col-lg-6 col-sm-6 col-xs-6 col-md-6">
                <div class="pull-left ">
                    <ul class="userMenu ">
                        <li>
                            <a onclick="solicitud_de_Soporte();"> 
                                <i style="font-weight: bold; color: #FFCC00;" class="fa fa-life-ring fa-lg"></i>&nbsp;
                                <span style="font-weight: bold; font-size: 14px; color: #FFCC00;" class="hidden-xs">SOPORTE
                                    <span id="numRspSoporte" style="background: #EB3C00 !important; border-color: #EB3C00 !important; color: #fff; font-weight: bold;">
                                        5!
                                    </span>
                                </span>
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

<!-- MODAL PRODUCTO VITRINA-->
    <input type="hidden" id="mensajeSoporte" value="">
<!-- MODAL PRODUCTO -->

<!--/.navbar-top-->