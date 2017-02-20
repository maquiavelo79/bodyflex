
$(document).ready(function(){
var URLdomain   = window.location.host;
var URLprotocol = window.location.protocol;
    //alert('denunciar');
    var boton='';
    var puId = $('#puId').val();
    var session_id = $('#session_id').val();
    $('#colEsperaDenuncia').hide();
    
    //Segunda llamada
    var parametros = {"puId" : puId, "session_id": session_id};
    $.ajax({
        data:  parametros,
        url: URLprotocol+"//"+URLdomain+"/bodyflex/model/publicacionConsultaDenunciaModel.php",
        type:  'post',
        datetype: 'xml',
        async: true,
        success:  function (xml){
                        
            //alert('publicacionConsultaDenunciaModel ' + xml);
            
            var xmlDoc = $.parseXML(xml), $xml = $(xmlDoc);
            var codErr = xmlDoc.getElementsByTagName('CODERROR')[0].childNodes[0].nodeValue;
            var desErr = xmlDoc.getElementsByTagName('DESERROR')[0].childNodes[0].nodeValue;
            
            switch(codErr){
                case '9':
                    
                    var msg='<div style="text-align:center;" class="alert alert-block">';
                    msg+='<button type="button" class="close" data-dismiss="alert">×</button>';
                        msg+='<b><span style="color: black;">' + '[' + codErr + '] ' + desErr + '</span></b>';
                    msg+='</div>';
                    $('#divDenunciar').html(msg);
                    break;
                    
                case '8':
                    
                    var msg='<div style="text-align:center;" class="alert alert-block">';
                    msg+='<button type="button" class="close" data-dismiss="alert">×</button>';
                        msg+='<b><span style="color: black;">' + '[' + codErr + '] ' + desErr + '</span></b>';
                    msg+='</div>';
                    $('#divDenunciar').html(msg);
                    
                case '99':
                    
                    var msg='<div style="text-align:center;" class="alert alert-block">';
                    msg+='<button type="button" class="close" data-dismiss="alert">×</button>';
                        msg+='<b><span style="color: black;">' + '[' + codErr + '] ' + desErr + '</span></b>';
                    msg+='</div>';
                    $('#divDenunciar').html(msg); 
                    
                case '1':
                    
//                    boton+='<button onclick="denunciarPublicacion();" style=" width: 150px;" class="seguir" type="button" id="denunciar">DENUNCIADO</button>';                  
//                    boton+='<div id="esperaDen" style="height: 48px; text-align: center; display: none;">';
//                    boton+='<h4 class="alert-heading">&nbsp;</h4>';
//                    boton+='</div>';
                    
                    boton+='<div class="contenedorDenuncia">';
                        boton+='<div class="contenidosDenuncia">';
                            boton+='<div id="colDenunciar" style="height: 48px; text-align: center;" class="columnaDenuncia">';
                                boton+='<button onclick="denunciarPublicacion();" style="width: 150px;" type="button" id="denunciar">DENUNCIADO</button>';
                            boton+='</div>';
                            boton+='<div id="colEsperaDenuncia" style="display:none;" class="columnaDenuncia">';
                                boton+='<div id="espera" class="form-actions" style="height: 48px; text-align: center;">';
                                    boton+='<h4 class="alert-heading">&nbsp;</h4>';
                                boton+='</div>';
                            boton+='</div>';
                        boton+='</div>';
                    boton+='</div>';
                    
                    $('#divDenunciar').html(boton);
                    $('#divDenunciar').trigger('liszt:updated');
                    break;
                    
                case '2':
//                    boton+='<button onclick="denunciarPublicacion();" id="denunciar" style=" width: 150px;" type="button" >DENUNCIAR</button>;';
//                    boton+='<div id="esperaDen" style="height: 48px; text-align: center; display: none;">';
//                    boton+='<h4 class="alert-heading">&nbsp;</h4>';
//                    boton+='</div>';
                    
                    boton+='<div class="contenedorDenuncia">';
                        boton+='<div class="contenidosDenuncia">';
                            boton+='<div id="colDenunciar" style="height: 48px; text-align: center;" class="columnaDenuncia">';
                                boton+='<button onclick="denunciarPublicacion();" style=" width: 150px;" type="button" id="denunciar">DENUNCIAR</button>';
                            boton+='</div>';
                            boton+='<div id="colEsperaDenuncia" style="display:none;" class="columnaDenuncia">';
                                boton+='<div id="espera" class="form-actions" style="height: 48px; text-align: center;">';
                                    boton+='<h4 class="alert-heading">&nbsp;</h4>';
                                boton+='</div>';
                            boton+='</div>';
                        boton+='</div>';
                    boton+='</div>';
                    
                    $('#colDenunciar').html(boton);
                    $('#divDenunciar').trigger('liszt:updated');
                    break;
                    
            }
        }
    }); 

});



function denunciarPublicacion(){
var URLdomain   = window.location.host;
var URLprotocol = window.location.protocol;

        var boton='';
        var puId = $('#puId').val();
        var session_id = $('#session_id').val();
        //Segunda llamada
        var parametros = {"puId" : puId, "session_id": session_id};
        $.ajax({
            data:  parametros,
            url: URLprotocol+"//"+URLdomain+"/bodyflex/model/publicacionDenunciarModel.php",
            type:  'post',
            datetype: 'xml',
            async: true,
            beforeSend: function(){
                
                $('#colEsperaDenuncia').show();
                $('#colDenunciar').hide();
                
            },
            success:  function (xml){
                
                $('#colEsperaDenuncia').hide();
                $('#colDenunciar').show();
                
                //alert('publicacionDenunciarModel ' + xml);
                
                var xmlDoc = $.parseXML(xml), $xml = $(xmlDoc);
                var codErr = xmlDoc.getElementsByTagName('CODERROR')[0].childNodes[0].nodeValue;
                var desErr = xmlDoc.getElementsByTagName('DESERROR')[0].childNodes[0].nodeValue;
                
                switch(codErr){
                    case '8':
                        
                        var msg='<div style="text-align:center;" class="alert alert-block">';
                        msg+='<button type="button" class="close" data-dismiss="alert">×</button>';
                                msg+='<b><span style="color: black;">' + '[' + codErr + '] ' + desErr + '</span></b>';
                        msg+='</div>';
                        $('#divDenunciar').html(msg);
                        break;
                        
                    case '9':
                        
                        var msg='<div style="text-align:center;" class="alert alert-block">';
                        msg+='<button type="button" class="close" data-dismiss="alert">×</button>';
                                msg+='<b><span style="color: black;">' + '[' + codErr + '] ' + desErr + '</span></b>';
                        msg+='</div>';
                        $('#divDenunciar').html(msg);
                        break;
                        
                    case '99':
                        
                        var msg='<div style="text-align:center;" class="alert alert-block">';
                        msg+='<button type="button" class="close" data-dismiss="alert">×</button>';
                            msg+='<b><span style="color: black;">' + '[' + codErr + '] ' + desErr + '</span></b>';
                        msg+='</div>';
                        $('#divDenunciar').html(msg);
                        break;
                        
                    case '0':
                        
                            var dato = xmlDoc.getElementsByTagName('DATOS')[0].childNodes[0].nodeValue;
                            if(dato==1){
                        
//                                boton+='<button onclick="denunciarPublicacion();" style=" width: 150px;" class="seguir" type="button" id="denunciar">DENUNCIADO</button>';
//                                boton+='<div id="esperaDen" style="height: 48px; text-align: center; display: none;">';
//                                boton+='<h4 class="alert-heading">&nbsp;</h4>';
//                                boton+='</div>';

                                boton+='<div class="contenedorDenuncia">';
                                    boton+='<div class="contenidosDenuncia">';
                                        boton+='<div id="colDenunciar" style="height: 48px; text-align: center;" class="columnaDenuncia">';
                                            boton+='<button onclick="denunciarPublicacion();" class="seguir" style="width: 150px; color:white; background:red;" type="button" id="denunciar">DENUNCIADO</button>';
                                        boton+='</div>';
                                        boton+='<div id="colEsperaDenuncia" style="display:none;" class="columnaDenuncia">';
                                            boton+='<div id="espera" class="form-actions" style="height: 48px; text-align: center;">';
                                                boton+='<h4 class="alert-heading">&nbsp;</h4>';
                                            boton+='</div>';
                                        boton+='</div>';
                                    boton+='</div>';
                                boton+='</div>';

                                $('#divDenunciar').html(boton);
                                $('#divDenunciar').trigger('liszt:updated');
                                
                            }else{              
                        
//                                boton+='<button onclick="denunciarPublicacion();" id="denunciar" style=" width: 150px;" type="button" >DENUNCIAR</button>;';
//                                boton+='<div id="esperaDen" style="height: 48px; text-align: center; display: none;">';
//                                boton+='<h4 class="alert-heading">&nbsp;</h4>';
//                                boton+='</div>';
                
                                boton+='<div class="contenedorDenuncia">';
                                    boton+='<div class="contenidosDenuncia">';
                                        boton+='<div id="colDenunciar" style="height: 48px; text-align: center;" class="columnaDenuncia">';
                                            boton+='<button onclick="denunciarPublicacion();" style=" width: 150px;" type="button" id="denunciar">DENUNCIAR</button>';
                                        boton+='</div>';
                                        boton+='<div id="colEsperaDenuncia" style="display:none;" class="columnaDenuncia">';
                                            boton+='<div id="espera" class="form-actions" style="height: 48px; text-align: center;">';
                                                boton+='<h4 class="alert-heading">&nbsp;</h4>';
                                            boton+='</div>';
                                        boton+='</div>';
                                    boton+='</div>';
                                boton+='</div>';

                                $('#divDenunciar').html(boton);
                                $('#divDenunciar').trigger('liszt:updated');
                       
                            }    
                        
                        break;
                        
                }                
            }
        }); 

}
 