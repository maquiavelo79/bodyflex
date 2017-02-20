
-- CALL SP_WPRO_PERFIL_PROFESIONAL_POSEE_VENTA('13661574', @codErr);
-- SELECT @codErr;

-- SELECT * FROM CARRO;

DROP PROCEDURE IF EXISTS bodyflex.SP_WPRO_PERFIL_PROFESIONAL_POSEE_VENTA;
CREATE PROCEDURE bodyflex.`SP_WPRO_PERFIL_PROFESIONAL_POSEE_VENTA`(
                                                                IN rut VARCHAR(20)
                                                                , IN se VARCHAR(30)
                                                                , OUT codErr INTEGER
                                                              )
BEGIN

DECLARE EXIT HANDLER FOR SQLEXCEPTION SET codErr=99;
SET codErr=0;
  IF EXISTS(
    SELECT * FROM CARRO WHERE CARUTPRO = rut
  ) THEN
    SELECT 1;  
  ELSE
    SET codErr=98;
  END IF;
      
END


