<script src="http://code.jquery.com/jquery-1.11.0.min.js"></script> 
<script type="text/javascript">
    $(document).ready(function (){
        var URLdomain   = window.location.host;
        var URLprotocol = window.location.protocol;
        var rutPro=$('#rutPro').val();
        var parametros = {"rutPro" : rutPro};        
        $.ajax({
            data:  parametros,
            url: URLprotocol+"//"+URLdomain+"/bodyflex/profesional/model/perfilProfesionalGetPublicacionesModel.php",
            type:  'post',
            async:  false,
            datetype: 'xml',
            success:  function (xml){

                //alert('perfilProfesionalGetPublicacionesModel ' + xml);

                var xmlDoc = $.parseXML(xml), $xml = $(xmlDoc);
                var codErr = xmlDoc.getElementsByTagName('CODERROR')[0].childNodes[0].nodeValue;
                var desErr = xmlDoc.getElementsByTagName('DESERROR')[0].childNodes[0].nodeValue;

                //codErr='98';

                switch(codErr){
                    case '9':

                        var msg='<div style="text-align:center;" class="alert alert-block">';
                        msg+='<b><span style="color: #000;">' + '[' + codErr + '] ' + desErr + '</span></b>';
                        msg+='</div>';

                        $('#listPublicaciones').html(msg);    
                        $('#listPublicaciones').show();
                        break;   

                    case '8':

                        var msg='<div style="text-align:center;" class="alert alert-block">';
                        msg+='<b><span style="color: #000;">' + '[' + codErr + '] ' + desErr + '</span></b>';
                        msg+='</div>';

                        $('#listPublicaciones').html(msg);
                        $('#listPublicaciones').show();
                        break;

                    case '99':

                        var msg='<div style="text-align:center;" class="alert alert-block">';
                        msg+='<b><span style="color: #000;">' + '[' + codErr + '] ' + desErr + '</span></b>';
                        msg+='</div>';

                        $('#listPublicaciones').html(msg);
                        $('#listPublicaciones').show();
                        break;

                    case '98':
                        
                        //alert('entro en 98');
                        
                        //Si no existen publicaciones se esconde item de menú y sección de página
                        $('#mnuPublicaciones').hide();
                        $('#publicacion').hide();
                        break;
                        
                    default:

                        //alert('default');
                        
                        var datos = xmlDoc.getElementsByTagName('DATOS')[0].childNodes[0].nodeValue;
                        
                        datos+='<div class="clear"></div>';
                        
                        $('#listPublicaciones').html(datos);
                        $('#listPublicaciones').show();
                        break;
                }
            }
        });  
    });  
    
    function muestraPublicacion(id){
        
        var URLdomain   = window.location.host;
        var URLprotocol = window.location.protocol;
        var parametros = {"id" : id};        
        $.ajax({
            data:  parametros,
            url: URLprotocol+"//"+URLdomain+"/bodyflex/profesional/model/perfilProfesionalGetDataPublicacionesModel.php",
            type:  'post',
            async:  false,
            datetype: 'xml',
            success:  function (xml){

                //alert('perfilProfesionalGetDataPublicacionesModel ' + xml);

                var xmlDoc = $.parseXML(xml), $xml = $(xmlDoc);
                var codErr = xmlDoc.getElementsByTagName('CODERROR')[0].childNodes[0].nodeValue;
                var desErr = xmlDoc.getElementsByTagName('DESERROR')[0].childNodes[0].nodeValue;

                switch(codErr){
                    case '9':

                        var msg='<div style="text-align:center;" class="alert alert-block">';
                        msg+='<b><span style="color: #000;">' + '[' + codErr + '] ' + desErr + '</span></b>';
                        msg+='</div>';

                        swal({   
                            title: 'Error',   
                            text: msg,   
                            type: "warning", 
                            confirmButtonColor: "#DD6B55",
                            html: true,
                            allowOutsideClick: true
                        });

                        break;   

                    case '8':

                        var msg='<div style="text-align:center;" class="alert alert-block">';
                        msg+='<b><span style="color: #000;">' + '[' + codErr + '] ' + desErr + '</span></b>';
                        msg+='</div>';

                        swal({   
                            title: 'Error',   
                            text: msg,   
                            type: "warning", 
                            confirmButtonColor: "#DD6B55",
                            html: true,
                            allowOutsideClick: true
                        });    

                        break;

                    case '99':

                        var msg='<div style="text-align:center;" class="alert alert-block">';
                        msg+='<b><span style="color: #000;">' + '[' + codErr + '] ' + desErr + '</span></b>';
                        msg+='</div>';

                        swal({   
                            title: 'Error',   
                            text: msg,   
                            type: "warning", 
                            confirmButtonColor: "#DD6B55",
                            html: true,
                            allowOutsideClick: true
                        });

                        break;

                    case '98':
                        
                        var msg='<div style="text-align:center;" class="alert alert-block">';
                        msg+='<b><span style="color: #000;">' + '[' + codErr + '] ' + desErr + '</span></b>';
                        msg+='</div>';

                        swal({   
                            title: 'Error',   
                            text: msg,   
                            type: "warning", 
                            confirmButtonColor: "#DD6B55",
                            html: true,
                            allowOutsideClick: true
                        });

                        break;
                        
                    default:

                        var id = xmlDoc.getElementsByTagName('ID')[0].childNodes[0].nodeValue;
                        var fecha = xmlDoc.getElementsByTagName('FECHA')[0].childNodes[0].nodeValue;
                        var titulo = xmlDoc.getElementsByTagName('TITULO')[0].childNodes[0].nodeValue;
                        var bajada = xmlDoc.getElementsByTagName('BAJADA')[0].childNodes[0].nodeValue;
                        var url = xmlDoc.getElementsByTagName('URL')[0].childNodes[0].nodeValue;
                        
                        //var tit='<a style="cursor: pointer; font-size: 22px; color: black; font-weight: bold;" target="_blank" onclick="dirigePublicacion('+id+');"><u>'+titulo+'</u></a>';
                        var tit='<a style="cursor: pointer; color: black; font-size: 18px; font-family: Helvetica, Georgia, Arial, Garamond; font-weight: bold;" target="_blank" onclick="dirigePublicacion('+id+');"><u>'+titulo+'</u></a>';
                        
                        swal({   
                            title: tit,   
                            text: bajada,   
                            confirmButtonColor: "#FFCC00;",
                            html: true,
                            allowOutsideClick: true,
                            imageUrl: url,
                            imageSize: "400x175",
                            animation: false
                        });

                        break;
                }
            }
        });
    }
    
    function dirigePublicacion(id){
    
        var URLdomain   = window.location.host;
        var URLprotocol = window.location.protocol;
        var rutPro=$('#rutPro').val();
        var puPru = 0;
        var url=URLprotocol+"//"+URLdomain+"/bodyflex/view/publicacionProView.php";
                
        var form = $('<form action="' + url + '" method="post" target="_self">' +
          '<input type="hidden" name="puId" value="' + id + '" />' +
          '<input type="hidden" name="puPru" value="' + puPru + '" />' +
          '<input type="hidden" name="proRut" value="' + rutPro + '" />' +
          '</form>');
        $('body').append(form);
        
        form.submit();
        
    }
    
</script>

<style>
    .clear { clear: both; }
    .content { 
        min-height: 10px; 
        _height: 10px; 
        max-height: 800px; 
        overflow-y: scroll;
    }
</style>

<section id="publicacion"> 
    <div class="container" class="content"> <!-- style="height: 800px;" --> <!-- border-style: solid; border-color: blue;  -->
        <div class="section-header">
            <h2 class="section-title text-center wow fadeInDown">Publicaciones</h2>
            <p style="font-size: 16px;" class="text-center wow fadeInDown">Publicaciones del profesional ordenadas en orden cronol&oacute;gico.</p>
        </div>
        <div id="listPublicaciones" style="overflow-y: scroll; max-height: 630px;">
                    
        </div>
    </div>
</section>