<style type="text/css">
    .contenedorSeguir {
        display: table;
        border: 2px solid #000;
        width: 260px;
        text-align: center;
        margin: 0 auto;
        border-color: silver;
    }
    .contenidosSeguir {
        display: table-row;
    }
    .columnaSeguir{
        display: table-cell;
        border: 1px solid #000;
        vertical-align: middle;
        padding: 10px;
        border-color: silver;
    }
</style>

<aside class="widget post-type">
    <h3 class="s-title" style="text-align: center;">Seguir profesional</h3>
    <div class="row"> <!-- style="border-style: solid; border-color: green;" -->
        <div id="divSeguir" class="col-sm-12 col-xs-6 item">
            <div class="contenedorSeguir">
                <div class="contenidosSeguir">
                    <div id="colSeguir" style="height: 48px; text-align: center;" class="columnaSeguir">
                        <button onclick="seguirClick();" style=" width: 150px;" type="button" id="seguir">SEGUIR</button>
                    </div>
                    <div id="colEspera" class="columnaSeguir">
                        <div id="espera" class="form-actions" style="height: 48px; text-align: center;">
                            <h4 class="alert-heading">&nbsp;</h4>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</aside>
