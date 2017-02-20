CALL SP_CAT_CSU_MARCAS(1, 0, 0, 0, @codErr);
SELECT @codErr;

CALL SP_CAT_CSU_MARCAS(2, 0, 0, 0, @codErr);
SELECT @codErr;

CALL SP_CAT_CSU_MARCAS(1, 1, 1, 5, @codErr);
SELECT @codErr;

SELECT * FROM PRODUCTO;
SELECT * FROM MARCAS;

DROP PROCEDURE IF EXISTS bodyflex.SP_CAT_CSU_MARCAS;
CREATE PROCEDURE bodyflex.`SP_CAT_CSU_MARCAS`(
                                                IN COLECCION VARCHAR(10)
                                                , IN CATEGORIA1 VARCHAR(10)
                                                , IN CATEGORIA2 VARCHAR(10)
                                                , IN CATEGORIA3 VARCHAR(10)
                                                , OUT codErr INTEGER
                                              )
BEGIN
  
  -- DECLARE EXIT HANDLER FOR SQLEXCEPTION SET codErr=99;
  SET codErr=0;

  SELECT DISTINCT case P.marId when 0 then 0 else (SELECT MARID FROM MARCAS WHERE MARID=P.marId) end as MARID
  , case P.marId when 0 then 'SIN MARCA' else (SELECT MARNOM FROM MARCAS WHERE MARID=P.marId) end as MARNOM
  FROM PRODUCTO P, COLECCION_PRODUCTO CP 
  WHERE P.PROID = CP.PROID 
  AND CP.COID=COLECCION 
  AND (P.PCP1_ID=CATEGORIA1 OR CATEGORIA1=0) 
  AND (P.PCP2_ID=CATEGORIA2 OR CATEGORIA2=0) 
  AND (P.PCP3_ID=CATEGORIA3 OR CATEGORIA3=0) 
  ORDER BY MARNOM ASC;
  
END




