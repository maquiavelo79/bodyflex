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
    
    $id='';
    $est='';
    $rut='';
    $nom='';
    $ape='';
    $fna='';
    $ema='';
    $fno='';
    $cel='';
    $prf='';
    
    $idPos=$_REQUEST['idPos']; //switch= [1 | 2]; 1=PREVIOS, 2=POSTERIORES
    
    try{
	
        $conn=PDO_conectar();     

        if($conn){   

            $sql="CALL SP_CP_PRO_CSU_PRO_POS(:idPos, @codErr);";
            $stmt = $conn->prepare($sql);
            $stmt->bindParam(':idPos', $idPos, PDO::PARAM_INT);
            $stmt->execute();
            $num= $stmt->rowCount();
            
            if($num>0){
                $cont=0;
                while ($r = $stmt->fetch(PDO::FETCH_NUM)):

                    $id=$r[0];
                    $est=$r[1];
                    $rut=$r[2];
                    $nom=$r[3];
                    $ape=$r[4];
                    $fna=$r[5];
                    $ema=$r[6];
                    $fno=(isset($r[7])||empty($r[7]))?" ":$r[7];
                    $cel=$r[8];
                    $prf=$r[9];
                    $esp=$r[10];
                    $fpr=$r[11];
                    
                    if(strlen($cel)==0){
                        $cel=' ';
                    }
                    if(strlen($prf)==0){
                        $prf=' ';
                    }
                    if(strlen($esp)==0){
                        $esp=' ';
                    }
                    if(strlen($fpr)==0){
                        $fpr=' ';
                    }

                endwhile; 
                
            }else{
                $stmt->closeCursor();
                $output = $conn->query("select @codErr")->fetch(PDO::FETCH_ASSOC);
                $codErr = $output['@codErr'];

                switch($codErr){
                    case 8:
                        $desErr='PROCEDIMIENTO NO RETORNA REGISTROS';
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
            $strXml.='<ID>';
                $strXml.=$id;
            $strXml.='</ID>';
            $strXml.='<ESTADO>';
                $strXml.=$est;
            $strXml.='</ESTADO>';
            $strXml.='<RUT>';
                $strXml.=$rut;
            $strXml.='</RUT>';
            $strXml.='<NOMBRE>';
                $strXml.=$nom;
            $strXml.='</NOMBRE>';
            $strXml.='<APELLIDO>';
                $strXml.=$ape;
            $strXml.='</APELLIDO>';
            $strXml.='<FECNAC>';
                $strXml.=$fna;
            $strXml.='</FECNAC>';
            $strXml.='<MAIL>';
                $strXml.=$ema;
            $strXml.='</MAIL>';
            $strXml.='<FONO>';
                $strXml.=$fno;
            $strXml.='</FONO>';
            $strXml.='<CELULAR>';
                $strXml.=$cel;
            $strXml.='</CELULAR>';
            $strXml.='<PRO>';
                $strXml.=$prf;
            $strXml.='</PRO>';
            $strXml.='<ESP>';
                $strXml.=$esp;
            $strXml.='</ESP>';
            $strXml.='<FPR>';
                $strXml.=$fpr;
            $strXml.='</FPR>';
        $strXml.='</DATOS>';
    $strXml.='</SALIDA>';
    echo $strXml;



