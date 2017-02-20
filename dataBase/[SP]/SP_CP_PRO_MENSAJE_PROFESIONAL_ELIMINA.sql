-- CALL SP_CP_PRO_MENSAJE_PROFESIONAL_ELIMINA('10');
-- SELECT * FROM PROFESIONAL_MENSAJE

DROP PROCEDURE IF EXISTS bodyflex.SP_CP_PRO_MENSAJE_PROFESIONAL_ELIMINA;
CREATE PROCEDURE bodyflex.`SP_CP_PRO_MENSAJE_PROFESIONAL_ELIMINA`(
                                                      IN id VARCHAR(20)
                                                      , OUT codErr INTEGER
                                                    )
BEGIN

DECLARE EXIT HANDLER FOR SQLEXCEPTION SET codErr=99;
  SET codErr=0;  
  DELETE FROM PROFESIONAL_MENSAJE WHERE MID=id;    
  SELECT 1;

END;
