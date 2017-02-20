

jQuery(document).ready(function(){
    
var URLdomain   = window.location.host;
var URLprotocol = window.location.protocol;
    
    $('.links a.home').tooltip();
    $('.links a.blog').tooltip();

    $('#btnEstablecer').click(function(){
        
        $('#formReg').find("label[for='email']").html('Email');
        var email = $('input:text[name=email]').val();
        var codigo = $('input:text[name=codigo]').val();
             
        //alert('email ' + email);
        
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

        var p1 = $("input[name='password1']").val();
        if(p1==''){
            $('#formReg').find("label[for='password1']").html("<span style='color:red;'> Password - Favor ingrese password1.</span>");
            $('#formReg').find("label[for='password1'] span").fadeIn('medium');
            return false;
        }
        
        var p2 = $("input[name='password2']").val();
        if(p2==''){
           $('#formReg').find("label[for='password2']").html("<span style='color:red;'> Password - Favor ingrese password2.</span>");
           $('#formReg').find("label[for='password2'] span").fadeIn('medium');
           return false;
        }
        
        if(p1!=p2){
           $('#formReg').find("label[for='password1']").html("<span style='color:red;'> Password1 - Password 1 y 2 son distintas.</span>");
           $('#formReg').find("label[for='password2']").html("<span style='color:red;'> Password2 - Password 1 y 2 son distintas.</span>");
           $('#formReg').find("label[for='password1'] span").fadeIn('medium');
           $('#formReg').find("label[for='password2'] span").fadeIn('medium');
           return false;
        }
        
        //Contraseña >= 8 caracteres
        if(p1.length<5){
           $('#formReg').find("label[for='password1']").html("<span style='color:red;'> Password - La contraseña debe tener 5 o más caracteres.</span>");
           $('#formReg').find("label[for='password1'] span").fadeIn('medium');
           return false;
        }
                
        var pass = $("input[name='password1']").val();
        
        //primera llamada
        var parametros = { "codigo" : codigo, "email" : email };
        $.ajax({
            data:  parametros,
            url: URLprotocol+"//"+URLdomain+"/bodyflex/recuperaContrasena/modelo/verificaCodigoModel.php",
            type:  'post',
            datetype: 'xml',
            beforeSend: function(){
                $('#espera').show();
                $('#button').attr("disabled", true);
            },
            success:  function (xml){ 
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

                        var codRsp = xmlDoc.getElementsByTagName('DATOS')[0].childNodes[0].nodeValue;
                        if(codRsp==2){
                            $('#lCodigo').html('<p style="color: red;"><i>Ingrese un código válido</i></p>');
                            return false;
                        }else{
                            $('#botonera').hide();
                            $('#rPlus').show();   
                        }
                        break;
                        
                }
            }
        });
                
        var parametros = {  "email" : email, "codigo" : codigo, "pass": pass  };
        $.ajax({
            data:  parametros,
            url: URLprotocol+"//"+URLdomain+"/bodyflex/recuperaContrasena/modelo/regularizaCuentaCodigoModel.php",
            type:  'post',
            datetype: 'xml',
            async: false,
            beforeSend: function(){
                $('#espera').show();
                $('#button').attr("disabled", true);
            },
            success:  function (xml){ 
                
                //alert('regularizaCuentaCodigoModel ' + xml);
                
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

                        var codRsp = xmlDoc.getElementsByTagName('DATOS')[0].childNodes[0].nodeValue;
                        if(codRsp==1){
                            $('#rPlus').show();
                            $('#claveEstablecida').val(1);
                            
//                            $('#iemail').prop('disabled',true);
//                            $('#codigo').prop('disabled',true);
//                            $('#password1').prop('disabled',true);
//                            $('#password2').prop('disabled',true);
                            
                            $("#iemail").attr('disabled', true).trigger("liszt:updated");
                            $("#codigo").attr('disabled', true).trigger("liszt:updated");
                            $("#password1").attr('disabled', true).trigger("liszt:updated");
                            $("#password2").attr('disabled', true).trigger("liszt:updated");
                            
                        }
                        
                        break;
                        
                }
            }
        });

    });

    $('#iemail').focusout(function(){
        
        var URLdomain   = window.location.host;
        var URLprotocol = window.location.protocol;
        var email = $('input:text[name=email]').val();

//        if( $('#claveEstablecida').val()!=1){    
            if(email==''){

                $('#formReg').find("label[for='email']").html("<span style='color:red;'> Email - Favor ingrese un Email.</span>");
                $('#formReg').find("label[for='email'] span").fadeIn('medium');
                return false;

            }else{

                var regex = /[\w-\.]{2,}@([\w-]{2,}\.)*([\w-]{2,}\.)[\w-]{2,4}/;
                if (!regex.test($('#iemail').val().trim())) {
                    $('#formReg').find("label[for='email']").html("<span class='red'> Email - Por favor ingrese email válido.</span>");
                    $('#formReg').find("label[for='email'] span").fadeIn('medium');
                    return false;
                }else{

                    //alert('email ' + email);

                    var parametros = {"email" : email};
                    $.ajax({
                            data:  parametros,
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
                                            if(codRsp==2){
                                                $('#rMenos').show();
                                                $('#botonera').hide();
                                                $('#lemail').html('<p style="color: red;"><i>Email ingresado no esta registrado!</i></p>');
                                            }else{
                                                $('#rMenos').hide();
                                                $('#botonera').show();
                                                $('#lemail').html('Email');
                                            }
                                            break;

                                    }
                            }
                    });

                }

            }
//        }    
    });

    $('#codigo').focusout(function(){

        var URLdomain   = window.location.host;
        var URLprotocol = window.location.protocol;
        var codigo = $('input:text[name=codigo]').val();

//        if( $('#claveEstablecida').val()!=1){    
        
            if(codigo==''){

                $('#formReg').find("label[for='codigo']").html("<span style='color:red;'> Código - Favor ingrese código recibido vía email.</span>");
                $('#formReg').find("label[for='codigo'] span").fadeIn('medium');
                return false;

            }else{

                var email = $('input:text[name=email]').val();
                if(email==''){

                    $('#formReg').find("label[for='email']").html("<span style='color:red;'> Email - Favor ingrese un Email.</span>");
                    $('#formReg').find("label[for='email'] span").fadeIn('medium');
                    return false;

                }else{

                    var regex = /[\w-\.]{2,}@([\w-]{2,}\.)*([\w-]{2,}\.)[\w-]{2,4}/;
                    if (!regex.test($('#iemail').val().trim())) {

                        $('#formReg').find("label[for='email']").html("<span class='red'> Email - Por favor ingrese email válido.</span>");
                        $('#formReg').find("label[for='email'] span").fadeIn('medium');
                        return false;

                    }else{

                        var parametros = { "codigo" : codigo, "email" : email };
                        $.ajax({
                            data:  parametros,
                            url: URLprotocol+"//"+URLdomain+"/bodyflex/recuperaContrasena/modelo/verificaCodigoModel.php",
                            type:  'post',
                            datetype: 'xml',
                            beforeSend: function(){
                                $('#espera').show();
                                $('#button').attr("disabled", true);
                            },
                            success:  function (xml){ 

                                //alert('verificaCodigoModel ' + xml);

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

                                        var codRsp = xmlDoc.getElementsByTagName('DATOS')[0].childNodes[0].nodeValue;
                                        if(codRsp==2){
                                            $('#lCodigo').html('<p style="color: red;"><i>Ingrese un código válido</i></p>');
                                        }else{
                                            $('#lCodigo').html('C&oacute;digo enviado a su casilla');
                                        }
                                        break;

                                }
                            }
                        });
                    }
                    
                }
            }
//        }
    });

    $('#codigo').keydown(function(e) {

        tecla = (document.all) ? e.keyCode : e.which;
        if (tecla==8) return true; // backspace
        if (tecla==32) return true; // espacio
        if (e.ctrlKey && tecla==86) { return true;} //Ctrl v
        if (e.ctrlKey && tecla==67) { return true;} //Ctrl c
        if (e.ctrlKey && tecla==88) { return true;} //Ctrl x

        patron = /[0-9a-zA-Z]/; //patron

        te = String.fromCharCode(tecla);
        return patron.test(te); // prueba de patron

    });	

    $('#password1').focusout(function() {
       var p1 = $("input[name='password1']").val();
       if(p1==''){
           $('#formReg').find("label[for='password1']").html("<span style='color:red;'> Password - Favor ingrese password1.</span>");
           $('#formReg').find("label[for='password1'] span").fadeIn('medium');
           return false;
       }
    });

    $('#password2').focusout(function() {
        var p2 = $("input[name='password2']").val();
        if(p2==''){
           $('#formReg').find("label[for='password2']").html("<span style='color:red;'> Password - Favor ingrese password2.</span>");
           $('#formReg').find("label[for='password2'] span").fadeIn('medium');
           return false;
        }
    });
    
});    