
<?php if($nivel==1){ ?>
    <header id="header">
        <div class="container">
            <div class="col-sm-4">
                <h1 id="logo">
                    <a class='current' href="./index.php">
                        <img src="./logo/logo.png" alt="Bodyflex"/>
                    </a>
                </h1>
            </div>
            <div class="col-sm-8">
                <nav id="nav">
                    <ul id="navigation" class="group">
                        <li class='current'>
                            <a href="./index.php">Home</a> <!-- class='current'  -->
                            <ul>
                                <li><a href="nosotros.html" target="_self">Nosotros</a></li>
                                <li><a href="terminos.html" target="_self">T&eacute;rminos y condiciones</a></li>
                                <li><a href="unete.html" target="_self">&Uacute;nete a nuestra comunidad</a></li>
                                <li><a href="prodAudioVisual.html" target="_self">Producción audiovisual</a></li>
                                <li><a href="seguridad.html" target="_self">Seguridad</a></li>
                                <li><a href="./vista/contactoView.php" target="_self">Contactanos</a></li>
                            </ul>
                        </li>
                        <li>
                            <a href="./view/publicacionesViewList.php" target="_self">Publicaciones</a>
                        </li>
                        <li>
                            <a href="./view/entrenadoresListView.php" target="_self">Profesionales</a>
                        </li>
                        <li>
                            <a href="./view/productosListView.php" target="_self">Productos</a>
                        </li>
                                                
                        <?php if(isset($_SESSION['sesion'])){ ?>
                            <?php if($_SESSION['sesion']){ ?>
                                <li>
                                    <a href="<?= $_SESSION['url'];?>" target="_self" style="text-decoration: none;">CPANEL</a>
                                </li>
                            <?php }else{ ?>
                                <li>
                                    <a href="./registroUsuario/vista/registroUsuarioView.php" target="_self" style="text-decoration: none;">Registrate</a>
                                    <ul>
                                        <li><a href="./recuperaContrasena/vista/recuperaContrasenaView.php" target="_self" style="text-decoration: none;">Restablecer Clave</a></li>
                                        <li><a href="./recuperaContrasena/vista/ingresaCodigoView.php" target="_self" style="text-decoration: none;">Ingresar Código</a></li>
                                    </ul>
                                </li>
                            <?php } ?>    
                        <?php } ?>     
                                
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
                                <li><a href="mision.html" target="_self">Nosotros</a></li>
                                <li><a href="mision.html" target="_self">T&eacute;rminos y condiciones</a></li>
                                <li><a href="mision.html" target="_self">&Uacute;nete a nuestra comunidad</a></li>
                                <li><a href="mision.html" target="_self">Producción audiovisual</a></li>
                                <li><a href="../view/contactoView.php" target="_self">Contactanos</a></li>
                            </ul>
                        </li>
                        <li>
                            <a href="../view/publicacionesViewList.php" target="_self">Publicaciones</a>
                        </li>
                        <li>
                            <a href="../view/entrenadoresListView.php" target="_self">Profesionales</a>
                        </li>
                        <li>
                            <a href="../view/productosListView.php" target="_self">Productos</a>
                        </li>
                        
                        <?php if(isset($_SESSION['sesion'])){ ?>
                            <?php if($_SESSION['sesion']){ ?>
                                <li>
                                    <a href="<?= $_SESSION['url'];?>" target="_self">CPANEL</a>
                                </li>
                            <?php }else{ ?>
                                <li>
                                    <a href="../registroUsuario/vista/registroUsuarioView.php" target="_self">Registrate</a>
                                    <ul>
                                        <li><a href="../recuperaContrasena/vista/recuperaContrasenaView.php" target="_self">Restablecer Clave</a></li>
                                        <li><a href="../recuperaContrasena/vista/ingresaCodigoView.php" target="_self">Ingresar Código</a></li>
                                    </ul>
                                </li>
                            <?php } ?>
                        <?php } ?>  
                                                           
                    </ul><!-- #navigation -->
                </nav><!-- #nav -->
            </div>
        </div>
        <script src="../controller/menu.js"></script>
    </header>
<?php } ?>

