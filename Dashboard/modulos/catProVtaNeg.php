<style>

#containerVta{
    text-align:center;
    height: 300px; 
/*    border-style: solid;
    border-color: silver;*/
/*    border-style: solid;
    border-color: blue;*/
}

#leftVta {
    float:left;
    width:640px;
    height:290px; 
    border-style: groove; 
    border-color: black;
    margin-left: 35px;
}

#centerVta{
    display: inline-block;
    margin:0 auto;
    width:670px;
    height: 290px; 
    border-style: groove; 
    border-color: grey;
}

#divConProVta{
    
    float:left;
/*    border-style: solid; 
    border-color: red;*/
    height: 400px;
    margin-bottom: 15px;
    
}


#txtPreVtaPro, #txtPrePorVta, #txtPreVtaBfx, 
#txtCatPreVta, #txtCatIvaVta, #txtCatNetVta, 
#txtCatTbkVta, #txtCatPorVta{
    
    font-family: Century Gothic,CenturyGothic,AppleGothic,sans-serif;
    background-color: whitesmoke; 
    box-shadow: 0 0 2px black; 
    margin: 0px 0px 0px 0px; 
    font-weight: bold; 
    font-size: 20px;
    color: black; 
    text-align: center; 
    color: black; 
    width: 200px;
    
}


#txtPreUtVta, #txtCatUtiVta{
    
    font-family: Impact,Haettenschweiler,Franklin Gothic Bold,Charcoal,Helvetica Inserat,Bitstream Vera Sans Bold,Arial Black,sans serif;
    background-color: whitesmoke; 
    box-shadow: 0 0 2px black; 
    margin: 0px 0px 0px 0px; 
/*    font-weight: bold; */
    font-size: 24px;
    color: black; 
    text-align: center; 
    width: 200px;
    
}


</style>
<div id="divConProVta" class="row-fluid sortable"> <!-- style="border-style: solid; border-color: green;"  -->
    <div class="box-header" data-original-title>
        <h2 style="font-size: 14px; font-family: Century Gothic,CenturyGothic,AppleGothic,sans-serif; font-weight: bold; color: black;">
            <i class="halflings-icon edit"></i>
            <span class="break"></span>Utilidad por Venta presencial y por Perfil del Profesional
        </h2>
        <div class="box-icon">
            <a href="#" class="btn-minimize"><i class="halflings-icon chevron-up"></i></a>
        </div>
    </div>
    <br>
    <div id="containerVta" class="box-content">
        <div id="leftVta" class="control-group">
            <div class="controls">
                <form class="form-horizontal">
                    <h2 style="font-size: 22px; font-family: Impact,Haettenschweiler,Franklin Gothic Bold,Charcoal,Helvetica Inserat,Bitstream Vera Sans Bold,Arial Black,sans serif;">
                        <i class="fa fa-usd fa-lg"></i>
                        <span class="break"></span>
                        Venta Presencial &nbsp;
                        <i onclick="ventaPresencial();" style="cursor: pointer;" class="fa fa-question-circle fa-lg"></i>
                    </h2>
                    <fieldset style="border-style: solid; border-color: black;">
                        <div style="margin-top: 30px;" class="control-group">
                            <div style="margin-top: 8px;">
                                <label class="control-label" for="appendedInput">
                                    <b style="text-align: center;">Precio Bodyflex</b>
                                </label>
                                <div class="controls">
                                    <div class="input-append">
                                        <input id="txtPreVtaBfx" disabled="disabled" type="text" maxlength="100">
                                    </div>
                                    <span class="help-inline">
                                       <i class="fa fa-info-circle fa-2x" style="color: green; cursor: pointer;" onclick="PreVtaBfx()"></i>
                                   </span>
                                </div>
                            </div>    
                            <div style="margin-top: 8px;">
                                <label class="control-label" for="appendedInput">
                                    <b style="text-align: center;">Precio Profesionales</b>
                                </label>
                                <div class="controls">
                                   <div class="input-append">
                                       <input id="txtPreVtaPro" disabled="disabled" type="text" maxlength="100">
                                   </div>
                                   <span class="help-inline">
                                       <i class="fa fa-info-circle fa-2x" style="color: green; cursor: pointer;" onclick="PreVtaPro();"></i>
                                   </span>
                                </div>
                            </div>
                            <div style="margin-top: 8px;">
                                <label class="control-label" for="appendedInput">
                                    <b style="text-align: center;">% Utilidad x Venta</b>
                                </label>
                                <div class="controls">
                                   <div class="input-append">
                                       <input id="txtPrePorVta" disabled="disabled" type="text" maxlength="100">
                                   </div>
                                   <span class="help-inline">
                                       <i class="fa fa-info-circle fa-2x" style="color: green; cursor: pointer;" onclick="PrePorVta();"></i>
                                   </span> 
                                </div>
                            </div>
                            <div style="margin-top: 8px;">
                                <label class="control-label" for="appendedInput">
                                    <b style="text-align: center;">Utilidad Bruta</b>
                                </label>
                                <div class="controls">
                                    <div class="input-append">
                                        <input id="txtPreUtVta" disabled="disabled" type="text" maxlength="100">
                                    </div>
                                    <span class="help-inline">
                                        <i class="fa fa-info-circle fa-2x" style="color: green; cursor: pointer;" onclick="PreUtVta();"></i>
                                    </span>
                                </div>
                            </div>
                        </div>                 
                    </fieldset>
                </form>    
            </div>    
        </div>
        <div id="centerVta">
            <div class="controls">
                <form class="form-horizontal">
                    <h2 style="font-size: 22px; font-family: Impact,Haettenschweiler,Franklin Gothic Bold,Charcoal,Helvetica Inserat,Bitstream Vera Sans Bold,Arial Black,sans serif;">
                        <i class="fa fa-usd"></i>
                        <span class="break"></span>Venta por Perfil &nbsp;
                        <i onclick="ventaPerfil();" style="cursor: pointer;" class="fa fa-question-circle fa-lg"></i>
                    </h2>
                    <fieldset>
                        <div style="margin-top: 8px;" class="control-group">
                            <div>
                                <label class="control-label" for="appendedInput">
                                    <b style="text-align: center;">Precio Bodyflex</b>
                                </label>
                                <div class="controls">
                                    <div class="input-append">
                                        <input id="txtCatPreVta" disabled="disabled" type="text" maxlength="100" >
                                    </div>&nbsp;
                                    <span class="help-inline">
                                        <i class="fa fa-info-circle fa-2x" style="color: green; cursor: pointer;" onclick="PreVtaBfx();"></i>
                                    </span>
                                </div>
                            </div>    
                            <div style="margin-top: 8px;">
                                <label class="control-label" for="appendedInput">
                                     <b style="text-align: center;">IVA</b>
                                </label>
                                <div class="controls">
                                   <div class="input-append">
                                       <input id="txtCatIvaVta" disabled="disabled" type="text" maxlength="100">
                                   </div>&nbsp;
                                   <span class="help-inline">
                                       <i class="fa fa-info-circle fa-2x" style="color: green; cursor: pointer;" onclick="CatIvaVta();"></i>
                                   </span>
                                </div>
                            </div>
                            <div style="margin-top: 8px;">
                                <label class="control-label" for="appendedInput">
                                    <b style="text-align: center;">Precio Neto</b>
                                </label>
                                <div class="controls">
                                   <div class="input-append">
                                       <input id="txtCatNetVta" disabled="disabled" type="text" maxlength="100">
                                   </div>&nbsp;
                                   <span class="help-inline">
                                       <i class="fa fa-info-circle fa-2x" style="color: green; cursor: pointer;" onclick="CatNetVta();"></i>
                                   </span>
                                </div>
                            </div>
                            <div style="margin-top: 8px;">
                                <label class="control-label" for="appendedInput">
                                    <b style="text-align: center;">TBK</b>
                                </label>
                                <div class="controls">
                                    <div class="input-append">
                                        <input id="txtCatTbkVta" disabled="disabled" type="text" maxlength="100">
                                    </div>&nbsp;
                                    <span class="help-inline">
                                        <i class="fa fa-info-circle fa-2x" style="color: green; cursor: pointer;" onclick="CatTbkVta();"></i>
                                    </span>
                                </div>
                            </div>
                            <div style="margin-top: 8px;">
                                <label class="control-label" for="appendedInput">
                                    <b style="text-align: center;">% Comisi&oacute;n</b>
                                </label>
                                <div class="controls">
                                    <div class="input-append">
                                        <input id="txtCatPorVta" disabled="disabled" type="text" maxlength="100">
                                    </div>&nbsp;
                                    <span class="help-inline">
                                        <i class="fa fa-info-circle fa-2x" style="color: green; cursor: pointer;" onclick="CatPorVta();"></i>
                                    </span>
                                </div>
                            </div>
                            <div style="margin-top: 8px;">
                                <label class="control-label" for="appendedInput">
                                    <b style="text-align: center;">$ Comisi&oacute;n</b>
                                </label>
                                <div class="controls">
                                   <div class="input-append">
                                        <input id="txtCatUtiVta" disabled="disabled" type="text" maxlength="100">
                                   </div>&nbsp;
                                   <span class="help-inline">
                                       <i class="fa fa-info-circle fa-2x" style="color: green; cursor: pointer;" onclick="CatUtiVta();"></i>
                                   </span>
                                </div>
                            </div>
                        </div>
                    </fieldset>
                </form>
            </div>    
        </div>
<!--        <div id="rightVta">
            <i class="fa fa-picture-o fa-4x"></i>
        </div>-->
    </div>    

</div>

<!-- Contenido -->