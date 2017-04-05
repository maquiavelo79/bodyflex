
-- SELECT * FROM PRODUCTO
-- SELECT * FROM COLECCION_PRODUCTO

CALL SP_CP_ADM_CSU_COL_CMB(22, @codErr);
SELECT @codErr;
CALL SP_CP_ADM_CSU_COL_CMB(21, @codErr);
SELECT @codErr;
CALL SP_CP_ADM_CSU_COL_CMB(20, @codErr);
SELECT @codErr;
CALL SP_CP_ADM_CSU_COL_CMB(19, @codErr);
SELECT @codErr;
CALL SP_CP_ADM_CSU_COL_CMB(18, @codErr);
SELECT @codErr;
CALL SP_CP_ADM_CSU_COL_CMB(17, @codErr);
SELECT @codErr;
CALL SP_CP_ADM_CSU_COL_CMB(16, @codErr);
SELECT @codErr;


DROP PROCEDURE IF EXISTS bodyflex.SP_CP_ADM_CSU_COL_CMB;
CREATE PROCEDURE bodyflex.`SP_CP_ADM_CSU_COL_CMB`(
                                                    IN idPro VARCHAR(10)
                                                    , OUT codErr INTEGER
                                                  )
BEGIN
 
  DECLARE EXIT HANDLER FOR SQLEXCEPTION SET codErr=99;    
  SET codErr=0;
    
  SELECT C.COID
  , C.CONO
  , IFNULL(CP.PROID,0)
  FROM COLECCION C
  LEFT JOIN COLECCION_PRODUCTO CP
  ON C.COID=CP.COID AND CP.PROID=idPro
  ORDER BY C.COID; 
  
END;
