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
    
    $lat = '';
    $lng = '';
    
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
    $address = $cal .' '. $num .' '. $reg .' '.'Chile';
    
    try{
	
        if(getCoordinates($address)==1){
            
            $conn=PDO_conectar();     

            if($conn){   

                $sql="CALL SP_CP_PRO_ING_DIR_PRO(:id, :reg, :pro, :com, :tip, :pub, :vil, :cal, :num, :rut, @codErr);";

                $stmt = $conn->prepare($sql);
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
                        case 97:
                            $desErr='DIRECCIONES SUPERAN EL LIMITE';
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
        }else{
            $codErr=96;
            $desErr='No fue posible obtener las coordenadas para la dirección ingresada, veifique el nombre de la calle y/o el número.';
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

    function getCoordinates($address){
        $address = urlencode($address);       
        
        $url = "http://maps.google.com/maps/api/geocode/json?sensor=false&address=" . $address;
        $response = file_get_contents($url);
        $json = json_decode($response,true);
        if($json['status']=='OK'){
            $lat = $json['results'][0]['geometry']['location']['lat'];
            $lng = $json['results'][0]['geometry']['location']['lng'];
            return 1;
        }else{
            return 0;
        }   
        
    }