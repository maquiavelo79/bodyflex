
-- CALL SP_PROFESIONAL_PRODUCTO_CUENTA_VISITA('13661574','0','NOM1','01/01/2000','111111111','DESC1',1);
-- CALL SP_PROFESIONAL_PRODUCTO_CUENTA_VISITA('13661574','0','NOM2','01/01/2000','222222222','DESC2',2);
-- CALL SP_PROFESIONAL_PRODUCTO_CUENTA_VISITA('13661574','0','NOM3','01/01/2000','333333333','DESC3',3);

-- select * from PROFESIONAL_PRODUCTO_VISITAS;

DROP PROCEDURE IF EXISTS bodyflex.SP_PROFESIONAL_PRODUCTO_CUENTA_VISITA;
CREATE PROCEDURE bodyflex.`SP_PROFESIONAL_PRODUCTO_CUENTA_VISITA`( 
                                          IN rut VARCHAR(20)
                                        , IN id VARCHAR(20)
                                        , IN ma VARCHAR(100) -- MAIL DEL USUARIO SI ESTE SE REGISTRO
                                        , IN se VARCHAR(50) -- SESION DEL USUARIO
                                                      )
BEGIN
-- DECLARE EXIT HANDLER FOR SQLEXCEPTION SELECT '99';
    
    -- SI SE TRATA DE LA MISMA SESION NO CONTABILIZAMOS
    
    IF NOT EXISTS(
      SELECT * 
      FROM PROFESIONAL_PRODUCTO PP, 
           PROFESIONAL_PRODUCTO_VISITAS PV
      WHERE PP.PROPID=PV.proPID AND PV.ppv_ses=se
    ) THEN
    
      INSERT INTO PROFESIONAL_PRODUCTO_VISITAS(
        proPID
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
      SELECT 98;
    END IF;
        
END;
