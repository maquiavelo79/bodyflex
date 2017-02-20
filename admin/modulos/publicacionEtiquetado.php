
<script>
    
    $( document ).ready(function(){
        document.querySelector('button#modalCreaCat').onclick = function(){
                        
            var msg="<p style='color: black; font-size: 16px; font-family: Helvetica, Georgia, Arial, Garamond;'>En esta sección puedes crear una nueva categor&Iacute;a para tu publicación, "; 
            msg+="verifica las categor&iacute;as existentes, si ninguna se corresponde con lo que requieres entonces <br><b style='font-weight: bold;'>crea una nueva<b>.</p>";
            
            swal({
                title: "Crear categoría",
                text: msg,
                type: "warning",
                confirmButtonColor: "#DD6B55",
                html: true,
                animation: false
            });
            
        };
        document.querySelector('button#modalCreaEti').onclick = function(){
            var msg="<p style='color: black; font-size: 16px; font-family: Helvetica, Georgia, Arial, Garamond;'>En esta sección puedes crear una nueva etiqueta para una <b style='font-weight: bold;'>categoría existente<b>.</b></p>";
            swal({
                title: "Crear etiqueta",
                text: msg,
                type: "warning",
                confirmButtonColor: "#DD6B55",
                html: true,
                animation: false
            });
            
        };
        document.querySelector('button#modalInfoEti').onclick = function(){
            var msg="<p style='color: black; font-size: 16px; font-family: Helvetica, Georgia, Arial, Garamond;'>En esta sección puedes asociar un conjunto de etiquetas a tu publicación, si esta ya posee etiquetas, aparecerá el botón llamado <br> <b style='font-weight: bold;'>Volver a etiquetar</b> que al ser presionado eliminará las etiquetas antiguas existentes para que vuelvas a etiquetar.</p>";

            swal({
                title: "Asociar etiqueta",
                text: msg,
                type: "warning",
                confirmButtonColor: "#DD6B55",
                html: true,
                animation: false
            });
            
        };
    }); 
    
    function subCreaCat(){
       $("#modalCreaCat").click();    
    }
    function subCreaEti(){
       $("#modalCreaEti").click();    
    }
    function subInfoEti(){
        
       $("#modalInfoEti").click();    
    }
    
</script>
<style>

    #divMantCantegorias{
        float: left; 
        border-style: solid; 
        border-color: grey; 
        margin-left: 20px; 
        width: 30%; 
        height: 320px;
    }
    #titCreCat{
        margin-top: 20px;
        text-align: center; 
        font-weight: bold; 
        font-size: 22px; 
        font-family: Calibri, Helvetica, Georgia, Arial, Garamond;
    }
    #divMantEtiquetas{
        float: left; 
        border-style: solid; 
        border-color: grey; 
        margin-left: 20px; 
        width: 30%; 
        height: 320px;
    }
    #titCreEti{
        margin-top: 20px;
        text-align: center; 
        font-weight: bold; 
        font-size: 22px; 
        font-family: Calibri, Helvetica, Georgia, Arial, Garamond;
    }
    #titEti{
        margin-top: 20px;
        text-align: center; 
        font-weight: bold; 
        font-size: 22px; 
        font-family: Calibri, Helvetica, Georgia, Arial, Garamond;
    }
    #divEtiquetas{
        float: left; 
        border-style: solid; 
        border-color: grey; 
        width: 30%; 
        margin-left: 40px; 
        height: 320px;
    }
    
</style>




<!-- ETIQUETADO -->
<div id="divEtiquetado" class="row-fluid sortable">
    <div class="box span12">
        <div class="box-header" data-original-title>
            <h2><i class="halflings-icon edit"></i><span class="break"></span>Etiquetado</h2>
            <input id="poseeEti" type="hidden" name="poseeEti" value="0"> <!-- poseeEti = [ 0 | 1 ]--> 
            <div class="box-icon">
                <a href="#" class="btn-minimize"><i class="halflings-icon chevron-up"></i></a>
            </div>
        </div>
        <br>
        <div class="box-content" style="height: 270px;"> <!-- border-style: dashed; border-color: black; -->
            <div id="divEtiquetas" class="box">
                <h1 id="titEti"> Asociar etiquetas </h1>
                <div class="control-group">
                    <div class="controls" style="margin-top: 30px;">
                        <form class="form-horizontal">
                            <input id="etiquetasIngresadas" type='hidden' value="0">
                            <fieldset>
                                <div class="control-group">
                                    <label style="text-align: left; margin-left: 20px;" class="control-label" for="appendedInput"><b>Categorías</b></label>
                                    <div class="controls">
                                        <div class="input-append">
                                            <select id="cmbCat" style="box-shadow: 0 0 2px black; margin: 0px 0px 0px 0px; height: 24px; text-align: center; color: black; font-weight: bold; background-color: whitesmoke; font-size: 12px; text-align: center; color: black;"></select>
                                        </div>
                                    </div>    
                                </div>    
                                <div class="control-group">
                                    <label style="text-align: left; margin-left: 20px;" class="control-label" for="appendedInput"><b>Etiquetas</b></label>
                                    <div class="controls">
                                        <div class="input-append">
                                            <select id="cmbEti" multiple data-rel="chosen"></select>
                                        </div>
                                    </div>    
                                </div>            
                                <div style="margin-top: 40px;"> <!-- class="control-group" -->
                                    <div> <!-- class="controls" style="border-style: solid; border-color: red;"-->
                                        <div class="input-append" style="margin-left: 90px;"> <!-- border-style: solid; border-color: blue; -->
                                            <div id="divBtnEti" style="display: none;"> <!--  -->
                                                <button id="btnReEtiquetar" style="border-color: silver; background-color: #FFCC00; color: black;" class="btn btn-info btn-setting"><b>Re-etiquetar</b></button>
                                            </div>
                                        </div>
                                        <div style="float: right; margin-right: 20px; width: 180px;">
                                            <div id="esperaEti" style="display: none; margin-left: 40px; float: left; height: 50px; width: 50px;">&nbsp;</div>
                                            <div id="divOpe" style="display: none; margin-left: 40px; float: left; height: 50px; width: 50px;"> 
                                                <i id="operacion" class="fa fa-check fa-3x"></i>
                                            </div>
                                            <div id="divInf" style="margin-left: 10px; float: left; height: 50px; width: 50px;">
                                                <i onclick="subInfoEti();" class="fa fa-info-circle fa-3x" style="color: #FFCC00; cursor: pointer;"></i>
                                            </div>    
                                        </div>    
                                    </div>    
                                    <div style="display: none;" id="warningEtiPub" class="box-content alerts"></div>
                                </div>         
                            </fieldset>    
                        </form>    
                    </div>    
                </div>    
            </div>
            <div id="divMantEtiquetas" class="box">
                <h1 id="titCreEti"> Crear etiquetas </h1>
                <div class="control-group">
                    <div class="controls" style="margin-top: 30px;">
                        <form class="form-horizontal">
                           <fieldset>
                                <div class="control-group">
                                    <label style="text-align: left; margin-left: 20px;" class="control-label" for="appendedInput"><b>Categorías</b></label>
                                    <div class="controls">
                                        <div class="input-append">
                                            <select id="cmbSelCat" style="box-shadow: 0 0 2px black; margin: 0px 0px 0px 0px; height: 24px; text-align: center; color: black; font-weight: bold; background-color: whitesmoke; font-size: 12px; text-align: center; color: black;"></select>
                                        </div>
                                        <span class="help-inline"></span>
                                    </div>
                                </div> 
                                <div class="control-group">
                                    <label style="text-align: left; margin-left: 20px;"  class="control-label" for="appendedInput"><b>Etiquetas</b></label>
                                    <div class="controls">
                                        <div class="input-append">
                                            <select id="cmbSelEti" style="box-shadow: 0 0 2px black; margin: 0px 0px 0px 0px; height: 24px; text-align: center; color: black; font-weight: bold; background-color: whitesmoke; font-size: 12px; text-align: center; color: black;"></select>
                                        </div>
                                    </div>
                                </div>
                                <div class="control-group">
                                    <label style="text-align: left; margin-left: 20px;"  class="control-label" for="appendedInput"><b>Nueva Etiqueta</b></label>
                                    <div class="controls">
                                        <div id="divTxtEtiqueta" class="input-append">
                                            <input type="text" id="typeaheadEti"  data-provide="typeahead" style="box-shadow: 0 0 2px black; margin: 0px 0px 0px 0px; height: 15px; text-align: center; color: black; font-weight: bold; background-color: whitesmoke; font-size: 12px; text-align: center; color: black;">
                                        </div>
                                    </div>
                                </div>
                           </fieldset>
                        </form>     
                    </div><p/>
                    <div id="btnCreEti" style="text-align: center;">
                        <button style="margin-bottom: 20px; margin-left: 20px; border-color: silver; background-color: #FFCC00; color: black; font-weight: bold;" type="button" class="btn btn-info btn-setting" id="btnGuardarEti">Agregar</button>
                        <button style="margin-bottom: 20px; margin-left: 20px; border-color: silver; background-color: silver; color: black; font-weight: bold;" type="button" class="btn btn-info btn-setting" id="btnEliminarEtiX">Eliminar</button>
                        <i onclick="subCreaEti();" style="color: #FFCC00; margin-left: 20px; cursor: pointer;" class="fa fa-info-circle fa-3x"></i>
                        <div style="display: none;" id="warningEti" class="box-content alerts"></div>
                    </div>
                </div>
            </div>
            <div id="divMantCantegorias" class="box">
                <h1 id="titCreCat"> Crear categor&iacute;as </h1>
                <div class="control-group">
                    <div class="controls" style="margin-top: 30px;">
                        <form class="form-horizontal">
                           <fieldset>
                                <div class="control-group">
                                    <label style="text-align: left; margin-left: 20px;" class="control-label" for="appendedInput"><b>Categorías</b></label>
                                    <div class="controls">
                                        <div class="input-append">
                                            <select id="cmbAgrCat" style="box-shadow: 0 0 2px black; margin: 0px 0px 0px 0px; height: 24px; text-align: center; color: black; font-weight: bold; background-color: whitesmoke; font-size: 12px; text-align: center; color: black;"></select>
                                        </div>
                                        <span class="help-inline"></span>
                                    </div>
                                </div> 
                                <div class="control-group">
                                    <label style="text-align: left; margin-left: 20px;" class="control-label" for="appendedInput"><b>Nueva Categor&iacute;a</b></label>
                                    <div class="controls">
                                        <div id="divTxtCategorias" class="input-append">
                                            <input type="text" id="typeahead"  data-provide="typeahead" style="box-shadow: 0 0 2px black; margin: 0px 0px 0px 0px; height: 15px; text-align: center; color: black; font-weight: bold; background-color: whitesmoke; font-size: 12px; text-align: center; color: black;">
                                        </div>
                                    </div>
                                </div>
                           </fieldset>
                        </form>     
                    </div><p/>
                    <div id="btnCreCat" style="text-align: center;"> <!-- class="form-actions" -->
                        <button style="margin-bottom: 20px; border-color: silver; background-color: #FFCC00; color: black; font-weight: bold;" type="button" class="btn btn-info btn-setting" id="btnGuardarCat">Agregar</button>
                        <button style="margin-bottom: 20px; margin-left: 20px; border-color: silver; background-color: silver; color: black; font-weight: bold;" type="button" class="btn btn-info btn-setting" id="btnEliminarCatX">Eliminar</button>
                        <i onclick="subCreaCat();" style="color: #FFCC00; margin-left: 20px; cursor: pointer;" class="fa fa-info-circle fa-3x"></i>
                        <div style="display: none;" id="warningCat" class="box-content alerts"></div>
                    </div>
                </div>
            </div>
        </div>
        <!-- alerts -->
    </div>
</div>
<!-- ETIQUETADO -->

<button id="modalCreaCat" style="display: none;">modalCreaCat</button>
<button id="modalCreaEti" style="display: none;">modalCreaEti</button>
<button id="modalInfoEti" style="display: none;">modalInfoEti</button>
<!--
<p style='color: black; font-size: 18px; font-family: Calibri, Helvetica, Georgia, Arial, Garamond;'>En esta sección puedes crear una nueva categor&Iacute;a para tu publicación!.<br>
    Por favor verifica las categor&iacute;as existentes, si ninguna se corresponde con lo que requieres entonces <b>puedes crearla<b></p>-->