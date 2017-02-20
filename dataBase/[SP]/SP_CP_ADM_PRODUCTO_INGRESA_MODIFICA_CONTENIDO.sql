
-- CALL SP_CP_ADM_PROFESIONAL_PRODUCTO_INGRESA_MODIFICA_CONTENIDO(32, 'LIBRO', 'EL NOMBRE DEL LIBRO', 'DESCRIPCION DEL LIBRO', 0);
-- CALL SP_CP_ADM_PROFESIONAL_PRODUCTO_INGRESA_MODIFICA_CONTENIDO(32, 'LIBRO', 'XXXXXXXXXXXXXXXXX', 'YYYYYYYYYYYYYYYY', 1);

-- select * from publicacion
-- select * from referencia
-- select * from publicacion_referencia 

DROP PROCEDURE IF EXISTS bodyflex.SP_CP_ADM_PRODUCTO_INGRESA_MODIFICA_CONTENIDO;
CREATE PROCEDURE bodyflex.`SP_CP_ADM_PRODUCTO_INGRESA_MODIFICA_CONTENIDO`( 
                                                    IN vpId VARCHAR(10) ,
                                                    IN vTco VARCHAR(10) ,
                                                    IN idDri VARCHAR(50) ,
                                                    IN idCon VARCHAR(10)  ,
                                                    OUT codErr INTEGER
                                                  )
BEGIN

  -- DECLARE EXIT HANDLER FOR SQLEXCEPTION SET codErr=99;
  SET codErr=0;
  
    -- [[[LA PRIMERA IMAGEN QUE SE INGRESE QUEDA COMO PRINCIPAL]]]
    IF EXISTS(SELECT * FROM PRODUCTO_CONTENIDO WHERE proID=vpId AND pco_tip='IMAGEN') THEN
      set @principal=0;
    ELSE
      set @principal=1;
    END IF;

    IF NOT EXISTS(SELECT * FROM PRODUCTO_CONTENIDO WHERE pco_id=idCon) THEN
      INSERT INTO PRODUCTO_CONTENIDO(
        proID,
        pco_tip,
        pco_dri,
        pco_pri
      )VALUES(
        vpId, 
        vTco,
        idDri,
        @principal
      );
      SELECT 1;
    ELSE
      UPDATE PRODUCTO_CONTENIDO
      SET pco_dri=idDri,
          pco_tip=vTco
      WHERE pco_id=idCon;    
      SELECT 2;
    END IF;
      
END;
