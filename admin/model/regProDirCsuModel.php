<?php

include("../model/conection.php");

    $sTr = '';
    $sTrR = '';
    $paginacion='';
    
    $codErr=0;
    $estado = '';
    $rut = '';
    $nombres = '';
    $apellidos = '';
    $strEst='';
    
    $desErr='OPERACION EXITOSA!';
    $strDat='';
    $strPag='';
    $strXml='';
    
    $id=$_REQUEST['id']; //switch= [1 | 2]; 1=PREVIOS, 2=POSTERIORES

    try{
	
        $conn=PDO_conectar();     

        if($conn){   

            $sql="CALL SP_CP_ADM_CSU_POS_PRO_DIR(:id, @codErr, @estado, @rut, @nombres, @apellidos);";
            $stmt = $conn->prepare($sql);
            $stmt->bindParam(':id', $id, PDO::PARAM_STR,20);
            $stmt->execute();
            $num= $stmt->rowCount();
            
            if($num>0){
                $cont=0;
                while ($r = $stmt->fetch(PDO::FETCH_NUM)):

                    $dirId=$r[0];
                    $dirNomReg=$r[1];
                    $dirNomPro=$r[2];
                    $dirNomCom=$r[3];
                    $dirNomTip=$r[4];
                    $dirNomCal=$r[5];
                    $dirNomVil=$r[6];
                    $dirNumero=$r[7];
                    $dirPublica=$r[8];
                    
                    if($dirPublica==1){
                        $publica='SI';
                    }else{
                        $publica='NO';
                    }
                    
                    $codRegion=$r[9];
                    $codProvincia=$r[10];
                    $codComuna=$r[11];
                    $codTipo=$r[12];
                    
                    $dirFechaIng=$r[13];
                                        
                    $sTr = '<tr style="cursor:pointer;">';
                    
                        $sTr.='<td>' . $dirId  . '</td>';
                        $sTr.='<td>' . $dirNomReg  . '</td>';
                        $sTr.='<td>' . $dirNomPro . '</td>';
                        $sTr.='<td>' . $dirNomCom . '</td>';
                        $sTr.='<td>' . $dirNomTip . '</td>';
                        $sTr.='<td>' . $dirNomCal . '</td>';
                        $sTr.='<td>' . $dirNomVil . '</td>';
                        $sTr.='<td>' . $dirNumero . '</td>';
                        $sTr.='<td>' . $publica . '</td>';
                        
                        $sTr.='<td style="display: none;">' . $codRegion . '</td>';
                        $sTr.='<td style="display: none;">' . $codProvincia . '</td>';
                        $sTr.='<td style="display: none;">' . $codComuna . '</td>';
                        $sTr.='<td style="display: none;">' . $codTipo . '</td>';
                        $sTr.='<td style="display: none;">' . $dirFechaIng . '</td>';
                        
                    $sTr.='</tr>';

                    $sTrR.=$sTr;

                endwhile; 
                
                $stmt->closeCursor();
                $output = $conn->query("SELECT @codErr,@estado,@rut,@nombres,@apellidos,@correo")->fetch(PDO::FETCH_ASSOC);
                $codErr = $output['@codErr'];
                $estado = $output['@estado'];
                $rut = $output['@rut'];
                $nombres = $output['@nombres'];
                $apellidos = $output['@apellidos'];
                
//                switch($estado){
//                    case 1: $strEst = 'REGISTRADO';
//                        break;
//                    case 2: $strEst = 'ALTA';
//                        break;
//                }
                
                
            }else{
                
                $stmt->closeCursor();
                $output = $conn->query("SELECT @codErr,@estado,@rut,@nombres,@apellidos,@correo")->fetch(PDO::FETCH_ASSOC);
                $codErr = $output['@codErr'];
                $estado = $output['@estado'];
                $rut = $output['@rut'];
                $nombres = $output['@nombres'];
                $apellidos = $output['@apellidos'];
//
//                switch($estado){
//                    case 1: $strEst = 'REGISTRADO';
//                        break;
//                    case 2: $strEst = 'ALTA';
//                        break;
//                }
//                
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
                        $desErr='POSTULACIÓN NO REGISTRADA O INEXISTENTE';
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
            $strXml.='<ESTADO>';
                $strXml.=$estado;
            $strXml.='</ESTADO>';
            $strXml.='<RUT>';
                $strXml.=$rut;
            $strXml.='</RUT>';
            $strXml.='<NOMBRES>';
                $strXml.=$nombres;
            $strXml.='</NOMBRES>';
            $strXml.='<APELLIDOS>';
                $strXml.=$apellidos;
            $strXml.='</APELLIDOS>';
            $strXml.='<DIRECCIONES>';
                $strXml.= '<![CDATA[';
                    $strXml.=$sTrR;
                $strXml.=']]>';    
            $strXml.='</DIRECCIONES>';
        $strXml.='</DATOS>';
    $strXml.='</SALIDA>';
    echo $strXml;

    