
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
                            <a class='current' href="./index.php">Home</a>
                            <ul>
                                <li><a href="mision.html">Nosotros</a></li>
                                <li><a href="mision.html">T&eacute;rminos y condiciones</a></li>
                                <li><a href="mision.html">&Uacute;nete a nuestra comunidad</a></li>
                                <li><a href="./vista/contactoView.php">Contactanos</a></li>
                            </ul>
                        </li>
                        <li>
                            <a href="./vista/blogView.php">Publicaciones</a>
                        </li>
                        <li>
                            <a href="./vista/entrenadoresListView.php">Profesionales</a>
                        </li>
                        <li>
                            <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</p>
                        </li>
                        <li>
                            <h1 id="logo">
                                <img src="./logo/icono_pesa_106x50.png" width="60" height="20" alt="Sesion"/>
                            </h1>
                            <ul>                                  
                                <li><a href=""><?=$_SESSION['nombre']?>&nbsp;<?=$_SESSION['apellido']?></a></li>
                                <li><a href=""><?=$_SESSION['alias']?></a></li>
                                <li><a href=""><?=$_SESSION['email']?></a></li>
                                <li><a href="./modulos/cerrarSesion.php">Cerrar Sesion</a></li>
                            </ul>
                        </li>
                    </ul><!-- #navigation -->
                </nav><!-- #nav -->
            </div>
        </div>
    </header>
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
                                <li><a href="mision.html">Nosotros</a></li>
                                <li><a href="mision.html">T&eacute;rminos y condiciones</a></li>
                                <li><a href="mision.html">&Uacute;nete a nuestra comunidad</a></li>
                                <li><a href="../view/contactoView.php">Contactanos</a></li>
                            </ul>
                        </li>
                        <li>
                            <a href="../view/blogView.php">Publicaciones</a>
                        </li>
                        <li>
                            <a href="../view/entrenadoresListView.php">Profesionales</a>
                        </li>
                        <li>
                            <a href="../registroUsuario/vista/registroUsuarioView.php">Registrate</a>
                            <ul>
                                <li><a href="../recuperaContrasena/vista/recuperaContrasenaView.php">Restablecer Clave</a></li>
                                <li><a href="../recuperaContrasena/vista/ingresaCodigoView.php">Ingresar Código</a></li>
                            </ul>
                        </li>
                        <li>
                            <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</p>
                        </li>
                        <li>
                            <h1 id="logo">
                                <img src="../logo/icono_pesa_106x50.png" width="60" height="20" alt="Sesion"/>
                            </h1>
                            <ul>                                  
                                <li><a href=""><?=$_SESSION['nombre']?>&nbsp;<?=$_SESSION['apellido']?></a></li>
                                <li><a href=""><?=$_SESSION['alias']?></a></li>
                                <li><a href=""><?=$_SESSION['email']?></a></li>
                                <li><a href="./modulos/cerrarSesion.php">Cerrar Sesion</a></li>
                            </ul>
                        </li>
                    </ul><!-- #navigation -->
                </nav><!-- #nav -->
            </div>
        </div>
    </header>
<?php } ?>
