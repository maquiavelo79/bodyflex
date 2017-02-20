
-- CALL SP_CONSULTA_VOTACION_SERVICIO(54,'e5nc5jhli8vdqgc7qsf02d4743');
-- select * from SERVICIO_VOTACION where SVSE='e5nc5jhli8vdqgc7qsf02d4743'

DROP PROCEDURE IF EXISTS bodyflex.SP_CONSULTA_VOTACION_SERVICIO;
CREATE PROCEDURE bodyflex.`SP_CONSULTA_VOTACION_SERVICIO`(
                                                              IN id VARCHAR(30)
                                                              , IN se VARCHAR(30)
                                                            )
BEGIN

  DECLARE EXIT HANDLER FOR SQLEXCEPTION SELECT '99';
  IF EXISTS(SELECT * FROM SERVICIO_VOTACION WHERE SEID=id AND SVSE=se) THEN
    SELECT SVOK, SVNO FROM SERVICIO_VOTACION WHERE SEID=id AND SVSE=se; 
  ELSE
    SELECT 98;
  END IF;

END;
