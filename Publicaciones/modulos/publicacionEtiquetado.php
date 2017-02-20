
<script>
        
    function subCreaCat(){
      
        var msgVtaPre='<p style="text-align: justify; font-family: Verdana;  font-size: 16px; color: #1b2426;">En esta sección puedes crear una nueva categoría de etiquetas para tu publicación, verifica las categorías existentes, si ninguna se corresponde con lo que requieres entonces <b style="font-size: 16px; color: blue; font-family: Impact, Charcoal, sans-serif;">crea una nueva categoría de etiquetas</b></p>';                  
        swal({   
            title: 'Nueva Categoría',   
            html: msgVtaPre,   
            type: "info", 
            allowOutsideClick: true,
            animation: true,
            confirmButtonColor: '#FFCC00',
            confirmButtonText: '<span style="color: black; font-weight: bold;">Aceptar</span>'
        });
        
    }
    
    function subCreaEti(){
    
        var msgVtaPre='<p style="text-align: center; font-family: Verdana; font-size: 16px; color: #1b2426;">En esta sección puedes crear una <br>';
        msgVtaPre+='<b style="font-size: 24px; color: blue; font-family: Impact, Charcoal, sans-serif;">nueva etiqueta</b><br>para una categoría existente</p>';                  
        swal({   
            title: 'Nueva Etiqueta',   
            html: msgVtaPre,   
            type: "info", 
            allowOutsideClick: true,
            animation: true,
            confirmButtonColor: '#FFCC00',
            confirmButtonText: '<span style="color: black; font-weight: bold;">Aceptar</span>'
        });
        
    }
    function subInfoEti(){
   
        var msgVtaPre='<ul style="text-align: left; font-size: 16px; font-family: Verdana; color: #1b2426;">';
	msgVtaPre+='<li><p style="text-align: justify; font-size: 16px; font-family: Verdana; color: #1b2426;">En esta sección puedes asociar etiquetas a tu publicación.</p></li><br>';
	msgVtaPre+='<li><p style="text-align: justify; font-size: 16px; font-family: Verdana; color: #1b2426;">Si la publicación ya posee etiquetas asociadas aparecera el botón llamado <b style="font-size: 18px; color: blue; font-family: Impact, Charcoal, sans-serif;">Re-etiquetar</b>, al presionarlo eliminará las etiquetas asocoiadas para volver a etiquetar.</p></li>';
        msgVtaPre+='</ul>';

        swal({   
            title: 'Asociar Etiquetas',   
            html: msgVtaPre,   
            type: "info", 
            allowOutsideClick: true,
            animation: true,
            confirmButtonColor: '#FFCC00',
            confirmButtonText: '<span style="color: black; font-weight: bold;">Aceptar</span>'
        });    
        
    }
    
    function whyLabels(){

        var msgImpPer='El objetivo principal de una publicacion es compartir información relevante que pueda ser de utilidad para el resto de la comunidad, las etiquetas permiten una fácil y rápida identificación de la publicación por parte de un usuario en base a conceptos simples, cortos y precisos (Etiquetas).';
        swal({   
            title: 'Asociar Etiquetas',   
            html: msgImpPer,   
            type: "info", 
            allowOutsideClick: true,
            animation: true,
            width: '600px',
            confirmButtonColor: '#FFCC00',
            confirmButtonText: '<span style="color: black; font-weight: bold;">Aceptar</span>'
        });
		
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
    
    .informativo{
        cursor: pointer; 
        color: blue; 
        font-size: 14px; 
        font-family: Century Gothic,CenturyGothic,AppleGothic,sans-serif; 
        font-weight: bold;
    }
    
</style>

<!-- ETIQUETADO -->
<div id="divEtiquetado" class="row-fluid sortable">
    <div class="box span12">
        <div class="box-header" data-original-title>
            <h2 class="titH2">
                <i class="halflings-icon edit"></i>
                <span class="break"></span>
                Etiquetado
            </h2>
            <input id="poseeEti" type="hidden" name="poseeEti" value="0"> <!-- poseeEti = [ 0 | 1 ]--> 
        </div>
        <br>
        <div class="box-content" style="height: 270px;"> <!-- border-style: dashed; border-color: black; -->
               
            <div id="divEtiquetas" class="box">
                <h1 id="titEti"> 
                    Asociar etiquetas 
                    <div id="divInf" style="float: right; margin-right: 30px;">
                        <i onclick="subInfoEti();" class="fa fa-info-circle fa-2x" style="color: green; cursor: pointer;"></i>
                    </div>  
                    <br>
                    <span onclick="whyLabels();" class="informativo">
                        <u>¿Para qu&eacute; asociar etiquetas?</u>
                    </span>
                </h1> 
                <div class="control-group">
                    <div class="controls" style="margin-top: 15px;">
                        <form class="form-horizontal">
                            <input id="etiquetasIngresadas" type='hidden' value="0">
                            <fieldset>
                                <div style="margin-top: 8px;">
                                    <label style="text-align: left; margin-left: 20px;" class="control-label" for="appendedInput"><b>Categorías</b></label>
                                    <div class="controls">
                                        <div class="input-append">
                                            <select id="cmbCat" style="box-shadow: 0 0 2px black; margin: 0px 0px 0px 0px; height: 24px; text-align: center; color: black; font-weight: bold; background-color: whitesmoke; font-size: 12px; text-align: center; color: black;"></select>
                                        </div>
                                    </div>    
                                </div>    
                                <div style="margin-top: 8px;">
                                    <label style="text-align: left; margin-left: 20px;" class="control-label" for="appendedInput"><b>Etiquetas</b></label>
                                    <div class="controls">
                                        <div class="input-append">
                                            <select id="cmbEti" multiple data-rel="chosen"></select>
                                        </div>
                                    </div>    
                                </div>            
                                <div style="margin-top: 8px; margin-left: 10px;"> 
            
                                    <div id="divBtnEti" style="float: left;">
                                        <button id="btnReEtiquetar" style="border-color: silver; background-color: #FFCC00; color: black;" class="btn btn-info btn-setting">
                                            <b>Re-etiquetar</b>
                                        </button>
                                    </div>

                                    <div style="display:none; float: right; margin-left: 70px; border-style: solid; border-color: red;">
                                        <div id="esperaEti" style="display: block; height: 40px; width: 40px;">&nbsp;</div>
                                    </div>
            
                                </div>
                                <div>
                                    <div style="display: none;" id="warningEtiPub" class="box-content alerts"></div>
                                </div>         
                            </fieldset>    
                        </form> 
                    </div>		
                </div>    
            </div>  
            <div id="divMantEtiquetas"><!-- class="box" -->
                <h1 id="titCreEti"> 
                    Crear etiquetas 
                </h1>
                <div class="control-group">
                    <div class="controls" style="margin-top: 25px;">
                        <form class="form-horizontal">
                           <fieldset>
                                <div style="margin-top: 8px;">
                                    <label style="text-align: left; margin-left: 20px;" class="control-label" for="appendedInput"><b>Categorías</b></label>
                                    <div class="controls">
                                        <div class="input-append">
                                            <select id="cmbSelCat" style="box-shadow: 0 0 2px black; margin: 0px 0px 0px 0px; height: 24px; text-align: center; color: black; font-weight: bold; background-color: whitesmoke; font-size: 12px; text-align: center; color: black;"></select>
                                        </div>
                                        <span class="help-inline"></span>
                                    </div>
                                </div> 
                                <div style="margin-top: 8px;">
                                    <label style="text-align: left; margin-left: 20px;"  class="control-label" for="appendedInput"><b>Etiquetas</b></label>
                                    <div class="controls">
                                        <div class="input-append">
                                            <select id="cmbSelEti" style="box-shadow: 0 0 2px black; margin: 0px 0px 0px 0px; height: 24px; text-align: center; color: black; font-weight: bold; background-color: whitesmoke; font-size: 12px; text-align: center; color: black;"></select>
                                        </div>
                                    </div>
                                </div>
                                <div style="margin-top: 8px;">
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
                        <button style="margin-bottom: 20px; margin-left: 20px; border-color: silver; background-color: #FFCC00; color: black; font-weight: bold;" type="button" class="btn btn-info btn-setting" id="btnGuardarEti">
                            <i class="fa fa-plus-circle"></i>&nbsp;
                            Agregar
                        </button>
                        <button style="margin-bottom: 20px; margin-left: 20px; border-color: silver; background-color: silver; color: black; font-weight: bold;" type="button" class="btn btn-info btn-setting" id="btnEliminarEtiX">
                            <i class="fa fa-minus-circle"></i>&nbsp;
                            Eliminar
                        </button>
                        <i onclick="subCreaEti();" style="color: green; margin-left: 20px; cursor: pointer;" class="fa fa-info-circle fa-2x"></i>
                        <div style="display: none;" id="warningEti" class="box-content alerts"></div>
                    </div>
                </div>
            </div>
            <div id="divMantCantegorias"> <!-- class="box" -->
                <h1 id="titCreCat"> 
                    Crear categor&iacute;as
                </h1>
                <div class="control-group">
                    <div class="controls" style="margin-top: 25px;">
                        <form class="form-horizontal">
                           <fieldset>
                                <div style="margin-top: 8px;">
                                    <label style="text-align: left; margin-left: 20px;" class="control-label" for="appendedInput"><b>Categorías</b></label>
                                    <div class="controls">
                                        <div class="input-append">
                                            <select id="cmbAgrCat" style="box-shadow: 0 0 2px black; margin: 0px 0px 0px 0px; height: 24px; text-align: center; color: black; font-weight: bold; background-color: whitesmoke; font-size: 12px; text-align: center; color: black;"></select>
                                        </div>
                                        <span class="help-inline"></span>
                                    </div>
                                </div> 
                                <div style="margin-top: 8px;">
                                    <label style="text-align: left; margin-left: 20px;" class="control-label" for="appendedInput"><b>Nueva Categor&iacute;a</b></label>
                                    <div class="controls">
                                        <div id="divTxtCategorias" class="input-append">
                                            <input type="text" id="typeahead"  data-provide="typeahead" style="box-shadow: 0 0 2px black; margin: 0px 0px 0px 0px; height: 15px; text-align: center; color: black; font-weight: bold; background-color: whitesmoke; font-size: 12px; text-align: center; color: black;">
                                        </div>
                                    </div>
                                </div>
                           </fieldset>
                        </form> 
                        <div id="warningCat" style="display: none;" class="box-content alerts"></div>
                    </div>
                    <div id="btnCreCat" style="text-align: center;">
                        <button style="margin-bottom: 20px; border-color: silver; background-color: #FFCC00; color: black; font-weight: bold;" type="button" class="btn btn-info btn-setting" id="btnGuardarCat">
                            <i class="fa fa-plus-circle"></i>&nbsp;
                            Agregar
                        </button>
                        <button style="margin-bottom: 20px; margin-left: 20px; border-color: silver; background-color: silver; color: black; font-weight: bold;" type="button" class="btn btn-info btn-setting" id="btnEliminarCatX">
                            <i class="fa fa-minus-circle"></i>&nbsp;
                            Eliminar
                        </button>
                        <i onclick="subCreaCat();" style="color: green; margin-left: 20px; cursor: pointer;" class="fa fa-info-circle fa-2x"></i>
                    </div>
                </div>
            </div>
        </div>
        <!-- alerts -->
    </div>
</div>
<!-- ETIQUETADO -->

<!--
<p style='color: black; font-size: 18px; font-family: Calibri, Helvetica, Georgia, Arial, Garamond;'>En esta sección puedes crear una nueva categor&Iacute;a para tu publicación!.<br>
    Por favor verifica las categor&iacute;as existentes, si ninguna se corresponde con lo que requieres entonces <b>puedes crearla<b></p>-->