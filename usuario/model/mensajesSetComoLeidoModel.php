<?php

include("../model/conection.php");

    $sTr = '';
    $sTrR = '';
    $paginacion='';
    
    $codErr=0;
    $desErr='OPERACION EXITOSA!';
    $strDat='';
    $noLeidos='';
    $strXml='';
    
    //$_SESSION['idPub']=0;
    
    $mId=$_REQUEST['mId']; //id del mensaje
    $email=$_REQUEST['email']; //email del destinatario
    
    //if(ISSET($rut)){
    
    try{
	
        $conn=PDO_conectar();     

        if($conn){ 

            $sql="CALL SP_CP_EDI_MENSAJE_SET_COMO_LEIDO(:mId, :email, @codErr);";

            $stmt = $conn->prepare($sql);
            $stmt->bindParam(':mId', $mId, PDO::PARAM_STR,20);
            $stmt->bindParam(':email', $email, PDO::PARAM_STR,50);
            $stmt->execute();
            $num= $stmt->rowCount();
            
            if($num>0){
                while ($r = $stmt->fetch(PDO::FETCH_NUM)): 
                    $strDat.=$r[0];
                    $noLeidos.=$r[1];      
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
            $strXml.=$strDat;
        $strXml.='</DATOS>';
        $strXml.='<NOLEIDOS>';
            $strXml.=$noLeidos;
        $strXml.='</NOLEIDOS>';
    $strXml.='</SALIDA>';
    echo $strXml;

    