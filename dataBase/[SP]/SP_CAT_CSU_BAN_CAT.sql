CALL SP_CAT_CSU_BAN_CAT(4,2,4,6,@codErr);
SELECT @codErr;

DROP PROCEDURE IF EXISTS bodyflex.SP_CAT_CSU_BAN_CAT;
CREATE PROCEDURE bodyflex.`SP_CAT_CSU_BAN_CAT`(
                                                IN idCol VARCHAR(10)
                                                , IN idCat1 VARCHAR(10)
                                                , IN idCat2 VARCHAR(10)
                                                , IN idCat3 VARCHAR(10)
                                                , OUT codErr INTEGER
                                               )
BEGIN
  
  DECLARE EXIT HANDLER FOR SQLEXCEPTION SET codErr=99;
  SET codErr=0;
  SET @SW=0;
  SET @DRIVE=(SELECT PARVAL FROM PARAMETROS WHERE PARNOM='DRIVE');
  
  -- CASO 1: SOLO COLECCIÓN    
    IF(idCat2=0 AND idCat3=0)THEN
      SELECT C.CONO
      , C.COGD   
      , @DRIVE
      FROM COLECCION C
      WHERE C.COID=idCol;
      SET @SW=1;
    END IF;

    IF(@SW=0)THEN
      -- CASO 2: EXISTE CATEGORIA 3
      IF(idCat2<>0 AND idCat3<>0)THEN
        SELECT PC3.PCP3_NOM
        , PC3.PCP3_GD
        , @DRIVE
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
        AND CP.COID=C.COID
        AND C.COID=idCol
        AND P.pcp1_id=idCat1
        AND P.pcp2_id=idCat2
        AND P.pcp3_id=idCat3
        LIMIT 1;
        SET @SW=1;
        
      END IF;
      
      IF(@SW=0)THEN
        -- CASO 3: SOLO EXISTE CATEGORIA 2
        IF(idCat2<>0 AND idCat3=0)THEN
          SELECT PC2.PCP2_NOM
          , PC2.PCP2_GD
          , @DRIVE
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
          LIMIT 1;
          SET @SW=1;
        END IF;
      END IF;
      
    END IF;
    
END




