<!--<script src="http://code.jquery.com/jquery-1.11.0.min.js"></script> -->

        <script src="http://codeorigin.jquery.com/jquery-1.10.2.min.js"></script>
        <script src="//netdna.bootstrapcdn.com/bootstrap/3.0.3/js/bootstrap.min.js"></script>

<script type="text/javascript">
    $(document).ready(function (){
        
        var URLdomain   = window.location.host;
        var URLprotocol = window.location.protocol;
        var rutPro=$('#rutPro').val();
        var prueba=$('#prueba').val();;
        
        //alert('rutPro ' + rutPro);
        //alert('id ' + id);
        //alert('prueba ' + prueba);
        
        var parametros = { 
            "rutPro" : rutPro 
            ,   "prueba" : prueba
        };   
        
        $.ajax({
            data:  parametros,
            url: URLprotocol+"//"+URLdomain+"/bodyflex/profesional/model/perfilProfesionalGetProductosModel.php",
            type:  'post',
            async:  false,
            datetype: 'xml',
            success:  function (xml){

                //alert('perfilProfesionalGetProductosModel ' + xml);

                var xmlDoc = $.parseXML(xml), $xml = $(xmlDoc);
                var codErr = xmlDoc.getElementsByTagName('CODERROR')[0].childNodes[0].nodeValue;
                var desErr = xmlDoc.getElementsByTagName('DESERROR')[0].childNodes[0].nodeValue;

                switch(codErr){
                    case '9':

                        var msg='<div style="text-align:center;" class="alert alert-block">';
                        msg+='<b><span style="color: #000;">' + '[' + codErr + '] ' + desErr + '</span></b>';
                        msg+='</div>';

                        $('#listProductos').html(msg);    
                        $('#listProductos').show();
                        break;   

                    case '8':

                        var msg='<div style="text-align:center;" class="alert alert-block">';
                        msg+='<b><span style="color: #000;">' + '[' + codErr + '] ' + desErr + '</span></b>';
                        msg+='</div>';

                        $('#listProductos').html(msg);
                        $('#listProductos').show();
                        break;

                    case '99':

                        var msg='<div style="text-align:center;" class="alert alert-block">';
                        msg+='<b><span style="color: #000;">' + '[' + codErr + '] ' + desErr + '</span></b>';
                        msg+='</div>';

                        $('#listProductos').html(msg);
                        $('#listProductos').show();
                        break;

                    case '100':

                        var msg='<div style="text-align:center;" class="alert alert-block">';
                        msg+='<b><span style="color: #000;">' + '[' + codErr + '] ' + desErr + '</span></b>';
                        msg+='</div>';

                        $('#listProductos').html(msg);
                        $('#listProductos').show();
                        break;    

                    case '98':
                        
                        //SINO POSEE PRODUCTOS ESCONDEMOS SECCIÓN
                        $('#mnuProductos').hide();  //Esconde opción del menu productos
                        $('#mnuCarrito').hide();    //Esconde opción del menu carro de compras
                        $('#producto').hide();      //Esconde sección productos de la página
                        break;
                        
                    default:

                        var datos = xmlDoc.getElementsByTagName('DATOS')[0].childNodes[0].nodeValue;
                        $('#listProductos').html(datos);
                        $('#listProductos').show();
                        break;
                        
                }
            }
        });  
    });  
        
    function verDetalleProducto(id, rut){
        
        var URLdomain   = window.location.host;
        var URLprotocol = window.location.protocol;
        var url = URLprotocol+"//"+URLdomain+"/bodyflex/profesional/view/productosProfesional.php";
        var form = $('<form action="' + url + '" method="post">' +
        '<input type="text" id="id" name="id" value="' + id + '" />' +
        '<input type="text" id="rutPro" name="rutPro" value="' + rut + '" />' +
        '<input type="text" id="prueba" name="prueba" value="0" />' +
        '</form>');

        $('body').append(form);
        form.submit();
        
    }
    
    $('#myCarousel').carousel({
        interval: 4000
    });
    
</script>

<section id="producto" style="width: 100%; height: 800px;"> <!-- width: 1770px; -->
        
    <div style="width: 100%; margin-left: 30px;  margin-right: 30px;" class="section-header"> <!-- width: 1710px -->
        <h2 class="section-title text-center wow fadeInDown">Productos</h2>
        <p class="text-center wow fadeInDown">En mi tienda podrás encontrar los mejores productos para desempeñar de mejor manera tu disciplina deportiva.</p>
    </div>

    <div id="divProductos" style="height: 400px; width: 1710px; margin-left: 30px;  margin-right: 30px;" class="row">

        <!-- Carousel============================ -->            
        <div id="myCarousel" class="carousel slide">
            <div class="carousel-inner" id="listProductos">
                <div class="item active">
                    <div class="row">
                        <div style="cursor: pointer;" onclick="verDetalleProducto(20,13661574)" class="col-md-3">
                            <div class="thumbnail" style="border-style: solid; border-color: black; box-shadow: 0 0 6px black; margin: 0px 0px 0px 0px;">
                                <img id="20" style="width: 300px; height: 200px; margin-top: 20px;" src="http://drive.google.com/uc?export=view&id=0B82UUH1gaEMAcUt2V3Q3anRCTjg" alt="Zapatilla Running Hombre 1266212-363">
                                <div class="caption">
                                    <h3>Zapatilla Running Hombre 1266212-363</h3>
                                    <p style="text-align: justify;">Cambiar tus zapatillas es muy fácil en falabella.com, solo debes llamar a nuestro servicio de at</p>
                                    <p>
                                        <a onClick="verProducto(20)" class="btn btn-primary" role="button" style="font-size: 16px; font-weight: bold; font-family: Helvetica, Georgia, Arial, Garamond;">$25.000</a> 
                                        <a href="#" class="btn btn-default" role="button">Wishlist</a>
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <br>

            <a class="left carousel-control" href="#myCarousel" data-slide="prev"><i class="fa fa-chevron-left fa-2x"></i></a>
            <a class="right carousel-control" href="#myCarousel" data-slide="next"><i class="fa fa-chevron-right fa-2x"></i></a>

            <ol class="carousel-indicators">
                <li data-target="#myCarousel" data-slide-to="0" class="active"></li>
                <li data-target="#myCarousel" data-slide-to="1"></li>
                <li data-target="#myCarousel" data-slide-to="2"></li>
            </ol>    

        </div><!-- End Carousel --> 

    </div>
    
</section>