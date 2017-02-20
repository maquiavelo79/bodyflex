
-- CALL SP_CP_ADM_ELI_CAT1(3, @codErr);
-- SELECT @codErr;

-- select * from producto
-- select * from producto_categoria1
-- select * from producto_categoria2
-- select * from producto_categoria3

DROP PROCEDURE IF EXISTS bodyflex.SP_CP_ADM_ELI_CAT1;
CREATE PROCEDURE bodyflex.`SP_CP_ADM_ELI_CAT1`( 
                                                IN vId VARCHAR(10)
                                                , OUT codErr INTEGER
                                              )
BEGIN

-- DECLARE EXIT HANDLER FOR SQLEXCEPTION SET codErr=99;

  SET codErr=0;
  DELETE FROM producto_categoria1 WHERE PCP1_ID=vId;
    
      
END;
