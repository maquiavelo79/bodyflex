<script>
    $( document ).ready(function(){
        document.querySelector('button#modalCreRef').onclick = function(){
                        
            var msg="<p style='color: black; font-size: 16px; font-family: Helvetica, Georgia, Arial, Garamond;'>En esta sección debes indicar la fuente de la información a publicar.</p>"; 
                        
            swal({
                title: "Referencias",
                text: msg,
                type: "warning",
                confirmButtonColor: "#DD6B55",
                html: true,
                animation: false
            });
            
        };
    });
    function subInfoRef(){
       $("#modalCreRef").click();    
    }
</script>
<style>
    #titRef{
        margin-top: 20px;
        text-align: center; 
        font-weight: bold; 
        font-size: 22px; 
        font-family: Calibri, Helvetica, Georgia, Arial, Garamond;
    }
</style>
<!-- REFERENCIAS -->
<div id="divReferencias" class="row-fluid sortable"> <!-- style="border-style: dashed; border-color: black;"-->
    <div class="box span12">  <!-- style="border-style: double; border-color: blue; float: left;"-->
        <div class="box-header" data-original-title>
            <h2><i class="halflings-icon edit"></i><span class="break"></span>Referencias</h2>
            <div class="box-icon">
                <a href="#" class="btn-minimize"><i class="halflings-icon chevron-up"></i></a>
            </div>
        </div>
        <div class="box-content">
            <div style="width: 500px; border-style: solid; border-color: grey;" class="box span6">
                <h1 id="titRef"> Referencias </h1>
                <input type="hidden" id="txtIdRef">
                <div class="control-group" style="margin-left: 40px;">
                    <label class="control-label"><b>Tipo</b></label>
                    <div id="divTipRef" class="controls">
                        <select id="cmbTipRef" style="box-shadow: 0 0 2px black; margin: 0px 0px 0px 0px; height: 28px; text-align: center; color: black; font-weight: bold; background-color: whitesmoke; font-size: 14px; text-align: center; color: black;"></select>
                    </div>
                </div>
                <div class="control-group" style="margin-left: 40px;">
                    <label class="control-label" for=""><b>Referencia</b></label>
                    <div class="controls">
                        <input type="text" id="txtNomRef" style="background-color: whitesmoke; box-shadow: 0 0 2px black; margin: 0px 0px 0px 0px; font-weight: bold; color: black; width: 400px;" placeholder="Nombre del libro, papers, dominio, etc..."> <!-- maxlength="20" -->
                    </div>
                </div>
                <div class="control-group" style="margin-left: 40px;">
                    <label class="control-label" for="textarea2"><b>Descripción</b></label>
                    <div class="controls">
                        <textarea id="txtDesRef" rows="5" style="background-color: whitesmoke; box-shadow: 0 0 2px black; margin: 0px 0px 0px 0px; font-weight: bold; color: black; width: 400px;" 
                        placeholder="Descripción de la fuente de información, URL."></textarea>
                    </div>
                </div>   
                <div id="esperaRef" class="form-actions" style="display: none;">
                    <h4 class="alert-heading">&nbsp;</h4>
                </div>   

                <div id="warRefPub" class="box-content alerts"></div>

                <div id="botoneraRef" style="margin-left: 20%;">
                    <div id="conWarningRef" class="box-content alerts" style="display:none;"></div>
                    <button style="margin-bottom: 20px; border-color: silver; background-color: #FFCC00; color: black; font-weight: bold;" type="button" class="btn btn-info btn-setting" id="btnGuardarRef">Agregar</button>
                    <button style="margin-bottom: 20px; border-color: silver; background-color: silver; color: black; font-weight: bold;" type="button" class="btn btn-info btn-setting" id="btnEliminarRef">Eliminar</button>
                    <button style="margin-bottom: 20px; border-color: silver; background-color: silver; color: black; font-weight: bold;" type="button" class="btn" id="btnLimpiarRef">Limpiar</button>
                    <i onclick="subInfoRef();" style="color: #FFCC00; margin-left: 20px; cursor: pointer;" class="fa fa-info-circle fa-3x"></i>
                </div>
            </div>
            <div style="width:63%; float: right; border-style: groove; border-color: grey;">
                <table id="a-table" class="table table-bordered" style="width: 100%;">
                    <fieldset>
                        <thead>
                            <tr>
                                <th style="width: 10%; text-align: center; font-size: smaller;">Pub. ID</th>
                                <th style="width: 10%; text-align: center; font-size: smaller;">Tipo</th>
                                <th style="width: 10%; text-align: center; font-size: smaller;">Ref. ID</th>
                                <th style="width: 10%; text-align: left; font-size: smaller;">Ref. Nombre</th>
                                <th style="width: 60%; text-align: left; font-size: smaller;">Ref. Descripción</th>
                            </tr>
                        </thead>   
                        <tbody id="listRefAsociadas"></tbody>
                    </fieldset>    
                </table>
                <div id="warningRefAso" class="box-content alerts"></div>
            </div>   
        </div>
    </div>
</div>

<!-- REFERENCIAS -->

<button id="modalCreRef" style="display: none;">modalCreRef</button>