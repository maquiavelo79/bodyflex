-- CALL SP_CONSULTA_ETIQUETA_ARTICULO(35);
-- SELECT * FROM PROFESIONAL;
-- SELECT * FROM PUBLICACION;
-- SELECT * FROM publicacion_etiqueta; 

DROP PROCEDURE IF EXISTS bodyflex.SP_WAPP_CONSULTA_ETIQUETA_ARTICULO;
CREATE PROCEDURE bodyflex.`SP_WAPP_CONSULTA_ETIQUETA_ARTICULO`(
                                                              IN id VARCHAR(50)
                                                              , OUT codErr INTEGER
                                                          )
BEGIN 
DECLARE EXIT HANDLER FOR SQLEXCEPTION SET codErr=99;
SET codErr=0;

  SELECT ETNOM AS ETIQUETA
  , CATETINOM AS CATEGORIA
  FROM PUBLICACION_ETIQUETA 
  WHERE PUID=id;
  
END;




