<?php

include("../model/conection.php");

    $sTr = '';
    $sTrR = '';
    $strHead='';
    
    
    $codErr=0;
    $desErr='OPERACION EXITOSA!';
    $strDat='';
    $strPag='';
    $strXml='';
    
    $opc=$_REQUEST['opc'];

    try{
	
        $conn=PDO_conectar();     

        if($conn){   

            $sql="CALL SP_CP_ADM_CSU_SLI(:opc, @codErr);";
            $stmt = $conn->prepare($sql);
            $stmt->bindParam(':opc', $opc, PDO::PARAM_STR, 1);
            $stmt->execute();
            $num= $stmt->rowCount();
            
            if($num>0){
                $cont=0;
                while ($r = $stmt->fetch(PDO::FETCH_NUM)):
                                             
                    $cont+=1;
                
                    switch($opc){
                        case 1: 
                            
                            if($cont==1){
                                $strHead.='<tr>';
                                    $strHead.='<th>Identificador</th>';
                                    $strHead.='<th>Título</th>';
                                    $strHead.='<th>Descripción</th>';
                                    $strHead.='<th>ID google drive</th>';
                                    $strHead.='<th>URL</th>';
                                    $strHead.='<th>ID Colección</th>';
                                $strHead.='</tr>';
                            }
                            
                            $sTr = '<tr style="cursor:pointer;">';
                                $sTr.='<td>' . $r[0]  . '</td>';
                                $sTr.='<td>' . $r[1]  . '</td>';
                                $sTr.='<td>' . $r[2] . '</td>';
                                $sTr.='<td>' . $r[3] . '</td>';
                                $sTr.='<td>' . $r[4] . '</td>';
                                $sTr.='<td>' . $r[5] . '</td>';
                            $sTr.='</tr>';
                            break;
                        
                        case 2: 
                            
                            if($cont==1){
                                $strHead.='<tr>';
                                    $strHead.='<th>Identificador</th>';
                                    $strHead.='<th>Título</th>';
                                    $strHead.='<th>Descripción</th>';
                                    //$strHead.='<th>Precio</th>';
                                    $strHead.='<th>ID google drive</th>';
                                    $strHead.='<th>ID google drive</th>';
                                    $strHead.='<th>URL</th>';
                                    $strHead.='<th>URL</th>';
                                    $strHead.='<th>ID colección</th>';
                                    $strHead.='<th>ID producto</th>';
                                $strHead.='</tr>';
                            }
                                
                            $sTr = '<tr style="cursor:pointer;">';
                                $sTr.='<td>' . $r[0] . '</td>';
                                $sTr.='<td>' . $r[1] . '</td>';
                                $sTr.='<td>' . $r[2] . '</td>';
                                //$sTr.='<td>' . $r[3] . '</td>';
                                $sTr.='<td>' . $r[3] . '</td>';
                                $sTr.='<td>' . $r[4] . '</td>';
                                $sTr.='<td>' . $r[5] . '</td>';
                                $sTr.='<td>' . $r[6] . '</td>';
                                $sTr.='<td>' . $r[7] . '</td>';
                                $sTr.='<td>' . $r[8] . '</td>';
                            $sTr.='</tr>';    
                            break;
                        
                        case 3: 
                            
                            if($cont==1){
                                $strHead.='<tr>';
                                    $strHead.='<th>Identificador</th>';
                                    $strHead.='<th>Título</th>';
                                    $strHead.='<th>ID google drive</th>';
                                    $strHead.='<th>URL</th>';
                                    $strHead.='<th>ID colección</th>';
                                $strHead.='</tr>';
                            }
                                
                            $sTr = '<tr style="cursor:pointer;">';
                                $sTr.='<td>' . $r[0]  . '</td>';
                                $sTr.='<td>' . $r[1]  . '</td>';
                                $sTr.='<td>' . $r[2] . '</td>';
                                $sTr.='<td>' . $r[3] . '</td>';
                                $sTr.='<td>' . $r[4] . '</td>';
                            $sTr.='</tr>';
                            break;
                        
                        case 4: 
                            
                            if($cont==1){
                                $strHead.='<tr>';
                                    $strHead.='<th>Identificador</th>';
                                    $strHead.='<th>ID google drive</th>';
                                    $strHead.='<th>ID google drive</th>';
                                    $strHead.='<th>ID google drive</th>';
                                    $strHead.='<th>ID google drive</th>';
                                    $strHead.='<th>Botón</th>';
                                    $strHead.='<th>Botón</th>';
                                    $strHead.='<th>URL</th>';
                                    $strHead.='<th>URL</th>';
                                    $strHead.='<th>URL</th>';
                                    $strHead.='<th>URL</th>';
                                    $strHead.='<th>ID P1</th>';
                                    $strHead.='<th>ID P2</th>';
                                    $strHead.='<th>ID P3</th>';
                                    $strHead.='<th>ID P4</th>';
                                $strHead.='</tr>';
                            }
                                
                            $sTr = '<tr style="cursor:pointer;">';
                                $sTr.='<td>' . $r[0] . '</td>';
                                $sTr.='<td>' . $r[1] . '</td>';
                                $sTr.='<td>' . $r[2] . '</td>';
                                $sTr.='<td>' . $r[3] . '</td>';
                                $sTr.='<td>' . $r[4] . '</td>';
                                $sTr.='<td>' . $r[5] . '</td>';
                                $sTr.='<td>' . $r[6] . '</td>';
                                $sTr.='<td>' . $r[7] . '</td>';
                                $sTr.='<td>' . $r[8] . '</td>';
                                $sTr.='<td>' . $r[9] . '</td>';
                                $sTr.='<td>' . $r[10] . '</td>';
                                $sTr.='<td>' . $r[11] . '</td>';
                                $sTr.='<td>' . $r[12] . '</td>';
                                $sTr.='<td>' . $r[13] . '</td>';
                                $sTr.='<td>' . $r[14] . '</td>';
                            $sTr.='</tr>';  
                            break;
                        
                        case 5: 
                            
                            if($cont==1){
                                $strHead.='<tr>';
                                    $strHead.='<th>Identificador</th>';
                                    $strHead.='<th>Título</th>';
                                    $strHead.='<th>Botón</th>';
                                    $strHead.='<th>Descripción</th>';
                                    $strHead.='<th>ID google drive</th>';
                                    $strHead.='<th>URL</th>';
                                    $strHead.='<th>ID colección</th>';
                                $strHead.='</tr>';
                            }
                                
                            $sTr = '<tr style="cursor:pointer;">';
                                $sTr.='<td>' . $r[0] . '</td>';
                                $sTr.='<td>' . $r[1] . '</td>';
                                $sTr.='<td>' . $r[2] . '</td>';
                                $sTr.='<td>' . $r[3] . '</td>';
                                $sTr.='<td>' . $r[4] . '</td>';
                                $sTr.='<td>' . $r[5] . '</td>';
                                $sTr.='<td>' . $r[6] . '</td>';
                            $sTr.='</tr>';  
                            break;
                        
                        case 6: 
                            
                            if($cont==1){
                                $strHead.='<tr>';
                                    $strHead.='<th>Identificador</th>';
                                    $strHead.='<th>ID google drive</th>';
                                    $strHead.='<th>ID google drive</th>';
                                    $strHead.='<th>ID google drive</th>';
                                    //$strHead.='<th>Precio</th>';
                                    //$strHead.='<th>Precio</th>';
                                    //$strHead.='<th>Precio</th>';
                                    $strHead.='<th>Botón</th>';
                                    $strHead.='<th>Botón</th>';
                                    $strHead.='<th>Botón</th>';
                                    $strHead.='<th>URL</th>';
                                    $strHead.='<th>URL</th>';
                                    $strHead.='<th>URL</th>';
                                    $strHead.='<th>ID P1</th>';
                                    $strHead.='<th>ID P1</th>';
                                    $strHead.='<th>ID P1</th>';
                                $strHead.='</tr>';
                            }    
                            
                            $sTr = '<tr style="cursor:pointer;">';
                                $sTr.='<td>' . $r[0] . '</td>';
                                $sTr.='<td>' . $r[1] . '</td>';
                                $sTr.='<td>' . $r[2] . '</td>';
                                $sTr.='<td>' . $r[3] . '</td>';
                                //$sTr.='<td>' . $r[4] . '</td>';
                                //$sTr.='<td>' . $r[5] . '</td>';
                                //$sTr.='<td>' . $r[6] . '</td>';
                                $sTr.='<td>' . $r[4] . '</td>';
                                $sTr.='<td>' . $r[5] . '</td>';
                                $sTr.='<td>' . $r[6] . '</td>';
                                $sTr.='<td>' . $r[7] . '</td>';
                                $sTr.='<td>' . $r[8] . '</td>';
                                $sTr.='<td>' . $r[9] . '</td>';
                                $sTr.='<td>' . $r[10] . '</td>';
                                $sTr.='<td>' . $r[11] . '</td>';
                                $sTr.='<td>' . $r[12] . '</td>';
                            $sTr.='</tr>';  
                            break;
                        
                        case 7: 
                            
                            if($cont==1){
                                $strHead.='<tr>';
                                    $strHead.='<th>Identificador</th>';
                                    $strHead.='<th>Título</th>';
                                    $strHead.='<th>Botón</th>';
                                    $strHead.='<th>Descripción</th>';
                                    $strHead.='<th>ID google drive</th>';
                                    $strHead.='<th>URL</th>';
                                    $strHead.='<th>ID P1</th>';
                                $strHead.='</tr>';
                            }    
                            
                            $sTr = '<tr style="cursor:pointer;">';
                                $sTr.='<td>' . $r[0] . '</td>';
                                $sTr.='<td>' . $r[1] . '</td>';
                                $sTr.='<td>' . $r[2] . '</td>';
                                $sTr.='<td>' . $r[3] . '</td>';
                                $sTr.='<td>' . $r[4] . '</td>';
                                $sTr.='<td>' . $r[5] . '</td>';
                                $sTr.='<td>' . $r[6] . '</td>';
                            $sTr.='</tr>';  
                            break;
                        
                    }
                    
                    $sTrR.=$sTr;

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
        $strXml.='<THEAD>';
            $strXml.= '<![CDATA[';
                $strXml.=$strHead;
            $strXml.=']]>';
        $strXml.='</THEAD>';
        $strXml.='<TBODY>';
            $strXml.= '<![CDATA[';
                $strXml.=$sTrR;
            $strXml.=']]>';
        $strXml.='</TBODY>';
    $strXml.='</SALIDA>';
    echo $strXml;

    