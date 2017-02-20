
DROP PROCEDURE IF EXISTS bodyflex.SP_CP_PRO_PRESENTACION_ELIMINA;
CREATE PROCEDURE bodyflex.`SP_CP_PRO_PRESENTACION_ELIMINA`( 
                                                IN rut VARCHAR(20) 
                                                , OUT codErr INTEGER
                                              )
BEGIN
DECLARE EXIT HANDLER FOR SQLEXCEPTION SET codErr=99;
SET codErr=0;
    -- 1 ACTUALIZAR EL REGISTRO
      UPDATE PROFESIONAL 
      SET pFotoPre=''
      , PTXTOPRE=''
      , PFOTOPRE=''
      WHERE PRUT=rut;
      SELECT 1;
END;

-- select * from profesional