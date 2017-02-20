<?php

include("../model/conection.php");

    $sTr = '';
    $sTrR = '';
    $paginacion='';
    
    $codErr=0;
    $desErr='OPERACION EXITOSA!';
    $strDat='';
    $strPag='';
    $strXml='';
    
    $reRut='';
    $reNom='';
    $reApe='';
    $reEma='';
    $reFon='';
    $reCel='';
    $rePro='';
        
    $id=$_REQUEST['id']; //switch= [1 | 2]; 1=PREVIOS, 2=POSTERIORES
    
    try{
	
        $conn=PDO_conectar();     

        if($conn){   

            $sql="CALL SP_CP_ADM_CSU_DET_POS(:id, @codErr);";
            $stmt = $conn->prepare($sql);
            $stmt->bindParam(':id', $id, PDO::PARAM_STR, 20);
            $stmt->execute();
            $num= $stmt->rowCount();
            
            if($num>0){
                $cont=0;
                while ($r = $stmt->fetch(PDO::FETCH_NUM)):
                    
                    $reRut=$r[0];
                    $reNom=$r[1];
                    $reApe=$r[2];
                    $reEma=$r[3];
                    $reFon=$r[4];
                    $reCel=$r[5];
                    $rePro=$r[6];
                    $reFna=date("d/m/Y", strtotime($r[7]));
                    
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
                        $desErr='SIN POSTULACIONES';
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
            $strXml.='<RUT>';
                $strXml.=$reRut;
            $strXml.='</RUT>';
            $strXml.='<NOM>';
                $strXml.=$reNom;
            $strXml.='</NOM>';
            $strXml.='<APE>';
                $strXml.=$reApe;
            $strXml.='</APE>';
            $strXml.='<MAI>';
                $strXml.=$reEma;
            $strXml.='</MAI>';
            $strXml.='<FON>';
                $strXml.=$reFon;
            $strXml.='</FON>';
            $strXml.='<CEL>';
                $strXml.=$reCel;
            $strXml.='</CEL>';
            $strXml.='<PRO>';
                $strXml.=$rePro;
            $strXml.='</PRO>';
            $strXml.='<FNA>';
                $strXml.=$reFna;
            $strXml.='</FNA>';
        $strXml.='</DATOS>';
    $strXml.='</SALIDA>';
    echo $strXml;

    