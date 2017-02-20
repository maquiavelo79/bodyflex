


DROP PROCEDURE IF EXISTS delta.SP_CP_PRO_PUBLICACION_ELIMINA_ETIQUETA_DE_PUBLICACION;
CREATE PROCEDURE delta.`SP_CP_PRO_PUBLICACION_ELIMINA_ETIQUETA_DE_PUBLICACION`( 
                                                                IN id VARCHAR(50)
                                                                , IN cat VARCHAR(50)
                                                                , IN eti VARCHAR(50)
                                                                , OUT codErr INTEGER
                                                            )
BEGIN
  
  DECLARE EXIT HANDLER FOR SQLEXCEPTION SET codErr=99;
  SET codErr=0;
  IF EXISTS(SELECT * FROM PUBLICACION_ETIQUETA WHERE PUID=id) THEN
    IF EXISTS(SELECT * FROM PUBLICACION_ETIQUETA WHERE PUID=id AND CATETINOM=cat AND ETNOM=eti) THEN
      DELETE FROM PUBLICACION_ETIQUETA 
      WHERE PUID=id AND CATETINOM=cat AND ETNOM=eti;
      SET @CANT=(SELECT COUNT(*) FROM PUBLICACION_ETIQUETA WHERE PUID=id AND CATETINOM=cat AND ETNOM=eti);
      SELECT 1, @CANT;
    ELSE
      SET codErr=98;
    END IF;
  ELSE
    SET codErr=97; -- PUBLICACION SIN ETIQUETAS
  END IF;
  
END;
