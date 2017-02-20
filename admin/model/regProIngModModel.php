<?php

include("../model/conection.php");

//sleep(1);

    $sTrR='';
    $strXml='';
    $codErr=0;
    $desErr='OPERACION EXITOSA!';

    $proId=$_REQUEST['proId'];
    $proRut=$_REQUEST['proRut'];    
    $proNom=$_REQUEST['proNom'];
    $proApe=$_REQUEST['proApe'];
    $proEml=$_REQUEST['proEml'];
    $proFon=$_REQUEST['proFon'];
    $proCel=$_REQUEST['proCel'];
    $proPro=$_REQUEST['proPro'];
    $proFna=$_REQUEST['proFna'];
    
    
    //Tratamiento RUT
    $rutM=explode("-", $proRut);
    $rut=$rutM[0];
    $rut=str_replace(".","",$rut);
    $dv =$rutM[1];        
        
    //Tratamiento Fecha
    $mFec=explode("/", $proFna);
    $fAno=$mFec[2];
    $fMes=$mFec[1];
    $fDia=$mFec[0];
    
    try{
    
        $conn=PDO_conectar(); 

        if($conn){

            $sql="CALL SP_CP_ADM_REG_POS_PRO(:proId, :proRut, :proDv, :proNom, :proApe, :proEml, :proFon, :proCel, :proPro, :proFna, @codErr);";    

            $stmt = $conn->prepare($sql);
            $stmt->bindParam(':proId' , $proId, PDO::PARAM_STR, 20);
            $stmt->bindParam(':proRut', $rut, PDO::PARAM_STR, 10);
            $stmt->bindParam(':proDv' , $dv, PDO::PARAM_STR, 1);
            $stmt->bindParam(':proNom', $proNom, PDO::PARAM_STR, 100);
            $stmt->bindParam(':proApe', $proApe, PDO::PARAM_STR, 100);
            $stmt->bindParam(':proEml', $proEml, PDO::PARAM_STR, 100);
            $stmt->bindParam(':proFon', $proFon, PDO::PARAM_STR, 20);
            $stmt->bindParam(':proCel', $proCel, PDO::PARAM_STR, 20);
            $stmt->bindParam(':proPro', $proPro, PDO::PARAM_STR, 50);
            $stmt->bindParam(':proFna', $proFna, PDO::PARAM_STR, 10);
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
        $strXml.='<DATOS>';
            $strXml.= '<![CDATA[';
                $strXml.=$sTrR;
            $strXml.=']]>';
        $strXml.='</DATOS>';
        $strXml.='<ESTADO>';
            $strXml.='REGISTRADA';
        $strXml.='</ESTADO>';
    $strXml.='</SALIDA>';
    echo $strXml;        
