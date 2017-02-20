jQuery(document).ready(function(){
      
    var URLdomain   = window.location.host;
    var URLprotocol = window.location.protocol;
   
    //AJAX 
    var rut=$('#rutPro').val();
    var sw=0;
    var pa=1;
    var ultimo=0;
    
    //alert('rut ' + rut);
    
    var pubId=$('#puIdBsq').val();
    var nomCat=$('#search-categoria').val();
    var nomEti=$('#search-etiqueta').val();
    var nomRef=$('#search-referencia').val();
    
    var titBsq=$('#titBsq').val();
    var catBsq=$('#catBsq').val();
    var etiBsq=$('#etiBsq').val();
    var refBsq=$('#refBsq').val();
    var proBsq=$('#proBsq').val(); 
    
    var parametros = { 
        "rut" : rut         ,
        "sw" : sw           ,
        "ultimo" : ultimo   ,
        "pa" : pa           ,
        "pubId" : pubId     ,
        "nomCat" : nomCat   ,
        "nomEti" : nomEti   ,
        "nomRef" : nomRef   ,
        "titBsq" : titBsq   ,
        "catBsq" : catBsq   ,
        "etiBsq" : etiBsq   ,
        "refBsq" : refBsq   ,
        "proBsq" : proBsq   
    };            

    $.ajax({
            data:  parametros,
            url: URLprotocol+"//"+URLdomain+"/bodyflex/model/publicacionesRsmModel.php",
            type:  'post',
            async: false,  
            datetype: 'xml',
            beforeSend: function(){
                $("#esperaPag").show();
                $("#idPag").hide();
            },
            success:  function (xml){
                    
                    //alert('publicacionesRsmModel ' + xml);
                    
                    var xmlDoc = $.parseXML(xml), $xml = $(xmlDoc);
                    var codErr = xmlDoc.getElementsByTagName('CODERROR')[0].childNodes[0].nodeValue;
                    var desErr = xmlDoc.getElementsByTagName('DESERROR')[0].childNodes[0].nodeValue;
                 
                    switch(codErr){
                    case '9':

                        $("#esperaPag").hide();
                        
                        var msg='<div style="text-align:center;" class="alert alert-block">';
                        msg+='<b><span style="color: black;">' + '[' + codErr + '] ' + desErr + '</span></b>';
                        msg+='</div>';
                                
                       $('#warningPublicacion').html(msg);
                       $('#warningPublicacion').show();
                       break;   
                    
                    case '8':

                        $("#esperaPag").hide();
                        
                        var msg='<div style="text-align:center;" class="alert alert-block">';
                        msg+='<b><span style="color: black;">' + '[' + codErr + '] ' + desErr + '</span></b>';
                        msg+='</div>';
                                
                       $('#warningPublicacion').html(msg);
                       $('#warningPublicacion').show();
                       break;   
                    
                    case '7':

                        $("#esperaPag").hide();
                        
                        var msg='<div style="text-align:center;" class="alert alert-block">';
                        msg+='<b><span style="color: black;">' + '[' + codErr + '] ' + desErr + '</span></b>';
                        msg+='</div>';
                                
                       $('#warningPublicacion').html(msg);
                       $('#warningPublicacion').show();
                       break;   
                    
                    case '99':

                        $("#esperaPag").hide();
                        
                        var msg='<div style="text-align:center;" class="alert alert-block">';
                        msg+='<b><span style="color: black;">' + '[' + codErr + '] ' + desErr + '</span></b>';
                        msg+='</div>';
                                
                       $('#warningPublicacion').html(msg);
                       $('#warningPublicacion').show();
                       break;   
                       
                    case '100':

                        $("#esperaPag").hide();
                        
                        var msg='<div style="text-align:center;" class="alert alert-block">';
                        msg+='<b><span style="color: black;">' + '[' + codErr + '] ' + desErr + '</span></b>';
                        msg+='</div>';
                                
                       $('#warningPublicacion').html(msg);
                       $('#warningPublicacion').show();
                       break;      
                    
                    case '98':

                        $("#esperaPag").hide();
                        $('#articulos').html('');
                        $('#idPag').html('');
                        
                        var msg='<div style="text-align:center;" class="alert alert-block">';
                        msg+='<b><span style="color: black;">' + '[' + codErr + '] ' + desErr + '</span></b>';
                        msg+='</div>';
                        
                        $('#warningPublicacion').html(msg);
                        $('#warningPublicacion').show();
                        
                        break;

                    default:

                        var strPub='';
                        var publicaciones='';
                        var paginacion = xmlDoc.getElementsByTagName('PAGINACION')[0].childNodes[0].nodeValue;
                        
                        $xml.find('PUBLICACION').each(function () {
                            strPub=$(this).text().replace(/(^\s*)|(\s*$)/g,"");
                            if(strPub.length>0){
                                publicaciones+=strPub;
                            }
                        });
                        
                        //alert('publicaciones ' + publicaciones);
                        //alert('paginacion ' + paginacion);
                        
                        $("#esperaPag").hide();
                        $("#idPag").show();
                        
                        $('#articulos').html(publicaciones);
                        $('#articulos').trigger('liszt:updated');
                        
                        $('#idPag').html(paginacion);
                        $('#idPag').trigger('liszt:updated');
                        break;
                     
                    }
            }
    });
       
    //var arrText= new Array();
    $('.puIdToEti').each(function(index){
        var parametros = {"id" : $(this).val()};            
        $.ajax({
            data:  parametros,
            url: URLprotocol+"//"+URLdomain+"/bodyflex/model/publicacionesRsmModelEtiquetas.php",
            type:  'post',
            async: false,  
            datetype: 'xml',
            success:  function (xml){
                
                //alert('publicacionesRsmModelEtiquetas ' + xml);
                
                var xmlDoc = $.parseXML(xml), $xml = $(xmlDoc);
                var codErr = xmlDoc.getElementsByTagName('CODERROR')[0].childNodes[0].nodeValue;
                                
                switch(codErr){
                    case '0':
                        var response = xmlDoc.getElementsByTagName('DATOS')[0].childNodes[0].nodeValue;
                        var nomId='#etiListView'+(index+1);
                        var datId='<div>'+ response +'</div>';
                        $(nomId).html(datId);
                        break;   
                    default:
                        var desErr = xmlDoc.getElementsByTagName('DESERROR')[0].childNodes[0].nodeValue;
                        var msg='<div style="text-align:center;" class="alert alert-block">';
                        msg+='<b><span style="color: #000;">' + '[' + codErr + '] ' + desErr + '</span></b>';
                        msg+='</div>';
                        $('#conWarning').html(msg);
                        $('#conWarning').show();
                        break;
                }
            }
        });
    });
    
});
    
function verPublicacion(id, rut){
var URLdomain   = window.location.host;
var URLprotocol = window.location.protocol;

    var proRut=$('#rut').val();
    var puPru = 0;
    var url = URLprotocol+"//"+URLdomain+"/bodyflex/view/publicacionProView.php";
    var form = $('<form action="' + url + '" method="post" target="_self">' +
      '<input type="hidden" name="puId" value="' + id + '" />' +
      '<input type="hidden" name="puPru" value="' + puPru + '" />' +
      '<input type="hidden" name="proRut" value="' + proRut + '" />' +
      '</form>');
    $('body').append(form);
    form.submit();

};