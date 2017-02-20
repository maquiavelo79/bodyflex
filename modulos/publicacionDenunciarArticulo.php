<style type="text/css">
    .contenedorDenuncia {
        display: table;
        border: 2px solid #000;
        width: 260px;
        text-align: center;
        margin: 0 auto;
        border-color: silver;
    }
    .contenidosDenuncia {
        display: table-row;
    }
    .columnaDenuncia{
        display: table-cell;
        border: 1px solid #000;
        vertical-align: middle;
        padding: 10px;
        border-color: silver;
    }
</style>
<aside class="widget post-type">
    <h3 class="s-title" style="text-align: center;">Denunciar art&iacute;culo</h3>
    <div class="row"> <!-- style="border-style: solid; border-color: green;" -->
        <div id="divDenunciar" class="col-sm-12 col-xs-6 item">
            <div class="contenedorDenuncia">
                <div class="contenidosDenuncia">
                    <div id="colDenunciar" style="height: 48px; text-align: center;" class="columnaDenuncia">
                        <button onclick="denunciarPublicacion();" style=" width: 150px;" type="button" id="denunciar">DENUNCIAR</button>
                    </div>
                    <div id="colEsperaDenuncia" class="columnaDenuncia">
                        <div id="espera" class="form-actions" style="height: 48px; text-align: center;">
                            <h4 class="alert-heading">&nbsp;</h4>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</aside>
