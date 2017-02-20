
<!DOCTYPE html>
<html lang="en">

    <head>

        <meta charset="utf-8">
        <title>Bodyflex - Restablecer Clave</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <meta name="description" content="">
        <meta name="author" content="">

        <!-- CSS -->
        <link rel='stylesheet' href='http://fonts.googleapis.com/css?family=PT+Sans:400,700'>
        <link rel='stylesheet' href='http://fonts.googleapis.com/css?family=Oleo+Script:400,700'>
        <link rel="stylesheet" href="../bootstrap/css/bootstrap.min.css">
        <link rel="stylesheet" href="../css/style.css">    
        <link rel="stylesheet" href="../jquery-ui-1.11.3.custom/jquery-ui.css">
        <link rel="stylesheet" href="../../font-awesome-4.5.0/css/font-awesome.min.css">
        
        <script src="../jquery-ui-1.11.3.custom/external/jquery/jquery.js"></script>
        <script src="../jquery-ui-1.11.3.custom/jquery-ui.js"></script>
        
        <script>
            $( document ).ready(function(){
                $(function(){
                    $('[data-toggle="tooltip"]').tooltip();
                });
            }); 
        </script>
        
        <!-- Favicons
	================================================== -->
        <?php include("../../modulos/favicons.php"); ?>
    
    </head>
    <body>
        <div class="header">
            <div class="container">
                <div class="row">
                    <div class="logo span4">
                        <h1><a href=""><span class="red">&nbsp;</span></a></h1>
                    </div>
                    <div class="links span8">
                        <a class="home" href="../../index.php" rel="tooltip" data-placement="bottom" data-original-title="Home"></a>
                    </div>
                </div>
            </div>
        </div>
        <br><br>
        <div class="register-container container">
            <div class="row">
                <div class="register span6">
                    <form id='formReg' action="" method="post">
                       
                        <h2>Restablecer Contraseña</h2>                        
                        
                        
                        <label for="email" id="lemail">Email</label>
                        <input type="text" id="iemail" name="email" placeholder="[Ingrese Email]">
                        
                        <label for="codigo" id="lCodigo">C&oacute;digo enviado a su casilla</label>
                        <input type="text" id="codigo" maxlength="10" name="codigo" placeholder="[Ingrese Código]">
                        
                        <label for="password1">Establezca nueva clave</label>
                        <input type="password" id="password1" name="password1" placeholder="[Ingrese Password]">
                        
                        <label for="password2">Repita nueva clave</label>
                        <input type="password" id="password2" name="password2" placeholder="[Ingrese Password]">
                        <div id='espera' style="margin-left: 150px; width: 150px; height: 45px; display: none;"></div>
                        <div id='mensaje' style='display: none;'></div>                      
                        <div id="botonera">
                            <button type="button" id="btnEstablecer">Establecer Contraseña</button>
                        </div>                       
                        
                        <div id="rPlus" style="display: none;">
                            <br>
                            <p style='color: black; font-size: 18px;' rel='tooltip' data-toggle="tooltip" data-placement="left" title="Ir a Home">Operaci&oacute;n exitosa, favor ingrese nuevamente.</p>
                            <a href='../../index.php' rel='tooltip' data-toggle="tooltip" data-placement="left" title="Ir a Home">
                                <i style='color: green;' class='fa fa-check-circle fa-3x'></i>
                            </a>
                        </div>
                        <div id='rMenos' style="display: none;">
                            <br>
                            <p style='color: black; font-size: 18px;'>El email ingreado no se encuentra registrado!.</p>
                            <a href='../../index.php' rel='tooltip' data-toggle="tooltip" data-placement="left" title="Ir a Home" >
                                <i style='color: red;' class='fa fa-times fa-3x'></i>
                            </a> 
                        </div>
                    </form>
                </div>
            </div>
        </div>

        <!-- Javascript -->
        <script src="../bootstrap/js/bootstrap.min.js"></script>
        <script src="../js/jquery.backstretch.min.js"></script>
        <script src="../controlador/ingresaCodigoController.js"></script>
        
    </body>

</html>

