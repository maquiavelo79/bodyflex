
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
        url: URLprotocol+"//"+URLdomain+"/bodyflex/profesional/model/csuProfesionalDenunciarModel.php",
        type:  'post',
        datetype: 'xml',
        success:  function(xml){

            //alert('csuProfesionalDenunciarModel ' + xml);

            var xmlDoc = $.parseXML(xml), $xml = $(xmlDoc);
            var codErr = xmlDoc.getElementsByTagName('CODERROR')[0].childNodes[0].nodeValue;
            var desErr = xmlDoc.getElementsByTagName('DESERROR')[0].childNodes[0].nodeValue;

            switch(codErr){
                case '9':

                    var msg='<div style="text-align:center;" class="alert alert-block">';
                    msg+='<b><span style="color: #000;">' + '[' + codErr + '] ' + desErr + '</span></b>';
                    msg+='</div>';
                    $('#btnDenuncia').html(msg); 
                    break;

                case '8':

                    var msg='<div style="text-align:center;" class="alert alert-block">';
                    msg+='<b><span style="color: #000;">' + '[' + codErr + '] ' + desErr + '</span></b>';
                    msg+='</div>';
                    $('#btnDenuncia').html(msg); 
                    break;

                case '99':

                    var msg='<div style="text-align:center;" class="alert alert-block">';
                    msg+='<b><span style="color: #000;">' + '[' + codErr + '] ' + desErr + '</span></b>';
                    msg+='</div>';
                    $('#btnDenuncia').html(msg); 
                    break;
                 
                case '100':

                    var msg='<div style="text-align:center;" class="alert alert-block">';
                    msg+='<b><span style="color: #000;">' + '[' + codErr + '] ' + desErr + '</span></b>';
                    msg+='</div>';
                    $('#btnDenuncia').html(msg); 
                    break;

                default:

                    var dato = xmlDoc.getElementsByTagName('DATOS')[0].childNodes[0].nodeValue;

                    if(dato=='1'){
                        boton+='<a style="width: 200px; background-color: #FFCC00; color: black; font-weight: bold;" id="denuncia" class="btn btn-primary btn-lg" onclick="denunciarClick();">DENUNCIADO</a>';
                        boton+='<div id="divLoadDenPro" style="width: 200px; height: 50px; display: none; margin-left: 65px; margin-top: 25px;" class="load"></div>';
                        $('#btnDenuncia').html(boton);   
                    }else{ 
                        boton+='<a style="width: 200px; font-weight: bold; background-color: #D3D3D3;" id="denuncia" class="btn btn-primary btn-lg" onclick="denunciarClick();">DENUNCIAR</a>';
                        boton+='<div id="divLoadDenPro" style="width: 200px; height: 50px; display: none; margin-left: 65px; margin-top: 25px;" class="load"></div>';
                        $('#btnDenuncia').html(boton);   
                    }

            }
        }
    });     
    
    
});

function denunciarClick(){
    //alert('likeClick');
    
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
        url: URLprotocol+"//"+URLdomain+"/bodyflex/profesional/model/IngModProfesionalDenunciar.php",
        type:  'post',
        datetype: 'xml',
        beforeSend: function(){
           
            $("#divLoadDenPro").show();
            $("#denuncia").hide();
            
        },
        success:  function(xml){
            
            //alert('IngModPublicacionSeguir ' + xml);
            
            $("#divLoadDenPro").hide();
            $("#denuncia").show();
            
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
                            boton+='<div id="divLoadDenPro" style="width: 200px; height: 50px; display: none; margin-left: 65px; margin-top: 25px;" class="load"></div>';
                            $('#btnDenuncia').html(boton);
                            break;
                        case '2': 
                            boton+='<a style="width: 200px; font-weight: bold; background-color: #D3D3D3;" id="denuncia" class="btn btn-primary btn-lg" onclick="denunciarClick();">DENUNCIAR</a>';
                            boton+='<div id="divLoadDenPro" style="width: 200px; height: 50px; display: none; margin-left: 65px; margin-top: 25px;" class="load"></div>';
                            $('#btnDenuncia').html(boton); 
                    }

            }
        }
    });
   
}
 
    
