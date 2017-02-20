
-- [PRIMERA LLAMADA]
-- CALL SP_MENSAJE_SET_COMO_LEIDO(10,'usr@bo.cl'); 
-- SELECT * FROM PROFESIONAL_MENSAJE;

DROP PROCEDURE IF EXISTS bodyflex.SP_CP_ADM_MENSAJE_SET_COMO_LEIDO;
CREATE PROCEDURE bodyflex.`SP_CP_ADM_MENSAJE_SET_COMO_LEIDO`(
                                                    IN id VARCHAR(20)
                                                    , IN emlDes VARCHAR(50)
                                                    , OUT codErr INTEGER
                                                  )
BEGIN

    DECLARE EXIT HANDLER FOR SQLEXCEPTION SET codErr=99;
    SET codErr=0;
    IF(SELECT COUNT(*) FROM PROFESIONAL_MENSAJE PM WHERE PM.MID=id AND MLEI=0)>0 THEN
      UPDATE PROFESIONAL_MENSAJE PM SET PM.MLEI=1 WHERE PM.MID=id; 
      SET @NOLEI = (SELECT COUNT(*) FROM PROFESIONAL_MENSAJE WHERE MMAILDES=emlDes AND MLEI=0);
      SELECT 1, @NOLEI;
    ELSE
      SET codErr=98;
    END IF;
END




