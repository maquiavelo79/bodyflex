<?php
    include("../../model/conection.php");
    
    $strXml='';
    $codErr=0;
    $desErr='OPERACION EXITOSA';
    $res=0;
    
    $firstname=$_REQUEST["firstname"];
    $lastname=$_REQUEST["lastname"];
    $alias=$_REQUEST["alias"];
    $email=$_REQUEST["email"];
    $password=$_REQUEST["password"];
    $fechaNacimiento=$_REQUEST["fechaNacimiento"];
    $sexo=$_REQUEST["sexo"];
        
    sleep(1);
   
    try{
      
        $conn=PDO_conectar(); 

        if($conn){

            $sql = 'CALL SP_RU_INGRESA_ACTUALIZA_USUARIO(:firstname, :lastname, :alias, :email, :password, :fechaNacimiento, :sexo, @codErr)';
            $stmt = $conn->prepare($sql);
            $stmt->bindParam(':firstname', $firstname, PDO::PARAM_STR, 100);
            $stmt->bindParam(':lastname', $lastname, PDO::PARAM_STR, 100);
            $stmt->bindParam(':alias', $alias, PDO::PARAM_STR, 100);
            $stmt->bindParam(':email', $email, PDO::PARAM_STR, 100);
            $stmt->bindParam(':password', $password, PDO::PARAM_STR, 100);
            $stmt->bindParam(':fechaNacimiento', $fechaNacimiento, PDO::PARAM_STR, 20);
            $stmt->bindParam(':sexo', $sexo, PDO::PARAM_STR, 1);
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
            //$strXml.= '<![CDATA[';
                $strXml.=$res;
            //$strXml.=']]>';
        $strXml.='</DATOS>';
    $strXml.='</SALIDA>';
    echo $strXml;