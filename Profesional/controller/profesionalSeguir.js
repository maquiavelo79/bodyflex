
$(document).ready(function(){

    var URLdomain   = window.location.host;
    var URLprotocol = window.location.protocol;
        
    var boton='';
    var email = $('#email').val();
    var proRut = $('#rutPro').val();
        
    //alert('publicacionSeguir.js: email, proRut: ' + email + ' ,' + proRut);    
        
    if(typeof(email)!='undefined' && email!=''){
        var parametros = {"email" : email, "proRut" : proRut};
        $.ajax({
            data:  parametros,
            url: URLprotocol+"//"+URLdomain+"/bodyflex/profesional/model/csuProfesionalSeguirModel.php",
            type:  'post',
            datetype: 'xml',
            beforeSend: function(){
                $("#esperaSeguir").show();
            },
            success:  function(xml){
                
                //alert('csuProfesionalSeguirModel ' + xml);
                
                var xmlDoc = $.parseXML(xml), $xml = $(xmlDoc);
                var codErr = xmlDoc.getElementsByTagName('CODERROR')[0].childNodes[0].nodeValue;
                var desErr = xmlDoc.getElementsByTagName('DESERROR')[0].childNodes[0].nodeValue;
                
                switch(codErr){
                    case '9':
                        
                        var msg='<div style="text-align:center;" class="alert alert-block">';
                        msg+='<b><span style="color: #000;">' + '[' + codErr + '] ' + desErr + '</span></b>';
                        msg+='</div>';
                        $('#divSeguir').html(msg); 
                        break;
                    
                    case '8':
                        
                        var msg='<div style="text-align:center;" class="alert alert-block">';
                        msg+='<b><span style="color: #000;">' + '[' + codErr + '] ' + desErr + '</span></b>';
                        msg+='</div>';
                        $('#divSeguir').html(msg); 
                        break;
                    
                    case '99':
                        
                        var msg='<div style="text-align:center;" class="alert alert-block">';
                        msg+='<b><span style="color: #000;">' + '[' + codErr + '] ' + desErr + '</span></b>';
                        msg+='</div>';
                        $('#divSeguir').html(msg); 
                        break;
                        
                    case '100':
                        
                        var msg='<div style="text-align:center;" class="alert alert-block">';
                        msg+='<b><span style="color: #000;">' + '[' + codErr + '] ' + desErr + '</span></b>';
                        msg+='</div>';
                        $('#divSeguir').html(msg); 
                        break;    
                        
                    default:
                      
                        var dato = xmlDoc.getElementsByTagName('DATOS')[0].childNodes[0].nodeValue;
                        if(dato=='1'){ //LO SIGUE
                           
                            boton+='<a style="width: 200px; background-color: #FFCC00; color: black; font-weight: bold;" id="seguir" class="btn btn-primary btn-lg" onclick="seguirClick();">SIGUIENDO</a>';
                            $('#btnSeguir').html(boton);   
                        }else{ //NO LO SIGUE
                            
                            boton+='<a style="width: 200px; font-weight: bold; background-color: #D3D3D3;" id="seguir" class="btn btn-primary btn-lg" onclick="seguirClick();">SEGUIR</a>';
                            $('#btnSeguir').html(boton);   
                        }

                }
            }
        });     
    }else{
        //boton+='<button onclick="seguirNoRegistrado();" style=" width: 150px;" type="button" id="seguir">SEGUIR</button>';
        boton+='<a style="width: 200px; font-weight: bold; background-color: #D3D3D3;" id="seguir" class="btn btn-primary btn-lg" onclick="seguirNoRegistrado();">SEGUIR</a>';
        $('#btnSeguir').html(boton); 
    }   
    
});

function seguirClick(){
    
    //alert('seguirClick');
    
    var URLdomain   = window.location.host;
    var URLprotocol = window.location.protocol;
    
    var boton='';
    var email = $('#email').val();
    var proRut = $('#rutPro').val();

    var parametros = {
                      "email" : email,
                      "proRut": proRut
                    };
                    
    $.ajax({
        data:  parametros,
        url: URLprotocol+"//"+URLdomain+"/bodyflex/profesional/model/IngModProfesionalSeguir.php",
        type:  'post',
        datetype: 'xml',
        beforeSend: function(){
           
            $("#divLoad").show();
            $("#btnSeguir").hide();
            
        },
        success:  function(xml){
            
            //alert('IngModPublicacionSeguir ' + xml);
            $("#btnSeguir").show();
            $("#divLoad").hide();
            
            var xmlDoc = $.parseXML(xml), $xml = $(xmlDoc);
            var codErr = xmlDoc.getElementsByTagName('CODERROR')[0].childNodes[0].nodeValue;
            var desErr = xmlDoc.getElementsByTagName('DESERROR')[0].childNodes[0].nodeValue;
            
            switch(codErr){
                case '9':

                    var msg='<div style="text-align:center;" class="alert alert-block">';
                    msg+='<b><span style="color: #000;">' + '[' + codErr + '] ' + desErr + '</span></b>';
                    msg+='</div>';
                    $('#divSeguir').html(msg); 
                    break;
                   
                case '8':
                    
                    var msg='<div style="text-align:center;" class="alert alert-block">';
                    msg+='<b><span style="color: #000;">' + '[' + codErr + '] ' + desErr + '</span></b>';
                    msg+='</div>';
                    $('#divSeguir').html(msg); 
                    break;
                    
                case '99':
                    
                    var msg='<div style="text-align:center;" class="alert alert-block">';
                    msg+='<b><span style="color: #000;">' + '[' + codErr + '] ' + desErr + '</span></b>';
                    msg+='</div>';
                    $('#divSeguir').html(msg); 
                    break; 
                    
                case '100':
                    
                    var msg='<div style="text-align:center;" class="alert alert-block">';
                    msg+='<b><span style="color: #000;">' + '[' + codErr + '] ' + desErr + '</span></b>';
                    msg+='</div>';
                    $('#divSeguir').html(msg); 
                    break;     
                    
                default:

                    var dato = xmlDoc.getElementsByTagName('DATOS')[0].childNodes[0].nodeValue;
                    switch(dato){
                        case '1':
                            boton+='<a style="width: 200px; background-color: #FFCC00; color: black; font-weight: bold;" id="seguir" class="btn btn-primary btn-lg" onclick="seguirClick();">SIGUIENDO</a>';
                            $('#btnSeguir').html(boton);
                            break;
                        case '2': 
                            boton+='<a style="width: 200px; font-weight: bold; background-color: #D3D3D3;" id="seguir" class="btn btn-primary btn-lg" onclick="seguirClick();">SEGUIR</a>';
                            $('#btnSeguir').html(boton); 
                    }

            }
        }
    });
   
}
 
function seguirNoRegistrado(){

    //var msg='<p style="color: #1b2426;">Estimado visitante, sólo miembros de la comunidad pueden <b><big>seguir</big></b> a un profesional.<br>';
    //msg+='<a class="button read-more" target="_blank" href="../registroUsuario/vista/registroUsuarioView.php"><b style="color:black;"><big><u>Registrate</u></big></b></a> y se parte de nuestra comunidad deportiva!</p>';
    
    //$("#mensaje1").html(msg);    
    $("#modalSeguir").click();    
    
}

    
