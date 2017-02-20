
-- CALL SP_CP_ADM_ING_MOD_SLI_CAT2('12','NUEVO','wwwwwwwwwwwww','2222222','wwwwwwwwwwwww','2','0','0','wwwwwwwwwwwww','9386703');
-- select * from CATALOGO_SLIDER5

DROP PROCEDURE IF EXISTS bodyflex.SP_CP_ADM_ING_MOD_SLI_CAT5;
CREATE PROCEDURE bodyflex.`SP_CP_ADM_ING_MOD_SLI_CAT5`( 
                                                        IN D5Id VARCHAR(10)
                                                        , IN D5Tit VARCHAR(30)
                                                        , IN D5B1 VARCHAR(20)
                                                        , IN D5Tex VARCHAR(150)
                                                        , IN D54GD VARCHAR(50)
                                                        , IN D5Ur1 VARCHAR(200)
                                                        , IN D5Co VARCHAR(10)
                                                        , OUT codErr INTEGER
                                                      )
BEGIN

-- DECLARE EXIT HANDLER FOR SQLEXCEPTION SET codErr=99;

SET codErr=0;

    IF NOT EXISTS(SELECT * FROM CATALOGO_SLIDER5 WHERE CS5ID=D5Id) THEN
  -- SELECT * FROM PRODUCTO
      -- 2 INSERTAMOS REGISTRO
      INSERT INTO CATALOGO_SLIDER5(
        cs5Ti
        , cs5B1
        , cs5De
        , cs5GD
        , cs5URL
        , cs5Co
      )VALUES(
        D5Tit        
        , D5B1
        , D5Tex
        , D54GD
        , D5Ur1
        , D5Co
      );
      
      -- 3 OBTENEMOS ULTIMO DPOID INGRESADO
      SET @id = (SELECT CS5ID FROM CATALOGO_SLIDER5 ORDER BY CS5ID DESC LIMIT 1);   
      
      SELECT @id;
    
    ELSE -- EL REGISTRO EXISTE  
-- SELECT * FROM PRODUCTO
      -- 1 ACTUALIZAR EL REGISTRO
        UPDATE CATALOGO_SLIDER5
        SET cs5Ti = D5Tit
        , cs5B1 = D5B1
        , cs5De = D5Tex
        , cs5GD = D54GD
        , cs5URL = D5Ur1
        , cs5Co = D5Co
        WHERE CS5ID=D5id;
        
      SELECT D5Id;
      
    END IF;
      
END;
