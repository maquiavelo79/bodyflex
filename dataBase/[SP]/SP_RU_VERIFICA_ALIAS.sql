
-- CALL SP_RU_VERIFICA_ALIAS('SOFOCLES', @codErr);
-- SELECT @codErr;

DROP PROCEDURE IF EXISTS bodyflex.SP_RU_VERIFICA_ALIAS;
CREATE PROCEDURE bodyflex.`SP_RU_VERIFICA_ALIAS`( 
                                                  IN alias VARCHAR(100) 
                                                  , OUT codErr INTEGER
                                                )
BEGIN
DECLARE EXIT HANDLER FOR SQLEXCEPTION SET codErr=99;
SET codErr=0;
  -- [RU: REGISTRO DE USUARIO]
  IF EXISTS(SELECT ALIAS FROM USUARIO WHERE UALIAS=upper(alias)) THEN
    SELECT 1 AS RSP;  -- LO ENCONTRO
  ELSE
    SELECT 2 AS RSP;  -- NO LO ENCONTRO
  END IF;  
    
END;
