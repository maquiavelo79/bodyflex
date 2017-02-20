
-- call SP_CP_ADM_ELI_SLI_CAT(2,3, @codErr);
-- select @codErr;

-- select * from catalogo_slider1;
-- select * from catalogo_slider2;

DROP PROCEDURE IF EXISTS bodyflex.SP_CP_ADM_ELI_SLI_CAT;
CREATE PROCEDURE bodyflex.`SP_CP_ADM_ELI_SLI_CAT`(
                                                    IN tipo VARCHAR(2)
                                                    , IN id VARCHAR(10)
                                                    , OUT codErr INTEGER
                                                  )
BEGIN
DECLARE EXIT HANDLER FOR SQLEXCEPTION SET codErr = 99;  
SET codErr=0;  
  
  CASE
    WHEN tipo=1 THEN
      DELETE FROM CATALOGO_SLIDER1 WHERE CS1ID=id;
    WHEN tipo=2 THEN
      DELETE FROM CATALOGO_SLIDER2 WHERE CS2ID=id;
    WHEN tipo=3 THEN
      DELETE FROM CATALOGO_SLIDER3 WHERE CS3ID=id;
    WHEN tipo=4 THEN
      DELETE FROM CATALOGO_SLIDER4 WHERE CS4ID=id;
    WHEN tipo=5 THEN
      DELETE FROM CATALOGO_SLIDER5 WHERE CS5ID=id;
    WHEN tipo=6 THEN
      DELETE FROM CATALOGO_SLIDER6 WHERE CS6ID=id;
    WHEN tipo=7 THEN
      DELETE FROM CATALOGO_SLIDER7 WHERE CS7ID=id;  
  END CASE;
  
END;
