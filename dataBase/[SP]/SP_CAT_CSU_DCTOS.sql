CALL SP_CAT_CSU_DCTOS(1, 0, 0, 0, @codErr);
SELECT @codErr;

CALL SP_CAT_CSU_DCTOS(2, 0, 0, 0, @codErr);
SELECT @codErr;

CALL SP_CAT_CSU_DCTOS(3, 0, 0, 0, @codErr);
SELECT @codErr;

CALL SP_CAT_CSU_DCTOS(4, 0, 0, 0, @codErr);
SELECT @codErr;

CALL SP_CAT_CSU_DCTOS(5, 0, 0, 0, @codErr);
SELECT @codErr;

CALL SP_CAT_CSU_DCTOS(1, 1, 1, 5, @codErr);
SELECT @codErr;

SELECT * FROM PRODUCTO_ETIQUETA;

DROP PROCEDURE IF EXISTS bodyflex.SP_CAT_CSU_DCTOS;
CREATE PROCEDURE bodyflex.`SP_CAT_CSU_DCTOS`(
                                                IN COLECCION VARCHAR(10)
                                                , IN CATEGORIA1 VARCHAR(10)
                                                , IN CATEGORIA2 VARCHAR(10)
                                                , IN CATEGORIA3 VARCHAR(10)
                                                , OUT codErr INTEGER
                                              )
BEGIN
  
  -- DECLARE EXIT HANDLER FOR SQLEXCEPTION SET codErr=99;
  SET codErr=0;

  SELECT DISTINCT PE.PETID
  , PE.PETNOM
  FROM PRODUCTO P, COLECCION_PRODUCTO CP, PRODUCTO_ETIQUETA PE 
  WHERE P.PROID = CP.PROID AND PE.PETID = P.PETID AND
  CP.COID=COLECCION AND 
  (P.PCP1_ID=CATEGORIA1 OR CATEGORIA1=0) AND
  (P.PCP2_ID=CATEGORIA2 OR CATEGORIA2=0) AND
  (P.PCP3_ID=CATEGORIA3 OR CATEGORIA3=0) 
  ORDER BY PE.PETNOM DESC;
  
END




