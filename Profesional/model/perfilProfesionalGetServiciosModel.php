<?php

include("./conection.php");

    $rutPro=$_REQUEST['rutPro'];

    $cont=0;
    $sTr='';
    $sTrR='';
    $strXml='';
    $codErr=0;
    $desErr='OPERACION EXITOSA!';
    
    try{
	
        $conn=PDO_conectar();     

        if($conn){  

            $sql="CALL SP_WPRO_PERFIL_PROFESIONAL_GET_SERVICIOS(:rutPro, @codErr);";

            $stmt = $conn->prepare($sql);
            $stmt->bindParam(':rutPro', $rutPro, PDO::PARAM_STR,20);
            $stmt->execute();
            $num= $stmt->rowCount();

            if($num>0){

                while ($r = $stmt->fetch(PDO::FETCH_NUM)):

                    $cont+=1;
                    $seId=$r[0];
                    $seNom=$r[1];
                    $seImg=$r[2];
                    $seDes=$r[3];

                    $sTr.='<div data-toggle="tooltip" title="Ir a detalle de servicio" data-placement="top" style="cursor: pointer;" onclick="muestraServicio('. $seId .', '. $rutPro .');" class="col-md-4 col-sm-6 wow fadeInUp" data-wow-duration="300ms" data-wow-delay="0ms">';
                        $sTr.='<div class="media service-box">';
                            $sTr.='<div class="pull-left">';
                                $sTr.='<i class="'. $seImg .'"></i>';
                            $sTr.='</div>';
                            $sTr.='<div class="media-body">';
                                $sTr.='<h4 class="media-heading">'. $seNom .'</h4>';
                                $sTr.='<p style="text-align: justify;">'. $seDes .'</p>';
                            $sTr.='</div>';
                        $sTr.='</div>';
                    $sTr.='</div>';

                    $sTrR.=$sTr; 
                    $sTr='';
                   
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
                        $desErr='ERROR EN PROCEDIMEINTO: SP_WPRO_PERFIL_PROFESIONAL_GET_SERVICIOS';
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
    $strXml.='</SALIDA>';
    echo $strXml;

