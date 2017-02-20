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
    $coleccion='';
            
    $ultimo=$_REQUEST['ultimo']; // ultimo numero de la paginación
    $pa=$_REQUEST['pa']; //Paginación, indica el numero de paginación que el usuario presionó 
    $cat1=$_REQUEST['cat1']; 
    $cat2=$_REQUEST['cat2']; 
    $cat3=$_REQUEST['cat3'];   
    
    try{
	
        $conn=PDO_conectar();     

        if($conn){    

            $sql="CALL SP_CP_ADM_CSU_PRO_COL(:cat1, :cat2, :cat3, :ultimo, @codErr);";
            $stmt = $conn->prepare($sql);
            $stmt->bindParam(':cat1', $cat1, PDO::PARAM_INT);
            $stmt->bindParam(':cat2', $cat2, PDO::PARAM_INT);
            $stmt->bindParam(':cat3', $cat3, PDO::PARAM_INT);
            $stmt->bindParam(':ultimo', $ultimo, PDO::PARAM_STR, 10);
            $stmt->execute();
            $num= $stmt->rowCount();
            
            if($num>0){
                while ($r = $stmt->fetch(PDO::FETCH_NUM)): 
                    
                    $cont+=1;
                    $pId=$r[0];
                    $pNo=$r[1];
                    $pMa=$r[2];
                    $pEs=$r[3];
                    $pGD=$r[7];
                    
                    $pCodCat1=$r[8];
                    $pCodCat2=$r[9];
                    $pCodCat3=$r[10];
                    $pNomCat1=$r[11];
                    $pNomCat2=$r[12];
                    $pNomCat3=$r[13];
                                                    
                    $sTr = '<tr style="cursor:pointer;">';
                       $sTr.='<td class="center">' . $pId  . '</td>';
                       $sTr.='<td class="center">' . $pNo  . '</td>';
                       $sTr.='<td class="center">' . $pMa  . '</td>';
                       $sTr.='<td class="center">' . $pEs  . '</td>';
                       $sTr.='<td class="center">' . $pGD  . '</td>';
                       
                       $sTr.='<td class="center">' . $pNomCat1  . '</td>';
                       $sTr.='<td class="center">' . $pNomCat2  . '</td>';
                       $sTr.='<td class="center">' . $pNomCat3  . '</td>';
                       
                       $sTr.='<td style="display:none;" class="center">' . $pCodCat1  . '</td>';
                       $sTr.='<td style="display:none;" class="center">' . $pCodCat2  . '</td>';
                       $sTr.='<td style="display:none;" class="center">' . $pCodCat3  . '</td>';
                    $sTr.='</tr>';

                    $sTrR.=$sTr;
 
                    $cant=$r[4];
                    $pag=$r[5];
                    $paginaciones=$r[6]; //ultimo de cada paginacion
                    
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
                            $paginacion.='<li style="cursor:pointer;"><a onclick="consultaProductos('. $cat1 . ',' . $cat2 . ',' . $cat3 . ',' . $ultimos[$j] . ',' . $i . ')">' . $i . '</a></li>';
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
