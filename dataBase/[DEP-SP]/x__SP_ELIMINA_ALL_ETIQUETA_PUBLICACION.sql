
-- CALL SP_ELIMINA_ALL_ETIQUETA_PUBLICACION('32');

-- SELECT * FROM PROFESIONAL
-- SELECT * FROM PUBLICACION
-- SELECT * FROM CATEGORIA_ETIQUETA
-- SELECT * FROM ETIQUETA
-- SELECT * FROM PUBLICACION_ETIQUETA

DROP PROCEDURE IF EXISTS bodyflex.SP_ELIMINA_ALL_ETIQUETA_PUBLICACION;
CREATE PROCEDURE bodyflex.`SP_ELIMINA_ALL_ETIQUETA_PUBLICACION`( 
                                                                IN id VARCHAR(50)
                                                            )
BEGIN

  DELETE FROM PUBLICACION_ETIQUETA WHERE PUID=id;
  SELECT 1;
      
END;


-- select * from PUBLICACION_ETIQUETA;