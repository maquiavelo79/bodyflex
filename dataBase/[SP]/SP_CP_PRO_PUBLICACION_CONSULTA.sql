-- ULTIMOS = [62 | 54 | 42]

-- [PRIMERA LLAMADA]
CALL SP_CP_PRO_PUBLICACION_CONSULTA('13661574',0,'0',@codErr); 
SELECT @codErr;

SELECT * FROM PUBLICACION_PROFESIONAL;
SELECT * FROM PUBLICACION; 

-- SELECT * FROM PUBLICACION

DROP PROCEDURE IF EXISTS delta.SP_CP_PRO_PUBLICACION_CONSULTA;
CREATE PROCEDURE delta.`SP_CP_PRO_PUBLICACION_CONSULTA`(
                                                    IN rut VARCHAR(10)
                                                    , IN sw INTEGER
                                                    , IN ULTIMO VARCHAR(100)
                                                    , OUT codErr INTEGER
                                                    )
BEGIN

    DECLARE CONT INT DEFAULT 0;
    DECLARE CANT INT DEFAULT 0;
    DECLARE PAG INT DEFAULT 0;
    DECLARE ULTIMOS VARCHAR(1000) DEFAULT '';
    DECLARE id INT DEFAULT 0;
    DECLARE pr INT DEFAULT 0;
    DECLARE EXIT HANDLER FOR SQLEXCEPTION SET codErr=99;
    SET codErr=0;

    -- CANTIDAD DE PUBLICACIONES
    SET @CANT=(SELECT COUNT(*) FROM PUBLICACION_PROFESIONAL PP, PUBLICACION P WHERE PP.PUID=P.PUID AND PP.PRUT=rut AND P.PUEST<>'INACTIVO');

    IF(@CANT)>0 THEN
      
      SET CANT=(SELECT count(*) FROM PUBLICACION_PROFESIONAL WHERE PRUT=rut);
      SET PAG=CEILING(CANT/10);
          
      WHILE CONT<PAG DO
        
        IF CONT=0 THEN            
          CREATE TEMPORARY TABLE TMP_Pag1 
          SELECT PP.PUID 
          FROM PUBLICACION_PROFESIONAL PP, PUBLICACION P 
          WHERE PP.PUID=P.PUID AND 
                PP.PRUT=rut
          ORDER BY P.PUFECRE DESC LIMIT 10;                     
        ELSE
          CREATE TEMPORARY TABLE TMP_Pag1 
          SELECT PP.PUID 
          FROM PUBLICACION_PROFESIONAL PP, PUBLICACION P 
          WHERE PP.PUID=P.PUID  AND 
                PP.PRUT=rut     AND 
                PP.PUID<id
          ORDER BY P.PUFECRE DESC LIMIT 10;
        END IF;

        SET id = (SELECT PUID FROM TMP_Pag1 ORDER BY PUID DESC LIMIT 1); -- último paginación
        SET pr = (SELECT PUID FROM TMP_Pag1 ORDER BY PUID ASC LIMIT 1); -- primero paginación
        
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

      CASE
        WHEN sw=0 THEN -- PRIMERA LLAMADA       
          IF(ULTIMO<>0)THEN  
            SELECT PP.PUID
            , P.PUEST
            , P.PUFECRE
            , P.PUFEMOD
            , P.PUFEPUB
            , P.PUTITULO
            , P.PUIMG
            , CANT AS 'CANT'
            , PAG AS 'PAG'
            , ULTIMOS AS 'ULT'
            , P.PUTIP
            FROM PUBLICACION_PROFESIONAL PP, PUBLICACION P 
            WHERE PP.PUID=P.PUID AND 
                  PP.PRUT=rut AND 
                  PP.PUID<=ULTIMO
            ORDER BY P.PUFECRE DESC
            LIMIT 10;
          ELSE
            SELECT P.PUID
            , P.PUEST
            , P.PUFECRE
            , P.PUFEMOD
            , P.PUFEPUB
            , P.PUTITULO
            , P.PUIMG
            , CANT AS 'CANT'
            , PAG AS 'PAG'
            , ULTIMOS AS 'ULT'
            , P.PUTIP
            FROM PUBLICACION_PROFESIONAL PP, PUBLICACION P 
            WHERE PP.PUID=P.PUID AND 
                  PP.PRUT=rut 
            ORDER BY P.PUFECRE DESC
            LIMIT 10;
          END IF;
      END CASE;
    
    ELSE
      SET codErr=98;
    END IF;
END




