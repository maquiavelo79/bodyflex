
jQuery(document).ready(function() {
   
    var URLdomain   = window.location.host;
    var URLprotocol = window.location.protocol;
   
    $('.links a.home').tooltip();
    $('.links a.blog').tooltip();
    
    $('#submit').click(function(){
        
        //alert('presiono');
        
        $('#formReg').find("label[for='firstname']").html('Nombre');
        $('#formReg').find("label[for='lastname']").html('Apellido');
        $('#formReg').find("label[for='alias']").html('Alias');
        $('#formReg').find("label[for='email']").html('Email');
        $('#formReg').find("label[for='password']").html('Password');
        $('#formReg').find("label[for='fechaNacimiento']").html('Fecha nacimiento');
        
        ////
        var firstname = $('input:text[name=firstname]').val();
        var lastname = $('input:text[name=lastname]').val();
        var alias = $('input:text[name=alias]').val();
        var email = $('input:text[name=email]').val();
        var password = $('#password').val();
        var fechaNacimiento = $('#datepicker').val();
        var sexo = $('input:radio[name=sexo]:checked').val();
        

        if(firstname == '') {
            $('#formReg').find("label[for='firstname']").append("<span class='red'> - Por favor ingrese nombre.</span>");
            $('#formReg').find("label[for='firstname'] span").fadeIn('medium');
            return false;
        }
        if(lastname == '') {
            $('#formReg').find("label[for='lastname']").append("<span class='red'> - Por favor ingrese apellido.</span>");
            $('#formReg').find("label[for='lastname'] span").fadeIn('medium');
            return false;
        }
        if(alias == '') {
            $('#formReg').find("label[for='alias']").append("<span class='red'> - Por favor ingrese alias.</span>");
            $('#formReg').find("label[for='alias'] span").fadeIn('medium');
            return false;
        }
        if(email == '') {
            $('#formReg').find("label[for='email']").append("<span class='red'> - Por favor ingrese email.</span>");
            $('#formReg').find("label[for='email'] span").fadeIn('medium');
            return false;
        }
        if(password == '') {
            $('#formReg').find("label[for='password']").append("<span class='red'> - Por favor ingrese password.</span>");
            $('#formReg').find("label[for='password'] span").fadeIn('medium');
            return false;
        }
        if(fechaNacimiento == '') {
            $('#formReg').find("label[for='fechaNacimiento']").append("<span class='red'> - Por favor ingrese fecha de nacimiento.</span>");
            $('#formReg').find("label[for='fechaNacimiento'] span").fadeIn('medium');
            return false;
        }

        //Validamos email
        var regex = /[\w-\.]{2,}@([\w-]{2,}\.)*([\w-]{2,}\.)[\w-]{2,4}/;
        if (!regex.test($('#iemail').val().trim())) {
            $('#formReg').find("label[for='email']").append("<span class='red'> - Por favor ingrese email válido.</span>");
            $('#formReg').find("label[for='email'] span").fadeIn('medium');
            return false;
        }
        
        //prepara fecha
        var matrix= fechaNacimiento.split('-');
        var fecha=matrix[2]+matrix[1]+matrix[0];
        
        //alert('fecha ' + fecha);
        
        var parametros = {
            "firstname" : firstname,
            "lastname" : lastname,
            "alias" : alias,
            "email" : email,
            "password" : password,
            "fechaNacimiento" : fecha,
            "sexo" : sexo
        };
           
        $.ajax({
            data:  parametros,
            url: URLprotocol+"//"+URLdomain+"/bodyflex/registroUsuario/modelo/ingresoUserModel.php",
            type:  'post',
            datetype: 'xml',
            beforeSend: function(){
                $('#espera').show();
            },
            success: function(xml){
                
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

                default:
                                         
                    var strHtml="<br><a href='"+ URLprotocol+"//"+URLdomain +"/bodyflex/index.php' rel='tooltip' data-placement='bottom' data-original-title='Home'>";
                        strHtml+="<p style='color: black; font-size: 18px;'><b>Registro exitoso</b>, favor ingrese a la plataforma con su <b>usuario</b> y <b>contraseña</b>.</p>";
                        strHtml+="<i style='color: green;' class='fa fa-check-circle fa-2x'></i>";
                    strHtml+='</a>';       
                                                
                    $('#botonera').html(strHtml);
                    $('#botonera').show();
                
                    $('#espera').hide();
                    $('#firstname').attr('disabled','disabled');
                    $('#lastname').attr('disabled','disabled');
                    $('#ialias').attr('disabled','disabled');
                    $('#iemail').attr('disabled','disabled');
                    $('#password').attr('disabled','disabled');
                    $('#datepicker').attr('disabled','disabled');
                    $('#sexo').attr('disabled','disabled');
                    break;
                    
                }

            }
        }); 
    });
    
    $( "#ialias" ).focusout(function() {
        
        var alias = $('#ialias').val(); 
        if(alias.length>0){
            var parametros = {"alias" : alias};
            $.ajax({
                data:  parametros,
                url: URLprotocol+"//"+URLdomain+"/bodyflex/registroUsuario/modelo/verificaAleasModel.php",
                type:  'post',
                datetype: 'xml',
                beforeSend: function(){
                    $("#lalias").html("Procesando, espere por favor...");
                },
                success:  function(xml){
                    
                    //alert('verificaAleasModel ' + xml);
                    
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
                       
                        var res = xmlDoc.getElementsByTagName('DATOS')[0].childNodes[0].nodeValue;
                        
                        //res=1;
                        
                        if(res==1){
                            $('#lalias').html('<p style="color: red;"><i>- El alias se encuentra utilizado, por favor ingrese otro!</i></p>');
                            $('#submit').attr("disabled", true);
                        }else{
                            $('#lalias').html('Alias');
                            $('#submit').attr("disabled", false);
                        } 
                        
                    }
                    
                }
            });
        }
        
    });
    
    $( "#iemail" ).focusout(function() {
        var email = $('#iemail').val(); 
        if(email.length>0){
            var regex = /[\w-\.]{2,}@([\w-]{2,}\.)*([\w-]{2,}\.)[\w-]{2,4}/;
            if (regex.test($('#iemail').val().trim())) {
                var parametros = {"email" : email};
                $.ajax({
                    data:  parametros,
                    url: URLprotocol+"//"+URLdomain+"/bodyflex/registroUsuario/modelo/verificaMailModel.php",
                    type:  'post',
                    datetype: 'xml',
                    beforeSend: function(){
                        $("#lemail").html("Procesando, espere por favor...");
                    },
                    success: function (xml){   
                        //alert('response ' + response);
                        
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

                            var res = xmlDoc.getElementsByTagName('DATOS')[0].childNodes[0].nodeValue;

                            //res=1;

                            if(res==1){
                                $('#lemail').html('<p style="color: red;"><i>- El email se encuentra registrado, por favor ingrese otro!</i></p>');
                                $('#submit').attr("disabled", true);
                            }else{
                                $('#lemail').html('Email');
                                $('#submit').attr("disabled", false);
                            } 

                        }      
                    }
                });
            }else {
                $("#lemail").html("<span style='color:red;'> - Favor ingrese un email válido.</span>");
            }            
        }else{
            $("#lemail").html("Email");
        }
        
    });
});


