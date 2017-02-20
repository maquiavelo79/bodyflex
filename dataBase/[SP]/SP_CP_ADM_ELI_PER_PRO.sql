

-- CALL SP_CP_ADM_ELI_PER_PRO(1,@codErr);
-- SELECT @codErr;
   
-- SELECT * FROM PROFESIONAL;
-- SELECT * FROM PROFESIONAL_PERFIL
-- SELECT * FROM DIRECCION


DROP PROCEDURE IF EXISTS bodyflex.SP_CP_ADM_ELI_PER_PRO;
CREATE PROCEDURE bodyflex.`SP_CP_ADM_ELI_PER_PRO`(
                                                IN vId VARCHAR(20)
                                                , OUT codErr INTEGER
                                                )
BEGIN
  
  DECLARE EXIT HANDLER FOR SQLEXCEPTION SET codErr=99;
  SET codErr=0;
  SET @RUT=(SELECT PRUT FROM PROFESIONAL WHERE PID=vId);
  UPDATE PROFESIONAL SET PEST=1 WHERE PID=vId;
  DELETE FROM PROFESIONAL_PERFIL WHERE PRUT=@RUT;   
  SELECT 1;
          
END;
