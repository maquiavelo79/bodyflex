

-- CALL SP_CP_ADM_ELI_MED_PRO('33',@codErr);
-- SELECT @codErr;
   
-- SELECT * FROM PRODUCTO_MEDIDA;
-- SELECT * FROM PROFESIONAL_CUENTAS
-- SELECT * FROM DIRECCION

DROP PROCEDURE IF EXISTS bodyflex.SP_CP_ADM_ELI_MED_PRO;
CREATE PROCEDURE bodyflex.`SP_CP_ADM_ELI_MED_PRO`(
                                                IN vId VARCHAR(10)
                                                , OUT codErr INTEGER
                                                )
BEGIN
  
  DECLARE EXIT HANDLER FOR SQLEXCEPTION SET codErr=99;
  SET codErr=0;
  DELETE FROM PRODUCTO_MEDIDA WHERE PMID=vId;    
  SELECT 1;
          
END;
