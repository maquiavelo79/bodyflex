CALL SP_CP_ADM_CSU_COL_PRO('LETRA',@codErr);
SELECT @codErr;

CALL SP_CP_ADM_CSU_COL_PRO('NUMERO',@codErr);
SELECT @codErr;

DROP PROCEDURE IF EXISTS bodyflex.SP_CP_ADM_CSU_COL_PRO;
CREATE PROCEDURE bodyflex.`SP_CP_ADM_CSU_COL_PRO`(
                                                IN medida VARCHAR(20)
                                                , OUT codErr INTEGER
                                              ) 
BEGIN
  
  DECLARE EXIT HANDLER FOR SQLEXCEPTION SET codErr=99;
  SET codErr=0;
  
  IF EXISTS(SELECT * FROM MEDIDA WHERE MEDTI=medida ) THEN
    SELECT MEDID, MEDVA FROM MEDIDA WHERE MEDTI=medida ORDER BY MEDID ASC;  
  ELSE
    SET codErr=98;
  END IF;
  
END




