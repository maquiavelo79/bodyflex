<?php

include("../model/conection.php");

$sTr = '';
$cOndicion='';
$tIpo='';

    $cmb='';
    $sTrR='';
    $strXml='';
    $codErr=0;
    $desErr='OPERACION EXITOSA!';

    $nivelCat=$_REQUEST['nivelCat'];
    $nivelCod=$_REQUEST['nivelCod'];
    
    try{
    
        $conn=PDO_conectar();  

        if($conn){

            $sql = 'CALL SP_CP_PRO_CONSULTA_CATEGORIAS_PRODUCTOS(:nivelCat, :nivelCod, @codErr)';
            $stmt = $conn->prepare($sql);
            $stmt->bindParam(':nivelCat', $nivelCat, PDO::PARAM_INT);
            $stmt->bindParam(':nivelCod', $nivelCod, PDO::PARAM_INT);
            $stmt->execute();
            $num= $stmt->rowCount();

            if($num>0){

                while ($r = $stmt->fetch(PDO::FETCH_NUM)):   

                    $catId  = $r[0];
                    $catNom = $r[1];

                    $sTr = '<option value="'.$catId.'">'.$catNom.'</option>';  
                    $sTrR.=$sTr;

                endwhile;   

                switch($nivelCat){
                    case 1:
                        
                        $cmb ='<label class="control-label" for="appendedInput"><b>Categor&iacute;a 1</b></label>';
                        $cmb.='<div class="controls">';					
                            $cmb.='<select id="cmbCat1" style="background-color: whitesmoke; box-shadow: 0 0 2px black; margin: 0px 0px 0px 0px; font-weight: bold; color: black;" onchange="getSubCat(2, this.value, 0);" style="text-align: center; color: black;">';
                                $cmb.='<option value="0" selected="">(SELECCIONE)</option>';  
                                $cmb.=$sTrR;
                            $cmb.='</select>';
                        $cmb.='</div>';
                        break;
                    
                    case 2:
                        
                        $cmb ='<label class="control-label" for="appendedInput"><b>Categor&iacute;a 2</b></label>';
                        $cmb.='<div class="controls">';					
                            $cmb.='<select id="cmbCat2" onchange="getSubCat(3, this.value, 0);" style="background-color: whitesmoke; box-shadow: 0 0 2px black; margin: 0px 0px 0px 0px; font-weight: bold; color: black; text-align: center;">';
                                $cmb.='<option value="0" selected="">(SELECCIONE)</option>';  
                                $cmb.=$sTrR;
                            $cmb.='</select>';
                        $cmb.='</div>';
                        break;
                    
                    case 3:  
                        
                        $cmb ='<label class="control-label" for="appendedInput"><b>Categor&iacute;a 3</b></label>';
                        $cmb.='<div class="controls">';					
                            $cmb.='<select id="cmbCat3" style="background-color: whitesmoke; box-shadow: 0 0 2px black; margin: 0px 0px 0px 0px; font-weight: bold; color: black; text-align: center;">';
                                $cmb.='<option value="0" selected="">(SELECCIONE)</option>';  
                                $cmb.=$sTrR;
                            $cmb.='</select>';
                        $cmb.='</div>';
                        break;
                    
                }


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
                $strXml.=$cmb;
            $strXml.=']]>';
        $strXml.='</DATOS>';
    $strXml.='</SALIDA>';
    echo $strXml;
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
