<?php

session_start();
session_unset($_SESSION['email']);
session_unset($_SESSION['nombre']);
session_unset($_SESSION['apellido']);
session_unset($_SESSION['alias']);
session_unset($_SESSION['rol']);
session_unset($_SESSION['rut']);
session_unset($_SESSION['dv']);
session_unset($_SESSION['url']);
session_unset($_SESSION['sesion']);     
session_unset($_SESSION['sesion_id']);     

session_destroy();
header('Location: ../index.php');

echo 'cerrarSesion.php';