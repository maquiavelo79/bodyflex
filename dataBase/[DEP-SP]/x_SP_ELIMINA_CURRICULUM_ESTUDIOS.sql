-- CALL SP_ELIMINA_CURRICULUM_ESTUDIOS('25');
   
-- SELECT * FROM ESTUDIOS;

DROP PROCEDURE IF EXISTS bodyflex.SP_ELIMINA_CURRICULUM_ESTUDIOS;
CREATE PROCEDURE bodyflex.`SP_ELIMINA_CURRICULUM_ESTUDIOS`(IN id VARCHAR(20))
BEGIN
  
    DELETE FROM ESTUDIOS WHERE ESID=id;    
    SELECT 1;
          
END;