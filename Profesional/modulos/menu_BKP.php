<?php if($nivel==1){ ?>
    <header id="header">
        <div class="container">
            <div class="col-sm-4">
                <h1 id="logo">
                    <a class='current' href="./index.php">
                        <img src="../logo/logo.png" alt="Bodyflex"/>
                    </a>
                </h1>
            </div>
            <div class="col-sm-8">
                <nav id="nav">
                    <ul id="navigation" class="group">
                        <li class='current'>
                            <a href="./index.php">Home</a> <!-- class='current'  -->
                            <ul>
                                <li><a href="nosotros.html" target="_blank">Nosotros</a></li>
                                <li><a href="terminos.html" target="_blank">T&eacute;rminos y condiciones</a></li>
                                <li><a href="unete.html" target="_blank">&Uacute;nete a nuestra comunidad</a></li>
                                <li><a href="prodAudioVisual.html" target="_blank">Producción audiovisual</a></li>
                                <li><a href="seguridad.html" target="_blank">Seguridad</a></li>
                                <li><a href="./vista/contactoView.php" target="_blank">Contactanos</a></li>
                            </ul>
                        </li>
                        <li>
                            <a href="./view/publicacionesViewList.php" target="_blank">Publicaciones</a>
                        </li>
                        <li>
                            <a href="./view/entrenadoresListView.php" target="_blank">Profesionales</a>
                        </li>
                        <li>
                            <a href="./view/productosListView.php" target="_blank">Productos</a>
                        </li>
                                                
                        <?php if(isset($_SESSION['sesion'])){ ?>
                            <?php if($_SESSION['sesion']){ ?>
                                <li>
                                    <a href="<?= $_SESSION['url'];?>" target="_blank" style="text-decoration: none;">CPANEL</a>
                                </li>
                            <?php }else{ ?>
                                <li>
                                    <a href="./registroUsuario/vista/registroUsuarioView.php" target="_blank" style="text-decoration: none;">Registrate</a>
                                    <ul>
                                        <li><a href="./recuperaContrasena/vista/recuperaContrasenaView.php" target="_blank" style="text-decoration: none;">Restablecer Clave</a></li>
                                        <li><a href="./recuperaContrasena/vista/ingresaCodigoView.php" target="_blank" style="text-decoration: none;">Ingresar Código</a></li>
                                    </ul>
                                </li>
                            <?php } ?>    
                        <?php } ?>     
                       
                        <li id="mnuCarrito" style="cursor: pointer;">
                            <i class="fa fa-shopping-cart fa-lg"></i>
                        </li>  
                                                         
                    </ul><!-- #navigation -->
                </nav><!-- #nav -->
            </div>
        </div>
    </header>
    <script src="./controller/menu.js"></script>
<?php }else{ ?>
    <header id="header">
        <div class="container">
            <div class="col-sm-4">
                <h1 id="logo">
                    <a class='current' href="../index.php">
                        <img src="../logo/logo.png" alt="Bodyflex"/>
                    </a>
                </h1>
            </div>
            <div class="col-sm-8">
                <nav id="nav">
                    <ul id="navigation" class="group">
                        <li class='current'>
                            <a class='current' href="../index.php">Home</a>
                            <ul>
                                <li><a href="mision.html" target="_blank">Nosotros</a></li>
                                <li><a href="mision.html" target="_blank">T&eacute;rminos y condiciones</a></li>
                                <li><a href="mision.html" target="_blank">&Uacute;nete a nuestra comunidad</a></li>
                                <li><a href="mision.html" target="_blank">Producción audiovisual</a></li>
                                <li><a href="../view/contactoView.php" target="_blank">Contactanos</a></li>
                            </ul>
                        </li>
                        <li>
                            <a href="../view/publicacionesViewList.php" target="_blank">Publicaciones</a>
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
                            <div style="font-size: 12px; font-family: Arial,Helvetica,sans-serif; font-weight: bold;">Carro de compras</div>
                            <div id="itemsCarrito">
                                <div  style="font-size: 10px; font-family: Arial,Helvetica,sans-serif; text-align: right; font-weight: bold;">vac&iacute;o &nbsp;<i class="fa fa-shopping-cart fa-lg"></i></div>
                            </div>
                        </li>  
                        
                    </ul><!-- #navigation -->
                </nav><!-- #nav -->
            </div>
        </div>
        <script src="../controller/menu.js"></script>
    </header>
<?php } ?>

