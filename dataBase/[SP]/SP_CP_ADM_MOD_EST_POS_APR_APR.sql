

-- CALL SP_CP_ADM_MOD_EST_POS_APR_APR(12, '0B82UUH1gaEMAZE5KcXRzX09JQjA', @codErr);
-- SELECT @codErr;


DROP PROCEDURE IF EXISTS bodyflex.SP_CP_ADM_MOD_EST_POS_APR_APR;
CREATE PROCEDURE bodyflex.`SP_CP_ADM_MOD_EST_POS_APR_APR`(
                                                            IN id VARCHAR(20)
                                                            , IN idTxt VARCHAR(50)
                                                            , OUT codErr INTEGER
                                                          )
BEGIN

DECLARE EXIT HANDLER FOR SQLEXCEPTION SET codErr=99;

SET codErr=0;

    IF EXISTS(SELECT * FROM POSTULACION WHERE POSID=id) THEN
      UPDATE POSTULACION 
      SET POSEST = 6 -- APROBADA
      WHERE POSID=id;
      
      INSERT INTO POSTULACION_RESPALDO (posId, presIdDri) values (id, idTxt);
      
      SELECT 1;
    ELSE
      SET codErr=98;
    END IF;
      
END;
