





DROP PROCEDURE IF EXISTS bodyflex.SP_PRESENTACION_ELIMINA;
CREATE PROCEDURE bodyflex.`SP_PRESENTACION_ELIMINA`( 
                                                IN rut VARCHAR(20) 
                                              )
BEGIN
DECLARE EXIT HANDLER FOR SQLEXCEPTION SELECT '99';

    -- 1 ACTUALIZAR EL REGISTRO
      UPDATE PROFESIONAL 
      SET PIDFOTOFLICKR=''
      , PTXTOPRE=''
      , PFOTOPRE=''
      WHERE PRUT=rut;
      SELECT 1;
        
END;

