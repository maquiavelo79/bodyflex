-- SP_CONSULTA_BODY_PORTAFOLIO
-- CALL SP_CONSULTA_BODY_PORTAFOLIO('13661574','5');
-- SELECT * FROM DETALLE_PORTAFOLIO

DROP PROCEDURE IF EXISTS bodyflex.SP_CONSULTA_BODY_PORTAFOLIO;
CREATE PROCEDURE bodyflex.`SP_CONSULTA_BODY_PORTAFOLIO`(
                                                        IN rut VARCHAR(20),
                                                        IN idHead VARCHAR(20)
                                                      )
BEGIN

    SELECT dp.DPOID
      , dp.DPOLABEL
      , dp.DPOCAPTION
      , dp.DPOIMG
      , dp.DPOTITULO
      , dp.DPOTIPO
      , dp.DPODISCIPLINA
      , dp.DPOCONTEXTO
      , dp.DPOPARRAFO
    FROM detalle_portafolio dp, portafolio p 
    WHERE p.POID=dp.POID AND p.POID=idhead AND p.PRUT=rut
    ORDER BY dp.DPOID DESC;
    
END;
