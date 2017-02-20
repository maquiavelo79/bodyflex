
$(document).ready(function(){

var URLdomain   = window.location.host;
var URLprotocol = window.location.protocol;

    var boton='';
    var email = $('#email').val();
    var proRut = $('#proRut').val();
    
    $('#colEspera').hide();
    
    //alert('email ' + email);
    
    if(typeof(email)!='undefined' && email!=''){
        var parametros = {"email" : email, "proRut" : proRut};
        $.ajax({
            data:  parametros,
            url: URLprotocol+"//"+URLdomain+"/bodyflex/model/csuPublicacionSeguirModel.php",
            type:  'post',
            datetype: 'xml',
            async: true,
            success:  function(xml){
                
                //alert('csuPublicacionSeguirModel ' + xml);
                
                var xmlDoc = $.parseXML(xml), $xml = $(xmlDoc);
                var codErr = xmlDoc.getElementsByTagName('CODERROR')[0].childNodes[0].nodeValue;
                var desErr = xmlDoc.getElementsByTagName('DESERROR')[0].childNodes[0].nodeValue;
                
                switch(codErr){
                    case '9':
                        
                        var msg='<div style="text-align:center;" class="alert alert-block">';
                        msg+='<button type="button" class="close" data-dismiss="alert">×</button>';
                            msg+='<b><span style="color: #000;">' + '[' + codErr + '] ' + desErr + '</span></b>';
                        msg+='</div>';
                        $('#divSeguir').html(msg); 
                        break;
                    
                    case '8':
                        
                        var msg='<div style="text-align:center;" class="alert alert-block">';
                        msg+='<button type="button" class="close" data-dismiss="alert">×</button>';
                            msg+='<b><span style="color: #000;">' + '[' + codErr + '] ' + desErr + '</span></b>';
                        boton+='</div>';
                        $('#divSeguir').html(msg); 
                        break;
                    
                    case '99':
                        
                        var msg='<div style="text-align:center;" class="alert alert-block">';
                        msg+='<button type="button" class="close" data-dismiss="alert">×</button>';
                            msg+='<b><span style="color: #000;">' + '[' + codErr + '] ' + desErr + '</span></b>';
                        msg+='</div>';
                        $('#divSeguir').html(msg); 
                        break;
                        
                    default:
                      
                        var dato = xmlDoc.getElementsByTagName('DATOS')[0].childNodes[0].nodeValue;
                                                
                        if(dato=='1'){ //LO SIGUE
                            boton+='<button onclick="seguirClick();" style=" width: 150px;" class="seguir" type="button" id="seguir">SIGUIENDO</button>';
                            $('#colSeguir').html(boton);   
                        }else{ //NO LO SIGUE
                            boton+='<button onclick="seguirClick();" style=" width: 150px;" type="button" id="seguir">SEGUIR</button>';
                            $('#colSeguir').html(boton);   
                        }

                }
            }
        });     
    }else{
        boton+='<button onclick="seguirNoRegistrado();" style=" width: 150px;" type="button" id="seguir">SEGUIR</button>';
        $('#colSeguir').html(boton); 
    }   
    
});

function seguirClick(){
    var URLdomain   = window.location.host;
    var URLprotocol = window.location.protocol;
    var boton='';
    var email = $('#email').val();
    var proRut = $('#proRut').val();

    var parametros = {
                      "email" : email,
                      "proRut": proRut
                    };
                    
    $.ajax({
        data:  parametros,
        url: URLprotocol+"//"+URLdomain+"/bodyflex/model/IngModPublicacionSeguir.php",
        type:  'post',
        datetype: 'xml',
        async: true,
        beforeSend: function(){
            $("#colSeguir").hide();
            $("#colEspera").show();
        },
        success:  function(xml){
            $("#colSeguir").show();
            $("#colEspera").hide();
            
            //alert('IngModPublicacionSeguir ' + xml);
            
            var xmlDoc = $.parseXML(xml), $xml = $(xmlDoc);
            var codErr = xmlDoc.getElementsByTagName('CODERROR')[0].childNodes[0].nodeValue;
            var desErr = xmlDoc.getElementsByTagName('DESERROR')[0].childNodes[0].nodeValue;
            
            switch(codErr){
                case '9':

                    var msg='<div style="text-align:center;" class="alert alert-block">';
                    msg+='<button type="button" class="close" data-dismiss="alert">×</button>';
                        msg+='<b><span style="color: #000;">' + '[' + codErr + '] ' + desErr + '</span></b>';
                    msg+='</div>';
                    $('#colSeguir').html(msg); 
                    break;
                   
                case '8':
                    
                    var msg='<div style="text-align:center;" class="alert alert-block">';
                    msg+='<button type="button" class="close" data-dismiss="alert">×</button>';
                        msg+='<b><span style="color: #000;">' + '[' + codErr + '] ' + desErr + '</span></b>';
                    msg+='</div>';
                    $('#colSeguir').html(msg); 
                    break;
                    
                case '99':
                    
                    var msg='<div style="text-align:center;" class="alert alert-block">';
                    msg+='<button type="button" class="close" data-dismiss="alert">×</button>';
                        msg+='<b><span style="color: #000;">' + '[' + codErr + '] ' + desErr + '</span></b>';
                    msg+='</div>';
                    $('#colSeguir').html(msg); 
                    break; 
                    
                default:

                    var dato = xmlDoc.getElementsByTagName('DATOS')[0].childNodes[0].nodeValue;
                    switch(dato){
                        case '1':
                            boton+='<button onclick="seguirClick();" style=" width: 150px;" class="seguir" type="button" id="seguir">SIGUIENDO</button>';
                            $('#colSeguir').html(boton);
                            break;
                        case '2': 
                            boton+='<button onclick="seguirClick();" style=" width: 150px;" type="button" id="seguir">SEGUIR</button>';
                            $('#colSeguir').html(boton); 
                    }

            }
        }
    });
   
}
 
function seguirNoRegistrado(){
    var msg='Sólo miembros de la comunidad pueden <b>seguir</b> a un profesional!.<br>';
    msg+='Registrate y se parte de nuestra comunidad de profesionales del deporte!';
    
    $("#small-dialog").css("display", "block");
    $("#mensaje").html(msg);    
    $('#gatMsg').click();
}

    
