<?php
session_start(); 
include("../model/conection.php");
$enlace=conectar();

$strRsp='';
//sleep(1);

$sId=$_SESSION['spId'];

//echo '$sId: ' . $sId;

if($enlace!=false){
    if(isset($_FILES["file"]["type"])){
        $validextensions = array("jpeg", "jpg", "png");
        $temporary = explode(".", $_FILES["file"]["name"]);
        $file_extension = end($temporary);
        if ((($_FILES["file"]["type"] == "image/png") || ($_FILES["file"]["type"] == "image/jpg") || ($_FILES["file"]["type"] == "image/jpeg")
        ) && ($_FILES["file"]["size"] < 150000)//Approx. 150kb files can be uploaded.
        && in_array($file_extension, $validextensions)){
            if ($_FILES["file"]["error"] > 0){
                echo "Return Code: " . $_FILES["file"]["error"] . "<br/><br/>" . '|';
            }else{
                if (file_exists("../../slider/" . $_FILES["file"]["name"])){
                    echo $_FILES["file"]["name"] . " <span id='invalid'>La imagen que intenta agregar <b>ya existe</b>, cambie el nombre o elija otra imagen!.</span> " . '|';
                }else{
                    if(strlen($_FILES["file"]["name"])<=100){
                        
                        $sql="CALL SP_ADM_SERVICIO_PROFE_INGRESA_IMAGEN(" . "'" . $sId . "'," .
                                "'" . $_FILES["file"]["name"]  . "');";
                        
                        $resp=mysql_query($sql,$enlace) or die("Error en: $sql: " . mysql_error());
                        if(mysql_num_rows($resp)>0){
                            while($fila = mysql_fetch_array($resp,MYSQL_NUM)) {
                                if($fila[0]==1){
                                    $sourcePath = $_FILES['file']['tmp_name']; // Storing source path of the file in a variable
                                    $targetPath = "../../servicio/".$_FILES['file']['name']; // Target path where file is to be stored
                                    move_uploaded_file($sourcePath,$targetPath) ; // Moving Uploaded file
                                    $strRsp.= "<span id='success'>Imagen agregada exitosamente...!!</span><br/>";
                                    $strRsp.= "<br/><b>Nombre de archivo:</b> " . $_FILES["file"]["name"] . "<br>";
                                    $strRsp.= "<b>Tipo:</b> " . $_FILES["file"]["type"] . "<br>";
                                    $strRsp.= "<b>Tamaño:</b> " . ($_FILES["file"]["size"] / 1024) . " kB<br>";
                                    //echo "<b>Temp file:</b> " . $_FILES["file"]["tmp_name"] . "<br>";
                                    echo $strRsp . '|' . $_FILES["file"]["name"];
                                }else{
                                    echo "<span id='invalid'>Problemas ejecutar SP " . $_FILES["file"]["name"] . ' ' . $sId . ' ' . $fila[0] . ", archivo no ha sido agregado...!<span>" . '|'; //SIN REGISTROS
                                }
                            }
                        }else{
                            echo "<span id='invalid'>Problemas ejecutar SP " . $resp . ", archivo no ha sido agregado...!<span>" . '|'; //SIN REGISTROS
                        }     
                    }else{
                        $strRsp.= "<span id='success'>El nombre del archivo debe poseer menos de 500 caracteres, archivo no agregado...!</span><br/>" . '|';
                        echo $strRsp;
                    }
                }
            }
        }else{
            $strRsp.= "<span id='invalid'>Tamaño o tipo de archivo invalido, intente disminuir el tamaño de la imagen o disminuir su resolución, archivo no ha sido agregado...!<span>" . '|';
            echo $strRsp;
        }
    }
}else{
    echo "<span id='invalid'>Problemas al conectar con base de datos, archivo no ha sido agregado...!<span>" . '|'; //PROBLEMAS AL CONECTAR CON BASE DE DATOS
}