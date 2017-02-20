
jQuery(document).ready(function() {

    var URLdomain   = window.location.host;
    var URLprotocol = window.location.protocol;
  
    //OBTIENE MENU IZQUIERDO EN BASE A SELECCIÓN
    var parametros = 
            { 
                "idColeccion" : $('#idColeccion').val() 
                ,    "idCat2" : $('#idCat2').val() 
                ,    "idCat3" : $('#idCat3').val() 
            };  
            
    $.ajax({
            data:  parametros,
            url: URLprotocol+"//"+URLdomain+"/bodyflex/catalogo/model/proColNavModel.php",
            type:  'post',
            datetype: 'xml',
            async: true,
        beforeSend: function(){
            $("#espera_navegacion").show();
        },
        success:  function(xml){

            //alert('proColNavModel ' + xml);

            $("#espera_navegacion").hide();
            var xmlDoc = $.parseXML(xml), $xml = $(xmlDoc);
            var codErr = xmlDoc.getElementsByTagName('CODERROR')[0].childNodes[0].nodeValue;
            var desErr = xmlDoc.getElementsByTagName('DESERROR')[0].childNodes[0].nodeValue;

            switch(codErr){
                case "9":

                    var msg='<div style="text-align:center;" class="alert alert-block">';
                    msg+='<b><span style="color: black;">' + '[' + codErr + '] ' + desErr + '</span></b>';
                    msg+='</div>';

                    $('#msgNavegacion').html(msg);
                    $('#msgNavegacion').show();

                    break;

                case "8":

                    var msg='<div style="text-align:center;" class="alert alert-block">';
                    msg+='<b><span style="color: black;">' + '[' + codErr + '] ' + desErr + '</span></b>';
                    msg+='</div>';

                    $('#msgNavegacion').html(msg);
                    $('#msgNavegacion').show();

                    break;

                case "99":

                    var msg='<div style="text-align:center;" class="alert alert-block">';
                    msg+='<b><span style="color: black;">' + '[' + codErr + '] ' + desErr + '</span></b>';
                    msg+='</div>';

                    $('#msgNavegacion').html(msg);
                    $('#msgNavegacion').show();

                    break;

                case "100":

                    var msg='<div style="text-align:center;" class="alert alert-block">';
                    msg+='<b><span style="color: black;">' + '[' + codErr + '] ' + desErr + '</span></b>';
                    msg+='</div>';

                    $('#msgNavegacion').html(msg);
                    $('#msgNavegacion').show();

                    break;    

                case "98":

                    var msg='<div style="text-align:center;" class="alert alert-block">';
                    msg+='<button type="button" class="close" data-dismiss="alert">×</button>';
                    msg+='<b><span style="color: black;">' + '[' + codErr + '] ' + desErr + '</span></b>';
                    msg+='</div>';

                    $('#msgNavegacion').html(msg);
                    $('#msgNavegacion').show();
                    break;

                default:

                    var COLECCION = xmlDoc.getElementsByTagName('COLECCION')[0].childNodes[0].nodeValue;
                    var CATEGORIA2 = xmlDoc.getElementsByTagName('CATEGORIA2')[0].childNodes[0].nodeValue;
                    var CATEGORIA3 = xmlDoc.getElementsByTagName('CATEGORIA3')[0].childNodes[0].nodeValue;
                                       
                    var strNav='<li><a class="home">Home</a></li><li class="active">'+COLECCION+'</li>';
                    if(CATEGORIA2!='SC2'){
                        strNav+='<li class="active">'+CATEGORIA2+'</li>';
                    }
                    if(CATEGORIA3!='SC3'){
                        strNav+='<li class="active">'+CATEGORIA3+'</li>';
                    }
                    
                    //alert(strNav);
                    
                    $('#ruta').html(strNav);
                    $('#ruta').show();
                    $('#ruta').trigger('liszt:updated');
                    break;
                    
            }
        }
    });
    

});
 
 

