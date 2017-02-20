<style>
    #mnuCarrito{
        cursor: pointer; 
        width: 130px; 
        height: 100px;
        
/*        border-style: solid; 
        border-color: yellow; */
        
    }
    #anclaCarrito{
        width: 130px; 
        height: 100px;
        
/*        border-style: double; 
        border-width: 5px;
        border-color: #FFCC00; */
        
    }
    #pCarroCompra{
        
        font-size: 10px; 
        font-family: Arial,Helvetica,sans-serif; 
        font-weight: bold; 
        text-align: left;
        width: 120px; 
        margin-right: 5px;
        
/*        border-style: solid; 
        border-color: white; */
        
    }
    #dSim{
        font-size: 10px; 
        font-family: Arial,Helvetica,sans-serif; 
        text-align: right; 
        font-weight: bold;
        text-align: right;
        width: 110px; 
    }
    
    
</style>
<header id="header">
    <nav id="main-nav" class="navbar navbar-default navbar-fixed-top" role="banner">
        <div class="container">
            <div class="navbar-header">
                <button type="button" class="navbar-toggle" data-toggle="collapse" data-target=".navbar-collapse">
                    <span class="sr-only">Toggle navigation</span>
                    <span class="icon-bar"></span>
                    <span class="icon-bar"></span>
                    <span class="icon-bar"></span>
                </button>
                <a class="navbar-brand" href="../../../bodyflex/index.php"><img src="images/logo.png" alt="logo"></a>
            </div>
            
            <?php 
                $mnu='';
                $poseePub = 1;
                $poseePro = 1;
                $poseeVta = 0;
            
                if($poseePub==1 && $poseePro==1){
                    
                    $mnu.='<div id="menu" class="collapse navbar-collapse navbar-right">';  
                        $mnu.='<ul class="nav navbar-nav">';
                            $mnu.='<li class="scroll active"><a href="#home" style="font-size: 12px; font-weight: bold;">Home</a></li>';
                            $mnu.='<li class="scroll"><a href="#features" style="font-size: 12px; font-weight: bold;">Presentaci&oacute;n</a></li>';
                            $mnu.='<li class="scroll"><a href="#services" style="font-size: 12px; font-weight: bold;">Servicios</a></li>';
                            $mnu.='<li class="scroll"><a href="#calificacion" style="font-size: 12px; font-weight: bold;">Currículum</a></li>';
                            $mnu.='<li class="scroll"><a href="#portfolio" style="font-size: 12px; font-weight: bold;">Portafolio</a></li>';
                            $mnu.='<li id="mnuPublicaciones" class="scroll"><a href="#publicacion" style="font-size: 12px; font-weight: bold;">Publicaciones</a></li>';
                            $mnu.='<li id="mnuProductos" class="scroll"><a href="#producto" style="font-size: 12px; font-weight: bold;">Productos</a></li>';
                            $mnu.='<li class="scroll"><a href="#contact-us" style="font-size: 12px; font-weight: bold;">Contacto</a></li>';
                            if($poseeVta==1){
                                $mnu.='<li id="mnuCarrito" onclick="goCarro();">';
                            }else{
                                $mnu.='<li id="mnuCarrito"">';
                            }
                                $mnu.='<a id="anclaCarrito">';
                                    $mnu.='<div id="pCarroCompra">Carro de compras</div>';
                                    $mnu.='<div id="itemsCarrito">';
                                        $mnu.='<div id="dSim">';
                                            $mnu.='vac&iacute;o &nbsp;<i class="fa fa-shopping-cart fa-lg"></i>';
                                        $mnu.='</div>';
                                    $mnu.='</div>';
                                $mnu.='</a>';
                            $mnu.='</li>';
                        $mnu.='</ul>';
                    $mnu.='</div>';
                    echo $mnu;
                    
                }elseif($poseePub==1 && $poseePro==0){
                    
                    $mnu.='<div id="menu" style="margin-right: 130px;" class="collapse navbar-collapse navbar-right">';  
                        $mnu.='<ul class="nav navbar-nav">';
                            $mnu.='<li class="scroll active"><a href="#home" style="font-size: 12px; font-weight: bold;">Home</a></li>';
                            $mnu.='<li class="scroll"><a href="#features" style="font-size: 12px; font-weight: bold;">Presentaci&oacute;n</a></li>';
                            $mnu.='<li class="scroll"><a href="#services" style="font-size: 12px; font-weight: bold;">Servicios</a></li>';
                            $mnu.='<li class="scroll"><a href="#calificacion" style="font-size: 12px; font-weight: bold;">Currículum</a></li>';
                            $mnu.='<li class="scroll"><a href="#portfolio" style="font-size: 12px; font-weight: bold;">Portafolio</a></li>';
                            $mnu.='<li id="mnuPublicaciones" class="scroll"><a href="#publicacion" style="font-size: 12px; font-weight: bold;">Publicaciones</a></li>';
                            $mnu.='<li class="scroll"><a href="#contact-us" style="font-size: 12px; font-weight: bold;">Contacto</a></li>';
                            if($poseeVta==1){
                                $mnu.='<li id="mnuCarrito" onclick="goCarro();">';
                            }else{
                                $mnu.='<li id="mnuCarrito"">';
                            }
                                $mnu.='<a id="anclaCarrito">';
                                    $mnu.='<div id="pCarroCompra">Carro de compras</div>';
                                    $mnu.='<div id="itemsCarrito">';
                                        $mnu.='<div id="dSim">';
                                            $mnu.='vac&iacute;o &nbsp;<i class="fa fa-shopping-cart fa-lg"></i>';
                                        $mnu.='</div>';
                                    $mnu.='</div>';
                                $mnu.='</a>';
                            $mnu.='</li>';
                        $mnu.='</ul>';
                    $mnu.='</div>';
                    echo $mnu;
                    
                }elseif($poseePub==0 && $poseePro==1){
                    
                    $mnu.='<div id="menu" style="margin-right: 100px;" class="collapse navbar-collapse navbar-right">';  
                        $mnu.='<ul class="nav navbar-nav">';
                            $mnu.='<li class="scroll active"><a href="#home" style="font-size: 12px; font-weight: bold;">Home</a></li>';
                            $mnu.='<li class="scroll"><a href="#features" style="font-size: 12px; font-weight: bold;">Presentaci&oacute;n</a></li>';
                            $mnu.='<li class="scroll"><a href="#services" style="font-size: 12px; font-weight: bold;">Servicios</a></li>';
                            $mnu.='<li class="scroll"><a href="#calificacion" style="font-size: 12px; font-weight: bold;">Currículum</a></li>';
                            $mnu.='<li class="scroll"><a href="#portfolio" style="font-size: 12px; font-weight: bold;">Portafolio</a></li>';
                            $mnu.='<li id="mnuProductos" class="scroll"><a href="#producto" style="font-size: 12px; font-weight: bold;">Productos</a></li>';
                            $mnu.='<li class="scroll"><a href="#contact-us" style="font-size: 12px; font-weight: bold;">Contacto</a></li>';
                            if($poseeVta==1){
                                $mnu.='<li id="mnuCarrito" onclick="goCarro();">';
                            }else{
                                $mnu.='<li id="mnuCarrito"">';
                            }
                                $mnu.='<a id="anclaCarrito">';
                                    $mnu.='<div id="pCarroCompra">Carro de compras</div>';
                                    $mnu.='<div id="itemsCarrito">';
                                        $mnu.='<div id="dSim">';
                                            $mnu.='vac&iacute;o &nbsp;<i class="fa fa-shopping-cart fa-lg"></i>';
                                        $mnu.='</div>';
                                    $mnu.='</div>';
                                $mnu.='</a>';
                            $mnu.='</li>';
                        $mnu.='</ul>';
                    $mnu.='</div>';
                    echo $mnu;
                    
                }else{
                    
                    $mnu.='<div id="menu" style="margin-right: 200px;" class="collapse navbar-collapse navbar-right">';  
                        $mnu.='<ul class="nav navbar-nav">';
                            $mnu.='<li class="scroll active"><a href="#home" style="font-size: 12px; font-weight: bold;">Home</a></li>';
                            $mnu.='<li class="scroll"><a href="#features" style="font-size: 12px; font-weight: bold;">Presentaci&oacute;n</a></li>';
                            $mnu.='<li class="scroll"><a href="#services" style="font-size: 12px; font-weight: bold;">Servicios</a></li>';
                            $mnu.='<li class="scroll"><a href="#calificacion" style="font-size: 12px; font-weight: bold;">Currículum</a></li>';
                            $mnu.='<li class="scroll"><a href="#portfolio" style="font-size: 12px; font-weight: bold;">Portafolio</a></li>';
                            $mnu.='<li class="scroll"><a href="#contact-us" style="font-size: 12px; font-weight: bold;">Contacto</a></li>';
                            if($poseeVta==1){
                                $mnu.='<li id="mnuCarrito" onclick="goCarro();">';
                            }else{
                                $mnu.='<li id="mnuCarrito"">';
                            }
                                    $mnu.='<a id="anclaCarrito">';
                                        $mnu.='<div id="pCarroCompra">Carro de compras</div>';
                                        $mnu.='<div id="itemsCarrito">';
                                            $mnu.='<div id="dSim">';
                                                $mnu.='vac&iacute;o &nbsp;<i class="fa fa-shopping-cart fa-lg"></i>';
                                            $mnu.='</div>';
                                        $mnu.='</div>';
                                    $mnu.='</a>';
                                $mnu.='</li>';
                        $mnu.='</ul>';
                    $mnu.='</div>';
                    echo $mnu;
                    
                }
            ?>
               
            
        </div><!--/.container-->
    </nav><!--/nav-->
</header><!--/header-->