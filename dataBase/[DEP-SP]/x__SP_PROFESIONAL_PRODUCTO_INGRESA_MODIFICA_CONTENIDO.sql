
-- CALL SP_PUBLICACION_INGRESA_REFERENCIA(32, 'LIBRO', 'EL NOMBRE DEL LIBRO', 'DESCRIPCION DEL LIBRO', 0);
-- CALL SP_PUBLICACION_INGRESA_REFERENCIA(32, 'LIBRO', 'XXXXXXXXXXXXXXXXX', 'YYYYYYYYYYYYYYYY', 1);

-- select * from publicacion
-- select * from referencia
-- select * from publicacion_referencia 

DROP PROCEDURE IF EXISTS bodyflex.SP_PROFESIONAL_PRODUCTO_INGRESA_MODIFICA_CONTENIDO;
CREATE PROCEDURE bodyflex.`SP_PROFESIONAL_PRODUCTO_INGRESA_MODIFICA_CONTENIDO`( 
                                                    IN proId VARCHAR(10) ,
                                                    IN tipCon VARCHAR(10) ,
                                                    IN idDri VARCHAR(50) ,
                                                    IN idCon VARCHAR(10)
                                                  )
BEGIN

  -- DECLARE EXIT HANDLER FOR SQLEXCEPTION SELECT '99';

    -- [[[LA PRIMERA IMAGEN QUE SE INGRESE QUEDA COMO PRINCIPAL]]]
    IF EXISTS(SELECT * FROM PROFESIONAL_PRODUCTO_CONTENIDO WHERE proPID=proId AND pco_tip='IMAGEN') THEN
      set @principal=0;
    ELSE
      set @principal=1;
    END IF;

    IF NOT EXISTS(SELECT * FROM PROFESIONAL_PRODUCTO_CONTENIDO WHERE pco_id=idCon) THEN
      INSERT INTO PROFESIONAL_PRODUCTO_CONTENIDO(
        proPID,
        pco_tip,
        pco_dri,
        pco_pri
      )VALUES(
        proId, 
        tipCon,
        idDri,
        @principal
      );
      SELECT 1;
    ELSE
      UPDATE PROFESIONAL_PRODUCTO_CONTENIDO
      SET pco_dri=idDri,
          pco_tip=tipCon
      WHERE pco_id=idCon;    
      SELECT 2;
    END IF;
      
END;
