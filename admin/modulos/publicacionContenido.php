<script>
    $( document ).ready(function(){
        
        document.querySelector('button#modalAgrCon').onclick = function(){
                        
            var msg="<p style='color: black; font-size: 16px; font-family: Helvetica, Georgia, Arial, Garamond;'>En esta sección pudes agregar <b style='font-weight: bold;'>fotografías</b> o <b style='font-weight: bold;'>videos</b> ingresando su URL. <br><br> Recuerda que la primera imagen que agregues se establecerá como imagen principal del listado de contenidos.</p>"; 
                        
            swal({
                title: "Contenido",
                text: msg,
                type: "warning",
                confirmButtonColor: "#DD6B55",
                html: true,
                animation: false
            });
            
        };
        document.querySelector('button#modalVerCon').onclick = function(){
            
            var msg2='<p style="color: #1b2426;">La imagen corresponde al registro seleccionado.<br>';  
            msg2+='La imagen <b style="font-size: 18px; font-weight: bold;">carga</b> en segundos dependiendo de la velocidad de internet.</p>';  

            var url=$("#txtUrlCon").val();
            
            swal({   
                title: "Imagen en google drive",   
                text: msg2,   
                confirmButtonColor: "#DD6B55;",
                html: true,
                allowOutsideClick: true,
                imageUrl: url,
                imageSize: "400x400",
                animation: false
            });
            
        };
    });
    function subAgrCon(){
       $("#modalAgrCon").click();    
    }
    function getImagen(){
        $("#modalVerCon").click();    
    }
</script>
<style>

    #container {
        width:100%;
        text-align:center;
        height: 270px; 
    }

    #left {
        float:left;
        width:650px;
        height:340px; 
        border-style: groove; 
        border-color: black;
    }

    #center {
        display: inline-block;
        margin:0 auto;
        width:650px;
        height: 340px; 
        border-style: groove; 
        border-color: grey;
        overflow-y: scroll;
    }

    #right {
        float:right;
        width:100px;
        height: 340px; 
        border-style: groove; 
        border-color: grey;
        width:100px;
    }

    #titCon{
        margin-top: 20px;
        text-align: center; 
        font-weight: bold; 
        font-size: 22px; 
        font-family: Calibri, Helvetica, Georgia, Arial, Garamond;
    }

</style>
<!-- Conmtenido -->
<div id="divContenido" class="row-fluid sortable">
    <div class="box span12">
        <div class="box-header" data-original-title>
            <h2><i class="halflings-icon edit"></i><span class="break"></span><b style="color: black;">Contenido</b></h2>
            <div class="box-icon">
                <a href="#" class="btn-minimize"><i class="halflings-icon chevron-up"></i></a>
            </div>
        </div>
        <div id="container" class="box-content">
            <div id="left" class="control-group">
                <h1 id="titCon">Contenido (Fotos / Videos)</h1><br>
                <input type="hidden" id="txtIdCon" value="">
                <div class="controls">
                     <form class="form-horizontal">
                        <fieldset> 
                    
                            <div id="divTipCon" class="control-group">
                                <label id="lblImgDrivePro"  class="control-label" for="appendedInput">Tipo Contenido</label>
                                <select style="background-color: whitesmoke; box-shadow: 0 0 2px black; margin: 0px 0px 0px 0px; font-weight: bold; color: black; width: 350px;" id="cmbTipCon">
                                    <option value="(SELECCIONE)">(SELECCIONE)</option>
                                    <option value="IMAGEN">IMAGEN</option>
                                    <option value="VIDEO">VIDEO</option>
                                </select> 
                            </div>

                            <div id="divImgDrivePro" class="control-group">
                                <label id="lblImgDrivePro"  class="control-label" for="appendedInput">URL (imagen / video)</label>
                                <div class="controls">
                                    <div class="input-append">
                                        <textarea id="txtUrlCon" maxlength="300" rows="5" style="text-align: justify; background-color: whitesmoke; box-shadow: 0 0 2px black; margin: 0px 0px 0px 0px; color: black; color: black; width: 350px;"  placeholder="Pega aqui la URL de la imagen o video."></textarea>
                                    </div>
                                </div>
                            </div>
                            <div id="esperaCon" class="form-actions" style="display: none;">
                                <h4 class="alert-heading">&nbsp;</h4>
                            </div>   
                            <div id="conWarningCon" class="box-content alerts" style="display:none;"></div>
                            <div id="botoneraCon" style="margin-left: 50px;;">
                                <button type="button" style="margin-bottom: 20px; border-color: silver; background-color: #FFCC00; color: black; font-weight: bold;" class="btn btn-info btn-setting" id="btnGuardarCon">Agregar</button> 
                                <button style="margin-bottom: 20px; border-color: silver; background-color: silver; color: black; font-weight: bold;" type="button" class="btn btn-info btn-setting" id="btnEliminarCon">Eliminar</button>
                                <button style="margin-bottom: 20px; border-color: silver; background-color: silver; color: black; font-weight: bold;" type="button" class="btn" id="btnLimpiarCon">Limpiar</button>
                                <i onclick="subAgrCon();" style="color: #FFCC00; margin-left: 20px; cursor: pointer;" class="fa fa-info-circle fa-3x"></i>
                            </div>

                        </fieldset>
                     </form>       
                </div>
            </div>
            <div id="center">
                <table id="a-table-con" class="table table-bordered" style="width: 100%;">
                    <fieldset>
                        <thead>
                            <tr>
                                <th style="width: 10%; text-align: center; font-size: smaller;">ID</th>
                                <th style="width: 10%; text-align: center; font-size: smaller;">Tipo</th>
                                <th style="width: 70%; text-align: center; font-size: smaller;">URL</th>
                            </tr>
                        </thead>   
                        <tbody id="listConAsociadas"></tbody>
                    </fieldset>    
                </table>
                <div id="warningConAso" class="box-content alerts"></div>
            </div>
            <div id="right">
                <i style="margin-top: 100px;"class="fa fa-picture-o fa-4x"></i>
            </div>
        </div>
    </div>
</div>

<!-- Contenido -->
<button id="modalAgrCon" style="display: none;">modalAgrCon</button>
<button id="modalVerCon" style="display: none;">modalVerCon</button>
