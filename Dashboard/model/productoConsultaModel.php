<?php

include("../model/conection.php");

$cont=0;
$paginacion='';
$sTr = '';
$cOndicion='';
$tIpo='';

    $sTrR='';
    $strXml='';
    $codErr=0;
    $desErr='OPERACION EXITOSA!';
    
    $rut=$_REQUEST['rut']; //rut de quien publica
    $sw=$_REQUEST['sw']; //switch= [1 | 2]; 1=PREVIOS, 2=POSTERIORES
    $ultimo=$_REQUEST['ultimo']; // ultimo numero de la paginación
    $llamada=$ultimo; //Para tener referencia del numero con el que se llamo a la paginación
    $pa=$_REQUEST['pa']; //Paginación, indica el numero de paginación que el usuario presionó 
      
    
    try{
      
        $conn=PDO_conectar(); 

        if($conn){

            $sql = 'CALL SP_CP_PRO_CONSULTA_PRODUCTO(:rut, :sw, :ultimo, @codErr)';
            $stmt = $conn->prepare($sql);
            $stmt->bindParam(':rut', $rut, PDO::PARAM_STR, 10);
            $stmt->bindParam(':sw', $sw, PDO::PARAM_INT);
            $stmt->bindParam(':ultimo', $ultimo, PDO::PARAM_STR, 100);
            $stmt->execute();
            $num= $stmt->rowCount();

            if($num>0){

                while ($r = $stmt->fetch()):

                    $cont+=1;
                    $proId=$r['PROID'];
                    $proNom=$r['PRONO'];
                    $proEst=$r['PROET'];
                    $proCon=$r['PROCO'];
                    $proNet=$r['PROPV'];
                    $proDes=$r['PRODE'];
                    $proCat1=$r['PCP1_ID'];
                    $proCat2=$r['PCP2_ID'];
                    $proCat3=$r['PCP3_ID'];
                    $proDeLa=$r['PROES'];
                    $cant=$r['CANT'];
                    $paginaciones=$r['ULT'];
                    $pag=$r['PAG'];
                    $proPMar=$r['PROMA'];
                    $proPreRef=$r['PROPR'];

                    $sTr = '<tr style="cursor:pointer;">';

                        $sTr.='<td class="id" style="width: 10%">' . $proId  . '</td>';
                        $sTr.='<td class="nombre" style="width: 30%">' . $proNom . '</td>';
                        if($proEst!='PUBLICADO'){
                            $sTr.='<td style="width: 10%; font-weight: bold; color: green;">' . $proEst . '</td>';
                        }else{    
                            $sTr.='<td style="width: 10%; font-weight: bold; color: blue;">' . $proEst . '</td>';
                        }         
                        $sTr.='<td class="condicion" style="text-align: center; width: 10%;">' . $proCon  . '</td>';
                        $sTr.='<td class="precio" style="text-align: center;">' . $proNet  . '</td>';
                        $sTr.='<td style="width: 30%;">' . $proDes  . '</td>';

                        $sTr.='<td style="display:none; width: 0%">' . $proCat1  . '</td>';
                        $sTr.='<td style="display:none; width: 0%">' . $proCat2  . '</td>';
                        $sTr.='<td style="display:none; width: 0%">' . $proCat3  . '</td>';
                        $sTr.='<td style="display:none; width: 0%">' . $proDeLa  . '</td>';
                        $sTr.='<td style="display:none; width: 0%">' . $proPMar  . '</td>';
                        $sTr.='<td style="display:none; width: 0%">' . $proPreRef . '</td>';

                    $sTr.='</tr>';

                    $sTrR.=$sTr;

                endwhile;   

                $ultimos=explode('|',$paginaciones);    
                $dimension=sizeof($ultimos);
                $ultimo=$ultimos[$pa-1];

                $paginacion.='<div class="dataTables_info">Mostrando <b>' . $cont . '</b> productos de un total de <b>' . $cant . '</b></div><br>';
                $paginacion.='<ul>';
                    for($i=1;$i<=$pag;$i++){
                        $j=$i-1;
                        if($pa==$i){
                            $paginacion.='<li class="active"><a>' . $i . '</a></li>';
                        }else{
                            $paginacion.='<li style="cursor:pointer;"><a onclick="consultaProductos(' . $rut . ',0,' . $ultimos[$j] . ',' . $i . ')">' . $i . '</a></li>';
                        }
                    }
                $paginacion.='</ul>';
                $paginacion.='<input type="hidden" id="txtPa" value="' . $pa . '">';
                $paginacion.='<input type="hidden" id="txtUlt" value="' . $ultimo . '">'; 
                $paginacion.='<input type="hidden" id="llamada" value="' . $llamada . '">'; 


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
                        $desErr='SIN PRODUCTOS INGRESADOS';
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
 
    
    
    
    
    
    
    
    
    
    
    
    