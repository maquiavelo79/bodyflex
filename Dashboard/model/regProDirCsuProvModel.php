<?php

include("../model/conection.php");

    $strCmb='';
    $catEti='';

    $codErr=0;
    $desErr='OPERACION EXITOSA!';
    $strDat='';
    $strXml='';
    
    $region=$_REQUEST['region'];
    
    try{
	
        $conn=PDO_conectar();     

        if($conn){  
            
            $sql="CALL SP_CP_PRO_DIR_CSU_PROV(:region, @codErr);";
            $stmt = $conn->prepare($sql);
            $stmt->bindParam(':region', $region, PDO::PARAM_STR, 50);
            $stmt->execute();
            $num= $stmt->rowCount();
            
            if($num>0){
                while ($r = $stmt->fetch(PDO::FETCH_NUM)):  
                    $strDat.='<REGISTRO>';
                        $strDat.=$r[0];
                    $strDat.='</REGISTRO>';
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
                        $desErr='SIN PROVINCIAS';
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
            $strXml.=$strDat;
        $strXml.='</DATOS>';
    $strXml.='</SALIDA>';
    echo $strXml;