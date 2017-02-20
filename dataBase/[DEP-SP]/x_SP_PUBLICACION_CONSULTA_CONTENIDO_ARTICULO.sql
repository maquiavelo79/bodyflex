
-- CALL SP_PUBLICACION_CONSULTA_CONTENIDO_ARTICULO('86');
-- CALL SP_PUBLICACION_CONSULTA_CONTENIDO_ARTICULO('75');

-- SELECT * FROM PUBLICACION_CONTENIDO WHERE PUID=86;

DROP PROCEDURE IF EXISTS bodyflex.SP_PUBLICACION_CONSULTA_CONTENIDO_ARTICULO;
CREATE PROCEDURE bodyflex.`SP_PUBLICACION_CONSULTA_CONTENIDO_ARTICULO`(
                                                  IN id VARCHAR(50)
                                                 )
BEGIN

DECLARE EXIT HANDLER FOR SQLEXCEPTION SELECT '99';
  IF EXISTS(SELECT * FROM PUBLICACION_CONTENIDO WHERE PUID=id)THEN
      
      SET @urlPrincipal = (SELECT URLCONT FROM PUBLICACION_CONTENIDO WHERE PUID=id AND PRICONT=1 ORDER BY IDCONT ASC LIMIT 1);
      SET @registros = (SELECT COUNT(*) FROM PUBLICACION_CONTENIDO WHERE PUID=id);
      SET @URL = (SELECT PARVAL FROM PARAMETROS WHERE PARNOM='DRIVE');
            
      SELECT TIPCONT
      , URLCONT
      , @urlPrincipal
      , @registros
      , @URL
      FROM PUBLICACION_CONTENIDO
      WHERE PUID=id 
      ORDER BY IDCONT ASC;     
      
  ELSE
    SELECT 98;
  END IF;

END




