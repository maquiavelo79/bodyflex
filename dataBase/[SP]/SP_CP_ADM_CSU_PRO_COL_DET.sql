/*
CALL SP_CP_ADM_CSU_PRO_COL_DET(1, @codErr);
SELECT @codErr;

CALL SP_CP_ADM_CSU_PRO_COL_DET(2, @codErr);
SELECT @codErr;

CALL SP_CP_ADM_CSU_PRO_COL_DET(3, @codErr);
SELECT @codErr;

CALL SP_CP_ADM_CSU_PRO_COL_DET(4, @codErr);
SELECT @codErr;

CALL SP_CP_ADM_CSU_PRO_COL_DET(5, @codErr);
SELECT @codErr;
*/
-- SELECT * FROM COLECCION;
-- SELECT * FROM PRODUCTO;
-- SELECT * FROM COLECCION_PRODUCTO;

DROP PROCEDURE IF EXISTS bodyflex.SP_CP_ADM_CSU_PRO_COL_DET;
CREATE PROCEDURE bodyflex.`SP_CP_ADM_CSU_PRO_COL_DET`(
                                                IN idCol varchar(10)
                                                , OUT codErr INTEGER
                                              )
BEGIN
  
  -- DECLARE EXIT HANDLER FOR SQLEXCEPTION SET codErr=99;
  SET codErr=0;
  SELECT P.PROID
  , P.PRONO
  , (SELECT PCP2_NOM FROM PRODUCTO_CATEGORIA2 WHERE PCP2_ID=P.PCP2_ID) AS CATEGORIA
  FROM PRODUCTO P, COLECCION_PRODUCTO CP
  WHERE P.PROID=CP.PROID 
  AND P.PCP2_ID IS NOT NULL
  AND CP.COID=idCol
  AND P.proPE=1
  ORDER BY P.PROID, CATEGORIA ASC;
    
END


  /*
  SELECT name
  FROM random AS r1 JOIN
       (SELECT CEIL(RAND() *
                     (SELECT MAX(id)
                        FROM random)) AS id)
        AS r2
  WHERE r1.id >= r2.id
  ORDER BY r1.id ASC
  LIMIT 1
  */