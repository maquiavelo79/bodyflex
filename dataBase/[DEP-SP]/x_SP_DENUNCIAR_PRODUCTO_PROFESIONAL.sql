
-- SELECT * FROM PROFESIONAL_PRODUCTO_DENUNCIA;

DROP PROCEDURE IF EXISTS bodyflex.SP_DENUNCIAR_PRODUCTO_PROFESIONAL;
CREATE PROCEDURE bodyflex.`SP_DENUNCIAR_PRODUCTO_PROFESIONAL`( 
                                        IN rut VARCHAR(20)
                                      , IN id VARCHAR(20)
                                      , IN ma VARCHAR(100) -- MAIL DEL USUARIO SI ESTE SE REGISTRO
                                      , IN se VARCHAR(50) -- SESION DEL USUARIO
                                    )
BEGIN
-- DECLARE EXIT HANDLER FOR SQLEXCEPTION SELECT '99';
 
  IF EXISTS(
    SELECT * 
    FROM PROFESIONAL_PRODUCTO PP, 
         PROFESIONAL_PRODUCTO_DENUNCIA PD
    WHERE PP.PROPID=PD.proPID 
    AND PP.PRUT=rut
    AND PP.PROPID=id
    AND (PD.ppd_ml=ma OR PD.ppd_ses=se)
  ) THEN
    DELETE FROM PROFESIONAL_PRODUCTO_DENUNCIA WHERE proPID=id AND ppd_ses=se;
    SELECT 2;
  ELSE
    INSERT INTO PROFESIONAL_PRODUCTO_DENUNCIA(proPID, ppd_fec, ppd_ses, ppd_ml) VALUES (id, now(), se, ma);
    SELECT 1;
  END IF;

END;
