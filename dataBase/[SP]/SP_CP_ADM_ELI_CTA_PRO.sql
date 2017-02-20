

-- CALL SP_CP_ADM_ELI_CTA_PRO('33',@codErr);
-- SELECT @codErr;
   
-- SELECT * FROM PROFESIONAL;
-- SELECT * FROM PROFESIONAL_CUENTAS
-- SELECT * FROM DIRECCION

DROP PROCEDURE IF EXISTS bodyflex.SP_CP_ADM_ELI_CTA_PRO;
CREATE PROCEDURE bodyflex.`SP_CP_ADM_ELI_CTA_PRO`(
                                                IN vId VARCHAR(20)
                                                , OUT codErr INTEGER
                                                )
BEGIN
  
  DECLARE EXIT HANDLER FOR SQLEXCEPTION SET codErr=99;
  SET codErr=0;
  DELETE FROM PROFESIONAL_CUENTAS WHERE PROCTAID=vId;    
  SELECT 1;
          
END;
