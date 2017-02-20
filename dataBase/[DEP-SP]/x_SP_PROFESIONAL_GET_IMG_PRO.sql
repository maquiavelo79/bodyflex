-- CALL SP_PROFESIONAL_GET_IMG_PRO('4');
-- SELECT * FROM PROFESIONAL_PRODUCTO_CONTENIDO

DROP PROCEDURE IF EXISTS bodyflex.SP_PROFESIONAL_GET_IMG_PRO;
CREATE PROCEDURE bodyflex.`SP_PROFESIONAL_GET_IMG_PRO`(
                                                        IN id VARCHAR(20)
                                                      )
BEGIN
DECLARE EXIT HANDLER FOR SQLEXCEPTION SELECT '99';

  IF EXISTS(SELECT * FROM PROFESIONAL_PRODUCTO_CONTENIDO WHERE PROPID=id) THEN
    SELECT PCO_DRI
    ,  (SELECT PARVAL FROM PARAMETROS WHERE PARNOM='DRIVE') AS URL
    FROM PROFESIONAL_PRODUCTO_CONTENIDO    
    WHERE PROPID=id
    ORDER BY PCO_ID ASC;
  ELSE
    SELECT 98;    
  END IF;

END




