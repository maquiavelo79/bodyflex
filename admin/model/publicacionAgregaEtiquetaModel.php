<?php

include("../model/conection.php");

    $pId=$_POST['pId'];
    $cat=$_POST['cat'];
    $eti=$_POST['eti'];
    
    $cant=0;
    $sTrR='';
    $strXml='';
    $codErr=0;
    $desErr='OPERACION EXITOSA!';

    try{
	
        $conn=PDO_conectar();     

        if($conn){    

            $sql="CALL SP_CP_ADM_PUBLICACION_INGRESA_ETIQUETA_EN_PUBLICACION(:pId, :cat, :eti, @codErr);";
            $stmt = $conn->prepare($sql);
            $stmt->bindParam(':pId', $pId, PDO::PARAM_STR, 10);
            $stmt->bindParam(':cat', $cat, PDO::PARAM_STR, 50);
            $stmt->bindParam(':eti', $eti, PDO::PARAM_STR, 50);
            $stmt->execute();
            $num= $stmt->rowCount();

            if($num>0){
                while ($r = $stmt->fetch(PDO::FETCH_NUM)):           
                    $sTrR=$r[0];
                    $cant=$r[1];
                endwhile; 
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
            $strXml.=$sTrR;
        $strXml.='</DATOS>';
        $strXml.='<CANTIDAD>';
            $strXml.=$cant;
        $strXml.='</CANTIDAD>';
    $strXml.='</SALIDA>';
    echo $strXml;
