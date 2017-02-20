<div style="width: 50%; height: 580px;" class="span7"><!--border-style: solid; border-color: blue;-->
    <div class="row-fluid sortable"> <!-- style="border-style: solid; border-color: red;" -->
        <div class="box span12">
            <div class="box-header" data-original-title>
                <h2 style="font-size: 14px; font-family: Century Gothic,CenturyGothic,AppleGothic,sans-serif; font-weight: bold; color: black;">
                    <i class="halflings-icon edit"></i>
                    <span class="break"></span>Profesional
                </h2>
                <div class="box-icon">
                    <a href="#" class="btn-minimize"><i class="halflings-icon chevron-up"></i></a>
                </div>
            </div>
            <br>
            <div class="box-content">
                <div id="divRegPro" class="control-group">
                    <div class="controls">
                        <form class="form-horizontal" id="formPro">
                           <fieldset>
                                <div class="control-group">
                                    <div>
                                        <label class="control-label" for="appendedInput"><b>Identificador</b></label>
                                        <div class="controls">
                                            <div class="input-append">
                                                <input id="proIdPos" size="30" type="text" maxlength="10" disabled  value="" style="width: 300px; background-color: whitesmoke; box-shadow: 0 0 2px black; margin: 0px 0px 0px 0px; font-weight: bold; color: black; text-align: center; color: black;">
                                            </div>
                                        </div>
                                    </div>    
                                    <div>
                                        <label class="control-label" for="appendedInput"><b>Estado</b></label>
                                        <div class="controls">
                                            <div class="input-append">
                                                <input id="proEst" size="30" type="text" maxlength="10" disabled  value="" style="width: 300px; background-color: whitesmoke; box-shadow: 0 0 2px black; margin: 0px 0px 0px 0px; font-weight: bold; color: black; text-align: center; color: black;">
                                            </div>
                                        </div>
                                    </div>    
                                    <div>
                                        <label class="control-label" for="appendedInput"><b>RUT</b></label>
                                        <div class="controls">
                                            <div class="input-append">
                                                <input id="proRut" size="30" type="text" maxlength="10" disabled  value="" style="width: 300px; background-color: whitesmoke; box-shadow: 0 0 2px black; margin: 0px 0px 0px 0px; font-weight: bold; color: black; text-align: center; color: black;">
                                            </div>
                                        </div>
                                    </div>  
                                    <div>
                                        <label class="control-label" for="appendedInput"><b>Nombres</b></label>
                                        <div class="controls">
                                            <div class="input-append">
                                                <input id="proNom" size="30" type="text" maxlength="10" disabled  value="" style="width: 300px; background-color: whitesmoke; box-shadow: 0 0 2px black; margin: 0px 0px 0px 0px; font-weight: bold; color: black; text-align: center; color: black;">
                                            </div>
                                        </div>
                                    </div>  
                                    <div>
                                        <label class="control-label" for="appendedInput"><b>Apellidos</b></label>
                                        <div class="controls">
                                            <div class="input-append">
                                                <input id="proApe" size="30" type="text" maxlength="10" disabled  value="" style="width: 300px; background-color: whitesmoke; box-shadow: 0 0 2px black; margin: 0px 0px 0px 0px; font-weight: bold; color: black; text-align: center; color: black;">
                                            </div>
                                        </div>
                                    </div>  
                                    <div>
                                        <label class="control-label" for="appendedInput"><b>Fecha Nacimiento</b></label>
                                        <div class="controls">
                                            <div class="input-append">
                                                <input id="proFecNac" disabled OnKeyPress="javascript: return solo_fecha(event,value,this);" OnBlur="javascript: sale(this);" style="width: 300px; background-color: whitesmoke; box-shadow: 0 0 2px black; margin: 0px 0px 0px 0px; font-weight: bold; color: black; text-align: center; color: black;" type="text" maxlength="100">
                                            </div>
                                        </div>
                                    </div>  
                                    <div>
                                        <label class="control-label" for="appendedInput"><b>Email</b></label>
                                        <div class="controls">
                                            <div class="input-append">
                                                <input id="proEml" size="30" type="text" maxlength="10" disabled  value="" style="width: 300px; background-color: whitesmoke; box-shadow: 0 0 2px black; margin: 0px 0px 0px 0px; font-weight: bold; color: black; text-align: center; color: black;">
                                            </div>
                                        </div>
                                    </div>  
                                </div> 
                           </fieldset>
                        </form>     
                    </div>
                </div>
                
                <div id="botonera" class="form-actions" style="display: block;">
                    <div class="controls" style="float:left;">
                        <button type="button" style="margin-right: 30px; background-color: #FFCC00; color: black; font-weight: bold; width: 100px;" class="btn btn-info btn-setting" id="btnGuardar">
                            <i class="fa fa-plus-circle fa-ln"></i>&nbsp;
                            Grabar
                        </button>
                    </div>       
                    <div id="regWarning" class="controls" style="float: left; display: none;">
                        <span class="help-inline">
                            <i style="color:green; font-weight: bold;" class="fa fa-check-circle-o fa-3x"></i>
                        </span> 
                        <span class="help-inline">
                            <p style="color: black; font-size: larger;">Modificación exitosa!</p>
                        </span>
                    </div>
                    <div id="espera" style="float: left; display: none; margin-left: 300px; height: 50px; width: 50px; " class="form-actions">
                        <h4 class="alert-heading">&nbsp;</h4>
                    </div>
                </div>
                
            </div>
        </div><!--/span-->
    </div><!--/row-->  
</div>