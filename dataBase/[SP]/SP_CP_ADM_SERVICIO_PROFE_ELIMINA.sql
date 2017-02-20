
-- CALL SP_CP_ADM_SERVICIO_PROFE_ELIMINA('12');
   
-- SELECT * FROM SERVICIO;

DROP PROCEDURE IF EXISTS bodyflex.SP_CP_ADM_SERVICIO_PROFE_ELIMINA;
CREATE PROCEDURE bodyflex.`SP_CP_ADM_SERVICIO_PROFE_ELIMINA`(
                                                              IN id VARCHAR(20)
                                                              , OUT codErr INTEGER
                                                          )
BEGIN

DECLARE EXIT HANDLER FOR SQLEXCEPTION SET codErr=99;  
SET codErr=0;
  DELETE FROM SERVICIO WHERE SEID=id;    
  SELECT 1;
  
END;
