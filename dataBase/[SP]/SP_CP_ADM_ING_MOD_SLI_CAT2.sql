
-- CALL SP_CP_ADM_ING_MOD_SLI_CAT2('12','NUEVO','wwwwwwwwwwwww','2222222','wwwwwwwwwwwww','2','0','0','wwwwwwwwwwwww','9386703');
-- select * from CATALOGO_SLIDER2

DROP PROCEDURE IF EXISTS bodyflex.SP_CP_ADM_ING_MOD_SLI_CAT2;
CREATE PROCEDURE bodyflex.`SP_CP_ADM_ING_MOD_SLI_CAT2`( 
                                                        IN D2Id VARCHAR(10)
                                                        , IN D2Tit VARCHAR(30)
                                                        , IN D2Tex VARCHAR(150)
                                                        , IN D2p1 INTEGER
                                                        , IN D21GD VARCHAR(50)
                                                        , IN D22GD VARCHAR(50)
                                                        , IN D2Ur1 VARCHAR(200)
                                                        , IN D2Ur2 VARCHAR(200)
                                                        , IN D2Co VARCHAR(10)
                                                        , IN D2Po VARCHAR(10)
                                                        , OUT codErr INTEGER
                                                      )
BEGIN

-- DECLARE EXIT HANDLER FOR SQLEXCEPTION SET codErr=99;

SET codErr=0;

    IF NOT EXISTS(SELECT * FROM CATALOGO_SLIDER2 WHERE CS2ID=D2Id) THEN
  -- SELECT * FROM PRODUCTO
      -- 2 INSERTAMOS REGISTRO
      INSERT INTO CATALOGO_SLIDER2(
        cs2Ti
        , cs2De
        -- , cs2Pr
        , cs2GD1
        , cs2GD2
        , cs2URL1
        , cs2URL2
        , cs2Co
        , cs2Po
      )VALUES(
        D2Tit   
        , D2Tex
        -- , D2p1
        , D21GD
        , D22GD
        , D2Ur1
        , D2Ur2
        , D2Co
        , D2Po
      );
      
      -- 3 OBTENEMOS ULTIMO DPOID INGRESADO
      SET @id = (SELECT CS2ID FROM CATALOGO_SLIDER2 ORDER BY CS2ID DESC LIMIT 1);   
      
      SELECT @id;
    
    ELSE -- EL REGISTRO EXISTE  
-- SELECT * FROM PRODUCTO
      -- 1 ACTUALIZAR EL REGISTRO
        UPDATE CATALOGO_SLIDER2 
        SET cs2Ti = D2Tit
        , cs2De = D2Tex
        -- , cs2Pr = D2p1
        , cs2GD1 = D21GD
        , cs2GD2 = D22GD
        , cs2URL1 = D2Ur1
        , cs2URL2 = D2Ur2
        , cs2Co = D2Co
        , cs2Po = D2Po
        WHERE CS2ID=D2Id;
        
      SELECT D2Id;
      
    END IF;
      
END;
