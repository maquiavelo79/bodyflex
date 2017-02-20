
-- CALL SP_CP_ADM_INGRESA_MODIFICA_PRODUCTOS('12','NUEVO','wwwwwwwwwwwww','2222222','wwwwwwwwwwwww','2','0','0','wwwwwwwwwwwww','9386703');
-- CALL SP_CP_ADM_INGRESA_MODIFICA_PRODUCTOS('13','NUEVO','xxxxxxxxxxxxx','2222222','xxxxxxxxxxxxx','2','0','0','xxxxxxxxxxxxx','9386703');
-- CALL SP_CP_ADM_INGRESA_MODIFICA_PRODUCTOS('13','NUEVO','yyyyyyyyyyyyy','2222222','yyyyyyyyyyyyy','2','0','0','yyyyyyyyyyyyy','9386703');
-- CALL SP_CP_ADM_INGRESA_MODIFICA_PRODUCTOS('14','NUEVO','zzzzzzzzzzzzz','2222222','zzzzzzzzzzzzz','2','0','0','zzzzzzzzzzzzz','9386703');
-- CALL SP_CP_ADM_INGRESA_MODIFICA_PRODUCTOS('0','NUEVO','nuevo','2222222','nuevo','2','0','0','nuevo','9386703');
-- CALL SP_CP_ADM_INGRESA_MODIFICA_PRODUCTOS('18','noNuevo','nuevo','2222222','noNuevo','2','0','0','noNuevo','9386703');

-- select * from producto
DROP PROCEDURE IF EXISTS bodyflex.SP_CP_ADM_INGRESA_MODIFICA_PRODUCTOS;
CREATE PROCEDURE bodyflex.`SP_CP_ADM_INGRESA_MODIFICA_PRODUCTOS`( 
                                                              IN vpid VARCHAR(20)
                                                            , IN vcon VARCHAR(20)
                                                            , IN vnom VARCHAR(100)
                                                            , IN vdes VARCHAR(100)
                                                            , IN vca1 VARCHAR(10)
                                                            , IN vca2 VARCHAR(10)
                                                            , IN vca3 VARCHAR(10)
                                                            , IN vdtp VARCHAR(3000)
                                                            , IN vmar VARCHAR(10)
                                                            , IN vrut VARCHAR(10)
                                                            , IN vpvt VARCHAR(20)
                                                            , IN vmiv VARCHAR(20)
                                                            , IN vpne VARCHAR(20)
                                                            , IN vctr VARCHAR(20)
                                                            , IN vcpr VARCHAR(4)
                                                            , IN vmcp VARCHAR(20)
                                                            , IN vmut VARCHAR(20)
                                                            , IN vuni INTEGER
                                                            , IN vpvp VARCHAR(20)
                                                            , IN vivp VARCHAR(20)
                                                            , IN vpnp VARCHAR(20)
                                                            , IN vctp VARCHAR(20)
                                                            , IN vut2 VARCHAR(20)
                                                            , IN vut3 VARCHAR(20)
                                                            , IN vpco VARCHAR(20)
                                                            , IN pvapu VARCHAR(20)
                                                            , IN pvapr VARCHAR(20)
                                                            , IN cmbRanPrePro VARCHAR(10)
                                                            , IN cmbRanPreCli VARCHAR(10)
                                                            , OUT codErr INTEGER
                                                        )
BEGIN

-- DECLARE EXIT HANDLER FOR SQLEXCEPTION SET codErr=99;

SET codErr=0;

    IF NOT EXISTS(SELECT * FROM PRODUCTO WHERE proId=vpid) THEN
  -- SELECT * FROM PROFESIONAL_PRODUCTO
      -- 2 INSERTAMOS REGISTRO
      INSERT INTO PRODUCTO(
        proCo
        , proNo
        , proDe
        , pcp1_id
        , pcp2_id
        , pcp3_id
        , proEs
        , marId
        , proRu
        , proPv
        , proIv
        , proPn
        , proCt
        , proPo
        , proMc
        , proUt1
        , proFi
        , proEt
        , proPE
        , proUn
        , proPvp
        , proPvpIva
        , proPvpNet
        , proCt2
        , proUt2
        , proUt3
        , proPc
        , proPvaPub
        , proPvaPro
        , ran_id
        , cat_ran_id
      )VALUES(
        vcon
        , vnom
        , vdes
        , vca1
        , NULLIF(vca2, '')
        , NULLIF(vca3, '')
        , vdtp
        , vmar
        , vrut
        , vpvt
        , vmiv
        , vpne
        , vctr
        , vcpr
        , vmcp
        , vmut
        , now()
        , 'INGRESADO'
        , 1
        , vuni
        , vpvp
        , vivp
        , vpnp
        , vctp
        , vut2
        , vut3
        , vpco
        , pvapu
        , pvapr
        , cmbRanPrePro
        , cmbRanPreCli
      );
      
      -- 3 OBTENEMOS ULTIMO DPOID INGRESADO
      SET @id = (SELECT proId FROM PRODUCTO ORDER BY proId DESC LIMIT 1); 
      
      select 1, @id;
      
    ELSE -- EL REGISTRO EXISTE  
-- SELECT * FROM PRODUCTO
      -- 1 ACTUALIZAR EL REGISTRO
        UPDATE PRODUCTO 
        SET proCo=vcon
        , proNo=vnom
        , proDe=vdes
        , pcp1_id=vca1
        , pcp2_id=NULLIF(vca2, '')
        , pcp3_id=NULLIF(vca3, '')
        , proEs=vdtp
        , marId=vmar
        , proRu=vrut
        , proPv=vpvt
        , proIv=vmiv
        , proPn=vpne
        , proCt=vctr
        , proPo=vcpr
        , proMc=vmcp
        , proUt1=vmut
        , proFm=now()
        , proUn=vuni
        , proPvp=vpvp
        , proPvpIva=vivp
        , proPvpNet=vpnp
        , proCt2=vctp
        , proUt2=vut2
        , proUt3=vut3
        , proPc=vpco
        , proPvaPub=pvapu
        , proPvaPro=pvapr
        , ran_id=cmbRanPrePro
        , cat_ran_id=cmbRanPreCli
        WHERE proId=vpid;
        
        select 2, vpid;
              
    END IF;
      
END;
