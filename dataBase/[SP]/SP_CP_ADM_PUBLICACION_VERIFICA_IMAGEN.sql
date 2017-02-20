DROP PROCEDURE IF EXISTS bodyflex.SP_CP_ADM_PUBLICACION_VERIFICA_IMAGEN;
CREATE PROCEDURE bodyflex.`SP_CP_ADM_PUBLICACION_VERIFICA_IMAGEN`( 
                                                                    IN id VARCHAR(100) 
                                                                    , OUT codErr INTEGER
                                                                  )
BEGIN
DECLARE EXIT HANDLER FOR SQLEXCEPTION SET codErr=99;
SET codErr=0;
  IF EXISTS(SELECT * FROM PUBLICACION WHERE PUID=id AND puPosImg=1)THEN
    SELECT 1, @NOMIMG;
  ELSE
    SELECT 98;
  END IF;
      
END;



-- SELECT * FROM PUBLICACION