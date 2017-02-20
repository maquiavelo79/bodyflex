
-- CALL SP_PUBLICACION_POSEE_CONTENIDO('86');

-- SELECT * FROM PUBLICACION_CONTENIDO;

DROP PROCEDURE IF EXISTS bodyflex.SP_WAPP_PUBLICACION_POSEE_CONTENIDO;
CREATE PROCEDURE bodyflex.`SP_WAPP_PUBLICACION_POSEE_CONTENIDO`(
                                                  IN id VARCHAR(50)
                                                  , OUT codErr INTEGER
                                                 )
BEGIN

DECLARE EXIT HANDLER FOR SQLEXCEPTION SET codErr=99;
SET codErr=0;
  IF EXISTS(SELECT * FROM PUBLICACION_CONTENIDO WHERE PUID=id)THEN
      SET @registros = (SELECT COUNT(*) FROM PUBLICACION_CONTENIDO WHERE PUID=id);
      IF @registros>1 THEN
        SELECT 1;
      ELSE
        SELECT 0;
      END IF;  
  ELSE
    SET codErr=98;
  END IF;

END




