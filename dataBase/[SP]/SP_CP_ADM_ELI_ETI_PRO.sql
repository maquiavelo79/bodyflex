

-- CALL SP_CP_ADM_ELI_ETI_PRO(12, @codErr);
-- SELECT @codErr;

-- SELECT * FROM PRODUCTO 
-- SELECT * FROM PRODUCTO_ETIQUETA

DROP PROCEDURE IF EXISTS bodyflex.SP_CP_ADM_ELI_ETI_PRO;
CREATE PROCEDURE bodyflex.`SP_CP_ADM_ELI_ETI_PRO`(
                                                  IN vId VARCHAR(10)
                                                  , OUT codErr INTEGER
                                                )
BEGIN
  
  DECLARE EXIT HANDLER FOR SQLEXCEPTION SET codErr=99;
  SET codErr=0;
  UPDATE PRODUCTO SET PETID=1 WHERE PROID= vId;
          
END;
