
-- CALL SP_CP_PRO_PUBLICACION_CONSULTA_CATEGORIA_ETIQUETA();
-- SELECT * FROM PROFESIONAL;
-- SELECT * FROM CATEGORIA_ETIQUETA;


DROP PROCEDURE IF EXISTS bodyflex.SP_CP_ADM_PUBLICACION_CONSULTA_CATEGORIA_ETIQUETA;
CREATE PROCEDURE bodyflex.`SP_CP_ADM_PUBLICACION_CONSULTA_CATEGORIA_ETIQUETA`(OUT codErr INTEGER)
BEGIN

DECLARE EXIT HANDLER FOR SQLEXCEPTION SET codErr=99;
SET codErr=0;
  IF EXISTS(SELECT * FROM PUBLICACION_CATEGORIA_ETIQUETA) THEN
      SELECT CATETINOM
      FROM PUBLICACION_CATEGORIA_ETIQUETA
      ORDER BY CATETINOM ASC;
  ELSE
    SET codErr=98;
  END IF;

END




