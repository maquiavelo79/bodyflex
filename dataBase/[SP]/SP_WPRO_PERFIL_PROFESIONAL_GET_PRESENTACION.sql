-- CALL SP_WPRO_PERFIL_PROFESIONAL_GET_PRESENTACION('9386703');
-- SELECT * FROM PROFESIONAL;
-- SELECT * FROM OTRO;

DROP PROCEDURE IF EXISTS bodyflex.SP_WPRO_PERFIL_PROFESIONAL_GET_PRESENTACION;
CREATE PROCEDURE bodyflex.`SP_WPRO_PERFIL_PROFESIONAL_GET_PRESENTACION`(
                                                                      IN rut VARCHAR(20)
                                                                      , OUT codErr INTEGER
                                                                    )
BEGIN
DECLARE EXIT HANDLER FOR SQLEXCEPTION SET codErr=99;
SET codErr=0;

  IF EXISTS(SELECT * FROM PROFESIONAL WHERE PRUT = rut) THEN
    SET @URL = (SELECT PARVAL FROM PARAMETROS WHERE PARNOM='DRIVE');
    SELECT P.PIDFOTO
    , P.PTXTOPRE
    , CONCAT(P.PNOM, ' ', P.PAPE) AS NOMBRE
    , @URL AS URL
    , P.PMAIL AS MAIL
    FROM PROFESIONAL P
    WHERE PRUT=rut;
  ELSE
    SET codErr=98;   
  END IF;
  
END

