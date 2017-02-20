<?php

include("../model/conection.php");

    $sTr = '';
    $sTrR = '';
    
    $codErr=0;
    $strEst='';
    
    $desErr='OPERACION EXITOSA!';
    $strXml='';
    
    $id=$_REQUEST['id']; //switch= [1 | 2]; 1=PREVIOS, 2=POSTERIORES

    try{
	
        $conn=PDO_conectar();     

        if($conn){   

            $sql="CALL SP_CP_ADM_CSU_POS_PRO_BSQ(:id, @codErr);";
            $stmt = $conn->prepare($sql);
            $stmt->bindParam(':id', $id, PDO::PARAM_STR,80);
            $stmt->execute();
            $num= $stmt->rowCount();
            
            if($num>0){
                $cont=0;
                while ($r = $stmt->fetch(PDO::FETCH_NUM)):

                    $bsqId=$r[0];
                    $bsqEst=$r[1];
                    $bsqNom=$r[2];
                    $bsqApe=$r[3];
                    $bsqMai=$r[4];
                    $bsqFec=$r[5];
                    
                    switch($bsqEst){
                        case 1: $strEst = 'INGRESADA';
                            break;
                        case 2: $strEst = 'EVALUANDO';
                            break;
                        case 3: $strEst = 'DETENIDA';
                            break;
                        case 4: $strEst = 'APROBANDO';
                            break;
                        case 5: $strEst = 'RECHAZANDO';
                            break;
                        case 6: $strEst = 'APROBADA';
                            break;
                        case 7: $strEst = 'RECHAZADA';
                            break;
                        case 8: $strEst = 'REGISTRADO';
                            break;
                    }
                    
                    
                    $sTr = '<tr style="cursor:pointer;">';
                    
                        $sTr.='<td>' . $bsqId  . '</td>';
                        $sTr.='<td>' . $strEst  . '</td>';
                        $sTr.='<td>' . $bsqNom . '</td>';
                        $sTr.='<td>' . $bsqApe . '</td>';
                        $sTr.='<td>' . $bsqMai . '</td>';
                        $sTr.='<td>' . $bsqFec . '</td>';
                                               
                    $sTr.='</tr>';

                    $sTrR.=$sTr;

                endwhile; 
                
                $stmt->closeCursor();
                $output = $conn->query("SELECT @codErr")->fetch(PDO::FETCH_ASSOC);
                $codErr = $output['@codErr'];
                
            }else{
                
                $stmt->closeCursor();
                $output = $conn->query("SELECT @codErr")->fetch(PDO::FETCH_ASSOC);
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
                        $desErr='SIN COINCIDENCIAS ENCONTRADAS';
                        break;
                    case 97: 
                        $desErr='POSTULACIÓN SIN DIRECCIONES, FAVOR PROCEDA A SU REGISTRO';
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
                $strXml.=$sTrR;
            $strXml.=']]>';    
        $strXml.='</DATOS>';
    $strXml.='</SALIDA>';
    echo $strXml;

    