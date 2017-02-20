-- CALL SP_CP_ADM_CSU_PRO_SIN_COL_DET(@codErr);
-- SELECT @codErr, @total;


-- SELECT * FROM COLECCION;
-- SELECT * FROM PRODUCTO;
-- SELECT * FROM COLECCION_PRODUCTO;

DROP PROCEDURE IF EXISTS bodyflex.SP_CP_ADM_CSU_PRO_SIN_COL_DET;
CREATE PROCEDURE bodyflex.`SP_CP_ADM_CSU_PRO_SIN_COL_DET`(
                                                OUT codErr INTEGER
                                              )
BEGIN
  
  -- DECLARE EXIT HANDLER FOR SQLEXCEPTION SET codErr=99;
  SET codErr=0;
  SELECT P.PROID
  , P.PRONO
  , (SELECT PCP2_NOM FROM PRODUCTO_CATEGORIA2 WHERE PCP2_ID=P.PCP2_ID) AS CATEGORIA2
  FROM PRODUCTO P
  WHERE P.PROID NOT IN (SELECT PROID FROM COLECCION_PRODUCTO)
  AND P.proPE=1
  ORDER BY P.PROID ASC;
    
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