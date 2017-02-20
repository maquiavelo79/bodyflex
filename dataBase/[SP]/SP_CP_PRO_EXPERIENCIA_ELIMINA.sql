-- CALL SP_EXPERIENCIA_ELIMINA('25');
   
-- SELECT * FROM ESTUDIOS;

DROP PROCEDURE IF EXISTS bodyflex.SP_CP_PRO_EXPERIENCIA_ELIMINA;
CREATE PROCEDURE bodyflex.`SP_CP_PRO_EXPERIENCIA_ELIMINA`(
                                                          IN id VARCHAR(20)
                                                          , OUT codErr INTEGER
                                                          )
BEGIN
DECLARE EXIT HANDLER FOR SQLEXCEPTION SET codErr=99;
SET codErr=0;
  IF EXISTS(SELECT * FROM EXPERIENCIA WHERE EXID=id) THEN
    DELETE FROM EXPERIENCIA WHERE EXID=id;    
    SELECT 1;
  ELSE
    SELECT 0;
  END IF;
  
END;
