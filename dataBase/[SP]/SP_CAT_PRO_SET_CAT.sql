CALL SP_CAT_PRO_SET_CAT('3', '13661574',@codErr);
SELECT @codErr;

-- SELECT * FROM PRODUCTO_PROFESIONAL;

DROP PROCEDURE IF EXISTS bodyflex.SP_CAT_PRO_SET_CAT;
CREATE PROCEDURE bodyflex.`SP_CAT_PRO_SET_CAT`(
                                                IN idPro VARCHAR(10)
                                                , IN rutPro VARCHAR(10)
                                                , OUT codErr INTEGER
                                               )
BEGIN
  
  DECLARE EXIT HANDLER FOR SQLEXCEPTION SET codErr=99;
  SET codErr=0;
  
  IF EXISTS(SELECT * FROM PRODUCTO_PROFESIONAL WHERE PROID=idPro AND PRUT=rutPro)THEN
    DELETE FROM PRODUCTO_PROFESIONAL WHERE PROID=idPro AND PRUT=rutPro;
    SELECT 2;
  ELSE
    INSERT INTO PRODUCTO_PROFESIONAL (PROID, PRUT) VALUES (idPro, rutPro);
    SELECT 1;
  END IF;
  
END




