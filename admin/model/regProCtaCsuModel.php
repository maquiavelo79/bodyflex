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

            $sql="CALL SP_CP_ADM_CSU_POS_PRO_CTA(:id, @codErr, @estado, @rut, @nombres, @apellidos);";
            $stmt = $conn->prepare($sql);
            $stmt->bindParam(':id', $id, PDO::PARAM_STR,20);
            $stmt->execute();
            $num= $stmt->rowCount();
            
            if($num>0){
                $cont=0;
                while ($r = $stmt->fetch(PDO::FETCH_NUM)):

                    $bcoId=$r[0];
                    $bcoBco=$r[1];
                    $bcoNum=$r[2];
                    $bcoTip=$r[3];
                                                           
                    $sTr = '<tr style="cursor:pointer;">';
                    
                        $sTr.='<td>' . $bcoId  . '</td>';
                        $sTr.='<td>' . $bcoBco . '</td>';
                        $sTr.='<td>' . $bcoNum . '</td>';
                        $sTr.='<td>' . $bcoTip . '</td>';
                        
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
               
            }else{
                
                $stmt->closeCursor();
                $output = $conn->query("SELECT @codErr,@estado,@rut,@nombres,@apellidos,@correo")->fetch(PDO::FETCH_ASSOC);
                $codErr = $output['@codErr'];
                $estado = $output['@estado'];
                $rut = $output['@rut'];
                $nombres = $output['@nombres'];
                $apellidos = $output['@apellidos'];

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
                        $desErr='PROFESIONAL NO REGISTRADO';
                        break;
                    case 97: 
                        $desErr='PROFESIONAL SIN CUENTAS REGISTRADAS, FAVOR PROCEDA A SU REGISTRO';
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

    