
-- CALL SP_INGRESA_ETIQUETA_PUBLICACION('41','CATEGORIA1','ETI1_CAT1');
-- SELECT * FROM PUBLICACION_ETIQUETA
-- SELECT * FROM ETIQUETA
-- SELECT * FROM CATEGORIA_ETIQUETA


DROP PROCEDURE IF EXISTS bodyflex.SP_PUBLICACION_INGRESA_ETIQUETA;
CREATE PROCEDURE bodyflex.`SP_PUBLICACION_INGRESA_ETIQUETA`( 
                                                                IN id VARCHAR(50)
                                                              , IN cat VARCHAR(50)
                                                              , IN eti VARCHAR(50)
                                                            )
BEGIN

  IF NOT EXISTS(SELECT PEID FROM PUBLICACION_ETIQUETA WHERE PUID=id AND CATETINOM=cat AND ETNOM=eti) THEN
      INSERT INTO PUBLICACION_ETIQUETA(
        PUID
        , CATETINOM
        , ETNOM
      )VALUES(
        id
        , cat
        , eti
      );
  END IF;    
  SELECT 1;
      
END;
