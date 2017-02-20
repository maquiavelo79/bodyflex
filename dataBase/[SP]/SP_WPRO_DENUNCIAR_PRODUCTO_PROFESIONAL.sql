
-- SELECT * FROM PROFESIONAL_PRODUCTO_DENUNCIA;

DROP PROCEDURE IF EXISTS bodyflex.SP_WPRO_DENUNCIAR_PRODUCTO_PROFESIONAL;
CREATE PROCEDURE bodyflex.`SP_WPRO_DENUNCIAR_PRODUCTO_PROFESIONAL`( 
                                        IN rut VARCHAR(20)
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
         PRODUCTO_DENUNCIA PD
    WHERE P.PROID=PP.PROID AND PP.PROID=PD.proID 
    AND PP.PRUT=rut
    AND P.PROID=id
    AND (PD.ppd_ml=ma OR PD.ppd_ses=se)
  ) THEN
    DELETE FROM PRODUCTO_DENUNCIA WHERE proID=id AND ppd_ses=se;
    SELECT 2;
  ELSE
    INSERT INTO PRODUCTO_DENUNCIA(proID, ppd_fec, ppd_ses, ppd_ml) VALUES (id, now(), se, ma);
    SELECT 1;
  END IF;

END;
