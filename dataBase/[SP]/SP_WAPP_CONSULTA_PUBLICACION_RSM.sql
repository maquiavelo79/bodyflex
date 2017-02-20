
DROP TABLE TMP_Pag1;
DROP TABLE TMP_Pag2;
DROP TABLE TMP_Pag3;
DROP TABLE TMP_Pag4;

-- [PRIMERA LLAMADA]
CALL SP_WAPP_CONSULTA_PUBLICACION_RSM('0','0','0','','','','','','','','','',@codErr);
SELECT @codErr;

DROP PROCEDURE IF EXISTS delta.SP_WAPP_CONSULTA_PUBLICACION_RSM;
CREATE PROCEDURE delta.`SP_WAPP_CONSULTA_PUBLICACION_RSM`(
                                                    IN rut VARCHAR(10)
                                                    , IN sw INTEGER
                                                    , IN ULTIMO VARCHAR(100)
                                                    , IN pubId VARCHAR(100)
                                                    , IN nomCat VARCHAR(100)
                                                    , IN nomEti VARCHAR(100)
                                                    , IN nomRef VARCHAR(100)
                                                    , IN titBsq VARCHAR(100)
                                                    , IN catBsq VARCHAR(100)
                                                    , IN etiBsq VARCHAR(100)
                                                    , IN refBsq VARCHAR(100)
                                                    , IN proBsq VARCHAR(100)
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

    IF(LENGTH(TRIM(titBsq))>0) THEN
      INSERT INTO PUBLICACION_BUSQUEDA (BSQFE, BSQTI, BSQDA) VALUES (NOW(), 'TIT', titBsq);
    END IF;
    IF(LENGTH(TRIM(catBsq))>0) THEN
      INSERT INTO PUBLICACION_BUSQUEDA (BSQFE, BSQTI, BSQDA) VALUES (NOW(), 'CAT', catBsq);
    END IF;
    IF(LENGTH(TRIM(etiBsq))>0) THEN
      INSERT INTO PUBLICACION_BUSQUEDA (BSQFE, BSQTI, BSQDA) VALUES (NOW(), 'ETI', etiBsq);
    END IF;
    IF(LENGTH(TRIM(refBsq))>0) THEN
      INSERT INTO PUBLICACION_BUSQUEDA (BSQFE, BSQTI, BSQDA) VALUES (NOW(), 'REF', refBsq);
    END IF;
    IF(LENGTH(TRIM(proBsq))>0) THEN
      INSERT INTO PUBLICACION_BUSQUEDA (BSQFE, BSQTI, BSQDA) VALUES (NOW(), 'PRO', proBsq);
    END IF;
      
    CREATE TEMPORARY TABLE TMP_Pag1 
    SELECT PR.PRUT
    , PU.PUID
    , PU.PUFEPUB
    , PU.PUTITULO
    , PU.PUIMG
    , PU.PUBAJ
    , PU.puRutImg
    , PU.puNomImg
    FROM PROFESIONAL PR, PUBLICACION_PROFESIONAL PP, PUBLICACION PU
    WHERE PR.PRUT = PP.PRUT AND PU.PUID=PP.PUID 
    AND PU.PUEST='PUBLICADA'
    AND (PR.PRUT = rut OR rut='0')
    AND (PU.PUID = pubId OR pubId='');
    
    CREATE TEMPORARY TABLE TMP_Pag2 
    SELECT tmp1.PRUT
    , tmp1.PUID
    , tmp1.PUFEPUB
    , tmp1.PUTITULO
    , tmp1.PUIMG
    , tmp1.PUBAJ
    , tmp1.puRutImg
    , tmp1.puNomImg
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
    
    SET @DRIVE=(SELECT PARVAL FROM PARAMETROS WHERE PARNOM='DRIVE');
    
    
    IF(ULTIMO<>0)THEN  
      IF EXISTS(SELECT * FROM TMP_Pag3 WHERE PUID<=ULTIMO) THEN 
        SELECT tmp3.PUID
        , tmp3.PUBAJ
        , tmp3.PUFEPUB
        , tmp3.PUTITULO
        , tmp3.PUIMG
        , CANT AS 'CANT'
        , PAG AS 'PAG'
        , ULTIMOS AS 'ULT'
        , (SELECT PRUT FROM publicacion_profesional WHERE PUID=tmp3.PUID) AS 'PRUT'
        , tmp3.puRutImg
        , tmp3.puNomImg
        , @DRIVE AS 'DRIVE'
        FROM TMP_Pag3 tmp3
        WHERE tmp3.PUID<=ULTIMO
        ORDER BY tmp3.PUFECRE DESC
        LIMIT 4;
      ELSE
        SET codErr=98;
      END IF;  
    ELSE
      IF EXISTS(SELECT * FROM TMP_Pag3) THEN  
        SELECT tmp3.PUID
        , tmp3.PUBAJ
        , tmp3.PUFEPUB
        , tmp3.PUTITULO
        , tmp3.PUIMG
        , CANT AS 'CANT'
        , PAG AS 'PAG'
        , ULTIMOS AS 'ULT'
        , (SELECT PRUT FROM publicacion_profesional WHERE PUID=tmp3.PUID) AS 'PRUT'
        , tmp3.puRutImg
        , tmp3.puNomImg
        , @DRIVE AS 'DRIVE'
        FROM TMP_Pag3 tmp3
        ORDER BY tmp3.PUFECRE DESC
        LIMIT 4;
      ELSE
        SET codErr=98;
      END IF;
    END IF;
        
    DROP TABLE TMP_Pag1;
    DROP TABLE TMP_Pag2;
    DROP TABLE TMP_Pag3;
        
END


-- SELECT * FROM PUBLICACION


