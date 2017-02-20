<?php
session_start(); 
include("../model/conection.php");

$sTr = '';
$sTrR = '';

    $_SESSION['poId']=0;
    $rut=$_REQUEST['rut'];

    $cont=0;
    $strXml='';
    $codErr=0;
    $desErr='OPERACION EXITOSA!';
    
    try{
	
        $conn=PDO_conectar();     

        if($conn){   

            $sql="CALL SP_CP_PRO_PORTAFOLIO_CONSULTA(:rut, @codErr);";
            $stmt = $conn->prepare($sql);
            $stmt->bindParam(':rut', $rut, PDO::PARAM_STR, 20);
            $stmt->execute();
            $num= $stmt->rowCount();
            
            if($num>0){
                while ($r = $stmt->fetch(PDO::FETCH_NUM)): 

                    $cont+=1;
                    $poId=$r[0];
                    $poCap=$r[1];
                    $poImg=$r[2];
                    $poFli=$r[3];
                    $poCan=$r[4];

                    $sTr = '<tr style="cursor:pointer;">';
                        $sTr.='<td style="width: 20%; text-align: center;" class="center">' . $poId   . '</td>';
                        $sTr.='<td style="width: 20%; text-align: center;" class="center">' . $poCap . '</td>';
                        $sTr.='<td style="width: 20%; text-align: center;" class="center">' . $poFli  . '</td>';
                    $sTr.='</tr>';
                    $sTrR.=$sTr;
                    
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
            $strXml.= '<![CDATA[';
                $strXml.=$sTrR;
            $strXml.=']]>';
        $strXml.='</DATOS>';
        $strXml.='<CONTADOR>';
            $strXml.=$cont;
        $strXml.='</CONTADOR>';
    $strXml.='</SALIDA>';
    echo $strXml;
