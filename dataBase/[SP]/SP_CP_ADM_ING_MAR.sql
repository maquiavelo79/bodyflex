

-- select * from COLECCION

DROP PROCEDURE IF EXISTS bodyflex.SP_CP_ADM_ING_MAR;
CREATE PROCEDURE bodyflex.`SP_CP_ADM_ING_MAR`( 
                                                IN vId VARCHAR(10)
                                                , IN vNom VARCHAR(50)
                                                , IN vGD1 VARCHAR(50)
                                                , OUT codErr INTEGER
                                              )
BEGIN

-- DECLARE EXIT HANDLER FOR SQLEXCEPTION SET codErr=99;

SET codErr=0;

    IF NOT EXISTS(SELECT * FROM MARCAS WHERE MARID=vId) THEN
  -- SELECT * FROM PRODUCTO
      -- 2 INSERTAMOS REGISTRO
      INSERT INTO MARCAS(
        MARNOM
        , MARGD
      )VALUES(
        vNom        
        , vGD1
      );
      
      -- 3 OBTENEMOS ULTIMO DPOID INGRESADO
      SET @id = (SELECT MARID FROM MARCAS ORDER BY MARID DESC LIMIT 1);   
      
      SELECT @id;
    
    ELSE -- EL REGISTRO EXISTE  
-- SELECT * FROM PRODUCTO
      -- 1 ACTUALIZAR EL REGISTRO
        UPDATE MARCAS 
        SET MARNOM = vNom
        , MARGD = vGD1
        WHERE MARID=vId;
        
      SELECT vId;
      
    END IF;
      
END;
