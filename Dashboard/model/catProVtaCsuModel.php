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
    $llamada=$ultimo; //conserva el parametro con el que se llamo
    $pa=$_REQUEST['pa']; //Paginación, indica el numero de paginación que el usuario presionó 
      
    try{
      
        $conn=PDO_conectar(); 

        if($conn){

            $sql = 'CALL SP_CP_PRO_CSU_CAT_PRO(:rut, :sw, :ultimo, @codErr)';
            $stmt = $conn->prepare($sql);
            $stmt->bindParam(':rut', $rut, PDO::PARAM_STR, 10);
            $stmt->bindParam(':sw', $sw, PDO::PARAM_INT);
            $stmt->bindParam(':ultimo', $ultimo, PDO::PARAM_STR, 10);
            $stmt->execute();
            $num= $stmt->rowCount();

            if($num>0){

                while ($r = $stmt->fetch()):

                    $cont+=1;
                    $proId=$r['PROID']; //ID
                    $proNom=$r['PRONO']; //NOMBRE
                    $proMar=$r['PROMA']; //MARCA
                    $proCat1=$r['PCP1_ID']; //CATEGORIA1
                    $proCat2=$r['PCP2_ID']; //CATEGORIA2
                    $proCat3=$r['PCP3_ID']; //CATEGORIA3
                    $proDes=$r['PRODE']; //PRODUCTO DESCRIPCIÓN CORTA
                    $proDeLa=$r['PROES']; //PRODUCTO DESCRIPCIÓN DETALLADA 
                    $proPvb=$r['PROPV'];  //PRECIO VENTA BODYFLEX
                    $proPro=$r['PROPVP']; //PRECIO VENTA PROFESIONAL
                    $proMco=$r['PROMC']; //$ COMISIÓN
                    $proPco=$r['PROPO']; //% COMISIÓN
                    
                    $proIva=$r['PROIV'];  //IVA DEL PRECIO BFX
                    $proNet=$r['PROPN'];  //NETO DEL PRECIO BFX
                    $proTbk=$r['PROCT'];  //COMISION TBK DEL PRECIO BFX
                    $pMargen=$r['PROMAR'];  //MARGEN: PRECIO BFX - PRECIO PRO
                           
                    $cant=$r['CANT'];
                    $paginaciones=$r['ULT'];
                    $pag=$r['PAG'];
                    
                    $sTr = '<tr style="cursor:pointer;">';

                        $sTr.='<td class="center">' . $proId  . '</td>'; //0
                        $sTr.='<td class="center">' . $proNom . '</td>'; //1
                        $sTr.='<td class="center">' . $proMar . '</td>'; //2
                        $sTr.='<td style="font-family: Impact,Haettenschweiler,Franklin Gothic Bold,Charcoal,Helvetica Inserat,Bitstream Vera Sans Bold,Arial Black,sans serif; text-align: center; color: black; font-size: 13px; font-size: 18px;" class="center">' . $proPvb . '</td>'; 
                        $sTr.='<td style="font-family: Impact,Haettenschweiler,Franklin Gothic Bold,Charcoal,Helvetica Inserat,Bitstream Vera Sans Bold,Arial Black,sans serif; text-align: center; color: blue; font-size: 13px; font-size: 18px;" class="center">' . $proPro . '</td>'; 
                        
                        $sTr.='<td style="font-family: Impact,Haettenschweiler,Franklin Gothic Bold,Charcoal,Helvetica Inserat,Bitstream Vera Sans Bold,Arial Black,sans serif; text-align: center; color: green; font-size: 24px; background-color: gainsboro;" class="center">' . $pMargen . '</td>';    //MARGEN VENTA PRESENCIAL    
                        $sTr.='<td style="font-family: Impact,Haettenschweiler,Franklin Gothic Bold,Charcoal,Helvetica Inserat,Bitstream Vera Sans Bold,Arial Black,sans serif; text-align: center; color: green; font-size: 24px; background-color: gainsboro;" class="center">' . $proMco . '</td>';     //COMISIÓN X VENTA X CATALOGO     

                        $sTr.='<td style="display: none;" class="center">' . $proDes  . '</td>';
                        $sTr.='<td style="display: none;" class="center">' . $proCat1 . '</td>';         
                        $sTr.='<td style="display: none;" class="center">' . $proCat2 . '</td>';         
                        $sTr.='<td style="display: none;" class="center">' . $proCat3 . '</td>';         
                        $sTr.='<td style="display: none;" class="center">' . $proDeLa . '</td>';   
                                                                       
                        $sTr.='<td style="display: none;" class="center">' . $proIva . '</td>'; 
                        $sTr.='<td style="display: none;" class="center">' . $proNet . '</td>'; 
                        $sTr.='<td style="display: none;" class="center">' . $proTbk . '</td>'; 
                        $sTr.='<td style="display: none;" class="center">' . $proPco . '</td>';
                        
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
 
    
    
    
    
    
    
    
    
    
    
    
    