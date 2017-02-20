-- CALL SP_ELIMINA_BODY_SERVICIO(15,46);
-- SELECT * FROM DETALLE_SERVICIO;

DROP PROCEDURE IF EXISTS bodyflex.SP_ELIMINA_BODY_SERVICIO;
CREATE PROCEDURE bodyflex.`SP_ELIMINA_BODY_SERVICIO`(
                                                      IN idHead VARCHAR(20),
                                                      IN idBody VARCHAR(20)
                                                    )
BEGIN
  
    DELETE FROM DETALLE_SERVICIO WHERE DSID=idBody AND SEID=idHead;    
    SELECT 1;
          
END;