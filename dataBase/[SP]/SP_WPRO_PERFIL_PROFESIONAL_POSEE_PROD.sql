
-- CALL SP_WPRO_PERFIL_PROFESIONAL_POSEE_PROD('13661574', @codErr);
-- SELECT @codErr;

DROP PROCEDURE IF EXISTS bodyflex.SP_WPRO_PERFIL_PROFESIONAL_POSEE_PROD;
CREATE PROCEDURE bodyflex.`SP_WPRO_PERFIL_PROFESIONAL_POSEE_PROD`(
                                                                IN rut VARCHAR(20)
                                                                , OUT codErr INTEGER
                                                              )
BEGIN

DECLARE EXIT HANDLER FOR SQLEXCEPTION SET codErr=99;
SET codErr=0;
  IF EXISTS(
    SELECT * FROM PROFESIONAL_PRODUCTO WHERE PRUT = rut
  ) THEN
    SELECT 1;  
  ELSE
    SET codErr=98;
  END IF;
      
END


