-- CALL SP_CP_PRO_PRODUCTO_PUBLICAR('25');
-- SELECT * FROM PROFESIONAL_PRODUCTO;

DROP PROCEDURE IF EXISTS bodyflex.SP_CP_PRO_PRODUCTO_PUBLICAR;
CREATE PROCEDURE bodyflex.`SP_CP_PRO_PRODUCTO_PUBLICAR`(
                                                          IN id VARCHAR(20)
                                                          , IN opc INTEGER
                                                          , OUT codErr INTEGER
                                                        )
BEGIN

DECLARE EXIT HANDLER FOR SQLEXCEPTION SET codErr=99;
SET codErr=0;
  IF opc=1 THEN  
    UPDATE PRODUCTO SET PROET='PUBLICADO', PROFP=NOW() WHERE proID=id;    
    SELECT 1;
  ELSE
    UPDATE PRODUCTO SET PROET='INGRESADO', PROFP='' WHERE proID=id;    
    SELECT 2;
  END IF;

END;
