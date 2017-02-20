
$(document).ready(function () {
    var URLdomain   = window.location.host;
    var URLprotocol = window.location.protocol;    
            
    //OBTENEMOS PUBLICACION
    var puId = $('#puId').val();
    var puPru = $('#puPru').val();

    var parametros = { "puId" : puId ,   
                       "puPru" : puPru };            
        
    //OBTENEMOS PUBLICACION
    $.ajax({
            
            data:  parametros,
            url: URLprotocol+"//"+URLdomain+"/bodyflex/model/publicacionProModel.php",
            type:  'post',
            datetype: 'xml',
            async: true,
            success:  function (xml){
            
            //alert('publicacionProModel ' + xml);
            
            var xmlDoc = $.parseXML(xml), $xml = $(xmlDoc);
            var codErr = xmlDoc.getElementsByTagName('CODERROR')[0].childNodes[0].nodeValue;
            var desErr = xmlDoc.getElementsByTagName('DESERROR')[0].childNodes[0].nodeValue;
            
            switch(codErr){
                case '9':
                    
                    var msg='<div style="text-align:center;" class="alert alert-block">';
                    msg+='<b><span style="color: #000;">' + '[' + codErr + '] ' + desErr + '</span></b>';
                    msg+='</div>';
                    
                    $('#warning-articulo').html(msg);    
                    $('#warning-articulo').show();
                    break;
                
                case '8':
                    
                    var msg='<div style="text-align:center;" class="alert alert-block">';
                    msg+='<b><span style="color: #000;">' + '[' + codErr + '] ' + desErr + '</span></b>';
                    msg+='</div>';
                    
                    $('#warning-articulo').html(msg);
                    $('#warning-articulo').show();
                    break;
                    
                case '99':
                    
                    var msg='<div style="text-align:center;" class="alert alert-block">';
                    msg+='<b><span style="color: #000;">' + '[' + codErr + '] ' + desErr + '</span></b>';
                    msg+='</div>';
                    
                    $('#warning-articulo').html(msg);
                    $('#warning-articulo').show();
                    break;    
                
                case '100':
                    
                    var msg='<div style="text-align:center;" class="alert alert-block">';
                    msg+='<b><span style="color: #000;">' + '[' + codErr + '] ' + desErr + '</span></b>';
                    msg+='</div>';
                    
                    $('#warning-articulo').html(msg);
                    $('#warning-articulo').show();
                    break;        
                    
                default:
                    
                   var puNom = xmlDoc.getElementsByTagName('PUNOM')[0].childNodes[0].nodeValue;
                   var puTip2 = xmlDoc.getElementsByTagName('PUTIP2')[0].childNodes[0].nodeValue;
                   var puEst = xmlDoc.getElementsByTagName('PUEST')[0].childNodes[0].nodeValue;
                   var puTiT = xmlDoc.getElementsByTagName('PUTIT')[0].childNodes[0].nodeValue;
                   var puPub = xmlDoc.getElementsByTagName('PUPUB')[0].childNodes[0].nodeValue;
                   var puImg = xmlDoc.getElementsByTagName('PUIMG')[0].childNodes[0].nodeValue;
                   var puMes = xmlDoc.getElementsByTagName('PUMES')[0].childNodes[0].nodeValue;
                   var puDia = xmlDoc.getElementsByTagName('PUDIA')[0].childNodes[0].nodeValue;
                   var puFec = xmlDoc.getElementsByTagName('PUFEC')[0].childNodes[0].nodeValue;
                   var puDrive = xmlDoc.getElementsByTagName('PUDRIVE')[0].childNodes[0].nodeValue; 
                   var puRutPro = xmlDoc.getElementsByTagName('PURUTPRO')[0].childNodes[0].nodeValue;  
                   var puIdFoto = xmlDoc.getElementsByTagName('PUIDFOTO')[0].childNodes[0].nodeValue;  
                    
                    $('#t1').html('<h2>' + puTiT + '</h2>');
                    $('#t2').html('<a style="cursor:pointer;">' + '[' + $('#puId').val() + '] ' + puTiT + '</a>');
                    
                    //Figura1:::::::::                   
                        var figura1='<time datetime=' + "'" + puFec + "'" +'>' + puDia + '<span>' + puMes + '</span></time>';
                        $('#idFigura1').html(figura1);
                        
                    //Figura2:::::::::                                           
                        var figura2 = '<a title=' + "'" + puTiT + "'" + 'class="fb">';
                        figura2 += "<img src='" + puImg + "' " +  " width='800' height='350'" + ' alt=' + "'" + puTiT + "'" + " />";
                        figura2 += '</a><time datetime=' + "'" + puFec + "'" + ' class="hidden-lg">' + puDia + ' <span>' + puMes + '</span></time>';
                        $('#idFigura2').html(figura2);
                    
                    //Publicación:::::::::                   
                        var publicacion=puPub;
                        $('#publicacion').html(publicacion);
                    
                    //PROFESIONAL:::::::::
                        var prof='';
                        //SI ES USUARIO REGISTRADO DEBE DIRECCIONAR AL SITIO DEL PROFESIONAL
                        prof+='<a onclick="sitioProfesional(' + puRutPro + ');" style="cursor:pointer;">';
                            prof+="<img src='"+puIdFoto+"' width='700' height='504' alt='"+puNom+"' />";
                            prof+='<div class="item-desc">';
                                prof+='<h4>' + puNom + '</h4>';
                                prof+='<b>' + puTip2 + '</b>';
                            prof+='</div>';
                        prof+='</a>';

                        $('#divProf').html(prof);

                    break;
            }
        }
    });
    
    //OBTENEMOS COMENTARIOS, SOLO SI ES DISTINTO DE PRUEBA
    if(puPru==0){
        $.ajax({
            data:  parametros,
            url: URLprotocol+"//"+URLdomain+"/bodyflex/model/publicacionCsuComentariosModel.php",
            type:  'post',
            datetype: 'xml',
            async: true,
            success:  function (xml){

                //alert('publicacionCsuComentariosModel ' + xml);

                var xmlDoc = $.parseXML(xml), $xml = $(xmlDoc);
                var codErr = xmlDoc.getElementsByTagName('CODERROR')[0].childNodes[0].nodeValue;
                var desErr = xmlDoc.getElementsByTagName('DESERROR')[0].childNodes[0].nodeValue;

                switch(codErr){
                    case '9':

                        var msg='<div style="text-align:center;" class="alert alert-block">';
                        msg+='<b><span style="color: #000;">' + '[' + codErr + '] ' + desErr + '</span></b>';
                        msg+='</div>';

                        $('#warning-articulo').html(msg);    
                        $('#warning-articulo').show();
                        break;   

                    case '8':

                        var msg='<div style="text-align:center;" class="alert alert-block">';
                        msg+='<b><span style="color: #000;">' + '[' + codErr + '] ' + desErr + '</span></b>';
                        msg+='</div>';

                        $('#warning-articulo').html(msg);    
                        $('#warning-articulo').show();
                        break;   

                    case '99':

                        var msg='<div style="text-align:center;" class="alert alert-block">';
                        msg+='<b><span style="color: #000;">' + '[' + codErr + '] ' + desErr + '</span></b>';
                        msg+='</div>';

                        $('#warning-articulo').html(msg);    
                        $('#warning-articulo').show();
                        break;   

                    case '100':

                        var msg='<div style="text-align:center;" class="alert alert-block">';
                        msg+='<b><span style="color: #000;">' + '[' + codErr + '] ' + desErr + '</span></b>';
                        msg+='</div>';

                        $('#warning-articulo').html(msg);    
                        $('#warning-articulo').show();
                        break;      

//                    case '98':
//
//                        var msg='<div style="text-align:center;" class="alert alert-block">';
//                        msg+='<b><span style="color: #000;">' + '[' + codErr + '] ' + desErr + '</span></b>';
//                        msg+='</div>';
//
//                        $('#warning-articulo').html('');    
//                        $('#warning-articulo').show();
//                        break;   

                    default:

                        var datos = xmlDoc.getElementsByTagName('DATOS')[0].childNodes[0].nodeValue;
                        $('#comment-list').html(datos);    
                        break;

                }
            }
        });
    }
    
    //OBTENEMOS REFERENCIAS
    $.ajax({
        data:  parametros,
        url: URLprotocol+"//"+URLdomain+"/bodyflex/model/publicacionProReferenciasModel.php",
        type:  'post',
        async:  true,
        datetype: 'xml',
        success:  function (xml){

            //alert('publicacionProReferenciasModel ' + xml);

            var xmlDoc = $.parseXML(xml), $xml = $(xmlDoc);
            var codErr = xmlDoc.getElementsByTagName('CODERROR')[0].childNodes[0].nodeValue;
            var desErr = xmlDoc.getElementsByTagName('DESERROR')[0].childNodes[0].nodeValue;

            switch(codErr){
                case '9':

                    var msg='<div style="text-align:center; color: black:" class="alert alert-block">';
                    msg+='<b><span style="color: black;">' + '[' + codErr + '] ' + desErr + '</span></b>';
                    msg+='</div>';

                    $('#warning-articulo').html(msg);    
                    $('#warning-articulo').show();
                    break;   

                case '8':

                    var msg='<div style="text-align:center; color: black:" class="alert alert-block">';
                    msg+='<b><span style="color: black;">' + '[' + codErr + '] ' + desErr + '</span></b>';
                    msg+='</div>';

                    $('#warning-articulo').html(msg);    
                    $('#warning-articulo').show();
                    break;   

                case '99':

                    var msg='<div style="text-align:center; color: black:" class="alert alert-block">';
                    msg+='<b><span style="color: black;">' + '[' + codErr + '] ' + desErr + '</span></b>';
                    msg+='</div>';

                    $('#warning-articulo').html(msg);    
                    $('#warning-articulo').show();
                    break;   
                 
                case '100':

                    var msg='<div style="text-align:center; color: black:" class="alert alert-block">';
                    msg+='<b><span style="color: black;">' + '[' + codErr + '] ' + desErr + '</span></b>';
                    msg+='</div>';

                    $('#warning-articulo').html(msg);    
                    $('#warning-articulo').show();
                    break;   
                
                default:

                    var datos = xmlDoc.getElementsByTagName('DATOS')[0].childNodes[0].nodeValue;
                    $('#contenedor').html(datos);   
                    break;
                    
            }
        }
    });
    
    //OBTENEMOS ETIQUETAS
    $.ajax({
        data:  parametros,
        url: URLprotocol+"//"+URLdomain+"/bodyflex/model/publicacionProEtiquetaModel.php",
        type:  'post',
        async:  false,
        datetype: 'xml',
        success:  function (xml){

            //alert('publicacionProEtiquetaModel ' + xml);

            var xmlDoc = $.parseXML(xml), $xml = $(xmlDoc);
            var codErr = xmlDoc.getElementsByTagName('CODERROR')[0].childNodes[0].nodeValue;
            var desErr = xmlDoc.getElementsByTagName('DESERROR')[0].childNodes[0].nodeValue;

            switch(codErr){
                case '9':

                    var msg='<div style="text-align:center;" class="alert alert-block">';
                    msg+='<b><span style="color: #000;">' + '[' + codErr + '] ' + desErr + '</span></b>';
                    msg+='</div>';

                    $('#warning-articulo').html(msg);    
                    $('#warning-articulo').show();
                    break;   

                case '8':

                    var msg='<div style="text-align:center;" class="alert alert-block">';
                    msg+='<b><span style="color: #000;">' + '[' + codErr + '] ' + desErr + '</span></b>';
                    msg+='</div>';

                    $('#warning-articulo').html(msg);
                    $('#warning-articulo').show();
                    break;

                case '99':

                    var msg='<div style="text-align:center;" class="alert alert-block">';
                    msg+='<b><span style="color: #000;">' + '[' + codErr + '] ' + desErr + '</span></b>';
                    msg+='</div>';

                    $('#warning-articulo').html(msg);
                    $('#warning-articulo').show();
                    break;

                case '100':

                    var msg='<div style="text-align:center;" class="alert alert-block">';
                    msg+='<b><span style="color: #000;">' + '[' + codErr + '] ' + desErr + '</span></b>';
                    msg+='</div>';

                    $('#warning-articulo').html(msg);
                    $('#warning-articulo').show();
                    break;    

                default:

                    var etiquetas='Etiquetas: ';
                    var strVal="";
                    var cantidad = xmlDoc.getElementsByTagName('CANTIDAD')[0].childNodes[0].nodeValue;
                    
                    if(cantidad>1){
                        $xml.find('REGISTRO').each(function(){
                            strVal=$(this).text().replace(/(^\s*)|(\s*$)/g,"");
                            if(strVal.length>0){
                                etiquetas+= '<a style="cursor:pointer;">' + strVal + '</a>';
                            }
                        });
                        $('#idEtiqueta').html(etiquetas);   
                    }else{
                        var dato = xmlDoc.getElementsByTagName('REGISTRO')[0].childNodes[0].nodeValue;
                        etiquetas+= '<a style="cursor:pointer;">' + dato + '</a> ';
                        $('#idEtiqueta').html(etiquetas);   
                    }
                    break;
                
            }
        }
    });
    
    //OBTENEMOS CONTENIDO
    $.ajax({
        data:  parametros,
        url: URLprotocol+"//"+URLdomain+"/bodyflex/model/publicacionProContenidoModel.php",
        type:  'post',
        async:  false,
        datetype: 'xml',
        success:  function (xml){

            //alert('publicacionProContenidoModel ' + xml);

            var xmlDoc = $.parseXML(xml), $xml = $(xmlDoc);
            var codErr = xmlDoc.getElementsByTagName('CODERROR')[0].childNodes[0].nodeValue;
            var desErr = xmlDoc.getElementsByTagName('DESERROR')[0].childNodes[0].nodeValue;

            switch(codErr){
                case '9':

                    var msg='<div style="text-align:center;" class="alert alert-block">';
                    msg+='<b><span style="color: #000;">' + '[' + codErr + '] ' + desErr + '</span></b>';
                    msg+='</div>';

                    $('#warning-contenido').html(msg);    
                    $('#warning-contenido').show();
                    break;   

                case '8':

                    var msg='<div style="text-align:center;" class="alert alert-block">';
                    msg+='<b><span style="color: #000;">' + '[' + codErr + '] ' + desErr + '</span></b>';
                    msg+='</div>';

                    $('#warning-contenido').html(msg);
                    $('#warning-contenido').show();
                    break;

                case '99':

                    var msg='<div style="text-align:center;" class="alert alert-block">';
                    msg+='<b><span style="color: #000;">' + '[' + codErr + '] ' + desErr + '</span></b>';
                    msg+='</div>';

                    $('#warning-contenido').html(msg);
                    $('#warning-contenido').show();
                    break;
                
                case '100':

                    var msg='<div style="text-align:center;" class="alert alert-block">';
                    msg+='<b><span style="color: #000;">' + '[' + codErr + '] ' + desErr + '</span></b>';
                    msg+='</div>';

                    $('#warning-contenido').html(msg);
                    $('#warning-contenido').show();
                    break;
                
                case '98':

                    //NO HACER NADA
                    break;
                
                default:

                    var contenido = xmlDoc.getElementsByTagName('DATOS')[0].childNodes[0].nodeValue;
                    $('#idContenido').html(contenido).trigger("liszt:updated");                
                    break;
            }
        }
    });
        
    //GALERIA [ESTE CODIGO DEBE IR SIEMPRE DESPUES DE RECUPERAR EL CONTENIDO]   
    $('.magnific-all').each(function(){
        var $container = $(this);
        var $imageLinks = $container.find('.item');

        var items = [];
        $imageLinks.each(function(){
            var $item = $(this);
            var type = 'image';
            if ($item.hasClass('magnific-youtube')) {
                type = 'iframe';
            }
            var magItem = {
                src: $item.attr('href'),
                type: type
            };
            magItem.title = $item.data('title');
            items.push(magItem);
        });

        $imageLinks.magnificPopup({
            mainClass: 'mfp-fade',
            items: items,
            gallery:{
                enabled:true,
                tPrev: $(this).data('prev-text'),
                tNext: $(this).data('next-text')
            },
            type: 'image',
            callbacks: {
                beforeOpen: function() {
                    var index = $imageLinks.index(this.st.el);
                    if (-1 !== index) {
                        this.goTo(index);
                    }
                }
            }
        });
    });
    
    //CONTABILIZA VISITA, SIEMPRE QUE SEA DISTINTO A UNA PRUEBA
    if(puPru==0){
        var puId = $('#puId').val();
        var sesionId=$('#session_id').val();
        var parametros2 = { 
                            "puId" : puId ,   
                            "sesionId" : sesionId 
                       };        

        $.ajax({
            data:  parametros2,
            url: URLprotocol+"//"+URLdomain+"/bodyflex/model/publicacionProCuentaVisitaModel.php",
            type:  'post',
            async:  false,
            datetype: 'xml',
            success:  function (xml){

               //alert('publicacionProCuentaVisitaModel ' + xml);

                var xmlDoc = $.parseXML(xml), $xml = $(xmlDoc);
                var codErr = xmlDoc.getElementsByTagName('CODERROR')[0].childNodes[0].nodeValue;
                var desErr = xmlDoc.getElementsByTagName('DESERROR')[0].childNodes[0].nodeValue;

                switch(codErr){
                    case '9':

                        var msg='<div style="text-align:center;" class="alert alert-block">';
                        msg+='<b><span style="color: #000;">' + '[' + codErr + '] ' + desErr + '</span></b>';
                        msg+='</div>';

                        $('#warning-articulo').html(msg);    
                        $('#warning-articulo').show();
                        break;   

                    case '8':

                        var msg='<div style="text-align:center;" class="alert alert-block">';
                        msg+='<b><span style="color: #000;">' + '[' + codErr + '] ' + desErr + '</span></b>';
                        msg+='</div>';

                        $('#warning-articulo').html(msg);
                        $('#warning-articulo').show();
                        break;

                    case '99':

                        var msg='<div style="text-align:center;" class="alert alert-block">';
                        msg+='<b><span style="color: #000;">' + '[' + codErr + '] ' + desErr + '</span></b>';
                        msg+='</div>';

                        $('#warning-articulo').html(msg);
                        $('#warning-articulo').show();
                        break;

                    case '100':

                        var msg='<div style="text-align:center;" class="alert alert-block">';
                        msg+='<b><span style="color: #000;">' + '[' + codErr + '] ' + desErr + '</span></b>';
                        msg+='</div>';

                        $('#warning-articulo').html(msg);
                        $('#warning-articulo').show();
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
    }
});
     
function profVisitaNoRegistrado(puRutPro){
    
    //alert('profVisitaNoRegistrado ');
    
    var URLdomain   = window.location.host;
    var URLprotocol = window.location.protocol;
    var url = URLprotocol+"//"+URLdomain+"/bodyflex/profesional/index.php";
    var form = $('<form target="_blank" action="' + url + '" method="post">' +
      '<input type="text" name="rutPro" value="' + puRutPro + '" />' +
      '<input type="text" id="prueba" name="prueba" value="0" />' +
      '</form>');
    $('body').append(form);
    form.submit();
    
}

function sitioProfesional(puRutPro){
    
    //alert('sitioProfesional ');
    
    var URLdomain   = window.location.host;
    var URLprotocol = window.location.protocol;
    var url = URLprotocol+"//"+URLdomain+"/bodyflex/profesional/index.php";
    var form = $('<form target="_self" action="' + url + '" method="post">' +
      '<input type="text" id="rutPro" name="rutPro" value="' + puRutPro + '" />' +
      '<input type="text" id="prueba" name="prueba" value="0" />' +
      '</form>');

    $('body').append(form);
    form.submit();
    
}