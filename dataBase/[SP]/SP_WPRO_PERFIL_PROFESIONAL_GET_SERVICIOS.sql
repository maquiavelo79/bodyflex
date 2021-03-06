-- CALL SP_WPRO_PERFIL_PROFESIONAL_GET_SERVICIOS('9386703');
-- SELECT * FROM PROFESIONAL;
-- SELECT * FROM PROFESIONAL_SERVICIO;
-- SELECT * FROM SERVICIO;

DROP PROCEDURE IF EXISTS bodyflex.SP_WPRO_PERFIL_PROFESIONAL_GET_SERVICIOS;
CREATE PROCEDURE bodyflex.`SP_WPRO_PERFIL_PROFESIONAL_GET_SERVICIOS`(
                                                                  IN rut VARCHAR(20)
                                                                  , OUT codErr INTEGER
                                                                )
BEGIN
DECLARE EXIT HANDLER FOR SQLEXCEPTION SET codErr=99;
SET codErr=0;

  IF EXISTS(SELECT * FROM PROFESIONAL_SERVICIO WHERE PRUT = rut) THEN
        
    SELECT S.SEID
    , S.SENOM
    , S.SEIMGAWE
    , S.SEDESCOR
    FROM PROFESIONAL_SERVICIO PS, SERVICIO S
    WHERE PS.SEID = S.SEID AND PS.PRUT=rut
    ORDER BY PSID ASC;
    
  ELSE
    SET codErr=98;    
  END IF;
  
END




