

-- select * from profesional
-- CALL SP_CONSULTA_PUBLICACION_SEGUIR('9386703','pro@bo.cl');
-- select * from PROFESIONAL_DENUNCIA


DROP PROCEDURE IF EXISTS bodyflex.SP_CONSULTA_PUBLICACION_DENUNCIA;
CREATE PROCEDURE bodyflex.`SP_CONSULTA_PUBLICACION_DENUNCIA`(
                                                              IN rut VARCHAR(20),
                                                              IN se VARCHAR(30)
                                                           )
BEGIN

DECLARE EXIT HANDLER FOR SQLEXCEPTION SELECT '99';

  IF EXISTS(SELECT * FROM PROFESIONAL_DENUNCIA WHERE PRUT=rut AND pdeSe=se)THEN
    SELECT 1;
  ELSE
    SELECT 2;
  END IF;
  
END;
