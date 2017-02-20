-- select * from PRODUCTO_CATEGORIA2


CALL SP_CP_ADM_CSU_CAT2_CMB(@codErr);
SELECT @codErr;

DROP PROCEDURE IF EXISTS bodyflex.SP_CP_ADM_CSU_CAT2_CMB;
CREATE PROCEDURE bodyflex.`SP_CP_ADM_CSU_CAT2_CMB`(IN cat1 INTEGER, OUT codErr INTEGER)
BEGIN
 
  DECLARE EXIT HANDLER FOR SQLEXCEPTION SET codErr=99;    
  SET codErr=0;
    IF EXISTS(SELECT * FROM PRODUCTO_CATEGORIA2 WHERE PCP1_ID=cat1)THEN
      SELECT PCP2_ID
      , PCP2_NOM
      FROM PRODUCTO_CATEGORIA2
      WHERE PCP1_ID=cat1
      ORDER BY PCP2_NOM ASC;
    ELSE
      SET codErr=98;
    END IF;  
  
END;
