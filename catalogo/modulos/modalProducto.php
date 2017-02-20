
<button aria-hidden="true" data-dismiss="modal" class="close" type="button"> ×</button>
<div class="col-lg-5 col-md-5 col-sm-5  col-xs-12">
    <!-- product Image -->
    <div id="proImpMod" class="main-image  col-lg-12 no-padding style3"></div>
    <!--/.main-image-->
    <!-- modal-product-thumb-->
    <div id="proImrMod" class="modal-product-thumb"></div>
    <!--/.modal-product-thumb-->
</div>
<!--/ product Image-->


<div class="col-lg-7 col-md-7 col-sm-7 col-xs-12 modal-details no-padding">
    <div class="modal-details-inner">
            <h1 id="proNomMod" class="product-title"><a id="esperaDatos" style="height: 60px; display: block;" class="btn btn-block btn-default"></a></h1>
            <h3 id="proCodMod" class="product-code"></h3>
            <div class="product-price">
                <span id="proPreMod" class="price-sales"></span> 
                <span id="proPraMod" class="price-standard"></span></div>
            <div class="details-description">
                <p id="proDetMod"></p>
            </div>
            
            <div id="proColMod" class="color-details"></div>
            
            <div class="productFilter productFilterLook2">
                <div class="row">
                    <div class="col-lg-6 col-sm-6 col-xs-6">
                        <div id="proCanMod" class="filterBox"></div>
                    </div>
                    <div class="col-lg-6 col-sm-6 col-xs-6">
                        <div id="proMedMod" class="filterBox"></div>
                    </div>
                </div>
            </div>
            <!-- productFilter -->

            <div class="cart-actions">
                <div class="addto row">
                    <div class="col-lg-6">
                        <button class="button btn-block btn-cart cart first" title="Agregar" type="button">
                            Agregar al Carro
                        </button>
                    </div>
                    <div class="col-lg-6">
                        <a onclick="SP_CAT_PRO_SET_CAT();" id="btnCatalogoMod" style="display: block;" class="link-wishlist wishlist btn-block ">Agregar a mi Cat&aacute;logo</a>
                        <a id="esperaAddCatMod" style="height: 60px; display: none;" class="btn btn-block btn-default"></a>
                    </div>
                </div>
            </div>
            <div style="display: none;" id="msgModal" class="alert alert-danger"></div>
            <div class="product-share clearfix">
                <p> SHARE </p>

                <div class="socialIcon">
                    <a href="#"> <i class="fa fa-facebook"></i>
                    </a>
                    <a href="#"> <i class="fa fa-twitter"></i>
                    </a>
                    <a href="#"> <i class="fa fa-google-plus"></i>
                    </a>
                    <a href="#"> <i class="fa fa-pinterest"></i>
                    </a>
                </div>
            </div>
            <!--/.product-share-->
    </div>
    <!--/.modal-details-inner-->
</div>
<!--/.modal-details-->

