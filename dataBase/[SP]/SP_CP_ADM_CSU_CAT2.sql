-- select * from PRODUCTO_CATEGORIA2

CALL SP_CP_ADM_CSU_CAT2(0, 0, @codErr);
CALL SP_CP_ADM_CSU_CAT2(1, 0, @codErr);
CALL SP_CP_ADM_CSU_CAT2(2, 0, @codErr);
CALL SP_CP_ADM_CSU_CAT2(0, 0, @codErr);
SELECT @codErr;

DROP PROCEDURE IF EXISTS bodyflex.SP_CP_ADM_CSU_CAT2;
CREATE PROCEDURE bodyflex.`SP_CP_ADM_CSU_CAT2`(
                                                IN CAT1 INTEGER
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
    SET @CANT=(SELECT COUNT(*) FROM PRODUCTO_CATEGORIA2 WHERE PCP1_ID=CAT1 OR CAT1=0);

    IF(@CANT)>0 THEN
      
      SET CANT=(SELECT COUNT(*) FROM PRODUCTO_CATEGORIA2 WHERE PCP1_ID=CAT1 OR CAT1=0);
      SET PAG=CEILING(CANT/10);
          
      WHILE CONT<PAG DO
        IF CONT=0 THEN            
          CREATE TEMPORARY TABLE TMP_Pag1 
          SELECT PCP2_ID 
          FROM PRODUCTO_CATEGORIA2
          WHERE PCP1_ID=CAT1 OR CAT1=0
          ORDER BY PCP2_ID DESC LIMIT 10;                     
        ELSE
          CREATE TEMPORARY TABLE TMP_Pag1 
          SELECT PCP2_ID
          FROM PRODUCTO_CATEGORIA2 
          WHERE PCP2_ID<id AND (PCP1_ID=CAT1 OR CAT1=0)  
          ORDER BY PCP2_ID DESC LIMIT 10;
        END IF;

        SET id = (SELECT PCP2_ID FROM TMP_Pag1 ORDER BY PCP2_ID DESC LIMIT 1); -- último paginación
        SET pr = (SELECT PCP2_ID FROM TMP_Pag1 ORDER BY PCP2_ID ASC LIMIT 1); -- primero paginación
       
        SET @DIF=PAG-CONT;
        IF(@DIF<>1)THEN
          SET ULTIMOS = CONCAT(ULTIMOS, CONCAT(CAST(id AS CHAR), '|'));
        ELSE
          SET ULTIMOS = CONCAT(ULTIMOS, CAST(id AS CHAR));
        END IF;
        
        -- SELECT PAG, CONT, ULTIMOS;
        
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
              , PC2.PCP2_GD
              , CANT AS 'CANT' -- Cantidad de Registros
              , PAG AS 'PAG'   -- Paginaciones
              , ULTIMOS AS 'ULT' -- ultimo de cada paginacion
              , PC2.PCP2_GD2
              FROM PRODUCTO_CATEGORIA1 PC1, PRODUCTO_CATEGORIA2 PC2
              WHERE PC1.PCP1_ID=PC2.PCP1_ID 
              AND (PC1.PCP1_ID=CAT1 OR CAT1=0)
              AND PC2.PCP2_ID<=ULTIMO
              ORDER BY PC2.PCP2_ID DESC
              LIMIT 10;
            
          ELSE
          
            SELECT PC1.PCP1_ID
              , PC1.PCP1_NOM
              , PC2.PCP2_ID
              , PC2.PCP2_NOM
              , PC2.PCP2_GD
              , CANT AS 'CANT' -- Cantidad de Registros
              , PAG AS 'PAG'   -- Paginaciones
              , ULTIMOS AS 'ULT' -- ultimo de cada paginacion
              , PC2.PCP2_GD2
              FROM PRODUCTO_CATEGORIA1 PC1, PRODUCTO_CATEGORIA2 PC2
              WHERE PC1.PCP1_ID=PC2.PCP1_ID 
              AND (PC1.PCP1_ID=CAT1 OR CAT1=0)
              ORDER BY PC2.PCP2_ID DESC
              LIMIT 10;
            
          END IF;
      -- END CASE;
      
    ELSE
      SET codErr=98;
    END IF;  
  
END;
