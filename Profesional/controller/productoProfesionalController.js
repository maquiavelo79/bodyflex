
$(document).ready(function(){
    var URLdomain   = window.location.host;
    var URLprotocol = window.location.protocol;    
        
        //CONTABILIZAMOS VISITA AL SERVICIO
        var rutPro = $('#rutPro').val();
        var id = $('#id').val();
        var email = $('#email').val();
        var se = $('#session_id').val();
    
        var parametros = { 
                            "rutPro" : rutPro 
                            ,   "id" : id 
                            ,   "email" : email 
                            ,   "se" : se 
                       };   
                       
        $.ajax({
            data:  parametros,
            url: URLprotocol+"//"+URLdomain+"/bodyflex/profesional/model/productoProCuentaVisitaModel.php",
            type:  'post',
            async:  true,
            datetype: 'xml',
            success:  function (xml){

                //alert('productoProCuentaVisitaModel ' + xml);

                var xmlDoc = $.parseXML(xml), $xml = $(xmlDoc);
                var codErr = xmlDoc.getElementsByTagName('CODERROR')[0].childNodes[0].nodeValue;
                var desErr = xmlDoc.getElementsByTagName('DESERROR')[0].childNodes[0].nodeValue;

                switch(codErr){
                    case '9':

                        var msg='<div style="text-align:center;" class="alert alert-block">';
                        msg+='<b><span style="color: #000;">' + '[' + codErr + '] ' + desErr + '</span></b>';
                        msg+='</div>';

                        $('#warning-Producto').html(msg);    
                        $('#warning-Producto').show();
                        break;   

                    case '8':

                        var msg='<div style="text-align:center;" class="alert alert-block">';
                        msg+='<b><span style="color: #000;">' + '[' + codErr + '] ' + desErr + '</span></b>';
                        msg+='</div>';

                        $('#warning-Producto').html(msg);
                        $('#warning-Producto').show();
                        break;

                    case '99':

                        var msg='<div style="text-align:center;" class="alert alert-block">';
                        msg+='<b><span style="color: #000;">' + '[' + codErr + '] ' + desErr + '</span></b>';
                        msg+='</div>';

                        $('#warning-Producto').html(msg);
                        $('#warning-Producto').show();
                        break;
                        
                    case '100':

                        var msg='<div style="text-align:center;" class="alert alert-block">';
                        msg+='<b><span style="color: #000;">' + '[' + codErr + '] ' + desErr + '</span></b>';
                        msg+='</div>';

                        $('#warning-Producto').html(msg);
                        $('#warning-Producto').show();
                        break;    

                    case '98':
                        //NO HACER NADA
                        break;
                    default:
                        //NO HACER NADA                
                        break;
                }
            }
        });
    
    
});
     
