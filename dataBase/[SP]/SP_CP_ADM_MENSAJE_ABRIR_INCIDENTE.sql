-- CALL SP_CP_ADM_MENSAJE_CERRAR_INCIDENTE('10');
-- SELECT * FROM PROFESIONAL_MENSAJE
-- SELECT * FROM INCIDENTE

DROP PROCEDURE IF EXISTS bodyflex.SP_CP_ADM_MENSAJE_ABRIR_INCIDENTE;
CREATE PROCEDURE bodyflex.`SP_CP_ADM_MENSAJE_ABRIR_INCIDENTE`(
                                                      IN indidente VARCHAR(20)
                                                      , OUT codErr INTEGER
                                                    )
BEGIN

DECLARE EXIT HANDLER FOR SQLEXCEPTION SET codErr=99;
  SET codErr=0;  
  UPDATE INCIDENTE SET ei_Id=1 WHERE incId=indidente;    

END;
