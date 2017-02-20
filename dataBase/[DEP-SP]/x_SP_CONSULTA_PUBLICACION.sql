-- ULTIMOS = [62 | 54 | 42]

-- [PRIMERA LLAMADA]
-- CALL SP_CONSULTA_PUBLICACION('13661574',0,'0');

-- [REGISTROS ANTERIORES=>REGISTROS MAYORES AL ULTIMO]
-- [DEBERIA ENTREGAR UNA RESPUESTA COMO LA PRIMERA LLAMADA]
-- CALL SP_CONSULTA_PUBLICACION('13661574',1,'62');

-- [REGISTROS POSTERIORES=>REGISTROS MENORES AL PRIMERO]
-- [DEBERIA ENTREGAR COMO RESPUESTA LA ULTIMA PAGINACIÓN]
-- CALL SP_CONSULTA_PUBLICACION('13661574',2,'42');

-- CALL SP_CONSULTA_PUBLICACION('13661574',1,'62');
-- CALL SP_CONSULTA_PUBLICACION('13661574',2,'62');

-- CALL SP_CONSULTA_PUBLICACION('13661574',1,'52');
-- CALL SP_CONSULTA_PUBLICACION('13661574',2,'52');

-- CALL SP_CONSULTA_PUBLICACION('13661574',1,'42');
-- CALL SP_CONSULTA_PUBLICACION('13661574',2,'42');

-- SELECT * FROM PUBLICACION

DROP PROCEDURE IF EXISTS bodyflex.SP_CONSULTA_PUBLICACION;

CREATE PROCEDURE bodyflex.`SP_CONSULTA_PUBLICACION`(IN rut      VARCHAR(10),
                                                    IN sw       INTEGER,
                                                    IN ULTIMO   VARCHAR(100))
   BEGIN
      -- sw = 1 = ANTERIORES
      -- sw = 2 = POSTERIORES

      -- DECLARE PPA INT DEFAULT 0;
      -- DECLARE UPA INT DEFAULT 0;

      DECLARE CONT      INT DEFAULT 0;
      DECLARE CANT      INT DEFAULT 0;
      DECLARE PAG       INT DEFAULT 0;
      DECLARE ULTIMOS   VARCHAR(1000) DEFAULT '';
      DECLARE id        INT DEFAULT 0;
      DECLARE pr        INT DEFAULT 0;
      -- DECLARE PRIMERO VARCHAR(100) DEFAULT '';

      SET CANT =
             (SELECT count(*)
                FROM PUBLICACION
               WHERE PRUT = rut);
      SET PAG = CEILING(CANT / 10);

      WHILE CONT < PAG
      DO
         IF CONT = 0
         THEN
        CREATE TEMPORARY TABLE TMP_Pag1
        SELECT PUID
        FROM PUBLICACION
        WHERE PRUT=rut
        ORDER BY PUFECRE DESC LIMIT 10            ;
         ELSE
        CREATE TEMPORARY TABLE TMP_Pag1
        SELECT PUID
        FROM PUBLICACION
        WHERE PRUT=rut AND PUID<id
        ORDER BY PUFECRE DESC LIMIT 10            ;
         END IF;

         SET id =
                (SELECT PUID
                   FROM TMP_Pag1
                 ORDER BY PUID DESC
                  LIMIT 1);                               -- último paginación
         SET pr =
                (SELECT PUID
                   FROM TMP_Pag1
                 ORDER BY PUID ASC
                  LIMIT 1);                              -- primero paginación

         SET @DIF = PAG - CONT;

         IF (@DIF <> 1)
         THEN
            SET ULTIMOS = CONCAT(ULTIMOS, CONCAT(CAST(id AS CHAR), '|'));
         ELSE
            SET ULTIMOS = CONCAT(ULTIMOS, CAST(id AS CHAR));
         END IF;

         SET id = pr;
         DROP TABLE TMP_Pag1;
         SET CONT = CONT + 1;
      END WHILE;

      CASE
         WHEN sw = 0
         THEN                                               -- PRIMERA LLAMADA
            IF (ULTIMO <> 0)
            THEN
               SELECT PUID,
                      PUEST,
                      PUFECRE,
                      PUFEMOD,
                      PUFEPUB,
                      PUTITULO,
                      PUIMG,
                      CANT AS 'CANT',
                      PAG AS 'PAG',
                      ULTIMOS AS 'ULT',
                      PUTIP
                 FROM PUBLICACION
                WHERE PRUT = rut AND PUID <= ULTIMO
               ORDER BY PUFECRE DESC
                LIMIT 10;
            ELSE
               SELECT PUID,
                      PUEST,
                      PUFECRE,
                      PUFEMOD,
                      PUFEPUB,
                      PUTITULO,
                      PUIMG,
                      CANT AS 'CANT',
                      PAG AS 'PAG',
                      ULTIMOS AS 'ULT',
                      PUTIP
                 FROM PUBLICACION
                WHERE PRUT = rut
               ORDER BY PUFECRE DESC
                LIMIT 10;
            END IF;
      END CASE;
   END