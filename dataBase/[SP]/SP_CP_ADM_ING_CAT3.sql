
-- CALL SP_CP_ADM_ING_CAT3(3,'S','S', @codErr);
-- SELECT @codErr;

-- select * from producto
-- select * from producto_categoria1
-- select * from producto_categoria2
-- select * from producto_categoria3

DROP PROCEDURE IF EXISTS bodyflex.SP_CP_ADM_ING_CAT3;
CREATE PROCEDURE bodyflex.`SP_CP_ADM_ING_CAT3`( 
                                                IN vId VARCHAR(10)
                                                , IN vCat2 INTEGER
                                                , IN vNom VARCHAR(50)
                                                , IN vGD VARCHAR(50)
                                                , IN vGD2 VARCHAR(50)
                                                , OUT codErr INTEGER
                                              )
BEGIN

-- DECLARE EXIT HANDLER FOR SQLEXCEPTION SET codErr=99;

SET codErr=0;

    IF NOT EXISTS(SELECT * FROM producto_categoria3 WHERE PCP3_ID=vId) THEN
  -- SELECT * FROM PRODUCTO
      -- 2 INSERTAMOS REGISTRO
      INSERT INTO producto_categoria3(
        PCP2_ID
        , PCP3_NOM
        , PCP3_GD
        , PCP3_GD2
      )VALUES(
        vCat2
        , vNom        
        , vGD
        , vGD2
      );
      
      -- 3 OBTENEMOS ULTIMO DPOID INGRESADO
      SET @id = (SELECT PCP3_ID FROM producto_categoria3 ORDER BY PCP3_ID DESC LIMIT 1);   
      
      SELECT @id;
    
    ELSE -- EL REGISTRO EXISTE  
-- SELECT * FROM PRODUCTO
      -- 1 ACTUALIZAR EL REGISTRO
        UPDATE producto_categoria3 
        SET PCP2_ID=vCat2
        , PCP3_NOM = vNom
        , PCP3_GD = vGD
        , PCP3_GD2 = vGD2
        WHERE PCP3_ID=vId;
        
      SELECT vId;
      
    END IF;
      
END;
