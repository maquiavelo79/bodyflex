
jQuery(document).ready(function() {

    var URLdomain   = window.location.host;
    var URLprotocol = window.location.protocol;

    //CONTROLADOR DE EVENTOS BOTÓN CATÁLOGO
    var idPro= $('#idPro').val();           
    var ultimo= $('#proListComUlt').val();   
    var orden= $('#cmbOrden').val();   
        
    var parametros = { "idPro" : idPro, "ultimo" : ultimo, "orden" : orden };    
    $.ajax({
            data:  parametros,
            url: URLprotocol+"//"+URLdomain+"/bodyflex/catalogo/model/proDetCsuComModel.php",
            type:  'post',
            datetype: 'xml',
            async: true,
        beforeSend: function(){
            $("#esperaListaCom").show();
        },
        success:  function(xml){

            //alert('proDetCsuComModel '+xml);

            $("#esperaListaCom").hide();
            var xmlDoc = $.parseXML(xml), $xml = $(xmlDoc);
            var codErr = xmlDoc.getElementsByTagName('CODERROR')[0].childNodes[0].nodeValue;
            var desErr = xmlDoc.getElementsByTagName('DESERROR')[0].childNodes[0].nodeValue;

            switch(codErr){
                case "9":

                    var msg='<div class="alert alert-danger">';
                        msg+='<button class="close" aria-hidden="true" data-dismiss="alert" type="button">×</button>';
                        msg+='<strong>ATENCIÓN</strong>' + '[' + codErr + '] ' + desErr;
                    msg+='</div>';
                    $('#msgListCom').html(msg);
                    $('#msgListCom').show();
                    break;

                case "8":

                    var msg='<div class="alert alert-danger">';
                        msg+='<button class="close" aria-hidden="true" data-dismiss="alert" type="button">×</button>';
                        msg+='<strong>ATENCIÓN</strong>' + '[' + codErr + '] ' + desErr;
                    msg+='</div>';
                    $('#msgListCom').html(msg);
                    $('#msgListCom').show();
                    break;

                case "99":

                    var msg='<div class="alert alert-danger">';
                        msg+='<button class="close" aria-hidden="true" data-dismiss="alert" type="button">×</button>';
                        msg+='<strong>ATENCIÓN</strong>' + '[' + codErr + '] ' + desErr;
                    msg+='</div>';
                    $('#msgListCom').html(msg);
                    $('#msgListCom').show();
                    break;

                case "100":

                    var msg='<div class="alert alert-danger">';
                        msg+='<button class="close" aria-hidden="true" data-dismiss="alert" type="button">×</button>';
                        msg+='<strong>ATENCIÓN</strong>' + '[' + codErr + '] ' + desErr;
                    msg+='</div>';
                    $('#msgListCom').html(msg);
                    $('#msgListCom').show();
                    break;    

                case "98":
                    
                    var msg='<div style="text-align: center; color: black;" class="alert alert-success">';
                        msg+='<button class="close" aria-hidden="true" data-dismiss="alert" type="button">×</button>';
                        msg+='<strong>Atención!</strong><br>';
                        msg+='Sé el primero en comentar este producto!.';
                    msg+='</div>';
                                       
                    $('#msgListCom').html(msg);
                    $('#msgListCom').show();
                    
                    $('#numCom').html('0');
                    $('#masCom').hide().trigger('liszt:updated');
                    break;        

                default:

                    var datos = xmlDoc.getElementsByTagName('DATOS')[0].childNodes[0].nodeValue;
                    var ULTIMO = xmlDoc.getElementsByTagName('ULTIMO')[0].childNodes[0].nodeValue;
                    var hayMas = xmlDoc.getElementsByTagName('HAYMAS')[0].childNodes[0].nodeValue;
                    var numCom = xmlDoc.getElementsByTagName('CANT')[0].childNodes[0].nodeValue;
                    var promedio = xmlDoc.getElementsByTagName('PROMEDIO')[0].childNodes[0].nodeValue;

                    $('#msgListCom').hide();
                    $('#comentariosList').html(datos);
                    $('#proListComUlt').val(ULTIMO);
                    $('#hayMas').val(hayMas);
                    $('#numCom').html(numCom);
                    
                    $('#divPromedio').html(promedio).trigger('liszt:updated');

                    if(hayMas==0){
                        $('#masCom').hide();
                    }else{
                        $('#masCom').show();
                    }    
                    break;

            }
        }
    });  
      
      
    //CONTROLADOR DE EVENTOS BOTÓN CATÁLOGO
    $('#masCom').click(function(){

        var idPro= $('#idPro').val();           
        var ultimo= $('#proListComUlt').val();  
        var orden= $('#cmbOrden').val();   
        var parametros = { "idPro" : idPro, "ultimo" : ultimo, "orden" : orden };    
        
        $.ajax({
                data:  parametros,
                url: URLprotocol+"//"+URLdomain+"/bodyflex/catalogo/model/proDetCsuComModel.php",
                type:  'post',
                datetype: 'xml',
                async: true,
            beforeSend: function(){
                $("#esperaListaCom").show();
                $("#botones").hide();
            },
            success:  function(xml){

                //alert('proDetCsuComModel '+xml);

                $("#botones").show();
                $("#esperaListaCom").hide();
                var xmlDoc = $.parseXML(xml), $xml = $(xmlDoc);
                var codErr = xmlDoc.getElementsByTagName('CODERROR')[0].childNodes[0].nodeValue;
                var desErr = xmlDoc.getElementsByTagName('DESERROR')[0].childNodes[0].nodeValue;

                switch(codErr){
                    case "9":

                        var msg='<div class="alert alert-danger">';
                            msg+='<button class="close" aria-hidden="true" data-dismiss="alert" type="button">×</button>';
                            msg+='<strong>ATENCIÓN</strong>' + '[' + codErr + '] ' + desErr;
                        msg+='</div>';
                        $('#msgListCom').html(msg);
                        $('#msgListCom').show();
                        break;

                    case "8":

                        var msg='<div class="alert alert-danger">';
                            msg+='<button class="close" aria-hidden="true" data-dismiss="alert" type="button">×</button>';
                            msg+='<strong>ATENCIÓN</strong>' + '[' + codErr + '] ' + desErr;
                        msg+='</div>';
                        $('#msgListCom').html(msg);
                        $('#msgListCom').show();
                        break;

                    case "99":

                        var msg='<div class="alert alert-danger">';
                            msg+='<button class="close" aria-hidden="true" data-dismiss="alert" type="button">×</button>';
                            msg+='<strong>ATENCIÓN</strong>' + '[' + codErr + '] ' + desErr;
                        msg+='</div>';
                        $('#msgListCom').html(msg);
                        $('#msgListCom').show();
                        break;

                    case "100":

                        var msg='<div class="alert alert-danger">';
                            msg+='<button class="close" aria-hidden="true" data-dismiss="alert" type="button">×</button>';
                            msg+='<strong>ATENCIÓN</strong>' + '[' + codErr + '] ' + desErr;
                        msg+='</div>';
                        $('#msgListCom').html(msg);
                        $('#msgListCom').show();
                        break;    

                    default:

                        var datos = xmlDoc.getElementsByTagName('DATOS')[0].childNodes[0].nodeValue;
                        var ULTIMO = xmlDoc.getElementsByTagName('ULTIMO')[0].childNodes[0].nodeValue;
                        var hayMas = xmlDoc.getElementsByTagName('HAYMAS')[0].childNodes[0].nodeValue;
                        var numCom = xmlDoc.getElementsByTagName('CANT')[0].childNodes[0].nodeValue;
                        var promedio = xmlDoc.getElementsByTagName('PROMEDIO')[0].childNodes[0].nodeValue;

                        $('#comentariosList').html(datos);
                        $('#proListComUlt').val(ULTIMO);
                        $('#hayMas').val(hayMas);
                        $('#numCom').html(numCom);
                        $('#divPromedio').html(promedio).trigger('liszt:updated');

                        if(hayMas==0){
                            $('#masCom').hide();
                        }else{
                            $('#masCom').show();
                        }    
                        break;

                }
            }
        });    
        
    });
    
    
    $('#cmbOrden').change(function(){

        var idPro= $('#idPro').val();           
        var ultimo=0;  
        var orden= $('#cmbOrden').val();   
        var parametros = { "idPro" : idPro, "ultimo" : ultimo, "orden" : orden };    
        
        $.ajax({
                data:  parametros,
                url: URLprotocol+"//"+URLdomain+"/bodyflex/catalogo/model/proDetCsuComModel.php",
                type:  'post',
                datetype: 'xml',
                async: true,
            beforeSend: function(){
                $("#esperaListaCom").show();
                $("#botones").hide();
            },
            success:  function(xml){

                //alert('proDetCsuComModel '+xml);

                $("#botones").show();
                $("#esperaListaCom").hide();
                var xmlDoc = $.parseXML(xml), $xml = $(xmlDoc);
                var codErr = xmlDoc.getElementsByTagName('CODERROR')[0].childNodes[0].nodeValue;
                var desErr = xmlDoc.getElementsByTagName('DESERROR')[0].childNodes[0].nodeValue;

                switch(codErr){
                    case "9":

                        var msg='<div class="alert alert-danger">';
                            msg+='<button class="close" aria-hidden="true" data-dismiss="alert" type="button">×</button>';
                            msg+='<strong>ATENCIÓN</strong>' + '[' + codErr + '] ' + desErr;
                        msg+='</div>';
                        $('#msgListCom').html(msg);
                        $('#msgListCom').show();
                        break;

                    case "8":

                        var msg='<div class="alert alert-danger">';
                            msg+='<button class="close" aria-hidden="true" data-dismiss="alert" type="button">×</button>';
                            msg+='<strong>ATENCIÓN</strong>' + '[' + codErr + '] ' + desErr;
                        msg+='</div>';
                        $('#msgListCom').html(msg);
                        $('#msgListCom').show();
                        break;

                    case "99":

                        var msg='<div class="alert alert-danger">';
                            msg+='<button class="close" aria-hidden="true" data-dismiss="alert" type="button">×</button>';
                            msg+='<strong>ATENCIÓN</strong>' + '[' + codErr + '] ' + desErr;
                        msg+='</div>';
                        $('#msgListCom').html(msg);
                        $('#msgListCom').show();
                        break;

                    case "100":

                        var msg='<div class="alert alert-danger">';
                            msg+='<button class="close" aria-hidden="true" data-dismiss="alert" type="button">×</button>';
                            msg+='<strong>ATENCIÓN</strong>' + '[' + codErr + '] ' + desErr;
                        msg+='</div>';
                        $('#msgListCom').html(msg);
                        $('#msgListCom').show();
                        break;    

                    default:

                        var datos = xmlDoc.getElementsByTagName('DATOS')[0].childNodes[0].nodeValue;
                        var ULTIMO = xmlDoc.getElementsByTagName('ULTIMO')[0].childNodes[0].nodeValue;
                        var hayMas = xmlDoc.getElementsByTagName('HAYMAS')[0].childNodes[0].nodeValue;
                        var numCom = xmlDoc.getElementsByTagName('CANT')[0].childNodes[0].nodeValue;
                        var promedio = xmlDoc.getElementsByTagName('PROMEDIO')[0].childNodes[0].nodeValue;

                        $('#comentariosList').html(datos);
                        $('#proListComUlt').val(ULTIMO);
                        $('#hayMas').val(hayMas);
                        $('#numCom').html(numCom);
                        $('#divPromedio').html(promedio).trigger('liszt:updated');

                        if(hayMas==0){
                            $('#masCom').hide();
                        }else{
                            $('#masCom').show();
                        }    
                        break;

                }
            }
        });    
                
    });
    
    
});
 
function consultaComentarios(ultimo){
        
    //alert('consultaComentarios');    
        
    var URLdomain   = window.location.host;
    var URLprotocol = window.location.protocol;

    //CONTROLADOR DE EVENTOS BOTÓN CATÁLOGO
    var idPro= $('#idPro').val();           
    //var ultimo= $('#proListComUlt').val();  
    var orden= $('#cmbOrden').val();   
    var parametros = { "idPro" : idPro, "ultimo" : ultimo, "orden" : orden };    

    $.ajax({
            data:  parametros,
            url: URLprotocol+"//"+URLdomain+"/bodyflex/catalogo/model/proDetCsuComModel.php",
            type:  'post',
            datetype: 'xml',
            async: true,
        beforeSend: function(){
            $("#esperaListaCom").show();
        },
        success:  function(xml){

            //alert('proDetCsuComModel '+xml);

            $("#esperaListaCom").hide();
            var xmlDoc = $.parseXML(xml), $xml = $(xmlDoc);
            var codErr = xmlDoc.getElementsByTagName('CODERROR')[0].childNodes[0].nodeValue;
            var desErr = xmlDoc.getElementsByTagName('DESERROR')[0].childNodes[0].nodeValue;

            switch(codErr){
                case "9":

                    var msg='<div class="alert alert-danger">';
                        msg+='<button class="close" aria-hidden="true" data-dismiss="alert" type="button">×</button>';
                        msg+='<strong>ATENCIÓN</strong>' + '[' + codErr + '] ' + desErr;
                    msg+='</div>';
                    $('#msgListCom').html(msg);
                    $('#msgListCom').show();
                    break;

                case "8":

                    var msg='<div class="alert alert-danger">';
                        msg+='<button class="close" aria-hidden="true" data-dismiss="alert" type="button">×</button>';
                        msg+='<strong>ATENCIÓN</strong>' + '[' + codErr + '] ' + desErr;
                    msg+='</div>';
                    $('#msgListCom').html(msg);
                    $('#msgListCom').show();
                    break;

                case "99":

                    var msg='<div class="alert alert-danger">';
                        msg+='<button class="close" aria-hidden="true" data-dismiss="alert" type="button">×</button>';
                        msg+='<strong>ATENCIÓN</strong>' + '[' + codErr + '] ' + desErr;
                    msg+='</div>';
                    $('#msgListCom').html(msg);
                    $('#msgListCom').show();
                    break;

                case "100":

                    var msg='<div class="alert alert-danger">';
                        msg+='<button class="close" aria-hidden="true" data-dismiss="alert" type="button">×</button>';
                        msg+='<strong>ATENCIÓN</strong>' + '[' + codErr + '] ' + desErr;
                    msg+='</div>';
                    $('#msgListCom').html(msg);
                    $('#msgListCom').show();
                    break;    

                default:

                    var datos = xmlDoc.getElementsByTagName('DATOS')[0].childNodes[0].nodeValue;
                    var ULTIMO = xmlDoc.getElementsByTagName('ULTIMO')[0].childNodes[0].nodeValue;
                    var hayMas = xmlDoc.getElementsByTagName('HAYMAS')[0].childNodes[0].nodeValue;
                    var numCom = xmlDoc.getElementsByTagName('CANT')[0].childNodes[0].nodeValue;
                    var promedio = xmlDoc.getElementsByTagName('PROMEDIO')[0].childNodes[0].nodeValue;

                    $('#msgListCom').hide();
                    $('#comentariosList').html(datos);
                    $('#proListComUlt').val(ULTIMO);
                    $('#hayMas').val(hayMas);
                    $('#numCom').html(numCom);
                    $('#divPromedio').html(promedio).trigger('liszt:updated');

                    if(hayMas==0){
                        $('#masCom').hide();
                    }else{
                        $('#masCom').show();
                    }    
                    
                    break;

            }
        }
    });
    
}