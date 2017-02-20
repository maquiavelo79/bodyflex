DROP PROCEDURE IF EXISTS delta.SP_CP_PRO_PUBLICACION_OBTENER;
CREATE PROCEDURE delta.`SP_CP_PRO_PUBLICACION_OBTENER`(
                                                    IN id VARCHAR(20)
                                                    , OUT codErr INTEGER
                                                  )
BEGIN
  
  DECLARE EXIT HANDLER FOR SQLEXCEPTION SET codErr=99;
  SET codErr=0;
  IF EXISTS(SELECT * FROM PUBLICACION WHERE PUID=id)THEN
    SELECT PUPUBLICACION FROM PUBLICACION WHERE PUID=id;
  ELSE
    SET codErr=98;
  END IF;
        
END;
