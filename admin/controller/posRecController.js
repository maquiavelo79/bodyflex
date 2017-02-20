
jQuery(document).ready(function() {

    var URLdomain   = window.location.host;
    var URLprotocol = window.location.protocol;
       
        var sw=0;
        var pa=1;
        var ultimo=0;
    
        //AJAX
        var parametros = { 
            "sw" : sw,
            "ultimo" : ultimo,
            "pa" : pa 
        };             
       
        $.ajax({
                data:  parametros,
                url: URLprotocol+"//"+URLdomain+"/bodyflex/admin/model/posRecCsuModel.php",
                type:  'post',
                datetype: 'xml',
            beforeSend: function(){
                $("#espera").show();
            },
            success:  function (xml){
                
                //alert('posEvaCsuModel ' + xml);                
                
                $("#espera").hide();
                var xmlDoc = $.parseXML(xml), $xml = $(xmlDoc);
                var codErr = xmlDoc.getElementsByTagName('CODERROR')[0].childNodes[0].nodeValue;
                var desErr = xmlDoc.getElementsByTagName('DESERROR')[0].childNodes[0].nodeValue;
                
                switch(codErr){
                    case '9':
    
                        var msg='<div style="text-align:center;" class="alert alert-block">';
                        msg+='<b><span style="color: black;">' + '[' + codErr + '] ' + desErr + '</span></b>';
                        msg+='</div>';
                            
                        $('#posWarning').html(msg);
                        $('#posWarning').show();
    
                        break; 
                        
                    case '8':

                        var msg='<div style="text-align:center;" class="alert alert-block">';
                        msg+='<b><span style="color: black;">' + '[' + codErr + '] ' + desErr + '</span></b>';
                        msg+='</div>';
                            
                        $('#posWarning').html(msg);
                        $('#posWarning').show();

                        break; 
                    
                    case '99':
                                              
                        var msg='<div style="text-align:center;" class="alert alert-block">';
                        msg+='<b><span style="color: black;">' + '[' + codErr + '] ' + desErr + '</span></b>';
                        msg+='</div>';

                        $('#posWarning').html(msg);
                        $('#posWarning').show();
                       
                        break; 

                    case '100':
                                              
                        var msg='<div style="text-align:center;" class="alert alert-block">';
                        msg+='<b><span style="color: black;">' + '[' + codErr + '] ' + desErr + '</span></b>';
                        msg+='</div>';

                        $('#posWarning').html(msg);
                        $('#posWarning').show();

                        break; 
  
                    case '98':
                                              
                        var msg='<div style="text-align:center;" class="alert alert-block">';
                        msg+='<b><span style="color: black;">' + '[' + codErr + '] ' + desErr + '</span></b>';
                        msg+='</div>';

                        $('#posWarning').html(msg);
                        $('#posWarning').show();

                        break;
                    
                    default:

                        var datos = xmlDoc.getElementsByTagName('DATOS')[0].childNodes[0].nodeValue;
                        var paginacion = xmlDoc.getElementsByTagName('PAGINACION')[0].childNodes[0].nodeValue;

                        $('#tbody').html(datos);
                        $('#idPag').html(paginacion);
                        
                        break;
                        
                }
            }
        });


    $('.label-warning').live('click', function() { 

        //alert('label-warning');

        //OBTENEMOS VALORES
        $('#posWarning').html('');

        var id=$(this).attr("id");

        //AJAX
            var parametros = { "id" : id };             

            $.ajax({
                    data:  parametros,
                    url: URLprotocol+"//"+URLdomain+"/bodyflex/admin/model/posRecEvaModel.php",
                    type:  'post',
                    datetype: 'xml',
                    async:  false,
                beforeSend: function(){
                    $("#espera").show();
                },
                success:  function (xml){

                    //alert('posRecEvaModel ' + xml);                

                    $("#espera").hide();
                    var xmlDoc = $.parseXML(xml), $xml = $(xmlDoc);
                    var codErr = xmlDoc.getElementsByTagName('CODERROR')[0].childNodes[0].nodeValue;
                    var desErr = xmlDoc.getElementsByTagName('DESERROR')[0].childNodes[0].nodeValue;

                    switch(codErr){
                        case '9':

                            var msg='<div style="text-align:center;" class="alert alert-block">';
                            msg+='<b><span style="color: black;">' + '[' + codErr + '] ' + desErr + '</span></b>';
                            msg+='</div>';

                            $('#posWarning').html(msg);
                            $('#posWarning').show();

                            break; 

                        case '8':

                            var msg='<div style="text-align:center;" class="alert alert-block">';
                            msg+='<b><span style="color: black;">' + '[' + codErr + '] ' + desErr + '</span></b>';
                            msg+='</div>';

                            $('#posWarning').html(msg);
                            $('#posWarning').show();

                            break; 

                        case '99':

                            var msg='<div style="text-align:center;" class="alert alert-block">';
                            msg+='<b><span style="color: black;">' + '[' + codErr + '] ' + desErr + '</span></b>';
                            msg+='</div>';

                            $('#posWarning').html(msg);
                            $('#posWarning').show();

                            break; 

                        case '100':

                            var msg='<div style="text-align:center;" class="alert alert-block">';
                            msg+='<b><span style="color: black;">' + '[' + codErr + '] ' + desErr + '</span></b>';
                            msg+='</div>';

                            $('#posWarning').html(msg);
                            $('#posWarning').show();

                            break; 

                        case '98':

                            var msg='<div style="text-align:center;" class="alert alert-block">';
                            msg+='<b><span style="color: black;">' + '[' + codErr + '] ' + desErr + '</span></b>';
                            msg+='</div>';

                            $('#posWarning').html(msg);
                            $('#posWarning').show();

                            break;

                        default:

                            var datos = xmlDoc.getElementsByTagName('DATOS')[0].childNodes[0].nodeValue;
                            if(datos==1){     

                                consultaPostulaciones(0,0,1);

                                var msg='<div style="text-align:center;" class="alert alert-warning">';
                                msg+='<b><span style="color: black;">' + 'Postulación ' + 'n° <b>' + id + '</b> enviada a <b>evaluación</b>.</span></b>';
                                msg+='</div>';

                                $('#posWarning').html(msg);
                                $('#posWarning').show();                                

                            }else{

                                var msg='<div style="text-align:center;" class="alert alert-block">';
                                msg+='<b><span style="color: black;">' + '[' + codErr + '] ' + desErr + '</span></b>';
                                msg+='</div>';

                                $('#posWarning').html(msg);
                                $('#posWarning').show();

                            }

                            break;

                    }
                }
            });

    }); 
    
    $('.label-error').live('click', function() { 

        //alert('label-warning');

        //OBTENEMOS VALORES
        $('#posWarning').html('');

        var id=$(this).attr("id");
        var nom=$(this).attr("nom");
        var ape=$(this).attr("ape");
        var email=$(this).attr("email");
        
        //AJAX
            var parametros = {"id":id, "nom":nom, "ape":ape, "email":email };             

            $.ajax({
                    data:  parametros,
                    url: URLprotocol+"//"+URLdomain+"/bodyflex/admin/model/posRecRecModel.php",
                    type:  'post',
                    datetype: 'xml',
                    async:  false,
                beforeSend: function(){
                    $("#espera").show();
                },
                success:  function (xml){

                    //alert('posIngModModel ' + xml);                

                    $("#espera").hide();
                    var xmlDoc = $.parseXML(xml), $xml = $(xmlDoc);
                    var codErr = xmlDoc.getElementsByTagName('CODERROR')[0].childNodes[0].nodeValue;
                    var desErr = xmlDoc.getElementsByTagName('DESERROR')[0].childNodes[0].nodeValue;

                    switch(codErr){
                        case '9':

                            var msg='<div style="text-align:center;" class="alert alert-block">';
                            msg+='<b><span style="color: black;">' + '[' + codErr + '] ' + desErr + '</span></b>';
                            msg+='</div>';

                            $('#posWarning').html(msg);
                            $('#posWarning').show();

                            break; 

                        case '8':

                            var msg='<div style="text-align:center;" class="alert alert-block">';
                            msg+='<b><span style="color: black;">' + '[' + codErr + '] ' + desErr + '</span></b>';
                            msg+='</div>';

                            $('#posWarning').html(msg);
                            $('#posWarning').show();

                            break; 

                        case '99':

                            var msg='<div style="text-align:center;" class="alert alert-block">';
                            msg+='<b><span style="color: black;">' + '[' + codErr + '] ' + desErr + '</span></b>';
                            msg+='</div>';

                            $('#posWarning').html(msg);
                            $('#posWarning').show();

                            break; 

                        case '100':

                            var msg='<div style="text-align:center;" class="alert alert-block">';
                            msg+='<b><span style="color: black;">' + '[' + codErr + '] ' + desErr + '</span></b>';
                            msg+='</div>';

                            $('#posWarning').html(msg);
                            $('#posWarning').show();

                            break; 

                        case '98':

                            var msg='<div style="text-align:center;" class="alert alert-block">';
                            msg+='<b><span style="color: black;">' + '[' + codErr + '] ' + desErr + '</span></b>';
                            msg+='</div>';

                            $('#posWarning').html(msg);
                            $('#posWarning').show();

                            break;

                        default:

                            var datos = xmlDoc.getElementsByTagName('DATOS')[0].childNodes[0].nodeValue;
                            if(datos==1){     

                                consultaPostulaciones(0,0,1);

                                var msg='<div style="text-align:center;" class="alert alert-error">';
                                msg+='<b><span style="color: black;">' + 'Postulación ' + 'n° <b>' + id + '</b>&nbsp;<b>rechazada</b>.</span></b>';
                                msg+='</div>';

                                $('#posWarning').html(msg);
                                $('#posWarning').show();                                

                            }else{

                                var msg='<div style="text-align:center;" class="alert alert-block">';
                                msg+='<b><span style="color: black;">' + '[' + codErr + '] ' + desErr + '</span></b>';
                                msg+='</div>';

                                $('#posWarning').html(msg);
                                $('#posWarning').show();

                            }

                            break;

                    }
                }
            });

    }); 
    
    $('.label-important').live('click', function() { 

        //alert('label-warning');

        //OBTENEMOS VALORES
        $('#posWarning').html('');

        var id=$(this).attr("id");
        

        //AJAX
            var parametros = {"id" : id};             

            $.ajax({
                    data:  parametros,
                    url: URLprotocol+"//"+URLdomain+"/bodyflex/admin/model/posEvaRecModel.php",
                    type:  'post',
                    datetype: 'xml',
                    async:  false,
                beforeSend: function(){
                    $("#espera").show();
                },
                success:  function (xml){

                    //alert('posIngModModel ' + xml);                

                    $("#espera").hide();
                    var xmlDoc = $.parseXML(xml), $xml = $(xmlDoc);
                    var codErr = xmlDoc.getElementsByTagName('CODERROR')[0].childNodes[0].nodeValue;
                    var desErr = xmlDoc.getElementsByTagName('DESERROR')[0].childNodes[0].nodeValue;

                    switch(codErr){
                        case '9':

                            var msg='<div style="text-align:center;" class="alert alert-block">';
                            msg+='<b><span style="color: black;">' + '[' + codErr + '] ' + desErr + '</span></b>';
                            msg+='</div>';

                            $('#posWarning').html(msg);
                            $('#posWarning').show();

                            break; 

                        case '8':

                            var msg='<div style="text-align:center;" class="alert alert-block">';
                            msg+='<b><span style="color: black;">' + '[' + codErr + '] ' + desErr + '</span></b>';
                            msg+='</div>';

                            $('#posWarning').html(msg);
                            $('#posWarning').show();

                            break; 

                        case '99':

                            var msg='<div style="text-align:center;" class="alert alert-block">';
                            msg+='<b><span style="color: black;">' + '[' + codErr + '] ' + desErr + '</span></b>';
                            msg+='</div>';

                            $('#posWarning').html(msg);
                            $('#posWarning').show();

                            break; 

                        case '100':

                            var msg='<div style="text-align:center;" class="alert alert-block">';
                            msg+='<b><span style="color: black;">' + '[' + codErr + '] ' + desErr + '</span></b>';
                            msg+='</div>';

                            $('#posWarning').html(msg);
                            $('#posWarning').show();

                            break; 

                        case '98':

                            var msg='<div style="text-align:center;" class="alert alert-block">';
                            msg+='<b><span style="color: black;">' + '[' + codErr + '] ' + desErr + '</span></b>';
                            msg+='</div>';

                            $('#posWarning').html(msg);
                            $('#posWarning').show();

                            break;

                        default:

                            var datos = xmlDoc.getElementsByTagName('DATOS')[0].childNodes[0].nodeValue;
                            if(datos==1){     

                                consultaPostulaciones(0,0,1);

                                var msg='<div style="text-align:center;" class="alert alert-error">';
                                msg+='<b><span style="color: black;">' + 'Postulación ' + 'n° <b>' + id + '</b> derivada a <b>rechazo</b>.</span></b>';
                                msg+='</div>';

                                $('#posWarning').html(msg);
                                $('#posWarning').show();                                

                            }else{

                                var msg='<div style="text-align:center;" class="alert alert-block">';
                                msg+='<b><span style="color: black;">' + '[' + codErr + '] ' + desErr + '</span></b>';
                                msg+='</div>';

                                $('#posWarning').html(msg);
                                $('#posWarning').show();

                            }

                            break;

                    }
                }
            });

    }); 
    
    
});

function consultaPostulaciones(sw,ultimo,pa){

    var URLdomain   = window.location.host;
    var URLprotocol = window.location.protocol;

    //Limpiamos Warning
    $('#posWarning').html('');

    //AJAX
    var parametros = { 
        "sw" : sw,
        "ultimo" : ultimo,
        "pa" : pa 
    };             

    $.ajax({
            data:  parametros,
            url: URLprotocol+"//"+URLdomain+"/bodyflex/admin/model/posRecCsuModel.php",
            type:  'post',
            datetype: 'xml',
        success:  function (xml){

            //alert('posEvaCsuModel ' + xml);                

            $("#espera").hide();
            var xmlDoc = $.parseXML(xml), $xml = $(xmlDoc);
            var codErr = xmlDoc.getElementsByTagName('CODERROR')[0].childNodes[0].nodeValue;
            var desErr = xmlDoc.getElementsByTagName('DESERROR')[0].childNodes[0].nodeValue;

            switch(codErr){
                case '9':

                    var msg='<div style="text-align:center;" class="alert alert-block">';
                    msg+='<b><span style="color: black;">' + '[' + codErr + '] ' + desErr + '</span></b>';
                    msg+='</div>';

                    $('#posWarning').html(msg);
                    $('#posWarning').show();

                    break; 

                case '8':

                    var msg='<div style="text-align:center;" class="alert alert-block">';
                    msg+='<b><span style="color: black;">' + '[' + codErr + '] ' + desErr + '</span></b>';
                    msg+='</div>';

                    $('#posWarning').html(msg);
                    $('#posWarning').show();

                    break; 

                case '99':

                    var msg='<div style="text-align:center;" class="alert alert-block">';
                    msg+='<b><span style="color: black;">' + '[' + codErr + '] ' + desErr + '</span></b>';
                    msg+='</div>';

                    $('#posWarning').html(msg);
                    $('#posWarning').show();

                    break; 

                case '100':

                    var msg='<div style="text-align:center;" class="alert alert-block">';
                    msg+='<b><span style="color: black;">' + '[' + codErr + '] ' + desErr + '</span></b>';
                    msg+='</div>';

                    $('#posWarning').html(msg);
                    $('#posWarning').show();

                    break; 

                case '98':

                    var msg='<div style="text-align:center;" class="alert alert-block">';
                    msg+='<b><span style="color: black;">' + '[' + codErr + '] ' + desErr + '</span></b>';
                    msg+='</div>';

                    $('#idPag').html('');
                    $('#tbody').html('');
                    $('#posWarning').html(msg);
                    $('#posWarning').show();

                    break;

                default:

                    var datos = xmlDoc.getElementsByTagName('DATOS')[0].childNodes[0].nodeValue;
                    var paginacion = xmlDoc.getElementsByTagName('PAGINACION')[0].childNodes[0].nodeValue;

                    $('#tbody').html(datos);
                    $('#idPag').html(paginacion);

                    break;

            }
        }
    });
        
};

