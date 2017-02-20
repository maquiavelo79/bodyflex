
-- [PRIMERA LLAMADA]
-- CALL SP_OBTIENE_ETIQUETAS_PUBLICACION('109'); 

DROP PROCEDURE IF EXISTS bodyflex.SP_OBTIENE_ETIQUETAS_PUBLICACION;
CREATE PROCEDURE bodyflex.`SP_OBTIENE_ETIQUETAS_PUBLICACION`(
                                                    IN id VARCHAR(10)
                                                    )
BEGIN

  SELECT ETNOM
  FROM publicacion_etiqueta 
  WHERE PUID=id
  ORDER BY ETNOM ASC;
               
END


-- SELECT * FROM PUBLICACION
-- select * from publicacion_etiqueta ;


