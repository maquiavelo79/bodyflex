
-- CALL SP_CP_PRO_PORTAFOLIO_ELIMINA('26');
   
-- SELECT * FROM PORTAFOLIO;

DROP PROCEDURE IF EXISTS bodyflex.SP_CP_PRO_PORTAFOLIO_ELIMINA;
CREATE PROCEDURE bodyflex.`SP_CP_PRO_PORTAFOLIO_ELIMINA`(
                                                        IN id VARCHAR(20)
                                                        , OUT codErr INTEGER
                                                      )
BEGIN
DECLARE EXIT HANDLER FOR SQLEXCEPTION SET codErr=99;
SET codErr=0;
  -- IF EXISTS(SELECT * FROM PORTAFOLIO WHERE POID=id) THEN
      DELETE FROM PORTAFOLIO WHERE POID=id;    
      SELECT 1;
  -- ELSE
    -- SELECT 98;
  -- END IF;
  
END;
