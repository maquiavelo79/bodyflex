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
    
    $cont=0;
    $mId=''; //id
    $mFe=''; //fecha
    $mLe=''; //leido
    $mTi=''; //tipo
    $mCo=''; //correlativo
    $mKe=''; //keySSSSS
    $mMe=''; //mensaje
    $mAs=''; //asunto
    $mAl=''; //alias origen (quien consulta)
    $mMa=''; //mail (quien consulta)
    $mMr=''; //mensaje resumido, max. 93 caracteres
    $mMn=''; //INDICADOR mensaje NUEVO
    $mMRO=''; //Rut de origen si existe

    $mMLAsu=''; //mensajes leido asunto
    $mMLAli=''; //mensajes leido alias
    $mMLMai=''; //mensajes leido mail
    $mMLFec=''; //mensajes leido fecha
    $mMLMsg=''; //mensajes leido 
    $mExLei=''; //existe_leido [0 | 1] 0=no leido, 1=leido

    $mMLId=''; //mensajes leido ID
    $mMLLe=''; //mensajes leido LEIDO
    $mMLTi=''; //mensajes leido TIPO
    $mMLCo=''; //mensajes leido CORRELATIVO
    $mMLKe=''; //mensajes leido KEY
    $mMLRo=''; //mensajes leido RUT ORIGEN

    //ESTOS DATOS SE SOBRESCRIBEN EN CADA ITERACIÓN
    $cant='';
    $pag='';
    $paginaciones=''; 

    
    //$_SESSION['idPub']=0;
    
    $email=$_REQUEST['email']; //email del profesional
    $sw=$_REQUEST['sw']; //switch= [1 | 2]; 1=PREVIOS, 2=POSTERIORES
    $ultimo=$_REQUEST['ultimo']; // ultimo numero de la paginación
    $pa=$_REQUEST['pa']; //Paginación, indica el numero de paginación que el usuario presionó 
    $rol=$_REQUEST['rol']; //Rol de quien visualiza incidente

    try{
	
        $conn=PDO_conectar();     
        if($conn){    

            $sql="CALL SP_CP_PRO_MENSAJE_PROFESIONAL_CONSULTA(:email, :sw , :ultimo, @codErr);";
            $stmt = $conn->prepare($sql);
            $stmt->bindParam(':email', $email, PDO::PARAM_STR, 50);
            $stmt->bindParam(':sw', $sw, PDO::PARAM_INT);
            $stmt->bindParam(':ultimo', $ultimo, PDO::PARAM_STR, 100);
            $stmt->execute();
            $num= $stmt->rowCount();
            
            if($num>0){
                $cont=0;
                while ($r = $stmt->fetch(PDO::FETCH_NUM)):   
                    
                    $cont+=1;
                    $mId=$r[0]; //id
                    $mFe=$r[1]; //fecha
                    $mLe=$r[2]; //leido
                    $mTi=$r[3]; //tipo
                    $mCo=$r[4]; //correlativo
                    $mKe=$r[5]; //keySSSSS
                    $mMe=$r[6]; //mensaje
                    $mAs=$r[7]; //asunto
                    $mAl=$r[8]; //alias origen (quien consulta)
                    $mMa=$r[9]; //mail (quien consulta)
                    $mMr=$r[13]; //mensaje resumido, max. 93 caracteres

                    $mMr=filter_var($mMr,FILTER_SANITIZE_STRING);
                    $mMr=filter_var($mMr,FILTER_SANITIZE_SPECIAL_CHARS);

                    $mMn=$r[14]; //INDICADOR mensaje NUEVO
                    $mMRO=$r[21]; //Rut de origen si existe

                    $mMLAsu=$r[15]; //mensajes leido asunto
                    $mMLAli=$r[16]; //mensajes leido alias
                    $mMLMai=$r[17]; //mensajes leido mail
                    $mMLFec=$r[18]; //mensajes leido fecha
                    $mMLMsg=$r[19]; //mensajes leido 
                    $mExLei=$r[20]; //existe_leido [0 | 1] 0=no leido, 1=leido

                    $mMLId=$r[22]; //mensajes leido ID
                    $mMLLe=$r[23]; //mensajes leido LEIDO
                    $mMLTi=$r[24]; //mensajes leido TIPO
                    $mMLCo=$r[25]; //mensajes leido CORRELATIVO
                    $mMLKe=$r[26]; //mensajes leido KEY
                    $mMLRo=$r[27]; //mensajes leido RUT ORIGEN

                    //ESTOS DATOS SE SOBRESCRIBEN EN CADA ITERACIÓN
                    $cant=$r[10];
                    $pag=$r[11];
                    $paginaciones=$r[12];
                    $incidente=$r[28]; //ID incidente
                    $mMLInc=$r[29]; //ID incidente de ultimo leido
                    $estadoIncidente=$r[30]; //estado del incidente 1=ABIERTO, 2=CERRADO
                    
                    if($rol!='ADM'){
                        if($mLe==0){ //no leido
                            $sTr.='<tr style="cursor: pointer;" class="item" id="'.$mId.'" alias="'.$mAl.'" msgRes="'.$mMr.'" fecha="'.$mFe.'" leido="'.$mLe.'" incidente="'.$incidente. '">';
                                $sTr.='<td><span class="from"><span class="glyphicons star"><i></i></span>'.$mAl.'</span></td>';
                                $sTr.='<td><span class="title"><span class="label label-info">Nuevo</span>&nbsp;&nbsp;'.$mMr.'</span></td>';
                                $sTr.='<td><span class="date"><b>'.$mFe.'</b></span></td>';
                            $sTr.='</tr>';
                        }else{ 
                            $sTr.='<tr style="cursor: pointer;" class="item" id="'.$mId.'" alias="'.$mAl.'" msgRes="'.$mMr.'" fecha="'.$mFe.'" leido="'.$mLe.'" incidente="'.$incidente. '">';
                                $sTr.='<td><span class="from"><span class="glyphicons dislikes"><i></i></span>'.$mAl.'</span></td>';
                                $sTr.='<td><span class="title">'.$mMr.'</span></td>';
                                $sTr.='<td><span class="date">'.$mFe.'</span></td>';
                            $sTr.='</tr>';
                        }
                    }else{
                        //para rol ADM agrega botón para cierre de incidentes
                        if($mLe==0){ //no leido
                            $sTr.='<tr style="cursor: pointer;" class="item" id="'.$mId.'" alias="'.$mAl.'" msgRes="'.$mMr.'" fecha="'.$mFe.'" leido="'.$mLe.'" incidente="'.$incidente. '">';
                                $sTr.='<td><span class="from"><span class="glyphicons star"><i></i></span>'.$mAl.'</span></td>';
                                $sTr.='<td><span class="title"><span class="label label-info">Nuevo</span>&nbsp;&nbsp;'.$mMr.'</span></td>';
                                $sTr.='<td><span class="date"><b>'.$mFe.'</b></span>';
                                if($estadoIncidente==1){
                                    //INCIDENTE ABIERTO
                                    $sTr.='<td><span onclick="confirmarCierreIncidente('.$incidente.');" class="label label-success">ABIERTO</span></td>';
                                }else{
                                    //INCIDENTE CERRADO
                                    $sTr.='<td><span onclick="abrirIncidente();" class="label label-important">CERRADO</span></td>';
                                }
                                $sTr.='</td>';
                            $sTr.='</tr>';
                        }else{ //leido
                            $sTr.='<tr style="cursor: pointer;" class="item" id="'.$mId.'" alias="'.$mAl.'" msgRes="'.$mMr.'" fecha="'.$mFe.'" leido="'.$mLe.'" incidente="'.$incidente. '">';
                                $sTr.='<td><span class="from"><span class="glyphicons dislikes"><i></i></span>'.$mAl.'</span></td>';
                                $sTr.='<td><span class="title">'.$mMr.'</span></td>';
                                $sTr.='<td><span class="date">'.$mFe.'</span>';
                                if($estadoIncidente==1){
                                    //INCIDENTE ABIERTO
                                    $sTr.='<td><span onclick="confirmarCierreIncidente('.$incidente.');" class="label label-success">ABIERTO</span></td>';
                                }else{
                                    //INCIDENTE CERRADO
                                    $sTr.='<td><span onclick="abrirIncidente();" class="label label-important">CERRADO</span></td>';
                                }
                                $sTr.='</td>';
                            $sTr.='</tr>';
                        }
                    }    

                    //$strDat.='<REGISTRO>';
                        $strDat.=$sTr;
                    //$strDat.='</REGISTRO>';

                    $sTr='';
             
                endwhile; 

                $ultimos=explode('|',$paginaciones);    
                $dimension=sizeof($ultimos);
                $ultimo=$ultimos[$pa-1];

                $paginacion.='<div class="dataTables_info">Mostrando <b>' . $cont . '</b> mensajes de un total de <b>' . $cant . '</b></div><br>';
                $paginacion.='<ul>';

                    for($i=1;$i<=$pag;$i++){
                        $j=$i-1;
                        if($pa==$i){
                            $paginacion.='<li class="active"><a>' . $i . '</a></li>';
                        }else{
                            $paginacion.='<li style="cursor:pointer;"><a onclick="consultaMensajes(0,' . $ultimos[$j] . ',' . $i . ')">' . $i . '</a></li>';                            
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
                            $desErr='SIN MENSAJES';
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
        $strXml.='<HTML>';
            $strXml.= '<![CDATA[';
                $strXml.=$strDat;
            $strXml.=']]>';
        $strXml.='</HTML>';
        $strXml.='<PAGINACION>';
            $strXml.= '<![CDATA[';
                $strXml.=$paginacion;
            $strXml.=']]>';    
        $strXml.='</PAGINACION>';

        $strXml.='<DATOS>';

            $strXml.='<ID>'.$mId.'</ID>' ;
            $strXml.='<FECHA>'.$mFe.'</FECHA>' ;
            $strXml.='<LEIDO>'.$mLe.'</LEIDO>' ;
            $strXml.='<TIPO>'.$mTi.'</TIPO>' ;
            $strXml.='<CORRELATIVO>'.$mCo.'</CORRELATIVO>' ;
            $strXml.='<KEY>'.$mKe.'</KEY>' ;
            $strXml.='<MENSAJE><![CDATA['.$mMe.']]></MENSAJE>' ;
            $strXml.='<ASUNTO>'.$mAs.'</ASUNTO>' ;
            $strXml.='<ALIAS>'.$mAl.'</ALIAS>' ;
            $strXml.='<MAIL_ORIGEN>'.$mMa.'</MAIL_ORIGEN>' ;
            $strXml.='<MSG_RSM>'.$mMr.'</MSG_RSM>' ;
            $strXml.='<RUT_ORIGEN>'.$mMRO.'</RUT_ORIGEN>';
            $strXml.='<NUEVOS>'.$mMn.'</NUEVOS>' ;
            $strXml.='<INCIDENTE>'.$incidente.'</INCIDENTE>' ;

            $strXml.='<LEIDO_ASUNTO>'.$mMLAsu.'</LEIDO_ASUNTO>';
            $strXml.='<LEIDO_ALIAS>'.$mMLAli.'</LEIDO_ALIAS>';
            $strXml.='<LEIDO_MAIL>'.$mMLMai.'</LEIDO_MAIL>';
            $strXml.='<LEIDO_FECHA>'.$mMLFec.'</LEIDO_FECHA>';
            $strXml.='<LEIDO_MSG><![CDATA['.$mMLMsg.']]></LEIDO_MSG>';
            $strXml.='<LEIDO_EXISTE>'.$mExLei.'</LEIDO_EXISTE>';
            $strXml.='<LEIDO_ID>'.$mMLId.'</LEIDO_ID>';
            $strXml.='<LEIDO_LEIDO>'.$mMLLe.'</LEIDO_LEIDO>';
            $strXml.='<LEIDO_TIPO>'.$mMLTi.'</LEIDO_TIPO>';
            $strXml.='<LEIDO_CORRELATIVO>'.$mMLCo.'</LEIDO_CORRELATIVO>';
            $strXml.='<LEIDO_KEY>'.$mMLKe.'</LEIDO_KEY>';
            $strXml.='<LEIDO_RUTORI>'.$mMLRo.'</LEIDO_RUTORI>';
            $strXml.='<LEIDO_INCIDENTE>'.$mMLInc.'</LEIDO_INCIDENTE>';

        $strXml.='</DATOS>';

    $strXml.='</SALIDA>';
    echo $strXml;

    
    