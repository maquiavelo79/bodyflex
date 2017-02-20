
-- [PRIMERA LLAMADA]
-- CALL SP_OBTIENE_ETIQUETAS_PUBLICACION('109'); 

DROP PROCEDURE IF EXISTS bodyflex.SP_WAPP_OBTIENE_ETIQUETAS_PUBLICACION;
CREATE PROCEDURE bodyflex.`SP_WAPP_OBTIENE_ETIQUETAS_PUBLICACION`(
                                                      IN id VARCHAR(10)
                                                      , OUT codErr INTEGER
                                                    )
BEGIN
DECLARE EXIT HANDLER FOR SQLEXCEPTION SET codErr=99;
SET codErr=0;

  SELECT ETNOM
  FROM publicacion_etiqueta 
  WHERE PUID=id
  ORDER BY ETNOM ASC;
               
END


-- SELECT * FROM PUBLICACION
-- select * from publicacion_etiqueta ;


