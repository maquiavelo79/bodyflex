
-- CALL SP_CONSULTA_VOTACION_PUBLICACION('35', 'fjcalderon@uc.cl');
-- CALL SP_CONSULTA_VOTACION_PROFESIONAL('9386703','pro@bo.cl');
-- select * from PUBLICACION_VOTACION

DROP PROCEDURE IF EXISTS bodyflex.SP_CONSULTA_VOTACION_PROFESIONAL;
CREATE PROCEDURE bodyflex.`SP_CONSULTA_VOTACION_PROFESIONAL`(
                                                              IN rut VARCHAR(50)
                                                              , IN ma VARCHAR(100)
                                                            )
BEGIN

  -- DECLARE EXIT HANDLER FOR SQLEXCEPTION SELECT '99';
  IF EXISTS(SELECT * FROM PROFESIONAL_VOTACION WHERE PRUT=rut AND pvoMa=ma) THEN
    SELECT pvoLi, pvoUn FROM PROFESIONAL_VOTACION WHERE PRUT=rut AND pvoMa=ma;
  ELSE
    SELECT 98;
  END IF;

END;
