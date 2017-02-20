DROP PROCEDURE IF EXISTS delta.SP_CP_PRO_PUBLICACION_PUBLICAR;
CREATE PROCEDURE delta.`SP_CP_PRO_PUBLICACION_PUBLICAR`(
                                                    IN id VARCHAR(100)
                                                    , IN sw INTEGER
                                                    , OUT codErr INTEGER
                                                   )
BEGIN
  
  DECLARE EXIT HANDLER FOR SQLEXCEPTION SET codErr=0;
  SET codErr=0;
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