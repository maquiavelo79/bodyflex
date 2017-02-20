
-- [PRIMERA LLAMADA]
-- CALL SP_CONSULTA_PUBLICACION_RSM('0',0,'0','','','',''); 
-- CALL SP_CONSULTA_PUBLICACION_RSM('0',0,'0','','','','');


DROP PROCEDURE IF EXISTS bodyflex.SP_CONSULTA_PUBLICACION_RSM;
CREATE PROCEDURE bodyflex.`SP_CONSULTA_PUBLICACION_RSM`(
                                                    IN rut VARCHAR(10)
                                                    , IN sw INTEGER
                                                    , IN ULTIMO VARCHAR(100)
                                                    , IN nomPub VARCHAR(500)
                                                    , IN nomCat VARCHAR(100)
                                                    , IN nomEti VARCHAR(100)
                                                    , IN nomRef VARCHAR(100)
                                                    )
BEGIN

    DECLARE CONT INT DEFAULT 0;
    DECLARE CANT INT DEFAULT 0;
    DECLARE PAG INT DEFAULT 0;
    DECLARE ULTIMOS VARCHAR(1000) DEFAULT '';
    DECLARE id INT DEFAULT 0;
    DECLARE pr INT DEFAULT 0;
   
    CREATE TEMPORARY TABLE TMP_Pag1 
    SELECT PR.PRUT
    , PU.PUID
    , PU.PUFEPUB
    , PU.PUTITULO
    , PU.PUIMG
    , PU.PUBAJ
    FROM PROFESIONAL PR, PUBLICACION PU
    WHERE PR.PRUT = PU.PRUT
    AND PU.PUEST='PUBLICADA'
    AND (PR.PRUT = rut OR rut='0')
    AND (PU.PUTITULO LIKE CONCAT('%',nomPub,'%') OR nomPub='');
         
    CREATE TEMPORARY TABLE TMP_Pag2 
    SELECT tmp1.PRUT
    , tmp1.PUID
    , tmp1.PUFEPUB
    , tmp1.PUTITULO
    , tmp1.PUIMG
    , tmp1.PUBAJ
    , PET.ETNOM
    , PET.CATETINOM
    , PRE.PRNOM
    FROM TMP_Pag1 tmp1, PUBLICACION_ETIQUETA PET, PUBLICACION_REFERENCIA PRE
    WHERE tmp1.PUID=PET.PUID AND tmp1.PUID=PRE.PUID
    AND (PET.CATETINOM LIKE CONCAT('%',nomCat,'%') OR nomCat='')
    AND (PET.ETNOM LIKE CONCAT('%',nomEti,'%') OR nomEti='')   
    AND (PRE.PRNOM LIKE CONCAT('%',nomRef,'%') OR nomRef=''); 

    CREATE TEMPORARY TABLE TMP_Pag3 
    SELECT * FROM PUBLICACION
    WHERE PUID IN (SELECT PUID FROM TMP_Pag2);

    SET CANT = (
      SELECT COUNT(*)
      FROM TMP_Pag3
    );           
    
    SET PAG=CEILING(CANT/4);

    WHILE CONT<PAG DO
      IF CONT=0 THEN            
        CREATE TEMPORARY TABLE TMP_Pag4 SELECT PUID FROM TMP_Pag3 ORDER BY PUFECRE DESC LIMIT 4;                     
      ELSE
        CREATE TEMPORARY TABLE TMP_Pag4 SELECT PUID FROM TMP_Pag3 WHERE PUID<id ORDER BY PUFECRE DESC LIMIT 4;
      END IF;

      SET id = (SELECT PUID FROM TMP_Pag4 ORDER BY PUID DESC LIMIT 1); -- último paginación
      SET pr = (SELECT PUID FROM TMP_Pag4 ORDER BY PUID ASC LIMIT 1); -- primero paginación
      
      SET @DIF=PAG-CONT;
      IF(@DIF<>1)THEN
        SET ULTIMOS = CONCAT(ULTIMOS, CONCAT(CAST(id AS CHAR), '|'));
      ELSE
        SET ULTIMOS = CONCAT(ULTIMOS, CAST(id AS CHAR));
      END IF;
      
      SET id = pr;            
      SET CONT = CONT+1;
      DROP TABLE TMP_Pag4;    
            
    END WHILE;
      
    IF(ULTIMO<>0)THEN  
      SELECT PUID
      , PUBAJ
      , PUFEPUB
      , PUTITULO
      , PUIMG
      , CANT AS 'CANT'
      , PAG AS 'PAG'
      , ULTIMOS AS 'ULT'
      , PRUT
      FROM TMP_Pag3
      WHERE PUID<=ULTIMO
      ORDER BY PUFECRE DESC
      LIMIT 4;
    ELSE
      SELECT PUID
      , PUBAJ
      , PUFEPUB
      , PUTITULO
      , PUIMG
      , CANT AS 'CANT'
      , PAG AS 'PAG'
      , ULTIMOS AS 'ULT'
      , PRUT
      FROM TMP_Pag3
      ORDER BY PUFECRE DESC
      LIMIT 4;
    END IF;
    
    DROP TABLE TMP_Pag1;
    DROP TABLE TMP_Pag2;
    DROP TABLE TMP_Pag3;
        
END


-- SELECT * FROM PUBLICACION


