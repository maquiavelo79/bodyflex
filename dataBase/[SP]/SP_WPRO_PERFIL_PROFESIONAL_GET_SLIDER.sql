-- CALL SP_WPRO_PERFIL_PROFESIONAL_GET_SLIDER('9386703');
-- SELECT * FROM PROFESIONAL;
-- SELECT * FROM OTRO;

DROP PROCEDURE IF EXISTS bodyflex.SP_WPRO_PERFIL_PROFESIONAL_GET_SLIDER;
CREATE PROCEDURE bodyflex.`SP_WPRO_PERFIL_PROFESIONAL_GET_SLIDER`(
                                                              IN rut VARCHAR(20)
                                                              , OUT codErr INTEGER
                                                            )
BEGIN
DECLARE EXIT HANDLER FOR SQLEXCEPTION SET codErr=99;
SET codErr=0;
  IF EXISTS(SELECT * FROM SLIDER WHERE PRUT = rut) THEN
    
    SET @URL = (SELECT PARVAL FROM PARAMETROS WHERE PARNOM='DRIVE');
    
    SELECT STIT1
    , SDES
    , SDFL
    , @URL AS URL
    FROM SLIDER
    WHERE PRUT=rut
    ORDER BY SPOS ASC;
  ELSE
    SET codErr=98;
  END IF;
  
END




