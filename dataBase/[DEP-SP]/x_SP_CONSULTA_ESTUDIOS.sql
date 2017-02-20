-- CALL SP_CONSULTA_ESTUDIOS('13661574');
-- SELECT * FROM ESTUDIOS

DROP PROCEDURE IF EXISTS bodyflex.SP_CONSULTA_ESTUDIOS;
CREATE PROCEDURE bodyflex.`SP_CONSULTA_ESTUDIOS`(
                                                    IN rut VARCHAR(10)
                                                 )
BEGIN

  IF EXISTS(SELECT * FROM ESTUDIOS WHERE PRUT=rut) THEN
    SELECT ESID
    , ESNOM
    , ESTIPO
    , ESINST
    , ESNOMCON
    , ESFECHA
    , ESPOS
    , ESANOSEST
    FROM ESTUDIOS
    WHERE PRUT=rut;
  ELSE
    SELECT 'X';
  END IF;
  
END




