-- select * from PRODUCTO_CATEGORIA2
-- select * from PRODUCTO_CATEGORIA3


CALL SP_CP_ADM_CSU_CAT3(3, 11, 0, @codErr);
SELECT @codErr;

DROP PROCEDURE IF EXISTS bodyflex.SP_CP_ADM_CSU_CAT3;
CREATE PROCEDURE bodyflex.`SP_CP_ADM_CSU_CAT3`(
                                                IN CAT1 INTEGER
                                                , IN CAT2 INTEGER
                                                , IN ULTIMO VARCHAR(10)
                                                , OUT codErr INTEGER
                                              )
BEGIN
  
  DECLARE CONT INT DEFAULT 0;
  DECLARE CANT INT DEFAULT 0;
  DECLARE PAG INT DEFAULT 0;
  DECLARE ULTIMOS VARCHAR(1000) DEFAULT '';
  DECLARE id INT DEFAULT 0;
  DECLARE pr INT DEFAULT 0;
  
  -- DECLARE EXIT HANDLER FOR SQLEXCEPTION SET codErr=99;  
    
  SET codErr=0;

  -- CANTIDAD DE PRODUCTOS
    SET @CANT=(
                  SELECT COUNT(*) 
                  FROM PRODUCTO_CATEGORIA1 PC1, PRODUCTO_CATEGORIA2 PC2, PRODUCTO_CATEGORIA3 PC3 
                  WHERE PC1.PCP1_ID=PC2.PCP1_ID AND PC2.PCP2_ID=PC3.PCP2_ID
                  AND (PC1.PCP1_ID=CAT1 OR CAT1=0) AND (PC2.PCP2_ID=CAT2 OR CAT2=0)
              );

    IF(@CANT)>0 THEN
      
      SET CANT=(
                  SELECT COUNT(*) 
                  FROM PRODUCTO_CATEGORIA1 PC1, PRODUCTO_CATEGORIA2 PC2, PRODUCTO_CATEGORIA3 PC3 
                  WHERE PC1.PCP1_ID=PC2.PCP1_ID AND PC2.PCP2_ID=PC3.PCP2_ID
                  AND (PC1.PCP1_ID=CAT1 OR CAT1=0) AND (PC2.PCP2_ID=CAT2 OR CAT2=0)
                );
                
      SET PAG=CEILING(CANT/10);
          
      WHILE CONT<PAG DO
        IF CONT=0 THEN            
          CREATE TEMPORARY TABLE TMP_Pag1 
          SELECT PCP3_ID 
          FROM PRODUCTO_CATEGORIA1 PC1
          , PRODUCTO_CATEGORIA2 PC2
          , PRODUCTO_CATEGORIA3 PC3 
          WHERE PC1.PCP1_ID=PC2.PCP1_ID 
          AND PC2.PCP2_ID=PC3.PCP2_ID
          AND (PC1.PCP1_ID=CAT1 OR CAT1=0) 
          AND (PC2.PCP2_ID=CAT2 OR CAT2=0)
          ORDER BY PCP3_ID DESC LIMIT 10;                     
        ELSE
          CREATE TEMPORARY TABLE TMP_Pag1 
          SELECT PCP3_ID
          FROM PRODUCTO_CATEGORIA1 PC1
          , PRODUCTO_CATEGORIA2 PC2
          , PRODUCTO_CATEGORIA3 PC3 
          WHERE PC1.PCP1_ID=PC2.PCP1_ID 
          AND PC2.PCP2_ID=PC3.PCP2_ID 
          AND PCP3_ID<id 
          AND (PC1.PCP1_ID=CAT1 OR CAT1=0) 
          AND (PC2.PCP2_ID=CAT2 OR CAT2=0)
          ORDER BY PCP3_ID DESC LIMIT 10;
        END IF;

        SET id = (SELECT PCP3_ID FROM TMP_Pag1 ORDER BY PCP3_ID DESC LIMIT 1); -- último paginación
        SET pr = (SELECT PCP3_ID FROM TMP_Pag1 ORDER BY PCP3_ID ASC LIMIT 1); -- primero paginación
       
        SET @DIF=PAG-CONT;
        IF(@DIF<>1)THEN
          SET ULTIMOS = CONCAT(ULTIMOS, CONCAT(CAST(id AS CHAR), '|'));
        ELSE
          SET ULTIMOS = CONCAT(ULTIMOS, CAST(id AS CHAR));
        END IF;
       
        SET id = pr;            
        DROP TABLE TMP_Pag1;      
        SET CONT = CONT+1;
              
      END WHILE;

      -- CASE
        -- WHEN sw=0 THEN -- PRIMERA LLAMADA       
          IF(ULTIMO<>0)THEN  
            
              SELECT  PC1.PCP1_ID
              , PC1.PCP1_NOM
              , PC2.PCP2_ID
              , PC2.PCP2_NOM
              , PC3.PCP3_ID
              , PC3.PCP3_NOM
              , PC3.PCP3_GD
              , CANT AS 'CANT' -- Cantidad de Registros
              , PAG AS 'PAG'   -- Paginaciones
              , ULTIMOS AS 'ULT' -- ultimo de cada paginacion
              , PC3.PCP3_GD2
              FROM PRODUCTO_CATEGORIA1 PC1
              , PRODUCTO_CATEGORIA2 PC2
              , PRODUCTO_CATEGORIA3 PC3
              WHERE PC1.PCP1_ID=PC2.PCP1_ID 
              AND PC2.PCP2_ID=PC3.PCP2_ID
              AND (PC1.PCP1_ID=CAT1 OR CAT1=0) 
              AND (PC2.PCP2_ID=CAT2 OR CAT2=0)
              AND PC3.PCP3_ID<=ULTIMO
              ORDER BY PC3.PCP3_ID DESC
              LIMIT 10;
            
          ELSE
          
            SELECT PC1.PCP1_ID
              , PC1.PCP1_NOM
              , PC2.PCP2_ID
              , PC2.PCP2_NOM
              , PC3.PCP3_ID
              , PC3.PCP3_NOM
              , PC3.PCP3_GD
              , CANT AS 'CANT' -- Cantidad de Registros
              , PAG AS 'PAG'   -- Paginaciones
              , ULTIMOS AS 'ULT' -- ultimo de cada paginacion
              , PC3.PCP3_GD2
              FROM PRODUCTO_CATEGORIA1 PC1
              , PRODUCTO_CATEGORIA2 PC2
              , PRODUCTO_CATEGORIA3 PC3
              WHERE PC1.PCP1_ID=PC2.PCP1_ID 
              AND PC2.PCP2_ID=PC3.PCP2_ID
              AND (PC1.PCP1_ID=CAT1 OR CAT1=0) 
              AND (PC2.PCP2_ID=CAT2 OR CAT2=0)
              ORDER BY PC3.PCP3_ID DESC
              LIMIT 10;
            
          END IF;
      -- END CASE;
      
    ELSE
      SET codErr=98;
    END IF;  
  
END;
