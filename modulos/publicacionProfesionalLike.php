<style type="text/css">
    .contenedor {
        display: table;
        border: 2px solid #000;
        width: 260px;
        text-align: center;
        margin: 0 auto;
        border-color: silver;
    }
    .contenedorEspera {
        display: table;
        width: 260px;
        text-align: center;
        margin: 0 auto;
    }
    .contenidos {
        display: table-row;
    }
    .columna1, .columna2{
        display: table-cell;
        border: 1px solid #000;
        vertical-align: middle;
        padding: 10px;
        border-color: silver;
    }
    
    .columnaEspera{
        display: table-cell;
        vertical-align: middle;
        padding: 10px;
    }
    
</style>
<aside class="widget post-type">
    <h3 class="s-title">¿Te gust&oacute; este artículo?</h3>
    <div class="row">
        <div id="divLike" class="col-sm-12 col-xs-6 item" style="display:none;"> 
            <div class="contenedor">
                <div class="contenidos">
                    <div id="like" onclick="likeClick();" style="cursor: pointer; text-align: center;" class="columna1">
                        <i class="fa fa-thumbs-o-up fa-3x"></i>
                    </div>
                    <div id="unlike" onclick="unlikeClick();" style="cursor: pointer; text-align: center;" class="columna2">
                        <i class="fa fa-thumbs-o-down fa-3x"></i>
                    </div>
                </div>
            </div>
        </div>
        <div id="divEsperaLike" class="contenedorEspera">
            <div class="contenidos">
                <div class="columnaEspera">
                    <div id="espera" class="form-actions" style="height: 48px; text-align: center;">
                        <h4 class="alert-heading">&nbsp;</h4>
                    </div>
                </div>
            </div>    
        </div>    
    </div>
</aside>


         