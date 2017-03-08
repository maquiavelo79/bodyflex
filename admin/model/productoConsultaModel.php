<?php

include("../model/conection.php");

$cont=0;
$paginacion='';
$sTr = '';
$cOndicion='';
$tIpo='';

    $pId='';
    $pCon='';
    $pNom='';
    $pDes='';
    $pCat1='';
    $pCat2='';
    $pCat3='';
    $pDesLar='';
    $pMar='';
    $rutAdm='';
    $pBru='';
    $pIva='';
    $pNet='';
    $pCom='';
    $pPor='';
    $pMto='';
    $pUti='';
    $pFei='';
    $pEst='';
    $idPro=''; //ID tratado

    $sTrR='';
    $strXml='';
    $codErr=0;
    $desErr='OPERACION EXITOSA!';
    
    $sw=$_REQUEST['sw']; //switch= [1 | 2]; 1=PREVIOS, 2=POSTERIORES
    $ultimo=$_REQUEST['ultimo']; // ultimo numero de la paginación
    $pa=$_REQUEST['pa']; //Paginación, indica el numero de paginación que el usuario presionó 
          
    try{
      
        $conn=PDO_conectar(); 

        if($conn){

            $sql = 'CALL SP_CP_ADM_CONSULTA_PRODUCTO(:sw, :ultimo, @codErr)';
            $stmt = $conn->prepare($sql);
            $stmt->bindParam(':sw', $sw, PDO::PARAM_INT);
            $stmt->bindParam(':ultimo', $ultimo, PDO::PARAM_STR, 10);
            $stmt->execute();
            $num= $stmt->rowCount();

            if($num>0){

                while ($r = $stmt->fetch(PDO::FETCH_NUM)):

                    $cont+=1;
                    
                    $pId=$r[0];         //IDENTIFICADOR
                    $pCon=$r[1];        //CONDICION
                    $pNom=$r[2];        //NOMBRE
                    $pDes=$r[3];        //DESCRIPCIÓN
                    $pCat1=$r[4];       //CATEGORIA1
                    $pCat2=$r[5];       //CATEGORIA2
                    $pCat3=$r[6];       //CATEGORIA3
                    $pDesLar=$r[7];     //ESPECIFICACION
                    $pMar=$r[8];        //NOMBRE MARCA
                    $rutAdm=$r[9];      //RUT ADMIN
                    $pBru=$r[10];       //PRECIO BRUTO
                    $pIva=$r[11];       //IVA
                    $pNet=$r[12];       //PRECIO NETO
                    $pCom=$r[13];       //COMISION TRANSBANK
                    $pPor=$r[14];       //% COMISION PROFESIONAL
                    $pMto=$r[15];       //MTO COMISION PROFESIONAL
                    $pUti=$r[16];       //UTILIDAD
                    $pFei=$r[17];       //FECHA INGRESO
                    $pEst=$r[18];       //ESTADO
                    $pUn=$r[19];       //MAXIMO UNIDADES X VENTA
                    
                    $pPvp=$r[23];       //PRECIO VENTA AL PROFESIONAL
                    $pIvp=$r[24];       //IVA PRECIO VENTA AL PROFESIONAL
                    $pPnp=$r[25];       //PRECIO NETO AL PROFESIONAL
                    $pCtp=$r[26];       //COMISIÓN TRANSBANK X VTA AL PROFESIONAL
                    $pUt2=$r[27];       //UTILIDAD POR VENTA AL PROFESIONAL
                    $pUt3=$r[28];       //UTILIDAD POR VENTA AL SUSCRIPTOR
                    $pPc=$r[29];        //PRECIO DE COMPRA
                    
                    $pPVAPU=$r[30];      //PRECIO VENTA ANTERIOR PUBLICO
                    $pPVAPR=$r[31];      //PRECIO VENTA ANTERIOR PROFESIONAL
                    
                    $pCodRanPro=$r[32];      //CODIGO RANGO DE PRECIO PROFESIONAL
                    $pCodRanCli=$r[33];      //CODIGO RANGO DE PRECIO CLIENTE
                    
                    $pCodMar=$r[34];      //CODIGO MARCA

                    $sTr = '<tr style="cursor:pointer;">';
                    
                        $sTr.='<td class="center">' . $pId  . '</td>'; //0
                        $sTr.='<td class="center">' . $pNom . '</td>'; //1
                        $sTr.='<td class="center">' . $pMar  . '</td>'; //2
                        
                        switch($pEst){ //3
                            case 'INGRESADO':
                                $sTr.='<td style="color: mediumblue; font-weight: bold;" class="center">' . $pEst  . '</td>';
                            break;
                            case 'ALTA':
                                $sTr.='<td style="color: green; font-weight: bold;" class="center">' . $pEst  . '</td>';
                            break;
                        }
                        
                        //Venta BFX
                        $sTr.='<td class="center">' . $pBru  . '</td>'; //4
                        $sTr.='<td class="center">' . $pIva  . '</td>'; //5
                        $sTr.='<td class="center">' . $pNet  . '</td>'; //6
                        $sTr.='<td class="center">' . $pCom  . '</td>'; //7
                        $sTr.='<td class="center" style="font-weight: bold;">' . $pUt3  . '</td>'; //8
                        
                        //Venta Profesional Presencial
                        $sTr.='<td class="center">' . $pPvp  . '</td>'; //9 
                        $sTr.='<td class="center">' . $pIvp  . '</td>'; //10
                        $sTr.='<td class="center">' . $pPnp  . '</td>'; //11
                        $sTr.='<td class="center">' . $pCtp  . '</td>'; //12
                        $sTr.='<td class="center" style="font-weight: bold;">' . $pUt2  . '</td>'; //13
                        
                        //Venta por Catálogo
                        $sTr.='<td class="center" style="text-align: center; font-weight: bold;">' . $pPor  . '</td>'; //14
                        $sTr.='<td class="center" style="text-align: center;">' . $pMto  . '</td>'; //15
                        $sTr.='<td class="center" style="text-align: center; font-weight: bold;">' . $pUti  . '</td>'; //16
                        
                        $sTr.='<td class="center" style="display: none;">' . $pUn  . '</td>'; //17
                        $sTr.='<td class="center" style="display: none;">' . $pDes  . '</td>'; //18
                        $sTr.='<td class="center" style="display: none;">' . $pCat1  . '</td>'; //19
                        $sTr.='<td class="center" style="display: none;">' . $pCat2  . '</td>'; //20
                        $sTr.='<td class="center" style="display: none;">' . $pCat3  . '</td>'; //21
                        $sTr.='<td class="center" style="display: none;">' . $pDesLar  . '</td>'; //22
                        $sTr.='<td class="center" style="display: none;">' . $pFei  . '</td>'; //23
                        $sTr.='<td class="center" style="display: none;">' . $pPc  . '</td>'; //24
                        $sTr.='<td class="center" style="display: none;">' . $pPVAPU  . '</td>'; //25
                        $sTr.='<td class="center" style="display: none;">' . $pPVAPR  . '</td>'; //26
                        $sTr.='<td class="center" style="display: none;">' . $pCodRanPro  . '</td>'; //27
                        $sTr.='<td class="center" style="display: none;">' . $pCodRanCli  . '</td>'; //28
                        $sTr.='<td class="center" style="display: none;">' . $pCodMar  . '</td>'; //29
                        $sTr.='<td class="center" style="display: none;">' . $pCon  . '</td>'; //30
                        
                    $sTr.='</tr>';

                    $sTrR.=$sTr;
                
                    $cant=$r[20];
                    $pag=$r[21];
                    $paginaciones=$r[22];

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
                            $paginacion.='<li style="cursor:pointer;"><a onclick="consultaProductos(0,' . $ultimos[$j] . ',' . $i . ')">' . $i . '</a></li>';
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
        $strXml.='<REGISTROS>';    
            $strXml.=$cont;
        $strXml.='</REGISTROS>';
    $strXml.='</SALIDA>';
    echo $strXml;
 
    
    
    
    
    
    
    
    
    
    
    
    