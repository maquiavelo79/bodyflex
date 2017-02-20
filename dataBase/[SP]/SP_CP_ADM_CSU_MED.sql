CALL SP_CP_ADM_CSU_MED('LETRA',@codErr);
SELECT @codErr;

-- CALL SP_CP_ADM_CSU_MED('NUMERO',@codErr);
-- SELECT @codErr;

DROP PROCEDURE IF EXISTS bodyflex.SP_CP_ADM_CSU_MED;
CREATE PROCEDURE bodyflex.`SP_CP_ADM_CSU_MED`(
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




