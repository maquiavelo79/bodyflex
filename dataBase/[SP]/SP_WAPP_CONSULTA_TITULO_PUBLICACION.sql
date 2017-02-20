-- call SP_WAPP_CONSULTA_TITULO_PUBLICACION('A', @codErr);
-- SELECT @codErr;

-- call SP_WAPP_CONSULTA_TITULO_PUBLICACION('A');
-- call SP_WAPP_CONSULTA_TITULO_PUBLICACION('H');
-- call SP_WAPP_CONSULTA_TITULO_PUBLICACION('R');
-- call SP_WAPP_CONSULTA_TITULO_PUBLICACION('T');
-- call SP_WAPP_CONSULTA_TITULO_PUBLICACION('W');
-- call SP_WAPP_CONSULTA_TITULO_PUBLICACION('Y');

DROP PROCEDURE IF EXISTS delta.SP_WAPP_CONSULTA_TITULO_PUBLICACION;
CREATE PROCEDURE delta.`SP_WAPP_CONSULTA_TITULO_PUBLICACION`(
                                                                  IN keyWord VARCHAR(1000)
                                                                  , OUT codErr INTEGER
                                                                )
BEGIN

-- DECLARE EXIT HANDLER FOR SQLEXCEPTION SET codErr=99;
SET codErr=0;
  IF EXISTS(SELECT * FROM PUBLICACION P WHERE P.PUEST='PUBLICADA' AND P.PUTITULO LIKE CONCAT('%',keyWord,'%')) THEN
      SELECT PUTITULO
      , PUID
      FROM PUBLICACION P
      WHERE P.PUEST='PUBLICADA'
      AND P.PUTITULO LIKE CONCAT('%',keyWord,'%')  
      ORDER BY P.PUTITULO;
  ELSE
    -- SELECT 98, keyWord;
    SET codErr=98;
  END IF;
  
END



-- select * from publicacion
