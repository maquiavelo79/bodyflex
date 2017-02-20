
-- SELECT * FROM PUBLICACION_DENUNCIA;

DROP PROCEDURE IF EXISTS bodyflex.SP_WAPP_CONSULTA_DENUNCIA_PUBLICACION;
CREATE PROCEDURE bodyflex.`SP_WAPP_CONSULTA_DENUNCIA_PUBLICACION`( 
                                      IN id VARCHAR(100)
                                      , IN sesion VARCHAR(100)
                                      , OUT codErr INTEGER
                                    )
BEGIN
 DECLARE EXIT HANDLER FOR SQLEXCEPTION SELECT '99';
  IF EXISTS(SELECT * FROM PUBLICACION_DENUNCIA WHERE PUID=id AND DESE=sesion) THEN
    SELECT 1;
  ELSE
    SELECT 2;
  END IF;

END;
