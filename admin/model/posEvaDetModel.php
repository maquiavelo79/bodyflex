<?php

include("../model/conection.php");
require("../../PHPMailer/PHPMailerAutoload.php");

//sleep(1);

    $sTrR='';
    $strXml='';
    $codErr=0;
    $desErr='OPERACION EXITOSA!';

    $id=$_REQUEST['id'];
    $nom=$_REQUEST['nom'];
    $ape=$_REQUEST['ape'];
    $email=$_REQUEST['email'];
    
    
//    echo 'id ' . $id .'<br>';
//    echo 'nom ' . $nom .'<br>'; 
//    echo 'ape ' . $ape .'<br>'; 
//    echo 'email ' . $email .'<br>'; 
//    exit();
    
    //sleep(1);
    
    try{
    
        $conn=PDO_conectar(); 

        if($conn){

            $sql="CALL SP_CP_ADM_MOD_EST_POS_DET(:id, @codErr);";    

            $stmt = $conn->prepare($sql);
            $stmt->bindParam(':id', $id, PDO::PARAM_STR, 20);
            $stmt->execute();
            $num= $stmt->rowCount();
                        
            if($num>0){
                while ($r = $stmt->fetch(PDO::FETCH_NUM)):   
                    $sTrR.=$r[0];
                endwhile; 
                envioEmailDetencion($email, $nom, $ape);
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
            $strXml.=$sTrR;
        $strXml.='</DATOS>';
    $strXml.='</SALIDA>';
    echo $strXml;        

    
    function envioEmailDetencion($email, $nom, $ape){
        
        $mail = new PHPMailer();
        $mail->isSMTP();                                          
        $mail->Mailer = "smtp";
        $mail->Host = "smtp.gmail.com";
        $mail->SMTPAuth = true;
        $mail->SMTPSecure = 'tls'; 
        $mail->Username = "fcalderonnavarro@gmail.com"; 
        $mail->Password = "vod2ka1979";
        $mail->From = "fcalderonnavarro@gmail.com";
        $mail->FromName = "Francisco Calderon";
        $mail->Timeout=30;
        $mail->AddAddress("fcalderonnavarro@gmail.com");
        $mail->Subject = "Bodyflex - Detencion Postulacion";
        
            $template = file_get_contents('../plantilla/postulacionDetenida.html','r');
            $template = str_replace("%NOMBRE%",strtoupper($nom),$template);
            $template = str_replace("%APELLIDO%",strtoupper($ape),$template);
                        
        $mail->Body = $template;
        $mail->AltBody = "Estimado(a) " . $nom .' '. $ape. " Tu postulación se encuentra DETENIDA a la espera de evidencias";
        $mail->SMTPDebug = 0; //0 = APAGADO, 1 = ENCENDIDO
        $exito = $mail->Send();
                
        $intentos=1; 
        $errInf = '';
        
        while ((!$exito) && ($intentos < 3)) {
            $errInf = $mail->ErrorInfo;
            $exito = $mail->Send();
            $intentos=$intentos+1;	
         }
        
        
    }