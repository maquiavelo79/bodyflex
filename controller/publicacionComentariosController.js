
$(document).ready(function(){

var URLdomain   = window.location.host;
var URLprotocol = window.location.protocol;

    $('#comentar').click(function(){
        var email = $('#email').val();
        if(typeof(email)!='undefined' && email!=''){
            
        
            //Limpiamos entradas
             var com = $('#comment').val();      

             if(com == '') {

                 var msg='<div class="alert alert-error">';
                     msg+='<strong>Escriba un comentario!.<strong>';
                 msg+='</div>';

                 $('#warning-comentario').html(msg);
                 $('#warning-comentario').show();
                 return false;

             }

             $('#warning-comentario').hide();

             var pu = $('#puId').val();  
             var no = $('#nombre').val();  
             var ap = $('#apellido').val();  
             var ma = $('#email').val(); 
             var co = $('#comment').val(); 

             //AJAX
                 var parametros = {
                                 "pu" : pu,
                                 "no" : no,
                                 "ap": ap,
                                 "ma": ma,
                                 "co": co
                             };            

                 $.ajax({
                     data:  parametros,
                     url: URLprotocol+"//"+URLdomain+"/bodyflex/model/publicacionProAgrComentario.php",
                     type:  'post',
                     datetype: 'xml',
                     async: true,
                     beforeSend: function(){
                         $("#espera").show();
                 },
                 success:  function(xml){     

                     var xmlDoc = $.parseXML(xml), $xml = $(xmlDoc);
                     var codErr = xmlDoc.getElementsByTagName('CODERROR')[0].childNodes[0].nodeValue;
                     var desErr = xmlDoc.getElementsByTagName('DESERROR')[0].childNodes[0].nodeValue;

                     switch(codErr){
                         case '9':

                             var msg='<div style="text-align:center;" class="alert alert-block">';
                             msg+='<button type="button" class="close" data-dismiss="alert">×</button>';
                                     msg+='<b><span style="color: black;">' + '[' + codErr + '] ' + desErr + '</span></b>';
                             msg+='</div>';

                             $('#warning-comentario').html(msg);

                             break;

                         case '8':

                             var msg='<div style="text-align:center;" class="alert alert-block">';
                             msg+='<button type="button" class="close" data-dismiss="alert">×</button>';
                                 msg+='<b><span style="color: black;">' + '[' + codErr + '] ' + desErr + '</span></b>';
                             msg+='</div>';

                             $('#warning-comentario').html(msg);

                             break;

                         case '99':

                             var msg='<div style="text-align:center;" class="alert alert-block">';
                             msg+='<button type="button" class="close" data-dismiss="alert">×</button>';
                                 msg+='<b><span style="color: black;">' + '[' + codErr + '] ' + desErr + '</span></b>';
                             msg+='</div>';

                             $('#warning-comentario').html(msg);

                             break;

                         default:

                                 var puId = $('#puId').val();
                                 var parametros2 = { "puId" : puId };            

                                 $.ajax({
                                     data:  parametros2,
                                     url: URLprotocol+"//"+URLdomain+"/bodyflex/model/publicacionCsuComentariosModel.php",
                                     type:  'post',
                                     datetype: 'xml',
                                     async: true,
                                         success:  function (xml){

                                         var xmlDoc = $.parseXML(xml), $xml = $(xmlDoc);
                                         var codErr = xmlDoc.getElementsByTagName('CODERROR')[0].childNodes[0].nodeValue;
                                         var desErr = xmlDoc.getElementsByTagName('DESERROR')[0].childNodes[0].nodeValue;

                                         switch(codErr){
                                             case '9':

                                                 var msg='<div style="text-align:center;" class="alert alert-block">';
                                                 msg+='<button type="button" class="close" data-dismiss="alert">×</button>';
                                                     msg+='<b><span style="color: black;">' + '[' + codErr + '] ' + desErr + '</span></b>';
                                                 msg+='</div>';
                                                 $('#warning-articulo').html(msg);    
                                                 $('#warning-articulo').show();
                                                 break;   

                                             case '8':

                                                 var msg='<div style="text-align:center;" class="alert alert-block">';
                                                 msg+='<button type="button" class="close" data-dismiss="alert">×</button>';
                                                     msg+='<b><span style="color: black;">' + '[' + codErr + '] ' + desErr + '</span></b>';
                                                 msg+='</div>';
                                                 $('#warning-articulo').html(msg);    
                                                 $('#warning-articulo').show();
                                                 break;   

                                             case '99':

                                                 var msg='<div style="text-align:center;" class="alert alert-block">';
                                                 msg+='<button type="button" class="close" data-dismiss="alert">×</button>';
                                                     msg+='<b><span style="color: black;">' + '[' + codErr + '] ' + desErr + '</span></b>';
                                                 msg+='</div>';
                                                 $('#warning-articulo').html(msg);    
                                                 $('#warning-articulo').show();
                                                 break;   

                                             case '98':

                                                 $('#warning-articulo').html('');    
                                                 $('#warning-articulo').show();
                                                 break;   

                                             default:

                                                 var datos = xmlDoc.getElementsByTagName('DATOS')[0].childNodes[0].nodeValue;
                                                 $('#comment-list').html(datos);   
                                                 $('#comment').val(''); 
                                                 break;

                                         }
                                     }
                                 });

                             break;

                     }              
                 }
             });
        }else{
            comentarioNoRegistrado();
        }
        
    });
    
    
    
    
});

function comentarioNoRegistrado(){
    
    var msg='Sólo miembros de la comunidad pueden <b>comentar</b> publicaciones.<br>';
    msg+='Registrate y se parte de nuestra comunidad de profesionales del deporte!';
    
    $("#small-dialog").css("display", "block");
    $("#mensaje").html(msg);    
    $('#gatMsg').click();
    
}

function eliminaComentario(id){
var URLdomain   = window.location.host;
var URLprotocol = window.location.protocol;

    var parametros = { "id" : id };            
                            
    $.ajax({
        data:  parametros,
        url: URLprotocol+"//"+URLdomain+"/bodyflex/model/publicacionProEliComentario.php",
        type:  'post',
        datetype: 'xml',
        async: true,
            success:  function (xml){
            
            var xmlDoc = $.parseXML(xml), $xml = $(xmlDoc);
            var codErr = xmlDoc.getElementsByTagName('CODERROR')[0].childNodes[0].nodeValue;
            var desErr = xmlDoc.getElementsByTagName('DESERROR')[0].childNodes[0].nodeValue;
            
            switch(codErr){
                case '9':
                    
                    var msg='<div style="text-align:center;" class="alert alert-block">';
                    msg+='<button type="button" class="close" data-dismiss="alert">×</button>';
                        msg+='<b><span style="color: black;">' + '[' + codErr + '] ' + desErr + '</span></b>';
                    msg+='</div>';

                    $('#warning-articulo').html(msg);    
                    $('#warning-articulo').show();
                    break;   
                    
                case '8':
                    
                    var msg='<div style="text-align:center;" class="alert alert-block">';
                    msg+='<button type="button" class="close" data-dismiss="alert">×</button>';
                        msg+='<b><span style="color: black;">' + '[' + codErr + '] ' + desErr + '</span></b>';
                    msg+='</div>';

                    $('#warning-articulo').html(msg);    
                    $('#warning-articulo').show();
                    break;   
                
                case '99':
                    
                    var msg='<div style="text-align:center;" class="alert alert-block">';
                    msg+='<button type="button" class="close" data-dismiss="alert">×</button>';
                        msg+='<b><span style="color: black;">' + '[' + codErr + '] ' + desErr + '</span></b>';
                    msg+='</div>';

                    $('#warning-articulo').html(msg);    
                    $('#warning-articulo').show();
                    break;   
                                        
                default:
                    
                    var puId = $('#puId').val();
                    var parametros2 = { "puId" : puId };            

                    $.ajax({
                        data:  parametros2,
                        url: URLprotocol+"//"+URLdomain+"/bodyflex/model/publicacionCsuComentariosModel.php",
                        type:  'post',
                        datetype: 'xml',
                        async: true,
                            success:  function (xml){

                            var xmlDoc = $.parseXML(xml), $xml = $(xmlDoc);
                            var codErr = xmlDoc.getElementsByTagName('CODERROR')[0].childNodes[0].nodeValue;
                            var desErr = xmlDoc.getElementsByTagName('DESERROR')[0].childNodes[0].nodeValue;

                            switch(codErr){
                                case '9':

                                    var msg='<div style="text-align:center;" class="alert alert-block">';
                                    msg+='<button type="button" class="close" data-dismiss="alert">×</button>';
                                        msg+='<b><span style="color: black;">' + '[' + codErr + '] ' + desErr + '</span></b>';
                                    msg+='</div>';
                                    $('#warning-articulo').html(msg);    
                                    $('#warning-articulo').show();
                                    break;   

                                case '8':

                                    var msg='<div style="text-align:center;" class="alert alert-block">';
                                    msg+='<button type="button" class="close" data-dismiss="alert">×</button>';
                                        msg+='<b><span style="color: black;">' + '[' + codErr + '] ' + desErr + '</span></b>';
                                    msg+='</div>';
                                    $('#warning-articulo').html(msg);    
                                    $('#warning-articulo').show();
                                    break;   

                                case '99':

                                    var msg='<div style="text-align:center;" class="alert alert-block">';
                                    msg+='<button type="button" class="close" data-dismiss="alert">×</button>';
                                        msg+='<b><span style="color: black;">' + '[' + codErr + '] ' + desErr + '</span></b>';
                                    msg+='</div>';
                                    $('#warning-articulo').html(msg);    
                                    $('#warning-articulo').show();
                                    break;   

                                case '98':

                                    $('#comment-list').html('');   
                                    $('#comment').val(''); 

                                    $('#warning-articulo').html('');    
                                    $('#warning-articulo').show();
                                    break;   

                                default:

                                    var datos = xmlDoc.getElementsByTagName('DATOS')[0].childNodes[0].nodeValue;
                                    $('#comment-list').html(datos);   
                                    $('#comment').val(''); 
                                    break;

                            }
                        }
                    });
                    break;
            }
        }
    });
    
}
    
    
