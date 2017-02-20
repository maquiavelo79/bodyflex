
-- SELECT * FROM MARCAS

CALL SP_ADM_CSU_MAR(0, @codErr);
SELECT @codErr;

DROP PROCEDURE IF EXISTS bodyflex.SP_ADM_CSU_MAR;
CREATE PROCEDURE bodyflex.`SP_ADM_CSU_MAR`(
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
    SET @CANT=(SELECT COUNT(*) FROM MARCAS);

    IF(@CANT)>0 THEN
      
      SET CANT=(SELECT COUNT(*) FROM MARCAS);
      SET PAG=CEILING(CANT/10);
          
      WHILE CONT<PAG DO
      
        IF CONT=0 THEN            
          CREATE TEMPORARY TABLE TMP_Pag1 
          SELECT MARID 
          FROM MARCAS
          ORDER BY MARID DESC LIMIT 10;                     
        ELSE
          CREATE TEMPORARY TABLE TMP_Pag1 
          SELECT MARID
          FROM MARCAS 
          WHERE MARID<id   
          ORDER BY MARID DESC LIMIT 10;
        END IF;

        SET id = (SELECT MARID FROM TMP_Pag1 ORDER BY MARID DESC LIMIT 1); -- último paginación
        SET pr = (SELECT MARID FROM TMP_Pag1 ORDER BY MARID ASC LIMIT 1); -- primero paginación
       
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
            SELECT MARID
            , MARNOM
            , MARGD
            , CANT AS 'CANT' -- Cantidad de Registros
            , PAG AS 'PAG'   -- Paginaciones
            , ULTIMOS AS 'ULT' -- ultimo de cada paginacion
            FROM MARCAS 
            WHERE MARID<=ULTIMO
            ORDER BY MARID DESC
            LIMIT 10;
          ELSE
            SELECT MARID
            , MARNOM
            , MARGD
            , CANT AS 'CANT' -- Cantidad de Registros
            , PAG AS 'PAG'   -- Paginaciones
            , ULTIMOS AS 'ULT' -- ultimo de cada paginacion
            FROM MARCAS 
            ORDER BY MARID DESC
            LIMIT 10;
          END IF;
      -- END CASE;
      
    ELSE
      SET codErr=98;
    END IF;  
  
END;
