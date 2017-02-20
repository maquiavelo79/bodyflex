-- CALL SP_CP_ADM_CSU_PRO_COL_RSM(1, @codErr, @total);
-- SELECT @codErr, @total;

-- CALL SP_CP_ADM_CSU_PRO_COL_RSM(2, @codErr, @total);
-- SELECT @codErr, @total;

-- CALL SP_CP_ADM_CSU_PRO_COL_RSM(3, @codErr, @total);
-- SELECT @codErr, @total;

-- CALL SP_CP_ADM_CSU_PRO_COL_RSM(4, @codErr, @total);
-- SELECT @codErr, @total;

-- CALL SP_CP_ADM_CSU_PRO_COL_RSM(5, @codErr, @total);
-- SELECT @codErr, @total;

-- SELECT * FROM COLECCION;
-- SELECT * FROM PRODUCTO;
-- SELECT * FROM COLECCION_PRODUCTO;

DROP PROCEDURE IF EXISTS bodyflex.SP_CP_ADM_CSU_PRO_COL_RSM;
CREATE PROCEDURE bodyflex.`SP_CP_ADM_CSU_PRO_COL_RSM`(
                                                IN idCol varchar(10)
                                                , OUT codErr INTEGER
                                                , OUT total INTEGER
                                              )
BEGIN
  
  -- DECLARE EXIT HANDLER FOR SQLEXCEPTION SET codErr=99;
  SET codErr=0;
  SET total=0;
  
  IF EXISTS(
    SELECT *
    FROM PRODUCTO P, COLECCION_PRODUCTO CP
    WHERE P.PROID=CP.PROID 
    AND P.PCP2_ID IS NOT NULL
    AND CP.COID=idCol
    AND P.proPE=1
  )THEN
  
    CREATE TEMPORARY TABLE TMP_producto_categorias
    SELECT COUNT(*) AS CANTIDAD
    , (SELECT PCP2_NOM FROM PRODUCTO_CATEGORIA2 WHERE PCP2_ID=P.PCP2_ID) AS CATEGORIA
    FROM PRODUCTO P, COLECCION_PRODUCTO CP
    WHERE P.PROID=CP.PROID 
    AND P.PCP2_ID IS NOT NULL
    AND CP.COID=idCol
    AND P.proPE=1
    GROUP BY CATEGORIA
    ORDER BY CATEGORIA ASC;
      
    SET total=(SELECT SUM(CANTIDAD) FROM TMP_producto_categorias);  
    SELECT * FROM TMP_producto_categorias;
    DROP TABLE TMP_producto_categorias;
    
  ELSE
  
    SET codErr=98;
  
  END IF;
    
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