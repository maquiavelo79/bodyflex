-- CALL SP_CV_PRO_GET_EST('9386703');
-- SELECT * FROM PROFESIONAL;
-- SELECT * FROM CURRICULUM;
-- SELECT * FROM EXPERIENCIA;

-- SELECT * FROM ESTUDIOS

DROP PROCEDURE IF EXISTS bodyflex.SP_CV_PRO_GET_EST;
CREATE PROCEDURE bodyflex.`SP_CV_PRO_GET_EST`(
                                  IN rut VARCHAR(20)
                                  , OUT codErr INTEGER
                                )
BEGIN
DECLARE EXIT HANDLER FOR SQLEXCEPTION SET codErr=99;
SET codErr=0;
  IF EXISTS(SELECT * FROM ESTUDIOS WHERE PRUT = rut) THEN
      SELECT ESNOM
      , ESTIPO
      , ESINST
      , ESNOMCON
      , DATE_FORMAT(ESFECHA,'%b %Y') AS ESFECHA
      , ESANOSEST
      , ESDES
      FROM ESTUDIOS
      WHERE PRUT = rut
      ORDER BY ESPOS ASC;
  ELSE
    SET codErr=98;    
  END IF;
  
END



