
-- CALL SP_CP_ADM_ING_MOD_SLI_CAT2('12','NUEVO','wwwwwwwwwwwww','2222222','wwwwwwwwwwwww','2','0','0','wwwwwwwwwwwww','9386703');
-- select * from CATALOGO_SLIDER3

DROP PROCEDURE IF EXISTS bodyflex.SP_CP_ADM_ING_MOD_SLI_CAT3;
CREATE PROCEDURE bodyflex.`SP_CP_ADM_ING_MOD_SLI_CAT3`( 
                                                        IN D3Id VARCHAR(10)
                                                        , IN D3Tit VARCHAR(30)
                                                        , IN D3GD VARCHAR(50)
                                                        , IN D3Ur1 VARCHAR(200)
                                                        , IN D3Co VARCHAR(10)
                                                        , OUT codErr INTEGER
                                                      )
BEGIN

-- DECLARE EXIT HANDLER FOR SQLEXCEPTION SET codErr=99;

SET codErr=0;

    IF NOT EXISTS(SELECT * FROM CATALOGO_SLIDER3 WHERE CS3ID=D3id) THEN
  -- SELECT * FROM PRODUCTO
      -- 2 INSERTAMOS REGISTRO
      INSERT INTO CATALOGO_SLIDER3(
        cs3Ti
        , cs3GD
        , cs3URL
        , CS3CO
      )VALUES(
        D3Tit        
        , D3GD
        , D3Ur1
        , D3Co
      );
      
      -- 3 OBTENEMOS ULTIMO DPOID INGRESADO
      SET @id = (SELECT CS3ID FROM CATALOGO_SLIDER3 ORDER BY CS3ID DESC LIMIT 1);   
      
      SELECT @id;
    
    ELSE -- EL REGISTRO EXISTE  
-- SELECT * FROM PRODUCTO
      -- 1 ACTUALIZAR EL REGISTRO
        UPDATE CATALOGO_SLIDER3 
        SET cs3Ti = D3Tit
        , cs3GD = D3GD
        , cs3URL = D3Ur1
        , CS3CO = D3Co
        WHERE CS3ID=D3id;
        
      SELECT D3id;
      
    END IF;
      
END;
