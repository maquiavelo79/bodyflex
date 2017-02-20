<?php
/* Módulo de conexiones */

function conectaDb()
{
    $host = 'localhost';
    $dbname = 'bodyflex';
    $username = 'root';
    $password = '';
    
    try {
        $db = new PDO("mysql:host=$host;dbname=$dbname", $username, $password);
        $db->setAttribute(PDO::MYSQL_ATTR_USE_BUFFERED_QUERY, true);
        return($db);
    } catch (PDOException $e) {
        cabecera("Error grave");
        print "<p>Error: No puede conectarse con la base de datos.</p>\n";
//      print "<p>Error: " . $e->getMessage() . "</p>\n";
        pie();
        exit();
    }
}

function conectar(){
    mysql_connect('localhost', 'root', '') or die('Error al conectar a la base de datos , configure privilegios.');
    mysql_select_db('bodyflex') or die('Base de datos no existe.');
}

function desconectar(){
    mysql_close();
}

function getSession($id) {
    conectar();

    $session = mysql_fetch_array(mysql_query("select log_id
                                                    , log_rut
                                                    , log_nombre
                                                    , log_email
                                                    , log_tipo
                                                    from tbl_login
                                                    where log_id ='$id'"));

    desconectar();
    return $session;
}

/* Módulo Logout */

function Logout($r, $log) {
    conectar();
    $exito = true;
    mysql_query("CALL SP_logout('" . $r . "'," . $log . ")") or die('el error' . mysql_error() . $exito = false);

    desconectar();

    return $exito;
}

function insertaDocumentos($n, $d, $t, $s, $u, $a) {
    conectar();
	mysql_query("SET NAMES 'utf8'");
    mysql_query("call sp_insertaDocumentos('" . $n . "', '" . $d . "', " . $t . ", '" . $s . "', '" . $u . "', '" . $a . "')") or die('el error' . mysql_error());

    desconectar();

    if ($t == 1) {
        header("Location: ../Views/Documentos.php");
    } elseif ($t == 2) {
        header("Location: ../Views/Procedimientos.php");
    } else {
        header("Location: ../Views/Capacitaciones.php");
    }
}

function estadoSesion($id) {
    conectar();
    /*//echo "<script language='javascript'>alert(".$id.");</script>";*/
    $session = mysql_fetch_array(mysql_query("select max(log_activo) from tbl_login where log_rut ='$id'"));

    desconectar();
    //return $session[0];
	
	
    if($session[0]=='')
    {
        $session[0]=0;
    }
    
    echo $session[0];
}

?>