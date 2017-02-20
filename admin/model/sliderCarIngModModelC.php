<?php

include("../model/conection.php");

    $sTrR='';
    $strXml='';
    $codErr=0;
    $desErr='OPERACION EXITOSA!';

    $D3Id=$_REQUEST['D3Id'];
    $D3Tit=$_REQUEST['D3Tit'];
    $D3GD=$_REQUEST['D3GD'];    
    $D3Ur1=$_REQUEST['D3Ur1'];
    $D3Co=$_REQUEST['D3Co'];
    
    try{
    
        $conn=PDO_conectar(); 

        if($conn){

            $sql="CALL SP_CP_ADM_ING_MOD_SLI_CAT3(:D3Id, :D3Tit, :D3GD, :D3Ur1, :D3Co, @codErr);";    

            $stmt = $conn->prepare($sql);
            $stmt->bindParam(':D3Id', $D3Id, PDO::PARAM_STR, 10);
            $stmt->bindParam(':D3Tit', $D3Tit, PDO::PARAM_STR, 30);
            $stmt->bindParam(':D3GD', $D3GD, PDO::PARAM_STR, 50);
            $stmt->bindParam(':D3Ur1', $D3Ur1, PDO::PARAM_STR, 200);
            $stmt->bindParam(':D3Co', $D3Co, PDO::PARAM_STR, 10);
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
