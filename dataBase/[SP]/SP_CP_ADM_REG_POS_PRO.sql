
-- CALL SP_CP_ADM_REG_POS_PRO('1','13661574','2','Francisco Javier','Calderon Navarro','f@bo.cl','777777','666666666','LLLLLLLLLLL','19800101', @codErr);
-- select @codErr;

-- select * from profesional
-- select * from postulacion

DROP PROCEDURE IF EXISTS bodyflex.SP_CP_ADM_REG_POS_PRO;
CREATE PROCEDURE bodyflex.`SP_CP_ADM_REG_POS_PRO`( 
                                                      IN poId VARCHAR(20)
                                                    , IN poRut VARCHAR(10)
                                                    , IN poDv VARCHAR(1)
                                                    , IN poNom VARCHAR(100)
                                                    , IN poApe VARCHAR(100)
                                                    , IN poEml VARCHAR(100)
                                                    , IN poFon VARCHAR(20)
                                                    , IN poCel VARCHAR(20)
                                                    , IN poPro VARCHAR(50)
                                                    , IN poFna VARCHAR(8)
                                                    , OUT codErr INTEGER
                                                  )
BEGIN

-- DECLARE EXIT HANDLER FOR SQLEXCEPTION SET codErr=99;

SET codErr=0;
    -- select * from profesional
 
    IF NOT EXISTS(SELECT * FROM PROFESIONAL WHERE PRUT=poRut AND PID=poId) THEN
      INSERT INTO PROFESIONAL(
        PRUT
        , CPAID
        , PDV
        , PMAIL
        , PFONO
        , PCELULAR
        , PTIPO
        , PTIPO2
        , PEST
        , PNOM
        , PAPE
        , PFECING
        , PID
        , PFECNAC
      )VALUES(
        poRut
        , 2
        , poDv
        , poEml
        , poFon
        , poCel
        , 1
        , poPro
        , 1
        , poNom
        , poApe
        , NOW()
        , poId
        , poFna
      );
      -- select * from profesional
      -- ESTADO REGISTRADO EN POSTULACIÓN
      UPDATE POSTULACION SET POSEST=8 WHERE POSID=poId;
    
      SELECT 1;
    
    ELSE -- EL REGISTRO EXISTE  

      UPDATE PROFESIONAL 
      SET PRUT = poRut
        , PDV = poDv
        , PMAIL = poEml
        , PFONO = poFon
        , PCELULAR = poCel
        , PNOM = poNom
        , PAPE = poApe
        , PFECNAC = poFna
      WHERE PID = poId;
      
      SELECT 2;
      
    END IF;
      
END;
