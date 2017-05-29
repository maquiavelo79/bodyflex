
-- CALL SP_CP_ADM_ELI_PTA_VAL_PRO(3, @codErr);
-- SELECT @codErr;

-- select * from COLECCION

DROP PROCEDURE IF EXISTS bodyflex.SP_CP_ADM_ELI_PTA_VAL_PRO;
CREATE PROCEDURE bodyflex.`SP_CP_ADM_ELI_PTA_VAL_PRO`( 
                                                IN vId VARCHAR(10)
                                                , OUT codErr INTEGER
                                              )
BEGIN

  DECLARE EXIT HANDLER FOR SQLEXCEPTION SET codErr=99;

  SET codErr=0;
  DELETE FROM COLECCION_PRODUCTO WHERE COID=vId;
  DELETE FROM COLECCION WHERE COID=vId;
          
END;