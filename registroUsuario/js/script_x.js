
jQuery(document).ready(function() {

    /*
        Background slideshow
    */
    $.backstretch([
      "assets/img/backgrounds/1.jpg"
    , "assets/img/backgrounds/2.jpg"
    , "assets/img/backgrounds/3.jpg"
    ], {duration: 3000, fade: 750});

    /*
        Tooltips
    */
    $('.links a.home').tooltip();
    $('.links a.blog').tooltip();

    /*
        Form validation
    */
    $('.register form').submit(function(){
        $(this).find("label[for='firstname']").html('Nombre');
        $(this).find("label[for='lastname']").html('Apellido');
        $(this).find("label[for='alias']").html('Alias');
        $(this).find("label[for='email']").html('Email');
        $(this).find("label[for='password']").html('Password');
        $(this).find("label[for='fechaNacimiento']").html('Fecha nacimiento');
        
        ////
        var firstname = $(this).find('input#firstname').val();
        var lastname = $(this).find('input#lastname').val();
        var alias = $(this).find('input#alias').val();
        var email = $(this).find('input#email').val();
        var password = $(this).find('input#password').val();
        var fechaNacimiento = $(this).find('input#datepicker').val();
        
        if(firstname == '') {
            $(this).find("label[for='firstname']").append("<span style='display:none' class='red'> - Por favor ingrese nombre.</span>");
            $(this).find("label[for='firstname'] span").fadeIn('medium');
            return false;
        }
        if(lastname == '') {
            $(this).find("label[for='lastname']").append("<span style='display:none' class='red'> - Por favor ingrese apellido.</span>");
            $(this).find("label[for='lastname'] span").fadeIn('medium');
            return false;
        }
        if(alias == '') {
            $(this).find("label[for='alias']").append("<span style='display:none' class='red'> - Por favor ingrese alias.</span>");
            $(this).find("label[for='alias'] span").fadeIn('medium');
            return false;
        }
        if(email == '') {
            $(this).find("label[for='email']").append("<span style='display:none' class='red'> - Por favor ingrese email.</span>");
            $(this).find("label[for='email'] span").fadeIn('medium');
            return false;
        }
        if(password == '') {
            $(this).find("label[for='password']").append("<span style='display:none' class='red'> - Por favor ingrese password.</span>");
            $(this).find("label[for='password'] span").fadeIn('medium');
            return false;
        }
        if(fechaNacimiento == '') {
            $(this).find("label[for='fechaNacimiento']").append("<span style='display:none' class='red'> - Por favor ingrese fecha de nacimiento.</span>");
            $(this).find("label[for='fechaNacimiento'] span").fadeIn('medium');
            return false;
        }
        
        //Validamos email
        var regex = /[\w-\.]{2,}@([\w-]{2,}\.)*([\w-]{2,}\.)[\w-]{2,4}/;
        //Se utiliza la funcion test() nativa de JavaScript
        if (!regex.test($('#email').val().trim())) {
            $(this).find("label[for='email']").append("<span style='display:none' class='red'> - Por favor ingrese email válido.</span>");
            $(this).find("label[for='email'] span").fadeIn('medium');
            return false;
        }
                
        //Validamos fecha
        var RegExPattern = /^\d{1,2}\-\d{1,2}\-\d{2,4}$/;
        if (!fechaNacimiento.match(RegExPattern)) {
            $(this).find("label[for='fechaNacimiento']").append("<span style='display:none' class='red'> - Por favor ingrese fecha válida.</span>");
            $(this).find("label[for='fechaNacimiento'] span").fadeIn('medium');
            return false;
        }
        
    });
    
    $( "#alias" ).focusout(function() {

        var alias = $('#alias').val();
        var parametros = {"alias" : alias};
        $.ajax({
            data:  parametros,
	    url:   'ejemplo_ajax_proceso.php',
	    type:  'post',
	    beforeSend: function(){
                $("#resultado").html("Procesando, espere por favor...");
	    },
            success:  function (response){
	        $("#resultado").html(response);
	    }
	});
        
        $('.register form').find("label[for='alias']").append("<span style='display:none' class='red'> - Este Alias esta en uso, favor ingrese otro.</span>");    
        $('.register form').find("label[for='alias'] span").fadeIn('medium');
        alert(alias);
        
    });


});


