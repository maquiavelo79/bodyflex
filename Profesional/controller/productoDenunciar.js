
$(document).ready(function(){

    var URLdomain   = window.location.host;
    var URLprotocol = window.location.protocol;
        
    var boton='';
    var session_id = $('#session_id').val();
    var proRut = $('#rutPro').val();
        
    //alert('publicacionSeguir.js: email, proRut: ' + email + ' ,' + proRut);    
    
    var parametros = {"session_id" : session_id, "proRut" : proRut};
    $.ajax({
        data:  parametros,
        url: URLprotocol+"//"+URLdomain+"/bodyflex/profesional/model/csuProductoprofesionalDenunciarModel.php",
        type:  'post',
        datetype: 'xml',
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
                        //boton+='<button onclick="seguirClick();" style=" width: 150px;" class="seguir" type="button" id="seguir">SIGUIENDO</button>';
                        boton+='<a style="width: 200px; background-color: #FFCC00; color: black; font-weight: bold;" id="denuncia" class="btn btn-primary btn-lg" onclick="denunciarClick();">DENUNCIADO</a>';
                        $('#btnDenuncia').html(boton);   
                    }else{ //NO LO SIGUE
                        //boton+='<button onclick="seguirClick();" style=" width: 150px;" type="button" id="seguir">SEGUIR</button>';
                        boton+='<a style="width: 200px; font-weight: bold; background-color: #D3D3D3;" id="denuncia" class="btn btn-primary btn-lg" onclick="denunciarClick();">DENUNCIAR</a>';
                        $('#btnDenuncia').html(boton);   
                    }

            }
        }
    });     
    
    
});

function denunciarClick(){
    
    alert('denunciarClick');
    
    var URLdomain   = window.location.host;
    var URLprotocol = window.location.protocol;
    
    var boton='';
    var session_id = $('#session_id').val();
    var proRut = $('#rutPro').val();

    var parametros = {
                      "session_id" : session_id,
                      "proRut": proRut
                    };
                    
    $.ajax({
        data:  parametros,
        url: URLprotocol+"//"+URLdomain+"/bodyflex/profesional/model/IngModProductoProfesionalDenunciar.php",
        type:  'post',
        datetype: 'xml',
        success:  function(xml){
            
            //alert('IngModPublicacionSeguir ' + xml);
            
            var xmlDoc = $.parseXML(xml), $xml = $(xmlDoc);
            var codErr = xmlDoc.getElementsByTagName('CODERROR')[0].childNodes[0].nodeValue;
            var desErr = xmlDoc.getElementsByTagName('DESERROR')[0].childNodes[0].nodeValue;
            
            switch(codErr){
                case '9':

                    var msg='<div style="text-align:center;" class="alert alert-block">';
                    msg+='<b><span style="color: #000;">' + '[' + codErr + '] ' + desErr + '</span></b>';
                    msg+='</div>';
                    $('#divDenuncia').html(msg); 
                    break;
                   
                case '8':
                    
                    var msg='<div style="text-align:center;" class="alert alert-block">';
                    msg+='<b><span style="color: #000;">' + '[' + codErr + '] ' + desErr + '</span></b>';
                    msg+='</div>';
                    $('#divDenuncia').html(msg); 
                    break;
                    
                case '99':
                    
                    var msg='<div style="text-align:center;" class="alert alert-block">';
                    msg+='<b><span style="color: #000;">' + '[' + codErr + '] ' + desErr + '</span></b>';
                    msg+='</div>';
                    $('#divDenuncia').html(msg); 
                    break; 
                    
                case '100':
                    
                    var msg='<div style="text-align:center;" class="alert alert-block">';
                    msg+='<b><span style="color: #000;">' + '[' + codErr + '] ' + desErr + '</span></b>';
                    msg+='</div>';
                    $('#divDenuncia').html(msg); 
                    break;     
                    
                default:

                    var dato = xmlDoc.getElementsByTagName('DATOS')[0].childNodes[0].nodeValue;
                    switch(dato){
                        case '1':
                            boton+='<a style="width: 200px; background-color: #FFCC00; color: black; font-weight: bold;" id="denuncia" class="btn btn-primary btn-lg" onclick="denunciarClick();">DENUNCIADO</a>';
                            $('#btnDenuncia').html(boton);
                            break;
                        case '2': 
                            boton+='<a style="width: 200px; font-weight: bold; background-color: #D3D3D3;" id="denuncia" class="btn btn-primary btn-lg" onclick="denunciarClick();">DENUNCIAR</a>';
                            $('#btnDenuncia').html(boton); 
                    }

            }
        }
    });
   
}
 
    
