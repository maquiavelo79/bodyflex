CALL SP_CAT_SLD_CSU_T7(@codErr);
SELECT @codErr;


DROP PROCEDURE IF EXISTS bodyflex.SP_CAT_SLD_CSU_T7;
CREATE PROCEDURE bodyflex.`SP_CAT_SLD_CSU_T7`(OUT codErr INTEGER)
BEGIN
  
  DECLARE EXIT HANDLER FOR SQLEXCEPTION SET codErr=99;
  SET codErr=0;
  
  IF EXISTS(SELECT PARVAL FROM PARAMETROS WHERE PARNOM='DRIVE')THEN
    SET @URL_DRIVE=(SELECT PARVAL FROM PARAMETROS WHERE PARNOM='DRIVE');
    IF EXISTS(SELECT * FROM CATALOGO_SLIDER7)THEN 
      SELECT CS7ID
      , CS7TI
      , CS7B1
      , CS7DE
      , CS7GD
      , CS7URL
      , @URL_DRIVE
      , CS7PO
      FROM CATALOGO_SLIDER7 
      ORDER BY CS7ID ASC;
    ELSE
      SET codErr=98;
    END IF;
  ELSE
    SET codErr=97;
  END IF;
END




