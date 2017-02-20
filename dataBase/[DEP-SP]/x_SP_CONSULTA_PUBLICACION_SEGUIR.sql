

-- select * from profesional
-- CALL SP_CONSULTA_PUBLICACION_SEGUIR('9386703','pro@bo.cl');
-- select * from votacion


DROP PROCEDURE IF EXISTS bodyflex.SP_CONSULTA_PUBLICACION_SEGUIR;
CREATE PROCEDURE bodyflex.`SP_CONSULTA_PUBLICACION_SEGUIR`(
                                                              IN rut VARCHAR(20),
                                                              IN ma VARCHAR(100)
                                                           )
BEGIN

DECLARE EXIT HANDLER FOR SQLEXCEPTION SELECT '99';

  IF EXISTS(SELECT * FROM PROFESIONAL_SEGUIDOR WHERE PRUT=rut AND SEGEM=ma)THEN
    SELECT 1;
  ELSE
    SELECT 2;
  END IF;
  
END;
