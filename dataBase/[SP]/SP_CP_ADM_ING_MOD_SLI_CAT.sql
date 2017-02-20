
-- CALL SP_CP_ADM_ING_MOD_SLI_CAT(3,'S','S','S','S', @codErr);
-- SELECT @codErr;

-- select * from catalogo_slider1
-- select * from producto
-- select * from profesional_producto_categoria1
-- select * from profesional_producto_categoria2
-- select * from profesional_producto_categoria3

DROP PROCEDURE IF EXISTS bodyflex.SP_CP_ADM_ING_MOD_SLI_CAT;
CREATE PROCEDURE bodyflex.`SP_CP_ADM_ING_MOD_SLI_CAT`( 
                                                        IN D1id VARCHAR(10)
                                                        , IN D1Tit VARCHAR(30)
                                                        , IN D1Tex VARCHAR(150)
                                                        , IN D1GD VARCHAR(50)
                                                        , IN D1Ur1 VARCHAR(200)
                                                        , IN D1Co VARCHAR(10)
                                                        , OUT codErr INTEGER
                                                      )
BEGIN

-- DECLARE EXIT HANDLER FOR SQLEXCEPTION SET codErr=99;

SET codErr=0;

    IF NOT EXISTS(SELECT * FROM CATALOGO_SLIDER1 WHERE CS1ID=D1id) THEN
  -- SELECT * FROM PRODUCTO
      -- 2 INSERTAMOS REGISTRO
      INSERT INTO CATALOGO_SLIDER1(
        cs1Ti
        , cs1De
        , cs1GD
        , cs1URL
        , cs1co
      )VALUES(
        D1Tit        
        , D1Tex
        , D1GD
        , D1Ur1
        , D1Co
      );
      
      -- 3 OBTENEMOS ULTIMO DPOID INGRESADO
      SET @id = (SELECT CS1ID FROM CATALOGO_SLIDER1 ORDER BY CS1ID DESC LIMIT 1);   
      
      SELECT @id;
    
    ELSE -- EL REGISTRO EXISTE  
-- SELECT * FROM PRODUCTO
      -- 1 ACTUALIZAR EL REGISTRO
        UPDATE CATALOGO_SLIDER1 
        SET cs1Ti = D1Tit
        , cs1De = D1Tex
        , cs1GD = D1GD
        , cs1URL = D1Ur1
        , cs1co = D1Co
        WHERE CS1ID=D1id;
        
      SELECT D1id;
      
    END IF;
      
END;
