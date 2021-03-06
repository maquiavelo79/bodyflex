
-- CALL SP_PUBLICACION_CONSULTA_ETIQUETA_PUBLICACION('19');

-- SELECT * FROM PROFESIONAL;
-- SELECT * FROM CATEGORIA_ETIQUETA;
-- SELECT * FROM ETIQUETA;
-- SELECT * FROM PUBLICACION_ETIQUETA;


DROP PROCEDURE IF EXISTS bodyflex.SP_PUBLICACION_CONSULTA_ETIQUETA_PUBLICACION;
CREATE PROCEDURE bodyflex.`SP_PUBLICACION_CONSULTA_ETIQUETA_PUBLICACION`(
                                                  IN id VARCHAR(50)
                                                 )
BEGIN

DECLARE EXIT HANDLER FOR SQLEXCEPTION SELECT '99';
  IF EXISTS(SELECT * FROM PUBLICACION_ETIQUETA WHERE PUID=id)THEN
      SELECT CONCAT(CATETINOM,'|',ETNOM)
      FROM PUBLICACION_ETIQUETA
      WHERE PUID=id
      ORDER BY ETNOM ASC;
  ELSE
    SELECT 98, 'SIN ETIQUETAS ASOCIADAS!';
  END IF;

END




