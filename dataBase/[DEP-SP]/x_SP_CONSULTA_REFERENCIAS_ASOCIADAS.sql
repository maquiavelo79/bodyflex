DROP PROCEDURE IF EXISTS bodyflex.SP_CONSULTA_REFERENCIAS_ASOCIADAS;
CREATE PROCEDURE bodyflex.`SP_CONSULTA_REFERENCIAS_ASOCIADAS`(IN idPub INTEGER)
BEGIN

    SELECT P.PUID AS PUID
    , (SELECT R.RETIPO FROM REFERENCIA R WHERE R.REID=P.REID) AS RETI
    , P.PRID AS PRID
    , P.PRDES AS PRDE
    , P.PRNOM AS PRNO
    FROM PUBLICACION_REFERENCIA P WHERE P.PUID=idPub
    ORDER BY P.PRID ASC;
  
END;
