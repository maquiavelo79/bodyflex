
jQuery(document).ready(function() {
    
    var URLdomain   = window.location.host;
    var URLprotocol = window.location.protocol;
    
    $('.links a.home').tooltip();
    $('.links a.blog').tooltip();
    
    $('#rMenos').hide();
    
    $('#button').click(function(){
        
        $('#formReg').find("label[for='email']").html('Email');
        var email = $('input:text[name=email]').val();

        if(email==''){
            $('#formReg').find("label[for='email']").append("<span style='color:red;'> - Favor ingrese un Email.</span>");
            $('#formReg').find("label[for='email'] span").fadeIn('medium');
            return false;
        }
               
        //Validamos email
        var regex = /[\w-\.]{2,}@([\w-]{2,}\.)*([\w-]{2,}\.)[\w-]{2,4}/;
        if (!regex.test($('#iemail').val().trim())) {
            $('#formReg').find("label[for='email']").append("<span class='red'> - Por favor ingrese email válido.</span>");
            $('#formReg').find("label[for='email'] span").fadeIn('medium');
            return false;
        }

        //primera llamada
        var mailParam = {"email" : email};
        $.ajax({
            data:  mailParam,
            url: URLprotocol+"//"+URLdomain+"/bodyflex/recuperaContrasena/modelo/verificaMailModel.php",
            type:  'post',
            datetype: 'xml',
            beforeSend: function(){
                $('#espera').show();
                $('#rMenos').hide();
                $('#button').attr("disabled", true);
            },
            success:  function (xml){ 
                
                //alert('verificaMailModel ' + xml);
                
                $('#espera').hide();
                //$('#button').attr("disabled", false);
                var xmlDoc = $.parseXML(xml), $xml = $(xmlDoc);
                var codErr = xmlDoc.getElementsByTagName('CODERROR')[0].childNodes[0].nodeValue;
                var desErr = xmlDoc.getElementsByTagName('DESERROR')[0].childNodes[0].nodeValue;

                switch(codErr){
                case '9':

                    var msg='<div style="text-align:center;" class="alert alert-block">';
                    msg+='<b><span style="color: black;">' + '[' + codErr + '] ' + desErr + '</span></b>';
                    msg+='</div>';

                    $('#botonera').html(msg);
                    $('#botonera').show();
                    break; 

                case '8':

                    var msg='<div style="text-align:center;" class="alert alert-block">';
                    msg+='<b><span style="color: black;">' + '[' + codErr + '] ' + desErr + '</span></b>';
                    msg+='</div>';

                    $('#botonera').html(msg);
                    $('#botonera').show();
                    break; 

                case '99':

                    var msg='<div style="text-align:center;" class="alert alert-block">';
                    msg+='<b><span style="color: black;">' + '[' + codErr + '] ' + desErr + '</span></b>';
                    msg+='</div>';

                    $('#botonera').html(msg);
                    $('#botonera').show();
                    break; 

                case '100':

                    var msg='<div style="text-align:center;" class="alert alert-block">';
                    msg+='<b><span style="color: black;">' + '[' + codErr + '] ' + desErr + '</span></b>';
                    msg+='</div>';

                    $('#botonera').html(msg);
                    $('#botonera').show();
                    break; 

                case '98':

                    var msg='<div style="text-align:center;" class="alert alert-block">';
                    msg+='<b><span style="color: black;">' + '[' + codErr + '] ' + desErr + '</span></b>';
                    msg+='</div>';

                    $('#botonera').html(msg);
                    $('#botonera').show();
                    break; 

                default:
                                         
                    var codRsp = xmlDoc.getElementsByTagName('DATOS')[0].childNodes[0].nodeValue;
                    
                    //alert('codRsp ' + codRsp);
                    
                    if(codRsp==2){
                        $('#swmail').val(2);
                        $('#rMenos').show();    
                    }else{
                        
                        $('#swmail').val(1);
                        var parametros = {"email" : email};
                        $.ajax({
                            data:  parametros,
                            url: URLprotocol+"//"+URLdomain+"/bodyflex/recuperaContrasena/modelo/recuperaContrasenaModel.php",
                            type:  'post',
                            datetype: 'xml',
                            beforeSend: function(){
                                $('#espera').show();
                            },
                            success:  function (xml){
                                
                                //alert('recuperaContrasenaModel ' + xml);
                                
                                $('#espera').hide();
                                var xmlDoc = $.parseXML(xml), $xml = $(xmlDoc);
                                var codErr = xmlDoc.getElementsByTagName('CODERROR')[0].childNodes[0].nodeValue;
                                var desErr = xmlDoc.getElementsByTagName('DESERROR')[0].childNodes[0].nodeValue;

                                switch(codErr){
                                case '9':

                                    var msg='<div style="text-align:center;" class="alert alert-block">';
                                    msg+='<b><span style="color: black;">' + '[' + codErr + '] ' + desErr + '</span></b>';
                                    msg+='</div>';

                                    $('#botonera').html(msg);
                                    $('#botonera').show();
                                    break; 

                                case '8':

                                    var msg='<div style="text-align:center;" class="alert alert-block">';
                                    msg+='<b><span style="color: black;">' + '[' + codErr + '] ' + desErr + '</span></b>';
                                    msg+='</div>';

                                    $('#botonera').html(msg);
                                    $('#botonera').show();
                                    break; 

                                case '99':

                                    var msg='<div style="text-align:center;" class="alert alert-block">';
                                    msg+='<b><span style="color: black;">' + '[' + codErr + '] ' + desErr + '</span></b>';
                                    msg+='</div>';

                                    $('#botonera').html(msg);
                                    $('#botonera').show();
                                    break; 

                                case '100':

                                    var msg='<div style="text-align:center;" class="alert alert-block">';
                                    msg+='<b><span style="color: black;">' + '[' + codErr + '] ' + desErr + '</span></b>';
                                    msg+='</div>';

                                    $('#botonera').html(msg);
                                    $('#botonera').show();
                                    break; 

                                case '98':

                                    var msg='<div style="text-align:center;" class="alert alert-block">';
                                    msg+='<b><span style="color: black;">' + '[' + codErr + '] ' + desErr + '</span></b>';
                                    msg+='</div>';

                                    $('#botonera').html(msg);
                                    $('#botonera').show();
                                    break; 

                                case '97':

                                    var msg='<div style="text-align:center;" class="alert alert-block">';
                                    msg+='<b><span style="color: black;">' + '[' + codErr + '] ' + desErr + '</span></b>';
                                    msg+='</div>';

                                    $('#botonera').html(msg);
                                    $('#botonera').show();
                                    break; 
                                
                                default:
                                    
                                    $('#botonera').hide();
                                    $('#rPlus').show();
                                    
                                    break;

                                }
                            }
                        }); 
                    }
                    break;
                    
                }
            }
        });
    });
});


