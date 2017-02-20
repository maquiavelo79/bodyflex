
-- CALL SP_PRESENTACION_INGRESA_IMAGEN('41','CATEGORIA1','ETI1_CAT1');
-- SELECT * FROM SLIDER

DROP PROCEDURE IF EXISTS bodyflex.SP_PRESENTACION_INGRESA_IMAGEN;
CREATE PROCEDURE bodyflex.`SP_PRESENTACION_INGRESA_IMAGEN`( 
                                                        IN rut VARCHAR(10)
                                                      , IN nombre VARCHAR(100)
                                                    )
BEGIN

  UPDATE PROFESIONAL SET PFOTOPRE=nombre WHERE PRUT=rut;
  SELECT 1;
      
END;

-- SELECT * FROM PROFESIONAL