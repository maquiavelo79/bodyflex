CALL SP_CAT_PRO_GET_MED(13, @codErr);
SELECT @codErr;

CALL SP_CAT_PRO_GET_MED(5, @codErr);
SELECT @codErr;

-- SELECT * FROM PRODUCTO_CONTENIDO;

DROP PROCEDURE IF EXISTS bodyflex.SP_CAT_PRO_GET_MED;
CREATE PROCEDURE bodyflex.`SP_CAT_PRO_GET_MED`(
                                                IN idPro VARCHAR(10)
                                                , OUT codErr INTEGER
                                               )
BEGIN
  
  DECLARE EXIT HANDLER FOR SQLEXCEPTION SET codErr=99;
  SET codErr=0;
  
  IF EXISTS(SELECT * FROM PRODUCTO_MEDIDA WHERE PROID=idPro)THEN
    SELECT pMId
    , M.medVa
    FROM PRODUCTO_MEDIDA PM, MEDIDA M
    WHERE M.medId=PM.medId AND PROID=idPro;
  ELSE
    SET codErr=98;
  END IF;
  
END




