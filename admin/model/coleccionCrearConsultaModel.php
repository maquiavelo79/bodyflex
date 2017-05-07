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

            $sql="CALL SP_CP_ADM_CSU_COL(:ultimo, @codErr);";
            $stmt = $conn->prepare($sql);
            $stmt->bindParam(':ultimo', $ultimo, PDO::PARAM_STR, 10);
            $stmt->execute();
            $num= $stmt->rowCount();
            
            if($num>0){
                while ($r = $stmt->fetch(PDO::FETCH_NUM)): 
                    $cont+=1;
                    $coId=$r[0];
                    $coNo=$r[1];
                    $coDe=$r[2];
                    $coGD1=$r[3];
                    $coGD2=$r[4];
                    $coGD3=$r[8];
                    $coGD4=$r[9];
                    if($r[10]==1){
                        $coEnMenu="SI";
                    }else{
                        $coEnMenu="NO";
                    }
                                        
                    $sTr = '<tr style="cursor:pointer;">';
                       $sTr.='<td style="font-weight: bold; font-size: 12px;" class="center">' . $coId . '</td>';
                       $sTr.='<td style="font-size: 12px;" class="center">' . $coNo . '</td>';
                       $sTr.='<td style="font-size: 12px;" class="center">' . $coDe . '</td>';
                       $sTr.='<td style="font-size: 12px;" class="center">' . $coGD1 . '</td>';
                       $sTr.='<td style="font-size: 12px;" class="center">' . $coGD2 . '</td>';
                       $sTr.='<td style="font-size: 12px;" class="center">' . $coGD3 . '</td>';
                       $sTr.='<td style="font-size: 12px;" class="center">' . $coGD4 . '</td>';
                       $sTr.='<td style="text-align: center; font-weight: bold; font-size: 12px;" class="center">' . $coEnMenu . '</td>';
                    $sTr.='</tr>';

                    $sTrR.=$sTr;
 
                    $cant=$r[5];
                    $pag=$r[6];
                    $paginaciones=$r[7]; //ultimo de cada paginacion
                    
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
                            $paginacion.='<li style="cursor:pointer;"><a onclick="consultaColeccion(' . $ultimos[$j] . ',' . $i . ')">' . $i . '</a></li>';
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
                        $desErr='SIN COLECCIONES INGRESADAS';
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
