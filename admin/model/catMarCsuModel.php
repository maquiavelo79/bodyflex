<?php
session_start(); 
include("../model/conection.php");

    $cont=0;
    $sTr = '';
    $sTrR='';
    $strXml='';
    $codErr=0;
    $desErr='OPERACION EXITOSA!';
    $paginacion=''; 
            
    $ultimo=$_REQUEST['ultimo']; // ultimo numero de la paginación
    $pa=$_REQUEST['pa']; //Paginación, indica el numero de paginación que el usuario presionó 
    
    try{
	
        $conn=PDO_conectar();     

        if($conn){    

            $sql="CALL SP_CAT_CSU_MAR(:ultimo, @codErr);";
            $stmt = $conn->prepare($sql);
            $stmt->bindParam(':ultimo', $ultimo, PDO::PARAM_STR, 10);
            $stmt->execute();
            $num= $stmt->rowCount();
            
            if($num>0){
                while ($r = $stmt->fetch(PDO::FETCH_NUM)): 
                    
                    $cont+=1;
                    $maId=$r[0];
                    $maNo=$r[1];
                    $maGD=$r[2];
           
                    $sTr = '<tr style="cursor:pointer;">';
                       $sTr.='<td style="width: 33%;" class="center">' . $maId . '</td>';
                       $sTr.='<td style="width: 33%;" class="center">' . $maNo . '</td>';
                       $sTr.='<td style="width: 33%;" class="center">' . $maGD . '</td>';
                    $sTr.='</tr>';

                    $sTrR.=$sTr;
 
                    $cant=$r[3];
                    $pag=$r[4];
                    $paginaciones=$r[5]; //ultimo de cada paginacion
                    
                endwhile;  
                
                $ultimos=explode('|',$paginaciones);   //matriz de ultimos de cada paginacion 
                $dimension=sizeof($ultimos);
                $ultimo=$ultimos[$pa-1];

                $paginacion.='<div class="dataTables_info">Mostrando <b>' . $cont . '</b> productos de un total de <b>' . $cant . '</b></div><br>';
                $paginacion.='<ul>';
                    for($i=1;$i<=$pag;$i++){
                        $j=$i-1;
                        if($pa==$i){
                            $paginacion.='<li class="active"><a>' . $i . '</a></li>';
                        }else{
                            $paginacion.='<li style="cursor:pointer;"><a onclick="consultaMarcas(' . $ultimos[$j] . ',' . $i . ')">' . $i . '</a></li>';
                        }
                    }
                $paginacion.='</ul>';
                $paginacion.='<input type="hidden" id="txtPa" value="' . $pa . '">';
                $paginacion.='<input type="hidden" id="txtUlt" value="' . $ultimo . '">'; 
                                
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
        $strXml.='<PAGINACION>';
                $strXml.= '<![CDATA[';
                    $strXml.=$paginacion;
                $strXml.=']]>';    
        $strXml.='</PAGINACION>';
        $strXml.='<REGISTROS>';    
            $strXml.=$cont;
        $strXml.='</REGISTROS>';
    $strXml.='</SALIDA>';
    echo $strXml;
