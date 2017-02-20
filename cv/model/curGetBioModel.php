<?php

include("./conection.php");

    $rutPro=$_REQUEST['rutPro'];
   
    $cont=0;
    $sFotos='';
    $sTr='';
    $sTrR='';
    $strXml='';
    $codErr=0;
    $desErr='OPERACION EXITOSA!';
    
    $bioNom='';
    $bioTip='';
    $bioEsp='';
    $bioPre='';
    $bioDri='';
    $bioCap='';
    $bioIdf='';
    $bioReg=''; 
    $bioUrl='';
        
    try{

        $conn=PDO_conectar();     

        if($conn){   

            $sql="CALL SP_CV_PRO_GET_BIO(:rutPro, @codErr);";

            $stmt = $conn->prepare($sql);
            $stmt->bindParam(':rutPro', $rutPro, PDO::PARAM_STR,20);
            $stmt->execute();
            $num= $stmt->rowCount();

            if($num>0){

                while ($r = $stmt->fetch(PDO::FETCH_NUM)):   

                    $cont+=1;
                    $bioNom=$r[0];
                    $bioTip=$r[1];
                    $bioEsp=$r[2];
                    $bioPre=$r[3];
                    $bioDri=$r[4];
                    $bioCap=$r[5]; //caption de foto
                    $bioIdf=$r[6]; //id foto drive
                    $bioReg=$r[7]; //id foto drive

                    $bioUrl=$r[3];
                    $bioUrl=str_replace('FILEID', $bioIdf, $bioDri);

                    if($cont==1){
                        $sFotos.='<br><br><a title="'. $bioCap .'" data-rel="prettyPhoto[pp_gal]" href="'. $bioUrl .'">Fotos</a>';
                    }else{
                        $sFotos.='<a title="'. $bioCap .'" class="selectedWork" data-rel="prettyPhoto[pp_gal]" href="'. $bioUrl .'"></a>';
                    }

                    $sTrR.=$sFotos;
                    $sFotos='';

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
        $strXml.='<NOMBRE>';
            $strXml.=$bioNom;
        $strXml.='</NOMBRE>';
        $strXml.='<TIPO>';
            $strXml.=$bioTip;
        $strXml.='</TIPO>';
        $strXml.='<ESPECIALIDAD>';
            $strXml.=$bioEsp;
        $strXml.='</ESPECIALIDAD>';
        $strXml.='<PRESENTACION>';
            $strXml.=$bioPre;
        $strXml.='</PRESENTACION>';
        $strXml.='<CONTADOR>';
            $strXml.=$cont;
        $strXml.='</CONTADOR>';
    $strXml.='</SALIDA>';
    echo $strXml;
