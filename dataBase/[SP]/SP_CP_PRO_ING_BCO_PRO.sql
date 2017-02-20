-- CALL SP_CP_PRO_ING_BCO_PRO('9386703','0','TITULO1','PUBLICACION1','111111111','BAJADA1','ARTICULO');
-- CALL SP_CP_PRO_ING_BCO_PRO('9386703','44','TITULO1','PUBLICACION1','111111111','BAJADA1','ARTICULO');

-- NOT EXISTS(SELECT COUNT(*) FROM PUBLICACION WHERE PRUT=13661574 AND PUID=0)
   
-- SELECT * FROM PROFESIONAL;   
-- SELECT * FROM DIRECCION;
-- SELECT * FROM PROFESIONAL_CUENTAS;

DROP PROCEDURE IF EXISTS bodyflex.SP_CP_PRO_ING_BCO_PRO;
CREATE PROCEDURE bodyflex.`SP_CP_PRO_ING_BCO_PRO`( 
                                                    IN vId VARCHAR(20)
                                                  , IN vBco VARCHAR(50)
                                                  , IN vTip VARCHAR(50)
                                                  , IN vNum VARCHAR(50)
                                                  , IN vRut VARCHAR(20)
                                                  , OUT codErr INTEGER
                                                  )
BEGIN

-- DECLARE EXIT HANDLER FOR SQLEXCEPTION SET codErr=99;
SET codErr=0;
  
  SET @CODBCO=(SELECT BCOID FROM BANCOS WHERE BCONOM=vBco);
  
    -- 1 DETERMINAR EXISTENCIA DEL REGISTRO
    IF NOT EXISTS(SELECT * FROM PROFESIONAL_CUENTAS WHERE proCtaId=vId) THEN

      -- 2 INSERTAMOS REGISTRO
      INSERT INTO PROFESIONAL_CUENTAS(
        PRUT
        , BCOID
        , PROCTANUM
        , PROCTATIP
       )VALUES(
        vRut
        , @CODBCO
        , vNum
        , vTip
      );
      
      -- 3 OBTENEMOS ULTIMO DPOID INGRESADO
      SET @PROCTAID = (SELECT PROCTAID FROM PROFESIONAL_CUENTAS ORDER BY PROCTAID DESC LIMIT 1);       
            
      SELECT @PROCTAID, 1;
                
    ELSE -- EL REGISTRO EXISTE  
    
     -- 1 ACTUALIZAR EL REGISTRO
        UPDATE PROFESIONAL_CUENTAS 
        SET BCOID=@CODBCO
        , PROCTANUM = vNum
        , PROCTATIP = vTip
        WHERE PROCTAID=vId;
    
        SELECT vId, 2;
                  
    END IF;
      
END;
