<?php

include("../model/conection.php");

    $sTr = '';
    $sTrR = '';
    $paginacion='';
    $sId=0;
    
    $codErr=0;
    $desErr='OPERACION EXITOSA!';
    $strDat='';
    $strPag='';
    $strXml='';
    
    $idPos=$_REQUEST['idPos']; 
    $id=$_REQUEST['id']; 
    $reg=$_REQUEST['region']; 
    $pro=$_REQUEST['provincia']; 
    $com=$_REQUEST['comuna']; 
    $tip=$_REQUEST['tipo']; 
    $pub=$_REQUEST['publica'];
    $vil=$_REQUEST['txtVp'];
    $cal=$_REQUEST['txtCal'];
    $num=$_REQUEST['txtNum'];
    $rut=$_REQUEST['rut'];
    
    $matrix=explode('-',$rut);  
    $rut=str_replace(".", "", $matrix[0]); 
    
    try{
	
        $conn=PDO_conectar();     

        if($conn){   

            $sql="CALL SP_CP_ADM_ING_DIR_PRO(:idPos, :id, :reg, :pro, :com, :tip, :pub, :vil, :cal, :num, :rut, @codErr);";
            
            $stmt = $conn->prepare($sql);
            $stmt->bindParam(':idPos', $idPos, PDO::PARAM_STR, 10);
            $stmt->bindParam(':id', $id, PDO::PARAM_INT);
            $stmt->bindParam(':reg', $reg, PDO::PARAM_STR, 20);
            $stmt->bindParam(':pro', $pro, PDO::PARAM_STR, 50);
            $stmt->bindParam(':com', $com, PDO::PARAM_STR, 50);
            $stmt->bindParam(':tip', $tip, PDO::PARAM_STR, 50);
            $stmt->bindParam(':pub', $pub, PDO::PARAM_STR, 2);
            $stmt->bindParam(':vil', $vil, PDO::PARAM_STR, 50);
            $stmt->bindParam(':cal', $cal, PDO::PARAM_STR, 50);
            $stmt->bindParam(':num', $num, PDO::PARAM_STR, 10);
            $stmt->bindParam(':rut', $rut, PDO::PARAM_STR, 20);
            $stmt->execute();
            $num= $stmt->rowCount();
            
            if($num>0){
                while ($r = $stmt->fetch(PDO::FETCH_NUM)):
                    $sId=$r[0];
                    $sTrR.=$r[1];
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
                        $desErr='ERROR EN PROCEDIMEINTO';
                        break;
                    case 98:
                        $desErr='SIN DIRECCIONES';
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
        $strXml.='<IDENTIFICADOR>';
            $strXml.=$sId;
        $strXml.='</IDENTIFICADOR>';
    $strXml.='</SALIDA>';
    echo $strXml;

    