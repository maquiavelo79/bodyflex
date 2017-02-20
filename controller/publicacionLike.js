
$(document).ready(function(){    
    //VALIDAR VOTACIÓN CON RESPECTO A USUARIO
        //SOLO USUARIOS REGISTRADOS PUEDEN VOTAR
    
    $('#divEsperaLike').hide();
    
    var URLdomain   = window.location.host;
    var URLprotocol = window.location.protocol;
    var tabla='';
    var puId = $('#puId').val();
    var email = $('#email').val();
    
    //alert('email ' + email);
    
    if(typeof(email)!='undefined' && email!=''){
      
        var parametros = {"puId" : puId, "email" : email };
        $.ajax({
            data:  parametros,
            url: URLprotocol+"//"+URLdomain+"/bodyflex/model/csuVotacionPublicacion.php",
            type:  'post',
            datetype: 'xml',
            success:  function(xml){

               //alert('csuVotacionPublicacion ' + xml);

                var xmlDoc = $.parseXML(xml), $xml = $(xmlDoc);
                var codErr = xmlDoc.getElementsByTagName('CODERROR')[0].childNodes[0].nodeValue;
                var desErr = xmlDoc.getElementsByTagName('DESERROR')[0].childNodes[0].nodeValue;
                
                switch(codErr){
                    case '9':
                       
                        var msg='<div style="text-align:center;" class="alert alert-block">';
                            msg+='<b><span style="color: #000;">' + '[' + codErr + '] ' + desErr + '</span></b>';
                        msg+='</div>';
                        $('#divLike').html(msg);   
                        break;
                    
                    case '8':
                       
                        var msg='<div style="text-align:center;" class="alert alert-block">';
                            msg+='<b><span style="color: #000;">' + '[' + codErr + '] ' + desErr + '</span></b>';
                        msg+='</div>';
                        $('#divLike').html(msg);   
                        break;
                    
                    case '99':
                       
                        var msg='<div style="text-align:center;" class="alert alert-block">';
                            msg+='<b><span style="color: #000;">' + '[' + codErr + '] ' + desErr + '</span></b>';
                        msg+='</div>';
                        $('#divLike').html(msg);   
                        break;
                     
                    case '98':
                        
                        tabla+='<div class="contenedor">';
                            tabla+='<div class="contenidos">';
                                tabla+='<div id="like" onclick="likeClick();" style="cursor: pointer; text-align: center;" class="columna1">';
                                    tabla+='<i class="fa fa-thumbs-o-up fa-3x"></i>';
                                tabla+='</div>';
                                tabla+='<div id="unlike" onclick="unlikeClick();" style="cursor: pointer; text-align: center;" class="columna2">';
                                    tabla+='<i class="fa fa-thumbs-o-down fa-3x"></i>';
                                tabla+='</div>';
                            tabla+='</div>';
                        tabla+='</div>';
                        $('#divLike').html(tabla);
                        $('#divLike').show();
                        break;
                    
                    default:
                       
                        var like = xmlDoc.getElementsByTagName('LIKE')[0].childNodes[0].nodeValue;
                        var unlike = xmlDoc.getElementsByTagName('UNLIKE')[0].childNodes[0].nodeValue;
                                         
                        if(like=='1' && unlike=='0'){ //LIKE ACTIVO
                            tabla+='<div class="contenedor">';
                                tabla+='<div class="contenidos">';
                                    tabla+='<div id="like" onclick="likeClick();" style="cursor: pointer; text-align: center;" class="columna1">';
                                        tabla+='<i class="fa fa-thumbs-o-up fa-3x" style="color: blue; font-weight: bold;"></i>';
                                    tabla+='</div>';
                                    tabla+='<div id="unlike" onclick="unlikeClick();" style="cursor: pointer; text-align: center;" class="columna2">';
                                        tabla+='<i class="fa fa-thumbs-o-down fa-3x"></i>';
                                    tabla+='</div>';
                                tabla+='</div>';
                            tabla+='</div>';
                            $('#divLike').html(tabla);   
                            $('#divLike').show();

                        }else if(like=='0' && unlike=='1'){
                            
                            tabla+='<div class="contenedor">';
                                tabla+='<div class="contenidos">';
                                    tabla+='<div id="like" onclick="likeClick();" style="cursor: pointer; text-align: center;" class="columna1">';
                                        tabla+='<i class="fa fa-thumbs-o-up fa-3x"></i>';
                                    tabla+='</div>';    
                                    tabla+='<div id="unlike" onclick="unlikeClick();" style="cursor: pointer; text-align: center;" class="columna2">';
                                        tabla+='<i class="fa fa-thumbs-o-down fa-3x" style="color: red; font-weight: bold;"></i>';
                                    tabla+='</div>';
                                tabla+='</div>';
                            tabla+='</div>';  
                            $('#divLike').html(tabla);
                            $('#divLike').show();
                            
                        }else if(like=='0' && unlike=='0'){ //UNLIKE ACTIVO
                            tabla+='<div class="contenedor">';
                                tabla+='<div class="contenidos">';
                                    tabla+='<div id="like" onclick="likeClick();" style="cursor: pointer; text-align: center;" class="columna1">';
                                        tabla+='<i class="fa fa-thumbs-o-up fa-3x"></i>';
                                    tabla+='</div>';
                                    tabla+='<div id="unlike" onclick="unlikeClick();" style="cursor: pointer; text-align: center;" class="columna2">';
                                        tabla+='<i class="fa fa-thumbs-o-down fa-3x"></i>';
                                    tabla+='</div>';
                                tabla+='</div>';
                            tabla+='</div>'; 
                            $('#divLike').html(tabla);
                            $('#divLike').show();
                        }
                }
            }
        });     
    }else{
               
        tabla+='<div class="contenedor">';
            tabla+='<div class="contenidos">';
                tabla+='<div id="like" onclick="votacionNoRegistrado();" style="cursor: pointer; text-align: center;" class="columna1">';
                    tabla+='<i class="fa fa-thumbs-o-up fa-3x"></i>';
                tabla+='</div>';
                tabla+='<div id="unlike" onclick="votacionNoRegistrado();" style="cursor: pointer; text-align: center;" class="columna2">';
                    tabla+='<i class="fa fa-thumbs-o-down fa-3x"></i>';
                tabla+='</div>';
            tabla+='</div>';
        tabla+='</div>';

        $('#divLike').html(tabla);
        $('#divLike').show();
        
    }
});

function likeClick(){
    
    var URLdomain   = window.location.host;
    var URLprotocol = window.location.protocol;
    var tabla='';
    var puId = $('#puId').val();
    var email = $('#email').val();
    var like = 1;
    var unlike = 0;

    var parametros = {
                      "puId" : puId,
                      "email" : email,
                      "like": like,
                      "unlike": unlike
                    };
                    
        $.ajax({
            data:  parametros,
            url: URLprotocol+"//"+URLdomain+"/bodyflex/model/IngModVotacionPublicacion.php",
            type:  'post',
            datetype: 'xml',
            beforeSend: function(){
                $("#like").hide();
                $("#unlike").hide();
                $("#divEsperaLike").show();
            },
            success:  function(xml){
                
                //alert('IngModVotacionPublicacion ' + xml);
                
                $("#like").show();
                $("#unlike").show();
                $("#divEsperaLike").hide();
                
                var xmlDoc = $.parseXML(xml), $xml = $(xmlDoc);
                var codErr = xmlDoc.getElementsByTagName('CODERROR')[0].childNodes[0].nodeValue;
                var desErr = xmlDoc.getElementsByTagName('DESERROR')[0].childNodes[0].nodeValue;
                
                switch(codErr){
                   case '9':
                       
                        var msg='<div style="text-align:center;" class="alert alert-block">';
                            msg+='<b><span style="color: #000;">' + '[' + codErr + '] ' + desErr + '</span></b>';
                        msg+='</div>';
                        $('#divLike').html(msg);
                        break;
                   
                    case '8':
                       
                        var msg='<div style="text-align:center;" class="alert alert-block">';
                            msg+='<b><span style="color: #000;">' + '[' + codErr + '] ' + desErr + '</span></b>';
                        msg+='</div>';
                        $('#divLike').html(msg);
                        break;
                        
                    case '99':
                       
                        var msg='<div style="text-align:center;" class="alert alert-block">';
                            msg+='<b><span style="color: #000;">' + '[' + codErr + '] ' + desErr + '</span></b>';
                        msg+='</div>';
                        $('#divLike').html(msg);
                        break;
                    
                    default:
                        
                        var dato = xmlDoc.getElementsByTagName('DATOS')[0].childNodes[0].nodeValue;
                        switch(dato){
                            case '1':
                                tabla+='<div class="contenedor">';
                                    tabla+='<div class="contenidos">';
                                        tabla+='<div id="like" onclick="likeClick();" style="cursor: pointer; text-align: center;" class="columna1">';
                                            tabla+='<i class="fa fa-thumbs-o-up fa-3x"></i>';
                                        tabla+='</div>';
                                        tabla+='<div id="unlike" onclick="unlikeClick();" style="cursor: pointer; text-align: center;" class="columna2">';
                                            tabla+='<i class="fa fa-thumbs-o-down fa-3x"></i>';
                                        tabla+='</div>';
                                    tabla+='</div>';
                                tabla+='</div>';
                                $('#divLike').html(tabla);
                                break;
                            case '2': 
                                tabla+='<div class="contenedor">';
                                    tabla+='<div class="contenidos">';
                                        tabla+='<div id="like" onclick="likeClick();" style="cursor: pointer; text-align: center;" class="columna1">';
                                            tabla+='<i class="fa fa-thumbs-o-up fa-3x" style="color: blue; font-weight: bold;"></i>';
                                        tabla+='</div>';
                                        tabla+='<div id="unlike" onclick="unlikeClick();" style="cursor: pointer; text-align: center;" class="columna2">';
                                            tabla+='<i class="fa fa-thumbs-o-down fa-3x"></i>';
                                        tabla+='</div>';
                                    tabla+='</div>';
                                tabla+='</div>';
                                $('#divLike').html(tabla); 
                                break;
                            case '3': 
                                tabla+='<div class="contenedor">';
                                    tabla+='<div class="contenidos">';
                                        tabla+='<div id="like" onclick="likeClick();" style="cursor: pointer; text-align: center;" class="columna1">';
                                            tabla+='<i class="fa fa-thumbs-o-up fa-3x"></i>';
                                        tabla+='</div>';
                                        tabla+='<div id="unlike" onclick="unlikeClick();" style="cursor: pointer; text-align: center;" class="columna2">';
                                            tabla+='<i class="fa fa-thumbs-o-down fa-3x"></i>';
                                        tabla+='</div>';
                                    tabla+='</div>';
                                tabla+='</div>';
                                $('#divLike').html(tabla);
                                break;
                            case '4': 
                                tabla+='<div class="contenedor">';
                                    tabla+='<div class="contenidos">';
                                        tabla+='<div id="like" onclick="likeClick();" style="cursor: pointer; text-align: center;" class="columna1">';
                                            tabla+='<i class="fa fa-thumbs-o-up fa-3x" style="color: blue; font-weight: bold;"></i>';
                                        tabla+='</div>';
                                        tabla+='<div id="unlike" onclick="unlikeClick();" style="cursor: pointer; text-align: center;" class="columna2">';
                                            tabla+='<i class="fa fa-thumbs-o-down fa-3x"></i>';
                                        tabla+='</div>';
                                    tabla+='</div>';
                                tabla+='</div>';
                                $('#divLike').html(tabla);
                                break;
                        }

                }
            }
        });
   
}
 
function unlikeClick(){
    var URLdomain   = window.location.host;
    var URLprotocol = window.location.protocol; 

    var tabla='';
    var puId = $('#puId').val();
    var email = $('#email').val();
    var like = 0;
    var unlike = 1;
    
    var parametros = {
                      "puId" : puId,
                      "email" : email,
                      "like": like,
                      "unlike": unlike
                    };
                    
        $.ajax({
            data:  parametros,
            url: URLprotocol+"//"+URLdomain+"/bodyflex/model/IngModVotacionPublicacion.php",
            type:  'post',
            datetype: 'xml',
            beforeSend: function(){
                $("#like").hide();
                $("#unlike").hide();
                $("#divEsperaLike").show();
            },
            success:  function(xml){
                
                //alert('IngModVotacionPublicacion ' + xml);
                
                $("#like").show();
                $("#unlike").show();
                $("#divEsperaLike").hide();
                
                var xmlDoc = $.parseXML(xml), $xml = $(xmlDoc);
                var codErr = xmlDoc.getElementsByTagName('CODERROR')[0].childNodes[0].nodeValue;
                var desErr = xmlDoc.getElementsByTagName('DESERROR')[0].childNodes[0].nodeValue;

                switch(codErr){
                    case '9':
                       
                       var msg='<div style="text-align:center;" class="alert alert-block">';
                            msg+='<b><span style="color: #000;">' + '[' + codErr + '] ' + desErr + '</span></b>';
                        msg+='</div>';
                        $('#divLike').html(msg);
                        break;

                    case '8':
                       
                       var msg='<div style="text-align:center;" class="alert alert-block">';
                            msg+='<b><span style="color: #000;">' + '[' + codErr + '] ' + desErr + '</span></b>';
                        msg+='</div>';
                        $('#divLike').html(msg);
                        break;
                    
                    case '99':
                       
                       var msg='<div style="text-align:center;" class="alert alert-block">';
                            msg+='<b><span style="color: #000;">' + '[' + codErr + '] ' + desErr + '</span></b>';
                        msg+='</div>';
                        $('#divLike').html(msg);
                        break;
                    
                    default:

                        var datos = xmlDoc.getElementsByTagName('DATOS')[0].childNodes[0].nodeValue;

                        switch(datos){
                            case '1':
                                tabla+='<div class="contenedor">';
                                    tabla+='<div class="contenidos">';
                                        tabla+='<div id="like" onclick="likeClick();" style="cursor: pointer; text-align: center;" class="columna1">';
                                            tabla+='<i class="fa fa-thumbs-o-up fa-3x"></i>';
                                        tabla+='</div>';
                                        tabla+='<div id="unlike" onclick="unlikeClick();" style="cursor: pointer; text-align: center;" class="columna2">';
                                            tabla+='<i class="fa fa-thumbs-o-down fa-3x"></i>';
                                        tabla+='</div>';
                                    tabla+='</div>';
                                tabla+='</div>';  
                                $('#divLike').html(tabla);
                                break;
                            case '2': 
                                tabla+='<div class="contenedor">';
                                    tabla+='<div class="contenidos">';
                                        tabla+='<div id="like" onclick="likeClick();" style="cursor: pointer; text-align: center;" class="columna1">';
                                            tabla+='<i class="fa fa-thumbs-o-up fa-3x" style="color: blue; font-weight: bold;"></i>';
                                        tabla+='</div>';
                                        tabla+='<div id="unlike" onclick="unlikeClick();" style="cursor: pointer; text-align: center;" class="columna2">';
                                            tabla+='<i class="fa fa-thumbs-o-down fa-3x"></i>';
                                        tabla+='</div>';
                                    tabla+='</div>';
                                tabla+='</div>';
                                $('#divLike').html(tabla); 
                                break;
                            case '3': 
                                tabla+='<div class="contenedor">';
                                    tabla+='<div class="contenidos">';
                                        tabla+='<div id="like" onclick="likeClick();" style="cursor: pointer; text-align: center;" class="columna1">';
                                            tabla+='<i class="fa fa-thumbs-o-up fa-3x"></i>';
                                        tabla+='</div>';
                                        tabla+='<div id="unlike" onclick="unlikeClick();" style="cursor: pointer; text-align: center;" class="columna2">';
                                            tabla+='<i class="fa fa-thumbs-o-down fa-3x"></i>';
                                        tabla+='</div>';
                                    tabla+='</div>';
                                tabla+='</div>';  
                                $('#divLike').html(tabla);
                                break;
                            case '4': 
                                tabla+='<div class="contenedor">';
                                    tabla+='<div class="contenidos">';
                                        tabla+='<div id="like" onclick="likeClick();" style="cursor: pointer; text-align: center;" class="columna1">';
                                            tabla+='<i class="fa fa-thumbs-o-up fa-3x"></i>';
                                        tabla+='</div>';
                                        tabla+='<div id="unlike" onclick="unlikeClick();" style="cursor: pointer; text-align: center;" class="columna2">';
                                            tabla+='<i class="fa fa-thumbs-o-down fa-3x" style="color: red; font-weight: bold;"></i>';
                                        tabla+='</div>';
                                    tabla+='</div>';
                                tabla+='</div>';  
                                $('#divLike').html(tabla);
                                break;    
                         } 
                       
                }
            }
        });
    
}

function votacionNoRegistrado(){
    
    var msg='Sólo miembros de la comunidad pueden <b>votar</b> la publicaci&oacute;n!.<br>';
    msg+='Registrate y se parte de nuestra comunidad de profesionales del deporte!';
    
    $("#small-dialog").css("display", "block");
    $("#mensaje").html(msg);    
    $('#gatMsg').click();
    
}

    
