-- CALL SP_ESTUDIOS_ELIMINA('25');
   
-- SELECT * FROM ESTUDIOS;

DROP PROCEDURE IF EXISTS bodyflex.SP_ESTUDIOS_ELIMINA;
CREATE PROCEDURE bodyflex.`SP_ESTUDIOS_ELIMINA`(IN id VARCHAR(20))
BEGIN
  
    DELETE FROM ESTUDIOS WHERE ESID=id;    
    SELECT 1;
          
END;
