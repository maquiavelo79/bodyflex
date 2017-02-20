
-- CALL SP_CP_ADM_ING_MOD_SLI_CAT2('12','NUEVO','wwwwwwwwwwwww','2222222','wwwwwwwwwwwww','2','0','0','wwwwwwwwwwwww','9386703');
-- select * from CATALOGO_SLIDER4

DROP PROCEDURE IF EXISTS bodyflex.SP_CP_ADM_ING_MOD_SLI_CAT4;
CREATE PROCEDURE bodyflex.`SP_CP_ADM_ING_MOD_SLI_CAT4`( 
                                                        IN D4Id VARCHAR(10)
                                                        , IN D41GD VARCHAR(50)
                                                        , IN D42GD VARCHAR(50)
                                                        , IN D43GD VARCHAR(50)
                                                        , IN D44GD VARCHAR(50)
                                                        , IN D4B1 VARCHAR(20)
                                                        , IN D4B2 VARCHAR(20)
                                                        , IN D4Ur1 VARCHAR(200)
                                                        , IN D4Ur2 VARCHAR(200)
                                                        , IN D4Ur3 VARCHAR(200)
                                                        , IN D4Ur4 VARCHAR(200)
                                                        , IN D4Po1 VARCHAR(10)
                                                        , IN D4Po2 VARCHAR(10)
                                                        , IN D4Po3 VARCHAR(10)
                                                        , IN D4Po4 VARCHAR(10)
                                                        , OUT codErr INTEGER
                                                      )
BEGIN

-- DECLARE EXIT HANDLER FOR SQLEXCEPTION SET codErr=99;

SET codErr=0;

    IF NOT EXISTS(SELECT * FROM CATALOGO_SLIDER4 WHERE CS4ID=D4Id) THEN
  -- SELECT * FROM PRODUCTO
      -- 2 INSERTAMOS REGISTRO
      INSERT INTO CATALOGO_SLIDER4(
        cs4GD1
        , cs4GD2
        , cs4GD3
        , cs4GD4
        , cs4B1
        , cs4B2
        , cs4URL1
        , cs4URL2
        , cs4URL3
        , cs4URL4
        , cs4Po1
        , cs4Po2
        , cs4Po3
        , cs4Po4
      )VALUES(
        D41GD        
        , D42GD
        , D43GD
        , D44GD
        , D4B1
        , D4B2
        , D4Ur1
        , D4Ur2
        , D4Ur3
        , D4Ur4
        , D4Po1
        , D4Po2
        , D4Po3
        , D4Po4
      );
      
      -- 3 OBTENEMOS ULTIMO DPOID INGRESADO
      SET @id = (SELECT CS4ID FROM CATALOGO_SLIDER4 ORDER BY CS4ID DESC LIMIT 1);   
      
      SELECT @id;
    
    ELSE -- EL REGISTRO EXISTE  
-- SELECT * FROM PRODUCTO
      -- 1 ACTUALIZAR EL REGISTRO
        UPDATE CATALOGO_SLIDER4 
        SET cs4GD1 = D41GD
        , cs4GD2 = D42GD
        , cs4GD3 = D43GD
        , cs4GD4 = D44GD
        , cs4B1 = D4B1
        , cs4B2 = D4B2
        , cs4URL1 = D4Ur1
        , cs4URL2 = D4Ur2
        , cs4URL3 = D4Ur3
        , cs4URL4 = D4Ur4
        , cs4Po1 = D4Po1
        , cs4Po2 = D4Po2
        , cs4Po3 = D4Po3
        , cs4Po4 = D4Po4
        WHERE CS4ID=D4id;
        
      SELECT D4id;
      
    END IF;
      
END;
