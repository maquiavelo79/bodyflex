<?php

include("./conection.php");

    $rutPro=$_REQUEST['rutPro'];
   
    $cont=0;
    $sTr='';
    $sTrR='';
    $strXml='';
    $codErr=0;
    $desErr='OPERACION EXITOSA!';
        
    $sMai='';
    
    try{
	
        $conn=PDO_conectar();     

        if($conn){    

            $sql="CALL SP_WPRO_PERFIL_PROFESIONAL_GET_PRESENTACION(:rutPro, @codErr);";

            $stmt = $conn->prepare($sql);
            $stmt->bindParam(':rutPro', $rutPro, PDO::PARAM_STR, 20);
            $stmt->execute();
            $num= $stmt->rowCount();

            if($num>0){

                while ($r = $stmt->fetch(PDO::FETCH_NUM)):  

                    $cont+=1;
                    $sFot=$r[0];
                    $sTxt=$r[1];
                    $sNom=$r[2];
                    $sUrl=$r[3];
                    $sUrl=str_replace('FILEID', $sFot, $sUrl);
                    $sMai=$r[4];

                    $sTrR.='<div class="section-header">';
                        $sTrR.='<h2 class="section-title text-center wow fadeInDown">Presentaci&oacute;n</h2>'; 
                    $sTrR.='</div>';
                    $sTrR.='<div class="row">';
                        $sTrR.='<div class="col-sm-6 wow fadeInLeft">';
                            $sTrR.='<img class="img-responsive" src="'. $sUrl .'" alt="">';
                        $sTrR.='</div>';
                        $sTrR.='<div class="col-sm-6 wow fadeInRight">';
                            $sTrR.='<h3 class="column-title">'. $sNom .'</h3>';
                            $sTrR.='<p style="text-align : justify;">'. $sTxt .'</p>';
                        $sTrR.='</div>';
                    $sTrR.='</div>';

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
                        $desErr='ERROR EN PROCEDIMEINTO: SP_WPRO_PERFIL_PROFESIONAL_GET_PRESENTACION';
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
        $strXml.='<MAIL>';
            $strXml.=$sMai;
        $strXml.='</MAIL>';
    $strXml.='</SALIDA>';
    echo $strXml;
