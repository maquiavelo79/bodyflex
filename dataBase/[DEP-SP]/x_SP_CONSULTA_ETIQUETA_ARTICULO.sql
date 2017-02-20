-- CALL SP_CONSULTA_ETIQUETA_ARTICULO(35);
-- SELECT * FROM PROFESIONAL;
-- SELECT * FROM PUBLICACION;
-- SELECT * FROM publicacion_etiqueta; 

DROP PROCEDURE IF EXISTS bodyflex.SP_CONSULTA_ETIQUETA_ARTICULO;
CREATE PROCEDURE bodyflex.`SP_CONSULTA_ETIQUETA_ARTICULO`(
                                                              IN id VARCHAR(50)
                                                          )
BEGIN 
  
  SELECT ETNOM AS ETIQUETA
  , CATETINOM AS CATEGORIA
  FROM PUBLICACION_ETIQUETA 
  WHERE PUID=id;
  
END;




