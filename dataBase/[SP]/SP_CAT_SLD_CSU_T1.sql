CALL SP_CAT_SLD_CSU_T1(@codErr);
SELECT @codErr;


DROP PROCEDURE IF EXISTS bodyflex.SP_CAT_SLD_CSU_T1;
CREATE PROCEDURE bodyflex.`SP_CAT_SLD_CSU_T1`(OUT codErr INTEGER)
BEGIN
  
  DECLARE EXIT HANDLER FOR SQLEXCEPTION SET codErr=99;
  SET codErr=0;
  
  IF EXISTS(SELECT PARVAL FROM PARAMETROS WHERE PARNOM='DRIVE')THEN
    SET @URL_DRIVE=(SELECT PARVAL FROM PARAMETROS WHERE PARNOM='DRIVE');
    
    IF EXISTS(SELECT * FROM CATALOGO_SLIDER1) THEN 
      SELECT CS1ID
      , CS1TI
      , CS1DE
      , CS1GD
      , CS1URL
      , @URL_DRIVE
      , CS1CO
      FROM CATALOGO_SLIDER1 
      ORDER BY CS1ID ASC; 
    ELSE
      SET codErr=98;
    END IF;
  ELSE
    SET codErr=97;
  END IF;
  
END




