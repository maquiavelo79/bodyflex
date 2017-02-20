
-- CALL SP_WAPP_CONSULTA_VOTACION_PUBLICACION('35', 'fjcalderon@uc.cl');
-- select * from PUBLICACION_VOTACION

DROP PROCEDURE IF EXISTS bodyflex.SP_WAPP_CONSULTA_VOTACION_PUBLICACION;
CREATE PROCEDURE bodyflex.`SP_WAPP_CONSULTA_VOTACION_PUBLICACION`(
                                                              IN pu VARCHAR(50)
                                                              , IN ma VARCHAR(100)
                                                              , OUT codErr INTEGER
                                                            )
BEGIN

  DECLARE EXIT HANDLER FOR SQLEXCEPTION SET codErr=99;
  SET codErr=0;
  IF EXISTS(SELECT * FROM PUBLICACION_VOTACION WHERE PUID=pu AND VMA=ma) THEN
    SELECT VLI, VUL FROM PUBLICACION_VOTACION WHERE PUID=pu AND VMA=ma;
  ELSE
    SET codErr=98;
  END IF;

END;
