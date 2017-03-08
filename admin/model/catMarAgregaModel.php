<?php
session_start(); 
include("../model/conection.php");

    $id=$_REQUEST['id'];
    $nom=$_REQUEST['nom'];
    $gd1=$_REQUEST['gd1'];
    $niv=$_REQUEST['niv'];
    
    $sTrR='';
    $strXml='';
    $codErr=0;
    $desErr='OPERACION EXITOSA!';
    
    try{
	
        $conn=PDO_conectar();     

        if($conn){  

            $sql="CALL SP_CP_ADM_ING_MAR(:id, :nom, :gd1, :niv, @codErr);";

            $stmt = $conn->prepare($sql);
            $stmt->bindParam(':id', $id, PDO::PARAM_STR,10);
            $stmt->bindParam(':nom', $nom, PDO::PARAM_STR,50);
            $stmt->bindParam(':gd1', $gd1, PDO::PARAM_STR,50);
            $stmt->bindParam(':niv', $niv, PDO::PARAM_STR,10);
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
