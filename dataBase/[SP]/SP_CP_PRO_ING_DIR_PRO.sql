-- CALL SP_CP_PRO_ING_DIR_PRO('9386703','0','TITULO1','PUBLICACION1','111111111','BAJADA1','ARTICULO');
-- CALL SP_CP_PRO_ING_DIR_PRO('9386703','44','TITULO1','PUBLICACION1','111111111','BAJADA1','ARTICULO');

-- NOT EXISTS(SELECT COUNT(*) FROM PUBLICACION WHERE PRUT=13661574 AND PUID=0)
   
-- SELECT * FROM PROFESIONAL;   
-- SELECT * FROM DIRECCION;
-- SELECT * FROM PROFESIONAL_DIRECCION;

DROP PROCEDURE IF EXISTS bodyflex.SP_CP_PRO_ING_DIR_PRO;
CREATE PROCEDURE bodyflex.`SP_CP_PRO_ING_DIR_PRO`( 
                                                      IN vId VARCHAR(20)
                                                    , IN vReg VARCHAR(50)
                                                    , IN vPro VARCHAR(50)
                                                    , IN vCom VARCHAR(50)
                                                    , IN vTip VARCHAR(50)
                                                    , IN vPub VARCHAR(2)
                                                    , IN vVil VARCHAR(50)
                                                    , IN vCal VARCHAR(50)
                                                    , IN vNum VARCHAR(10)
                                                    , IN vRut VARCHAR(20)
                                                    , OUT codErr INTEGER
                                                  )
BEGIN

-- DECLARE EXIT HANDLER FOR SQLEXCEPTION SET codErr=99;
SET codErr=0;

    IF(vTip='PARTICULAR')THEN
      SET @CODTIP=1;
    ELSE
      SET @CODTIP=2;
    END IF;
  
    IF(vPub='SI')THEN
      SET @PUB=1;
    ELSE
      SET @PUB=2;
    END IF;
  
    SET @CODREG=(SELECT RCOD FROM REGION WHERE RNOM=vReg);
    SET @CODPRO=(SELECT PROVCOD FROM PROVINCIA WHERE PROVNOM=vPro);
    SET @CODCOM=(SELECT CCOD FROM COMUNA WHERE CNOM=vCom);
  
    -- 1 DETERMINAR EXISTENCIA DEL REGISTRO
    IF (SELECT COUNT(*) FROM DIRECCION WHERE DCOD=vId)=0 THEN

      -- 2 INSERTAMOS REGISTRO
      INSERT INTO DIRECCION(
        rcod
        , provcod
        , ccod
        , dCodTipo
        , dNomTipo
        , dCalle
        , dVillaPob
        , dNumero
        , dPublica
        , dFecIng
      )VALUES(
        @CODREG
        , @CODPRO
        , @CODCOM
        , @CODTIP
        , vTip
        , vCal
        , vVil
        , vNum
        , @PUB
        , NOW()
      );
      
      -- 3 OBTENEMOS ULTIMO DPOID INGRESADO
      SET @idDir = (SELECT DCOD FROM DIRECCION ORDER BY DCOD DESC LIMIT 1);       
      
      INSERT INTO PROFESIONAL_DIRECCION(
        DCOD
        , PRUT
      )VALUES(
        @idDir
        , vRut
      );
      
      SELECT @idDir, 1;
                
    ELSE -- EL REGISTRO EXISTE  
    -- select * from direccion
     -- 1 ACTUALIZAR EL REGISTRO
        UPDATE DIRECCION 
        SET RCOD = @CODREG
        , PROVCOD = @CODPRO
        , CCOD = @CODCOM
        , dCodTipo=@CODTIP
        , dNomTipo=vTip
        , dCalle=vCal
        , dVillaPob=vVil
        , dNumero=vNum
        , dPublica=@PUB
        WHERE DCOD=vId;
    
        SELECT vId, 2;
                  
    END IF;
      
END;
