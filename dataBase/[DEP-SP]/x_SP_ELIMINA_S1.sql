
-- CALL SP_ELIMINA_S1(10);
   
-- SELECT * FROM SECCION1;

DROP PROCEDURE IF EXISTS bodyflex.SP_ELIMINA_S1;
CREATE PROCEDURE bodyflex.`SP_ELIMINA_S1`(IN id INTEGER)
BEGIN
  
    DELETE 
    FROM SECCION1
    WHERE IDS1=id;    
    SELECT 1;
          
END;
