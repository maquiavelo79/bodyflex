DROP PROCEDURE IF EXISTS bodyflex.SP_CP_ADM_MOD_EST_POS_REC_REC;
CREATE PROCEDURE bodyflex.`SP_CP_ADM_MOD_EST_POS_REC_REC`(IN id VARCHAR(20), OUT codErr INTEGER)
BEGIN

DECLARE EXIT HANDLER FOR SQLEXCEPTION SET codErr=99;

SET codErr=0;

    IF EXISTS(SELECT * FROM POSTULACION WHERE POSID=id) THEN
      UPDATE POSTULACION 
      SET POSEST = 7 -- RECHAZADO
      WHERE POSID=id;
      SELECT 1;
    ELSE
      SET codErr=98;
    END IF;
      
END;
