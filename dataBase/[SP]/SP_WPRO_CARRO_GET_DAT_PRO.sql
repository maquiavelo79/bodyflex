
-- CALL SP_WPRO_CARRO_GET_DAT_PRO('9386703',@codErr);
-- SELECT @codErr;

-- select * from profesional
-- select * from CARRO_DETALLE
-- select * from CARRO

DROP PROCEDURE IF EXISTS bodyflex.SP_WPRO_CARRO_GET_DAT_PRO;
CREATE PROCEDURE bodyflex.`SP_WPRO_CARRO_GET_DAT_PRO`( 
                                                  IN vRut VARCHAR(20)
                                                  , OUT codErr INTEGER
                                                )
BEGIN

DECLARE EXIT HANDLER FOR SQLEXCEPTION SET codErr=99;
  SET codErr=0;
  SELECT UPPER(CONCAT(PNOM, ' ', PAPE)) AS NOMBRE 
  FROM PROFESIONAL 
  WHERE PRUT=vRut;
      
END;
