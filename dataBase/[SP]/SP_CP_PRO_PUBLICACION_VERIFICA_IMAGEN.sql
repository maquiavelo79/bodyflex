DROP PROCEDURE IF EXISTS delta.SP_CP_PRO_PUBLICACION_VERIFICA_IMAGEN;
CREATE PROCEDURE delta.`SP_CP_PRO_PUBLICACION_VERIFICA_IMAGEN`( 
                                                                    IN id VARCHAR(100) 
                                                                    , OUT codErr INTEGER
                                                                  )
BEGIN
DECLARE EXIT HANDLER FOR SQLEXCEPTION SET codErr=99;
SET codErr=0;
  IF EXISTS(SELECT * FROM PUBLICACION WHERE PUID=id AND puPosImg=1)THEN
    -- SET @NOMIMG = (SELECT PUNOMIMG FROM PUBLICACION WHERE PUID=id AND puPosImg=1);   
    SELECT 1, @NOMIMG;
  ELSE
    SELECT 98;
  END IF;
      
END;



-- SELECT * FROM PUBLICACION