<script>
    
jQuery(document).ready(function() {

    var URLdomain   = window.location.host;
    var URLprotocol = window.location.protocol;
  
   //AJAX
    $.ajax({
            url: URLprotocol+"//"+URLdomain+"/bodyflex/catalogo/model/coleccionesCsuModel.php",
            type:  'post',
            datetype: 'xml',
            async: true,
        success:  function(xml){

            //alert('coleccionesCsuModel '+xml);
            
            $('#esperaColeccion').hide();
            var xmlDoc = $.parseXML(xml), $xml = $(xmlDoc);
            var codErr = xmlDoc.getElementsByTagName('CODERROR')[0].childNodes[0].nodeValue;
            var desErr = xmlDoc.getElementsByTagName('DESERROR')[0].childNodes[0].nodeValue;

            switch(codErr){
                case "9":

                    var msg='<div style="text-align:center;" class="alert alert-danger">';
                    msg+='<b><span style="color: black;">' + '[' + codErr + '] ' + desErr + '</span></b>';
                    msg+='</div>';

                    $('#coleccionesMenu').html(msg);
                    $('#coleccionesMenu').show();
                    break;

                case "8":

                    var msg='<div style="text-align:center;" class="alert alert-danger">';
                    msg+='<b><span style="color: black;">' + '[' + codErr + '] ' + desErr + '</span></b>';
                    msg+='</div>';

                    $('#coleccionesMenu').html(msg);
                    $('#coleccionesMenu').show();
                    break;

                case "99":

                    var msg='<div style="text-align:center;" class="alert alert-danger">';
                    msg+='<b><span style="color: black;">' + '[' + codErr + '] ' + desErr + '</span></b>';
                    msg+='</div>';

                    $('#coleccionesMenu').html(msg);
                    $('#coleccionesMenu').show();
                    break;

                case "100":

                    var msg='<div style="text-align:center;" class="alert alert-danger">';
                    msg+='<b><span style="color: black;">' + '[' + codErr + '] ' + desErr + '</span></b>';
                    msg+='</div>';

                    $('#coleccionesMenu').html(msg);
                    $('#coleccionesMenu').show();
                    break;    

                case "98":

                    var msg='<div style="text-align:center;" class="alert alert-danger">';
                    msg+='<button type="button" class="close" data-dismiss="alert">×</button>';
                    msg+='<b><span style="color: black;">' + '[' + codErr + '] ' + desErr + '</span></b>';
                    msg+='</div>';

                    $('#coleccionesMenu').html(msg);
                    $('#coleccionesMenu').show();
                    break;

                default:

                    //var datos = xmlDoc.getElementsByTagName('DATO')[0].childNodes[0].nodeValue;
                    var menu_links = xmlDoc.getElementsByTagName('MENU_LINKS')[0].childNodes[0].nodeValue;
                    var img_en_menu = xmlDoc.getElementsByTagName('IMG_EN_MENU')[0].childNodes[0].nodeValue;
                    $('#coleccionesMenu').html(menu_links+img_en_menu).trigger('liszt:updated');
                    break;
                    
            }
        }
    });
    
    //OBTENER RELACIÓN COLECCIÓN CATEGORÍA
    $.ajax({
            url: URLprotocol+"//"+URLdomain+"/bodyflex/catalogo/model/csuRelColCatModel.php",
            type:  'post',
            datetype: 'xml',
            async: true,
        success:  function(xml){

            //alert('csuRelColCatModel '+xml);
            
            $('#esperaColeccion').hide();
            var xmlDoc = $.parseXML(xml), $xml = $(xmlDoc);
            var codErr = xmlDoc.getElementsByTagName('CODERROR')[0].childNodes[0].nodeValue;
            var desErr = xmlDoc.getElementsByTagName('DESERROR')[0].childNodes[0].nodeValue;

            switch(codErr){
                case "9":

                    var msg='<div style="text-align:center;" class="alert alert-danger">';
                    msg+='<b><span style="color: black;">' + '[' + codErr + '] ' + desErr + '</span></b>';
                    msg+='</div>';

                    $('#coleccionesMenu').html(msg);
                    $('#coleccionesMenu').show();
                    break;

                case "8":

                    var msg='<div style="text-align:center;" class="alert alert-danger">';
                    msg+='<b><span style="color: black;">' + '[' + codErr + '] ' + desErr + '</span></b>';
                    msg+='</div>';

                    $('#coleccionesMenu').html(msg);
                    $('#coleccionesMenu').show();
                    break;

                case "99":

                    var msg='<div style="text-align:center;" class="alert alert-danger">';
                    msg+='<b><span style="color: black;">' + '[' + codErr + '] ' + desErr + '</span></b>';
                    msg+='</div>';

                    $('#coleccionesMenu').html(msg);
                    $('#coleccionesMenu').show();
                    break;

                case "100":

                    var msg='<div style="text-align:center;" class="alert alert-danger">';
                    msg+='<b><span style="color: black;">' + '[' + codErr + '] ' + desErr + '</span></b>';
                    msg+='</div>';

                    $('#coleccionesMenu').html(msg);
                    $('#coleccionesMenu').show();
                    break;    

                case "98":

                    var msg='<div style="text-align:center;" class="alert alert-danger">';
                    msg+='<button type="button" class="close" data-dismiss="alert">×</button>';
                    msg+='<b><span style="color: black;">' + '[' + codErr + '] ' + desErr + '</span></b>';
                    msg+='</div>';

                    $('#coleccionesMenu').html(msg);
                    $('#coleccionesMenu').show();
                    break;

                default:
                    
                    var HEADER1 = xmlDoc.getElementsByTagName('HEADER1')[0].childNodes[0].nodeValue;
                    var HEADER2 = xmlDoc.getElementsByTagName('HEADER2')[0].childNodes[0].nodeValue;
                    var coleccionMnuColCat = xmlDoc.getElementsByTagName('luList')[0].childNodes[0].nodeValue;
                    $("#coleccionMnuColCat").html(HEADER1+HEADER2+coleccionMnuColCat).trigger('liszt:updated');
                    break;
                    
            }
        }
    });    
        
        
//    $('.tooltipHere').click(function(){
//        alert('WishlistX');
//    });
    
    $( "#coleccionesMenu" ).on( "click", ".itemMenu", function() {
      
        var URLdomain   = window.location.host;
        var URLprotocol = window.location.protocol;
        var urlPerfil = URLprotocol+"//"+URLdomain+"/bodyflex/catalogo/view/proColView.php";
        var id=$(this).attr('id').replace('col_','');
        
        var form = $('<form action="' + urlPerfil + '" method="post" target="_self">' +
            '<input type="hidden" id="id" name="id" value="' + id + '" />' +
            '<input type="hidden" id="id" name="idCat1" value="0" />' +
            '<input type="hidden" id="id" name="idCat2" value="0" />' +
            '<input type="hidden" id="id" name="idCat3" value="0" />' +
            '</form>');
        $('body').append(form);
        form.submit();
        
    });
    
    $( "#coleccionMnuColCat" ).on( "click", ".itemMenu", function() {
      
        var URLdomain   = window.location.host;
        var URLprotocol = window.location.protocol;
        var urlPerfil = URLprotocol+"//"+URLdomain+"/bodyflex/catalogo/view/proColView.php";
        var id=$(this).attr('id').replace('col_','');
        
        var form = $('<form action="' + urlPerfil + '" method="post" target="_self">' +
            '<input type="hidden" id="id" name="id" value="' + id + '" />' +
            '<input type="hidden" id="id" name="idCat1" value="0" />' +
            '<input type="hidden" id="id" name="idCat2" value="0" />' +
            '<input type="hidden" id="id" name="idCat3" value="0" />' +
            '</form>');
        $('body').append(form);
        form.submit();
        
    });
           
});

    function backToHome(){
        var URLdomain   = window.location.host;
        var URLprotocol = window.location.protocol;
        var urlPerfil = URLprotocol+"//"+URLdomain+"/bodyflex/catalogo/view/index.php";
        var form = $('<form action="' + urlPerfil + '" method="post" target="_self"></form>');
        $('body').append(form);
        form.submit();
    }
        
</script>
<div class="navbar-collapse collapse">
            <ul class="nav navbar-nav">
                <li class="active">
                    <a onclick="backToHome();">Home</a>
                </li>
                <li class="dropdown megamenu-fullwidth">
                    <a data-toggle="dropdown" class="dropdown-toggle" href="#"> 
                        COLECCIONES <b class="caret"></b> 
                    </a>
                    <ul class="dropdown-menu">
                        <li id="coleccionesMenu" class="megamenu-content ">
                            
                            <ul class="col-lg-3  col-sm-3 col-md-3 unstyled noMarginLeft newCollectionUl">
                                <li class="no-border">
                                    <p class="promo-1"><strong> NEW COLLECTION </strong></p>
                                </li>
                                <li><a href="category.html"> ALL NEW PRODUCTS </a></li>
                                <li><a href="category.html"> NEW TOPS </a></li>
                                <li><a href="category.html"> NEW SHOES </a></li>
                                <li><a href="category.html"> NEW TSHIRT </a></li>
                                <li><a href="category.html"> NEW TSHOP </a></li>
                            </ul>
                            
                            <ul class="col-lg-3  col-sm-3 col-md-3  col-xs-4">
                                <li>
                                    <a class="newProductMenuBlock" href="../product-details.html"> 
                                        <img class="img-responsive" src="../images/site/promo1.jpg" alt="product"> 
                                        <span class="ProductMenuCaption"> 
                                            <i class="fa fa-caret-right"></i> JEANS 
                                        </span>
                                    </a>
                                </li>
                            </ul>
                            
                            <ul class="col-lg-3  col-sm-3 col-md-3 col-xs-4">
                                <li>
                                    <a class="newProductMenuBlock" href="../product-details.html"> 
                                        <img class="img-responsive" src="../images/site/promo2.jpg" alt="product"> 
                                        <span class="ProductMenuCaption"> 
                                            <i class="fa fa-caret-right"></i> PARTY DRESS 
                                        </span> 
                                    </a>
                                </li>
                            </ul>
                            
                            <ul class="col-lg-3  col-sm-3 col-md-3 col-xs-4">
                                <li>
                                    <a class="newProductMenuBlock" href="../product-details.html"> 
                                        <img class="img-responsive" src="../images/site/promo3.jpg" alt="product"> 
                                        <span class="ProductMenuCaption"> 
                                            <i class="fa fa-caret-right"></i> SHOES 
                                        </span>
                                    </a>
                                </li>
                            </ul>
                        </li>
                    </ul>
                </li>

                <!-- change width of megamenu = use class > megamenu-fullwidth, megamenu-60width, megamenu-40width -->
                <li class="dropdown megamenu-fullwidth">
                    <a data-toggle="dropdown" class="dropdown-toggle" href="#"> 
                        PRODUCTOS <b class="caret"> </b> 
                    </a>
                    <ul id="coleccionMnuColCat" class="dropdown-menu">
<!--                        <li id="coleccionMnuColCat" class="megamenu-content">-->
<!--                        <li class="megamenu-content ProductDetailsList">
                             megamenu-content 
                            <h3 class="promo-1 no-margin hidden-xs">Titulo Header 1</h3>
                            <h3 class="promo-1sub hidden-xs">Titulo Header 2</h3>
                            <ul class="col-lg-2  col-sm-2 col-md-2  unstyled">
                                <li class="no-border"><p><strong> BODY PUMP </strong></p></li>
                                <li class="itemMenu" id="col_2" idcat1="2" idcat2="3" idcat3="0"><a> CALZA </a></li>
                                <li class="itemMenu" id="col_2" idcat1="3" idcat2="2" idcat3="0"><a> BOLSO </a></li>
                            </ul>
                            <ul class="col-lg-2  col-sm-2 col-md-2 unstyled">
                                <li class="no-border"><p><strong> CROSS TRAINING </strong></p></li>
                                <li class="itemMenu" id="col_3" idcat1="2" idcat2="3" idcat3="0"><a> CALZA </a></li>
                                <li class="itemMenu" id="col_3" idcat1="3" idcat2="2" idcat3="0"><a> BOLSO </a></li>
                            </ul>
                            <ul class="col-lg-2  col-sm-2 col-md-2 unstyled">
                                <li class="no-border"><p><strong> POWERLIFTING </strong></p></li>
                                <li class="itemMenu" id="col_4" idcat1="2" idcat2="3" idcat3="0"><a> CALZA </a></li>
                                <li class="itemMenu" id="col_4" idcat1="3" idcat2="2" idcat3="0"><a> BOLSO </a></li>
                            </ul>
                            <ul class="col-lg-2  col-sm-2 col-md-2 unstyled">
                                <li class="no-border"><p><strong> RUNNING </strong></p></li>
                                <li class="itemMenu" id="col_5" idcat1="2" idcat2="3" idcat3="0"><a> CALZA </a></li>
                                <li class="itemMenu" id="col_5" idcat1="3" idcat2="2" idcat3="0"><a> BOLSO </a></li>
                            </ul>
                            <ul class="col-lg-2  col-sm-2 col-md-2 unstyled">
                                <li class="no-border"><p><strong> OFERTAS </strong></p></li>
                                <li class="itemMenu" id="col_6" idcat1="2" idcat2="3" idcat3="0"><a> CALZA </a></li>
                                <li class="itemMenu" id="col_6" idcat1="3" idcat2="2" idcat3="0"><a> BOLSO </a></li>
                            </ul>
                            <ul class="col-lg-2  col-sm-2 col-md-2 unstyled">
                                <li class="no-border"><p><strong> MODA HOMBRE </strong></p></li>
                                <li class="itemMenu" id="col_7" idcat1="3" idcat2="2" idcat3="0"><a> BOLSO </a></li>
                            </ul>
                            <ul class="col-lg-2  col-sm-2 col-md-2 unstyled">
                                <li class="no-border"><p><strong> MODA MUJER </strong></p></li>
                                <li class="itemMenu" id="col_8" idcat1="2" idcat2="3" idcat3="0"><a> CALZA </a></li>
                                <li class="itemMenu" id="col_8" idcat1="3" idcat2="2" idcat3="0"><a> BOLSO </a></li>
                            </ul>
                        </li>-->
<!--                        <li class="megamenu-content ProductDetailsList">
                            <ul class="col-lg-2  col-sm-2 col-md-2 unstyled">
                                <li class="no-border"><p><strong> MODA MUJER </strong></p></li>
                                <li class="itemMenu" id="col_8" idcat1="2" idcat2="3" idcat3="0"><a> CALZA </a></li>
                                <li class="itemMenu" id="col_8" idcat1="3" idcat2="2" idcat3="0"><a> BOLSO </a></li>
                            </ul>
                        </li>-->
                    </ul>
                </li>
                <li class="dropdown megamenu-fullwidth"><a data-toggle="dropdown" class="dropdown-toggle" href="#">
                    PAGES <b class="caret"> </b> </a>
                    <ul class="dropdown-menu">
                        <li class="megamenu-content ProductDetailsList">

                            <!-- remove .ProductDetailsList class from megamenu-content || this class for demo uses only -->

                            <!-- megamenu-content -->

                            <h3 class="promo-1 no-margin hidden-xs">60 + HTML PAGES || AVAILABLE ONLY AT WRAP
                                BOOTSTRAP </h3>

                            <h3 class="promo-1sub hidden-xs"> Complete Parallax E-Commerce Boostrap Template, Responsive
                                on any Device, 10+ color Theme + Parallax Effect </h3>

                            <ul class="col-lg-2  col-sm-2 col-md-2 unstyled">
                                <li class="no-border">
                                    <p><strong> Home Pages </strong></p>
                                </li>
                                <li><a href="../index.html"> Home Version 1 </a></li>
                                <li><a href="../index2.html"> Home Version 2 </a></li>
                                <li><a href="../index3.html"> Home Version 3 (BOXES) </a></li>
                                <li><a href="../index4.html"> Home Version 4 (LOOK 2)</a></li>
                                <li><a href="../index5.html"> Home Version 5 (LOOK 3)</a></li>
                                <li><a href="../index6.html"> Home Version 6 (STORY)</a></li>
                                <li><a href="../index-v-7.html"> Home Version 7 (Flat) <span class="label label-success">new</span></a>
                                </li>
                                <li><a href="../index-header2.html"> Header Version 2 </a></li>
                                <li><a href="../index-header3.html"> Header Version 3 </a></li>
                                  <li><a href="../index-logged-in.html">Topbar Logged In user menu <span
                                        class="label label-success">new</span></a></li>
                                <li><a href="../sidebar-shopping-cart.html">Sidebar Shopping cart <span
                                        class="label label-success">new</span></a></li>
                            </ul>

                            <ul class="col-lg-2  col-sm-2 col-md-2 unstyled">
                                <li class="no-border">
                                    <p><strong> Featured Pages </strong></p>
                                </li>
                                <li><a href="../category.html"> Category </a></li>
                                <li><a href="../category2.html"> Category Style 2 [Parallax] </a></li>
                                <li><a href="../sub-category.html"> Sub Category </a></li>
                                <li><a href="../category-list.html"> Category List View </a></li>
                                <li><a href="../category-product-hover.html"> Category [Product Hover] </a></li>
                                <li><a href="../category-product-slide.html"> Category [Product Slide] </a></li>

                                <li><a href="../cart.html"> Cart </a></li>
                                <li><a href="../about-us-3.html"> About Us V3 <span
                                        class="label label-success">NEW</span> </a></li>
                                <li><a href="../about-us-2.html"> About Us V2 </a></li>
                                <li><a href="../about-us.html"> About Us V1 </a></li>
                                <li><a href="../contact-us.html"> Contact us </a></li>
                                <li><a href="../contact-us-2.html"> Contact us 2 (No Fixed Map) </a></li>
                                <li><a href="../terms-conditions.html"> Terms &amp; Conditions </a></li>

                            </ul>

                            <ul class="col-lg-3  col-sm-3 col-md-3 unstyled ">
                                <li class="no-border">
                                    <p><strong> Product Details </strong></p>
                                </li>
                                <li><a href="../product-details.html"> Product Details v1 </a></li>
                                <li><a href="../product-details-style2.html"> Product Details v 2 </a></li>
                                <li><a href="../product-details-style3.html"> Product Details v 3 (Custom Thumbnail
                                    Position)</a></li>
                                <li><a href="../product-details-style4.html"> Product Details v 4 (with litebox)</a></li>


                                <li><a href="../product-details-style5.html"> Product Details v 5 (Flat) <span
                                        class="label label-success">NEW</span> </a></li>
                                <li><a href="../product-details-style5-1.html"> Product Details v 5.1 <span
                                        class="label label-success">NEW</span> </a></li>
                                <li><a href="../product-details-style5-2.html"> Product Details v 5.2 <span
                                        class="label label-success">NEW</span> </a></li>
                                <li><a href="../product-details-style5-3.html"> Product Details v 5.3 <span
                                        class="label label-success">NEW</span> </a></li>
                                <li><a href="../product-details-style5-3-fadein.html"> Product Details v 5.3.1
                                    <small>(fadein)</small> <span
                                            class="label label-success">NEW</span> </a></li>
                                <li><a href="../product-details-style5-4.html"> Product Details v 5.4  <span
                                        class="label label-success">NEW</span> </a></li>
                                <li><a href="../product-details-style5-4.1-popup-video.html"> Product Details v 5.4.1
                                    <small>(popup video)</small><span
                                            class="label label-success">NEW</span> </a></li>
                                <li><a href="../product-details-style5-4.1-with-zoom.html"> Product Details v 5.4.1
                                    <small>(zoom + litebox)</small> <span
                                            class="label label-success">NEW</span></a></li>

                            </ul>
                            <ul class="col-lg-2  col-sm-2 col-md-2 unstyled">
                                <li class="no-border">
                                    <p><strong> Checkout </strong></p>
                                </li>
                                <li><a href="../checkout-0.html"> Checkout Before </a></li>
                                <li><a href="../checkout-1.html"> checkout step 1 </a></li>
                                <li><a href="../checkout-2.html"> checkout step 2 </a></li>
                                <li><a href="../checkout-3.html"> checkout step 3 </a></li>
                                <li><a href="../checkout-4.html"> checkout step 4 </a></li>
                                <li><a href="../checkout-5.html"> checkout step 5 </a></li>
                                <li><a href="../one-page-checkout.html"> One page checkout <span
                                        class="label label-success">NEW</span> </a></li>
                                <li><a href="../thanks-for-order.html"> Thanks for order</a></li>
                            </ul>
                            <ul class="col-lg-1  col-sm-1 col-md-1 no-padding unstyled">
                                <li class="no-border">
                                    <p><strong> User Account </strong></p>
                                </li>
                                <li><a href="../account-1.html"> Account Login </a></li>
                                <li><a href="../account.html"> My Account </a></li>
                                <li><a href="../my-address.html"> My Address </a></li>
                                <li><a href="../user-information.html"> User information </a></li>
                                <li><a href="../wishlist.html"> Wish List </a></li>
                                <li><a href="../order-list.html"> Order list </a></li>
                                <li><a href="../order-status.html"> Order Status </a></li>
                                <li><a href="../forgot-password.html"> Forgot Password </a></li>
                            </ul>
                            <ul class="col-lg-2  col-sm-2 col-md-2 unstyled">
                                <li class="no-border">
                                    <p><strong> &nbsp; </strong></p>
                                </li>
                                <li><a href="../blog.html"> Blog </a></li>
                                <li><a href="../blog-details.html"> Blog Details </a></li>
                                <li><a href="../single-product-modal.html"> Single Product Details Modal</a></li>
                                <li><a href="../single-subscribe-modal.html"> Single Subscribe Modal</a></li>
                                <li><a href="../error-page.html"> Error Page </a></li>
                                <li><a href="../blank-page.html"> Blank Page </a></li>   <li><a href="form.html"> Basic Form Element </a></li>
                            </ul>
                        </li>
                    </ul>
                </li>
                <li><a href="../all-page-link.html" target="_blank"> All Page Link </a></li>
            </ul>
            </ul>
            
            <?php include("../modulos/cart.php"); ?>
            
        </div>