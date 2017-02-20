
-- CALL SP_CP_ADM_ELI_MAR(3, @codErr);
-- SELECT @codErr;

-- select * from MARCAS

DROP PROCEDURE IF EXISTS bodyflex.SP_CP_ADM_ELI_MAR;
CREATE PROCEDURE bodyflex.`SP_CP_ADM_ELI_MAR`( 
                                                IN vId VARCHAR(10)
                                                , OUT codErr INTEGER
                                              )
BEGIN

-- DECLARE EXIT HANDLER FOR SQLEXCEPTION SET codErr=99;

  SET codErr=0;
  DELETE FROM MARCAS WHERE MARID=vId;
          
END;
