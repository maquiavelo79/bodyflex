
-- CALL SP_WPRO_CONSULTA_VOTACION_PROFESIONAL(13661574, 'pro@bo.cl', @codErr);
-- SELECT @codErr;

-- select * from PUBLICACION_VOTACION

DROP PROCEDURE IF EXISTS bodyflex.SP_WPRO_CONSULTA_VOTACION_PROFESIONAL;
CREATE PROCEDURE bodyflex.`SP_WPRO_CONSULTA_VOTACION_PROFESIONAL`(
                                                              IN rut VARCHAR(50)
                                                              , IN ma VARCHAR(100)
                                                              , OUT codErr INTEGER
                                                            )
BEGIN

  -- DECLARE EXIT HANDLER FOR SQLEXCEPTION SET codErr=99;
  SET codErr=0;
  IF EXISTS(SELECT * FROM PROFESIONAL_VOTACION WHERE PRUT=rut AND pvoMa=ma) THEN
    SELECT pvoLi, pvoUn FROM PROFESIONAL_VOTACION WHERE PRUT=rut AND pvoMa=ma;
  ELSE
    SELECT 0 as pvoLi, 0 as pvoUn; -- sin votación
  END IF;

END;
