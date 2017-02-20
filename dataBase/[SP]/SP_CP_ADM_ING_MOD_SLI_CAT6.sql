
-- CALL SP_CP_ADM_ING_MOD_SLI_CAT2('12','NUEVO','wwwwwwwwwwwww','2222222','wwwwwwwwwwwww','2','0','0','wwwwwwwwwwwww','9386703');
-- select * from CATALOGO_SLIDER6

DROP PROCEDURE IF EXISTS bodyflex.SP_CP_ADM_ING_MOD_SLI_CAT6;
CREATE PROCEDURE bodyflex.`SP_CP_ADM_ING_MOD_SLI_CAT6`( 
                                                        IN D6Id VARCHAR(10)
                                                        , IN D61GD VARCHAR(50)
                                                        , IN D62GD VARCHAR(50)
                                                        , IN D63GD VARCHAR(50)
                                                        , IN D6p1 INTEGER
                                                        , IN D6p2 INTEGER
                                                        , IN D6p3 INTEGER
                                                        , IN D6B1 VARCHAR(20)
                                                        , IN D6B2 VARCHAR(20)
                                                        , IN D6B3 VARCHAR(20)
                                                        , IN D6Ur1 VARCHAR(200)
                                                        , IN D6Ur2 VARCHAR(200)
                                                        , IN D6Ur3 VARCHAR(200)
                                                        , IN D6Po1 VARCHAR(10)
                                                        , IN D6Po2 VARCHAR(10)
                                                        , IN D6Po3 VARCHAR(10)
                                                        , OUT codErr INTEGER
                                                      )
BEGIN

-- DECLARE EXIT HANDLER FOR SQLEXCEPTION SET codErr=99;

SET codErr=0;

    IF NOT EXISTS(SELECT * FROM CATALOGO_SLIDER6 WHERE CS6ID=D6id) THEN
  -- SELECT * FROM PRODUCTO
      -- 2 INSERTAMOS REGISTRO
      INSERT INTO CATALOGO_SLIDER6(
        cs6GD1
        , cs6GD2
        , cs6GD3
        , cs6P1
        , cs6P2
        , cs6P3
        , cs6B1
        , cs6B2
        , cs6B3
        , cs6URL1
        , cs6URL2
        , cs6URL3
        , cs6Po1
        , cs6Po2
        , cs6Po3
      )VALUES(
        D61GD        
        , D62GD
        , D63GD
        , D6p1
        , D6p2
        , D6p3
        , D6B1
        , D6B2
        , D6B3
        , D6Ur1
        , D6Ur2
        , D6Ur3
        , D6Po1
        , D6Po2
        , D6Po3
      );
      
      -- 3 OBTENEMOS ULTIMO DPOID INGRESADO
      SET @id = (SELECT CS6ID FROM CATALOGO_SLIDER6 ORDER BY CS6ID DESC LIMIT 1);   
      
      SELECT @id;
    
    ELSE -- EL REGISTRO EXISTE  
-- SELECT * FROM PRODUCTO
      -- 1 ACTUALIZAR EL REGISTRO
        UPDATE CATALOGO_SLIDER6
        SET cs6GD1 = D61GD
        , cs6GD2 = D62GD
        , cs6GD3 = D63GD
        , cs6P1 = D6p1
        , cs6P2 = D6p2
        , cs6P3 = D6p3
        , cs6B1 = D6B1
        , cs6B2 = D6B2
        , cs6B3 = D6B3
        , cs6URL1 = D6Ur1
        , cs6URL2 = D6Ur2
        , cs6URL3 = D6Ur3
        , cs6Po1 = D6Po1
        , cs6Po2 = D6Po2
        , cs6Po3 = D6Po3
        WHERE CS6ID=D6Id;
        
      SELECT D6id;
      
    END IF;
      
END;
