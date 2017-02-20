
-- CALL SP_WPRO_PERFIL_PROFESIONAL_POSEE_PUBLICACION(13661574, @codErr);
-- SELECT @codErr;

DROP PROCEDURE IF EXISTS bodyflex.SP_WPRO_PERFIL_PROFESIONAL_POSEE_PUBLICACION;
CREATE PROCEDURE bodyflex.`SP_WPRO_PERFIL_PROFESIONAL_POSEE_PUBLICACION`(
                                                                IN rut VARCHAR(20)
                                                                , OUT codErr INTEGER
                                                              )
BEGIN

DECLARE EXIT HANDLER FOR SQLEXCEPTION SET codErr=99;
SET codErr=0;
  
  IF EXISTS(
    SELECT * FROM PUBLICACION_PROFESIONAL WHERE PRUT=rut
  ) THEN
    SELECT 1;  
  ELSE
    SET codErr=98;
  END IF;
      
END


