<script src="http://code.jquery.com/jquery-1.11.0.min.js"></script> 
<script type="text/javascript">
    $(document).ready(function () {
        
        var URLdomain   = window.location.host;
        var URLprotocol = window.location.protocol;
        
        var rutPro=$('#rutPro').val();
        var parametros = { 
                            "rutPro" : rutPro 
                          };        
        $.ajax({
            data:  parametros,
            
            url: URLprotocol+"//"+URLdomain+"/bodyflex/profesional/model/perfilProfesionalGetServiciosModel.php",
            type:  'post',
            async:  false,
            datetype: 'xml',
            success:  function (xml){

                //alert('perfilProfesionalGetPresentacionModel ' + xml);

                var xmlDoc = $.parseXML(xml), $xml = $(xmlDoc);
                var codErr = xmlDoc.getElementsByTagName('CODERROR')[0].childNodes[0].nodeValue;
                var desErr = xmlDoc.getElementsByTagName('DESERROR')[0].childNodes[0].nodeValue;

                switch(codErr){
                    case '9':

                        var msg='<div style="text-align:center;" class="alert alert-block">';
                        msg+='<b><span style="color: #000;">' + '[' + codErr + '] ' + desErr + '</span></b>';
                        msg+='</div>';

                        $('#listServicios').html(msg);    
                        $('#listServicios').show();
                        break;   

                    case '8':

                        var msg='<div style="text-align:center;" class="alert alert-block">';
                        msg+='<b><span style="color: #000;">' + '[' + codErr + '] ' + desErr + '</span></b>';
                        msg+='</div>';

                        $('#listServicios').html(msg);
                        $('#listServicios').show();
                        break;

                    case '99':

                        var msg='<div style="text-align:center;" class="alert alert-block">';
                        msg+='<b><span style="color: #000;">' + '[' + codErr + '] ' + desErr + '</span></b>';
                        msg+='</div>';

                        $('#listServicios').html(msg);
                        $('#listServicios').show();
                        break;
                        
                    case '100':

                        var msg='<div style="text-align:center;" class="alert alert-block">';
                        msg+='<b><span style="color: #000;">' + '[' + codErr + '] ' + desErr + '</span></b>';
                        msg+='</div>';

                        $('#listServicios').html(msg);
                        $('#listServicios').show();
                        break;    

                    case '98':
                        
                        var msg='<div style="text-align:center;" class="alert alert-block">';
                        msg+='<b><span style="color: #000;">' + '[' + codErr + '] ' + desErr + '</span></b>';
                        msg+='</div>';

                        $('#listServicios').html(msg);
                        $('#listServicios').show();
                        break;
                        
                    default:

                        var datos = xmlDoc.getElementsByTagName('DATOS')[0].childNodes[0].nodeValue;
                        
                        //alert(datos);
                        
                        $('#listServicios').html(datos);
                        $('#listServicios').show();
                        break;
                }
            }
        });
    });
    
    function muestraServicio(id, rut){
        
        var URLdomain   = window.location.host;
        var URLprotocol = window.location.protocol;
        var urlServicios = URLprotocol+"//"+URLdomain+"/bodyflex/profesional/view/serviciosProfesional.php";
       
        var form = $('<form action="' + urlServicios + '" method="post" target="_self">' +
          '<input type="hidden" name="id" value="' + id + '" />' +
          '<input type="hidden" name="rut" value="' + rut + '" />' +
          '</form>');
        $('body').append(form);
        form.submit();
        
    }
    
</script>
<section id="services">
    <div class="container">
        <div class="section-header">
            <h2 class="section-title text-center wow fadeInDown">Servicios</h2>
            <p style="font-size: 16px;" class="text-center wow fadeInDown">Listado de servicios ofrecidos por el profesional.</p>
        </div>
        <div class="row">
            <div class="features" id="listServicios">
                <div style="cursor: pointer;" onclick="muestraServicio(id, rut);" class="col-md-4 col-sm-6 wow fadeInUp" data-wow-duration="300ms" data-wow-delay="0ms">
                    <div class="media service-box">
                        <div class="pull-left">
                            <i class="fa fa-futbol-o"></i>
                        </div>
                        <div class="media-body">
                            <h4 style="text-align: center;" class="media-heading">Living Space</h4>
                            <p style="text-align: justify;">Backed by some of the biggest names in the industry, Firefox OS is an open platform that fosters greater</p>
                        </div>
                    </div>
                </div><!--/.col-md-4-->
                <div class="col-md-4 col-sm-6 wow fadeInUp" data-wow-duration="300ms" data-wow-delay="100ms">
                    <div class="media service-box">
                        <div class="pull-left">
                            <i class="fa fa-compass"></i>
                        </div>
                        <div class="media-body">
                            <h4 class="media-heading">Kitchen</h4>
                            <p>Backed by some of the biggest names in the industry, Firefox OS is an open platform that fosters greater</p>
                        </div>
                    </div>
                </div><!--/.col-md-4-->
                <div class="col-md-4 col-sm-6 wow fadeInUp" data-wow-duration="300ms" data-wow-delay="200ms">
                    <div class="media service-box">
                        <div class="pull-left">
                            <i class="fa fa-database"></i>
                        </div>
                        <div class="media-body">
                            <h4 class="media-heading">Office</h4>
                            <p>Morbi vitae tortor tempus, placerat leo et, suscipit lectus. Phasellus ut euismod massa, eu eleifend ipsum.</p>
                        </div>
                    </div>
                </div><!--/.col-md-4-->
                <div class="col-md-4 col-sm-6 wow fadeInUp" data-wow-duration="300ms" data-wow-delay="300ms">
                    <div class="media service-box">
                        <div class="pull-left">
                            <i class="fa fa-bar-chart"></i>
                        </div>
                        <div class="media-body">
                            <h4 class="media-heading">Smart Advice</h4>
                            <p>Morbi vitae tortor tempus, placerat leo et, suscipit lectus. Phasellus ut euismod massa, eu eleifend ipsum.</p>
                        </div>
                    </div>
                </div><!--/.col-md-4-->
                <div class="col-md-4 col-sm-6 wow fadeInUp" data-wow-duration="300ms" data-wow-delay="400ms">
                    <div class="media service-box">
                        <div class="pull-left">
                            <i class="fa fa-paper-plane-o"></i>
                        </div>
                        <div class="media-body">
                            <h4 class="media-heading">Meeting Room</h4>
                            <p>Morbi vitae tortor tempus, placerat leo et, suscipit lectus. Phasellus ut euismod massa, eu eleifend ipsum.</p>
                        </div>
                    </div>
                </div><!--/.col-md-4-->
                <div class="col-md-4 col-sm-6 wow fadeInUp" data-wow-duration="300ms" data-wow-delay="500ms">
                    <div class="media service-box">
                        <div class="pull-left">
                            <i class="fa fa-bullseye"></i>
                        </div>
                        <div class="media-body">
                            <h4 class="media-heading">Waiting Area</h4>
                            <p>Morbi vitae tortor tempus, placerat leo et, suscipit lectus. Phasellus ut euismod massa, eu eleifend ipsum.</p>
                        </div>
                    </div>
                </div><!--/.col-md-4-->
            </div>
        </div><!--/.row-->    
    </div><!--/.container-->
</section><!--/#services-->