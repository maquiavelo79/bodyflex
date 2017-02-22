<!--
<p style="text-align: center; font-size: 16px; font-family: sans-serif; color: #1b2426;">
    Bodyflex permite que sus profesionales promocionen sus propios productos por medio de su perfil web
</p>
-->

<div style="width: 50%; height: 720px;" class="span7"><!--border-style: solid; border-color: blue;-->
    <style>
        #misProductos{
            cursor: pointer; 
            color: blue; 
            font-size: 14px; 
            font-family: Century Gothic,CenturyGothic,AppleGothic,sans-serif; 
            font-weight: bold;
            margin-left: 20px;
        }
    </style>
    <div class="row-fluid sortable"> <!-- style="border-style: solid; border-color: red;" -->
        <div class="box span12">
            <div class="box-header" data-original-title>
                <h2 style="font-size: 14px; font-family: Century Gothic,CenturyGothic,AppleGothic,sans-serif; font-weight: bold; color: black;">
                    <i class="halflings-icon edit"></i>
                    <span class="break"></span>Mis Productos
                    <span id="misProductos" onclick="misProductos();">
                        <u>¿MIS PRODUCTOS?</u>
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
                                    <label class="control-label" for="appendedInput"><b>Estado producto</b></label>
                                    <div class="controls">
                                        <div class="input-append">
                                            <input id="txtProEst" size="30" type="text" maxlength="100" disabled value="NUEVA" style="background-color: whitesmoke; box-shadow: 0 0 2px black; margin: 0px 0px 0px 0px; font-weight: bold; color: black; text-align: center; color: black;">
                                        </div>
                                    </div>
                                </div>
                                <div class="control-group">
                                    <label class="control-label" for="appendedInput"><b>Condici&oacute;n producto</b></label>
                                    <div class="controls">					
                                        <select id="cmbCon" style="background-color: whitesmoke; box-shadow: 0 0 2px black; margin: 0px 0px 0px 0px; font-weight: bold; color: black; text-align: center; color: black;">
                                            <option value="" selected="">(SELECCIONE)</option>  
                                            <option value="NUEVO">PRODUCTO NUEVO</option>
                                            <option value="USADO">PRODUCTO USADO</option>
                                        </select>
                                    </div>
                                </div>  
                                <div class="control-group">
                                    <label class="control-label" for="appendedInput"><b>Nombre</b></label>
                                    <div class="controls">
                                        <div class="input-append">
                                            <input id="txtProNom" placeholder="Ingrese nombre producto" type="text" maxlength="100" style="background-color: whitesmoke; box-shadow: 0 0 2px black; margin: 0px 0px 0px 0px; font-weight: bold; color: black; text-align: center; color: black; width: 400px;">
                                        </div>
                                    </div>
                                </div>
                               <div class="control-group">
                                   <label class="control-label" for="appendedInput"><b>Marca</b></label>
                                    <div class="controls">
                                        <div class="input-append">
                                            <input id="txtProMar" placeholder="Ingrese marca producto" type="text" maxlength="100" style="background-color: whitesmoke; box-shadow: 0 0 2px black; margin: 0px 0px 0px 0px; font-weight: bold; color: black; text-align: center; color: black; width: 400px;">
                                        </div>
                                    </div>
                                </div>
                                <div class="control-group">
                                    <label class="control-label" for="appendedInput"><b>Precio venta</b></label>
                                    <div class="controls">
                                        <div class="input-append">
                                            <input id="txtProPre" placeholder="Ingrese precio del producto" type="text" maxlength="100" style="background-color: whitesmoke; box-shadow: 0 0 2px black; margin: 0px 0px 0px 0px; font-weight: bold; color: black; text-align: center; color: black;">
                                        </div>
                                    </div>
                                </div>
                                <div class="control-group">
                                    <label class="control-label" for="appendedInput"><b>Precio referencia</b></label>
                                    <div class="controls">
                                        <div class="input-append">
                                            <input id="txtProPreRef" placeholder="Ingrese precio referencia" type="text" maxlength="100" style="background-color: whitesmoke; box-shadow: 0 0 2px black; margin: 0px 0px 0px 0px; font-weight: bold; color: black; text-align: center; color: black;">
                                        </div>
                                    </div>
                                </div>
                                <div id="divCat1" class="control-group"></div>  
                                <div id="divCat2" style="display: none;" class="control-group"></div>  
                                <div id="divCat3" style="display: none;" class="control-group"></div>  
                                <div class="control-group">
                                    <label class="control-label" for="appendedInput"><b>Descripci&oacute;n corta</b></label>
                                    <div class="controls">					
                                        <textarea id="proDes" style="background-color: whitesmoke; box-shadow: 0 0 2px black; margin: 0px 0px 0px 0px; font-weight: bold; color: black; color: black; width: 400px; height: 80px;" name="detPro" rows="5" maxlength="100" placeholder="Máximo 100 catacteres!"></textarea>
                                    </div>
                                </div>  
                           </fieldset>
                        </form>     
                    </div>
                </div>
            </div>
            
        </div><!--/span-->
    </div><!--/row-->  
    
    
</div>