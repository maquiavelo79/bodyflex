
<!DOCTYPE html>
<html lang="en">

    <head>

        <meta charset="utf-8">
        <title>Bodyflex - Registro Usuario</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <meta name="description" content="">
        <meta name="author" content="">

        <!-- CSS -->
        <link rel='stylesheet' href='http://fonts.googleapis.com/css?family=PT+Sans:400,700'>
        <link rel='stylesheet' href='http://fonts.googleapis.com/css?family=Oleo+Script:400,700'>
        <link rel="stylesheet" href="../bootstrap/css/bootstrap.min.css">
        <link rel="stylesheet" href="../css/style.css">
        <link rel="stylesheet" href="../../font-awesome-4.5.0/css/font-awesome.min.css">

        <link rel="stylesheet" href="../jquery-ui-1.11.3.custom/jquery-ui.css">
        <script src="../jquery-ui-1.11.3.custom/external/jquery/jquery.js"></script>
        <script src="../jquery-ui-1.11.3.custom/jquery-ui.js"></script>
<!--        <script src="http://code.jquery.com/jquery-1.11.0.min.js"></script>-->

        
        <!-- Favicons
	================================================== -->
        <?php include("../../modulos/favicons.php"); ?>
        
        <script>           
            $(function() {
                $( "#datepicker" ).datepicker({
                    //minDate: -20,
                    //maxDate: "+1M +10D",
                    dateFormat: "dd-mm-yy",
                    altFormat: "ddmmyy",
                    altField: "#alt-date",
                    changeYear: true,
                    changeMonth: true,
                    autoSize: true,
                    //showCurrentAtPos: 12,
                    showMonthAfterYear: true,
                    yearRange: "1920:2015"
                });
                
                //Para escribir solo letras
                $('#firstname').validCampo(' abcdefghijklmnñopqrstuvwxyzáéíóú');
                $('#lastname').validCampo(' abcdefghijklmnñopqrstuvwxyzáéíóú');
                
            });
        </script>
        
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
        <div class="register-container container">
            <div class="row">
                <div class="register span6">
                    <form id='formReg' action="" method="post">
                        <h2>REGISTRO</h2>                        
                        
                        <label for="firstname">Nombre</label>
                        <input type="text" id="firstname" name="firstname" placeholder="[Ingrese nombre]">
                        
                        <label for="lastname">Apellido</label>
                        <input type="text" id="lastname" name="lastname" placeholder="[Ingrese apellido]">
                        
                        <label for="alias" id="lalias" >Alias</label>
                        <input type="text" id="ialias" name="alias" placeholder="[Ingrese alias]">
                                                
                        <label for="email" id="lemail">Email</label>
                        <input type="text" id="iemail" name="email" placeholder="[Ingrese email]">
                        
                        <label for="password">Password</label>
                        <input type="password" id="password" name="password" placeholder="[Ingrese password]">
                       
                        <label for="fechaNacimiento">Fecha nacimiento</label>
                        <input type="text" id="datepicker" name="datepicker" placeholder="[Ingrese fecha nacimiento]">
                        
                        <label for="username">Sexo</label>
                        <fieldset>
                            <table class="t">
                                <tr>
                                    <td style="width: 150px; height: 50px;">
                                        <label for="accessible">
                                            <input type="radio" value="M" name="sexo" id="accessible" checked> <span>masculino</span>
                                        </label>  
                                    </td>
                                    <td style="width: 150px; height: 50px;">
                                        <label for="pretty">
                                            <input type="radio" value="F" name="sexo" id="pretty"> <span>femenino</span>
                                        </label>
                                    </td>  
                                    <td id='espera' style="width: 150px; height: 50px; display: none;"></td>
                                </tr>    
                            </table>    
                        </fieldset>    
                        
                        <div id="botonera">
                            <button type="button" id="submit">REGISTRARME</button>
                        </div>                       
                        
                    </form>
                </div>
            </div>
        </div>       
        
        <!-- Javascript -->
        <script src="../bootstrap/js/bootstrap.min.js"></script>
        <script src="../js/jquery.backstretch.min.js"></script>
        <script src="../controlador/registroUsuarioController.js"></script>
        <script src="../js/validaCampo.js"></script>

        
    </body>

</html>

