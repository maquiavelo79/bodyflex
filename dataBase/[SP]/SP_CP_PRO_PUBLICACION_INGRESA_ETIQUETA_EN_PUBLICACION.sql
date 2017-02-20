
-- CALL SP_CP_PRO_PUBLICACION_INGRESA_ETIQUETA_EN_PUBLICACION('23','CATEGORIA1','ETI1_CAT1');
-- CALL SP_CP_PRO_PUBLICACION_INGRESA_ETIQUETA_EN_PUBLICACION('23','CATEGORIA1','ETI1_CAT1');


-- SELECT * FROM PUBLICACION_ETIQUETA
-- SELECT * FROM ETIQUETA
-- SELECT * FROM PUBLICACION_ETIQUETA


DROP PROCEDURE IF EXISTS delta.SP_CP_PRO_PUBLICACION_INGRESA_ETIQUETA_EN_PUBLICACION;
CREATE PROCEDURE delta.`SP_CP_PRO_PUBLICACION_INGRESA_ETIQUETA_EN_PUBLICACION`( 
                                                                IN id  VARCHAR(10)
                                                              , IN cat VARCHAR(50)
                                                              , IN eti VARCHAR(50)
                                                              , OUT codErr INTEGER
                                                            )
BEGIN

  DECLARE EXIT HANDLER FOR SQLEXCEPTION SET codErr=99;
  SET codErr=0;
  IF NOT EXISTS(SELECT * FROM PUBLICACION_ETIQUETA WHERE PUID=id AND CATETINOM=cat AND ETNOM=eti) THEN
      INSERT INTO PUBLICACION_ETIQUETA(
        PUID
        , CATETINOM
        , ETNOM
      )VALUES(
        id
        , cat
        , eti
      );
      SET @CANT=(SELECT COUNT(*) FROM PUBLICACION_ETIQUETA WHERE PUID=id AND CATETINOM=cat AND ETNOM=eti);
      SELECT 1, @CANT;
  ELSE
    SET codErr=98;
  END IF;    
  
END;
