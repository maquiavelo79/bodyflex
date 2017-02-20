-- select * from estudios

DROP PROCEDURE IF EXISTS bodyflex.SP_ELIMINA_CURRICULUM;
CREATE PROCEDURE bodyflex.`SP_ELIMINA_CURRICULUM`(
                                                    IN id VARCHAR(20),
                                                    IN rut VARCHAR(20)
                                                  )
BEGIN
  
    DELETE FROM ESTUDIOS WHERE CURID=id;    
    DELETE FROM EXPERIENCIA WHERE CURID=id;     
    DELETE FROM OTRO WHERE CURID=id;     
    DELETE FROM CURRICULUM WHERE PRUT=rut AND CURID=id;     
    SELECT 1;
          
END;


