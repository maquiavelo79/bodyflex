
-- CALL SP_SERVICIO_PROFESIONAL_ELIMINA('12');
   
-- SELECT * FROM PROFESIONAL_SERVICIO;

DROP PROCEDURE IF EXISTS bodyflex.SP_SERVICIO_PROFESIONAL_ELIMINA;
CREATE PROCEDURE bodyflex.`SP_SERVICIO_PROFESIONAL_ELIMINA`(
                                                            IN id VARCHAR(20),
                                                            IN rut VARCHAR(10)
                                                            )
BEGIN
DECLARE EXIT HANDLER FOR SQLEXCEPTION SELECT '99';  

  DELETE FROM PROFESIONAL_SERVICIO WHERE PSID=id AND PRUT=rut;    
  SELECT 1;
  
END;
