DROP PROCEDURE IF EXISTS bodyflex.SP_PUBLICACION_PUBLICAR;
CREATE PROCEDURE bodyflex.`SP_PUBLICACION_PUBLICAR`(
                                                    IN id VARCHAR(100)
                                                    , sw INTEGER
                                                   )
BEGIN
  
  DECLARE EXIT HANDLER FOR SQLEXCEPTION SELECT '99';
  
  IF(sw=0)THEN
    UPDATE PUBLICACION 
    SET PUEST='PUBLICADA'
    , PUFEPUB=NOW()
    WHERE PUID=id;
  ELSE
    UPDATE PUBLICACION 
    SET PUEST='EDITANDO' 
    , PUFEPUB=''
    WHERE PUID=id;
  END IF;
  
  SELECT PUFEPUB FROM PUBLICACION  WHERE PUID=id;
  
END;


-- select * from PUBLICACION