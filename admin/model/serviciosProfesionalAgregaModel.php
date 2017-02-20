<?php
session_start(); 
include("../model/conection.php");

    $rut=$_REQUEST['rut'];
    $id=$_REQUEST['id'];
    $email=$_REQUEST['email'];
    $nom=$_REQUEST['nom'];
    $fli=$_REQUEST['fli'];
    $dc=$_REQUEST['dc'];
    $dt=$_REQUEST['dt'];
    $ci=$_REQUEST['ci'];
      
    $sTrR='';
    $strXml='';
    $codErr=0;
    $desErr='OPERACION EXITOSA!';
    $identificador="";

    
    try{
	
        $conn=PDO_conectar();     

        if($conn){  

            $sql="CALL SP_CP_ADM_SERVICIO_PROFE_INGRESA_MODIFICA(:rut, :id, :email, :nom, :fli, :dc, :dt, :ci, @codErr, @identificador);";

            $stmt = $conn->prepare($sql);
            $stmt->bindParam(':rut', $rut, PDO::PARAM_STR,10);
            $stmt->bindParam(':id', $id, PDO::PARAM_STR,20);
            $stmt->bindParam(':email', $email, PDO::PARAM_STR,50);
            $stmt->bindParam(':nom', $nom, PDO::PARAM_STR,50);
            $stmt->bindParam(':fli', $fli, PDO::PARAM_STR,50);
            $stmt->bindParam(':dc', $dc, PDO::PARAM_STR,100);
            $stmt->bindParam(':dt', $dt, PDO::PARAM_STR,1000);
            $stmt->bindParam(':ci', $ci, PDO::PARAM_STR,50);
            $stmt->execute();

            $stmt->closeCursor();
            $output = $conn->query("select @codErr, @identificador")->fetch(PDO::FETCH_ASSOC);
            $codErr = $output['@codErr'];
            $identificador=$output['@identificador'];

            switch($codErr){
                case 99:
                    $desErr='ERROR EN PROCEDIMEINTO';
                    break;
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
//        $strXml.='<DATOS>';
//            $strXml.= '<![CDATA[';
//                $strXml.=$sTrR;
//            $strXml.=']]>';
//        $strXml.='</DATOS>';
        $strXml.='<ID>';
            $strXml.=$identificador;
        $strXml.='</ID>';
    $strXml.='</SALIDA>';
    echo $strXml;
