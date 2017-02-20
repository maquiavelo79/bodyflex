
-- CALL SP_CP_PRO_OTROS_CONSULTA('9386703', @codErr);
-- SELECT @codErr;

-- SELECT * FROM PROFESIONAL;
-- SELECT * FROM OTRO;

DROP PROCEDURE IF EXISTS bodyflex.SP_CP_PRO_OTROS_CONSULTA;
CREATE PROCEDURE bodyflex.`SP_CP_PRO_OTROS_CONSULTA`(
                                            IN rut VARCHAR(20)
                                            , OUT codErr INTEGER
                                          )
BEGIN
DECLARE EXIT HANDLER FOR SQLEXCEPTION SET codErr=99;
SET codErr=0;
  IF EXISTS(SELECT * FROM OTROS WHERE PRUT = rut) THEN
    SELECT OTID
    , OTNOM
    , OTTIPO
    , OTDES
    , DATE_FORMAT(OTFECHA,'%d-%m-%Y') as OTFECHA
    , OTPOS
    FROM OTROS
    WHERE PRUT=rut
    ORDER BY OTID DESC;
  ELSE
    SET codErr=98;    
  END IF;
  
END




