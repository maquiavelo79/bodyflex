-- select * from publicacion
-- CALL SP_PUBLICACION_OBTENER_BAJADA('1');
-- SELECT * FROM PUBLICACION


DROP PROCEDURE IF EXISTS bodyflex.SP_PUBLICACION_OBTENER_BAJADA;
CREATE PROCEDURE bodyflex.`SP_PUBLICACION_OBTENER_BAJADA`(
                                                    IN id VARCHAR(20)
                                                  )
BEGIN
  
  DECLARE EXIT HANDLER FOR SQLEXCEPTION SELECT '99';
  IF EXISTS(SELECT * FROM PUBLICACION WHERE PUID=id)THEN
      SELECT PUBAJ
      FROM PUBLICACION
      WHERE PUID=id;
  ELSE
    SELECT 98;
  END IF;

END;


