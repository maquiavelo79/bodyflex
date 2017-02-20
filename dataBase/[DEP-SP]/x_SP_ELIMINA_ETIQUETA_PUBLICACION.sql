
-- CALL SP_ELIMINA_ETIQUETA_PUBLICACION('9','CATEGORIA3','ETI1_CAT3');
-- CALL SP_ELIMINA_ETIQUETA_PUBLICACION('32','','');

-- SELECT * FROM PROFESIONAL
-- SELECT * FROM PUBLICACION
-- SELECT * FROM CATEGORIA_ETIQUETA
-- SELECT * FROM ETIQUETA
-- SELECT * FROM PUBLICACION_ETIQUETA

DROP PROCEDURE IF EXISTS bodyflex.SP_PUBLICACION_ELIMINA_ETIQUETA_DE_PUBLICACION;
CREATE PROCEDURE bodyflex.`SP_PUBLICACION_ELIMINA_ETIQUETA_DE_PUBLICACION`( 
                                                                IN id VARCHAR(50)
                                                                , IN cat VARCHAR(50)
                                                                , IN eti VARCHAR(50)
                                                            )
BEGIN
  -- DECLARE EXIT HANDLER FOR SQLEXCEPTION SELECT '99';
  
  DELETE FROM PUBLICACION_ETIQUETA 
  WHERE PUID=id AND CATETINOM=cat AND ETNOM=eti;
  SELECT 1;
      
END;


-- select * from PUBLICACION_ETIQUETA;