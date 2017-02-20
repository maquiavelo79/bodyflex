
jQuery(document).ready(function() {

    var URLdomain   = window.location.host;
    var URLprotocol = window.location.protocol;
  
    //alert($('#idColeccion').val(), $('#idCat1').val(), $('#idCat2').val(), $('#idCat3').val());
    
    var parametros = { 
                        "idColeccion" : $('#idColeccion').val() 
                        ,   "idCat1" : $('#idCat1').val() 
                        ,   "idCat2" : $('#idCat2').val() 
                        ,   "idCat3" : $('#idCat3').val() 
                    };  
    $.ajax({
            data:  parametros,
            url: URLprotocol+"//"+URLdomain+"/bodyflex/catalogo/model/proSubCatModel.php",
            type:  'post',
            datetype: 'xml',
            async: true,
        beforeSend: function(){
            $("#espera_subCat").show();
        },
        success:  function(xml){

            //alert('proSubCatModel ' + xml);

            $("#espera_subCat").hide();
            var xmlDoc = $.parseXML(xml), $xml = $(xmlDoc);
            var codErr = xmlDoc.getElementsByTagName('CODERROR')[0].childNodes[0].nodeValue;
            var desErr = xmlDoc.getElementsByTagName('DESERROR')[0].childNodes[0].nodeValue;

            switch(codErr){
                case "9":

                    var msg='<div style="text-align:center;" class="alert alert-block">';
                    msg+='<b><span style="color: black;">' + '[' + codErr + '] ' + desErr + '</span></b>';
                    msg+='</div>';

                    $('#msgsubCat').html(msg);
                    $('#msgsubCat').show();

                    break;

                case "8":

                    var msg='<div style="text-align:center;" class="alert alert-block">';
                    msg+='<b><span style="color: black;">' + '[' + codErr + '] ' + desErr + '</span></b>';
                    msg+='</div>';

                    $('#msgsubCat').html(msg);
                    $('#msgsubCat').show();

                    break;

                case "99":

                    var msg='<div style="text-align:center;" class="alert alert-block">';
                    msg+='<b><span style="color: black;">' + '[' + codErr + '] ' + desErr + '</span></b>';
                    msg+='</div>';

                    $('#msgsubCat').html(msg);
                    $('#msgsubCat').show();

                    break;

                case "100":

                    var msg='<div style="text-align:center;" class="alert alert-block">';
                    msg+='<b><span style="color: black;">' + '[' + codErr + '] ' + desErr + '</span></b>';
                    msg+='</div>';

                    $('#msgsubCat').html(msg);
                    $('#msgsubCat').show();

                    break;    

                case "98":

                    var msg='<div style="text-align:center;" class="alert alert-block">';
                    msg+='<button type="button" class="close" data-dismiss="alert">×</button>';
                    msg+='<b><span style="color: black;">' + '[' + codErr + '] ' + desErr + '</span></b>';
                    msg+='</div>';

                    $('#msgsubCat').html(msg);
                    $('#msgsubCat').show();
                    break;

                default:

                    var datos = xmlDoc.getElementsByTagName('DATOS')[0].childNodes[0].nodeValue;
                    $('#htmlSubCat').html(datos);
                    $('#htmlSubCat').show();
                    $('#htmlSubCat').trigger('liszt:updated');
                    break;
                    
            }
        }
    });
       
    $(document).on("click", ".text-center", function(event){    
        
        var id=$(this).attr('id');
        var idCat1=$(this).attr('idCat1');
        var idCat2=$(this).attr('idCat2');
        var idCat3=$(this).attr('idCat3');
        var url='/bodyflex/catalogo/view/proColView.php';
        
        url=URLprotocol+"//"+URLdomain+url;

        //alert(url);

        if(id!=0){
            var form = $('<form action="' + url + '" method="post" target="_self">' +
                '<input type="hidden" id="id" name="id" value="' + id + '" />' +
                '<input type="hidden" id="id" name="idCat1" value="' + idCat1 + '" />' +
                '<input type="hidden" id="id" name="idCat2" value="' + idCat2 + '" />' +
                '<input type="hidden" id="id" name="idCat3" value="' + idCat3 + '" />' +
                '</form>');
            $('body').append(form);
            form.submit();
        }
        
    });
   

});
 
 

