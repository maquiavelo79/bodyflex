<?php

    include("../../model/conection.php");
     
    $email=($_POST["email"]);
    $codigo=($_POST["codigo"]);
    $pass=($_POST["pass"]);
    
    $strXml='';
    $codErr=0;
    $desErr='OPERACION EXITOSA';
    
    try{
      
        $conn=PDO_conectar(); 

        if($conn){

            $sql = 'CALL SP_RU_REGULARIZA_CUENTA_CODIGO(:codigo, :email, :pass, @codErr)';
            $stmt = $conn->prepare($sql);
            $stmt->bindParam(':codigo', $codigo, PDO::PARAM_STR, 50);
            $stmt->bindParam(':email', $email, PDO::PARAM_STR, 50);
            $stmt->bindParam(':pass', $pass, PDO::PARAM_STR, 50);
            $stmt->execute();
            $num= $stmt->rowCount();

            if($num>0){
                while ($r = $stmt->fetch(PDO::FETCH_NUM)):
                    $res=$r[0];
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
                $strXml.=$res;
            $strXml.=']]>';
        $strXml.='</DATOS>';
    $strXml.='</SALIDA>';
    echo $strXml;