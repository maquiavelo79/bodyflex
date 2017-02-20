<?php
/* Módulo de conexiones */

function conectar(){
    $enlace=mysql_connect('localhost', 'root', '') or die('Error al conectar a la base de datos , configure privilegios.');
    if($enlace){
        if(mysql_select_db('bodyflex',$enlace)){
          return $enlace;  
        }else{
            return false;
        } 
    }else{
        return false;
    }
}

function desconectar(){
    mysql_close();
}

function PDO_conectar(){
    
    $host = 'localhost'; 
    $db = 'bodyflex';
    $user = 'root';
    $pass = '';
    
    $cn = new PDO('mysql:host='.$host.';dbname='.$db, $user, $pass);
    $cn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
    
    return $cn;
    
}