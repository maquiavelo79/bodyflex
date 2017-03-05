
jQuery(document).ready(function() {

    var URLdomain   = window.location.host;
    var URLprotocol = window.location.protocol;
       
    $('#tbl1').hide();
    $('#tbl2').show();
           
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
                url: URLprotocol+"//"+URLdomain+"/bodyflex/admin/model/posAprCsuModel.php",
                type:  'post',
                datetype: 'xml',
                async: true,
            beforeSend: function(){
                $("#espera").show();
            },
            success: function (xml){
                
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

                        $('#tbody2').html(datos);
                        $('#idPag').html(paginacion);
                        
                        break;
                        
                }
            }
        });


    $('.label-warning').live('click', function() { 

        //ENVIO A ETAPA DE EVALUACIÓN

        //OBTENEMOS VALORES
        $('#posWarning').html('');

        var id=$(this).attr("id");

        //AJAX
            var parametros = { "id":id };             

            $.ajax({
                    data:  parametros,
                    url: URLprotocol+"//"+URLdomain+"/bodyflex/admin/model/posAprEvaModel.php",
                    type:  'post',
                    datetype: 'xml',
                    async:  true,
                beforeSend: function(){
                    $("#espera").show();
                },
                success:  function (xml){

                    //alert('posAprEvaModel ' + xml);                

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

                            $('#tbody2').html("");
                            $('#idPag').html("");

                            break;

                        default:

                            var datos = xmlDoc.getElementsByTagName('DATOS')[0].childNodes[0].nodeValue;
                            
                            //alert('datos ' + datos);
                            
                            if(datos==1){     

                                consultaPostulaciones(0,0,1);

                                var msg='<div style="text-align:center;" class="alert alert-warning">';
                                msg+='<b><span style="color: black;">' + 'Postulación ' + 'n° <b>' + id + '</b> enviada a etapa de <b>evaluación</b>.</span></b>';
                                msg+='</div>';

                                $('#posWarning').html(msg);
                                $('#posWarning').show();  
                                location.reload();

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

        //APRUEBA POSTULACIÓN

        //OBTENEMOS VALORES
        $('#posWarning').html('');
        
        var id=$(this).attr("id");
        var idT='#txt_'+id;
        var idTxt=$(idT).val();
        
        //Validamos ingreso ID Google DRIVE
        if(idTxt == '') {
                       
            var msg='<div style="text-align:center;" class="alert alert-error">';
            msg+='<b><span style="color: black;">Favor agregue ID de directorio en Google Drive de 28 caracteres.</span></b>';
            msg+='</div>';
           
            $('#posWarning').html(msg);
            $('#posWarning').show();  
            return false;
            
        }
                
        //AJAX
            var parametros = {
                "id" : id
                ,   "idTxt": idTxt
            };             

            $.ajax({
                    data:  parametros,
                    url: URLprotocol+"//"+URLdomain+"/bodyflex/admin/model/posAprAprModel.php",
                    type:  'post',
                    datetype: 'xml',
                    async:  true,
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

                                var msg='<div style="text-align:center;" class="alert alert-success">';
                                msg+='<b><span style="color: black;">' + 'Postulación ' + 'n° <b>' + id + '</b> a sido <b>aprobada</b>.</span></b>';
                                msg+='</div>';

                                $('#posWarning').html(msg);
                                $('#posWarning').show();    
                                location.reload();

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
    
    
    $('.label-success').live('click', function() { 

        //GUARDA/ACTUALIZA REGISTRO

        //OBTENEMOS VALORES
        $('#posWarning').html('');

        var id=$(this).attr("id");
        var idT='#txt_'+id;
        var idTxt=$(idT).val();
                
        //AJAX
            var parametros = {
                "id" : id
                ,   "idTxt": idTxt
            };        

            $.ajax({
                    data:  parametros,
                    url: URLprotocol+"//"+URLdomain+"/bodyflex/admin/model/posAprActModel.php",
                    type:  'post',
                    datetype: 'xml',
                    async:  true,
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
                            
                            //alert('datos ' + datos);
                            
                            if(datos==1){     

                                consultaPostulaciones(0,0,1);

                                var msg='<div style="text-align:center;" class="alert alert-success">';
                                msg+='<b><span style="color: black;">' + 'Postulación ' + 'n° <b>' + id + '</b> actualizada exitosamente!.</span></b>';
                                msg+='</div>';

                                $('#posWarning').html(msg);
                                $('#posWarning').show();      
                                location.reload();

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
    
    $('.label-inverse').live('click', function() { 

        //VISUALIZAR DIRECTORIO EN GOOGLE DRIVE
        
        //OBTENEMOS VALORES
        $('#posWarning').html('');

        var id=$(this).attr("id");
        var idT='#txt_'+id;
        var idTxt=$(idT).val();
                
        var url='https://drive.google.com/open?id=FILEID';
        var link = url.replace("FILEID", idTxt); 
        
        //alert(link);
        
        //window.open(link);
        
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
            url: URLprotocol+"//"+URLdomain+"/bodyflex/admin/model/posAprCsuModel.php",
            type:  'post',
            datetype: 'xml',
            async: true,
        success:  function (xml){

            alert('posAprCsuModel ' + xml);                

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

                    $('#tbody2').html("");
                    $('#idPag').html("");
                    
                    $('#posWarning').html(msg);
                    $('#posWarning').show();

                    break;

                default:

                    var datos = xmlDoc.getElementsByTagName('DATOS')[0].childNodes[0].nodeValue;
                    var paginacion = xmlDoc.getElementsByTagName('PAGINACION')[0].childNodes[0].nodeValue;

                    $('#tbody2').html(datos);
                    $('#idPag').html(paginacion);

                    break;

            }
        }
    });
        
};

