<style>

#container {
/*    width:100%;*/
    text-align:center;
    height: 270px; 
}

#left {
    float:left;
    width:620px;
    height:260px; 
    border-style: groove; 
    border-color: black;
}

#center {
    display: inline-block;
    margin:0 auto;
    width:620px;
    height: 260px; 
    border-style: groove; 
    border-color: grey;
    overflow-y: scroll;
}

#right {
    float:right;
    width:100px;
    height: 260px; 
    border-style: groove; 
    border-color: grey;
    width:100px;
/*    margin-top: 100px;*/
}

#divConPro{
    
    float:left;
/*    border-style: solid; 
    border-color: red; */
    
}

</style>
<div id="divConPro" class="row-fluid sortable"> <!-- style="border-style: solid; border-color: green;"  -->
    <div class="box span12">
        <div class="box-header" data-original-title>
            <h2 style="font-weight: bold;">
                <i class="halflings-icon edit"></i>
                <span class="break"></span>
                Im&aacute;genes & Videos del Producto
            </h2>
            <div class="box-icon">
                <a href="#" class="btn-minimize"><i class="halflings-icon chevron-up"></i></a>
            </div>
        </div>
        <br>
        <div id="container" class="box-content">
            <div id="left" class="control-group">
                <div class="controls">
                    <form class="form-horizontal">
                        <fieldset>
                            <input type="hidden" id="txtIdConPro" value="0"><br><br>
                            <div id="divTipConPro" class="control-group">
                                <label id="lblConPro"  class="control-label" for="appendedInput"><b>Tipo Contenido</b></label>
                                <div class="controls">
                                    <select disabled="disabled" style="box-shadow: 0 0 2px black; margin: 0px 0px 0px 0px; height: 26px; text-align: center; color: black; font-weight: bold; background-color: whitesmoke; font-size: 14px; text-align: center; width: 360px; text-align: center; color: black;" id="cmbTipConPro">
                                        <option value="">(SELECCIONE)</option>
                                        <option value="IMAGEN">IMAGEN</option>
                                        <option value="VIDEO">VIDEO</option>
                                    </select> 
                                </div>
                            </div>    
                            <div id="divImgDrivePro" class="control-group">
                                <label id="lblImgDrivePro"  class="control-label" for="appendedInput"><b>ID google drive</b></label>
                                <div class="controls">
                                    <div class="input-append">
                                        <input disabled="disabled" placeholder="ej: 0BwscgrEmxbyLYmpOQWhQTDlUMWc" id="txtIdDrivePro" size="16" type="text" maxlength="50" style="box-shadow: 0 0 2px black; margin: 0px 0px 0px 0px; height: 15px; text-align: center; color: black; font-weight: bold; background-color: whitesmoke; font-size: 14px; text-align: center; color: black; width: 350px;">
                                    </div>
                                </div>
                            </div>
                        </fieldset>    
                    </form>    
                    <div id="botoneraCon">
                        <button style="width: 140px; border-color: silver; background-color: #FFCC00; color: black; font-weight: bold; margin-bottom: 20px;" type="button" class="btn" id="btnLimpiarConPro">
                            <i class="fa fa-paint-brush"></i>&nbsp;
                            Limpiar
                        </button>
                    </div>    
                    <div id="conWarningCon" class="box-content alerts" style="display:none;"></div>
                </div>    
            </div>
            <div id="center">
                <table id="a-table-con" class="table table-bordered" style="width: 100%;">
                    <fieldset>
                        <thead>
                            <tr>
                                <th style="height: 8px; width: 15%; text-align: center; font-size: smaller;">ID</th>
                                <th style="height: 8px; width: 15%; text-align: center; font-size: smaller;">Tipo</th>
                                <th style="height: 8px; width: 70%; text-align: center; font-size: smaller;">ID google drive</th>
                            </tr>
                        </thead>   
                        <tbody id="listConPro"></tbody>
                    </fieldset>    
                </table>
                <div id="warningConAso" class="box-content alerts"></div>
            </div>
            <div id="right">
                <i class="fa fa-picture-o fa-4x"></i>
            </div>
        </div>
    </div>
</div>

<!-- Contenido -->