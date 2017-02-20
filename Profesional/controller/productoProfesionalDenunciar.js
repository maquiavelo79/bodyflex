
$(document).ready(function(){
    var URLdomain   = window.location.host;
    var URLprotocol = window.location.protocol;
    
    //alert('denunciar');
    var boton='';
    var rutPro = $('#rutPro').val();
    var id = $('#id').val();
    var email = $('#email').val();
    var se = $('#session_id').val();
    
    //Segunda llamada
    var parametros = {
        "rutPro" : rutPro
        , "id": id
        , "email": email
        , "se": se
    };
    
    $.ajax({
        data:  parametros,
        url: URLprotocol+"//"+URLdomain+"/bodyflex/profesional/model/perfilProfesionalCsuProDenunciaModel.php",
        type:  'post',
        datetype: 'xml',
        async: true,
        beforeSend: function(){
            $('#divLoadDen').show();
            $('#denunciar').hide();
        },
        success:  function (xml){

            //alert('perfilProfesionalCsuProDenunciaModelXXX ' + xml);

            $('#divLoadDen').hide();
            $('#denunciar').show();

            var xmlDoc = $.parseXML(xml), $xml = $(xmlDoc);
            var codErr = xmlDoc.getElementsByTagName('CODERROR')[0].childNodes[0].nodeValue;
            var desErr = xmlDoc.getElementsByTagName('DESERROR')[0].childNodes[0].nodeValue;

            switch(codErr){
                case '9':

                    var msg='<div style="text-align:center;" class="alert alert-block">';
                    msg+='<b><span style="color: black;">' + '[' + codErr + '] ' + desErr + '</span></b>';
                    msg+='</div>';
                    $('#divDenunciar').html(msg);
                    break;

                case '8':

                    var msg='<div style="text-align:center;" class="alert alert-block">';
                    msg+='<b><span style="color: black;">' + '[' + codErr + '] ' + desErr + '</span></b>';
                    msg+='</div>';
                    $('#divDenunciar').html(msg);

                case '99':

                    var msg='<div style="text-align:center;" class="alert alert-block">';
                    msg+='<b><span style="color: black;">' + '[' + codErr + '] ' + desErr + '</span></b>';
                    msg+='</div>';
                    $('#divDenunciar').html(msg); 

                case '100':

                    var msg='<div style="text-align:center;" class="alert alert-block">';
                    msg+='<b><span style="color: black;">' + '[' + codErr + '] ' + desErr + '</span></b>';
                    msg+='</div>';
                    $('#divDenunciar').html(msg);     

                default:

                    var datos = xmlDoc.getElementsByTagName('DATOS')[0].childNodes[0].nodeValue;

                    if(datos==1){
                        boton+='<button onclick="denunciarProductoProfesional();" id="denunciar" style="width: 150px; display: block; margin-left: 40px; background-color: orangered;" type="button">DENUNCIADO</button>';
                        boton+='<div id="divLoadDen" style="margin-left: 80px; width: 70px; height: 50px; display: none;" class="load"></div>';
                    }else{
                        boton+='<button onclick="denunciarProductoProfesional();" id="denunciar" style="width: 150px; display: block; margin-left: 40px;" type="button">DENUNCIAR</button>';
                        boton+='<div id="divLoadDen" style="margin-left: 80px; width: 70px; height: 50px; display: none;" class="load"></div>';
                    }

                    //alert('boton ' + boton);

                    $('#colDenunciar').html(boton);
                    $('#divDenunciar').trigger('liszt:updated');
                    $('#colDenunciar').trigger('liszt:updated');
                    $('#denunciar').trigger('liszt:updated');
                    break;

            }
        }
    }); 
    
});



function denunciarProductoProfesional(){

    var URLdomain   = window.location.host;
    var URLprotocol = window.location.protocol;  

        var boton='';
        var rutPro = $('#rutPro').val();
        var id = $('#id').val();
        var email = $('#email').val();
        var se = $('#session_id').val();
                
        var parametros = {
            "rutPro" : rutPro
            , "id": id
            , "email": email
            , "se": se
        };
        $.ajax({
            data:  parametros,
            url: URLprotocol+"//"+URLdomain+"/bodyflex/profesional/model/perfilProfesionalDenProProModel.php",
            type:  'post',
            datetype: 'xml',
            beforeSend: function(){
                
                $('#divLoadDen').show();
                $('#denunciar').hide();
                
            },
            success:  function (xml){
                
                $('#divLoadDen').hide();
                $('#denunciar').show();
                
                //alert('perfilProfesionalDenProProModel ' + xml);
                
                var xmlDoc = $.parseXML(xml), $xml = $(xmlDoc);
                var codErr = xmlDoc.getElementsByTagName('CODERROR')[0].childNodes[0].nodeValue;
                var desErr = xmlDoc.getElementsByTagName('DESERROR')[0].childNodes[0].nodeValue;
                
                switch(codErr){
                    case '8':
                        
                        var msg='<div style="text-align:center;" class="alert alert-block">';
                        msg+='<b><span style="color: black;">' + '[' + codErr + '] ' + desErr + '</span></b>';
                        msg+='</div>';
                        $('#divDenunciar').html(msg);
                        break;
                        
                    case '9':
                        
                        var msg='<div style="text-align:center;" class="alert alert-block">';
                        msg+='<b><span style="color: black;">' + '[' + codErr + '] ' + desErr + '</span></b>';
                        msg+='</div>';
                        $('#divDenunciar').html(msg);
                        break;
                        
                    case '99':
                        
                        var msg='<div style="text-align:center;" class="alert alert-block">';
                        msg+='<b><span style="color: black;">' + '[' + codErr + '] ' + desErr + '</span></b>';
                        msg+='</div>';
                        $('#divDenunciar').html(msg);
                        break;
                        
                    case '100':
                        
                        var msg='<div style="text-align:center;" class="alert alert-block">';
                        msg+='<b><span style="color: black;">' + '[' + codErr + '] ' + desErr + '</span></b>';
                        msg+='</div>';
                        $('#divDenunciar').html(msg);
                        break;    
                        
                    case '0':
                        
                            var dato = xmlDoc.getElementsByTagName('DATOS')[0].childNodes[0].nodeValue;
                            if(dato==1){
                        
                                boton+='<button onclick="denunciarProductoProfesional();" id="denunciar" style="width: 150px; display: block; margin-left: 40px; background-color: orangered;" type="button">DENUNCIADO</button>';
                                boton+='<div id="divLoadDen" style="margin-left: 80px; width: 70px; height: 50px; display: none;" class="load"></div>';

                                $('#colDenunciar').html(boton);
                                $('#divDenunciar').trigger('liszt:updated');
                                $('#colDenunciar').trigger('liszt:updated');
                                $('#denunciar').trigger('liszt:updated');
                                
                            }else{              
                        
                                boton+='<button onclick="denunciarProductoProfesional();" id="denunciar" style="width: 150px; display: block; margin-left: 40px;" type="button">DENUNCIAR</button>';
                                boton+='<div id="divLoadDen" style="margin-left: 80px; width: 70px; height: 50px; display: none;" class="load"></div>';

                                $('#colDenunciar').html(boton);
                                $('#divDenunciar').trigger('liszt:updated');
                                $('#colDenunciar').trigger('liszt:updated');
                                $('#denunciar').trigger('liszt:updated');
                        
                            }    
                        
                        break;
                        
                }                
            }
        }); 

}
 