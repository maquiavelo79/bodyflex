
$(document).ready(function(){    
    //VALIDAR VOTACIÓN CON RESPECTO A USUARIO
        //SOLO USUARIOS REGISTRADOS PUEDEN VOTAR
    
    var URLdomain   = window.location.host;
    var URLprotocol = window.location.protocol;
    
    var tabla='';
    var rutPro = $('#rutPro').val();
    var email = $('#email').val();
    
    //alert('email ' + email);
    
    if(typeof(email)!='undefined' && email!=''){
      
        var parametros = {"rutPro" : rutPro, "email" : email };
        $.ajax({
            data:  parametros,
            url: URLprotocol+"//"+URLdomain+"/bodyflex/profesional/model/csuVotacionProfesional.php",
            type:  'post',
            datetype: 'xml',
            async: true,
            success:  function(xml){

                //alert('csuVotacionProfesional ' + xml);

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
                       
                        tabla+='<a onclick="likeClick();" style="width: 120px; background-color: #D3D3D3;" class="btn btn-primary btn-lg"><i class="fa fa-thumbs-o-up fa-2x"></i></a>&nbsp;&nbsp;';
                        tabla+='<a onclick="unlikeClick();" style="width: 120px; background-color: #D3D3D3;" class="btn btn-primary btn-lg" ><i class="fa fa-thumbs-o-down fa-2x"></i></a>';
                        $('#divLike').html(tabla);
                        break;
                    
                    default:
                       
                        var like = xmlDoc.getElementsByTagName('LIKE')[0].childNodes[0].nodeValue;
                        var unlike = xmlDoc.getElementsByTagName('UNLIKE')[0].childNodes[0].nodeValue;
                                         
                        if(like=='1' && unlike=='0'){ //LIKE ACTIVO

                            tabla+='<a onclick="likeClick();" style="width: 120px;" class="btn btn-primary btn-lg" ><i class="fa fa-thumbs-o-up fa-2x"></i></a>&nbsp;&nbsp;';
                            tabla+='<a onclick="unlikeClick();" style="width: 120px; background-color: #D3D3D3;" class="btn btn-primary btn-lg" ><i class="fa fa-thumbs-o-down fa-2x"></i></a>';
                            $('#divLike').html(tabla);   

                        }else if(like=='0' && unlike=='1'){ //UNLIKE ACTIVO
                            
                            tabla+='<a onclick="likeClick();" style="width: 120px; background-color: #D3D3D3;" class="btn btn-primary btn-lg" ><i class="fa fa-thumbs-o-up fa-2x"></i></a>&nbsp;&nbsp;';
                            tabla+='<a onclick="unlikeClick();" style="width: 120px;" class="btn btn-primary btn-lg" ><i class="fa fa-thumbs-o-down fa-2x"></i></a>';
                            $('#divLike').html(tabla);

                        }else if(like=='0' && unlike=='0'){ //AMBOS INACTIVOS
                            
                            tabla+='<a onclick="likeClick();" style="width: 120px; background-color: #D3D3D3;" class="btn btn-primary btn-lg" ><i class="fa fa-thumbs-o-up fa-2x"></i></a>&nbsp;&nbsp;';
                            tabla+='<a onclick="unlikeClick();" style="width: 120px; background-color: #D3D3D3;" class="btn btn-primary btn-lg" ><i class="fa fa-thumbs-o-down fa-2x"></i></a>';                            
                            $('#divLike').html(tabla);
                        }
                }
            }
        });     
    }else{
        //AMBOS INACTIVOS       
        tabla+='<a onclick="votacionNoRegistrado();" style="width: 120px; background-color: #D3D3D3;" class="btn btn-primary btn-lg" ><i class="fa fa-thumbs-o-up fa-2x"></i></a>&nbsp;&nbsp;';
        tabla+='<a onclick="votacionNoRegistrado();" style="width: 120px; background-color: #D3D3D3;" class="btn btn-primary btn-lg" ><i class="fa fa-thumbs-o-down fa-2x"></i></a>';    
       $('#divLike').html(tabla);
    }
});

function likeClick(){
    
    var URLdomain   = window.location.host;
    var URLprotocol = window.location.protocol;
    
    var tabla='';
    var rutPro = $('#rutPro').val();
    var email = $('#email').val();
    var like = 1;
    var unlike = 0;

    var parametros = {
                      "rutPro" : rutPro,
                      "email" : email,
                      "like": like,
                      "unlike": unlike
                    };
                    
        $.ajax({
            data:  parametros,
            url: URLprotocol+"//"+URLdomain+"/bodyflex/profesional/model/IngModVotacionProfesional.php",
            type:  'post',
            datetype: 'xml',
            beforeSend: function(){
           
                $("#divLoadLike").show();
                $("#divLike").hide();
            
            },
            success:  function(xml){
                
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
                        
                        var dato = xmlDoc.getElementsByTagName('DATOS')[0].childNodes[0].nodeValue;
                        switch(dato){
                            case '1':
                                tabla+='<a onclick="likeClick();" style="width: 120px; background-color: #D3D3D3;" class="btn btn-primary btn-lg" ><i class="fa fa-thumbs-o-up fa-2x"></i></a>&nbsp;&nbsp;';
                                tabla+='<a onclick="unlikeClick();" style="width: 120px; background-color: #D3D3D3;" class="btn btn-primary btn-lg" ><i class="fa fa-thumbs-o-down fa-2x"></i></a>';    
                                $('#divLike').html(tabla);
                                break;
                            case '2': 
                                tabla+='<a onclick="likeClick();" style="width: 120px;" class="btn btn-primary btn-lg" ><i class="fa fa-thumbs-o-up fa-2x"></i></a>&nbsp;&nbsp;';
                                tabla+='<a onclick="unlikeClick();" style="width: 120px; background-color: #D3D3D3;" class="btn btn-primary btn-lg" ><i class="fa fa-thumbs-o-down fa-2x"></i></a>';
                                $('#divLike').html(tabla); 
                                break;
                            case '3': 
                                tabla+='<a onclick="likeClick();" style="width: 120px; background-color: #D3D3D3;" class="btn btn-primary btn-lg" ><i class="fa fa-thumbs-o-up fa-2x"></i></a>&nbsp;&nbsp;';
                                tabla+='<a onclick="unlikeClick();" style="width: 120px; background-color: #D3D3D3;" class="btn btn-primary btn-lg" ><i class="fa fa-thumbs-o-down fa-2x"></i></a>';    
                                $('#divLike').html(tabla);
                                break;
                            case '4': 
                                tabla+='<a onclick="likeClick();" style="width: 120px; background-color: #D3D3D3;" class="btn btn-primary btn-lg" ><i class="fa fa-thumbs-o-up fa-2x"></i></a>&nbsp;&nbsp;';
                                tabla+='<a onclick="unlikeClick();" style="width: 120px;" class="btn btn-primary btn-lg" ><i class="fa fa-thumbs-o-down fa-2x"></i></a>';   
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
    var email = $('#email').val();
    var like = 0;
    var unlike = 1;

    var parametros = {
                      "rutPro" : rutPro,
                      "email" : email,
                      "like": like,
                      "unlike": unlike
                    };
                    
        $.ajax({
            data:  parametros,
            url: URLprotocol+"//"+URLdomain+"/bodyflex/profesional/model/IngModVotacionProfesional.php",
            type:  'post',
            datetype: 'xml',
            beforeSend: function(){
           
                $("#divLoadLike").show();
                $("#divLike").hide();
            
            },
            success:  function(xml){
                
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
                            case '1':
                                tabla+='<a onclick="likeClick();" style="width: 120px; background-color: #D3D3D3;" class="btn btn-primary btn-lg" ><i class="fa fa-thumbs-o-up fa-2x"></i></a>&nbsp;&nbsp;';
                                tabla+='<a onclick="unlikeClick();" style="width: 120px; background-color: #D3D3D3;" class="btn btn-primary btn-lg" ><i class="fa fa-thumbs-o-down fa-2x"></i></a>';    
                                $('#divLike').html(tabla);
                                break;
                            case '2': 
                                tabla+='<a onclick="likeClick();" style="width: 120px;" class="btn btn-primary btn-lg" ><i class="fa fa-thumbs-o-up fa-2x"></i></a>&nbsp;&nbsp;';
                                tabla+='<a onclick="unlikeClick();" style="width: 120px; background-color: #D3D3D3;" class="btn btn-primary btn-lg" ><i class="fa fa-thumbs-o-down fa-2x"></i></a>';  
                                $('#divLike').html(tabla); 
                                break;
                            case '3': 
                                tabla+='<a onclick="likeClick();" style="width: 120px; background-color: #D3D3D3;" class="btn btn-primary btn-lg" ><i class="fa fa-thumbs-o-up fa-2x"></i></a>&nbsp;&nbsp;';
                                tabla+='<a onclick="unlikeClick();" style="width: 120px; background-color: #D3D3D3;" class="btn btn-primary btn-lg" ><i class="fa fa-thumbs-o-down fa-2x"></i></a>';    
                                $('#divLike').html(tabla);
                                break;
                            case '4': 
                                tabla+='<a onclick="likeClick();" style="width: 120px; background-color: #D3D3D3;" class="btn btn-primary btn-lg" ><i class="fa fa-thumbs-o-up fa-2x"></i></a>&nbsp;&nbsp;';
                                tabla+='<a onclick="unlikeClick();" style="width: 120px;" class="btn btn-primary btn-lg" ><i class="fa fa-thumbs-o-down fa-2x"></i></a>';   
                                $('#divLike').html(tabla);
                                break;    
                         } 
                       
                }
            }
        });
    
}

function votacionNoRegistrado(){
    
    //var msg='<p style="color: #1b2426;">Estimado visitante, sólo miembros de la comunidad pueden <b><big>votar</big></b> a un profesional.<br>';
    //msg+='<a class="button read-more" target="_blank" href="../registroUsuario/vista/registroUsuarioView.php"><b style="color:black;"><big><u>Registrate</u></big></b></a> y se parte de nuestra comunidad deportiva!</p>';
    
    //$("#mensaje2").html(msg);    
    $("#modalLike").click();
        
}

    
