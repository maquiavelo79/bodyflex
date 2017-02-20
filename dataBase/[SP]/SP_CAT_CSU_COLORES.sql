CALL SP_CAT_CSU_COLORES(1, 0, 0, 0, @codErr);
SELECT @codErr;

CALL SP_CAT_CSU_COLORES(2, 0, 0, 0, @codErr);
SELECT @codErr;

CALL SP_CAT_CSU_COLORES(3, 0, 0, 0, @codErr);
SELECT @codErr;

CALL SP_CAT_CSU_COLORES(4, 0, 0, 0, @codErr);
SELECT @codErr;

CALL SP_CAT_CSU_COLORES(5, 0, 0, 0, @codErr);
SELECT @codErr;

CALL SP_CAT_CSU_COLORES(1, 1, 1, 5, @codErr);
SELECT @codErr;

SELECT * FROM PRODUCTO_COLOR;

DROP PROCEDURE IF EXISTS bodyflex.SP_CAT_CSU_COLORES;
CREATE PROCEDURE bodyflex.`SP_CAT_CSU_COLORES`(
                                                IN COLECCION VARCHAR(10)
                                                , IN CATEGORIA1 VARCHAR(10)
                                                , IN CATEGORIA2 VARCHAR(10)
                                                , IN CATEGORIA3 VARCHAR(10)
                                                , OUT codErr INTEGER
                                              )
BEGIN
  
  -- DECLARE EXIT HANDLER FOR SQLEXCEPTION SET codErr=99;
  SET codErr=0;

  SELECT DISTINCT TRIM(PC.PCON) AS PCON
  , TRIM(PC.PCOB) AS PCOB 
  FROM PRODUCTO P, COLECCION_PRODUCTO CP, PRODUCTO_COLOR PC 
  WHERE P.PROID = CP.PROID AND P.PROID = PC.PROID AND
  CP.COID=COLECCION AND 
  (P.PCP1_ID=CATEGORIA1 OR CATEGORIA1=0) AND
  (P.PCP2_ID=CATEGORIA2 OR CATEGORIA2=0) AND
  (P.PCP3_ID=CATEGORIA3 OR CATEGORIA3=0) 
  ORDER BY PCON ASC;
  
END




