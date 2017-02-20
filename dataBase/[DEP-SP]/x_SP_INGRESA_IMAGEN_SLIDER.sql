
-- CALL SP_INGRESA_IMAGEN_SLIDER('41','CATEGORIA1','ETI1_CAT1');
-- CALL SP_INGRESA_IMAGEN_SLIDER('13','imagen1.jpg');
-- CALL SP_INGRESA_IMAGEN_SLIDER('','imagen1.jpg');
-- SELECT * FROM SLIDER

DROP PROCEDURE IF EXISTS bodyflex.SP_INGRESA_IMAGEN_SLIDER;
CREATE PROCEDURE bodyflex.`SP_INGRESA_IMAGEN_SLIDER`( 
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
