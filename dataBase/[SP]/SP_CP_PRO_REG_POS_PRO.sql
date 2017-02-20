
-- CALL SP_CP_PRO_REG_POS_PRO(1,'777777','666666666','LLLLLLLLLLL', @codErr);
-- select @codErr;

-- select * from profesional
-- select * from postulacion

DROP PROCEDURE IF EXISTS bodyflex.SP_CP_PRO_REG_POS_PRO;
CREATE PROCEDURE bodyflex.`SP_CP_PRO_REG_POS_PRO`( 
                                                    IN poId VARCHAR(20)
                                                    , IN poFon VARCHAR(20)
                                                    , IN poCel VARCHAR(20)
                                                    , IN poPro VARCHAR(50)
                                                    , IN proEsp VARCHAR(50)
                                                    , IN proFpr VARCHAR(50)
                                                    , OUT codErr INTEGER
                                                  )
BEGIN

-- DECLARE EXIT HANDLER FOR SQLEXCEPTION SET codErr=99;

SET codErr=0;
      
      SET @RUT=(SELECT PRUT FROM PROFESIONAL WHERE PID=poId);
      
      UPDATE PROFESIONAL 
      SET PFONO = poFon
        , PCELULAR = poCel
        , PTIPO2 = poPro
        , PIDFOTO = proFpr
      WHERE PID = poId;
      
      UPDATE PROFESIONAL_PERFIL SET PERESP=proEsp WHERE PRUT=@RUT;

      SELECT 2;
      
END;
