
-- select * from publicacion_referencia

-- CALL SP_PUBLICACION_CONSULTA_REFERENCIAS_ASOCIADAS(9);

DROP PROCEDURE IF EXISTS bodyflex.SP_CP_ADM_PUBLICACION_CONSULTA_REFERENCIAS_ASOCIADAS;
CREATE PROCEDURE bodyflex.`SP_CP_ADM_PUBLICACION_CONSULTA_REFERENCIAS_ASOCIADAS`(
                                                                      IN idPub VARCHAR(20)
                                                                      , OUT codErr INTEGER
                                                                    )
BEGIN

DECLARE EXIT HANDLER FOR SQLEXCEPTION SET codErr=99;
SET codErr=0;
    IF EXISTS(SELECT * FROM PUBLICACION_REFERENCIA P WHERE P.PUID=idPub) THEN    
      SELECT P.PUID AS PUID
      , (SELECT R.RETIPO FROM PUBLICACION_LIST_REFERENCIA R WHERE R.REID=P.REID) AS RETI
      , P.PRID AS PRID
      , P.PRDES AS PRDE
      , P.PRNOM AS PRNO
      FROM PUBLICACION_REFERENCIA P WHERE P.PUID=idPub
      ORDER BY P.PRID ASC;
    ELSE
      SET codErr=98;
    END IF;
END;
