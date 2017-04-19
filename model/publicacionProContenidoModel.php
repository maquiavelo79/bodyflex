<?php

include("../model/conection.php");

    $puId=$_REQUEST['puId'];
   
    $cont=0;
    $sTr='';
    $sTrT='';
    $strXml='';
    $codErr=0;
    $desErr='OPERACION EXITOSA!';
    
    
    
    try{
	
        $conn=PDO_conectar();     

        if($conn){

            $sql="CALL SP_WAPP_PUBLICACION_CONSULTA_CONTENIDO_ARTICULO(:puId, @codErr);";

            $stmt = $conn->prepare($sql);
            $stmt->bindParam(':puId', $puId, PDO::PARAM_STR,50);
            $stmt->execute();
            $num= $stmt->rowCount();

            if($num>0){     
                $etiqueta='';
                while ($r = $stmt->fetch(PDO::FETCH_NUM)):  
                  
                        $cont+=1;
                        $sUrl=$r[1]; //URL contenido
                        $sUrlp=$r[2]; //URL principal (primera ingresada)
                        
                        if($cont==$r[3]){
                            if($r[0]=='VIDEO'){
                                $sTr.='<a href="' . $sUrl . '" class="magnific-youtube item" data-title="item ' . $cont . '">';
                                    $sTr.='<img src="' . $sUrlp . '" width="300" height="200" />';
                                $sTr.='</a>';
                            }else{
                                $sTr.='<a href="' . $sUrl . '" class="magnific item" data-title="item ' . $cont . '">';
                                    $sTr.='<img src="' . $sUrlp . '" width="300" height="200" />';
                                $sTr.='</a>';
                            }
                        }else{
                            if($r[0]=='VIDEO'){
                                $sTr.='<a href="' . $sUrl . '" class="magnific-youtube item" data-title="item ' . $cont . '"></a>';
                            }else{
                                $sTr.='<a href="' . $sUrl . '" class="magnific item" data-title="item ' . $cont . '"></a>';
                            }
                        }  

                endwhile;               
    
                $sTrT.='<section class="magnific-all">';
                    $sTrT.='<div class="half center">';
                        $sTrT.=$sTr;
                    $sTrT.='</div>';
                $sTrT.='</section>';

            }else{
                
                $stmt->closeCursor();
                $output = $conn->query("select @codErr")->fetch(PDO::FETCH_ASSOC);
                $codErr = $output['@codErr'];

                switch($codErr){
                    case 0:
                        if($num==0){
                            $codErr=8;
                            $desErr='PROCEDIMIENTO NO RETORNA REGISTROS';
                        }
                        break;
                    case 99:
                        $desErr='ERROR EN PROCEDIMEINTO';
                        break;
                    case 98:
                        $desErr='SIN CONTENIDO';
                        break;
                }
                
            }        
        }else{
            $codErr=9;
            $desErr='NO ES POSIBLE CONECTAR';
        }

    }catch(PDOException $exception){ 
        $codErr=100;
        $desErr=$exception->getMessage();    
    } 
        
        
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
                $strXml.=$sTrT;
            $strXml.=']]>';
        $strXml.='</DATOS>';
    $strXml.='</SALIDA>';
    echo $strXml;
    