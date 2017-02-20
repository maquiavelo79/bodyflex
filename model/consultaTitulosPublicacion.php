<?php
    include("../model/conection.php");
    
    $sTrTit='';
    $sTrR='';
    $strXml='';
    $codErr=0;
    $desErr='OPERACION EXITOSA!';
    
    $keyword=$_REQUEST['keyword'];
    
    sleep(1);    
    
    $enlace=conectar();
        
    try{
	
        $conn=PDO_conectar();     

        if($conn){ 

            $sql="CALL SP_WAPP_CONSULTA_TITULO_PUBLICACION(:keyword, @codErr);";
            $stmt = $conn->prepare($sql);
            $stmt->bindParam(':keyword', $keyword, PDO::PARAM_STR,1000);
            $stmt->execute();
            $num= $stmt->rowCount();
            
            if($num>0){
                
                $sTrTit='<ul id="country-list">';
                while ($r = $stmt->fetch(PDO::FETCH_NUM)): 
                    $sTr = "'" . $r[0] . "'";
                    $sTrTit.= '<li style="cursor: pointer;" onClick="selectTitulo(' . $sTr . ', ' . $r[1] . ');">' . $r[0] . '</li>';       
                endwhile;  
                $sTrTit.='</ul>';
                $sTrR = $sTrTit;

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
                $strXml.=$sTrR;
            $strXml.=']]>';
        $strXml.='</DATOS>';
    $strXml.='</SALIDA>';
    echo $strXml;
    