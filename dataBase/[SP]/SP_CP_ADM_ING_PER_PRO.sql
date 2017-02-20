-- CALL SP_CP_ADM_ING_PER_PRO('9386703','0','TITULO1','PUBLICACION1','111111111','BAJADA1','ARTICULO');
-- CALL SP_CP_ADM_ING_PER_PRO('9386703','44','TITULO1','PUBLICACION1','111111111','BAJADA1','ARTICULO');

-- NOT EXISTS(SELECT COUNT(*) FROM PUBLICACION WHERE PRUT=13661574 AND PUID=0)
   
-- SELECT * FROM PROFESIONAL;   
-- SELECT * FROM DIRECCION;
-- SELECT * FROM PROFESIONAL_PERFIL;

DROP PROCEDURE IF EXISTS bodyflex.SP_CP_ADM_ING_PER_PRO;
CREATE PROCEDURE bodyflex.`SP_CP_ADM_ING_PER_PRO`( 
                                                      IN vId VARCHAR(20)
                                                    , IN vReg INTEGER
                                                    , IN vTec INTEGER
                                                    , IN vPro INTEGER
                                                    , IN vLic INTEGER
                                                    , IN vMas INTEGER
                                                    , IN vMba INTEGER
                                                    , IN vDoc INTEGER
                                                    , IN vCer INTEGER
                                                    , IN vDip INTEGER
                                                    , IN vTor INTEGER
                                                    , IN vSex INTEGER
                                                    , IN vExp INTEGER
                                                    , IN vEda INTEGER
                                                    , IN vEsp VARCHAR(50)
                                                    , IN vRut VARCHAR(20)
                                                    , OUT codErr INTEGER
                                                  )
BEGIN

-- DECLARE EXIT HANDLER FOR SQLEXCEPTION SET codErr=99;
SET codErr=0;
  
    -- 1 DETERMINAR EXISTENCIA DEL REGISTRO
    IF NOT EXISTS(SELECT * FROM PROFESIONAL_PERFIL WHERE perId=vId AND PRUT=vRut) THEN

      -- 2 INSERTAMOS REGISTRO
      INSERT INTO PROFESIONAL_PERFIL(
        PRUT
        , perEst1
        , perEst2
        , perEst3
        , perEst4
        , perEst5
        , perEst6
        , perCer
        , perDip
        , perTor
        , perSex
        , perExp
        , perReg
        , perEda
        , perEsp
        , perEst
      )VALUES(
        vRut
        , vTec
        , vPro
        , vLic
        , vMas
        , vMba
        , vDoc
        , vCer
        , vDip
        , vTor
        , vSex
        , vExp
        , vReg
        , vEda
        , vEsp
        , 1
      );
      
      -- 3 OBTENEMOS ULTIMO DPOID INGRESADO
      SET @id = (SELECT perId FROM PROFESIONAL_PERFIL ORDER BY perId DESC LIMIT 1);       
      
      SELECT @id, 1;
                
    ELSE -- EL REGISTRO EXISTE  
    
     -- 1 ACTUALIZAR EL REGISTRO
        UPDATE PROFESIONAL_PERFIL 
        SET perEst1=vTec
        , perEst2=vPro
        , perEst3=vLic
        , perEst4=vMas
        , perEst5=vMba
        , perEst6=vDoc
        , perCer=vCer
        , perDip=vDip
        , perTor=vTor
        , perSex=vSex
        , perExp=vExp
        , perReg=vReg
        , perEda=vEda
        , perEsp=vEsp
        WHERE perId=vId;
    
        SELECT vId, 2;
                  
    END IF;
      
END;
