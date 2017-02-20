
-- SELECT * FROM PROVINCIA
-- SELECT * FROM COMUNA

-- CALL SP_CP_ADM_DIR_CSU_COM('ARICA',@codErr);
-- SELECT @codErr;

DROP PROCEDURE IF EXISTS bodyflex.SP_CP_ADM_DIR_CSU_COM;
CREATE PROCEDURE bodyflex.`SP_CP_ADM_DIR_CSU_COM`(
                                                    IN PROVINCIA VARCHAR(50)
                                                    ,  OUT codErr INTEGER
                                                  )
BEGIN

DECLARE EXIT HANDLER FOR SQLEXCEPTION SET codErr=99;
SET codErr=0;
SET @codPro = (SELECT PROVCOD FROM PROVINCIA WHERE PROVNOM=PROVINCIA);
  IF EXISTS(SELECT * FROM PROVINCIA WHERE PROVCOD=@codPro) THEN
      SELECT CNOM
      FROM COMUNA
      WHERE PROVCOD=@codPro
      ORDER BY CNOM ASC;
  ELSE
    SET codErr=98;
  END IF;

END




