
-- CALL SP_CP_ADM_ING_MOD_SLI_CAT2('12','NUEVO','wwwwwwwwwwwww','2222222','wwwwwwwwwwwww','2','0','0','wwwwwwwwwwwww','9386703');
-- select * from CATALOGO_SLIDER7

DROP PROCEDURE IF EXISTS bodyflex.SP_CP_ADM_ING_MOD_SLI_CAT7;
CREATE PROCEDURE bodyflex.`SP_CP_ADM_ING_MOD_SLI_CAT7`( 
                                                        IN D7Id VARCHAR(10)
                                                        , IN D7Tit VARCHAR(30)
                                                        , IN D7B1 VARCHAR(20)
                                                        , IN D7Tex VARCHAR(150)
                                                        , IN D7GD VARCHAR(50)
                                                        , IN D7Ur1 VARCHAR(200)
                                                        , IN D7Col VARCHAR(10)
                                                        , OUT codErr INTEGER
                                                      )
BEGIN

-- DECLARE EXIT HANDLER FOR SQLEXCEPTION SET codErr=99;

SET codErr=0;

    IF NOT EXISTS(SELECT * FROM CATALOGO_SLIDER7 WHERE CS7ID=D7id) THEN
  -- SELECT * FROM PRODUCTO
      -- 2 INSERTAMOS REGISTRO
      INSERT INTO CATALOGO_SLIDER7(
        cs7Ti
        , cs7B1
        , cs7De
        , cs7GD
        , cs7URL
        , cs7Po
      )VALUES(
        D7Tit        
        , D7B1
        , D7Tex
        , D7GD
        , D7Ur1
        , D7Col
      );
      
      -- 3 OBTENEMOS ULTIMO DPOID INGRESADO
      SET @id = (SELECT CS7ID FROM CATALOGO_SLIDER7 ORDER BY CS7ID DESC LIMIT 1);   
      
      SELECT @id;
    
    ELSE -- EL REGISTRO EXISTE  
-- SELECT * FROM PRODUCTO
      -- 1 ACTUALIZAR EL REGISTRO
        UPDATE CATALOGO_SLIDER7
        SET cs7Ti = D7Tit
        , cs7B1 = D7B1
        , cs7De = D7Tex
        , cs7GD = D7GD
        , cs7URL = D7Ur1
        , cs7Po = D7Col
        WHERE cs7Id=D7Id;
        
      SELECT D7id;
      
    END IF;
      
END;
