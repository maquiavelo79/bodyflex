-- SELECT * FROM PRODUCTO WHERE proid=13
-- SELECT * FROM PRODUCTO_ETIQUETA

-- call SP_CP_ADM_ING_ETI_PRO(13, 21, @codErr);
-- select @codErr;

DROP PROCEDURE IF EXISTS bodyflex.SP_CP_ADM_ING_ETI_PRO;
CREATE PROCEDURE bodyflex.`SP_CP_ADM_ING_ETI_PRO`( 
                                                    IN vId VARCHAR(10)
                                                  , IN vEt VARCHAR(10)
                                                  , OUT codErr INTEGER
                                                  )
BEGIN

  DECLARE EXIT HANDLER FOR SQLEXCEPTION SET codErr=99;
  SET codErr=0;
  UPDATE PRODUCTO SET PETID=vEt WHERE PROID=vId;
  
END;
