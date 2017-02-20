
-- CALL SP_PUBLICACION_INGRESA_ETIQUETA_EN_PUBLICACION('23','CATEGORIA1','ETI1_CAT1');
-- CALL SP_PUBLICACION_INGRESA_ETIQUETA_EN_PUBLICACION('23','CATEGORIA1','ETI1_CAT1');


-- SELECT * FROM PUBLICACION_ETIQUETA
-- SELECT * FROM ETIQUETA
-- SELECT * FROM PUBLICACION_ETIQUETA


DROP PROCEDURE IF EXISTS bodyflex.SP_PUBLICACION_INGRESA_ETIQUETA_EN_PUBLICACION;
CREATE PROCEDURE bodyflex.`SP_PUBLICACION_INGRESA_ETIQUETA_EN_PUBLICACION`( 
                                                                IN id  VARCHAR(10)
                                                              , IN cat VARCHAR(50)
                                                              , IN eti VARCHAR(50)
                                                            )
BEGIN

  -- DECLARE EXIT HANDLER FOR SQLEXCEPTION SELECT '99';
  
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
      SELECT 1;
  ELSE
    SELECT 98; -- ETIQUETA YA EXISTE
  END IF;    
  
END;
