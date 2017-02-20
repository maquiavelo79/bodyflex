<?php

include("./conection.php");

    $se=$_REQUEST['se'];
    
    $cTotCom=0;   
    $cont=0;
    $c=0;
    
    $sTr='';
    $sTrR='';
    $strXml='';
    $codErr=0;
    $desErr='OPERACION EXITOSA!';
    
    
    try{
	
        $conn=PDO_conectar();     

        if($conn){    

            $sql="CALL SP_WPRO_PERFIL_PROFESIONAL_GET_PRO_CART(:se, @codErr);";
        
            $stmt = $conn->prepare($sql);
            $stmt->bindParam(':se', $se, PDO::PARAM_STR,50);
            $stmt->execute();
            $num= $stmt->rowCount();

            if($num>0){

                while ($r = $stmt->fetch(PDO::FETCH_NUM)):  

                    $c++;
                    $cont+=1;

                    $cId=$r[0]; //ID Carro
                    $cDr=$r[1]; //ID drive
                    $cMa=$r[2]; //marca producto                
                    $cNo=$r[3]; //nombre producto
                    $cCo=$r[4]; //codigo producto
                    $cPb=$r[5]; //precio bruto
                    $cCa=$r[6]; //cantidad
                    $cTb=$r[7]; //total bruto
                    $pUrl=$r[8]; //URL drive
                    $pUrl = str_replace('FILEID', $cDr, $pUrl);

                    $cTotCom=$r[9]; //TOTAL COMPRA

                    $sTrR.='<div>';
                        $sTrR.='<input type="hidden" value="'.$cId.'">';
                        $sTrR.='<div id="imagen">';
                            $sTrR.='<img class="imgProducto" alt="" src="'.$pUrl.'">';
                        $sTrR.='</div>';
                        $sTrR.='<div id="descripcion">';
                            $sTrR.='<div id="marca">';
                                $sTrR.=$cMa;
                            $sTrR.='</div>';
                            $sTrR.='<div id="detalle">';
                                $sTrR.=$cNo;
                            $sTrR.='</div>';
                            $sTrR.='<div id="codProducto">Código producto: '.$cCo.'</div>';
                        $sTrR.='</div>';
                        $sTrR.='<div id="precio">';
                            $sTrR.='<div id="monPro">'.$cPb.'</div>';
                        $sTrR.='</div>';
                        $sTrR.='<div id="cantidad">';
                            $sTrR.='<div style="margin-top: 20px;">';
                                $sTrR.='<i id="menos_'.$cId.'" key="'.$cId.'" style="cursor: pointer;" class="fa fa-minus fa-lg"></i>&nbsp;';
                                    $sTrR.='<input id="items_'.$cId.'" style="width: 40px; text-align: center; font-weight: bold; font-size: 16px; border-style: solid; border-color: red;" type="text" size="2" autocomplete="off" value="'.$cCa.'" readonly>';
                                $sTrR.='<i id="mas_'.$cId.'" key="'.$cId.'" style="cursor: pointer;" class="fa fa-plus fa-lg"></i>&nbsp;';
                            $sTrR.='</div>';    
                        $sTrR.='</div>';
                        $sTrR.='<div id="total">';
                            $sTrR.='<div id="subTotal_'.$cId.'"><div id="monTot_'.$cId.'" class="monTot">'.$cTb.'</div></div>';
                        $sTrR.='</div>';                      
                        $sTrR.='<div id="eliminar">';
                            $sTrR.='<i id="eliPro_'.$cId.'" key="'.$cId.'" style="margin-top: 25px; cursor: pointer;" class="fa fa-times fa-3x"></i>';
                        $sTrR.='</div>';
                    $sTrR.='</div>';         
                    
                endwhile;  

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
                        $desErr='ERROR EN PROCEDIMEINTO: SP_WPRO_PERFIL_PROFESIONAL_GET_PRO_CART';
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
        $strXml.='<TOTCOM>';
            $strXml.= '<![CDATA[';
                $strXml.=$cTotCom;
            $strXml.=']]>';
        $strXml.='</TOTCOM>';
    $strXml.='</SALIDA>';
    echo $strXml;
