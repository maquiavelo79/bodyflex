
CALL SP_CP_ADM_CSU_CAT1(1, @codErr);
SELECT @codErr;

DROP PROCEDURE IF EXISTS bodyflex.SP_CP_ADM_CSU_CAT1;
CREATE PROCEDURE bodyflex.`SP_CP_ADM_CSU_CAT1`(
                                                IN ULTIMO VARCHAR(10)
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
    SET @CANT=(SELECT COUNT(*) FROM PRODUCTO_CATEGORIA1);

    IF(@CANT)>0 THEN
      
      SET CANT=(SELECT COUNT(*) FROM PRODUCTO_CATEGORIA1);
      SET PAG=CEILING(CANT/10);
          
      WHILE CONT<PAG DO
        IF CONT=0 THEN            
          CREATE TEMPORARY TABLE TMP_Pag1 
          SELECT PCP1_ID 
          FROM PRODUCTO_CATEGORIA1
          ORDER BY PCP1_ID DESC LIMIT 10;                     
        ELSE
          CREATE TEMPORARY TABLE TMP_Pag1 
          SELECT PCP1_ID
          FROM PRODUCTO_CATEGORIA1 
          WHERE PCP1_ID<id   
          ORDER BY PCP1_ID DESC LIMIT 10;
        END IF;

        SET id = (SELECT PCP1_ID FROM TMP_Pag1 ORDER BY PCP1_ID DESC LIMIT 1); -- �ltimo paginaci�n
        SET pr = (SELECT PCP1_ID FROM TMP_Pag1 ORDER BY PCP1_ID ASC LIMIT 1); -- primero paginaci�n
       
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
            SELECT PCP1_ID
            , PCP1_NOM
            , PCP1_GD
            , CANT AS 'CANT' -- Cantidad de Registros
            , PAG AS 'PAG'   -- Paginaciones
            , ULTIMOS AS 'ULT' -- ultimo de cada paginacion
            FROM PRODUCTO_CATEGORIA1 
            WHERE PCP1_ID<=ULTIMO
            ORDER BY PCP1_ID DESC
            LIMIT 10;
          ELSE
            SELECT PCP1_ID
            , PCP1_NOM
            , PCP1_GD
            , CANT AS 'CANT' -- Cantidad de Registros
            , PAG AS 'PAG'   -- Paginaciones
            , ULTIMOS AS 'ULT' -- ultimo de cada paginacion
            FROM PRODUCTO_CATEGORIA1 
            ORDER BY PCP1_ID DESC
            LIMIT 10;
          END IF;
      -- END CASE;
      
    ELSE
      SET codErr=98;
    END IF;  
  
END;
