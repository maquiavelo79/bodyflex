
-- CALL SP_CP_ADM_ING_CAT2(3,'S','S', @codErr);
-- SELECT @codErr;

-- select * from producto
-- select * from producto_categoria1
-- select * from producto_categoria2
-- select * from producto_categoria3

DROP PROCEDURE IF EXISTS bodyflex.SP_CP_ADM_ING_CAT2;
CREATE PROCEDURE bodyflex.`SP_CP_ADM_ING_CAT2`( 
                                                IN vId VARCHAR(10)
                                                , IN vCat1 INTEGER
                                                , IN vNom VARCHAR(50)
                                                , IN vGD VARCHAR(50)
                                                , IN vGD2 VARCHAR(50)
                                                , OUT codErr INTEGER
                                              )
BEGIN

-- DECLARE EXIT HANDLER FOR SQLEXCEPTION SET codErr=99;

SET codErr=0;

    IF NOT EXISTS(SELECT * FROM producto_categoria2 WHERE PCP2_ID=vId) THEN
  -- SELECT * FROM PRODUCTO
      -- 2 INSERTAMOS REGISTRO
      INSERT INTO producto_categoria2(
        PCP1_ID
        , PCP2_NOM
        , PCP2_GD
        , PCP2_GD2
      )VALUES(
        vCat1
        , vNom        
        , vGD
        , vGD2
      );
      
      -- 3 OBTENEMOS ULTIMO DPOID INGRESADO
      SET @id = (SELECT PCP2_ID FROM producto_categoria2 ORDER BY PCP2_ID DESC LIMIT 1);   
      
      SELECT @id;
    
    ELSE -- EL REGISTRO EXISTE  
-- SELECT * FROM PRODUCTO
      -- 1 ACTUALIZAR EL REGISTRO
        UPDATE producto_categoria2 
        SET PCP1_ID = vCat1
        , PCP2_NOM = vNom
        , PCP2_GD = vGD
        , PCP2_GD2 = vGD2
        WHERE PCP2_ID=vId;
        
      SELECT vId;
      
    END IF;
      
END;
