-- CALL SP_WPRO_PROFESIONAL_GET_IMG_PRO('4');
-- SELECT * FROM PRODUCTO_CONTENIDO

DROP PROCEDURE IF EXISTS bodyflex.SP_WPRO_PROFESIONAL_GET_IMG_PRO;
CREATE PROCEDURE bodyflex.`SP_WPRO_PROFESIONAL_GET_IMG_PRO`(
                                                        IN id VARCHAR(20)
                                                        , OUT codErr INTEGER
                                                      )
BEGIN
DECLARE EXIT HANDLER FOR SQLEXCEPTION SET codErr=99;
SET codErr=0;

  IF EXISTS(SELECT * FROM PRODUCTO_CONTENIDO WHERE PROID=id) THEN
    SELECT PCO_DRI
    ,  (SELECT PARVAL FROM PARAMETROS WHERE PARNOM='DRIVE') AS URL
    FROM PRODUCTO_CONTENIDO    
    WHERE PROID=id
    ORDER BY PCO_ID ASC;
  ELSE
    SET codErr=98;
  END IF;

END



