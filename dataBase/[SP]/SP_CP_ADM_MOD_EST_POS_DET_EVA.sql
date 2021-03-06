
-- CALL SP_CP_ADM_MOD_EST_POS_DET_EVA('12','NUEVO','wwwwwwwwwwwww','2222222','wwwwwwwwwwwww','2','0','0','wwwwwwwwwwwww','9386703');


-- SELECT * FROM POSTULACION;

DROP PROCEDURE IF EXISTS bodyflex.SP_CP_ADM_MOD_EST_POS_DET_EVA;
CREATE PROCEDURE bodyflex.`SP_CP_ADM_MOD_EST_POS_DET_EVA`(IN id VARCHAR(20), OUT codErr INTEGER)
BEGIN

DECLARE EXIT HANDLER FOR SQLEXCEPTION SET codErr=99;

SET codErr=0;

    IF EXISTS(SELECT * FROM POSTULACION WHERE POSID=id) THEN
      UPDATE POSTULACION 
      SET POSEST = 2 -- evaluando
      WHERE POSID=id;
      SELECT 1;
    ELSE
      SET codErr=98;
    END IF;
      
END;
