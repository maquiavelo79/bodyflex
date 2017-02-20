<?php
session_start(); 
header('Content-Type: text/plain');
//header('Content-Type: text/xml');
include("../model/conection.php");

    $cont=0;
    $sTr = '';
    $strCmb ='';
    $sTrR='';
    $strXml='';
    $codErr=0;
    $desErr='OPERACION EXITOSA!';

    $_SESSION['spId']=0;
   
    try{
	
        $conn=PDO_conectar();     
        if($conn){  

            $sql="CALL SP_CP_ADM_SERVICIO_PROFE_CONSULTA(@codErr);";
            $stmt = $conn->prepare($sql);
            $stmt->execute();
            $num= $stmt->rowCount();
            
            if($num>0){

                $strCmb.='<select style="background-color: whitesmoke; box-shadow: 0 0 2px black; margin: 0px 0px 0px 0px; font-weight: bold; color: black; width: 400px; color: black;" id="cmbTipSer" onchange="obtenerServicio(this);">';
                    $strCmb.='<option value="(SELECCIONE)">(SELECCIONE)</option>';                               
                        while ($r = $stmt->fetch(PDO::FETCH_NUM)): 
                            
                            $cont+=1;
                            $spId=$r[0];
                            $spNom=$r[1];
                            $strCmb.='<option value="' . $spId . '">' . $spNom . '</option>';
      
                        endwhile;   
                $strCmb.='</select>'; 
                
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
            $strXml.= '<![CDATA[';
                $strXml.=$strCmb;
            $strXml.=']]>';
        $strXml.='</DATOS>';
    $strXml.='</SALIDA>';
    echo $strXml;
