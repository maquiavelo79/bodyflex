<?php

include("../model/conection.php");

    $sTrR='';
    $strXml='';
    $codErr=0;
    $desErr='OPERACION EXITOSA!';

    $D4Id=$_REQUEST['D4Id'];
    
    $D41GD=$_REQUEST['D41GD'];
    $D42GD=$_REQUEST['D42GD'];    
    $D43GD=$_REQUEST['D43GD'];
    $D44GD=$_REQUEST['D44GD'];
    
    $D4B1=$_REQUEST['D4B1'];
    $D4B2=$_REQUEST['D4B2'];
    
    $D4Ur1=$_REQUEST['D4Ur1'];
    $D4Ur2=$_REQUEST['D4Ur2'];
    $D4Ur3=$_REQUEST['D4Ur3'];
    $D4Ur4=$_REQUEST['D4Ur4'];
    
    $D4Po1=$_REQUEST['D4Po1'];
    $D4Po2=$_REQUEST['D4Po2'];
    $D4Po3=$_REQUEST['D4Po3'];
    $D4Po4=$_REQUEST['D4Po4'];
    
    try{
    
        $conn=PDO_conectar(); 

        if($conn){

            $sql="CALL SP_CP_ADM_ING_MOD_SLI_CAT4(:D4Id, :D41GD, :D42GD, :D43GD, :D44GD, :D4B1, :D4B2, :D4Ur1, :D4Ur2, :D4Ur3, :D4Ur4, :D4Po1, :D4Po2, :D4Po3, :D4Po4, @codErr);";    

            $stmt = $conn->prepare($sql);
            $stmt->bindParam(':D4Id', $D4Id, PDO::PARAM_STR, 10);
            $stmt->bindParam(':D41GD', $D41GD, PDO::PARAM_STR, 50);
            $stmt->bindParam(':D42GD', $D42GD, PDO::PARAM_STR, 50);
            $stmt->bindParam(':D43GD', $D43GD, PDO::PARAM_STR, 50);
            $stmt->bindParam(':D44GD', $D44GD, PDO::PARAM_STR, 50);
            $stmt->bindParam(':D4B1', $D4B1, PDO::PARAM_STR, 20);
            $stmt->bindParam(':D4B2', $D4B2, PDO::PARAM_STR, 20);
            $stmt->bindParam(':D4Ur1', $D4Ur1, PDO::PARAM_STR, 200);
            $stmt->bindParam(':D4Ur2', $D4Ur2, PDO::PARAM_STR, 200);
            $stmt->bindParam(':D4Ur3', $D4Ur3, PDO::PARAM_STR, 200);
            $stmt->bindParam(':D4Ur4', $D4Ur4, PDO::PARAM_STR, 200);
            $stmt->bindParam(':D4Po1', $D4Po1, PDO::PARAM_STR, 10);
            $stmt->bindParam(':D4Po2', $D4Po2, PDO::PARAM_STR, 10);
            $stmt->bindParam(':D4Po3', $D4Po3, PDO::PARAM_STR, 10);
            $stmt->bindParam(':D4Po4', $D4Po4, PDO::PARAM_STR, 10);
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
