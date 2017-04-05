
-- CALL SP_CP_ADM_CSU_ETI_ING(@codErr);
-- SELECT @codErr;

DROP PROCEDURE IF EXISTS bodyflex.SP_CP_ADM_CSU_ETI_ING;
CREATE PROCEDURE bodyflex.`SP_CP_ADM_CSU_ETI_ING`(
                                                    OUT codErr INTEGER
                                                    , OUT cantidad INTEGER
                                                  )
BEGIN
  
  DECLARE EXIT HANDLER FOR SQLEXCEPTION SET codErr=99;
  SET codErr=0;
  IF EXISTS(SELECT * FROM PRODUCTO_ETIQUETA) THEN
    SET cantidad=(SELECT count(*) FROM PRODUCTO_ETIQUETA);
    SELECT PETID, PETNOM FROM PRODUCTO_ETIQUETA ORDER BY PETNOM ASC;
  ELSE
    SET codErr=98;
  END IF;
      
END;
