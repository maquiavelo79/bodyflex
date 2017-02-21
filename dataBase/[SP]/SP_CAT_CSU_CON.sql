CALL SP_CAT_CSU_CON(@codErr);
SELECT @codErr;

DROP PROCEDURE IF EXISTS bodyflex.SP_CAT_CSU_CON;
CREATE PROCEDURE bodyflex.`SP_CAT_CSU_CON`(OUT codErr INTEGER)
BEGIN
  DECLARE EXIT HANDLER FOR SQLEXCEPTION SET codErr=99;
  SET codErr=0;
  IF EXISTS(SELECT PARVAL FROM PARAMETROS WHERE PARNOM='CONTACTO')THEN
    SELECT PARVAL FROM PARAMETROS WHERE PARNOM='CONTACTO';
  ELSE
    SET codErr=98;
  END IF;
END



