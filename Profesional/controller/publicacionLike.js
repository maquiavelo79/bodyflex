
$(document).ready(function(){    
    //VALIDAR VOTACIÓN CON RESPECTO A USUARIO
        //SOLO USUARIOS REGISTRADOS PUEDEN VOTAR
    
    var tabla='';
    var puId = $('#puId').val();
    var email = $('#email').val();
    
    //alert('email ' + email);
    
    if(typeof(email)!='undefined' && email!=''){
      
        var parametros = {"puId" : puId, "email" : email };
        $.ajax({
            data:  parametros,
            url:   '../model/csuVotacionPublicacion.php',
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
                        
                    case '100':
                       
                        var msg='<div style="text-align:center;" class="alert alert-block">';
                            msg+='<b><span style="color: #000;">' + '[' + codErr + '] ' + desErr + '</span></b>';
                        msg+='</div>';
                        $('#divLike').html(msg);   
                        break;    
                     
                    case '98':
                       
                        tabla+='<table>';
                             tabla+='<tr>';
                                tabla+='<td onclick="likeClick();" style="cursor: pointer; text-align: center;" id="like" class="likeD">';
                                    tabla+='<IMG SRC="../images/iconos/GRIS_manoUp.png" ALT="Sin votar">';
                                tabla+='</td>';
                                tabla+='<td onclick="unlikeClick();" style="cursor: pointer; text-align: center;" id="unlike" class="unlikeD">';
                                    tabla+='<IMG SRC="../images/iconos/GRIS_manoDown.png" ALT="Sin votar">';
                                tabla+='</td>';
                            tabla+='</tr>';
                        tabla+='</table>';    
                        $('#divLike').html(tabla);
                        break;
                    
                    default:
                       
                        var like = xmlDoc.getElementsByTagName('LIKE')[0].childNodes[0].nodeValue;
                        var unlike = xmlDoc.getElementsByTagName('UNLIKE')[0].childNodes[0].nodeValue;
                                         
                        if(like=='1' && unlike=='0'){ //LIKE ACTIVO

                             tabla+='<table>';
                                 tabla+='<tr>';
                                     tabla+='<td onclick="likeClick();" style="cursor: pointer; text-align: center;" id="like" class="likeD">';
                                         tabla+='<IMG SRC="../images/iconos/VERDE_manoUP .png" ALT="TE GUSTA">';
                                     tabla+='</td>';
                                     tabla+='<td onclick="unlikeClick();" style="cursor: pointer; text-align: center;" id="unlike" class="unlikeD">';
                                         tabla+='<IMG SRC="../images/iconos/GRIS_manoDown.png" ALT="Sin votar">';
                                     tabla+='</td>';
                                 tabla+='</tr>';
                             tabla+='</table>';  
                            $('#divLike').html(tabla);   

                        }else if(like=='0' && unlike=='1'){
                            
                            tabla+='<table>';
                                 tabla+='<tr>';
                                     tabla+='<td onclick="likeClick();" style="cursor: pointer; text-align: center;" id="like" class="likeD">';
                                         tabla+='<IMG SRC="../images/iconos/GRIS_manoUp.png" ALT="Sin votar">';
                                     tabla+='</td>';
                                     tabla+='<td onclick="unlikeClick();" style="cursor: pointer; text-align: center;" id="unlike" class="unlikeD">';
                                         tabla+='<IMG SRC="../images/iconos/ROJO_manoDown.png" ALT="NO TE GUSTA">';
                                     tabla+='</td>';
                                 tabla+='</tr>';
                             tabla+='</table>';   
                            $('#divLike').html(tabla);

                        }else if(like=='0' && unlike=='0'){ //UNLIKE ACTIVO

                             tabla+='<table>';
                                 tabla+='<tr>';
                                     tabla+='<td onclick="likeClick();" style="cursor: pointer; text-align: center;" id="like" class="likeD">';
                                         tabla+='<IMG SRC="../images/iconos/GRIS_manoUp.png" ALT="Sin votar">';
                                     tabla+='</td>';
                                     tabla+='<td onclick="unlikeClick();" style="cursor: pointer; text-align: center;" id="unlike" class="unlikeD">';
                                        tabla+='<IMG SRC="../images/iconos/GRIS_manoDown.png" ALT="Sin votar">';
                                     tabla+='</td>';
                                 tabla+='</tr>';
                             tabla+='</table>';   
                            $('#divLike').html(tabla);
                        }
                }
            }
        });     
    }else{
               
        tabla+='<table>';
            tabla+='<tr>';
                tabla+='<td onclick="votacionNoRegistrado();" style="cursor: pointer; text-align: center;" id="like" class="likeD">';
                    tabla+='<IMG SRC="../images/iconos/GRIS_manoUp.png" ALT="Sin votar">';
                tabla+='</td>';
                tabla+='<td onclick="votacionNoRegistrado();" style="cursor: pointer; text-align: center;" id="unlike" class="unlikeD">';
                    tabla+='<IMG SRC="../images/iconos/GRIS_manoDown.png" ALT="Sin votar">';
                tabla+='</td>';
            tabla+='</tr>';
        tabla+='</table>';    
       $('#divLike').html(tabla);
    }
});

function likeClick(){
    
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
            url:   '../model/IngModVotacionPublicacion.php',
            type:  'post',
            datetype: 'xml',
            success:  function(xml){
                
                //alert('xml ' + xml);
                
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
                        
                    case '100':
                       
                        var msg='<div style="text-align:center;" class="alert alert-block">';
                            msg+='<b><span style="color: #000;">' + '[' + codErr + '] ' + desErr + '</span></b>';
                        msg+='</div>';
                        $('#divLike').html(msg);
                        break;    
                    
                    default:
                        
                        var dato = xmlDoc.getElementsByTagName('DATOS')[0].childNodes[0].nodeValue;
                        switch(dato){
                            case '1':
                                tabla+='<table>';
                                    tabla+='<tr>';
                                        tabla+='<td onclick="likeClick();" style="cursor: pointer; text-align: center;" id="like" class="likeD">';
                                            tabla+='<IMG SRC="../images/iconos/GRIS_manoUp.png" ALT="Sin votar">';
                                        tabla+='</td>';
                                        tabla+='<td onclick="unlikeClick();" style="cursor: pointer; text-align: center;" id="unlike" class="unlikeD">';
                                            tabla+='<IMG SRC="../images/iconos/GRIS_manoDown.png" ALT="Sin votar">';
                                        tabla+='</td>';
                                    tabla+='</tr>';
                                tabla+='</table>';    
                                $('#divLike').html(tabla);
                                break;
                            case '2': 
                                tabla+='<table>';
                                    tabla+='<tr>';
                                        tabla+='<td onclick="likeClick();" style="cursor: pointer; text-align: center;" id="like" class="likeD">';
                                            tabla+='<IMG SRC="../images/iconos/VERDE_manoUP .png" ALT="TE GUSTA">';
                                        tabla+='</td>';
                                        tabla+='<td onclick="unlikeClick();" style="cursor: pointer; text-align: center;" id="unlike" class="unlikeD">';
                                            tabla+='<IMG SRC="../images/iconos/GRIS_manoDown.png" ALT="Sin votar">';
                                        tabla+='</td>';
                                    tabla+='</tr>';
                                tabla+='</table>';
                                $('#divLike').html(tabla); 
                                break;
                            case '3': 
                                tabla+='<table>';
                                    tabla+='<tr>';
                                        tabla+='<td onclick="likeClick();" style="cursor: pointer; text-align: center;" id="like" class="likeD">';
                                            tabla+='<IMG SRC="../images/iconos/GRIS_manoUp.png" ALT="Sin votar">';
                                        tabla+='</td>';
                                        tabla+='<td onclick="unlikeClick();" style="cursor: pointer; text-align: center;" id="unlike" class="unlikeD">';
                                            tabla+='<IMG SRC="../images/iconos/GRIS_manoDown.png" ALT="Sin votar">';
                                        tabla+='</td>';
                                    tabla+='</tr>';
                                tabla+='</table>';    
                                $('#divLike').html(tabla);
                                break;
                            case '4': 
                                tabla+='<table>';
                                    tabla+='<tr>';
                                        tabla+='<td onclick="likeClick();" style="cursor: pointer; text-align: center;" id="like" class="likeD">';
                                            tabla+='<IMG SRC="../images/iconos/GRIS_manoUp.png" ALT="Sin votar">';
                                        tabla+='</td>';
                                        tabla+='<td onclick="unlikeClick();" style="cursor: pointer; text-align: center;" id="unlike" class="unlikeD">';
                                            tabla+='<IMG SRC="../images/iconos/VERDE_manoUP .png" ALT="NO TE GUSTA">';
                                        tabla+='</td>';
                                    tabla+='</tr>';
                                tabla+='</table>';   
                                $('#divLike').html(tabla);
                                break;
                        }

                }
            }
        });
   
}
 
function unlikeClick(){
    
    //alert('unlikeClick');
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
            url:   '../model/IngModVotacionPublicacion.php',
            type:  'post',
            datetype: 'xml',
            success:  function(xml){
                
                //alert('unlike ' + xml);
                
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
                        
                    case '100':
                       
                       var msg='<div style="text-align:center;" class="alert alert-block">';
                            msg+='<b><span style="color: #000;">' + '[' + codErr + '] ' + desErr + '</span></b>';
                        msg+='</div>';
                        $('#divLike').html(msg);
                        break;    
                    
                    default:

                        var datos = xmlDoc.getElementsByTagName('DATOS')[0].childNodes[0].nodeValue;

                        switch(datos){
                            case '1':
                                 tabla+='<table>';
                                     tabla+='<tr>';
                                         tabla+='<td onclick="likeClick();" style="cursor: pointer; text-align: center;" id="like" class="likeD">';
                                             tabla+='<IMG SRC="../images/iconos/GRIS_manoUp.png" ALT="Sin votar">';
                                         tabla+='</td>';
                                         tabla+='<td onclick="unlikeClick();" style="cursor: pointer; text-align: center;" id="unlike" class="unlikeD">';
                                             tabla+='<IMG SRC="../images/iconos/GRIS_manoDown.png" ALT="Sin votar">';
                                         tabla+='</td>';
                                     tabla+='</tr>';
                                 tabla+='</table>';    
                                 $('#divLike').html(tabla);
                                break;
                            case '2': 
                                 tabla+='<table>';
                                     tabla+='<tr>';
                                         tabla+='<td onclick="likeClick();" style="cursor: pointer; text-align: center;" id="like" class="likeD">';
                                             tabla+='<IMG SRC="../images/iconos/VERDE_manoUP.png" ALT="TE GUSTA">';
                                         tabla+='</td>';
                                         tabla+='<td onclick="unlikeClick();" style="cursor: pointer; text-align: center;" id="unlike" class="unlikeD">';
                                             tabla+='<IMG SRC="../images/iconos/GRIS_manoDown.png" ALT="Sin votar">';
                                         tabla+='</td>';
                                     tabla+='</tr>';
                                 tabla+='</table>';  
                                 $('#divLike').html(tabla); 
                                 break;
                            case '3': 
                                 tabla+='<table>';
                                     tabla+='<tr>';
                                         tabla+='<td onclick="likeClick();" style="cursor: pointer; text-align: center;" id="like" class="likeD">';
                                             tabla+='<IMG SRC="../images/iconos/GRIS_manoUp.png" ALT="Sin votar">';
                                         tabla+='</td>';
                                         tabla+='<td onclick="unlikeClick();" style="cursor: pointer; text-align: center;" id="unlike" class="unlikeD">';
                                             tabla+='<IMG SRC="../images/iconos/GRIS_manoDown.png" ALT="Sin votar">';
                                         tabla+='</td>';
                                     tabla+='</tr>';
                                 tabla+='</table>';    
                                 $('#divLike').html(tabla);
                                break;
                            case '4': 
                                 tabla+='<table>';
                                     tabla+='<tr>';
                                         tabla+='<td onclick="likeClick();" style="cursor: pointer; text-align: center;" id="like" class="likeD">';
                                             tabla+='<IMG SRC="../images/iconos/GRIS_manoUp.png" ALT="Sin votar">';
                                         tabla+='</td>';
                                         tabla+='<td onclick="unlikeClick();" style="cursor: pointer; text-align: center;" id="unlike" class="unlikeD">';
                                             tabla+='<IMG SRC="../images/iconos/ROJO_manoDown.png" ALT="NO TE GUSTA">';
                                         tabla+='</td>';
                                     tabla+='</tr>';
                                 tabla+='</table>';   
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

    
