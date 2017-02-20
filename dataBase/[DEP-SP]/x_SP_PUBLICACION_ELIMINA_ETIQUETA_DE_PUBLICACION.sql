


DROP PROCEDURE IF EXISTS bodyflex.SP_PUBLICACION_ELIMINA_ETIQUETA_DE_PUBLICACION;
CREATE PROCEDURE bodyflex.`SP_PUBLICACION_ELIMINA_ETIQUETA_DE_PUBLICACION`( 
                                                                IN id VARCHAR(50)
                                                                , IN cat VARCHAR(50)
                                                                , IN eti VARCHAR(50)
                                                            )
BEGIN
  
  DECLARE EXIT HANDLER FOR SQLEXCEPTION SELECT '99';
  IF EXISTS(SELECT * FROM PUBLICACION_ETIQUETA WHERE PUID=id) THEN
    IF EXISTS(SELECT * FROM PUBLICACION_ETIQUETA WHERE PUID=id AND CATETINOM=cat AND ETNOM=eti) THEN
      DELETE FROM PUBLICACION_ETIQUETA 
      WHERE PUID=id AND CATETINOM=cat AND ETNOM=eti;
      SELECT 1;
    ELSE
      SELECT 98;
    END IF;
  ELSE
    SELECT 97; -- PUBLICACION SIN ETIQUETAS
  END IF;
  
END;
