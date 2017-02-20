
-- CALL SP_WAPP_CONSULTA_PUBLICACION_SEGUIR('9386703','pro@bo.cl', @codErr);
-- select @codErr;


DROP PROCEDURE IF EXISTS bodyflex.SP_WAPP_CONSULTA_PUBLICACION_SEGUIR;
CREATE PROCEDURE bodyflex.`SP_WAPP_CONSULTA_PUBLICACION_SEGUIR`(
                                                              IN rut VARCHAR(20),
                                                              IN ma VARCHAR(100),
                                                              OUT codErr INTEGER
                                                           )
BEGIN

DECLARE EXIT HANDLER FOR SQLEXCEPTION SET codErr=99;
SET codErr=0;

  IF EXISTS(SELECT * FROM PROFESIONAL_SEGUIDOR WHERE PRUT=rut AND SEGEM=ma)THEN
    SELECT 1;
  ELSE
    SELECT 2;
  END IF;
  
END;
