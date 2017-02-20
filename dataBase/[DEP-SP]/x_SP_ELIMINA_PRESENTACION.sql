





DROP PROCEDURE IF EXISTS bodyflex.SP_ELIMINA_PRESENTACION;
CREATE PROCEDURE bodyflex.`SP_ELIMINA_PRESENTACION`( 
                                                IN rut VARCHAR(20) 
                                              )
BEGIN

    -- 1 ACTUALIZAR EL REGISTRO
      UPDATE PROFESIONAL 
      SET PIDFOTOFLICKR=''
      , PTXTOPRE=''
      , PFOTOPRE=''
      WHERE PRUT=rut;
      SELECT 1;
        
END;

