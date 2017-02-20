<!--<script src="http://code.jquery.com/jquery-1.11.0.min.js"></script> -->
<script src="http://ajax.googleapis.com/ajax/libs/jqueryui/1.10.3/jquery-ui.min.js"></script> 
<script type="text/javascript">
    $(document).ready(function () {
        
        var URLdomain   = window.location.host;
        var URLprotocol = window.location.protocol;       
        var rutPro=$('#rutPro').val();
        var parametros = {"rutPro" : rutPro};     
        
        $.ajax({
            data:  parametros,
            url: URLprotocol+"//"+URLdomain+"/bodyflex/profesional/model/perfilProfesionalGetRsmCurriculumModel.php",
            type:  'post',
            async:  false,
            datetype: 'xml',
            success:  function (xml){

                //alert('perfilProfesionalGetRsmCurriculumModel ' + xml);

                var xmlDoc = $.parseXML(xml), $xml = $(xmlDoc);
                var codErr = xmlDoc.getElementsByTagName('CODERROR')[0].childNodes[0].nodeValue;
                var desErr = xmlDoc.getElementsByTagName('DESERROR')[0].childNodes[0].nodeValue;

                switch(codErr){
                    case '9':

                        var msg='<div style="text-align:center;" class="alert alert-block">';
                        msg+='<b><span style="color: #000;">' + '[' + codErr + '] ' + desErr + '</span></b>';
                        msg+='</div>';

                        $('#prePro').html(msg);    
                        $('#prePro').show();
                        break;   

                    case '8':

                        var msg='<div style="text-align:center;" class="alert alert-block">';
                        msg+='<b><span style="color: #000;">' + '[' + codErr + '] ' + desErr + '</span></b>';
                        msg+='</div>';

                        $('#prePro').html(msg);
                        $('#prePro').show();
                        break;

                    case '99':

                        var msg='<div style="text-align:center;" class="alert alert-block">';
                        msg+='<b><span style="color: #000;">' + '[' + codErr + '] ' + desErr + '</span></b>';
                        msg+='</div>';

                        $('#prePro').html(msg);
                        $('#prePro').show();
                        break;

                    case '100':

                        var msg='<div style="text-align:center;" class="alert alert-block">';
                        msg+='<b><span style="color: #000;">' + '[' + codErr + '] ' + desErr + '</span></b>';
                        msg+='</div>';

                        $('#prePro').html(msg);
                        $('#prePro').show();
                        break;    

                    case '98':
                        
                        var msg='<div style="text-align:center;" class="alert alert-block">';
                        msg+='<b><span style="color: #000;">' + '[' + codErr + '] ' + desErr + '</span></b>';
                        msg+='</div>';

                        $('#prePro').html(msg);
                        $('#prePro').show();
                        break;
                        
                    default:

                        var datos = xmlDoc.getElementsByTagName('DATOS')[0].childNodes[0].nodeValue;
                        
                        //alert(datos);
                        
                        $('#rsmCu').html(datos);
                        $('#rsmCu').show();
                        break;
                }
            }
        });
    });
    
    function verCurriculum(){
    
    var URLdomain   = window.location.host;
    var URLprotocol = window.location.protocol;

        var rutPro=$('#rutPro').val();
        var url=URLprotocol+"//"+URLdomain+"/bodyflex/cv/index.php";
        var form = $('<form target="_blank" action="' + url + '" method="post">' +
          '<input type="text" name="rutPro" value="' + rutPro + '" />' +
          '</form>');
        $('body').append(form);
        form.submit();

    }
    
</script>

<section id="calificacion"> <!-- style="border-style: solid; border-color: blue;" -->
    <div class="container" style="margin-top: 40px;"> <!-- border-style: solid; border-color: red; -->
        <div class="section-header">
            <h2 class="section-title text-center wow fadeInDown">Curr&iacute;culum</h2>
            <p style="font-size: 16px;" class="text-center wow fadeInDown">Resumen del currículum del profesional, puede acceder al detalle haciendo click sobre la grilla "Estudios".</p>
        </div>
        <div class="row" id="rsmCu" style="margin-bottom: 40px;"> <!--  -->
            <div class="col-sm-6 wow fadeInLeft">
                <img class="img-responsive" src="http://drive.google.com/uc?export=view&id=0BwscgrEmxbyLdDJuczlPbFhra28" alt="">
            </div>
            <div class="col-sm-6 wow fadeInRight">
                <h3 class="column-title">Francisco Javier Calderón Navarro</h3>
                <div class="list-group">
                    <a href="#" class="list-group-item active" style="background-color: #FFCC00; color: black; border-color: black;">
                        <b>Estudios</b>
                    </a>
                    <a onclick="verCurriculum();" data-toggle="tooltip" title="Ir a detalle currículum" style="border-color: black; color: black;" class="list-group-item">Técnico Deportivo</a>
                    <a onclick="verCurriculum();" data-toggle="tooltip" title="Ir a detalle currículum" style="border-color: black; color: black;" class="list-group-item">Licenciatura en Educación Física</a>
                    <a onclick="verCurriculum();" data-toggle="tooltip" title="Ir a detalle currículum"  style="border-color: black; color: black;" class="list-group-item">Magister en Ciencias del Deporte</a>
                    <a onclick="verCurriculum();" data-toggle="tooltip" title="Ir a detalle currículum"  style="border-color: black; color: black;" class="list-group-item">Certificado FEDA Cross Force Training Base</a>
                </div>
            </div>
        </div>
    </div>
</section><!--/#about-->