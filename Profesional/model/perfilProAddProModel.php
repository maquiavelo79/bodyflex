<?php
session_start();
include("../model/conection.php");

    $rutPro=$_REQUEST['rutPro'];
    $sesion=$_REQUEST['sesion'];
    $rutCli=$_REQUEST['rutCli'];
    $codPro=$_REQUEST['codPro'];
    $prePro=$_REQUEST['prePro'];
    $cantidad=$_REQUEST['cantidad'];
        
    $sTrR='';
    $strXml='';
    $codErr=0;
    $desErr='OPERACION EXITOSA!';
    
    $totPro=0;
    $cant=0;
   
    //sleep(1);
    
    
    try{
	
        $conn=PDO_conectar();     

        if($conn){ 

            $sql="CALL SP_WPRO_PROFESIONAL_ADD_CARRITO(:rutPro, :sesion, :rutCli, :codPro, :prePro, :cantidad, @codErr);";

            $stmt = $conn->prepare($sql);
            $stmt->bindParam(':rutPro', $rutPro, PDO::PARAM_STR,20);
            $stmt->bindParam(':sesion', $sesion, PDO::PARAM_STR,50);
            $stmt->bindParam(':rutCli', $rutCli, PDO::PARAM_STR,20);
            $stmt->bindParam(':codPro', $codPro, PDO::PARAM_STR,20);
            $stmt->bindParam(':prePro', $prePro, PDO::PARAM_INT);
            $stmt->bindParam(':cantidad', $cantidad, PDO::PARAM_INT);
            $stmt->execute();
            $num= $stmt->rowCount();
             
            if($num>0){
                while ($r = $stmt->fetch(PDO::FETCH_NUM)): 
                    $cant=$r[0]; 
                    $codPro=$r[1]; 
                    $totPro=$r[2]; 
                    $prePro=$r[3]; 
                    $subTot=$r[4]; 
                    $nomPro=$r[5];
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
                        $desErr='ERROR EN PROCEDIMEINTO: SP_WPRO_PROFESIONAL_ADD_CARRITO';
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
        $strXml.='<DATOS>';
            $strXml.='<CANTIDAD>';
                $strXml.=$cant;
            $strXml.='</CANTIDAD>';
            $strXml.='<CODPRO>';
                $strXml.=$codPro;
            $strXml.='</CODPRO>';
            $strXml.='<TOTPRO>';
                $strXml.=$totPro;
            $strXml.='</TOTPRO>';
            $strXml.='<PREPRO>';
                $strXml.=$prePro;
            $strXml.='</PREPRO>';
            $strXml.='<SUBTOT>';
                $strXml.=$subTot;
            $strXml.='</SUBTOT>';
            $strXml.='<NOMPRO>';
                $strXml.=$nomPro;
            $strXml.='</NOMPRO>';
        $strXml.='</DATOS>';
    $strXml.='</SALIDA>';
    echo $strXml;
