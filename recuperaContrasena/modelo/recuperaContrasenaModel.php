<?php
    include("../../model/conection.php");
    require("../../PHPMailer/PHPMailerAutoload.php");
     
    $email=($_POST["email"]);
    
    $longitud=10;
    $clave='';
    $template='';
    $strXml=''; 
    
    //1° verificar si clave esta vigente, sino asociar.    
//        conectar();
//        do{
//            $clave=generarCodigo($longitud);
//            $resp=mysql_fetch_array(mysql_query("call SP_RC_VERIFICA_ASOCIA_CODIGO('" . $clave . "'," . "'" . $email . "');"), MYSQL_NUM);        
//        }while($resp[0]==2);    
//        desconectar();
        
        try{
      
        $conn=PDO_conectar(); 

        if($conn){

            $clave=generarCodigo($longitud);
            $sql = 'CALL SP_RU_VERIFICA_ASOCIA_CODIGO(:clave, :email, @codErr)';
            $stmt = $conn->prepare($sql);
            $stmt->bindParam(':clave', $clave, PDO::PARAM_STR, 100);
            $stmt->bindParam(':email', $email, PDO::PARAM_STR, 100);
            $stmt->execute();
            $num= $stmt->rowCount();

            if($num>0){
                while ($r = $stmt->fetch(PDO::FETCH_NUM)):
                    $opc=$r[0];
                    $nom=$r[1];
                    $ape=$r[2];
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
                    $strXml.='</DATOS>';
                $strXml.='</SALIDA>';
                echo $strXml;
                exit();
                
            }        
        }else{
            
            $codErr=9;
            $desErr='NO ES POSIBLE CONECTAR';
            
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
                $strXml.='</DATOS>';
            $strXml.='</SALIDA>';
            echo $strXml;
            exit();
                
        }
    
    }catch(PDOException $exception){ 
       $codErr=100;
       $desErr=$exception->getMessage(); 
       
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
            $strXml.='</DATOS>';
        $strXml.='</SALIDA>';
        echo $strXml;
        exit();
       
    } 
            
    //2° enviar correo electrónico al cliente si asignación es exitosa
                  
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
        $mail->AddAddress($email);
        $mail->Subject = "Bodyflex - Recupera clave";
        
            $template = file_get_contents('../plantilla/plantillaRecuperaClave.html','r');
            $template = str_replace("%NOMBRE%",strtoupper($nom),$template);
            $template = str_replace("%APELLIDO%",strtoupper($ape),$template);
            $template = str_replace("%CODIGO%",$clave,$template);       
            
        $mail->Body = $template;
        $mail->AltBody = "Estimado(a) " . $nom .' '. $ape. " Puedes restablecer tu contraseña ingresando este código " . $clave .", saludos.";
        $mail->SMTPDebug = 0; //0 = APAGADO, 1 = ENCENDIDO
        $exito = $mail->Send();
                
        $intentos=1; 
        $errInf = '';
        
        while ((!$exito) && ($intentos < 3)) {
            //sleep(2);
            //echo $mail->ErrorInfo;
            $errInf = $mail->ErrorInfo;
            $exito = $mail->Send();
            $intentos=$intentos+1;	
         }
        
        if(!$exito){
            
            $strXml.='<SALIDA>';
                $strXml.='<ERROR>';
                    $strXml.='<CODERROR>';
                        $strXml.=97;
                    $strXml.='</CODERROR>';
                    $strXml.='<DESERROR>';
                        $strXml.=$errInf;
                    $strXml.='</DESERROR>';
                $strXml.='</ERROR>';    
                $strXml.='<DATOS>';
                $strXml.='</DATOS>';
            $strXml.='</SALIDA>';
            echo $strXml;
            exit();
            
        }else{
            //echo "<div id='mensaje' style='display: block;'>Mensaje enviado correctamente.</div>";
            
            $strXml.='<SALIDA>';
                $strXml.='<ERROR>';
                    $strXml.='<CODERROR>';
                        $strXml.=0;
                    $strXml.='</CODERROR>';
                    $strXml.='<DESERROR>';
                        $strXml.="OPERACION EXITOSA";
                    $strXml.='</DESERROR>';
                $strXml.='</ERROR>';    
                $strXml.='<DATOS>';
                $strXml.='</DATOS>';
            $strXml.='</SALIDA>';
            echo $strXml;
            exit();
            
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
