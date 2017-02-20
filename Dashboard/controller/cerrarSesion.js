function cerrarSesion(){  

    var URLdomain   = window.location.host;
    var URLprotocol = window.location.protocol;

    window.location.href=URLprotocol+"//"+URLdomain+"/bodyflex/Dashboard/modulos/cerrarSesion.php";
    window.open('','_self').close();
}  
