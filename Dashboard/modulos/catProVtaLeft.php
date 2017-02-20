
<div style="width: 50%; height: 580px;" class="span7"><!--border-style: solid; border-color: blue;-->
<script>
    function queEncuentroEnCatalogo(){

	var msgImpPer='<p style="text-align: center; font-size: 16px; font-family: Verdana; color: #1b2426;">Al acceder a nuestro <b style="font-size: 16px; color: blue; font-family: Impact, Charcoal, sans-serif;">catálogo exclusivo</b> para nuestros profesionales tienes la oportunidad de incrementar tus ingresos por medio de <b style="font-size: 16px; color: blue; font-family: Impact, Charcoal, sans-serif;">ventas presenciales</b> y por <b style="font-size: 16px; color: blue; font-family: Impact, Charcoal, sans-serif;">catálogo</b>.</p>';
	
	swal({   
		title: 'Catálogo',
                text: msgImpPer,
                imageUrl: '../../images/catalogoOportunidad.jpg',
                imageWidth: 400,
                imageHeight: 200,
                animation: false,
                confirmButtonColor: '#FFCC00',
		confirmButtonText: '<span style="color: black; font-weight: bold;">Aceptar</span>'
	});
	
    }  
    function ventaPresencial(){

	var msgImpPer='<p style="text-align: center; font-size: 16px; font-family: Verdana; color: #1b2426;">Compra productos a precios preferenciales y distribúyelos presencialmente entre tus clientes al valor de lista <b style="font-size: 16px; color: blue; font-family: Impact, Charcoal, sans-serif;">Bodyflex</b> obteniendo <b style="font-size: 16px; color: blue; font-family: Impact, Charcoal, sans-serif;">altos márgenes de utilidad</b>.</p>';
	
	swal({   
		title: 'Venta Presencial',
                text: msgImpPer,
                imageUrl: '../../images/ventaPresencial.jpg',
                imageWidth: 400,
                imageHeight: 200,
                animation: false,
                confirmButtonColor: '#FFCC00',
		confirmButtonText: '<span style="color: black; font-weight: bold;">Aceptar</span>'
	});
	
    }
    function ventaCatalogo(){

	var msgImpPer='<p style="text-align: center; font-size: 16px; font-family: Verdana; color: #1b2426;">Agrega desde nuestra tienda virtual los productos que desees comercializar <b style="font-size: 16px; color: blue; font-family: Impact, Charcoal, sans-serif;">sin necesidad de comprarlos</b>, tus clientes podrán adquirirlos a través de tu <b style="font-size: 16px; color: blue; font-family: Impact, Charcoal, sans-serif;">perfil personalizado en línea</b> con la modalidad de pago que ellos estimen conveniente, obtendrás <b style="font-size: 16px; color: blue; font-family: Impact, Charcoal, sans-serif;">atractivas comisiones</b>.</p>';
	
	swal({   
		title: 'Venta por Catálogo',
                text: msgImpPer,
                imageUrl: '../../images/venta-online.png',
                imageWidth: 300,
                imageHeight: 300,
                animation: false,
                confirmButtonColor: '#FFCC00',
		confirmButtonText: '<span style="color: black; font-weight: bold;">Aceptar</span>'
	});
	
    }
</script>
    <div class="row-fluid sortable"> <!-- style="border-style: solid; border-color: red;" -->
        <div class="box span12">
            <div class="box-header" data-original-title>
                <h2 style="font-size: 14px; font-family: Century Gothic,CenturyGothic,AppleGothic,sans-serif; font-weight: bold; color: black;">
                    <i class="halflings-icon edit"></i>
                    <span class="break"></span>Producto
                    <span style="cursor: pointer; color: blue; font-size: 14px; font-family: Century Gothic,CenturyGothic,AppleGothic,sans-serif; 
    font-weight: bold; margin-left: 15px;" onclick="queEncuentroEnCatalogo();">
                        <u>¿CATÁLOGO?</u>
                    </span>
                    <span style="cursor: pointer; color: blue; font-size: 14px; font-family: Century Gothic,CenturyGothic,AppleGothic,sans-serif; 
    font-weight: bold; margin-left: 15px;" onclick="ventaPresencial();">
                        <u>¿VENTA PRESENCIAL?</u>
                    </span>
                    <span style="cursor: pointer; color: blue; font-size: 14px; font-family: Century Gothic,CenturyGothic,AppleGothic,sans-serif; 
    font-weight: bold; margin-left: 15px;" onclick="ventaCatalogo();">
                        <u>¿VENTA POR CATÁLOGO?</u>
                    </span>
                </h2>
                <div class="box-icon">
                    <a href="#" class="btn-minimize"><i class="halflings-icon chevron-up"></i></a>
                </div>
            </div>
            <br>
            <div class="box-content">
                <div id="divProd" class="control-group">
                    <div class="controls">
                        <form class="form-horizontal" id="formPro">
                           <fieldset>
                                <div class="control-group">
                                    <label class="control-label" for="appendedInput"><b>Identificador</b></label>
                                    <div class="controls">
                                        <div class="input-append">
                                            <input id="txtProId" size="30" type="text" maxlength="10" disabled  value="" style="background-color: whitesmoke; box-shadow: 0 0 2px black; margin: 0px 0px 0px 0px; font-weight: bold; color: black; text-align: center; color: black;">
                                        </div>
                                        <span class="help-inline"></span>
                                    </div>
                                </div> 
                                <div class="control-group">
                                    <label class="control-label" for="appendedInput"><b>Nombre</b></label>
                                    <div class="controls">
                                        <div class="input-append">
                                            <input disabled="disabled" id="txtProNom" placeholder="Ingrese nombre producto" type="text" maxlength="100" style="background-color: whitesmoke; box-shadow: 0 0 2px black; margin: 0px 0px 0px 0px; font-weight: bold; color: black; text-align: center; color: black; width: 400px;">
                                        </div>
                                    </div>
                                </div>
                                <div class="control-group">
                                   <label class="control-label" for="appendedInput"><b>Marca</b></label>
                                    <div class="controls">
                                        <div class="input-append">
                                            <input disabled="disabled" id="txtProMar" placeholder="Ingrese marca producto" type="text" maxlength="100" style="background-color: whitesmoke; box-shadow: 0 0 2px black; margin: 0px 0px 0px 0px; font-weight: bold; color: black; text-align: center; color: black; width: 400px;">
                                        </div>
                                    </div>
                                </div>
                                <div id="divCat1" class="control-group"></div>  
                                <div id="divCat2" style="display: none;" class="control-group"></div>  
                                <div id="divCat3" style="display: none;" class="control-group"></div> 
                                <div class="control-group">
                                    <label class="control-label" for="appendedInput"><b>Descripci&oacute;n corta</b></label>
                                    <div class="controls">					
                                        <textarea disabled="disabled" id="proDes" style="background-color: whitesmoke; box-shadow: 0 0 2px black; margin: 0px 0px 0px 0px; font-weight: bold; color: black; color: black; width: 400px; height: 80px;" name="detPro" rows="5" maxlength="100" placeholder="Máximo 100 catacteres!"></textarea>
                                    </div>
                                </div>  
                           </fieldset>
                        </form>     
                    </div>
                </div>
            </div>
            
        </div><!--/span-->
    </div><!--/row-->  
    <div id="conWarning" style="display: none;" class="box-content alerts"></div>
    <br>
    <div style="width: 380px; float: left; margin-left: 170px;" class="row-fluid"><!-- border-style: solid; border-color: red; -->	
<!--        <div id="botonera" class="box span12">-->
            <button type="button" style="border-color: silver; background-color: silver; color: black; font-weight: bold; width: 120px;" class="btn btn-info btn-setting" id="btnEliminar">
                <i class="fa fa-minus-circle"></i>&nbsp;
                Eliminar
            </button>
            <button type="button" style="border-color: silver; background-color: silver; color: black; font-weight: bold; width: 120px;" class="btn" id="btnLimpiar">
                <i class="fa fa-paint-brush"></i>&nbsp;
                Limpiar
            </button>
            <button type="button" style="border-color: silver; background-color: #FFCC00; color: black; font-weight: bold; width: 120px;" class="btn" id="btnCatalogo">
                <i class="fa fa-shopping-cart"></i>&nbsp; 
                Cat&aacute;logo
            </button>
<!--        </div>-->
        <div id="espera" style="display: none; margin-left: 100px; height: 50px; width: 50px; " class="form-actions">
            <h4 class="alert-heading">&nbsp;</h4>
        </div>
    </div>
    
</div>