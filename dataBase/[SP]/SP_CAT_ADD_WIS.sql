-- SELECT * FROM PROFESIONAL
-- SELECT * FROM PRODUCTO
-- SELECT * FROM PRODUCTO_WISHLIST_PROFESIONAL

-- CALL SP_CAT_ADD_WIS('13661574', '40',@codErr);
-- SELECT @codErr;


DROP PROCEDURE IF EXISTS bodyflex.SP_CAT_ADD_WIS;
CREATE PROCEDURE bodyflex.`SP_CAT_ADD_WIS`(
                                            IN rut VARCHAR(10)
                                            , IN idPro VARCHAR(10)  
                                            , OUT codErr INTEGER
                                          )
BEGIN
  
  -- DECLARE EXIT HANDLER FOR SQLEXCEPTION SET codErr=99;
  SET codErr=0;
  IF EXISTS(SELECT * FROM PRODUCTO_WISHLIST_PROFESIONAL WHERE PROID=idPro AND PRUT=rut) THEN
    DELETE FROM PRODUCTO_WISHLIST_PROFESIONAL WHERE PROID=idPro AND PRUT=rut;
    SET codErr=2;
  ELSE
    INSERT INTO PRODUCTO_WISHLIST_PROFESIONAL (PROID, PRUT, PWPFE) VALUES (idPro, rut, NOW());
    SET codErr=1;
  END IF;
    
END 




