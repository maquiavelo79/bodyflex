
jQuery(document).ready(function() {

    var URLdomain   = window.location.host;
    var URLprotocol = window.location.protocol;
       
    $('#btnBsq').click(function(){

        //OBTENEMOS VALORES
        $('#dirWarning1').html('');
        
        if($('#idBsq').val()==''){
            var msg='<div style="text-align:center;" class="alert alert-error">';
            msg+='<button type="button" class="close" data-dismiss="alert">×</button>';
            msg+='<b><span style="color: #000;">Favor ingrese cadena de búsqueda</span></b>';
            msg+='</div>'; 
            $('#dirWarning1').html(msg);
            $('#dirWarning1').show();
            return false;
        }else{
            $('#dirWarning1').html('');
        } 

        var parametros = { 
            "id" : $('#idBsq').val()
        };

        $.ajax({
                data:  parametros,
                url: URLprotocol+"//"+URLdomain+"/bodyflex/admin/model/posBsqCsuModel.php",
                type:  'post',
                datetype: 'xml',
            beforeSend: function(){
                $("#espera").show();
                $("#botonera").hide();
            },
            success:  function (xml){

                //alert('regProBsqCsuModel ' + xml);                

                $("#espera").hide();
                var xmlDoc = $.parseXML(xml), $xml = $(xmlDoc);
                var codErr = xmlDoc.getElementsByTagName('CODERROR')[0].childNodes[0].nodeValue;
                var desErr = xmlDoc.getElementsByTagName('DESERROR')[0].childNodes[0].nodeValue;

                switch(codErr){
                    case '9':

                        var msg='<div style="text-align:center;" class="alert alert-block">';
                        msg+='<button type="button" class="close" data-dismiss="alert">×</button>';
                        msg+='<b><span style="color: black;">' + '[' + codErr + '] ' + desErr + '</span></b>';
                        msg+='</div>';

                        $('#dirWarning1').html(msg);
                        $('#dirWarning1').show();
                        break; 

                    case '8':

                        var msg='<div style="text-align:center;" class="alert alert-block">';
                        msg+='<button type="button" class="close" data-dismiss="alert">×</button>';
                        msg+='<b><span style="color: black;">' + '[' + codErr + '] ' + desErr + '</span></b>';
                        msg+='</div>';

                        $('#dirWarning1').html(msg);
                        $('#dirWarning1').show();
                        break; 

                    case '98':

                        var msg='<div style="text-align:center;" class="alert alert-block">';
                        msg+='<button type="button" class="close" data-dismiss="alert">×</button>';
                        msg+='<b><span style="color: black;">' + '[' + codErr + '] ' + desErr + '</span></b>';
                        msg+='</div>';

                        $('#dirWarning1').html(msg);
                        $('#dirWarning1').show();
                        break;  
                        
                    case '99':

                        var msg='<div style="text-align:center;" class="alert alert-block">';
                        msg+='<button type="button" class="close" data-dismiss="alert">×</button>';
                        msg+='<b><span style="color: black;">' + '[' + codErr + '] ' + desErr + '</span></b>';
                        msg+='</div>';
                        
                        $('#dirWarning1').html(msg);
                        $('#dirWarning1').show();
                        break; 

                    case '100':

                        var msg='<div style="text-align:center;" class="alert alert-block">';
                        msg+='<button type="button" class="close" data-dismiss="alert">×</button>';
                        msg+='<b><span style="color: black;">' + '[' + codErr + '] ' + desErr + '</span></b>';
                        msg+='</div>';

                        $('#dirWarning1').html(msg);
                        $('#dirWarning1').show();
                        break;     

                    default:

                        var datos = xmlDoc.getElementsByTagName('DATOS')[0].childNodes[0].nodeValue;
                        $('#registros').show();
                        $('#tbody').html(datos);                                                
                        break;
                }
            }
        });

    });  
        
    $('#btnDel').click(function(){
    
        $('#idBsq').val('');
        $('#dirWarning1').html('');
        $('#registros').hide();
        $('#tblRegistros tr').each(function(){
            $(this).removeClass('highlight');   
        });
                
    });
    
    $('#tblRegistros').on('click', 'tbody tr', function(event){
        $(this).addClass('highlight').siblings().removeClass('highlight');
    });
                   
});

