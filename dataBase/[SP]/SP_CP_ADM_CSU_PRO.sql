
-- SELECT * FROM POSTULACION

-- CALL SP_CP_ADM_CSU_PRO(@codErr);
-- SELECT @codErr AS corErr;

DROP PROCEDURE IF EXISTS bodyflex.SP_CP_ADM_CSU_PRO_POS_APR;
CREATE PROCEDURE bodyflex.`SP_CP_ADM_CSU_PRO_POS_APR`(OUT codErr INTEGER) 
BEGIN
-- CONSULTA PROFESIONAL APROBADO

  DECLARE CONT INT DEFAULT 0;
  DECLARE CANT INT DEFAULT 0;
  DECLARE PAG INT DEFAULT 0;
  DECLARE ULTIMOS VARCHAR(1000) DEFAULT '';
  DECLARE id INT DEFAULT 0;
  DECLARE pr INT DEFAULT 0;
  DECLARE EXIT HANDLER FOR SQLEXCEPTION SET codErr=99;

  SET codErr=0;

  -- CANTIDAD DE PRODUCTOS
    SET @CANT=(SELECT COUNT(*) FROM POSTULACION WHERE PEST=1);

    IF(@CANT)>0 THEN
      
      SET CANT=(SELECT COUNT(*) FROM PROFESIONAL WHERE PEST=1);
      SET PAG=CEILING(CANT/10);
          
      WHILE CONT<PAG DO
        IF CONT=0 THEN            
          CREATE TEMPORARY TABLE TMP_Pag1 
          SELECT PID 
          FROM PROFESIONAL
          WHERE PEST=1
          ORDER BY PID DESC LIMIT 10;                     
        ELSE
          CREATE TEMPORARY TABLE TMP_Pag1 
          SELECT PID
          FROM PROFESIONAL 
          WHERE PID<id AND PEST=1
          ORDER BY PID DESC LIMIT 10;
        END IF;

        SET id = (SELECT PID FROM TMP_Pag1 ORDER BY PID DESC LIMIT 1); -- último paginación
        SET pr = (SELECT PID FROM TMP_Pag1 ORDER BY PID ASC LIMIT 1); -- primero paginación
        
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

      -- SELECT * FROM PROFESIONAL

      CASE
        WHEN sw=0 THEN -- PRIMERA LLAMADA       
          IF(ULTIMO<>0)THEN  
            SELECT PID
            , POSNOM
            , POSAPE
            , POSEMA
            , POSFEC
            , CANT AS 'CANT'
            , PAG AS 'PAG'
            , ULTIMOS AS 'ULT'
            FROM PROFESIONAL 
            WHERE PID<=ULTIMO AND PEST=1
            ORDER BY PID DESC
            LIMIT 10;
          ELSE
            SELECT PID
            , POSNOM
            , POSAPE
            , POSEMA
            , POSFEC
            , CANT AS 'CANT'
            , PAG AS 'PAG'
            , ULTIMOS AS 'ULT'
            FROM PROFESIONAL 
            WHERE PEST=1
            ORDER BY PID DESC
            LIMIT 10;
          END IF;
      END CASE;
      
    ELSE
      SET codErr=98;
    END IF;
  
END




