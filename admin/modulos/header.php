<div class="navbar">
    <div class="navbar-inner">
        <div class="container-fluid">
            <!-- start: Header Menu -->
            <div class="nav-no-collapse header-nav">
                <ul class="nav pull-right">
                    <!-- start: User Dropdown -->
                    <li class="dropdown">
                        <a class="btn dropdown-toggle" data-toggle="dropdown" href="#">
                            <i class="halflings-icon white user"></i> 
                                <?php if(isset($_SESSION['sesion'])){ ?>
                                    <?= $_SESSION['nombre'];?>&nbsp;
                                    <?= $_SESSION['apellido'];?>
                                <?php } ?>    
                            <span class="caret"></span>
                        </a>
                        <ul class="dropdown-menu">
                            <li>
                                <a style="cursor:pointer;" onclick="cerrarSesion();">
                                    <i class="halflings-icon off"></i> 
                                    Cerrar Sesion
                                </a>
                            </li>
                        </ul>
                    </li>
                    <!-- end: User Dropdown -->
                </ul>
            </div>
            <!-- end: Header Menu -->
        </div>
    </div>
</div>