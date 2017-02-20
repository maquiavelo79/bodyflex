<!-- start: Main Menu -->
<div id="sidebar-left" class="span2">
    <div class="nav-collapse sidebar-nav">
        <ul class="nav nav-tabs nav-stacked main-menu">
            <li>
                <a href="../../../bodyflex/Dashboard/index.php">
                    <i class="icon-bar-chart"></i>
                    <span style="color: #FFCC00;" class="hidden-tablet">Dashboard</span>
                </a>
            </li>
            <li>
                <a class="dropmenu" href="#">
                    <i class="icon-folder-open"></i>
                    <span style="color: #FFCC00;" class="hidden-tablet">Mis datos</span>
                    <span style="color: #FFCC00;" class="label label-important">4</span>
                </a>
                <ul>
                    <li>
                        <a href="../../../bodyflex/Dashboard/view/regProView.php">
                            <i class="fa fa-database"></i>
                            <span style="color: #FFCC00;" class="hidden-tablet">&nbsp;Datos</span>
                        </a>
                    </li>
                    <li>
                        <a class="submenu" href="../../../bodyflex/Dashboard/view/regProDirView.php">
                            <i class="fa fa-home"></i>
                            <span style="color: #FFCC00;" class="hidden-tablet">Direcciones</span>
                        </a>
                    </li>
                    <li>    
                        <a class="submenu" href="../../../bodyflex/Dashboard/view/regProCtaView.php">
                            <i class="fa fa-university"></i>
                            <span style="color: #FFCC00;" class="hidden-tablet">Cuentas</span>
                        </a>
                    </li>
                    <li>
                        <a href="../../../bodyflex/Dashboard/view/regProPerView.php">
                            <i class="fa fa-male"></i>
                            <span style="color: #FFCC00;" class="hidden-tablet">&nbsp;Perfil</span>
                        </a>
                    </li>
                </ul>    
            </li>
            <li>
               <a class="dropmenu" href="#">
                    <i class="icon-globe"></i>
                    <span style="color: #FFCC00;" class="hidden-tablet">Mi perfil web</span>
                    <span style="color: #FFCC00;" class="label label-important">7</span>
                </a>
                <ul>
                    <li>
                        <a href="../../../bodyflex/Dashboard/view/deslizadorView.php">
                            <i class="icon-bullhorn"></i>
                            <span style="color: #FFCC00;" class="hidden-tablet">Deslizador</span>
                        </a>
                    </li>
                    <li>
                        <a class="submenu" href="../../../bodyflex/Dashboard/view/presentacionView.php">
                        <i class="icon-globe"></i>
                        <span style="color: #FFCC00;" class="hidden-tablet">Presentaci&oacute;n</span></a>
                    </li>
                    <li>    
                        <a href="../../../bodyflex/Dashboard/view/serviciosView.php">
                            <i class="icon-magic"></i>
                            <span style="color: #FFCC00;" class="hidden-tablet">Servicios</span>
                        </a>
                    </li>
                    <li>
                        <a href="../../../bodyflex/Dashboard/view/portafolioView.php">
                            <i class="icon-camera-retro"></i>
                            <span style="color: #FFCC00;" class="hidden-tablet">Portafolio</span>
                        </a>
                    </li>
                    <li>
                        <a class="submenu" href="../../../bodyflex/Dashboard/view/curriculumEstudiosView.php">
                            <i class="icon-book"></i>
                            <span style="color: #FFCC00;" class="hidden-tablet">Estudios</span>
                        </a>
                    </li>
                    <li>
                        <a class="submenu" href="../../../bodyflex/Dashboard/view/curriculumExperienciaView.php">
                            <i class="icon-fire"></i>
                            <span style="color: #FFCC00;" class="hidden-tablet">Experiencia</span>
                        </a>
                    </li>
                    <li>
                        <a class="submenu" href="../../../bodyflex/Dashboard/view/curriculumOtrosView.php">
                            <i class="icon-certificate"></i>
                            <span style="color: #FFCC00;" class="hidden-tablet">Otros</span>
                        </a>
                    </li>
                </ul>	
            </li>
            <li>
                <a href="../../../bodyflex/Mensajes/view/mensajesView.php">
                    <i class="icon-envelope"></i>
                    <span style="color: #FFCC00;" class="hidden-tablet">Mensajes</span>
                    <span id="msgNew" class="label label-important">3</span>
                </a>
            </li>
            <li>
                <!-- <a href="../../../bodyflex/Dashboard/view/publicacionView.php">-->
                <a href="../../../bodyflex/Publicaciones/view/publicacionView.php">
                    <i class="icon-pencil"></i>
                    <span style="color: #FFCC00;" class="hidden-tablet">Publicaciones</span>
                </a>
            </li>
            <li>
                <a href="../../../bodyflex/Dashboard/view/catProVtaView.php">
                    <i class="icon-tags"></i>
                    <span style="color: #FFCC00;" class="hidden-tablet">Cat&aacute;logo</span>
                </a>
            </li>
            <li>
                <a href="../../../bodyflex/Dashboard/view/productoView.php">
                    <i class="icon-shopping-cart"></i>
                    <span style="color: #FFCC00;" class="hidden-tablet">Mis productos</span>
                </a>
            </li>
            <li>
                <a href="../../../bodyflex/Dashboard/view/misPropuestasView.php">
                    <i class="fa fa-gavel"></i>
                    <span style="color: #FFCC00;" class="hidden-tablet">Mis propuestas</span>
                </a>
            </li>
            <li>
                <a style="cursor: pointer;" onclick="pruebaWebProfesional();">
                    <i class="fa fa-bug"></i>
                    <span style="color: #FFCC00;" class="hidden-tablet">Probar Perfil</span>
                </a>
            </li>
            <li>
                <a href="../../../bodyflex/Dashboard/view/publicarPefilView.php">
                    <i class="icon-bullhorn"></i>
                    <span style="color: #FFCC00;" class="hidden-tablet">Publicar Perfil</span>
                </a>
            </li>
        </ul>
    </div>
</div>
<!-- end: Main Menu -->
<script>
    function pruebaWebProfesional(){
        
        var URLdomain   = window.location.host;
        var URLprotocol = window.location.protocol;
        var urlPerfil = URLprotocol+"//"+URLdomain+"/bodyflex/profesional/index.php";
        var rutPro = $('#rut').val();
        var prueba = 1;

        var form = $('<form action="' + urlPerfil + '" method="post" target="_blank">' +
          '<input type="hidden" id="rutPro" name="rutPro" value="' + rutPro + '" />' +
          '<input type="hidden" id="prueba" name="prueba" value="' + prueba + '" />' +
          '</form>');
        $('body').append(form);
        form.submit();
        
    }
</script>