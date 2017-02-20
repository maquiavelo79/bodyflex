<?php

include("../model/conection.php");

    $sTr = '';
    $sTrR = '';
    $paginacion='';
    $sId=0;
    
    $codErr=0;
    $desErr='OPERACION EXITOSA!';
    $strDat='';
    $strPag='';
    $strXml='';
    
    $id=$_REQUEST['id']; 
    $region=$_REQUEST['region']; 
    $tecnico=$_REQUEST['tecnico']; 
    $profesional=$_REQUEST['profesional']; 
    $licenciado=$_REQUEST['licenciado']; 
    $master=$_REQUEST['master']; 
    $mba=$_REQUEST['mba']; 
    $doctor=$_REQUEST['doctor']; 
    $certificacion=$_REQUEST['certificacion']; 
    $diplomado=$_REQUEST['diplomado']; 
    $torneo=$_REQUEST['torneo']; 
    $sexo=$_REQUEST['sexo']; 
    $experiencia=$_REQUEST['experiencia']; 
    $edad=$_REQUEST['edad']; 
    $especialidad=$_REQUEST['especialidad']; 
    $rut=$_REQUEST['rut']; 
 
    $matrix=explode('-',$rut);  
    $rut=str_replace(".", "", $matrix[0]); 
    
    try{
	
        $conn=PDO_conectar();     

        if($conn){   

            $sql="CALL SP_CP_ADM_ING_PER_PRO(:id, :region, :tecnico, :profesional, :licenciado, :master, :mba, :doctor, :certificacion, :diplomado, :torneo, :sexo, :experiencia, :edad, :especialidad, :rut, @codErr);";
            $stmt = $conn->prepare($sql);
            $stmt->bindParam(':id', $id, PDO::PARAM_STR, 20);
            $stmt->bindParam(':region', $region, PDO::PARAM_INT);
            $stmt->bindParam(':tecnico', $tecnico, PDO::PARAM_INT);
            $stmt->bindParam(':profesional', $profesional, PDO::PARAM_INT);
            $stmt->bindParam(':licenciado', $licenciado, PDO::PARAM_INT);
            $stmt->bindParam(':master', $master, PDO::PARAM_INT);
            $stmt->bindParam(':mba', $mba, PDO::PARAM_INT);
            $stmt->bindParam(':doctor', $doctor, PDO::PARAM_INT);
            $stmt->bindParam(':certificacion', $certificacion, PDO::PARAM_INT);
            $stmt->bindParam(':diplomado', $diplomado, PDO::PARAM_INT);
            $stmt->bindParam(':torneo', $torneo, PDO::PARAM_INT);
            $stmt->bindParam(':sexo', $sexo, PDO::PARAM_INT);
            $stmt->bindParam(':experiencia', $experiencia, PDO::PARAM_INT);
            $stmt->bindParam(':edad', $edad, PDO::PARAM_INT);
            $stmt->bindParam(':especialidad', $especialidad, PDO::PARAM_STR, 50);
            $stmt->bindParam(':rut', $rut, PDO::PARAM_STR, 20);
            $stmt->execute();
            $num= $stmt->rowCount();
            
            if($num>0){
                while ($r = $stmt->fetch(PDO::FETCH_NUM)):
                    $sId=$r[0];
                    $sTrR.=$r[1];
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
                        $desErr='SIN PERFIL';
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
        $strXml.='<ACCION>';
                $strXml.=$sTrR;
        $strXml.='</ACCION>';
        $strXml.='<IDENTIFICADOR>';
            $strXml.=$sId;
        $strXml.='</IDENTIFICADOR>';
    $strXml.='</SALIDA>';
    echo $strXml;

    