
jQuery(document).ready(function() {

    var URLdomain   = window.location.host;
    var URLprotocol = window.location.protocol;
  
    $.ajax({
            url: URLprotocol+"//"+URLdomain+"/bodyflex/admin/model/productoRangoPrecioModel.php",
            type:  'post',
            datetype: 'xml',
            async: true,
        beforeSend: function(){
            $("#espera").show();
            $("#botonera").hide();
        },
        success:  function (xml){

            //alert('productoRangoPrecioModel ' + xml);                

            $("#espera").hide();
            var xmlDoc = $.parseXML(xml), $xml = $(xmlDoc);
            var codErr = xmlDoc.getElementsByTagName('CODERROR')[0].childNodes[0].nodeValue;
            var desErr = xmlDoc.getElementsByTagName('DESERROR')[0].childNodes[0].nodeValue;

            switch(codErr){
                case '9':

                    $("#botonera").show();

                    var msg='<div style="text-align:center;" class="alert alert-block">';
                    msg+='<b><span style="color: black;">' + '[' + codErr + '] ' + desErr + '</span></b>';
                    msg+='</div>';

                    $('#conWarning').html(msg);
                    $('#conWarning').show();

                    desHabilitar();
                    break; 

                case '8':

                    $("#botonera").show();

                    var msg='<div style="text-align:center;" class="alert alert-block">';
                    msg+='<b><span style="color: black;">' + '[' + codErr + '] ' + desErr + '</span></b>';
                    msg+='</div>';

                    $('#conWarning').html(msg);
                    $('#conWarning').show();

                    desHabilitar();
                    break; 

                case '99':

                    var msg='<div style="text-align:center;" class="alert alert-block">';
                    msg+='<b><span style="color: black;">' + '[' + codErr + '] ' + desErr + '</span></b>';
                    msg+='</div>';

                    $('#conWarning').html(msg);
                    $('#conWarning').show();

                    $("#botonera").show();
                    $('#tbody').html('');

                    desHabilitar();

                    break; 

                case '100':

                    var msg='<div style="text-align:center;" class="alert alert-block">';
                    msg+='<b><span style="color: black;">' + '[' + codErr + '] ' + desErr + '</span></b>';
                    msg+='</div>';

                    $('#conWarning').html(msg);
                    $('#conWarning').show();

                    $("#botonera").show();
                    $('#tbody').html('');

                    desHabilitar();

                    break; 


                case '98':

                    var msg='<div style="text-align:center;" class="alert alert-block">';
                    msg+='<button type="button" class="close" data-dismiss="alert">×</button>';
                    msg+='<b><span style="color: black;">SIN PRODUCTOS INGRESADOS</span></b>';
                    msg+='</div>';

                    $('#conWarning').html(msg);
                    $('#conWarning').show();

                    $("#botonera").show();
                    $('#tbody').html('');
                    break;

                default:

                    var strVal='';
                    $('#cmbRanPrePro').empty();
                    $('#cmbRanPrePro').append($('<option>', {value:'(SELECCIONE)', text:'(SELECCIONE)'}));
                    $xml.find('REGISTRO').each(function () {
                        strVal=$(this).text().replace(/(^\s*)|(\s*$)/g,"");    
                        var res = strVal.split("="); 
                        var ran = res[1].split("|"); 
                        var rango = ran[0] + ' - ' + ran[1];
                        if(strVal.length>0){
                            $('#cmbRanPrePro').append($('<option>', {value:res[0], text:rango}));
                        }
                    });
                    $('#cmbRanPrePro').trigger('liszt:updated');
                    
                    var strVal2='';
                    $('#cmbRanPreCli').empty();
                    $('#cmbRanPreCli').append($('<option>', {value:'(SELECCIONE)', text:'(SELECCIONE)'}));
                    $xml.find('REGISTRO').each(function () {
                        strVal2=$(this).text().replace(/(^\s*)|(\s*$)/g,"");    
                        var res = strVal2.split("="); 
                        var ran = res[1].split("|"); 
                        var rango = ran[0] + ' - ' + ran[1];
                        if(strVal2.length>0){
                            $('#cmbRanPreCli').append($('<option>', {value:res[0], text:rango}));
                        }
                    });
                    $('#cmbRanPreCli').trigger('liszt:updated');
                    break;

            }
        }
    });
    
});

