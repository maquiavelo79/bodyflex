-- CALL SP_CP_PRO_CSU_RSP_INC_PRO(13661574,@codErr, @nInc);
-- SELECT @codErr, @nInc; 


DROP PROCEDURE IF EXISTS bodyflex.SP_CP_PRO_CSU_RSP_INC_PRO;
CREATE PROCEDURE bodyflex.`SP_CP_PRO_CSU_RSP_INC_PRO`(  
                                                    IN vRut VARCHAR(10)
                                                    , OUT codErr INTEGER 
                                                    , OUT nInc INTEGER 
                                                  )
BEGIN

-- CONSULTA RESPUESTA INCIDENTE SOPORTE
DECLARE EXIT HANDLER FOR SQLEXCEPTION SET codErr=99;

    SET codErr=0;    
    IF EXISTS(
      SELECT * 
      FROM INCIDENTE I, PROFESIONAL_MENSAJE PM 
      WHERE I.incId=PM.incId AND I.EI_ID=1 AND PM.mTip="R" AND PM.mLei=0 AND PM.mrDes=vRut
    ) THEN
      SET nInc =(
        SELECT COUNT(*) 
        FROM INCIDENTE I, PROFESIONAL_MENSAJE PM 
        WHERE I.incId=PM.incId AND I.EI_ID=1 AND PM.mTip="R" AND PM.mLei=0 AND PM.mrDes=vRut
      );     
    ELSE
      SET nInc =0;
    END IF;
        
END;
