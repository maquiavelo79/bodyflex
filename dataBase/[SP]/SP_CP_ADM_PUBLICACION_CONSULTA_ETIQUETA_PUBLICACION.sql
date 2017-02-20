
-- CALL SP_PUBLICACION_CONSULTA_ETIQUETA_PUBLICACION('19');

-- SELECT * FROM PROFESIONAL;
-- SELECT * FROM CATEGORIA_ETIQUETA;
-- SELECT * FROM ETIQUETA;
-- SELECT * FROM PUBLICACION_ETIQUETA;


DROP PROCEDURE IF EXISTS bodyflex.SP_CP_ADM_PUBLICACION_CONSULTA_ETIQUETA_PUBLICACION;
CREATE PROCEDURE bodyflex.`SP_CP_ADM_PUBLICACION_CONSULTA_ETIQUETA_PUBLICACION`(
                                                  IN id VARCHAR(50)
                                                  , OUT codErr INTEGER
                                                 )
BEGIN

DECLARE EXIT HANDLER FOR SQLEXCEPTION SET codErr=99;
SET codErr=0;
  IF EXISTS(SELECT * FROM PUBLICACION_ETIQUETA WHERE PUID=id)THEN
      SELECT CONCAT(CATETINOM,'|',ETNOM)
      FROM PUBLICACION_ETIQUETA
      WHERE PUID=id
      ORDER BY ETNOM ASC;
  ELSE
    SET codErr=98;
  END IF;

END




