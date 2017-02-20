
-- CALL SP_CARRO_GET_DAT_PRO('9386703');

-- select * from profesional
-- select * from CARRO_DETALLE
-- select * from CARRO

DROP PROCEDURE IF EXISTS bodyflex.SP_CARRO_GET_DAT_PRO;
CREATE PROCEDURE bodyflex.`SP_CARRO_GET_DAT_PRO`( 
                                                  IN vRut VARCHAR(20)
                                                )
BEGIN

DECLARE EXIT HANDLER FOR SQLEXCEPTION SELECT '99';
  
  SELECT UPPER(CONCAT(PNOM1, ' ', PNOM2, ' ', PAPE1, ' ', PAPE2)) AS NOMBRE 
  FROM PROFESIONAL 
  WHERE PRUT=vRut;
      
END;
