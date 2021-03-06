
-- SELECT * FROM PROFESIONAL_PRODUCTO_DENUNCIA

DROP PROCEDURE IF EXISTS bodyflex.SP_CONSULTA_DENUNCIA_PROFESIONAL_PRODUCTO;
CREATE PROCEDURE bodyflex.`SP_CONSULTA_DENUNCIA_PROFESIONAL_PRODUCTO`( 
                                          IN rut VARCHAR(20)
                                        , IN id VARCHAR(20)
                                        , IN ma VARCHAR(100) -- MAIL DEL USUARIO SI ESTE SE REGISTRO
                                        , IN se VARCHAR(50) -- SESION DEL USUARIO
                                    )
BEGIN
 DECLARE EXIT HANDLER FOR SQLEXCEPTION SELECT '99';
  IF EXISTS(
    
    SELECT * 
    FROM PROFESIONAL_PRODUCTO PP, 
         PROFESIONAL_PRODUCTO_DENUNCIA PD
    WHERE PP.PROPID=PD.proPID 
    AND PP.PRUT=rut
    AND PP.PROPID=id
    AND (PD.ppd_ml=ma OR PD.ppd_ses=se)
    
  ) THEN
    SELECT 1;
  ELSE
    SELECT 2;
  END IF;

END;
