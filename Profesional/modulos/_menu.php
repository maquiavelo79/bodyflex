
<script language="javascript">
    function goHome(){
        var URLdomain   = window.location.host;
        var URLprotocol = window.location.protocol;
        var urlHome = URLprotocol+"//"+URLdomain+"/bodyflex/index.php";    
        window.location.href=urlHome;
    }
    function goPubliaciones(){
        var URLdomain   = window.location.host;
        var URLprotocol = window.location.protocol;
        var urlHome = URLprotocol+"//"+URLdomain+"/bodyflex/view/publicacionesViewList.php";    
        window.location.href=urlHome;
    }
</script>
<header id="header">
    <div class="container">
        <div class="col-sm-4">
            <h1 id="logo">
                <a class='current' onclick="goHome();" style="cursor: pointer;">
                    <img src="../logo/logo.png" alt="Bodyflex"/>
                </a>
            </h1>
        </div>
        <div class="col-sm-8">
            <nav id="nav">
                <ul id="navigation" class="group">
                    <li class='current'>
                        <a class='current' onclick="goHome();" style="cursor: pointer;">Home</a>
                        <ul>
                            <li><a href="mision.html" target="_blank">Nosotros</a></li>
                            <li><a href="mision.html" target="_blank">T&eacute;rminos y condiciones</a></li>
                            <li><a href="mision.html" target="_blank">&Uacute;nete a nuestra comunidad</a></li>
                            <li><a href="mision.html" target="_blank">Producción audiovisual</a></li>
                            <li><a href="../view/contactoView.php" target="_blank">Contactanos</a></li>
                        </ul>
                    </li>
                    <li>
                        <a onclick="goPubliaciones();" target="_blank" style="cursor: pointer;">Publicaciones</a>
                    </li>
                    <li>
                        <a href="../view/entrenadoresListView.php" target="_blank">Profesionales</a>
                    </li>
                    <li>
                        <a href="../view/productosListView.php" target="_blank">Productos</a>
                    </li>

                    <?php if(isset($_SESSION['sesion'])){ ?>
                        <?php if($_SESSION['sesion']){ ?>
                            <li>
                                <a href="<?= $_SESSION['url'];?>" target="_blank">CPANEL</a>
                            </li>
                        <?php }else{ ?>
                            <li>
                                <a href="../registroUsuario/vista/registroUsuarioView.php" target="_blank">Registrate</a>
                                <ul>
                                    <li><a href="../recuperaContrasena/vista/recuperaContrasenaView.php" target="_blank">Restablecer Clave</a></li>
                                    <li><a href="../recuperaContrasena/vista/ingresaCodigoView.php" target="_blank">Ingresar Código</a></li>
                                </ul>
                            </li>
                        <?php } ?>
                    <?php } ?>  

                    <li id="mnuCarrito" style="cursor: pointer;">
                        <a>
                            <div style="font-size: 12px; font-family: Arial,Helvetica,sans-serif; font-weight: bold;">Carro de compras</div>
                            <div id="itemsCarrito">
                                <div  style="font-size: 10px; font-family: Arial,Helvetica,sans-serif; text-align: right; font-weight: bold;">vac&iacute;o &nbsp;<i class="fa fa-shopping-cart fa-lg"></i></div>
                            </div>
                        </a>
                    </li>  

                </ul><!-- #navigation -->
            </nav><!-- #nav -->
        </div>
    </div>
    <script src="../controller/menu.js"></script>
</header>