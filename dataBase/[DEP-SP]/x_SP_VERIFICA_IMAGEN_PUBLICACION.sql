DROP PROCEDURE IF EXISTS bodyflex.SP_VERIFICA_IMAGEN_PUBLICACION;
CREATE PROCEDURE bodyflex.`SP_VERIFICA_IMAGEN_PUBLICACION`( IN id VARCHAR(100) )
BEGIN

  IF EXISTS(SELECT * FROM PUBLICACION WHERE PUID=id AND puPosImg=1)THEN
    SET @NOMIMG = (SELECT PUNOMIMG FROM PUBLICACION WHERE PUID=id AND puPosImg=1);   
    SELECT 1, @NOMIMG;
  ELSE
    SELECT 2, '';
  END IF;
      
END;
