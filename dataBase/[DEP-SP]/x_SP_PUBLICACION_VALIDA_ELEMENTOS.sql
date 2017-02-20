
-- CALL SP_PUBLICACION_VALIDA_ELEMENTOS(109);
-- SELECT * FROM PUBLICACION
-- SELECT PUPOSIMG FROM PUBLICACION WHERE PUID=109

DROP PROCEDURE IF EXISTS bodyflex.SP_PUBLICACION_VALIDA_ELEMENTOS;
CREATE PROCEDURE bodyflex.`SP_PUBLICACION_VALIDA_ELEMENTOS`(
                                                              IN idPu VARCHAR(20)
                                                            )
BEGIN

DECLARE EXIT HANDLER FOR SQLEXCEPTION SELECT '99';

  -- 5 -- SIN ETIQUETAS NI REFERENCIAS
  -- 6 -- SIN ETIQUETAS
  -- 7 -- SIN REFERENCIAS
  -- 8 -- POSEE ETIQUETAS Y REFERENCIAS
  -- 4 -- SIN IMAGENES ASOCIADAS
  
  SET @REF=(SELECT COUNT(*) FROM PUBLICACION_REFERENCIA WHERE PUID=idPu);
  SET @ETI=(SELECT COUNT(*) FROM PUBLICACION_ETIQUETA WHERE PUID=idPu);
  SET @IMG=(SELECT PUPOSIMG FROM PUBLICACION WHERE PUID=idPu);
    
  CASE
    WHEN @REF=0 THEN 
      IF(@ETI=0)THEN
        SET @RES= 5;
      END IF;
      IF(@ETI>0)THEN
        SET @RES= 7;
      END IF;
    WHEN @REF>0 THEN 
      IF(@ETI=0)THEN
        SET @RES= 6;
      END IF;
      IF(@ETI>0)THEN
        SET @RES= 8;
      END IF;
  END CASE;
  
  IF(@RES=8)THEN
    IF(ISNULL(@IMG) OR @IMG=0)THEN
      SET @RES= 4;
    END IF;
  END IF;
  
  SELECT @RES;
  
END;
