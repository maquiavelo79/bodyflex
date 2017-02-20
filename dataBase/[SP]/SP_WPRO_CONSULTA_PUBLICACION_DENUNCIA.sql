

-- select * from profesional

-- CALL SP_WPRO_CONSULTA_PUBLICACION_DENUNCIA(13661574,'pro@bo.cl', @codErr);
-- SELECT @codErr;

-- select * from PROFESIONAL_DENUNCIA

DROP PROCEDURE IF EXISTS bodyflex.SP_WPRO_CONSULTA_PUBLICACION_DENUNCIA;
CREATE PROCEDURE bodyflex.`SP_WPRO_CONSULTA_PUBLICACION_DENUNCIA`(
                                                              IN rut VARCHAR(20),
                                                              IN se VARCHAR(30),
                                                              OUT codErr INTEGER
                                                           )
BEGIN

DECLARE EXIT HANDLER FOR SQLEXCEPTION SET codErr=99;
SET codErr=0;
  IF EXISTS(SELECT * FROM PROFESIONAL_DENUNCIA WHERE PRUT=rut AND pdeSe=se)THEN
    SELECT 1;
  ELSE
    SELECT 2;
  END IF;
  
END;
