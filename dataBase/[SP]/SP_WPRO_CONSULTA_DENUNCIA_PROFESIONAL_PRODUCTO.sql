
-- SELECT * FROM PROFESIONAL_PRODUCTO_DENUNCIA

DROP PROCEDURE IF EXISTS bodyflex.SP_WPRO_CONSULTA_DENUNCIA_PROFESIONAL_PRODUCTO;
CREATE PROCEDURE bodyflex.`SP_WPRO_CONSULTA_DENUNCIA_PROFESIONAL_PRODUCTO`( 
                                          IN rut VARCHAR(20)
                                        , IN id VARCHAR(20)
                                        , IN ma VARCHAR(100) -- MAIL DEL USUARIO SI ESTE SE REGISTRO
                                        , IN se VARCHAR(50) -- SESION DEL USUARIO
                                        , OUT codErr INTEGER
                                    )
BEGIN
 DECLARE EXIT HANDLER FOR SQLEXCEPTION SET codErr=99;
 SET codErr=0;
  IF EXISTS(
    
    SELECT * 
    FROM PRODUCTO PP, 
         PRODUCTO_DENUNCIA PD
    WHERE PP.PROID=PD.proID 
    -- AND PP.PRUT=rut
    AND PP.PROID=id
    AND (PD.ppd_ml=ma OR PD.ppd_ses=se)
    
  ) THEN
    SELECT 1;
  ELSE
    SELECT 2;
  END IF;

END;
