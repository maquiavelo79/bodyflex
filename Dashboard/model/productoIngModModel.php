<?php

include("../model/conection.php");

    $proId='';
    $proNom='';
    $proEst='';
    $proCon='';
    $proPre='';
    $proDes='';
    $proCat1='';
    $proCat2='';
    $proCat3='';
    $proDesLar='';
    $proPMar='';
    $proPreRef='';
    $idPro=''; //ID tratado

    $sTrR='';
    $strXml='';
    $codErr=0;
    $desErr='OPERACION EXITOSA!';

    $marca=$_REQUEST['marca'];
    $precioRef=$_REQUEST['precioRef'];
    
    $proId=$_REQUEST['proId'];
    $cmbCon=$_REQUEST['cmbCon'];

    $proNom=$_REQUEST['proNom'];
    $proPre=$_REQUEST['proPre'];

    $proDes=ucfirst(strtolower($_REQUEST['proDes']));
    //$proDes=filter_var($proDes,FILTER_SANITIZE_SPECIAL_CHARS);
    //$proDes=htmlspecialchars($_REQUEST['proDes']);
    
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
   
    //$detPro=ucfirst(strtolower($_REQUEST['detPro']));
    $detPro=$_REQUEST['detPro'];
    //$detPro=filter_var($detPro,FILTER_SANITIZE_SPECIAL_CHARS);
    //$detPro=htmlspecialchars($detPro);
    
    $rut=$_REQUEST['rut'];
    
    try{
    
        $conn=PDO_conectar(); 

        if($conn){

            $sql="CALL SP_CP_PRO_INGRESA_MODIFICA_PRODUCTOS(:proId, :cmbCon, :proNom, :proPre, :proDes, :cmbCat1, :cmbCat2, :cmbCat3, :detPro, :rut, :marca, :precioRef, @codErr);";    

            $stmt = $conn->prepare($sql);
            $stmt->bindParam(':proId', $proId, PDO::PARAM_STR, 20);
            $stmt->bindParam(':cmbCon', $cmbCon, PDO::PARAM_STR, 20);
            $stmt->bindParam(':proNom', $proNom, PDO::PARAM_STR, 100);
            $stmt->bindParam(':proPre', $proPre, PDO::PARAM_STR, 20);
            $stmt->bindParam(':proDes', $proDes, PDO::PARAM_STR, 100);
            $stmt->bindParam(':cmbCat1', $cmbCat1, PDO::PARAM_STR, 10);
            $stmt->bindParam(':cmbCat2', $cmbCat2, PDO::PARAM_STR, 10);
            $stmt->bindParam(':cmbCat3', $cmbCat3, PDO::PARAM_STR, 10);
            $stmt->bindParam(':detPro', $detPro, PDO::PARAM_STR, 3000);
            $stmt->bindParam(':rut', $rut, PDO::PARAM_STR, 10);
            $stmt->bindParam(':marca', $marca, PDO::PARAM_STR, 50);
            $stmt->bindParam(':precioRef', $precioRef, PDO::PARAM_STR, 20);
            $stmt->execute();
            $num= $stmt->rowCount();
                        
            if($num>0){
                
                while ($r = $stmt->fetch(PDO::FETCH_NUM)):   
                    $sTrR.=$r[0]; //ID del Producto
                endwhile; 
                
                $stmt->closeCursor();
                $output = $conn->query("select @codErr")->fetch(PDO::FETCH_ASSOC);
                $codErr = $output['@codErr'];
                
                switch($codErr){
                    case 1:
                        $desErr='PRODUCTO INGRESADO EXITOSAMENTE';
                        break;
                    case 2:
                        $desErr='PRODUCTO ACTUALIZADO EXITOSAMENTE';
                        break;
                }
                
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
