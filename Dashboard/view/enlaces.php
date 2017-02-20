<?php
// Elimino los mensajes de warning para
// que no salgan en la respuesta
error_reporting(E_ERROR);

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

/*
    $xml  = '<?xml version="1.0" standalone="yes"?>';
    $xml .= '<datos>';
    // Devuelvo el id del objeto para poder referenciarlo
    //$xml .= '<id>'.$_GET["id"].'</id>';
    $xml .= '<ok>'.$res.'</ok>';
    $xml .= '</datos>';
    header('Content-type: text/xml');
    echo $xml;
*/

$url=filter_var($url,FILTER_SANITIZE_STRING);
$url=filter_var($url,FILTER_SANITIZE_SPECIAL_CHARS);
$url=htmlentities($url);

$strXml.='<SALIDA>';
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