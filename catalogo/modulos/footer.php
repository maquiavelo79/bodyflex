<script src="http://code.jquery.com/jquery-1.11.0.min.js"></script> 
<script>    
jQuery(document).ready(function() {

    var URLdomain   = window.location.host;
    var URLprotocol = window.location.protocol;
  
    //OBTIENE WHATSAPP DE CONTACTO
    $.ajax({
            url: URLprotocol+"//"+URLdomain+"/bodyflex/catalogo/model/proDetCsuContacto2Model.php",
            type:  'post',
            datetype: 'xml',
            async: false,
        success:  function(xml){

            //alert('proDetCsuContacto2Model '+xml);

            var xmlDoc = $.parseXML(xml), $xml = $(xmlDoc);
            var codErr = xmlDoc.getElementsByTagName('CODERROR')[0].childNodes[0].nodeValue;
            var desErr = xmlDoc.getElementsByTagName('DESERROR')[0].childNodes[0].nodeValue;

            switch(codErr){
                case "9":

                    var msg='<div style="text-align:center;" class="alert alert-danger">';
                    msg+='<b><span style="color: black;">' + '[' + codErr + '] ' + desErr + '</span></b>';
                    msg+='</div>';

                    $('#contactoFooter').html(msg);
                    $('#contactoFooter').show();

                    break;

                case "8":

                    var msg='<div style="text-align:center;" class="alert alert-danger">';
                    msg+='<b><span style="color: black;">' + '[' + codErr + '] ' + desErr + '</span></b>';
                    msg+='</div>';

                    $('#contactoFooter').html(msg);
                    $('#contactoFooter').show();

                    break;

                case "99":

                    var msg='<div style="text-align:center;" class="alert alert-danger">';
                    msg+='<b><span style="color: black;">' + '[' + codErr + '] ' + desErr + '</span></b>';
                    msg+='</div>';

                    $('#contactoFooter').html(msg);
                    $('#contactoFooter').show();

                    break;

                case "100":

                    var msg='<div style="text-align:center;" class="alert alert-danger">';
                    msg+='<b><span style="color: black;">' + '[' + codErr + '] ' + desErr + '</span></b>';
                    msg+='</div>';

                    $('#contactoFooter').html(msg);
                    $('#contactoFooter').show();

                    break;    

                case "98":

                    var msg='<div style="text-align:center;" class="alert alert-danger">';
                    msg+='<button type="button" class="close" data-dismiss="alert">×</button>';
                    msg+='<b><span style="color: black;">' + '[' + codErr + '] ' + desErr + '</span></b>';
                    msg+='</div>';

                    $('#contactoFooter').html(msg);
                    $('#contactoFooter').show();
                    break;

                default:

                    var tel = xmlDoc.getElementsByTagName('TELEFONO')[0].childNodes[0].nodeValue;
                    var cor = xmlDoc.getElementsByTagName('CORREO')[0].childNodes[0].nodeValue;
                    
                    var strHtml='<p> Contáctanos por Whatsapp o email </p>';
                    strHtml+='<h4><a class="inline" href="callto:'+tel+'"><strong> <i class="fa fa-phone"> </i> '+ tel +' </strong> </a></h4>';
                    strHtml+='<h4><a class="inline" href="mailto:'+cor+'"><i class="fa fa-envelope-o"></i> '+cor+'</a></h4>';
                    $('#contactoFooter').html(strHtml);
                    break;
                    
            }
        }
    });

        
});
 
function backToCatalogo(){
    var URLdomain   = window.location.host;
    var URLprotocol = window.location.protocol;
    var urlPerfil = URLprotocol+"//"+URLdomain+"/bodyflex/Dashboard/view/catProVtaView.php";
    var form = $('<form action="' + urlPerfil + '" method="post" target="_self"></form>');
    $('body').append(form);
    form.submit();
}
</script>
<footer>
    <div class="footer">
        <div class="container">
            <div class="row">
                <div class="col-lg-3  col-md-3 col-sm-4 col-xs-6">
                    <h3> Soporte </h3>
                    <ul>
                        <li id="contactoFooter" class="supportLi">
                            <p> Contáctanos por Whatsapp o email </p>
                            <h4><a class="inline" href="callto:+12025550151"> <strong> <i class="fa fa-phone"> </i> +1-202-555-0151 </strong> </a></h4>
                            <h4><a class="inline" href="mailto:help@yourweb.com"> <i class="fa fa-envelope-o"> </i> help@yourweb.com </a></h4>
                        </li>
                    </ul>
                </div>
                <div class="col-lg-2  col-md-2 col-sm-4 col-xs-6">
                    <h3> Shop </h3>
                    <ul>
                        <li><a href="#">
                            Men's
                        </a></li>
                        <li><a href="#">
                            Women's</a></li>
                        <li><a href="#">
                            Kids'
                        </a></li>
                        <li><a href="#">Shoes
                        </a></li>
                        <li><a href="#">
                            Gift Cards
                        </a></li>

                    </ul>

                </div>

                <div style="clear:both" class="hide visible-xs"></div>

                <div class="col-lg-2  col-md-2 col-sm-4 col-xs-6">
                    <h3> Information </h3>
                    <ul class="list-unstyled footer-nav">
                        <li><a href="#">Questions?</a></li>
                        <li><a href="#">Order Status</a></li>
                        <li><a href="#">Sizing Charts</a></li>
                        <li><a href="#">Return Policy </a></li>
                        <li><a href="#">Contact Us</a></li>
                    </ul>
                </div>
                <div class="col-lg-2  col-md-2 col-sm-4 col-xs-6">
                    <h3> My Account </h3>
                    <ul>
                        <li><a href="../account.html"> My Account </a></li>
                        <li><a href="../my-address.html"> My Address </a></li>
                        <li><a href="../wishlist.html"> Wish List </a></li>
                        <li><a href="../order-list.html"> Order list </a></li>
                        <li><a href="../order-status.html"> Order Status </a></li>
                    </ul>
                </div>
                <div style="clear:both" class="hide visible-xs"></div>
                <div class="col-lg-3  col-md-3 col-sm-6 col-xs-12 ">
                    <h3> Stay in touch </h3>
                    <ul>
                        <li>
                            <div class="input-append newsLatterBox text-center">
                                <input type="text" class="full text-center" placeholder="Email ">
                                <button class="btn  bg-gray" type="button"> Subscribe <i
                                        class="fa fa-long-arrow-right"> </i></button>
                            </div>
                        </li>
                    </ul>
                    <ul class="social">
                        <li><a href="http://facebook.com"> <i class=" fa fa-facebook"> &nbsp; </i> </a></li>
                        <li><a href="http://twitter.com"> <i class="fa fa-twitter"> &nbsp; </i> </a></li>
                        <li><a href="https://plus.google.com"> <i class="fa fa-google-plus"> &nbsp; </i> </a></li>
                        <li><a href="http://youtube.com"> <i class="fa fa-pinterest"> &nbsp; </i> </a></li>
                        <li><a href="http://youtube.com"> <i class="fa fa-youtube"> &nbsp; </i> </a></li>
                    </ul>
                </div>
            </div>
            <!--/.row-->
        </div>
        <!--/.container-->
    </div>
    <!--/.footer-->

    <div class="footer-bottom">
        <div class="container">
            <p class="pull-left"> &copy; Bodyflex 2016. All right reserved. </p>
            <div class="pull-right paymentMethodImg">
                <img height="30" class="pull-right" src="../images/site/payment/master_card.png" alt="img"> 
                <img height="30" class="pull-right" src="../images/site/payment/visa_card.png" alt="img">
                <img height="30" class="pull-right" src="../images/site/payment/paypal.png" alt="img">
                <img height="30" class="pull-right" src="../images/site/payment/american_express_card.png" alt="img"> 
                <img height="30" class="pull-right" src="../images/site/payment/discover_network_card.png" alt="img">
                <img height="30" class="pull-right" src="../images/site/payment/google_wallet.png" alt="img">
            </div>
        </div>
    </div>
    <!--/.footer-bottom-->
</footer>