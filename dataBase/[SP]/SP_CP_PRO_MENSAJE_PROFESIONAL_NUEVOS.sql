-- [PRIMERA LLAMADA]

CALL SP_CP_PRO_MENSAJE_PROFESIONAL_NUEVOS('pro@bo.cl', @codErr);
SELECT @codErr;

DROP PROCEDURE IF EXISTS bodyflex.SP_CP_PRO_MENSAJE_PROFESIONAL_NUEVOS;
CREATE PROCEDURE bodyflex.`SP_CP_PRO_MENSAJE_PROFESIONAL_NUEVOS`(
                                                    IN email VARCHAR(50)
                                                    , OUT codErr INTEGER 
                                                  )
BEGIN
    
    -- DECLARE EXIT HANDLER FOR SQLEXCEPTION SET codErr=99;
    SET codErr=0;
    IF EXISTS(SELECT * FROM PROFESIONAL_MENSAJE WHERE MLEI=0 AND MMAILDES=email) THEN 
      SELECT COUNT(*) FROM PROFESIONAL_MENSAJE WHERE MLEI=0 AND MMAILDES=email;
    ELSE
      SET codErr=98;
    END IF;
    
END




