
-- CALL SP_CP_ADM_CSU_MARCAS(@codErr);
-- SELECT @codErr;

DROP PROCEDURE IF EXISTS bodyflex.SP_CP_ADM_CSU_MARCAS;
CREATE PROCEDURE bodyflex.`SP_CP_ADM_CSU_MARCAS`(OUT codErr INTEGER) 
BEGIN
  
  DECLARE EXIT HANDLER FOR SQLEXCEPTION SET codErr=99;
  SET codErr=0;
  IF EXISTS(SELECT * FROM MARCAS) THEN
    SELECT MARID, MARNOM FROM MARCAS ORDER BY MARID ASC;
  ELSE
    SET codErr=98;
  END IF;
      
END




