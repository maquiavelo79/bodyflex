
-- CALL SP_CP_PRO_PUBLICACION_ELIMINA_ALL_ETIQUETA('32');

-- SELECT * FROM PROFESIONAL
-- SELECT * FROM PUBLICACION
-- SELECT * FROM CATEGORIA_ETIQUETA
-- SELECT * FROM ETIQUETA
-- SELECT * FROM PUBLICACION_ETIQUETA

DROP PROCEDURE IF EXISTS delta.SP_CP_PRO_PUBLICACION_ELIMINA_ALL_ETIQUETA;
CREATE PROCEDURE delta.`SP_CP_PRO_PUBLICACION_ELIMINA_ALL_ETIQUETA`(
                                                                        IN id VARCHAR(20)
                                                                        , OUT codErr INTEGER
                                                                      )
BEGIN
DECLARE EXIT HANDLER FOR SQLEXCEPTION SET codErr=99;
SET codErr=0;
  DELETE FROM PUBLICACION_ETIQUETA WHERE PUID=id;
  SELECT 1;
END;


-- select * from PUBLICACION_ETIQUETA;