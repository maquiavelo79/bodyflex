
-- call SP_CP_PRO_EXPERIENCIA_CONSULTA('13661574', @codErr);
-- select @codErr;

-- SELECT * FROM EXPERIENCIA

DROP PROCEDURE IF EXISTS bodyflex.SP_CP_PRO_EXPERIENCIA_CONSULTA;
CREATE PROCEDURE bodyflex.`SP_CP_PRO_EXPERIENCIA_CONSULTA`(
                                                      IN rut VARCHAR(20)
                                                      , OUT codErr INTEGER
                                                      )
BEGIN
DECLARE EXIT HANDLER FOR SQLEXCEPTION SET codErr=99;
SET codErr=0;
  IF EXISTS(SELECT * FROM EXPERIENCIA WHERE PRUT = rut) THEN
      SELECT EXID
      , EXCARGO
      , EXINS
      , DATE_FORMAT(EXFECDES,'%b %Y') AS EXFECDES
      , DATE_FORMAT(EXFECHAS,'%b %Y') AS EXFECHAS
      , EXPOS
      , EXDES
      , EXTA
      FROM EXPERIENCIA
      WHERE PRUT = rut
      ORDER BY EXPOS ASC;
  ELSE
    SET codErr=98;   
  END IF;
  
END;
