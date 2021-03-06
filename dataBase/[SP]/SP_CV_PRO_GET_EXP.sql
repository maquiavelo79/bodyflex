-- CALL SP_CV_PRO_GET_EXP('9386703');
-- SELECT * FROM PROFESIONAL;
-- SELECT * FROM CURRICULUM;
-- SELECT * FROM EXPERIENCIA;

DROP PROCEDURE IF EXISTS bodyflex.SP_CV_PRO_GET_EXP;
CREATE PROCEDURE bodyflex.`SP_CV_PRO_GET_EXP`(
                                      IN rut VARCHAR(20)
                                      , OUT codErr INTEGER
                                    )
BEGIN
DECLARE EXIT HANDLER FOR SQLEXCEPTION SET codErr=99;
SET codErr=0;
  IF EXISTS(SELECT * FROM EXPERIENCIA WHERE PRUT = rut) THEN
      SELECT EXCARGO
      , EXINS
      , DATE_FORMAT(EXFECDES,'%b %Y') AS EXFECDES
      , DATE_FORMAT(EXFECHAS,'%b %Y') AS EXFECHAS
      , EXDES
      , EXTA
      FROM EXPERIENCIA
      WHERE PRUT = rut
      ORDER BY EXPOS ASC;
  ELSE
    SET codErr=98;
  END IF;
  
END




