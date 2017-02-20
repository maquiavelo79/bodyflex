
-- CALL SP_CP_ADM_PUBLICACION_ELIMINA_REFERENCIA_ASOCIADA(3,2,@codErr);
-- SELECT @codErr;

DROP PROCEDURE IF EXISTS bodyflex.SP_CP_ADM_PUBLICACION_ELIMINA_REFERENCIA_ASOCIADA;
CREATE PROCEDURE bodyflex.`SP_CP_ADM_PUBLICACION_ELIMINA_REFERENCIA_ASOCIADA`(
                                                            IN puId VARCHAR(20),
                                                            IN reId VARCHAR(20),
                                                            OUT codErr INTEGER
                                                          )
BEGIN
DECLARE EXIT HANDLER FOR SQLEXCEPTION SET codErr=99;
SET codErr=0;

    DELETE FROM PUBLICACION_REFERENCIA WHERE PUID=puId AND PRID=reId;
    SELECT 1;      
  
END;

-- SELECT * FROM PUBLICACION_REFERENCIA WHERE PUID=33;

