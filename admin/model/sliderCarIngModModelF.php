<?php

include("../model/conection.php");

    $sTrR='';
    $strXml='';
    $codErr=0;
    $desErr='OPERACION EXITOSA!';

    $D6Id=$_REQUEST['D6Id'];
    $D61GD=$_REQUEST['D61GD'];
    $D62GD=$_REQUEST['D62GD'];    
    $D63GD=$_REQUEST['D63GD'];
    $D6p1=$_REQUEST['D6p1'];
    $D6p2=$_REQUEST['D6p2'];
    $D6p3=$_REQUEST['D6p3'];
    $D6B1=$_REQUEST['D6B1'];
    $D6B2=$_REQUEST['D6B2'];
    $D6B3=$_REQUEST['D6B3'];
    $D6Ur1=$_REQUEST['D6Ur1'];
    $D6Ur2=$_REQUEST['D6Ur2'];
    $D6Ur3=$_REQUEST['D6Ur3'];
    
    $D6Po1=$_REQUEST['D6Po1'];
    $D6Po2=$_REQUEST['D6Po2'];
    $D6Po3=$_REQUEST['D6Po3'];
    
    try{
    
        $conn=PDO_conectar(); 

        if($conn){

            $sql="CALL SP_CP_ADM_ING_MOD_SLI_CAT6(:D6Id, :D61GD, :D62GD, :D63GD, :D6p1,:D6p2, :D6p3, :D6B1, :D6B2, :D6B3, :D6Ur1, :D6Ur2, :D6Ur3, :D6Po1, :D6Po2, :D6Po3, @codErr);";    

            $stmt = $conn->prepare($sql);
            $stmt->bindParam(':D6Id', $D6Id, PDO::PARAM_STR, 10);
            $stmt->bindParam(':D61GD', $D61GD, PDO::PARAM_STR, 50);
            $stmt->bindParam(':D62GD', $D62GD, PDO::PARAM_STR, 50);
            $stmt->bindParam(':D63GD', $D63GD, PDO::PARAM_STR, 50);
            $stmt->bindParam(':D6p1', $D6p1, PDO::PARAM_INT);
            $stmt->bindParam(':D6p2', $D6p2, PDO::PARAM_INT);
            $stmt->bindParam(':D6p3', $D6p3, PDO::PARAM_INT);
            $stmt->bindParam(':D6B1', $D6B1, PDO::PARAM_STR, 20);
            $stmt->bindParam(':D6B2', $D6B2, PDO::PARAM_STR, 20);
            $stmt->bindParam(':D6B3', $D6B3, PDO::PARAM_STR, 20);
            $stmt->bindParam(':D6Ur1', $D6Ur1, PDO::PARAM_STR, 200);
            $stmt->bindParam(':D6Ur2', $D6Ur2, PDO::PARAM_STR, 200);
            $stmt->bindParam(':D6Ur3', $D6Ur3, PDO::PARAM_STR, 200);
            $stmt->bindParam(':D6Po1', $D6Po1, PDO::PARAM_STR, 10);
            $stmt->bindParam(':D6Po2', $D6Po2, PDO::PARAM_STR, 10);
            $stmt->bindParam(':D6Po3', $D6Po3, PDO::PARAM_STR, 10);
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
