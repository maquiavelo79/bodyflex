-- CALL SP_ADM_SERVICIO_PROFE_VERIFICA_IMAGEN('11');

DROP PROCEDURE IF EXISTS bodyflex.SP_ADM_SERVICIO_PROFE_VERIFICA_IMAGEN;
CREATE PROCEDURE bodyflex.`SP_ADM_SERVICIO_PROFE_VERIFICA_IMAGEN`( IN id VARCHAR(50) )
BEGIN

  IF EXISTS(SELECT * FROM SERVICIO WHERE SEID=id)THEN
    SET @NOMIMG = (SELECT SEIMGSER FROM SERVICIO WHERE SEID=id);   
    IF @NOMIMG <> 'NOIMAGE' THEN
      SELECT 1, @NOMIMG;
    ELSE
      SELECT 3, '';
    END IF;
  ELSE
    SELECT 2, '';
  END IF;
      
END;


-- SELECT * FROM SLIDER;