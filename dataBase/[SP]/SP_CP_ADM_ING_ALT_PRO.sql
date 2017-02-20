
-- CALL SP_CP_ADM_ING_ALT_PRO('1', @codErr);
-- SELECT @codErr;

-- SELECT * FROM PROFESIONAL;   
-- SELECT * FROM DIRECCION;
-- SELECT * FROM PROFESIONAL_PERFIL;

DROP PROCEDURE IF EXISTS bodyflex.SP_CP_ADM_ING_ALT_PRO;
CREATE PROCEDURE bodyflex.`SP_CP_ADM_ING_ALT_PRO`( 
                                                      IN vId VARCHAR(20)
                                                    , IN vClave VARCHAR(20)  
                                                    , OUT codErr INTEGER
                                                  )
BEGIN

-- DECLARE EXIT HANDLER FOR SQLEXCEPTION SET codErr=99;
SET codErr=0;
  
  SET @SW=0;
  SET @RUT = (SELECT PRUT FROM PROFESIONAL WHERE PID=vId);
  IF NOT EXISTS(SELECT * FROM DIRECCION D, PROFESIONAL_DIRECCION PD WHERE D.DCOD=PD.DCOD AND PD.PRUT=@RUT AND D.DPUBLICA=1) THEN
    SET @SW=1;
  END IF;
  IF NOT EXISTS(SELECT * FROM PROFESIONAL_CUENTAS WHERE PRUT=@RUT) THEN
    SET @SW=2;
  END IF;
  IF NOT EXISTS(SELECT * FROM PROFESIONAL_PERFIL WHERE PRUT=@RUT) THEN
    SET @SW=3;
  END IF;
   
  IF(@SW=0)THEN
    -- 1° Establecemos clave temporal
    UPDATE PROFESIONAL SET pClaRec=vClave, pEstClaRec=0, PPASS="" WHERE PRUT=@RUT;
    -- 2° Establecemos estado de postulación en ALTA=12
    UPDATE POSTULACION SET POSEST=12 WHERE posId=vId;
    -- 3° Establecemos estado de ALTA
    IF EXISTS(SELECT * FROM PROFESIONAL_PERFIL WHERE PRUT=@RUT) THEN
      UPDATE PROFESIONAL SET PEST=2 WHERE PID=vId;
      SELECT 1;
    ELSE 
      SET codErr=98;
    END IF;
  ELSE
    CASE @SW
      WHEN 1 THEN 
        SET codErr=97;
      WHEN 2 THEN 
        SET codErr=96;
      WHEN 3 THEN 
        SET codErr=95;
    END CASE;
  END IF;    
      
END;
