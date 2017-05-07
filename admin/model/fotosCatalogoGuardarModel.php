<?php
session_start(); 
include("../model/conection.php");

    $gd1=$_REQUEST['gd1'];
    $gd2=$_REQUEST['gd2'];
    $gd3=$_REQUEST['gd3'];
    $gd4=$_REQUEST['gd4'];
    $gd5=$_REQUEST['gd5'];
    $gd6=$_REQUEST['gd6'];
    $gd7=$_REQUEST['gd7'];
    $gd8=$_REQUEST['gd8'];
    $gd9=$_REQUEST['gd9'];
    $gd10=$_REQUEST['gd10'];
    $gd11=$_REQUEST['gd11'];
    $gd12=$_REQUEST['gd12'];
    $gd13=$_REQUEST['gd13'];
    $gd14=$_REQUEST['gd14'];
    $gd15=$_REQUEST['gd15'];
    $gd16=$_REQUEST['gd16'];
    $gd17=$_REQUEST['gd17'];
    $gd18=$_REQUEST['gd18'];
    $gd19=$_REQUEST['gd19'];
    $gd20=$_REQUEST['gd20'];
    
    $sTrR='';
    $strXml='';
    $codErr=0;
    $desErr='OPERACION EXITOSA!';
    
    try{
	
        $conn=PDO_conectar();     

        if($conn){  

            $sql="CALL SP_CP_ADM_ING_FOT_COL(:gd1, :gd2, :gd3, :gd4, :gd5, :gd6, :gd7, :gd8, :gd9, :gd10, :gd11, :gd12, :gd13, :gd14, :gd15, :gd16, :gd17, :gd18, :gd19, :gd20, @codErr);";

            $stmt = $conn->prepare($sql);
            $stmt->bindParam(':gd1', $gd1, PDO::PARAM_STR,50);
            $stmt->bindParam(':gd2', $gd2, PDO::PARAM_STR,50);
            $stmt->bindParam(':gd3', $gd3, PDO::PARAM_STR,50);
            $stmt->bindParam(':gd4', $gd4, PDO::PARAM_STR,50);
            $stmt->bindParam(':gd5', $gd5, PDO::PARAM_STR,50);
            $stmt->bindParam(':gd6', $gd6, PDO::PARAM_STR,50);
            $stmt->bindParam(':gd7', $gd7, PDO::PARAM_STR,50);
            $stmt->bindParam(':gd8', $gd8, PDO::PARAM_STR,50);
            $stmt->bindParam(':gd9', $gd9, PDO::PARAM_STR,50);
            $stmt->bindParam(':gd10', $gd10, PDO::PARAM_STR,50);
            $stmt->bindParam(':gd11', $gd11, PDO::PARAM_STR,50);
            $stmt->bindParam(':gd12', $gd12, PDO::PARAM_STR,50);
            $stmt->bindParam(':gd13', $gd13, PDO::PARAM_STR,50);
            $stmt->bindParam(':gd14', $gd14, PDO::PARAM_STR,50);
            $stmt->bindParam(':gd15', $gd15, PDO::PARAM_STR,50);
            $stmt->bindParam(':gd16', $gd16, PDO::PARAM_STR,50);
            $stmt->bindParam(':gd17', $gd17, PDO::PARAM_STR,50);
            $stmt->bindParam(':gd18', $gd18, PDO::PARAM_STR,50);
            $stmt->bindParam(':gd19', $gd19, PDO::PARAM_STR,50);
            $stmt->bindParam(':gd20', $gd20, PDO::PARAM_STR,50);
            
            $stmt->execute();
            $num= $stmt->rowCount();
            
                $stmt->closeCursor();
                $output = $conn->query("select @codErr")->fetch(PDO::FETCH_ASSOC);
                $codErr = $output['@codErr'];

                if($codErr!=0){
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
    $strXml.='</SALIDA>';
    echo $strXml;
