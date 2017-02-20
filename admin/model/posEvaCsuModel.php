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
    
    $sw=$_REQUEST['sw']; //switch= [1 | 2]; 1=PREVIOS, 2=POSTERIORES
    $ultimo=$_REQUEST['ultimo']; // ultimo numero de la paginación
    $pa=$_REQUEST['pa']; //Paginación, indica el numero de paginación que el usuario presionó 

    try{
	
        $conn=PDO_conectar();     

        if($conn){   

            $sql="CALL SP_CP_ADM_CSU_POS_EVA(:sw, :ultimo, @codErr);";
            $stmt = $conn->prepare($sql);
            $stmt->bindParam(':sw', $sw, PDO::PARAM_INT);
            $stmt->bindParam(':ultimo', $ultimo, PDO::PARAM_STR, 100);
            $stmt->execute();
            $num= $stmt->rowCount();
            
            if($num>0){
                $cont=0;
                while ($r = $stmt->fetch(PDO::FETCH_NUM)):
                                             
                    $cont+=1;
                
                    $posId=$r[0];
                    $posNom=$r[1];
                    $posApe=$r[2];
                    $posEma=$r[3];
                    $posFec=$r[4];
                
                    //ESTOS DATOS SE SOBRESCRIBEN EN CADA ITERACIÓN  
                        $cant=$r[5];
                        $pag=$r[6];
                        $paginaciones=$r[7]; 

                    $sTr = '<tr style="cursor:pointer;" class="registro">';
                        $sTr.='<td>' . $posId  . '</td>';
                        $sTr.='<td>' . $posNom . '</td>';
                        $sTr.='<td>' . $posApe . '</td>';
                        $sTr.='<td>' . $posEma . '</td>';
                        $sTr.='<td>' . $posFec . '</td>';
                        $sTr.='<td class="center">';
                            $sTr.='<span id='.$posId.' nom='.$posNom.' ape='.$posApe.' email='.$posEma.' style="text-align: center; font-weight: bold; color: #white; cursor: pointer;" class="label label-warning">DETENER</span>';
                        $sTr.='</td>';  
                        $sTr.='<td class="center">';
                            $sTr.='<span id='.$posId.' style="text-align: center; font-weight: bold; color: #white; cursor: pointer;" class="label label-success">APROBAR</span>';
                        $sTr.='</td>'; 
                        $sTr.='<td class="center">';
                            $sTr.='<span id='.$posId.' style="text-align: center; font-weight: bold; color: #white; cursor: pointer;" class="label label-important">RECHAZAR</span>';
                        $sTr.='</td>'; 
                    $sTr.='</tr>';

                    $sTrR.=$sTr;

                endwhile; 

                $ultimos=explode('|',$paginaciones);    
                $dimension=sizeof($ultimos);
                $ultimo=$ultimos[$pa-1];
                
                $paginacion.='<div class="dataTables_info">Mostrando <b>' . $cont . '</b> postulaciones de un total de <b>' . $cant . '</b></div><br>';
                $paginacion.='<ul>';
                    for($i=1;$i<=$pag;$i++){
                        $j=$i-1;
                        if($pa==$i){
                            $paginacion.='<li class="active"><a>' . $i . '</a></li>';
                        }else{
                            $paginacion.='<li style="cursor:pointer;"><a onclick="consultaPostulaciones(0,' . $ultimos[$j] . ',' . $i . ')">' . $i . '</a></li>';
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
            $strXml.= '<![CDATA[';
                $strXml.=$sTrR;
            $strXml.=']]>';
        $strXml.='</DATOS>';
        $strXml.='<PAGINACION>';
                $strXml.= '<![CDATA[';
                    $strXml.=$paginacion;
                $strXml.=']]>';    
            $strXml.='</PAGINACION>';
    $strXml.='</SALIDA>';
    echo $strXml;

    