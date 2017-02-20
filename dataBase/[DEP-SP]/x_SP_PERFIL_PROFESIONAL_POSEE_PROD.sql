
-- CALL SP_PERFIL_PROFESIONAL_POSEE_PROD('tqghogcvkhl7b70riagdq3ne14');

DROP PROCEDURE IF EXISTS bodyflex.SP_PERFIL_PROFESIONAL_POSEE_PROD;
CREATE PROCEDURE bodyflex.`SP_PERFIL_PROFESIONAL_POSEE_PROD`(
                                                                IN rut VARCHAR(20)
                                                              )
BEGIN

DECLARE EXIT HANDLER FOR SQLEXCEPTION SELECT '99';
  
  IF EXISTS(
    SELECT * FROM PROFESIONAL_PRODUCTO WHERE PRUT = rut
  ) THEN
    SELECT 1;  
  ELSE
    SELECT 98;
  END IF;
      
END


