
-- select * from servicio
-- select * from producto_categoria1

-- CALL SP_CP_ADM_CSU_CAT1(@codErr);
-- SELECT @codErr;


DROP PROCEDURE IF EXISTS bodyflex.SP_CP_ADM_CSU_CAT1;
CREATE PROCEDURE bodyflex.`SP_CP_ADM_CSU_CAT1`(OUT codErr INTEGER)
BEGIN
  
DECLARE EXIT HANDLER FOR SQLEXCEPTION SET codErr=99;  
SET codErr=0;    
  IF EXISTS(SELECT * FROM producto_categoria1) THEN
    SET @CANT=(SELECT COUNT(*) FROM producto_categoria1);
    SELECT PCP1_ID
      , PCP1_NOM
      , PCP1_GD
      , @CANT
      FROM producto_categoria1
      ORDER BY PCP1_ID DESC;
  ELSE
    SET codErr=98;     
  END IF;    
END;


