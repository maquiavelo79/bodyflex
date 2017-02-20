CALL SP_CAT_CSU_PRO_CAT(7, @codErr);
SELECT @codErr;

-- SELECT * FROM PRODUCTO_CONTENIDO;

DROP PROCEDURE IF EXISTS bodyflex.SP_CAT_CSU_PRO_CAT;
CREATE PROCEDURE bodyflex.`SP_CAT_CSU_PRO_CAT`(
                                                IN idPro VARCHAR(10)
                                                , OUT codErr INTEGER
                                               )
BEGIN
  
  DECLARE EXIT HANDLER FOR SQLEXCEPTION SET codErr=99;
  SET codErr=0;
  
  IF EXISTS(SELECT * FROM PRODUCTO_PROFESIONAL WHERE PROID=idPro)THEN
    SET codErr=1;
  ELSE
    SET codErr=98;
  END IF;
  
END




