-- CALL SP_ELIMINA_CURRICULUM_EXPERIENCIA('25');
   
-- SELECT * FROM ESTUDIOS;

DROP PROCEDURE IF EXISTS bodyflex.SP_ELIMINA_EXPERIENCIA;
CREATE PROCEDURE bodyflex.`SP_ELIMINA_EXPERIENCIA`(IN id VARCHAR(20))
BEGIN
  
  IF EXISTS(SELECT * FROM EXPERIENCIA WHERE EXID=id) THEN
    DELETE FROM EXPERIENCIA WHERE EXID=id;    
    SELECT 1;
  ELSE
    SELECT 0;
  END IF;
  
END;
