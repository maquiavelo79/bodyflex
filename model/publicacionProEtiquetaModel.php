<?php

include("../model/conection.php");

    $puId=$_REQUEST['puId'];
   
    $sTr='';
    $strXml='';
    $cantidad=0;
    $codErr=0;
    $desErr='OPERACION EXITOSA!';
    
    try{
	
        $conn=PDO_conectar();     

        if($conn){    

            $sql="CALL SP_WAPP_CONSULTA_ETIQUETA_ARTICULO(:puId, @codErr, @cantidad);";

            $stmt = $conn->prepare($sql);
            $stmt->bindParam(':puId', $puId, PDO::PARAM_STR,50);
            $stmt->execute();
            $num= $stmt->rowCount();

            if($num>0){     
                $etiqueta='';
                while ($r = $stmt->fetch(PDO::FETCH_NUM)):
                    $sTr.='<REGISTRO>';
                        $sTr.=$r[0];
                    $sTr.='</REGISTRO>';
                endwhile;
                
                $stmt->closeCursor();
                $output = $conn->query("select @codErr, @cantidad")->fetch(PDO::FETCH_ASSOC);
                $codErr = $output['@codErr'];
                $cantidad = $output['@cantidad'];
                
            }else{
                
                $stmt->closeCursor();
                $output = $conn->query("select @codErr, @cantidad")->fetch(PDO::FETCH_ASSOC);
                $codErr = $output['@codErr'];
                $cantidad = $output['@cantidad'];

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
            //$strXml.= '<![CDATA[';
                $strXml.=$sTr;
            //$strXml.=']]>';
        $strXml.='</DATOS>';
        $strXml.='<CANTIDAD>';
            //$strXml.= '<![CDATA[';
                $strXml.=$cantidad;
            //$strXml.=']]>';
        $strXml.='</CANTIDAD>';
    $strXml.='</SALIDA>';
    echo $strXml;
