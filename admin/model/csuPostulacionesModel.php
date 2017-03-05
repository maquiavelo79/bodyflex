<?php

include("../model/conection.php");
    
    $strXml="";
    $codErr=0;
    $desErr='OPERACION EXITOSA!';

    $posIng=""; //INGRESADAS
    $posEva=""; //EVALUANDO
    $posDet=""; //DETENIDA
    $posApr1=""; //APROBANDO
    $posRez1=""; //RECHAZANDO
    $posApr2=""; //APROBADA 
    $posRez2=""; //RECHAZADA
    $posReg=""; //REGISTRADA
    $posDir=""; //DIRECCIONES
    $posCta=""; //CUENTAS
    $posPer=""; //PERFILADO
    $posAlt=""; //ALTA    
    
    try{
	
        $conn=PDO_conectar();     

        if($conn){   

            $sql="CALL SP_CP_ADM_CSU_POSTULACIONES(@codErr);";
            $stmt = $conn->prepare($sql);
            $stmt->execute();
            $num= $stmt->rowCount();
            
            if($num>0){
                while ($r = $stmt->fetch(PDO::FETCH_NUM)):
                    
                    $posIng=$r[0]; //INGRESADAS
                    $posEva=$r[1]; //EVALUANDO
                    $posDet=$r[2]; //DETENIDA
                    $posApr1=$r[3]; //APROBANDO
                    $posRez1=$r[4]; //RECHAZANDO
                    $posApr2=$r[5]; //APROBADA 
                    $posRez2=$r[6]; //RECHAZADA
                    $posReg=$r[7]; //REGISTRADA
                    $posDir=$r[8]; //DIRECCIONES
                    $posCta=$r[9]; //CUENTAS
                    $posPer=$r[10]; //PERFILADO
                    $posAlt=$r[11]; //ALTA
                
                endwhile; 
                
            }else{
                
                $stmt->closeCursor();
                $output = $conn->query("select @codErr")->fetch(PDO::FETCH_ASSOC);
                $codErr = $output['@codErr'];

                switch($codErr){  
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

        $strXml.='</DATOS>';
        $strXml.='<INGRESADAS>';
            $strXml.=$posIng;
        $strXml.='</INGRESADAS>';
        $strXml.='<EVALUANDO>';
            $strXml.=$posEva;
        $strXml.='</EVALUANDO>';
        $strXml.='<DETENIDA>';
            $strXml.=$posDet;
        $strXml.='</DETENIDA>';
        $strXml.='<APROBANDO>';
            $strXml.=$posApr1;
        $strXml.='</APROBANDO>';
        $strXml.='<RECHAZANDO>';
            $strXml.=$posRez1;
        $strXml.='</RECHAZANDO>';
        $strXml.='<APROBADA>';
            $strXml.=$posApr2;
        $strXml.='</APROBADA>';
        $strXml.='<RECHAZADA>';
            $strXml.=$posRez2;
        $strXml.='</RECHAZADA>';
        $strXml.='<REGISTRADA>';
            $strXml.=$posReg;
        $strXml.='</REGISTRADA>';
        $strXml.='<DIRECCIONES>';
            $strXml.=$posDir;
        $strXml.='</DIRECCIONES>';
        $strXml.='<CUENTAS>';
            $strXml.=$posCta;
        $strXml.='</CUENTAS>';
        $strXml.='<PERFILADO>';
            $strXml.=$posPer;
        $strXml.='</PERFILADO>';
        $strXml.='<ALTA>';
            $strXml.=$posAlt;
        $strXml.='</ALTA>';
    $strXml.='</SALIDA>';
    echo $strXml;

    