
-- CALL SP_ELIMINA_REFERENCIA_ASOCIADA(33,8);

DROP PROCEDURE IF EXISTS bodyflex.SP_ELIMINA_REFERENCIA_ASOCIADA;
CREATE PROCEDURE bodyflex.`SP_ELIMINA_REFERENCIA_ASOCIADA`(
                                                            IN puId INTEGER,
                                                            IN reId INTEGER
                                                          )
BEGIN

    DELETE FROM PUBLICACION_REFERENCIA 
    WHERE PUID=puId AND 
          PRID=reId;
    SELECT 1;      
  
END;

-- SELECT * FROM PUBLICACION_REFERENCIA WHERE PUID=33;

