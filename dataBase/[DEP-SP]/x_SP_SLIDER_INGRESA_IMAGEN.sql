
-- CALL SP_SLIDER_INGRESA_IMAGEN('41','CATEGORIA1','ETI1_CAT1');
-- CALL SP_SLIDER_INGRESA_IMAGEN('13','imagen1.jpg');
-- CALL SP_SLIDER_INGRESA_IMAGEN('','imagen1.jpg');
-- SELECT * FROM SLIDER

DROP PROCEDURE IF EXISTS bodyflex.SP_SLIDER_INGRESA_IMAGEN;
CREATE PROCEDURE bodyflex.`SP_SLIDER_INGRESA_IMAGEN`( 
                                                        IN id VARCHAR(100)
                                                      , IN nombre VARCHAR(100)
                                                    )
BEGIN

  IF EXISTS(SELECT * FROM SLIDER WHERE SID=id) then
    UPDATE SLIDER SET SNOMIMG=nombre, SPOSIMG=1 WHERE SID=id;
    SELECT 1;
  ELSE
    SELECT 0;
  END IF;
      
END;
