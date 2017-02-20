
-- SELECT * FROM PROVINCIA

-- CALL SP_CP_PRO_DIR_CSU_PROV('TARAPACA',@codErr);
-- SELECT @codErr;

DROP PROCEDURE IF EXISTS bodyflex.SP_CP_PRO_DIR_CSU_PROV;
CREATE PROCEDURE bodyflex.`SP_CP_PRO_DIR_CSU_PROV`(
                                                    IN REGION VARCHAR(50)
                                                    ,  OUT codErr INTEGER
                                                  )
BEGIN

DECLARE EXIT HANDLER FOR SQLEXCEPTION SET codErr=99;
SET codErr=0;
SET @codReg = (SELECT RCOD FROM REGION WHERE RNOM=REGION);
  IF EXISTS(SELECT * FROM PROVINCIA) THEN
      SELECT PROVNOM
      FROM PROVINCIA
      WHERE RCOD=@codReg
      ORDER BY PROVNOM ASC;
  ELSE
    SET codErr=98;
  END IF;

END




