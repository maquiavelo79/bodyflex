
-- CALL SP_CONSULTA_VOTACION_PROFESIONAL_PRODUCTO(9386703,1);
-- select * from PROFESIONAL_PRODUCTO_VOTACION

DROP PROCEDURE IF EXISTS bodyflex.SP_WPRO_CONSULTA_VOTACION_PROFESIONAL_PRODUCTO;
CREATE PROCEDURE bodyflex.`SP_WPRO_CONSULTA_VOTACION_PROFESIONAL_PRODUCTO`(
                                                              IN rut VARCHAR(50)
                                                              , IN id VARCHAR(20)
                                                              , IN ma VARCHAR(100) -- MAIL DEL USUARIO SI ESTE SE REGISTRO
                                                              , IN se VARCHAR(50) -- SESION DEL USUARIO
                                                              , OUT codErr INTEGER
                                                            )
BEGIN

  -- DECLARE EXIT HANDLER FOR SQLEXCEPTION SET codErr=99;
  SET codErr=0;
  IF EXISTS(
  
    SELECT * 
    FROM PRODUCTO P,
         PRODUCTO_PROFESIONAL PP, 
         PRODUCTO_VOTACION PV 
    WHERE P.PROID=PP.PROID AND P.PROID=PV.proID 
    AND PP.PRUT=rut
    AND P.PROID=id
    AND (PV.PVO_ML=ma OR PV.PVO_SE=se)
    
  ) THEN
  
    SELECT pvo_li, pvo_ul 
    FROM PRODUCTO P,
         PRODUCTO_PROFESIONAL PP, 
         PRODUCTO_VOTACION PV 
    WHERE P.PROID=PP.PROID AND P.PROID=PV.proID 
    AND PP.PRUT=rut
    AND P.PROID=id
    AND (PV.PVO_ML=ma OR PV.PVO_SE=se);
    
  ELSE
    SET codErr=98;
  END IF;

END;
