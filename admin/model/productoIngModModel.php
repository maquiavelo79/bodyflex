<?php

include("../model/conection.php");

    $sTrR='';
    $sId='';
    $strXml='';
    $codErr=0;
    $desErr='OPERACION EXITOSA!';

    $marca=$_REQUEST['marca'];    
    $proId=$_REQUEST['proId'];
    $cmbCon=$_REQUEST['cmbCon'];
    $proNom=$_REQUEST['proNom'];
    $proDes=$_REQUEST['proDes'];
    $cmbCat1=$_REQUEST['cmbCat1'];
    if(isset($_REQUEST['cmbCat2'])){ 
        $cmbCat2=$_REQUEST['cmbCat2'];
    }else{
        $cmbCat2=0;
    }
    if(isset($_REQUEST['cmbCat3'])){ 
        $cmbCat3=$_REQUEST['cmbCat3'];
    }else{
        $cmbCat3=0;
    }
    $detPro=$_REQUEST['detPro'];
    $rut=$_REQUEST['rut'];
    $proPreVta=$_REQUEST['proPreVta'];
    $proIva=$_REQUEST['proIva'];
    $proPreNet=$_REQUEST['proPreNet'];
    $comTra=$_REQUEST['comTra'];
    $proComPro=$_REQUEST['proComPro'];    
    $monComPro=$_REQUEST['monComPro'];
    $monUti=$_REQUEST['monUti'];
    $unidades=$_REQUEST['unidades'];
    
    $proPPreVta=$_REQUEST['proPPreVta'];
    $proPIva=$_REQUEST['proPIva'];
    $proPPreNet=$_REQUEST['proPPreNet'];
    $comTra2=$_REQUEST['comTra2'];
    $monUti2=$_REQUEST['monUti2'];
    $monUti3=$_REQUEST['monUti3'];
    $preCom=$_REQUEST['preCom'];
    
    $mtoPreAntPub=$_REQUEST['mtoPreAntPub'];
    $mtoPreAntPro=$_REQUEST['mtoPreAntPro'];
    
    $cmbRanPrePro=$_REQUEST['cmbRanPrePro'];
    $cmbRanPreCli=$_REQUEST['cmbRanPreCli'];
        
    try{
    
        $conn=PDO_conectar(); 

        if($conn){
            
            $sql="CALL SP_CP_ADM_INGRESA_MODIFICA_PRODUCTOS(:proId"
                    . ", :cmbCon"
                    . ", :proNom"
                    . ", :proDes"
                    . ", :cmbCat1"
                    . ", :cmbCat2"
                    . ", :cmbCat3"
                    . ", :detPro"
                    . ", :marca"
                    . ", :rut"
                    . ", :proPreVta"
                    . ", :proIva"
                    . ", :proPreNet"
                    . ", :comTra"
                    . ", :proComPro"
                    . ", :monComPro"
                    . ", :monUti"
                    . ", :unidades"
                    . ", :proPPreVta"
                    . ", :proPIva"
                    . ", :proPPreNet"
                    . ", :comTra2"
                    . ", :monUti2"
                    . ", :monUti3"
                    . ", :preCom"
                    . ", :mtoPreAntPub"
                    . ", :mtoPreAntPro"
                    . ", :cmbRanPrePro"
                    . ", :cmbRanPreCli"
                    . ", @codErr);";    
            
            $stmt = $conn->prepare($sql);
            $stmt->bindParam(':proId', $proId, PDO::PARAM_STR, 20);
            $stmt->bindParam(':cmbCon', $cmbCon, PDO::PARAM_STR, 20);
            $stmt->bindParam(':proNom', $proNom, PDO::PARAM_STR, 100);
            $stmt->bindParam(':proDes', $proDes, PDO::PARAM_STR, 100);
            $stmt->bindParam(':cmbCat1', $cmbCat1, PDO::PARAM_STR, 10);
            $stmt->bindParam(':cmbCat2', $cmbCat2, PDO::PARAM_STR, 10);
            $stmt->bindParam(':cmbCat3', $cmbCat3, PDO::PARAM_STR, 10);
            $stmt->bindParam(':detPro', $detPro, PDO::PARAM_STR, 3000);
            $stmt->bindParam(':marca', $marca, PDO::PARAM_STR, 10);
            $stmt->bindParam(':rut', $rut, PDO::PARAM_STR, 10);
            $stmt->bindParam(':proPreVta', $proPreVta, PDO::PARAM_STR, 20);
            $stmt->bindParam(':proIva', $proIva, PDO::PARAM_STR, 20);
            $stmt->bindParam(':proPreNet', $proPreNet, PDO::PARAM_STR, 20);
            $stmt->bindParam(':comTra', $comTra, PDO::PARAM_STR, 20);
            $stmt->bindParam(':proComPro', $proComPro, PDO::PARAM_STR, 5);
            $stmt->bindParam(':monComPro', $monComPro, PDO::PARAM_STR, 20);
            $stmt->bindParam(':monUti', $monUti, PDO::PARAM_STR, 20);
            $stmt->bindParam(':unidades', $unidades, PDO::PARAM_INT);
            $stmt->bindParam(':proPPreVta', $proPPreVta, PDO::PARAM_STR,20);
            $stmt->bindParam(':proPIva', $proPIva, PDO::PARAM_STR,20);
            $stmt->bindParam(':proPPreNet', $proPPreNet, PDO::PARAM_STR,20);
            $stmt->bindParam(':comTra2', $comTra2, PDO::PARAM_STR,20);
            $stmt->bindParam(':monUti2', $monUti2, PDO::PARAM_STR,20);
            $stmt->bindParam(':monUti3', $monUti3, PDO::PARAM_STR,20);
            $stmt->bindParam(':preCom', $preCom, PDO::PARAM_STR,20);
            $stmt->bindParam(':mtoPreAntPub', $mtoPreAntPub, PDO::PARAM_STR,20);
            $stmt->bindParam(':mtoPreAntPro', $mtoPreAntPro, PDO::PARAM_STR,20);
            $stmt->bindParam(':cmbRanPrePro', $cmbRanPrePro, PDO::PARAM_STR,10);
            $stmt->bindParam(':cmbRanPreCli', $cmbRanPreCli, PDO::PARAM_STR,10);
            $stmt->execute();
            $num= $stmt->rowCount();
                        
            if($num>0){
                while ($r = $stmt->fetch(PDO::FETCH_NUM)):   
                    $sTrR.=$r[0];
                    $sId.=$r[1];
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
                $strXml.='';
            $strXml.=']]>';
        $strXml.='</DATOS>';
        $strXml.='<IDENTIFICADOR>';
            $strXml.=$sId;
        $strXml.='</IDENTIFICADOR>';
        $strXml.='<OPERACION>';    
            $strXml.=$sTrR;
        $strXml.='</OPERACION>';
    $strXml.='</SALIDA>';
    echo $strXml;        
