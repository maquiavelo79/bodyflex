-- select * from publicacion
-- CALL SP_CP_PRO_PUBLICACION_OBTENER_BAJADA('1');
-- SELECT * FROM PUBLICACION


DROP PROCEDURE IF EXISTS bodyflex.SP_CP_ADM_PUBLICACION_OBTENER_BAJADA;
CREATE PROCEDURE bodyflex.`SP_CP_ADM_PUBLICACION_OBTENER_BAJADA`(
                                                    IN id VARCHAR(20)
                                                    , OUT codErr INTEGER
                                                  )
BEGIN
  
  DECLARE EXIT HANDLER FOR SQLEXCEPTION SET codErr=99;
  SET codErr=0;
  IF EXISTS(SELECT * FROM PUBLICACION WHERE PUID=id)THEN
      SELECT PUBAJ
      FROM PUBLICACION
      WHERE PUID=id;
  ELSE
    SET codErr=98;
  END IF;

END;


