<?php

include("../model/conection.php");

    $sTrR='';
    $strXml='';
    $codErr=0;
    $desErr='OPERACION EXITOSA!';

    $D2Id=$_REQUEST['D2Id'];
    $D2Tit=$_REQUEST['D2Tit'];
    $D2Tex=$_REQUEST['D2Tex'];
    $D2p1=$_REQUEST['D2p1'];    
    $D21GD=$_REQUEST['D21GD'];
    $D22GD=$_REQUEST['D22GD'];
    $D2Ur1=$_REQUEST['D2Ur1'];
    $D2Ur2=$_REQUEST['D2Ur2'];
    $D2Co=$_REQUEST['D2Co'];
    $D2Po=$_REQUEST['D2Po'];
    
    try{
    
        $conn=PDO_conectar(); 

        if($conn){

            $sql="CALL SP_CP_ADM_ING_MOD_SLI_CAT2(:D2Id, :D2Tit, :D2Tex, :D2p1, :D21GD, :D22GD, :D2Ur1, :D2Ur2, :D2Co, :D2Po, @codErr);";    

            $stmt = $conn->prepare($sql);
            $stmt->bindParam(':D2Id', $D2Id, PDO::PARAM_STR, 10);
            $stmt->bindParam(':D2Tit', $D2Tit, PDO::PARAM_STR, 30);
            $stmt->bindParam(':D2Tex', $D2Tex, PDO::PARAM_STR, 150);
            $stmt->bindParam(':D2p1', $D2p1, PDO::PARAM_INT);
            $stmt->bindParam(':D21GD', $D21GD, PDO::PARAM_STR, 50);
            $stmt->bindParam(':D22GD', $D22GD, PDO::PARAM_STR, 50);
            $stmt->bindParam(':D2Ur1', $D2Ur1, PDO::PARAM_STR, 200);
            $stmt->bindParam(':D2Ur2', $D2Ur2, PDO::PARAM_STR, 200);
            $stmt->bindParam(':D2Co', $D2Co, PDO::PARAM_STR, 10);
            $stmt->bindParam(':D2Po', $D2Po, PDO::PARAM_STR, 10);
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
