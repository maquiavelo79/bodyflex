

-- CALL SP_CP_PRO_PUBLICACION_CONSULTA_CONTENIDO(9);

DROP PROCEDURE IF EXISTS bodyflex.SP_CP_ADM_PUBLICACION_CONSULTA_CONTENIDO;
CREATE PROCEDURE bodyflex.`SP_CP_ADM_PUBLICACION_CONSULTA_CONTENIDO`(
                                                            IN idPub VARCHAR(20)
                                                            , OUT codErr INTEGER
                                                          )
BEGIN

DECLARE EXIT HANDLER FOR SQLEXCEPTION SET codErr=99;
SET codErr=0;
    IF EXISTS(SELECT * FROM PUBLICACION_CONTENIDO P WHERE P.PUID=idPub) THEN    
      SELECT PC.idCont
      , PC.tipCont
      , PC.urlCont
      FROM PUBLICACION_CONTENIDO PC WHERE PC.PUID=idPub
      ORDER BY PC.idCont ASC;
    ELSE
      SET codErr=98;
    END IF;
END;
