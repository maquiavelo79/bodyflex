
-- CALL SP_CONSULTA_VOTACION_PROFESIONAL_PRODUCTO(9386703,1);
-- select * from PROFESIONAL_PRODUCTO_VOTACION

DROP PROCEDURE IF EXISTS bodyflex.SP_CONSULTA_VOTACION_PROFESIONAL_PRODUCTO;
CREATE PROCEDURE bodyflex.`SP_CONSULTA_VOTACION_PROFESIONAL_PRODUCTO`(
                                                              IN rut VARCHAR(50)
                                                              , IN id VARCHAR(20)
                                                              , IN ma VARCHAR(100) -- MAIL DEL USUARIO SI ESTE SE REGISTRO
                                                              , IN se VARCHAR(50) -- SESION DEL USUARIO
                                                            )
BEGIN

  DECLARE EXIT HANDLER FOR SQLEXCEPTION SELECT '99';
  IF EXISTS(
  
    SELECT * 
    FROM PROFESIONAL_PRODUCTO PP, 
         PROFESIONAL_PRODUCTO_VOTACION PV 
    WHERE PP.PROPID=PV.proPID 
    AND PP.PRUT=rut
    AND PP.PROPID=id
    AND (PV.PVO_ML=ma OR PV.PVO_SE=se)
    
  ) THEN
  
    SELECT pvo_li, pvo_ul 
    FROM PROFESIONAL_PRODUCTO PP, 
         PROFESIONAL_PRODUCTO_VOTACION PV 
    WHERE PP.PROPID=PV.proPID 
    AND PP.PRUT=rut
    AND PP.PROPID=id
    AND (PV.PVO_ML=ma OR PV.PVO_SE=se);
    
  ELSE
    SELECT 98;
  END IF;

END;
