<?php
session_start(); 
include("../model/conection.php");

    $cont=0;
    $sTr = '';
    $sTrR='';
    $strXml='';
    $codErr=0;
    $desErr='OPERACION EXITOSA!';

    $PRONO='';
    $ID_CAT1='';
    $NOM_CAT1='';
    $ID_CAT2='';
    $NOM_CAT2='';
    $ID_CAT3='';
    $NOM_CAT3='';
    $URL='';
                
    $id=$_REQUEST['id']; // ultimo numero de la paginación
    
    try{
	
        $conn=PDO_conectar();     

        if($conn){    

            $sql="CALL SP_CP_ADM_CSU_PRO_ADD_COL2(:id, @codErr);";
            $stmt = $conn->prepare($sql);
            $stmt->bindParam(':id', $id, PDO::PARAM_STR, 10);
            $stmt->execute();
            $num= $stmt->rowCount();
            
            if($num>0){
                while ($r = $stmt->fetch(PDO::FETCH_NUM)): 
                    
                    $cont+=1;
                    $PRONO=$r[0];
                    $ID_CAT1=$r[1];
                    $NOM_CAT1=$r[2];
                    $ID_CAT2=$r[3];
                    $NOM_CAT2=$r[4];
                    $ID_CAT3=$r[5];
                    $NOM_CAT3=$r[6];
                    $URL=$r[7];
                                       
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
                        $desErr='PRODUCTO NO EXISTE';
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
            $strXml.= '<NOMBRE>';
                $strXml.=$PRONO;
            $strXml.='</NOMBRE>';
            $strXml.= '<CAT1_NOM>';
                $strXml.=$NOM_CAT1;
            $strXml.='</CAT1_NOM>';
            $strXml.= '<CAT1_COD>';
                $strXml.=$ID_CAT1;
            $strXml.='</CAT1_COD>';
            $strXml.= '<CAT2_NOM>';
                $strXml.=$NOM_CAT2;
            $strXml.='</CAT2_NOM>';
            $strXml.= '<CAT2_COD>';
                $strXml.=$ID_CAT2;
            $strXml.='</CAT2_COD>';
            $strXml.= '<CAT3_NOM>';
                $strXml.=$NOM_CAT3;
            $strXml.='</CAT3_NOM>';
            $strXml.= '<CAT3_COD>';
                $strXml.=$ID_CAT3;
            $strXml.='</CAT3_COD>';
            $strXml.= '<URL>';
                $strXml.=$URL;
            $strXml.='</URL>';
        $strXml.='</DATOS>';
    $strXml.='</SALIDA>';
    echo $strXml;
