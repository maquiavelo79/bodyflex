<?php
session_start(); 
include("../model/conection.php");

    $id=$_REQUEST['id'];
    $acr=$_REQUEST['acr'];
    $nom=$_REQUEST['nom'];
    $tit=$_REQUEST['tit'];
    $des=$_REQUEST['des'];
    $gd=$_REQUEST['gd'];

    $sTrR='';
    $strXml='';
    $codErr=0;
    $desErr='OPERACION EXITOSA!';
    
    try{
	
        $conn=PDO_conectar();     

        if($conn){  

            $sql="CALL SP_CP_ADM_ING_PTA_VAL_PRO(:id, :acr, :nom, :tit, :des, :gd, @codErr);";

            $stmt = $conn->prepare($sql);
            $stmt->bindParam(':id', $id, PDO::PARAM_STR,10);
            $stmt->bindParam(':acr', $acr, PDO::PARAM_STR,50);
            $stmt->bindParam(':nom', $nom, PDO::PARAM_STR,100);
            $stmt->bindParam(':tit', $tit, PDO::PARAM_STR,100);
            $stmt->bindParam(':des', $des, PDO::PARAM_STR,200);
            $stmt->bindParam(':gd', $gd, PDO::PARAM_STR,50);
            $stmt->execute();
            $num= $stmt->rowCount();
            
            if($num>0){
                while ($r = $stmt->fetch(PDO::FETCH_NUM)):
                    $id=$r[0];
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
        $strXml.='<ID>';
            $strXml.=$id;
        $strXml.='</ID>';
    $strXml.='</SALIDA>';
    echo $strXml;
