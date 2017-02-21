CALL SP_CAT_SLD_CSU_T3(@codErr);
SELECT @codErr;


DROP PROCEDURE IF EXISTS bodyflex.SP_CAT_SLD_CSU_T3;
CREATE PROCEDURE bodyflex.`SP_CAT_SLD_CSU_T3`(OUT codErr INTEGER)
BEGIN  
  DECLARE EXIT HANDLER FOR SQLEXCEPTION SET codErr=99;
  SET codErr=0;
  IF EXISTS(SELECT PARVAL FROM PARAMETROS WHERE PARNOM='DRIVE')THEN
    SET @URL_DRIVE=(SELECT PARVAL FROM PARAMETROS WHERE PARNOM='DRIVE');
    IF EXISTS(SELECT * FROM CATALOGO_SLIDER3)THEN 
      SELECT CS3ID
      , CS3TI
      , CS3GD
      , CS3URL
      , @URL_DRIVE 
      , CS3CO
      FROM CATALOGO_SLIDER3 
      ORDER BY CS3ID ASC;
    ELSE
      SET codErr=98;
    END IF;  
  ELSE
    SET codErr=97;
  END IF;
END




-- SELECT * FROM CATALOGO_SLIDER3