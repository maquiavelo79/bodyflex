
-- CALL SP_INGRESA_IMAGEN_PRESENTACION('41','CATEGORIA1','ETI1_CAT1');
-- SELECT * FROM SLIDER

DROP PROCEDURE IF EXISTS bodyflex.SP_INGRESA_IMAGEN_PRESENTACION;
CREATE PROCEDURE bodyflex.`SP_INGRESA_IMAGEN_PRESENTACION`( 
                                                        IN rut VARCHAR(10)
                                                      , IN nombre VARCHAR(100)
                                                    )
BEGIN

  UPDATE PROFESIONAL SET PFOTOPRE=nombre WHERE PRUT=rut;
  SELECT 1;
      
END;

-- SELECT * FROM PROFESIONAL