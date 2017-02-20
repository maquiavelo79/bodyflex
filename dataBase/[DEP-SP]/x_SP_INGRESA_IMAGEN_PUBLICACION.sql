
-- CALL SP_INGRESA_IMAGEN_PUBLICACION('41','CATEGORIA1','ETI1_CAT1');


DROP PROCEDURE IF EXISTS bodyflex.SP_INGRESA_IMAGEN_PUBLICACION;
CREATE PROCEDURE bodyflex.`SP_INGRESA_IMAGEN_PUBLICACION`( 
                                                                IN id VARCHAR(100)
                                                              , IN nombre VARCHAR(100)
                                                              , IN ruta VARCHAR(1000)
                                                              , IN tipo VARCHAR(50)
                                                            )
BEGIN

  UPDATE PUBLICACION SET PURUTIMG=ruta, PUNOMIMG=nombre, PUPOSIMG=1 WHERE PUID=id;
  SELECT 1;
      
END;
