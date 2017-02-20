<?php

include("../model/conection.php");

    $sTrR='';
    $strXml='';
    $codErr=0;
    $desErr='OPERACION EXITOSA!';

    $D1Id=$_REQUEST['D1Id'];
    $D1Tit=$_REQUEST['D1Tit'];
    $D1Tex=$_REQUEST['D1Tex'];    
    $D1GD=$_REQUEST['D1GD'];
    $D1Ur1=$_REQUEST['D1Ur1'];
    $D1Co=$_REQUEST['D1Co'];
    
    try{
    
        $conn=PDO_conectar(); 

        if($conn){

            $sql="CALL SP_CP_ADM_ING_MOD_SLI_CAT(:D1Id, :D1Tit, :D1Tex, :D1GD, :D1Ur1, :D1Co, @codErr);";    

            $stmt = $conn->prepare($sql);
            $stmt->bindParam(':D1Id', $D1Id, PDO::PARAM_STR, 10);
            $stmt->bindParam(':D1Tit', $D1Tit, PDO::PARAM_STR, 30);
            $stmt->bindParam(':D1Tex', $D1Tex, PDO::PARAM_STR, 150);
            $stmt->bindParam(':D1GD', $D1GD, PDO::PARAM_STR, 50);
            $stmt->bindParam(':D1Ur1', $D1Ur1, PDO::PARAM_STR, 200);
            $stmt->bindParam(':D1Co', $D1Co, PDO::PARAM_STR, 10);
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
