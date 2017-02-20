
<div style="width: 50%;" class="span7"><!--border-style: solid; border-color: blue; height: 1200px;-->
    
    <div style="width: 680px;" class="row-fluid sortable"> <!-- style="border-style: solid; border-color: red;" -->
        <div class="box span12">
            <div class="box-header" data-original-title>
                <h2>
                    <i class="halflings-icon edit"></i>
                    <span class="break"></span>
                    <b style="font-weight: bold; color: black;">Producto</b>
                </h2>
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
                                    <label class="control-label" for="appendedInput"><b>Estado publicaci&oacute;n</b></label>
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
                                        <span id="icoCon" class="help-inline"><i style="color: red;"class="fa fa-times fa-2x"></i></span>
                                    </div>
                                </div>  
                                <div class="control-group">
                                    <label class="control-label" for="appendedInput"><b>Nombre</b></label>
                                    <div class="controls">
                                        <div class="input-append">
                                            <input id="txtProNom" placeholder="Ingrese nombre producto" type="text" maxlength="100" style="background-color: whitesmoke; box-shadow: 0 0 2px black; margin: 0px 0px 0px 0px; font-weight: bold; color: black; text-align: center; color: black; width: 400px;">
                                        </div>
                                        <span id="icoNom" class="help-inline"><i style="color: red;"class="fa fa-times fa-2x"></i></span>
                                    </div>
                                </div>                              
                                <div class="control-group">
                                    <label class="control-label" for="appendedInput"><b>Marca</b></label>
                                    <div id="divMarcas" class="controls">					
                                        <select id="cmbProMar" style="background-color: whitesmoke; box-shadow: 0 0 2px black; margin: 0px 0px 0px 0px; font-weight: bold; color: black; text-align: center; color: black;">
                                            <option value="0" selected="">(SELECCIONE)</option>  
                                        </select>
                                        <span id="icoMarcas" class="help-inline"><i style="color: red;"class="fa fa-times fa-2x"></i></span>
                                    </div>
                                </div>
                               
                                <div class="control-group">
                                   <label class="control-label" for="appendedInput"><b>Precio Compra</b></label>
                                    <div class="controls">
                                        <div class="input-append">
                                            <input id="txtPreCom" placeholder="Ingrese precio de compra" type="text" maxlength="100" style="background-color: whitesmoke; box-shadow: 0 0 2px black; margin: 0px 0px 0px 0px; font-weight: bold; color: black; text-align: center; color: black; width: 400px;">
                                        </div>
                                        <span id="icoPreCom" class="help-inline"><i style="color: red;"class="fa fa-times fa-2x"></i></span>
                                    </div>
                                </div>
                                
                                <div class="control-group">
                                   <label class="control-label" for="appendedInput"><b>Unidades</b></label>
                                    <div class="controls">
                                        <div class="input-append">
                                            <input id="txtProUma" placeholder="Unidades máximas para venta en línea" type="text" maxlength="2" style="background-color: whitesmoke; box-shadow: 0 0 2px black; margin: 0px 0px 0px 0px; font-weight: bold; color: black; text-align: center; color: black; width: 400px;">
                                        </div>
                                        <span id="icoUma" class="help-inline"><i style="color: red;"class="fa fa-times fa-2x"></i></span>
                                    </div>
                                </div>
                               
                                <div id="divCat1" class="control-group" style=" margin-top: 20px;">
                                    <label class="control-label" for="appendedInput"><b>Categor&iacute;a 1</b></label>
                                    <div class="controls">
                                        <select id="cmbCat1" style="background-color: whitesmoke; box-shadow: 0 0 2px black; margin: 0px 0px 0px 0px; font-weight: bold; color: black;" onchange="getSubCat(2, this.value, 0);" style="text-align: center; color: black;">
                                            <option value="0" selected="">(SELECCIONE)</option>
                                        </select>
                                        <span id="icoCat1" class="help-inline"><i style="color: red;"class="fa fa-times fa-2x"></i></span>
                                    </div>
                                </div>  
                               
                                <div id="divCat2" style="display: none;" class="control-group"></div>  
                                <div id="divCat3" style="display: none;" class="control-group"></div>  
                                
                                <div class="control-group">
                                    <label class="control-label" for="appendedInput"><b>Rango Venta Prof.</b></label>
                                    <div class="controls">					
                                        <select id="cmbRanPrePro" style="background-color: whitesmoke; box-shadow: 0 0 2px black; margin: 0px 0px 0px 0px; font-weight: bold; color: black; text-align: center; color: black;">
                                            <option value="0" selected="">(SELECCIONE)</option>  
                                        </select>
                                        <span id="icoRanPreVtaPro" class="help-inline"><i style="color: red;"class="fa fa-times fa-2x"></i></span>
                                    </div>
                                </div>
                                
                                <div class="control-group">
                                    <label class="control-label" for="appendedInput"><b>Rango Venta Cliente</b></label>
                                    <div class="controls">					
                                        <select id="cmbRanPreCli" style="background-color: whitesmoke; box-shadow: 0 0 2px black; margin: 0px 0px 0px 0px; font-weight: bold; color: black; text-align: center; color: black;">
                                            <option value="0" selected="">(SELECCIONE)</option>  
                                        </select>
                                        <span id="icoRanPreVtaCli" class="help-inline"><i style="color: red;"class="fa fa-times fa-2x"></i></span>
                                    </div>
                                </div>
                                
                                <div class="control-group">
                                    <label class="control-label" for="appendedInput"><b>Descripci&oacute;n corta</b></label>
                                    <div class="controls">					
                                        <textarea id="proDes" style="background-color: whitesmoke; box-shadow: 0 0 2px black; margin: 0px 0px 0px 0px; font-weight: bold; color: black; color: black; width: 400px; height: 80px;" name="detPro" rows="5" maxlength="100" placeholder="Máximo 100 catacteres!"></textarea>
                                        <span id="icoDes" class="help-inline"><i style="color: red;"class="fa fa-times fa-2x"></i></span>
                                    </div>
                                </div>  
                           </fieldset>
                        </form>     
                    </div>
                </div>
            </div>
        </div>
    </div><!--/row-->  
    
    <div style="margin-top: 10px; width: 680px;" class="row-fluid sortable">
        <div class="box span12">
            <div style="height: 90px;" class="box-header" data-original-title>
                <h2 style="display:block;">
                    <i class="fa fa-shopping-bag"></i>
                    <span style="font-weight: bold;" class="break">BODYFLEX</span>
                    <span style="font-weight: bold; font-size: 12px; color: blue;">[BFX Shop]</span>
                    <br><br>
                    <b style="font-size: 12px; font-weight: bold; color: black;">(1) Calcula Precio Neto</b><br> 
                    <b id="tbk" style="font-size: 12px; font-weight: bold; color: black;"></b><br>
                    <b style="font-size: 12px; font-weight: bold; color: black;">(3) Calcula Utilidad Neta Aprox.</b>
                </h2>
                <div id="divActBfx" style="display:none;"><div id="BFX_espera"></div></div>
            </div>
            <br>
            <div class="box-content">
                <div id="divImp" class="control-group">
                    <div class="controls">
                        <span id="icoPV" class="help-inline">
                            <i style="color: red;"class="fa fa-times fa-2x"></i>
                        </span>
                        <div class="input-append" style="margin-left: 60px;">
                            <label style="font-size: 18px; margin-top: 25px; font-weight: bold;">(1)</label>
                        </div>&nbsp;
                        <div class="input-append">
                            <label style="font-weight: bold; font-size: 12px; color: blue;">[Precio Venta]</label>
                            </label> <input id="txtProPreVta" placeholder="Precio de Venta" type="text" maxlength="100" style="background-color: whitesmoke; box-shadow: 0 0 2px black; margin: 0px 0px 0px 0px; font-weight: bold; color: black; text-align: center; color: black; font-size: 18px; font-family: Helvetica, Georgia, Arial, Garamond; width: 150px;">
                        </div>&nbsp;
                        <div class="input-append">
                            <label style="margin-top: 20px; font-size: 18px; font-weight: bold;">(-)</label>
                        </div>&nbsp;
                        <div class="input-append">
                            <label style="font-weight: bold; font-size: 12px; color: blue;">[IVA]</label>
                            <input id="txtProIva" disabled placeholder="IVA" type="text" maxlength="100" style="background-color: bisque; box-shadow: 0 0 2px black; margin: 0px 0px 0px 0px; font-weight: bold; color: black; text-align: center; color: black; font-size: 18px; font-family: Helvetica, Georgia, Arial, Garamond; width: 150px;">
                        </div>&nbsp;
                        <div class="input-append">
                            <label style="margin-top: 20px; font-size: 18px; font-weight: bold;">(=)</label>
                        </div>&nbsp;
                        <div class="input-append">
                            <label style="font-weight: bold; font-size: 12px; color: blue;">[Neto]</label>
                            <input id="txtProPreNet" disabled placeholder="Precio NETO" type="text" maxlength="100" style="background-color: whitesmoke; box-shadow: 0 0 2px black; margin: 0px 0px 0px 0px; font-weight: bold; color: black; text-align: center; color: black; font-size: 18px; font-family: Helvetica, Georgia, Arial, Garamond; width: 150px;">
                        </div>
                    </div>
                    <div class="controls">
                        <div class="input-append" style="margin-left: 60px;">
                            <label style="font-size: 18px; margin-top: 25px; font-weight: bold;">(2)</label>
                        </div>&nbsp;
                        <div class="input-append">
                            <label style="font-weight: bold; font-size: 12px; color: blue;">[Precio Venta]</label>
                            <input id="txtProPreVta2" disabled placeholder="Precio de Venta" type="text" maxlength="100" style="background-color: whitesmoke; box-shadow: 0 0 2px black; margin: 0px 0px 0px 0px; font-weight: bold; color: black; text-align: center; color: black; font-size: 18px; font-family: Helvetica, Georgia, Arial, Garamond; width: 150px;">
                        </div>&nbsp;
                        <div class="input-append">
                            <label style="margin-top: 20px; font-size: 18px; font-weight: bold;">(=)</label>
                        </div>&nbsp;
                        <div class="input-append">
                            <label style="font-weight: bold; font-size: 12px; color: blue;">[$ Comisi&oacute;n TBK]</label>
                            <input id="txtComTra" disabled placeholder="Comisión" type="text" maxlength="100" style="background-color: bisque; box-shadow: 0 0 2px black; margin: 0px 0px 0px 0px; font-weight: bold; color: black; text-align: center; color: black; font-size: 18px; font-family: Helvetica, Georgia, Arial, Garamond; width: 150px;">
                        </div>
                    </div>
                    <div class="controls">
                        <div class="input-append" style="margin-left: 60px;">
                            <label style="font-size: 18px; margin-top: 25px; font-weight: bold;">(3)</label>
                        </div>&nbsp;
                        <div class="input-append">
                            <label style="font-weight: bold; font-size: 12px; color: blue;">[Neto]</label>
                            </label> <input id="txtProPreNet2" placeholder="Precio NETO" type="text" maxlength="100" style="background-color: whitesmoke; box-shadow: 0 0 2px black; margin: 0px 0px 0px 0px; font-weight: bold; color: black; text-align: center; color: black; font-size: 18px; font-family: Helvetica, Georgia, Arial, Garamond; width: 150px;">
                        </div>&nbsp;
                        <div class="input-append">
                            <label style="margin-top: 20px; font-size: 18px; font-weight: bold;">(-)</label>
                        </div>&nbsp;
                        <div class="input-append">
                            <label style="font-weight: bold; font-size: 12px; color: blue;">[$ Comisi&oacute;n TBK]</label>
                            <input id="txtComTra2" disabled placeholder="Comisión" type="text" maxlength="100" style="background-color: bisque; box-shadow: 0 0 2px black; margin: 0px 0px 0px 0px; font-weight: bold; color: black; text-align: center; color: black; font-size: 18px; font-family: Helvetica, Georgia, Arial, Garamond; width: 150px;">
                        </div>&nbsp;
                        <div class="input-append">
                            <label style="margin-top: 20px; font-size: 18px; font-weight: bold;">(=)</label>
                        </div>&nbsp;
                        <div class="input-append">
                            <label style="font-weight: bold; font-size: 12px; color: blue;">[Utilidad (1)]</label>
                            <input id="txtProUtiBfx" disabled placeholder="Utilidad BFX (1)" type="text" maxlength="100" style="background-color: lightgreen; box-shadow: 0 0 2px black; margin: 0px 0px 0px 0px; font-weight: bold; color: black; text-align: center; color: black; font-size: 18px; font-family: Helvetica, Georgia, Arial, Garamond; width: 150px;">
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    
    <div style="width: 680px; margin-top: 10px;" class="row-fluid sortable">
        <div class="box span12">
            <div style="height: 90px;" class="box-header" data-original-title>
                <h2 style="display:block;">
                    <i class="fa fa-child fa-lg"></i>
                    <span style="font-weight: bold;" class="break">PROFESIONAL</span>
                    <span style="font-weight: bold; font-size: 12px; color: blue;">[Presencial]</span>
                    <br><br>
                    <b style="font-size: 12px; font-weight: bold; color: black;">(1) Calcula Precio Neto</b><br> 
                    <b id="tbk2" style="font-size: 12px; font-weight: bold; color: black;"></b><br>
                    <b style="font-size: 12px; font-weight: bold; color: black;">(3) Calcula Utilidad Neta Aprox.</b>
                </h2>
                <div id="divActPro" style="display:none;"><div id="PRO_espera"></div></div>
            </div>
            <br>
            <div class="box-content">
                <div id="divImpP" class="control-group">
                    <div class="controls">
                        <span id="icoPVP" class="help-inline">
                            <i style="color: red;"class="fa fa-times fa-2x"></i>
                        </span>
                        <div class="input-append" style="margin-left: 60px;">
                            <label style="font-size: 18px; margin-top: 25px; font-weight: bold;">(1)</label>
                        </div>&nbsp;
                        <div class="input-append">
                            <label style="font-weight: bold; font-size: 12px; color: blue;">[Precio Venta]</label>
                            <input id="txtPPreVta" placeholder="Precio de Venta" type="text" maxlength="100" style="background-color: whitesmoke; box-shadow: 0 0 2px black; margin: 0px 0px 0px 0px; font-weight: bold; color: black; text-align: center; color: black; font-size: 18px; font-family: Helvetica, Georgia, Arial, Garamond; width: 150px;">
                        </div>&nbsp;
                        <div class="input-append">
                            <label style="margin-top: 20px; font-size: 18px; font-weight: bold;">(-)</label>
                        </div>&nbsp;
                        <div class="input-append">
                            <label style="font-weight: bold; font-size: 12px; color: blue;">[IVA]</label>
                            <input id="txtPIva" disabled placeholder="IVA" type="text" maxlength="100" style="background-color: bisque; box-shadow: 0 0 2px black; margin: 0px 0px 0px 0px; font-weight: bold; color: black; text-align: center; color: black; font-size: 18px; font-family: Helvetica, Georgia, Arial, Garamond; width: 150px;">
                        </div>&nbsp;
                        <div class="input-append">
                            <label style="margin-top: 20px; font-size: 18px; font-weight: bold;">(=)</label>
                        </div>&nbsp;
                        <div class="input-append">
                            <label style="font-weight: bold; font-size: 12px; color: blue;">[Neto]</label>
                            <input id="txtPPreNet" disabled placeholder="Precio NETO" type="text" maxlength="100" style="background-color: whitesmoke; box-shadow: 0 0 2px black; margin: 0px 0px 0px 0px; font-weight: bold; color: black; text-align: center; color: black; font-size: 18px; font-family: Helvetica, Georgia, Arial, Garamond; width: 150px;">
                        </div>
                    </div>
                    <div class="controls">
                        <div class="input-append" style="margin-left: 60px;">
                            <label style="font-size: 18px; margin-top: 25px; font-weight: bold;">(2)</label>
                        </div>&nbsp;
                        <div class="input-append">
                            <label style="font-weight: bold; font-size: 12px; color: blue;">[Precio Venta]</label>
                            <input id="txtPPreVta2" disabled placeholder="Precio de Venta" type="text" maxlength="100" style="background-color: whitesmoke; box-shadow: 0 0 2px black; margin: 0px 0px 0px 0px; font-weight: bold; color: black; text-align: center; color: black; font-size: 18px; font-family: Helvetica, Georgia, Arial, Garamond; width: 150px;">
                        </div>&nbsp;
                        <div class="input-append">
                            <label style="margin-top: 20px; font-size: 18px; font-weight: bold;">(-)</label>
                        </div>&nbsp;
                        <div class="input-append">
                            <label style="font-weight: bold; font-size: 12px; color: blue;">[$ Comisi&oacute;n TBK]</label>
                            <input id="txtCTra" disabled placeholder="Comisión" type="text" maxlength="100" style="background-color: bisque; box-shadow: 0 0 2px black; margin: 0px 0px 0px 0px; font-weight: bold; color: black; text-align: center; color: black; font-size: 18px; font-family: Helvetica, Georgia, Arial, Garamond; width: 150px;">
                        </div>
                    </div>
                    <div class="controls">
                        <div class="input-append" style="margin-left: 60px;">
                            <label style="font-size: 18px; margin-top: 25px; font-weight: bold;">(3)</label>
                        </div>&nbsp;
                        <div class="input-append">
                            <label style="font-weight: bold; font-size: 12px; color: blue;">[Neto]</label>
                            </label> <input id="txtPPreNet2" placeholder="Precio NETO" type="text" maxlength="100" style="background-color: whitesmoke; box-shadow: 0 0 2px black; margin: 0px 0px 0px 0px; font-weight: bold; color: black; text-align: center; color: black; font-size: 18px; font-family: Helvetica, Georgia, Arial, Garamond; width: 150px;">
                        </div>&nbsp;
                        <div class="input-append">
                            <label style="margin-top: 20px; font-size: 18px; font-weight: bold;">(-)</label>
                        </div>&nbsp;
                        <div class="input-append">
                            <label style="font-weight: bold; font-size: 12px; color: blue;">[$ Comisi&oacute;n TBK]</label>
                            <input id="txtCTra2" disabled placeholder="Comisión" type="text" maxlength="100" style="background-color: bisque; box-shadow: 0 0 2px black; margin: 0px 0px 0px 0px; font-weight: bold; color: black; text-align: center; color: black; font-size: 18px; font-family: Helvetica, Georgia, Arial, Garamond; width: 150px;">
                        </div>&nbsp;
                        <div class="input-append">
                            <label style="margin-top: 20px; font-size: 18px; font-weight: bold;">(=)</label>
                        </div>&nbsp;
                        <div class="input-append">
                            <label style="font-weight: bold; font-size: 12px; color: blue;">[Utilidad (2)]</label>
                            <input id="txtProUtiPro" disabled placeholder="Utilidad BFX (2)" type="text" maxlength="100" style="background-color: lightgreen; box-shadow: 0 0 2px black; margin: 0px 0px 0px 0px; font-weight: bold; color: black; text-align: center; color: black; font-size: 18px; font-family: Helvetica, Georgia, Arial, Garamond; width: 150px;">
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    
</div>

