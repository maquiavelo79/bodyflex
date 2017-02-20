
<!DOCTYPE html>
<html lang="en">

    <head>

        <meta charset="utf-8">
        <title>Bodyflex - Registro usuario</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <meta name="description" content="">
        <meta name="author" content="">

            
        
        <!-- CSS -->
        <link rel='stylesheet' href='http://fonts.googleapis.com/css?family=PT+Sans:400,700'>
        <link rel='stylesheet' href='http://fonts.googleapis.com/css?family=Oleo+Script:400,700'>
        <link rel="stylesheet" href="assets/bootstrap/css/bootstrap.min.css">
        <link rel="stylesheet" href="assets/css/style.css">
        
        <link rel="stylesheet" href="assets/jquery-ui-1.11.3.custom/jquery-ui.css">
        <script src="assets/jquery-ui-1.11.3.custom/external/jquery/jquery.js"></script>
        <script src="assets/jquery-ui-1.11.3.custom/jquery-ui.js"></script>
        
        <script>           
            $(function() {
                $( "#datepicker" ).datepicker({
                    minDate: -20,
                    maxDate: "+1M +10D",
                    dateFormat: "dd-mm-yy",
                    altFormat: "ddmmyy",
                    altField: "#alt-date"
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
                        <a class="home" href="../index.php" rel="tooltip" data-placement="bottom" data-original-title="Home"></a>
                    </div>
                </div>
            </div>
        </div>
        <div class="register-container container">
            <div class="row">
                <div class="register span6">
                    <form action="" method="post">
                        <h2>REGISTRO</h2>                        
                        <label for="firstname">Nombre</label>
                        <input type="text" id="firstname" name="firstname" placeholder="[Ingrese nombre]">
                        <label for="lastname">Apellido</label>
                        <input type="text" id="lastname" name="lastname" placeholder="[Ingrese apellido]">
                        
                        <label for="alias">Alias</label>
                        <input type="text" id="alias" name="alias" placeholder="[Ingrese alias]">
                                                
                        <label for="email">Email</label>
                        <input type="text" id="email" name="email" placeholder="[Ingrese email]">
                        <label for="password">Password</label>
                        <input type="password" id="password" name="password" placeholder="[Ingrese password]">
                       
                        <label for="fechaNacimiento">Fecha nacimiento</label>
                        <input type="text" id="datepicker">
                        
                        <label for="username">Sexo</label>
                        <fieldset>
                            <table class="t">
                                <tr>
                                    <td>
                                        <label for="accessible">
                                            <input type="radio" value="accessible" name="sexo" id="accessible" checked> <span>masculino</span>
                                        </label>  
                                    </td>
                                    <td>
                                        <label for="pretty">
                                            <input type="radio" value="pretty" name="sexo" id="pretty"> <span>femenino</span>
                                        </label>
                                    </td>    
                                </tr>    
                            </table>    
                        </fieldset>    
                                                
                        <button type="submit">REGISTRARME</button>
                    </form>
                </div>
            </div>
        </div>

        <!-- Javascript -->
<!--        <script src="assets/js/jquery-1.8.2.min.js"></script>-->
        <script src="assets/bootstrap/js/bootstrap.min.js"></script>
        <script src="assets/js/jquery.backstretch.min.js"></script>
        <script src="assets/js/scripts.js"></script>
        <script src="assets/js/validaCampo.js"></script>
        
    </body>

</html>

