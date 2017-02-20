
-- CALL SP_CP_PRO_SLIDER_ELIMINA('12');
   
-- SELECT * FROM SLIDER;

DROP PROCEDURE IF EXISTS bodyflex.SP_CP_PRO_SLIDER_ELIMINA;
CREATE PROCEDURE bodyflex.`SP_CP_PRO_SLIDER_ELIMINA`(
                                              IN id VARCHAR(20)
                                              , OUT codErr INTEGER
                                              )
BEGIN
  
DECLARE EXIT HANDLER FOR SQLEXCEPTION SET codErr=99;
SET codErr=0;
  IF EXISTS(SELECT * FROM slider WHERE SID=id) THEN
    DELETE FROM slider WHERE SID=id;    
    SELECT 1;
  ELSE
    SET codErr=98;
  END IF;
  
END;
