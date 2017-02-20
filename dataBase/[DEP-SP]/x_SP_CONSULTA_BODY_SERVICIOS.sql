-- SP_CONSULTA_BODY_SERVICIOS
-- CALL SP_CONSULTA_BODY_SERVICIOS('13661574','15');
-- SELECT * FROM DETALLE_SERVICIO

DROP PROCEDURE IF EXISTS bodyflex.SP_CONSULTA_BODY_SERVICIOS;
CREATE PROCEDURE bodyflex.`SP_CONSULTA_BODY_SERVICIOS`(
                                                        IN rut VARCHAR(20),
                                                        IN idHead VARCHAR(20)
                                                      )
BEGIN

    SELECT DSID, DSIMG, DSTIT, DSPAR  
    FROM SERVICIO S, DETALLE_SERVICIO DS
    WHERE S.PRUT=rut AND DS.SEID=idHead
    ORDER BY DSID DESC;
      
END;
