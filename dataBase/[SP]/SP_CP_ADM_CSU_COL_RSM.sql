
-- SELECT * FROM PRODUCTO
-- SELECT * FROM COLECCION_PRODUCTO

CALL SP_CP_ADM_CSU_COL_RSM(@codErr);
SELECT @codErr;
CALL SP_CP_ADM_CSU_COL_RSM(@codErr);
SELECT @codErr;
CALL SP_CP_ADM_CSU_COL_RSM(@codErr);
SELECT @codErr;
CALL SP_CP_ADM_CSU_COL_RSM(@codErr);
SELECT @codErr;
CALL SP_CP_ADM_CSU_COL_RSM(@codErr);
SELECT @codErr;
CALL SP_CP_ADM_CSU_COL_RSM(@codErr);
SELECT @codErr;
CALL SP_CP_ADM_CSU_COL_RSM(@codErr);
SELECT @codErr;

DROP PROCEDURE IF EXISTS bodyflex.SP_CP_ADM_CSU_COL_RSM;
CREATE PROCEDURE bodyflex.`SP_CP_ADM_CSU_COL_RSM`( OUT codErr INTEGER )
BEGIN
 
  -- DECLARE EXIT HANDLER FOR SQLEXCEPTION SET codErr=99;    
  SET codErr=0;
    IF EXISTS(SELECT * FROM COLECCION ) THEN
      SELECT C.COID 
      , C.CONO 
      FROM COLECCION C 
      ORDER BY C.COID; 
    ELSE
      SET codErr=98;
    END IF;
END;