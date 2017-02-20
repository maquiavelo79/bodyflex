<?php

include("../model/conection.php");

    $sTrR='';
    $strXml='';
    $codErr=0;
    $desErr='OPERACION EXITOSA!';

    $D7Id=$_REQUEST['D7Id'];
    $D7Tit=$_REQUEST['D7Tit'];
    $D7B1=$_REQUEST['D7B1'];
    $D7Tex=$_REQUEST['D7Tex'];    
    $D7GD=$_REQUEST['D7GD'];
    $D7Ur1=$_REQUEST['D7Ur1'];
    $D7Col=$_REQUEST['D7Col'];
    
    try{
    
        $conn=PDO_conectar(); 

        if($conn){

            $sql="CALL SP_CP_ADM_ING_MOD_SLI_CAT7(:D7Id, :D7Tit, :D7B1, :D7Tex, :D7GD, :D7Ur1, :D7Col, @codErr);";    

            $stmt = $conn->prepare($sql);
            $stmt->bindParam(':D7Id', $D7Id, PDO::PARAM_STR, 10);
            $stmt->bindParam(':D7Tit', $D7Tit, PDO::PARAM_STR, 30);
            $stmt->bindParam(':D7B1', $D7B1, PDO::PARAM_STR, 20);
            $stmt->bindParam(':D7Tex', $D7Tex, PDO::PARAM_STR, 150);
            $stmt->bindParam(':D7GD', $D7GD, PDO::PARAM_STR, 50);
            $stmt->bindParam(':D7Ur1', $D7Ur1, PDO::PARAM_STR, 200);
            $stmt->bindParam(':D7Col', $D7Col, PDO::PARAM_STR, 10);
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
