
-- SELECT * FROM PRODUCTO
-- SELECT * FROM COLECCION_PRODUCTO

CALL SP_CP_ADM_CSU_COL_EXI(@codErr);
SELECT @codErr;

DROP PROCEDURE IF EXISTS bodyflex.SP_CP_ADM_CSU_COL_EXI;
CREATE PROCEDURE bodyflex.`SP_CP_ADM_CSU_COL_EXI`( OUT codErr INTEGER )
BEGIN
 
  DECLARE EXIT HANDLER FOR SQLEXCEPTION SET codErr=99;    
  SET codErr=0;
  IF EXISTS(SELECT * FROM COLECCION)THEN
    SELECT 1 AS EXISTE;
  ELSE
    SELECT 0 AS EXISTE;
  END IF;
    
END;