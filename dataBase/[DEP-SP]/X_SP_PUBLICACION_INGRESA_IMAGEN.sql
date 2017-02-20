
-- CALL SP_PUBLICACION_INGRESA_IMAGEN('41','CATEGORIA1','ETI1_CAT1');


DROP PROCEDURE IF EXISTS bodyflex.SP_PUBLICACION_INGRESA_IMAGEN;
CREATE PROCEDURE bodyflex.`SP_PUBLICACION_INGRESA_IMAGEN`( 
                                                                IN id VARCHAR(100)
                                                              , IN nombre VARCHAR(100)
                                                              , IN ruta VARCHAR(1000)
                                                              , IN tipo VARCHAR(50)
                                                            )
BEGIN
  DECLARE EXIT HANDLER FOR SQLEXCEPTION SELECT '99';

  UPDATE PUBLICACION SET PURUTIMG=ruta, PUNOMIMG=nombre, PUPOSIMG=1 WHERE PUID=id;
  SELECT 1;
      
END;
