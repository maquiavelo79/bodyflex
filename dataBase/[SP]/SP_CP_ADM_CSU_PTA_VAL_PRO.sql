
CALL SP_CP_ADM_CSU_PTA_VAL_PRO(@codErr);
SELECT @codErr;

DROP PROCEDURE IF EXISTS bodyflex.SP_CP_ADM_CSU_PTA_VAL_PRO;
CREATE PROCEDURE bodyflex.`SP_CP_ADM_CSU_PTA_VAL_PRO`(OUT codErr INTEGER)
BEGIN
  -- OBTENEMOS LA OFERTA DE VALOR PARA PROFESIONALES DEL DEPORTE
  DECLARE EXIT HANDLER FOR SQLEXCEPTION SET codErr=99;    
  SET codErr=0;
  IF EXISTS(SELECT * FROM PROPUESTA_PROFESIONAL) THEN
    SELECT PPRID
    , pprAcro
    , pprNom
    , pprTit
    , pprDes
    , pprGD
    FROM PROPUESTA_PROFESIONAL 
    WHERE pprTar='PROFESIONAL'
    ORDER BY PPRID ASC;
  ELSE
    SET codErr=98;  
  END IF;
  
END;
