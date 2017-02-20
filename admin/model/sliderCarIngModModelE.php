<?php

include("../model/conection.php");

    $sTrR='';
    $strXml='';
    $codErr=0;
    $desErr='OPERACION EXITOSA!';

    $D5Id=$_REQUEST['D5Id'];
    $D5Tit=$_REQUEST['D5Tit'];
    $D5B1=$_REQUEST['D5B1'];    
    $D5Tex=$_REQUEST['D5Tex'];
    $D54GD=$_REQUEST['D54GD'];
    $D5Ur1=$_REQUEST['D5Ur1'];
    $D5Co=$_REQUEST['D5Co'];
    
    try{
    
        $conn=PDO_conectar(); 

        if($conn){

            $sql="CALL SP_CP_ADM_ING_MOD_SLI_CAT5(:D5Id, :D5Tit, :D5B1, :D5Tex, :D54GD, :D5Ur1, :D5Co, @codErr);";    

            $stmt = $conn->prepare($sql);
            $stmt->bindParam(':D5Id', $D5Id, PDO::PARAM_STR, 10);
            $stmt->bindParam(':D5Tit', $D5Tit, PDO::PARAM_STR, 30);
            $stmt->bindParam(':D5B1', $D5B1, PDO::PARAM_STR, 20);
            $stmt->bindParam(':D5Tex', $D5Tex, PDO::PARAM_STR, 150);
            $stmt->bindParam(':D54GD', $D54GD, PDO::PARAM_STR, 50);
            $stmt->bindParam(':D5Ur1', $D5Ur1, PDO::PARAM_STR, 200);
            $stmt->bindParam(':D5Co', $D5Co, PDO::PARAM_STR, 10);
            $stmt->execute();
            $num= $stmt->rowCount();
                        
            if($num>0){
                while ($r = $stmt->fetch(PDO::FETCH_NUM)):   
                    
                    $sTrR=$r[0];
                    
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
        $strXml.='<IDENTIFICADOR>';
            $strXml.=$sTrR;
        $strXml.='</IDENTIFICADOR>';
    $strXml.='</SALIDA>';
    echo $strXml;        
