<?php
session_start(); 
include("../model/conection.php");

    $id=$_REQUEST['id'];
    $rut=$_REQUEST['rut'];
      
    $sTrR='';
    $strXml='';
    $codErr=0;
    $desErr='OPERACION EXITOSA!';
    $serAgr='';
    
    try{
	
        $conn=PDO_conectar();     

        if($conn){    

            $sql="CALL SP_CP_PRO_SERVICIO_PROFESIONAL_AGREGA(:id, :rut, @codErr);";
            $stmt = $conn->prepare($sql);
            $stmt->bindParam(':id', $id, PDO::PARAM_STR, 20);
            $stmt->bindParam(':rut', $rut, PDO::PARAM_STR, 10);
            $stmt->execute();
            $num= $stmt->rowCount();
               
            if($num>0){
                while ($r = $stmt->fetch(PDO::FETCH_NUM)):   

                    $saId=$r[0]; // ID del servicio agregado asociado al profesional
                    $seId=$r[1]; // ID del servicio
                    $seNom=$r[2];
                    $seDC=$r[3];
                    $seDL=$r[4];
                    $serAgr=$r[5];

                    $sTr = '<tr style="cursor:pointer;">';
                        $sTr.='<td style="width: 5%; text-align: center;" class="center">' . $saId   . '</td>';
                        $sTr.='<td style="width: 5%; text-align: center;" class="center">' . $seId   . '</td>';
                        $sTr.='<td style="width: 10%;" class="center">' . $seNom . '</td>';
                        $sTr.='<td style="width: 20%; text-align: justify;" class="center">' . $seDC . '</td>';
                        $sTr.='<td style="width: 60%; text-align: justify;" class="center">' . $seDL  . '</td>';
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
                        $desErr='SERVICIO YA SE ENCUENTRA EN SU LISTA DE SERVICIOS';
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
        $strXml.='<AGREGADO>';
            $strXml.=$serAgr;
        $strXml.='</AGREGADO>';
    $strXml.='</SALIDA>';
    echo $strXml;
