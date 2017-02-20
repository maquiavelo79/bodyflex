-- CALL SP_CP_PRO_ESTUDIOS_CONSULTA('9386703');
-- SELECT * FROM ESTUDIOS
-- SELECT * FROM PROFESIONAL

DROP PROCEDURE IF EXISTS bodyflex.SP_CP_PRO_ESTUDIOS_CONSULTA;
CREATE PROCEDURE bodyflex.`SP_CP_PRO_ESTUDIOS_CONSULTA`(
                                                    IN rut VARCHAR(10)
                                                  , OUT codErr INTEGER
                                                 )
BEGIN
DECLARE EXIT HANDLER FOR SQLEXCEPTION SET codErr=99;
SET codErr=0;
  IF EXISTS(SELECT * FROM ESTUDIOS WHERE PRUT=rut) THEN
    SELECT ESID
    , ESNOM
    , ESTIPO
    , ESINST
    , ESNOMCON
    , ESFECHA
    , ESPOS
    , ESANOSEST
    , ESDES
    FROM ESTUDIOS
    WHERE PRUT=rut;
  ELSE
    SET codErr=98;
  END IF;
  
END




