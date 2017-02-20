
-- CALL SP_CP_PRO_PRESENTACION_INGRESA_MODIFICA(0, '13661574','B','99999999999','Y');
  
DROP PROCEDURE IF EXISTS bodyflex.SP_CP_PRO_PRESENTACION_INGRESA_MODIFICA;
CREATE PROCEDURE bodyflex.`SP_CP_PRO_PRESENTACION_INGRESA_MODIFICA`( 
                                                IN rut VARCHAR(20)  ,
                                                IN flic VARCHAR(30) ,
                                                IN tex VARCHAR(2000) ,
                                                OUT codErr INTEGER 
                                              )
BEGIN
DECLARE EXIT HANDLER FOR SQLEXCEPTION SET codErr=99;
SET codErr=0;

    -- 1 ACTUALIZAR EL REGISTRO
      UPDATE PROFESIONAL 
      SET PFOTOPRE=flic
      , PTXTOPRE=tex
      WHERE PRUT=rut;
      SELECT 1;
        
END;
