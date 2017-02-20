
CALL SP_CP_PRO_PUBLICACION_ELIMINA(6, @codErr);
SELECT @codErr;
   
-- SELECT * FROM PUBLICACION;

DROP PROCEDURE IF EXISTS delta.SP_CP_PRO_PUBLICACION_ELIMINA;
CREATE PROCEDURE delta.`SP_CP_PRO_PUBLICACION_ELIMINA`(
                                                        IN id VARCHAR(20)
                                                        , OUT codErr INTEGER
                                                    )
BEGIN
  
  DECLARE EXIT HANDLER FOR SQLEXCEPTION SET codErr=99;
  SET codErr=0;
    
    IF EXISTS(SELECT * FROM PUBLICACION_COMENTARIO WHERE PUID=id) THEN
      DELETE FROM PUBLICACION_COMENTARIO WHERE PUID=id;
    END IF;
    IF EXISTS(SELECT * FROM PUBLICACION_VOTACION WHERE PUID=id)THEN
      DELETE FROM PUBLICACION_VOTACION WHERE PUID=id;
    END IF;
    IF EXISTS(SELECT * FROM PUBLICACION_DENUNCIA WHERE PUID=id)THEN 
      DELETE FROM PUBLICACION_DENUNCIA WHERE PUID=id;
    END IF;  
    IF EXISTS(SELECT * FROM PUBLICACION_VISITAS WHERE PUID=id)THEN
      DELETE FROM PUBLICACION_VISITAS WHERE PUID=id;
    END IF;
    IF EXISTS(SELECT * FROM PUBLICACION_CONTENIDO WHERE PUID=id)THEN
      DELETE FROM PUBLICACION_CONTENIDO WHERE PUID=id;
    END IF;
    IF EXISTS(SELECT * FROM PUBLICACION_ETIQUETA WHERE PUID=id)THEN
      DELETE FROM PUBLICACION_ETIQUETA WHERE PUID=id;
    END IF;
    IF EXISTS(SELECT * FROM PUBLICACION_REFERENCIA WHERE PUID=id)THEN
      DELETE FROM PUBLICACION_REFERENCIA WHERE PUID=id;
    END IF;
    IF EXISTS(SELECT * FROM PUBLICACION_PROFESIONAL WHERE PUID=id)THEN
      DELETE FROM PUBLICACION_PROFESIONAL WHERE PUID=id;
    END IF;
    IF EXISTS(SELECT * FROM PUBLICACION_ADMIN WHERE PUID=id)THEN
      DELETE FROM PUBLICACION_ADMIN WHERE PUID=id;
    END IF;
    IF EXISTS(SELECT * FROM PUBLICACION WHERE PUID=id)THEN
      DELETE FROM PUBLICACION WHERE PUID=id;
    END IF;
    SELECT 1;
           
END;
