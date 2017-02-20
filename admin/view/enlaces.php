<?php
// Elimino los mensajes de warning para
// que no salgan en la respuesta
error_reporting(E_ERROR);

$codErr=0;
$desErr='OPERACION EXITOSA'; 

try{
    
    $strXml='';
    $url = $_REQUEST["url"];
    $res = 0;
    // Miro si existe la URL
    $f = fopen($url, "r");
    if ($f===false) {
    // No existe
    $res = 0;
    } else {
    // Existe
    $res = 1;
    }
    fclose($f);
    
}catch(PDOException $exception){ 
    
   $codErr=100;
   $desErr=$exception->getMessage(); 
   
} 

$url=filter_var($url,FILTER_SANITIZE_STRING);
$url=filter_var($url,FILTER_SANITIZE_SPECIAL_CHARS);
$url=htmlentities($url);

$strXml.='<SALIDA>';
    $strXml.='<ERROR>';
        $strXml.='<CODERROR>';
            $strXml.=$codErr;
        $strXml.='</CODERROR>';
        $strXml.='<DESERROR>';
            $strXml.=$desErr;
        $strXml.='</DESERROR>';
    $strXml.='</ERROR>';    
     $strXml.='<DATOS>';
        $strXml.= '<![CDATA[';
            $strXml.=$res;
        $strXml.=']]>';     
    $strXml.='</DATOS>';
    $strXml.='<URL>';
        $strXml.=$url;
    $strXml.='</URL>';
$strXml.='</SALIDA>';
echo $strXml;