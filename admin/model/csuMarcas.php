<?php

include("../model/conection.php");

    $sTr = '';
    $sTrR = '';
    $strCmb='';
    
    $codErr=0;
    $desErr='OPERACION EXITOSA!';
    $strIva='';
    $strTra='';
    $strXml='';
    
    try{
	
        $conn=PDO_conectar();     

        if($conn){   

            $sql="CALL SP_CP_ADM_CSU_MARCAS(@codErr);";
            $stmt = $conn->prepare($sql);
            $stmt->execute();
            $num= $stmt->rowCount();
            
            if($num>0){
                $cont=0;
                $strCmb='<select id="cmbProMar" style="background-color: whitesmoke; box-shadow: 0 0 2px black; margin: 0px 0px 0px 0px; font-weight: bold; color: black; text-align: center; color: black;">';
                $strCmb.='<option value="0" selected="selected">(SELECCIONE)</option>';  
                while ($r = $stmt->fetch(PDO::FETCH_NUM)):
                    $strCmb.='<option value="'.$r[0].'">'.$r[1].'</option>';  
                endwhile; 
                $strCmb.='</select>';
                $strCmb.='<span style="display:none;" id="icoMarcas" class="help-inline"><i style="color: red;"class="fa fa-times fa-2x"></i></span>';
                
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
                $strXml.=$strCmb;
            $strXml.=']]>';     
        $strXml.='</DATOS>';
    $strXml.='</SALIDA>';
    echo $strXml;

    