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
    $cat1=$_REQUEST['cat1']; 
    
    try{
	
        $conn=PDO_conectar();     

        if($conn){    

            $sql="CALL SP_CP_ADM_CSU_CAT2(:cat1, :ultimo, @codErr);";
            $stmt = $conn->prepare($sql);
            $stmt->bindParam(':cat1', $cat1, PDO::PARAM_INT);
            $stmt->bindParam(':ultimo', $ultimo, PDO::PARAM_STR, 10);
            $stmt->execute();
            $num= $stmt->rowCount();
            
            if($num>0){
                while ($r = $stmt->fetch(PDO::FETCH_NUM)): 
                    $cont+=1;
                    $cat1Id=$r[0];
                    $cat1Nom=$r[1];
                    $cat2Id=$r[2];
                    $cat2Nom=$r[3];
                    $cat2GD=$r[4];
                    $cat2GD2=$r[8];
                                                        
                    $sTr = '<tr style="cursor:pointer;">';
                       $sTr.='<td style="width: 20%;" class="center">' . $cat1Id  . '</td>';
                       $sTr.='<td style="width: 20%;" class="center">' . $cat1Nom  . '</td>';
                       $sTr.='<td style="width: 20%; font-weight: bold;" class="center">' . $cat2Id . '</td>';
                       $sTr.='<td style="width: 20%;" class="center">' . $cat2Nom  . '</td>';
                       $sTr.='<td style="width: 20%;" class="center">' . $cat2GD  . '</td>';
                       $sTr.='<td style="width: 20%;" class="center">' . $cat2GD2  . '</td>';
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
                            $paginacion.='<li style="cursor:pointer;"><a onclick="consultaCategoria2('. $cat1 . ',' . $ultimos[$j] . ',' . $i . ')">' . $i . '</a></li>';
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
