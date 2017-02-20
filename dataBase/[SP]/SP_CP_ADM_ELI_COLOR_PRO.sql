

-- CALL SP_CP_ADM_ELI_COLOR_PRO('33',@codErr);
-- SELECT @codErr;
   
-- SELECT * FROM PRODUCTO_COLOR;
-- SELECT * FROM PROFESIONAL_CUENTAS
-- SELECT * FROM DIRECCION

DROP PROCEDURE IF EXISTS bodyflex.SP_CP_ADM_ELI_COLOR_PRO;
CREATE PROCEDURE bodyflex.`SP_CP_ADM_ELI_COLOR_PRO`(
                                                IN codCol VARCHAR(10)
                                                , OUT codErr INTEGER
                                                )
BEGIN
  
  DECLARE EXIT HANDLER FOR SQLEXCEPTION SET codErr=99;
  SET codErr=0;
  DELETE FROM PRODUCTO_COLOR WHERE PCOID=codCol;    
  SELECT 1;
          
END;
