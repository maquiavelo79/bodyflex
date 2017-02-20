
-- CALL SP_CP_ADM_ING_CAT1(3,'S','S', @codErr);
-- SELECT @codErr;

-- select * from producto
-- select * from producto_categoria1
-- select * from producto_categoria2
-- select * from producto_categoria3

DROP PROCEDURE IF EXISTS bodyflex.SP_CP_ADM_ING_CAT1;
CREATE PROCEDURE bodyflex.`SP_CP_ADM_ING_CAT1`( 
                                                IN vId VARCHAR(10)
                                                , IN vNom VARCHAR(50)
                                                , IN vGD VARCHAR(50)
                                                , OUT codErr INTEGER
                                              )
BEGIN

-- DECLARE EXIT HANDLER FOR SQLEXCEPTION SET codErr=99;

SET codErr=0;

    IF NOT EXISTS(SELECT * FROM producto_categoria1 WHERE PCP1_ID=vId) THEN
  -- SELECT * FROM PRODUCTO
      -- 2 INSERTAMOS REGISTRO
      INSERT INTO producto_categoria1(
        PCP1_NOM
        , PCP1_GD
      )VALUES(
        vNom        
        , vGD
      );
      
      -- 3 OBTENEMOS ULTIMO DPOID INGRESADO
      SET @id = (SELECT PCP1_ID FROM producto_categoria1 ORDER BY PCP1_ID DESC LIMIT 1);   
      
      SELECT @id;
    
    ELSE -- EL REGISTRO EXISTE  
-- SELECT * FROM PRODUCTO
      -- 1 ACTUALIZAR EL REGISTRO
        UPDATE producto_categoria1 
        SET PCP1_NOM = vNom
        , PCP1_GD = vGD
        WHERE PCP1_ID=vId;
        
      SELECT vId;
      
    END IF;
      
END;
