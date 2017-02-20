
-- CALL SP_WPRO_PROFESIONAL_GET_CANT_PRODUCTOS_CART('hf0o0qiidgrn92elaem4kn9cv6', @codErr);
-- SELECT @codErr;

DROP PROCEDURE IF EXISTS bodyflex.SP_WPRO_PROFESIONAL_GET_CANT_PRODUCTOS_CART;
CREATE PROCEDURE bodyflex.`SP_WPRO_PROFESIONAL_GET_CANT_PRODUCTOS_CART`(
                                                                IN se VARCHAR(50)
                                                                , OUT codErr INTEGER
                                                              )
BEGIN

DECLARE EXIT HANDLER FOR SQLEXCEPTION SET codErr=99;
SET codErr=0;

  IF EXISTS(
  
    SELECT *
    FROM CARRO C, CARRO_DETALLE CD 
    WHERE C.CAID=CD.CAID AND C.CASESION =se
  
  ) THEN
  
    SELECT SUM(CD.CAD_CAN) AS NUM_PRO
    FROM CARRO C, CARRO_DETALLE CD 
    WHERE C.CAID=CD.CAID AND C.CASESION =se;
  
  ELSE
    
    SELECT 0 AS NUM_PRO;
    
  END IF;
      
END








