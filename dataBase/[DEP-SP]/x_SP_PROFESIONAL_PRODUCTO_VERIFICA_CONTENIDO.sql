--  CALL SP_PROFESIONAL_PRODUCTO_VERIFICA_CONTENIDO('9386703','0','0');

DROP PROCEDURE IF EXISTS bodyflex.SP_CP_PRO_PRODUCTO_VERIFICA_CONTENIDO;
CREATE PROCEDURE bodyflex.`SP_CP_PRO_PRODUCTO_VERIFICA_CONTENIDO`(
                                                     IN idPro VARCHAR(20)
                                                     ,  OUT codErr INTEGER
                                                 )
BEGIN
DECLARE EXIT HANDLER FOR SQLEXCEPTION SET codErr=99;

SET codErr=0;

  IF EXISTS(SELECT * FROM PROFESIONAL_PRODUCTO_CONTENIDO WHERE PROPID=idPro) THEN
    SELECT 1;
  ELSE
    SET codErr=0;
  END IF;  
    
END




