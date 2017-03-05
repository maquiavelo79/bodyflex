<script src="http://ajax.googleapis.com/ajax/libs/jquery/1.7.1/jquery.min.js" type="text/javascript"></script>
<script type="text/javascript">
    $(document).ready(function (){
        var URLdomain   = window.location.host;
        var URLprotocol = window.location.protocol;
		
        $.ajax({
            url: URLprotocol+"//"+URLdomain+"/bodyflex/admin/model/csuPostulacionesModel.php",
            type:  'post',
            async:  true,
            datetype: 'xml',
            success:  function (xml){

                //alert('csuPostulacionesModel ' + xml);

                var xmlDoc = $.parseXML(xml), $xml = $(xmlDoc);
                var codErr = xmlDoc.getElementsByTagName('CODERROR')[0].childNodes[0].nodeValue;
                var desErr = xmlDoc.getElementsByTagName('DESERROR')[0].childNodes[0].nodeValue;

                switch(codErr){
                    case '9':
                        $('#posIng').html("?").show();
                        $('#posEva').html("?").show();    
                        $('#posDet').html("?").show();
                        $('#posRez1').html("?").show();
                        $('#posApr1').html("?").show();
                        break;   
                    case '99':
                        $('#posIng').html("?").show();
                        $('#posEva').html("?").show();    
                        $('#posDet').html("?").show();
                        $('#posRez1').html("?").show();
                        $('#posApr1').html("?").show();    
                        break;
                    case '100':
                        $('#posIng').html("?").show();
                        $('#posEva').html("?").show();    
                        $('#posDet').html("?").show();
                        $('#posRez1').html("?").show();
                        $('#posApr1').html("?").show();
                        break;    
                    default:

                        //POSTULACION
                        var posIng = xmlDoc.getElementsByTagName('INGRESADAS')[0].childNodes[0].nodeValue;
                        var posEva = xmlDoc.getElementsByTagName('EVALUANDO')[0].childNodes[0].nodeValue;
                        var posDet = xmlDoc.getElementsByTagName('DETENIDA')[0].childNodes[0].nodeValue;
                        var posRez1 = xmlDoc.getElementsByTagName('RECHAZANDO')[0].childNodes[0].nodeValue;
                        var posApr1 = xmlDoc.getElementsByTagName('APROBANDO')[0].childNodes[0].nodeValue;
                        
                        //REGISTRO
                        var posReg = xmlDoc.getElementsByTagName('REGISTRADA')[0].childNodes[0].nodeValue;
                        var posDir = xmlDoc.getElementsByTagName('DIRECCIONES')[0].childNodes[0].nodeValue;
                        var posCta = xmlDoc.getElementsByTagName('CUENTAS')[0].childNodes[0].nodeValue;
                        var posPer = xmlDoc.getElementsByTagName('PERFILADO')[0].childNodes[0].nodeValue;
                        var posAlt = xmlDoc.getElementsByTagName('ALTA')[0].childNodes[0].nodeValue;
                        
                        //INGRESADAS
                        if(posIng!=0){
                            $('#posIng').html(posIng);
                            $('#posIng').show();
                        }else{
                            $('#posIng').hide();    
                        }    
                        //EVALUANDO
                        if(posEva!=0){
                            $('#posEva').html(posEva);
                            $('#posEva').show();
                        }else{
                            $('#posEva').hide();    
                        }
                        //EVALUANDO
                        if(posDet!=0){
                            $('#posDet').html(posDet);
                            $('#posDet').show();
                        }else{
                            $('#posDet').hide();    
                        }
                        //RECHAZANDO
                        if(posRez1!=0){
                            $('#posRez1').html(posRez1);
                            $('#posRez1').show();
                        }else{
                            $('#posRez1').hide();    
                        }
                        //APROBANDO
                        if(posApr1!=0){
                            $('#posApr1').html(posApr1);
                            $('#posApr1').show();
                        }else{
                            $('#posApr1').hide();    
                        }
                        
                        
                        //REGISTRADA
                        if(posReg!=0){
                            $('#posReg').html(posReg);
                            $('#posReg').show();
                        }else{
                            $('#posReg').hide();    
                        }
                        //DIRECCIONES
                        if(posDir!=0){
                            $('#posDir').html(posDir);
                            $('#posDir').show();
                        }else{
                            $('#posDir').hide();    
                        }
                        //CUENTAS
                        if(posCta!=0){
                            $('#posCta').html(posCta);
                            $('#posCta').show();
                        }else{
                            $('#posCta').hide();    
                        }
                        //PERFILAMIENTO
                        if(posPer!=0){
                            $('#posPer').html(posPer);
                            $('#posPer').show();
                        }else{
                            $('#posPer').hide();    
                        }

                        break;
                        
                }
            }
        });       
    });   
     
</script>

<div id="sidebar-left" class="span2">
    <div class="nav-collapse sidebar-nav">
        <ul class="nav nav-tabs nav-stacked main-menu">
            <li>
                <a href="../../../bodyflex/admin/index.php">
                    <i class="icon-bar-chart"></i>
                    <span style="color: #FFCC00;" class="hidden-tablet">Dashboard</span>
                </a>
            </li>
            <li>
               <a class="dropmenu" href="#">
                    <i class="icon-group"></i>
                    <span style="color: #FFCC00;" class="hidden-tablet">Postulaciones</span>
                    <span style="color: #FFCC00;" class="label label-important">6</span>
                </a>
                <ul>
                    <li>
                        <a style="margin-left: 5px;" href="../../../bodyflex/admin/view/posBsqView.php">
                            <i class="fa fa-search"></i>
                            <span style="color: #FFCC00;" class="hidden-tablet">&nbsp;B&uacute;squeda</span>
                        </a>
                    </li>
                    <li>
                        <a style="margin-left: 5px;" href="../../../bodyflex/admin/view/posIngView.php">
                            <i class="icon-time"></i>
                            <span style="color: #FFCC00;" class="hidden-tablet">&nbsp;Ingresadas</span>
                            <span id="posIng" class='label label-important'></span>
                        </a>
                    </li>
                    <li>
                        <a style="margin-left: 5px;" class="submenu" href="../../../bodyflex/admin/view/posEvaView.php">
                            <i class="icon-cogs"></i>
                            <span style="color: #FFCC00;" class="hidden-tablet">&nbsp;Evaluando</span>
                            <span id="posEva" class='label label-important'></span>
                        </a>
                    </li>
                    <li>    
                        <a style="margin-left: 5px;" href="../../../bodyflex/admin/view/posDetView.php">
                            <i class="icon-warning-sign"></i>
                            <span style="color: #FFCC00;" class="hidden-tablet">&nbsp;Detenidas</span>
                            <span id="posDet" class='label label-important'></span>
                        </a>
                    </li>
                    <li>
                        <a style="margin-left: 5px;" href="../../../bodyflex/admin/view/posRecView.php">
                            <i class="icon-remove"></i>
                            <span style="color: #FFCC00;" class="hidden-tablet">&nbsp;Rechazadas</span>
                            <span id="posRez1" class='label label-important'></span>
                        </a>
                    </li>
                    <li>
                        <a style="margin-left: 5px;" class="submenu" href="../../../bodyflex/admin/view/posAprView.php">
                            <i class="icon-ok"></i>
                            <span style="color: #FFCC00;" class="hidden-tablet">&nbsp;Aprobadas</span>
                            <span id="posApr1" class='label label-important'></span>
                        </a>
                    </li>
                </ul>	
            </li>
            <li>
               <a class="dropmenu" href="#">
                    <i class="icon-user"></i>
                    <span style="color: #FFCC00;" class="hidden-tablet">Registro Profesional</span>
                    <span style="color: #FFCC00;" class="label label-important">5</span>
                </a>
                <ul>
                    <li>
                        <a style="margin-left: 5px;" href="../../../bodyflex/admin/view/regProBsqView.php">
                            <i class="fa fa-search"></i>
                            <span style="color: #FFCC00;" class="hidden-tablet">&nbsp;B&uacute;squeda</span>
                        </a>
                    </li>
                    <li>
                        <a style="margin-left: 5px;" href="../../../bodyflex/admin/view/regProView.php">
                            <i class="fa fa-database"></i>
                            <span style="color: #FFCC00;" class="hidden-tablet">&nbsp;Datos</span>
                            <span id="posReg" class='label label-important'></span>
                        </a>
                    </li>
                    <li>
                        <a style="margin-left: 5px;" class="submenu" href="../../../bodyflex/admin/view/regProDirView.php">
                            <i class="fa fa-home"></i>
                            <span style="color: #FFCC00;" class="hidden-tablet">&nbsp;Direcciones</span>
                            <span id="posDir" class='label label-important'></span>
                        </a>
                    </li>
                    <li>
                        <a style="margin-left: 5px;" class="submenu" href="../../../bodyflex/admin/view/regProCtaView.php">
                            <i class="fa fa-university"></i>
                            <span style="color: #FFCC00;" class="hidden-tablet">&nbsp;Cuentas</span>
                            <span id="posCta" class='label label-important'></span>
                        </a>
                    </li>
                    <li>
                        <a style="margin-left: 5px;" href="../../../bodyflex/admin/view/regProPerView.php">
                            <i class="fa fa-male"></i>
                            <span style="color: #FFCC00;" class="hidden-tablet">&nbsp;Perfilar</span>
                            <span id="posPer" class='label label-important'></span>
                        </a>
                    </li>
                </ul>	
            </li>
            
            <li>
                <a href="../../../bodyflex/admin/view/serviciosProfesionalView.php">
                    <i class="fa fa-cogs"></i>
                    <span style="color: #FFCC00;" class="hidden-tablet">&nbsp;Servicios</span>
                </a>
            </li>
            
            <li>
                <a class="dropmenu" href="#">
                    <i class="fa fa-sort-amount-desc"></i>
                    <span style="color: #FFCC00;" class="hidden-tablet">Categor&iacute;as</span>
                    <span style="color: #FFCC00;" class="label label-important">3</span>
                </a>
                <ul>
                    <li>
                        <a style="margin-left: 5px;" class="submenu" href="../../../bodyflex/admin/view/categoria1View.php">
                            <i class="fa fa-sort-numeric-asc"></i>
                            <span style="color: #FFCC00;" class="hidden-tablet">&nbsp;Categor&iacute;a 1</span>
                        </a>
                    </li>
                    <li>
                        <a style="margin-left: 5px;" class="submenu" href="../../../bodyflex/admin/view/categoria2View.php">
                            <i class="fa fa-sort-numeric-asc"></i>
                            <span style="color: #FFCC00;" class="hidden-tablet">&nbsp;Categor&iacute;a 2</span>
                        </a>
                    </li>
                    <li>
                        <a style="margin-left: 5px;" class="submenu" href="../../../bodyflex/admin/view/categoria3View.php">
                            <i class="fa fa-sort-numeric-asc"></i>
                            <span style="color: #FFCC00;" class="hidden-tablet">&nbsp;Categor&iacute;a 3</span>
                        </a>
                    </li>
                </ul>	
            </li>
            
            <li>
                <a class="dropmenu" href="#">
                    <i class="fa fa-product-hunt"></i>
                    <span style="color: #FFCC00;" class="hidden-tablet">Productos</span>
                    <span style="color: #FFCC00;" class="label label-important">5</span>
                </a>
                <ul>
                    <li>
                        <a style="margin-left: 5px;" class="submenu" href="../../../bodyflex/admin/view/catMarView.php">
                            <i class="fa fa-star"></i>
                            <span style="color: #FFCC00;" class="hidden-tablet">&nbsp;Marcas</span>
                        </a>
                    </li>
                    <li>
                        <a style="margin-left: 5px;" href="../../../bodyflex/admin/view/productoView.php">
                            <i class="fa fa-product-hunt"></i>
                            <span style="color: #FFCC00;" class="hidden-tablet">&nbsp;Productos</span>
                        </a>
                    </li>
                    <li>
                        <a style="margin-left: 5px;" class="submenu" href="../../../bodyflex/admin/view/regProMedView.php">
                            <i class="fa fa-tachometer" aria-hidden="true"></i>
                            <span style="color: #FFCC00;" class="hidden-tablet">&nbsp;Tallas</span>
                        </a>
                    </li>
                    <li>
                        <a style="margin-left: 5px;" class="submenu" href="../../../bodyflex/admin/view/regProColView.php">
                            <i class="fa fa-paint-brush" aria-hidden="true"></i>
                            <span style="color: #FFCC00;" class="hidden-tablet">&nbsp;Colores</span>
                        </a>
                    </li>
                    <li>
                        <a style="margin-left: 5px;" class="submenu" href="../../../bodyflex/admin/view/regProEtiView.php">
                            <i class="fa fa-tag" aria-hidden="true"></i>
                            <span style="color: #FFCC00;" class="hidden-tablet">&nbsp;Etiqueta</span>
                        </a>
                    </li>
                </ul>	
            </li>
            
            <li>
                <a class="dropmenu" href="#">
                    <i class="fa fa-newspaper-o"></i>
                    <span style="color: #FFCC00;" class="hidden-tablet">Colecci&oacute;n</span>
                    <span style="color: #FFCC00;" class="label label-important">3</span>
                </a>
                <ul>
                    <li>
                        <a style="margin-left: 5px;" class="submenu" href="../../../bodyflex/admin/view/coleccionCrearView.php">
                            <i class="fa fa-magic"></i>
                            <span style="color: #FFCC00;" class="hidden-tablet">Crear</span>
                        </a>
                    </li>
                    <li>
                        <a style="margin-left: 5px;" class="submenu" href="../../../bodyflex/admin/view/coleccionAddView.php">
                            <i class="fa fa-plus"></i>
                            <span style="color: #FFCC00;" class="hidden-tablet">Agregar</span>
                        </a>
                    </li>
                    <li>
                        <a style="margin-left: 5px;" class="submenu" href="../../../bodyflex/admin/view/coleccionProView.php">
                            <i class="fa fa-sun-o"></i>
                            <span style="color: #FFCC00;" class="hidden-tablet">Colecci&oacute;n Producto</span>
                        </a>
                    </li>
                    <li>
                        <a style="margin-left: 5px;" class="submenu" href="../../../bodyflex/admin/view/proSinColView.php">
                            <i class="fa fa-spinner"></i>
                            <span style="color: #FFCC00;" class="hidden-tablet">Productos sin Colecci&oacute;n</span>
                        </a>
                    </li>
                </ul>	
            </li>
            
            <li>
                <a class="dropmenu" href="#">
                    <i class="fa fa-opencart" aria-hidden="true"></i>
                    <span style="color: #FFCC00;" class="hidden-tablet">Cat&aacute;logo</span>
                    <span style="color: #FFCC00;" class="label label-important">4</span>
                </a>
                <ul>
                    <li>
                        <a style="margin-left: 5px;" class="submenu" href="../../../bodyflex/admin/view/sliderCatView2.php">
                            <i class="fa fa-whatsapp fa-lg"></i>
                            <span style="color: #FFCC00;" class="hidden-tablet">&nbsp;Contacto</span>
                        </a>
                    </li>
                    <li>
                        <a style="margin-left: 5px;" class="submenu" href="../../../bodyflex/admin/view/sliderCatView.php">
                            <i class="fa fa-plus"></i>
                            <span style="color: #FFCC00;" class="hidden-tablet">&nbsp;Slider</span>
                        </a>
                    </li>
                    <li>
                        <a style="margin-left: 5px;" class="submenu" href="../../../bodyflex/admin/view/proVitView.php">
                            <i class="fa fa-television"></i>
                            <span style="color: #FFCC00;" class="hidden-tablet">&nbsp;Vitrina</span>
                        </a>
                    </li>
                </ul>	
            </li>
            
            <li>
                <a href="../../../bodyflex/Publicaciones/view/publicacionView.php">
                    <i class="icon-pencil"></i>
                    <span style="color: #FFCC00;" class="hidden-tablet">&nbsp;Publicaciones</span>
                </a>
            </li>
            <li>
                <a href="../../../bodyflex/Mensajes/view/mensajesView.php">
                    <i class="icon-envelope"></i>
                    <span style="color: #FFCC00;" class="hidden-tablet">&nbsp;Mensajes</span>
                    <span id="msgNew" class="label label-important">3</span>
                </a>
            </li>
            
        </ul>
    </div>
</div>
<!-- end: Main Menu -->