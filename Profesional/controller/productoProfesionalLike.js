
$(document).ready(function(){    

    var URLdomain   = window.location.host;
    var URLprotocol = window.location.protocol;
    
    var tabla='';
    var id = $('#id').val();
    var rutPro = $('#rutPro').val();
    var email = $('#email').val();
    var se = $('#session_id').val();
        
    var parametros = {
        "rutPro" : rutPro
        , "id" : id 
        , "email" : email 
        , "se" : se 
    };
    
    //if($('#prueba').val()==0){
        $.ajax({
            data:  parametros,
            url: URLprotocol+"//"+URLdomain+"/bodyflex/profesional/model/csuVotacionProducto.php",
            type:  'post',
            datetype: 'xml',
            async: true,
            success:  function(xml){

                //alert('csuVotacionProducto ' + xml);

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

                        tabla='<a style="margin-left: 80px; cursor: pointer;" onclick="likeClick();">';
                            tabla+='<i style="color: black;" class="fa fa-thumbs-o-up fa-2x"></i>';
                        tabla+='</a>';
                        tabla+='<a style="margin-left: 50px; cursor: pointer;" onclick="unlikeClick();">';
                            tabla+='<i style="color: black;" class="fa fa-thumbs-o-down fa-2x"></i>';
                        tabla+='</a>';
                        $('#divLike').html(tabla);
                        break;

                    default:

                        var like = xmlDoc.getElementsByTagName('LIKE')[0].childNodes[0].nodeValue;
                        var unlike = xmlDoc.getElementsByTagName('UNLIKE')[0].childNodes[0].nodeValue;

                        if(like=='1' && unlike=='0'){ //LIKE ACTIVO

                            tabla='<a style="margin-left: 80px; cursor: pointer;" onclick="likeClick();">';
                            tabla+='<i style="font-weight: bold; color: green;" class="fa fa-thumbs-o-up fa-2x"></i>';
                            tabla+='</a>';
                            tabla+='<a style="margin-left: 50px; cursor: pointer;" onclick="unlikeClick();">';
                                tabla+='<i style="color: black;" class="fa fa-thumbs-o-down fa-2x"></i>';
                            tabla+='</a>';
                            $('#divLike').html(tabla);

                        }else if(like=='0' && unlike=='1'){ //UNLIKE ACTIVO

                            tabla='<a style="margin-left: 80px; cursor: pointer;" onclick="likeClick();">';
                            tabla+='<i style="color: black;" class="fa fa-thumbs-o-up fa-2x"></i>';
                            tabla+='</a>';
                            tabla+='<a style="margin-left: 50px; cursor: pointer;" onclick="unlikeClick();">';
                                tabla+='<i style="font-weight: bold; color: red;" class="fa fa-thumbs-o-down fa-2x"></i>';
                            tabla+='</a>';
                            $('#divLike').html(tabla);

                        }else if(like=='0' && unlike=='0'){ //AMBOS INACTIVOS

                            tabla='<a style="margin-left: 80px; cursor: pointer;" onclick="likeClick();">';
                            tabla+='<i style="color: black;" class="fa fa-thumbs-o-up fa-2x"></i>';
                            tabla+='</a>';
                            tabla+='<a style="margin-left: 50px; cursor: pointer;" onclick="unlikeClick();">';
                                tabla+='<i style="color: black;" class="fa fa-thumbs-o-down fa-2x"></i>';
                            tabla+='</a>';
                            $('#divLike').html(tabla);
                        }
                        break;
                }
            }
        });     
    //}   
    
});

function likeClick(){
    
    var URLdomain   = window.location.host;
    var URLprotocol = window.location.protocol;
    
    var tabla='';
    var rutPro = $('#rutPro').val();
    var id = $('#id').val();
    var email = $('#email').val();
    var like = 1;
    var unlike = 0;
    var se = $('#session_id').val();

    var parametros = {
                      "rutPro" : rutPro,
                      "id" : id,
                      "like": like,
                      "unlike": unlike,
                      "email": email,
                      "se" : se 
                    };
                    
        $.ajax({
            data:  parametros,
            url: URLprotocol+"//"+URLdomain+"/bodyflex/profesional/model/IngModVotacionProductoProfesional.php",
            type:  'post',
            datetype: 'xml',
            async: true,
            beforeSend: function(){
           
                $("#divLoadLike").show();
                $("#divLike").hide();
            
            },
            success:  function(xml){
                
                $("#divLike").show();
                $("#divLoadLike").hide();
                
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
                                tabla='<a style="margin-left: 80px; cursor: pointer;" onclick="likeClick();">';
                                    tabla+='<i style="color: black;" class="fa fa-thumbs-o-up fa-2x"></i>';
                                tabla+='</a>';
                                tabla+='<a style="margin-left: 50px; cursor: pointer;" onclick="unlikeClick();">';
                                    tabla+='<i style="color: black;" class="fa fa-thumbs-o-down fa-2x"></i>';
                                tabla+='</a>';
                                $('#divLike').html(tabla);
                                break;
                            case '2': //LIKE
                                tabla='<a style="margin-left: 80px; cursor: pointer;" onclick="likeClick();">';
                                    tabla+='<i style="color: green;" class="fa fa-thumbs-o-up fa-2x"></i>';
                                tabla+='</a>';
                                tabla+='<a style="margin-left: 50px; cursor: pointer;" onclick="unlikeClick();">';
                                    tabla+='<i style="color: black;" class="fa fa-thumbs-o-down fa-2x"></i>';
                                tabla+='</a>';
                                $('#divLike').html(tabla); 
                                break;
                            case '3': 
                                tabla='<a style="margin-left: 80px; cursor: pointer;" onclick="likeClick();">';
                                    tabla+='<i style="color: black;" class="fa fa-thumbs-o-up fa-2x"></i>';
                                tabla+='</a>';
                                tabla+='<a style="margin-left: 50px; cursor: pointer;" onclick="unlikeClick();">';
                                    tabla+='<i style="color: black;" class="fa fa-thumbs-o-down fa-2x"></i>';
                                tabla+='</a>';
                                $('#divLike').html(tabla);
                                break;
                            case '4': //UNLIKE
                                tabla='<a style="margin-left: 80px; cursor: pointer;" onclick="likeClick();">';
                                    tabla+='<i style="color: black;" class="fa fa-thumbs-o-up fa-2x"></i>';
                                tabla+='</a>';
                                tabla+='<a style="margin-left: 50px; cursor: pointer;" onclick="unlikeClick();">';
                                    tabla+='<i style="color: red;" class="fa fa-thumbs-o-down fa-2x"></i>';
                                tabla+='</a>';
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
    var rutPro = $('#rutPro').val();
    var id = $('#id').val();
    var email = $('#email').val();
    var like = 0;
    var unlike = 1;
    var se = $('#session_id').val();
    
//    alert('rutPro ' + rutPro);
//    alert('id ' + id);
//    alert('email ' + email);
//    alert('like ' + like);
//    alert('unlike ' + unlike);
//    alert('se ' + se);
        
    var parametros = {
                      "rutPro" : rutPro,
                      "id" : id,
                      "like": like,
                      "unlike": unlike,
                      "email": email,
                      "se" : se 
                    };
                    
        $.ajax({
            data:  parametros,
            url: URLprotocol+"//"+URLdomain+"/bodyflex/profesional/model/IngModVotacionProductoProfesional.php",
            type:  'post',
            datetype: 'xml',
            async: true,
            beforeSend: function(){
           
                $("#divLoadLike").show();
                $("#divLike").hide();
            
            },
            success:  function(xml){
                
                //alert('xml ' + xml);
                
                $("#divLike").show();
                $("#divLoadLike").hide();
                
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
                            case '1': // QUEDA EN NADA
                                tabla='<a style="margin-left: 80px; cursor: pointer;" onclick="likeClick();">';
                                    tabla+='<i style="color: black;" class="fa fa-thumbs-o-up fa-2x"></i>';
                                tabla+='</a>';
                                tabla+='<a style="margin-left: 50px; cursor: pointer;" onclick="unlikeClick();">';
                                    tabla+='<i style="color: black;" class="fa fa-thumbs-o-down fa-2x"></i>';
                                tabla+='</a>';
                                $('#divLike').html(tabla);
                                break;
                            case '2': 
                                tabla='<a style="margin-left: 80px; cursor: pointer;" onclick="likeClick();">';
                                    tabla+='<i style="color: green;" class="fa fa-thumbs-o-up fa-2x"></i>';
                                tabla+='</a>';
                                tabla+='<a style="margin-left: 50px; cursor: pointer;" onclick="unlikeClick();">';
                                    tabla+='<i style="color: black;" class="fa fa-thumbs-o-down fa-2x"></i>';
                                tabla+='</a>';
                                $('#divLike').html(tabla); 
                                break;
                            case '3': //QUEDA EN NADA 
                                tabla='<a style="margin-left: 80px; cursor: pointer;" onclick="likeClick();">';
                                    tabla+='<i style="color: black;" class="fa fa-thumbs-o-up fa-2x"></i>';
                                tabla+='</a>';
                                tabla+='<a style="margin-left: 50px; cursor: pointer;" onclick="unlikeClick();">';
                                    tabla+='<i style="color: black;" class="fa fa-thumbs-o-down fa-2x"></i>';
                                tabla+='</a>';
                                $('#divLike').html(tabla);
                                break;
                            case '4': 
                                tabla='<a style="margin-left: 80px; cursor: pointer;" onclick="likeClick();">';
                                    tabla+='<i style="color: black;" class="fa fa-thumbs-o-up fa-2x"></i>';
                                tabla+='</a>';
                                tabla+='<a style="margin-left: 50px; cursor: pointer;" onclick="unlikeClick();">';
                                    tabla+='<i style="color: red;" class="fa fa-thumbs-o-down fa-2x"></i>';
                                tabla+='</a>';
                                $('#divLike').html(tabla);
                                break;    
                         } 
                       
                }
            }
        });
    
}


    
