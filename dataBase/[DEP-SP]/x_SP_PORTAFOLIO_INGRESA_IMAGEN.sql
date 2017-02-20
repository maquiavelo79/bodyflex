
-- CALL SP_INGRESA_IMAGEN_SLIDER('41','CATEGORIA1','ETI1_CAT1');
-- CALL SP_INGRESA_IMAGEN_SLIDER('13','imagen1.jpg');
-- CALL SP_INGRESA_IMAGEN_SLIDER('','imagen1.jpg');
-- SELECT * FROM SLIDER

DROP PROCEDURE IF EXISTS bodyflex.SP_PORTAFOLIO_INGRESA_IMAGEN;
CREATE PROCEDURE bodyflex.`SP_PORTAFOLIO_INGRESA_IMAGEN`( 
                                                        IN id VARCHAR(100)
                                                      , IN nombre VARCHAR(100)
                                                    )
BEGIN

  IF EXISTS(SELECT * FROM PORTAFOLIO WHERE POID=id) then
    UPDATE PORTAFOLIO SET PONOMIMG=nombre WHERE POID=id;
    SELECT 1;
  ELSE
    SELECT 0;
  END IF;
      
END;
