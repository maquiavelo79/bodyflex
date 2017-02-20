<?php

include("../model/conection.php");
require("../../PHPMailer/PHPMailerAutoload.php");

    $sTr = '';
    $sTrR = '';
    $paginacion='';
    $sId=0;
    
    $longitud=10;
    $codErr=0;
    $desErr='OPERACION EXITOSA!';
    $strDat='';
    $strPag='';
    $strXml='';
    
    $id=$_REQUEST['id']; 
    $nom=$_REQUEST['nom']; 
    $ape=$_REQUEST['ape']; 
    $email=$_REQUEST['email']; 
    
    try{
	
        $conn=PDO_conectar();     

        if($conn){   

            $clave=generarCodigo($longitud);
            $sql="CALL SP_CP_ADM_ING_ALT_PRO(:id, :clave, @codErr);";
            $stmt = $conn->prepare($sql);
            $stmt->bindParam(':id', $id, PDO::PARAM_STR, 20);
            $stmt->bindParam(':clave', $clave, PDO::PARAM_STR, 20);
            $stmt->execute();
            $num= $stmt->rowCount();
            
            if($num>0){
                while ($r = $stmt->fetch(PDO::FETCH_NUM)):
                    $sTrR.=$r[0];
                endwhile; 
                envioEmailAprobacion($email, $nom, $ape, $clave);
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
                        $desErr='REGISTRO NO EXISTE';
                        break;
                    case 97:
                        $desErr='FAVOR INGRESE DIRECCIONES DEL PROFESIONAL (RECUERDE QUE AL MENOS UNA DIRECCIÓN DEBE SER MOSTRADA EN EL PERFIL WEB)';
                        break;
                    case 96:
                        $desErr='FAVOR INGRESE CUENTAS BANCARIAS DEL PROFESIONAL';
                        break;
                    case 95:
                        $desErr='FAVOR INGRESE PERFIL DEL PROFESIONAL';
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

    function envioEmailAprobacion($email, $nom, $ape, $clave){
        
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
        $mail->Subject = "Bodyflex - Postulacion Aprobada";
        
            $template = file_get_contents('../plantilla/postulacionAprobada.html','r');
            $template = str_replace("%NOMBRE%",strtoupper($nom),$template);
            $template = str_replace("%APELLIDO%",strtoupper($ape),$template);
            $template = str_replace("%CODIGO%",$clave,$template);   
                        
        $mail->Body = $template;
        $mail->AltBody = "Estimado(a) " . $nom .' '. $ape. "Nos es muy grato informar que tu postulación ha sido aprobada....";
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
    
    
    function generarCodigo($longitud){ 
	$key = ''; 
	$pattern = '1234567890abcdefghijklmnopqrstuvwxyz'; 
	$max = strlen($pattern)-1; 
	for ($i = 0; $i < $longitud; $i++){
            $key .= $pattern{mt_rand(0, $max)};
        }
        return strtoupper($key); 
    }