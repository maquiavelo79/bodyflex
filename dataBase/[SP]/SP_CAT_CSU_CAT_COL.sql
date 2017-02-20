CALL SP_CAT_CSU_CAT_COL(1, 0, 0, 0, @codErr);
SELECT @codErr;

CALL SP_CAT_CSU_CAT_COL(2, 3, 5, 0, @codErr);
SELECT @codErr;

CALL SP_CAT_CSU_CAT_COL(4, 1, 1, 6, @codErr);
SELECT @codErr;

-- SELECT * FROM COLECCION;
-- SELECT * FROM PRODUCTO_CONTENIDO;

DROP PROCEDURE IF EXISTS bodyflex.SP_CAT_CSU_CAT_COL;
CREATE PROCEDURE bodyflex.`SP_CAT_CSU_CAT_COL`(
                                                IN idCol varchar(10)
                                                , IN idCat1 varchar(10)
                                                , IN idCat2 varchar(10)
                                                , IN idCat3 varchar(10)
                                                , OUT codErr INTEGER
                                              )
BEGIN
  
  -- DECLARE EXIT HANDLER FOR SQLEXCEPTION SET codErr=99;
  SET codErr=0;
  SET @SW=0;
  SET @DRIVE=(SELECT PARVAL FROM PARAMETROS WHERE PARID=1);
  
  -- CASO 1: SOLO COLECCIÓN    
    IF(idCat2=0 AND idCat3=0)THEN
      
      -- 1° TABLA TEMPORAL
      SELECT PC2.PCP2_NOM AS NOM
      , PC2.pcp2_GD2 AS GD
      , @DRIVE AS RUTA
      FROM COLECCION C
      , COLECCION_PRODUCTO CP
      , PRODUCTO P
      , PRODUCTO_CATEGORIA1 PC1
      , PRODUCTO_CATEGORIA2 PC2
      WHERE PC1.pcp1_id=PC2.pcp1_id 
      AND P.PROID=CP.PROID 
      AND C.COID=CP.COID
      AND C.COID=idCol
      GROUP BY NOM, GD, RUTA
      ORDER BY RAND() LIMIT 6;
            
      -- 2° ESTABLECEMOS SW
      SET @SW=1;
         
    END IF;
    
    IF(@SW=0)THEN
      -- CASO 2: EXISTE CATEGORIA 3
      IF(idCat2<>0 AND idCat3<>0)THEN
        
        -- 1° TABLA TEMPORAL
        SELECT PC3.PCP3_NOM AS NOM
        , PC3.pcp3_GD2 AS GD
        , @DRIVE AS RUTA
        FROM COLECCION C
        , COLECCION_PRODUCTO CP
        , PRODUCTO P
        , PRODUCTO_CATEGORIA1 PC1
        , PRODUCTO_CATEGORIA2 PC2
        , PRODUCTO_CATEGORIA3 PC3
        WHERE PC1.pcp1_id=PC2.pcp1_id 
        AND PC2.pcp2_id=PC3.pcp2_id 
        AND PC3.pcp3_id=P.pcp3_id
        AND P.PROID=CP.PROID 
        AND C.COID=CP.COID
        AND C.COID=idCol
        AND P.pcp1_id=idCat1
        AND P.pcp2_id=idCat2
        AND P.pcp3_id=idCat3
        GROUP BY NOM, GD, RUTA
        ORDER BY RAND() LIMIT 6;
                          
        -- 2° ESTABLECEMOS SW
        SET @SW=1;
        
      END IF;
      
      IF(@SW=0)THEN
        -- CASO 3: SOLO EXISTE CATEGORIA 2
        IF(idCat2<>0 AND idCat3=0)THEN
        
          -- 1° TABLA TEMPORAL
          SELECT PC2.PCP2_NOM AS NOM
          , PC2.pcp2_GD2 AS GD
          , @DRIVE AS RUTA
          FROM COLECCION C
          , COLECCION_PRODUCTO CP
          , PRODUCTO P
          , PRODUCTO_CATEGORIA1 PC1
          , PRODUCTO_CATEGORIA2 PC2
          WHERE PC1.pcp1_id=PC2.pcp1_id 
          AND P.PROID=CP.PROID 
          AND C.COID=CP.COID
          AND C.COID=idCol
          AND P.pcp1_id=idCat1
          AND P.pcp2_id=idCat2
          GROUP BY NOM, GD, RUTA
          ORDER BY RAND() LIMIT 6;
          
          -- 2° ESTABLECEMOS SW     
          SET @SW=1;
          
        END IF;
      END IF;
      
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