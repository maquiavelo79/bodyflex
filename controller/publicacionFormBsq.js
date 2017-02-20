function consultaPublicacionesRsm(rut,sw,ultimo,pa,ori){        
var URLdomain   = window.location.host;
var URLprotocol = window.location.protocol;

        //AJAX
        var pubId=$('#puIdBsq').val();
        var nomCat=$('#search-categoria').val();
        var nomEti=$('#search-etiqueta').val();
        var nomRef=$('#search-referencia').val();
        
        var titBsq=$('#titBsq').val();
        var catBsq=$('#catBsq').val();
        var etiBsq=$('#etiBsq').val();
        var refBsq=$('#refBsq').val();
        var proBsq=$('#proBsq').val(); 
        
        //alert('rut, sw, ultimo, pubId, nomCat, nomEti, nomRef , titBsq , catBsq , etiBsq , refBsq , proBsq: ' + rut + ' ,' + sw + ' ,' + ultimo + ' ,' + pubId + ' ,' + nomCat + ' ,' + nomEti + ' ,' + nomRef + ' ,' + titBsq + ' ,' + catBsq + ' ,' + etiBsq + ' ,' + refBsq + ' ,' + proBsq);
        
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
                datetype: 'xml',
                async: true,
            beforeSend: function(){
                $("#esperaPag").show();
                $("#idPag").hide();
                if(ori==1){
                    $("#espera").show();
                    $("#buscar").hide();  
                }
            },
            success:  function (xml){
                
                //alert('consultaPublicacionesRsm: publicacionesRsmModel ' + xml);
                
                var xmlDoc = $.parseXML(xml), $xml = $(xmlDoc);
                var codErr = xmlDoc.getElementsByTagName('CODERROR')[0].childNodes[0].nodeValue;
                var desErr = xmlDoc.getElementsByTagName('DESERROR')[0].childNodes[0].nodeValue;
                
                switch(codErr){
                    case '9':

                        $("#esperaPag").hide();
                        $("#espera").hide();
                        
                        var msg='<div style="text-align:center;" class="alert alert-block">';
                        //msg+='<button type="button" class="close" data-dismiss="alert">×</button>';
                            msg+='<b><span style="color: #000;">' + '[' + codErr + '] ' + desErr + '</span></b>';
                        msg+='</div>';

                        $('#warningPublicacion').html(msg);
                        $('#warningPublicacion').show();

                        $("#buscar").show(); 
                        $('#articulos').html('');
                        $('#idPag').html('');
                        break;   

                    case '8':

                        $("#esperaPag").hide();
                        $("#espera").hide();

                        var msg='<div style="text-align:center;" class="alert alert-block">';
                        //msg+='<button type="button" class="close" data-dismiss="alert">×</button>';
                            msg+='<b><span style="color: #000;">' + '[' + codErr + '] ' + desErr + '</span></b>';
                        msg+='</div>';

                        $('#warningPublicacion').html(msg);
                        $('#warningPublicacion').show();
                        
                        $("#buscar").show();
                        $('#articulos').html('');
                        $('#idPag').html('');
                        break;

                    case '7':

                        $("#esperaPag").hide();
                        $("#espera").hide();

                        var msg='<div style="text-align:center;" class="alert alert-block">';
                        //msg+='<button type="button" class="close" data-dismiss="alert">×</button>';
                            msg+='<b><span style="color: #000;">' + '[' + codErr + '] ' + desErr + '</span></b>';
                        msg+='</div>';

                        $('#warningPublicacion').html(msg);
                        $('#warningPublicacion').show();
                        
                        $("#buscar").show();
                        $('#articulos').html('');
                        $('#idPag').html('');
                        break;
                    
                    case '99':

                        $("#esperaPag").hide();
                        $("#espera").hide();

                        var msg='<div style="text-align:center;" class="alert alert-block">';
                        //msg+='<button type="button" class="close" data-dismiss="alert">×</button>';
                            msg+='<b><span style="color: #000;">' + '[' + codErr + '] ' + desErr + '</span></b>';
                        msg+='</div>';

                        $('#warningPublicacion').html(msg);
                        $('#warningPublicacion').show();
                        
                        $("#buscar").show();
                        $('#articulos').html('');
                        $('#idPag').html('');
                        break;
                    
                    case '98':

                        $("#esperaPag").hide();
                        $("#espera").hide();

                        var msg='<div style="text-align:center;" class="alert alert-block">';
                        //msg+='<button type="button" class="close" data-dismiss="alert">×</button>';
                            msg+='<b><span style="color: #000;">' + '[' + codErr + '] ' + desErr + '</span></b>';
                        msg+='</div>';

                        $('#warningPublicacion').html(msg);
                        $('#warningPublicacion').show();
                        
                        $("#buscar").show();
                        $('#articulos').html('');
                        $('#idPag').html('');
                        break;
                    
                    default:

                        $("#esperaPag").hide();
                        $("#espera").hide();
                        
                        var articulos='';
                        var strPu='';
                        $xml.find('PUBLICACION').each(function () {
                            strPu=$(this).text().replace(/(^\s*)|(\s*$)/g,"");
                            if(strPu.length>0){
                                articulos+=strPu;
                            }
                        });
                        $('#articulos').html(articulos);    

                        var paginacion = xmlDoc.getElementsByTagName('PAGINACION')[0].childNodes[0].nodeValue;
                        $('#idPag').html(paginacion);
                        
                        $("#idPag").show();
                        $("#buscar").show(); 
                        
                        //alert('articulos ' + articulos);
                        //alert('paginacion ' + paginacion);
                                                
                        break;
                }
            }
        });

    };