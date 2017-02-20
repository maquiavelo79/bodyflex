-- CALL SP_ELIMINA_BODY_PORTAFOLIO(6,39);
-- SELECT * FROM DETALLE_PORTAFOLIO;

DROP PROCEDURE IF EXISTS bodyflex.SP_ELIMINA_BODY_PORTAFOLIO;
CREATE PROCEDURE bodyflex.`SP_ELIMINA_BODY_PORTAFOLIO`(
                                                      IN idHead VARCHAR(20),
                                                      IN idBody VARCHAR(20)
                                                    )
BEGIN
  
    delete from detalle_portafolio where POID=idHead AND DPOID=idBody;     
    SELECT 1;
          
END;
