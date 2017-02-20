<?php

include("./conection.php");

    $rutPro=$_REQUEST['rutPro'];
   
    $cont=0;
    $sTitulos='';
    $sTr='';
    $sTrR='';
    $strXml='';
    $codErr=0;
    $desErr='OPERACION EXITOSA!';
    
    
    try{
	
        $conn=PDO_conectar();     

        if($conn){  

            $sql="CALL SP_WPRO_PERFIL_PROFESIONAL_GET_RSM_CURRICULUM(:rutPro, @codErr);";
  
            $stmt = $conn->prepare($sql);
            $stmt->bindParam(':rutPro', $rutPro, PDO::PARAM_STR,20);
            $stmt->execute();
            $num= $stmt->rowCount();
            
            if($num>0){

                while ($r = $stmt->fetch(PDO::FETCH_NUM)): 

                    $cont+=1;
                    $esNom=$r[0];
                    $esNomPro=$r[1];
                    $esFot=$r[2];
                    $esUrl=$r[3];
                    $esUrl=str_replace('FILEID', $esFot, $esUrl);

                    $sTitulos.='<a onclick="verCurriculum();" data-toggle="tooltip" data-placement="top" title="Ir a detalle currículum" style="border-color: black; color: black; cursor: pointer;" class="list-group-item">'. $esNom .'</a>';

                endwhile;   

                $sTrR.='<div class="col-sm-6 wow fadeInLeft">';
                    $sTrR.='<img class="img-responsive" src="' . $esUrl . '" alt="">';
                $sTrR.='</div>';
                $sTrR.='<div class="col-sm-6 wow fadeInRight">';
                    $sTrR.='<h3 class="column-title">'. $esNomPro .'</h3>';
                    $sTrR.='<div class="list-group">';
                        $sTrR.='<a class="list-group-item active" style="background-color: #FFCC00; color: black; border-color: black;">';
                            $sTrR.='<b>Estudios</b>';
                        $sTrR.='</a>';
                        $sTrR.=$sTitulos;
                    $sTrR.='</div>';
                $sTrR.='</div>';

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
                        $desErr='ERROR EN PROCEDIMEINTO: SP_WPRO_PERFIL_PROFESIONAL_GET_RSM_CURRICULUM';
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