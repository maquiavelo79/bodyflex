
CALL SP_WPRO_PROFESIONAL_PRODUCTO_CUENTA_VISITA('13661574','77','fcalde90','111111111', @codErr);
SELECT @codErr;

-- select * from PROFESIONAL_PRODUCTO_VISITAS;

DROP PROCEDURE IF EXISTS bodyflex.SP_WPRO_PROFESIONAL_PRODUCTO_CUENTA_VISITA;
CREATE PROCEDURE bodyflex.`SP_WPRO_PROFESIONAL_PRODUCTO_CUENTA_VISITA`( 
                                                          IN rut VARCHAR(20)
                                                        , IN id VARCHAR(20)
                                                        , IN ma VARCHAR(100) -- MAIL DEL USUARIO SI ESTE SE REGISTRO
                                                        , IN se VARCHAR(50) -- SESION DEL USUARIO
                                                        , OUT codErr INTEGER
                                                      )
BEGIN

-- DECLARE EXIT HANDLER FOR SQLEXCEPTION SET codErr=99;
SET codErr=0;

    -- SI SE TRATA DE LA MISMA SESION NO CONTABILIZAMOS
    
    IF NOT EXISTS(
      SELECT * 
      FROM PRODUCTO PP, 
           PRODUCTO_VISITAS PV
      WHERE PP.PROID=PV.proID AND PV.ppv_ses=se
    ) THEN
    
      INSERT INTO PRODUCTO_VISITAS(
        proID
        , ppv_fec
        , ppv_ses
        , ppv_ml
      )VALUES(
        id
        , NOW()
        , se
        , ma
      );
      SELECT 1;
      
    ELSE
      SET codErr=98;
    END IF;
        
END;
