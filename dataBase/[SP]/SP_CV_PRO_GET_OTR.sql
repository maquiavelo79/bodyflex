-- CALL SP_CUR_GET_OTR('9386703');
-- SELECT * FROM PROFESIONAL;
-- SELECT * FROM CURRICULUM;
-- SELECT * FROM EXPERIENCIA;
-- SELECT * FROM OTROS;
-- SELECT * FROM ESTUDIOS

DROP PROCEDURE IF EXISTS bodyflex.SP_CV_PRO_GET_OTR;
CREATE PROCEDURE bodyflex.`SP_CV_PRO_GET_OTR`(
                                                IN rut VARCHAR(20)
                                                , OUT codErr INTEGER
                                              )
BEGIN
DECLARE EXIT HANDLER FOR SQLEXCEPTION SET codErr=99;
SET codErr=0;
  IF EXISTS(SELECT * FROM OTROS WHERE PRUT = rut) THEN
      SELECT OTNOM
      , OTTIPO
      , DATE_FORMAT(OTFECHA,'%b %Y') AS OTFECHA
      , OTDES
      FROM OTROS
      WHERE PRUT = rut
      ORDER BY OTPOS ASC;
  ELSE
    SET codErr=98;
  END IF;
  
END




