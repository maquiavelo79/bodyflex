
-- SELECT * FROM DENUNCIA;

DROP PROCEDURE IF EXISTS bodyflex.SP_WAPP_DENUNCIAR_PUBLICACION;
CREATE PROCEDURE bodyflex.`SP_WAPP_DENUNCIAR_PUBLICACION`( 
                                      IN id VARCHAR(100)
                                      , IN sesion VARCHAR(100)
                                      , OUT codErr INTEGER
                                    )
BEGIN
DECLARE EXIT HANDLER FOR SQLEXCEPTION SET codErr=99;
 SET codErr=0;
  IF EXISTS(SELECT * FROM PUBLICACION_DENUNCIA WHERE PUID=id AND DESE=sesion) THEN
    DELETE FROM PUBLICACION_DENUNCIA WHERE PUID=id AND DESE=sesion;
    SELECT 2;
  ELSE
    INSERT INTO PUBLICACION_DENUNCIA(PUID, DEFE, DESE) VALUES (id, now(), sesion);
    SELECT 1;
  END IF;

END;
