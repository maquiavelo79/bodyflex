-- CALL SP_WPRO_PERFIL_PROFESIONAL_GET_RSM_CURRICULUM(13661574, @codErr);
-- SELECT @codErr;

-- SELECT * FROM PROFESIONAL;
-- SELECT * FROM ESTUDIOS;

DROP PROCEDURE IF EXISTS bodyflex.SP_WPRO_PERFIL_PROFESIONAL_GET_RSM_CURRICULUM;
CREATE PROCEDURE bodyflex.`SP_WPRO_PERFIL_PROFESIONAL_GET_RSM_CURRICULUM`(
                                                                            IN rut VARCHAR(20)
                                                                            , OUT codErr INTEGER
                                                                          )
BEGIN
DECLARE EXIT HANDLER FOR SQLEXCEPTION SET codErr=99;
SET codErr=0;
  IF EXISTS(SELECT * FROM ESTUDIOS WHERE PRUT = rut) THEN
    
    SET @URL = (SELECT PARVAL FROM PARAMETROS WHERE PARNOM='DRIVE');
    SET @fotPre = (SELECT P.PFOTOPRE FROM PROFESIONAL P WHERE P.PRUT=rut);
    SET @nom = (SELECT CONCAT(PNOM,' ',PAPE) FROM PROFESIONAL WHERE PRUT=rut);
    
    SELECT ESNOM
    , @nom AS 'NOMPRO'
    , @fotPre AS 'FOTPRE'
    , @URL AS 'URL'
    FROM ESTUDIOS
    WHERE PRUT=rut
    ORDER BY ESPOS ASC
    LIMIT 4;
    
  ELSE
    SET codErr=98;
  END IF;
  
END




