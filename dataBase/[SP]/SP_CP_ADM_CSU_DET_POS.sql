
-- SELECT * FROM POSTULACION
-- SELECT * FROM PROFESIONAL

-- CALL SP_CP_ADM_CSU_DET_POS('1',@codErr);
-- SELECT @codErr AS corErr;

DROP PROCEDURE IF EXISTS bodyflex.SP_CP_ADM_CSU_DET_POS;
CREATE PROCEDURE bodyflex.`SP_CP_ADM_CSU_DET_POS`(
                                                    IN id VARCHAR(20)
                                                    , OUT codErr INTEGER
                                                  ) 
BEGIN

  DECLARE EXIT HANDLER FOR SQLEXCEPTION SET codErr=99;

  SET codErr=0;

    SELECT CONCAT(PRUT,'-',PDV) AS RUT
    , PNOM
    , PAPE
    , PMAIL
    , PFONO
    , PCELULAR
    , PTIPO2
    , pFecNac
    FROM PROFESIONAL
    WHERE PID=id;
           
END




