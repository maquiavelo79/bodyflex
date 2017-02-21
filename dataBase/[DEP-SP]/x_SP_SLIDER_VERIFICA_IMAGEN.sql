
-- CALL SP_SLIDER_VERIFICA_IMAGEN('2');


DROP PROCEDURE IF EXISTS bodyflex.SP_SLIDER_VERIFICA_IMAGEN;
CREATE PROCEDURE bodyflex.`SP_SLIDER_VERIFICA_IMAGEN`( IN id VARCHAR(50) )
BEGIN

  IF EXISTS(SELECT * FROM SLIDER WHERE SID=id AND SPOSIMG=1)THEN
    SET @NOMIMG = (SELECT SNOMIMG FROM SLIDER WHERE SID=id AND SPOSIMG=1);   
    SELECT 1, @NOMIMG;
  ELSE
    SELECT 2, '';
  END IF;
      
END;


-- SELECT * FROM SLIDER;