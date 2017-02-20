
-- [PRIMERA LLAMADA]
-- CALL SP_MENSAJE_OBTIENE_DETALLE(32); 
-- SELECT * FROM PROFESIONAL_MENSAJE;

DROP PROCEDURE IF EXISTS bodyflex.SP_CP_ADM_MENSAJE_OBTIENE_DETALLE;
CREATE PROCEDURE bodyflex.`SP_CP_ADM_MENSAJE_OBTIENE_DETALLE`(
                                                    IN id VARCHAR(20)
                                                    , OUT codErr INTEGER
                                                  )
BEGIN

    DECLARE EXIT HANDLER FOR SQLEXCEPTION SET codErr=99;
    SET codErr=0;
    IF(SELECT COUNT(*) FROM PROFESIONAL_MENSAJE PM WHERE PM.MID=id)>0 THEN
      SELECT PM.MID
      , PM.MFEC
      , PM.MLEI
      , PM.MTIP
      , PM.MCOR
      , PM.MKEY
      , PM.MMEN
      , concat('ASUNTO: ', '[', PM.MID, '] ' ,PM.MASU) AS ASUNTO
      , PM.MAORI
      , PM.MMAIL
      , IF(LENGTH(PM.MRORI)=0,0,PM.MRORI) AS MRORI
      FROM PROFESIONAL_MENSAJE PM
      WHERE PM.MID=id; 
    ELSE
      SET codErr=98;
    END IF;
END




