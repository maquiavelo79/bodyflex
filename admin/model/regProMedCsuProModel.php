<?php

include("../model/conection.php");

    $strCmb='';
    $catEti='';

    $codErr=0;
    $desErr='OPERACION EXITOSA!';
    $sTr='';
    $sTrR='';
    $strXml='';
    
    $proNom = "";
    $proMar = "";
    $proCat1 = "";
    $proCat2 = "";
    $proCat3 = "";
    
    $codPro=$_REQUEST['id'];
        
    try{
	
        $conn=PDO_conectar();     

        if($conn){  

            $sql="CALL SP_CP_ADM_CSU_MED_PRO(:codPro, @codErr, @proNom, @proMar, @proCat1, @proCat2, @proCat3);";

            $stmt = $conn->prepare($sql);
            $stmt->bindParam(':codPro', $codPro, PDO::PARAM_STR,10);
            $stmt->execute();
            $num= $stmt->rowCount();
            
            if($num>0){
                while ($r = $stmt->fetch(PDO::FETCH_NUM)):  
                    
                    $sTr = '<tr style="cursor:pointer;">';
                        $sTr.='<td>' . $r[0] . '</td>';
                        $sTr.='<td>' . $r[1] . '</td>';
                        $sTr.='<td>' . $r[2] . '</td>';
                    $sTr.='</tr>';
                    $sTrR.=$sTr;
                    
                endwhile; 
                
                $stmt->closeCursor();
                $output = $conn->query("select @codErr, @proNom, @proMar, @proCat1, @proCat2, @proCat3")->fetch(PDO::FETCH_ASSOC);
                $codErr = $output['@codErr'];
                $proNom = $output['@proNom'];
                $proMar = $output['@proMar'];
                $proCat1 = $output['@proCat1'];
                $proCat2 = $output['@proCat2'];
                $proCat3 = $output['@proCat3'];
                
                if(empty($proCat2)){
                    $proCat2=0;
                }
                if(empty($proCat3)){
                    $proCat3=0;
                }
                
            }else{

                $stmt->closeCursor();
                $output = $conn->query("select @codErr, @proNom, @proMar, @proCat1, @proCat2, @proCat3")->fetch(PDO::FETCH_ASSOC);
                $codErr = $output['@codErr'];
                $proNom = $output['@proNom'];
                $proMar = $output['@proMar'];
                $proCat1 = $output['@proCat1'];
                $proCat2 = $output['@proCat2'];
                $proCat3 = $output['@proCat3'];

                if(empty($proCat2)){
                    $proCat2=0;
                }
                if(empty($proCat3)){
                    $proCat3=0;
                }
                
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
                        $desErr='PRODUCTO NO EXISTE';
                        break;
                    case 97:
                        $desErr='PRODUCTO SIN MEDIDAS';
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
        $strXml.='<NOMBRE>';
                $strXml.=$proNom;
        $strXml.='</NOMBRE>';
        $strXml.='<MARCA>';
                $strXml.=$proMar;
        $strXml.='</MARCA>';
        $strXml.='<CAT1>';
            $strXml.=$proCat1;
        $strXml.='</CAT1>';
        $strXml.='<CAT2>';
            $strXml.=$proCat2;
        $strXml.='</CAT2>';
        $strXml.='<CAT3>';
            $strXml.=$proCat3;
        $strXml.='</CAT3>';
        $strXml.='<DATOS>';
            $strXml.= '<![CDATA[';
                $strXml.=$sTrR;
            $strXml.=']]>';    
        $strXml.='</DATOS>';
    $strXml.='</SALIDA>';
    echo $strXml;