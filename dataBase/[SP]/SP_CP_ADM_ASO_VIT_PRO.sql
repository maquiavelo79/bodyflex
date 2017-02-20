-- SELECT * FROM PRODUCTO WHERE proid=13
-- SELECT * FROM PRODUCTO_ETIQUETA

call SP_CP_ADM_ASO_VIT_PRO(13, 1, @codErr);
select @codErr;

DROP PROCEDURE IF EXISTS bodyflex.SP_CP_ADM_ASO_VIT_PRO;
CREATE PROCEDURE bodyflex.`SP_CP_ADM_ASO_VIT_PRO`( 
                                                    IN vId VARCHAR(10)
                                                  , IN vSw VARCHAR(10)
                                                  , OUT codErr INTEGER
                                                  )
BEGIN

  DECLARE EXIT HANDLER FOR SQLEXCEPTION SET codErr=99;
  SET codErr=0;
  UPDATE PRODUCTO SET PROENVI=vSw WHERE PROID=vId;
  
END;
