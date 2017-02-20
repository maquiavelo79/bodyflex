-- CALL SP_CP_PRO_OTROS_ELIMINA('25');
   
-- SELECT * FROM ESTUDIOS;

DROP PROCEDURE IF EXISTS bodyflex.SP_CP_PRO_OTROS_ELIMINA;
CREATE PROCEDURE bodyflex.`SP_CP_PRO_OTROS_ELIMINA`(
                                                IN id VARCHAR(20)
                                                , OUT codErr INTEGER
                                                )
BEGIN

DECLARE EXIT HANDLER FOR SQLEXCEPTION SET codErr=99;
SET codErr=0;  
  
    DELETE FROM OTROS WHERE OTID=id;    
    SELECT 1;
  
  
END;
