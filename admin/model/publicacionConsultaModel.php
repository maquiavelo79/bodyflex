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
    
    //$_SESSION['idPub']=0;
    
    $rut=$_REQUEST['rut']; //rut de quien publica
    $sw=$_REQUEST['sw']; //switch= [1 | 2]; 1=PREVIOS, 2=POSTERIORES
    $ultimo=$_REQUEST['ultimo']; // ultimo numero de la paginación
    $pa=$_REQUEST['pa']; //Paginación, indica el numero de paginación que el usuario presionó 

    
    try{
	
        $conn=PDO_conectar();     

        if($conn){   

            $sql="CALL SP_CP_ADM_PUBLICACION_CONSULTA(:rut, :sw, :ultimo, @codErr);";
            $stmt = $conn->prepare($sql);
            $stmt->bindParam(':rut', $rut, PDO::PARAM_STR, 10);
            $stmt->bindParam(':sw', $sw, PDO::PARAM_INT);
            $stmt->bindParam(':ultimo', $ultimo, PDO::PARAM_STR, 100);
            $stmt->execute();
            $num= $stmt->rowCount();
            
            if($num>0){
                $cont=0;
                while ($r = $stmt->fetch(PDO::FETCH_NUM)):
                                             
                    $cont+=1;
                    $puId=$r[0];
                    $puEst=$r[1];
                    $puFC=$r[2];
                    $puFM=$r[3];

                    if($puEst=='EDITANDO'){
                        $puFP='';
                    }else{
                        //$puFP=date("d-m-Y",strtotime($fila[4]));
                        $puFP=$r[4];
                    }

                    $puTit=$r[5];
                    $puImg=$r[6];
                    $puTip=$r[10];

                    //ESTOS DATOS SE SOBRESCRIBEN EN CADA ITERACIÓN
                        $paginaciones=$r[9]; 
                        $cant=$r[7];
                        $pag=$r[8];

                    $sTr = '<tr>';
                        $sTr.='<td style="text-align:center;">' . $puId  . '</td>';
                        if($puEst=='PUBLICADA'){
                            $sTr.='<td style="text-align:center;"><b>' . $puEst . '</b></td>';
                        }else{
                            $sTr.='<td style="text-align:center;">' . $puEst . '</td>';
                        }
                        $sTr.='<td style="text-align:center;">' . $puFC . '</td>';
                        $sTr.='<td style="text-align:center;">' . $puFM  . '</td>';
                        $sTr.='<td style="text-align:center;">' . $puFP  . '</td>';
                        $sTr.='<td class="center">' . $puTit  . '</td>';
                        $sTr.='<td style="text-align:center;">' . $puImg  . '</td>';
                        $sTr.='<td style="text-align:center;">' . $puTip  . '</td>';
                    $sTr.='</tr>';

                    //$sTrR.=$sTr;

                    $strDat.='<REGISTRO>';
                        $strDat.=$sTr;
                    $strDat.='</REGISTRO>';
                          
                endwhile; 

                $ultimos=explode('|',$paginaciones);    
                $dimension=sizeof($ultimos);
                $ultimo=$ultimos[$pa-1];
                
                $paginacion.='<div class="dataTables_info">Mostrando <b>' . $cont . '</b> publicaciones de un total de <b>' . $cant . '</b></div><br>';
                $paginacion.='<ul>';
                    for($i=1;$i<=$pag;$i++){
                        $j=$i-1;
                        if($pa==$i){
                            $paginacion.='<li class="active"><a>' . $i . '</a></li>';
                        }else{
                            $paginacion.='<li style="cursor:pointer;"><a onclick="consultaPublicaciones(' . $rut . ',0,' . $ultimos[$j] . ',' . $i . ')">' . $i . '</a></li>';
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
                        $desErr='SIN PUBLICACIONES';
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
                $strXml.=$strDat;
            $strXml.=']]>';
        $strXml.='</DATOS>';
        $strXml.='<PAGINACION>';
            $strXml.= '<![CDATA[';
                $strXml.=$paginacion;
            $strXml.=']]>';    
        $strXml.='</PAGINACION>';
    $strXml.='</SALIDA>';
    echo $strXml;

    