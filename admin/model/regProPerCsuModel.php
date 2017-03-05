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
    
    $perId=0;
    $perEst1=0;
    $perEst2=0;
    $perEst3=0;
    $perEst4=0;
    $perEst5=0;
    $perEst6=0;
    $perCer=0;
    $perDip=0;
    $perTor=0;
    $perSex=0;
    $perExp=0;
    $perReg=0;
    $perEda=0;
    $perEsp='';
    
    
    $id=$_REQUEST['id']; //switch= [1 | 2]; 1=PREVIOS, 2=POSTERIORES

    try{
	
        $conn=PDO_conectar();     

        if($conn){   

            $sql="CALL SP_CP_ADM_CSU_POS_PRO_PER(:id, @codErr, @estado, @rut, @nombres, @apellidos, @email);";
            $stmt = $conn->prepare($sql);
            $stmt->bindParam(':id', $id, PDO::PARAM_STR,20);
            $stmt->execute();
            $num= $stmt->rowCount();
            
            if($num>0){
                $cont=0;
                while ($r = $stmt->fetch(PDO::FETCH_NUM)):

                    $perId=$r[0];
                    $perEst1=$r[1];
                    $perEst2=$r[2];
                    $perEst3=$r[3];
                    $perEst4=$r[4];
                    $perEst5=$r[5];
                    $perEst6=$r[6];
                    $perCer=$r[7];
                    $perDip=$r[8];
                    $perTor=$r[9];
                    $perSex=$r[10];
                    $perExp=$r[11];
                    $perReg=$r[12];
                    $perEda=$r[13];
                    $perEsp=$r[14];
                    
                endwhile; 
                
                $stmt->closeCursor();
                $output = $conn->query("SELECT @codErr,@estado,@rut,@nombres,@apellidos,@email")->fetch(PDO::FETCH_ASSOC);
                $codErr = $output['@codErr'];
                $estado = $output['@estado'];
                $rut = $output['@rut'];
                $nombres = $output['@nombres'];
                $apellidos = $output['@apellidos'];
                $email = $output['@email'];
                
            }else{
                
                $stmt->closeCursor();
                $output = $conn->query("SELECT @codErr,@estado,@rut,@nombres,@apellidos,@email")->fetch(PDO::FETCH_ASSOC);
                $codErr = $output['@codErr'];
                $estado = $output['@estado'];
                $rut = $output['@rut'];
                $nombres = $output['@nombres'];
                $apellidos = $output['@apellidos'];
                $email = $output['@email'];

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
                        $desErr='PROFESIONAL NO PERFILADO FAVOR PROCEDA A SU REGISTRO';
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
            $strXml.='<NOMBRE>';
                $strXml.=$nombres;
            $strXml.='</NOMBRE>';
            $strXml.='<APELLIDO>';
                $strXml.=$apellidos;
            $strXml.='</APELLIDO>';
            $strXml.='<EMAIL>';
                $strXml.=$email;
            $strXml.='</EMAIL>';
            $strXml.='<perId>';
                $strXml.=$perId;
            $strXml.='</perId>';
            $strXml.='<perEst1>';
                $strXml.=$perEst1;
            $strXml.='</perEst1>';
            $strXml.='<perEst2>';
                $strXml.=$perEst2;
            $strXml.='</perEst2>';
            $strXml.='<perEst3>';
                $strXml.=$perEst3;
            $strXml.='</perEst3>';
            $strXml.='<perEst4>';
                $strXml.=$perEst4;
            $strXml.='</perEst4>';
            $strXml.='<perEst5>';
                $strXml.=$perEst5;
            $strXml.='</perEst5>';
            $strXml.='<perEst6>';
                $strXml.=$perEst6;
            $strXml.='</perEst6>';
            $strXml.='<perCer>';
                $strXml.=$perCer;
            $strXml.='</perCer>';
            $strXml.='<perDip>';
                $strXml.=$perDip;
            $strXml.='</perDip>';
            $strXml.='<perTor>';
                $strXml.=$perTor;
            $strXml.='</perTor>';
            $strXml.='<perSex>';
                $strXml.=$perSex;
            $strXml.='</perSex>';
            $strXml.='<perExp>';
                $strXml.=$perExp;
            $strXml.='</perExp>';
            $strXml.='<perReg>';
                $strXml.=$perReg;
            $strXml.='</perReg>';
            $strXml.='<perEda>';
                $strXml.=$perEda;
            $strXml.='</perEda>';
            $strXml.='<perEsp>';
                $strXml.=$perEsp;
            $strXml.='</perEsp>';
        $strXml.='</DATOS>';
    $strXml.='</SALIDA>';
    echo $strXml;
