-- CALL SP_MENSAJE_PROFESIONAL_ELIMINA('10');
-- SELECT * FROM PROFESIONAL_MENSAJE

DROP PROCEDURE IF EXISTS bodyflex.SP_MENSAJE_PROFESIONAL_ELIMINA;
CREATE PROCEDURE bodyflex.`SP_MENSAJE_PROFESIONAL_ELIMINA`(IN id VARCHAR(20))
BEGIN

DECLARE EXIT HANDLER FOR SQLEXCEPTION SELECT '99';
    
  DELETE FROM PROFESIONAL_MENSAJE WHERE MID=id;    
  SELECT 1;

END;
