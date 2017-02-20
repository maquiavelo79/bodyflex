<section class="section-review graybg" id="product-review">
    <div class="container">
        <div class="hero-section-header productReviewTitleBAr">
            <h3 class="hero-section-title"><i class="fa fa-2x  fa-comments-o"></i> Opiniones</h3>
            <div id="divPromedio" class="rating commentRating">

            </div>
        </div>
        <div class="row">
            <div class="col-lg-12 review-sortByBar">
                <div class="pull-left">
                    <h4 class="no-margin-no-padding uppercase"><span class="bold" id="numCom">12</span> Comentarios </h4>
                </div>
                <div class="pull-right col-lg-2 no-padding">
                    <select id="cmbOrden" class="form-control">
                        <option value="1" selected>Recientes</option>
                        <option value="2" >Mejor votados</option>
                    </select>
                </div>
            </div>
        </div>
        <div id="msgListCom" style="display: none;"></div>
        <div class="all-review-wrapper wow  fadeIn">
            <div id="comentariosList"></div>
            <div id="botones" class="row">
                <div class="col-lg-12 review-load-more">
                    <div class=" text-center">
                        <a id="masCom" class="btn  btn-default">
                            <i class="fa fa-plus-sign">+</i>Más comentarios
                        </a>
                        <a class="btn  btn-success" data-target="#modal-review" data-toggle="modal">
                            <i class="fa fa-edit"></i> Danos tu opinión!
                        </a>
                    </div>
                </div>
            </div>
        </div>
        <div id="esperaListaCom" style="height: 60px;"></div>
        
    </div>
</section>
<input type="hidden" id="proListComUlt" value="0">
<input type="hidden" id="hayMas" value="">
<!--/.section-review-->

