<style>
    .classStyle{
        background-color: whitesmoke; 
        box-shadow: 0 0 2px black; 
        margin: 0px 0px 0px 0px; 
        font-weight: bold; 
        color: black; 
        width:180px; 
        text-align: center;
    }
</style>
<script>
    
    jQuery(document).ready(function() {

        var URLdomain   = window.location.host;
        var URLprotocol = window.location.protocol;
        var rut=$('#rut').val();            //RUT ORIGEN
        var parametros = { "rut" : rut };        

        if($('#rol').val()!='ADM'){
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
        }else{
            $('#soporte').hide();
        }
    });
    
    function solicitud_de_Soporte(){
    
    swal({
        title: '<i class="fa fa-life-ring"></i>&nbsp;SOPORTE',
        input: 'textarea',
        inputAttributes: {
            'maxlength': 150
        },
        showCancelButton: true,
        html: '<p style="text-align: justify; font-size: 16px; font-family: Verdana; color: ##566573;">Si necesitas ayuda comunicate con nosotros enviandonos tus dudas, nos comunicaremos a la brevedad posible por medio de tu <b style="font-weight: bold;">bandeja de mensajes</b></p>',
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
<div class="row-fluid sortable">
    <div class="box span12">
        <div class="box-header" data-original-title>
            <h2><i class="halflings-icon edit"></i><span class="break"></span>Datos Usuario</h2>
            <div class="box-icon">
                <a href="#" class="btn-minimize"><i class="halflings-icon chevron-up"></i></a>
            </div>
        </div>
        <div class="box-content" style="height: 50px;">
            <table class="table">
                <tr>
                    <td class="center">
                        <span class="input-xlarge uneditable-input classStyle"><?= $_SESSION['rut'];?>&nbsp;-&nbsp;<?= $_SESSION['dv'];?></span>
                    </td>
                    <td class="center">
                        <span class="input-xlarge uneditable-input classStyle"><?= $_SESSION['nombre'];?></span>
                    </td>
                    <td class="center">
                        <span class="input-xlarge uneditable-input classStyle"><?= $_SESSION['apellido'];?></span>
                    </td>
                    <td class="center">
                        <span class="input-xlarge uneditable-input classStyle"><?= $_SESSION['rol'];?></span>
                    </td>                                 
                    <td class="center">
                        <span class="input-xlarge uneditable-input classStyle"><?= $_SESSION['alias'];?></span>
                    </td>
                    <td class="center">
                        <span class="input-xlarge uneditable-input classStyle"><?= $_SESSION['email'];?></span>
                    </td>
                    <td id="soporte" class="center">
                        <a style="cursor: pointer;" onclick="solicitud_de_Soporte();"> 
                            <i style="margin-left: 10px;" class="fa fa-life-ring fa-2x"></i>&nbsp;<br>
                            <span style="font-weight: bold; font-size: 10px;" class="hidden-xs">SOPORTE
                                <span id="numRspSoporte" style="font-size: 12px; background: #EB3C00 !important; border-color: #EB3C00 !important; color: #fff; font-weight: bold;"></span>
                            </span>   
                        </a>
                    </td>
                </tr>                            
             </table>  
        </div>
    </div><!--/span-->
</div><!--/row-->
<input type="hidden" id="mensajeSoporte" value="">
