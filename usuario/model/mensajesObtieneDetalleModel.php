<?php

include("../model/conection.php");

    $sTr = '';
    $sTrR = '';
    $paginacion='';
    
    $codErr=0;
    $desErr='OPERACION EXITOSA!';
    $strDat='';
    $strPag='';
    $strXml='';
    
    //$_SESSION['idPub']=0;
    
    $mId=$_REQUEST['mId']; //id del mensaje
    
  
        try{
	
            $conn=PDO_conectar();     

            if($conn){ 

                $sql="CALL SP_CP_EDI_MENSAJE_OBTIENE_DETALLE(:mId,@codErr);";

                $stmt = $conn->prepare($sql);
                $stmt->bindParam(':mId', $mId, PDO::PARAM_STR,20);
                $stmt->execute();
                $num= $stmt->rowCount();
                
                if($num>0){
                    while ($r = $stmt->fetch(PDO::FETCH_NUM)):

                        $mId=$r[0]; //id
                        $mFe=$r[1]; //fecha
                        $mLe=$r[2]; //leido
                        $mTi=$r[3]; //tipo
                        $mCo=$r[4]; //correlativo
                        $mKe=$r[5]; //key
                        $mMe=$r[6]; //mensaje
                        $mAs=$r[7]; //asunto
                        $mAl=$r[8]; //alias origen (quien consulta)
                        $mMa=$r[9]; //mail (quien consulta)     
                        $mMRO=$r[10]; //rut de origen 

                        $mId='<ID>'.$mId.'</ID>';
                        $mFe='<FECHA>'.$mFe.'</FECHA>';
                        $mLe='<LEIDO>'.$mLe.'</LEIDO>';
                        $mTi='<TIPO>'.$mTi.'</TIPO>';
                        $mCo='<CORRELATIVO>'.$mCo.'</CORRELATIVO>';
                        $mKe='<KEY>'.$mKe.'</KEY>';
                        $mMe='<MENSAJE><![CDATA['.$mMe.']]></MENSAJE>';
                        $mAs='<ASUNTO>'.$mAs.'</ASUNTO>';
                        $mAl='<ALIAS>'.$mAl.'</ALIAS>';
                        $mMa='<MAIL>'.$mMa.'</MAIL>';
                        $mMRO='<RUT_ORIGEN>'.$mMRO.'</RUT_ORIGEN>';

                        $strDat.=$mId;
                        $strDat.=$mFe;
                        $strDat.=$mLe;
                        $strDat.=$mTi;
                        $strDat.=$mCo;
                        $strDat.=$mKe;
                        $strDat.=$mMe;
                        $strDat.=$mAs;
                        $strDat.=$mAl;
                        $strDat.=$mMa;
                        $strDat.=$mMRO;

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
        $strXml.='<DATOS>';
            //$strXml.= '<![CDATA[';
                $strXml.=$strDat;
            //$strXml.=']]>';
        $strXml.='</DATOS>';
    $strXml.='</SALIDA>';
    echo $strXml;
  