

-- select * from COLECCION

DROP PROCEDURE IF EXISTS bodyflex.SP_CP_ADM_ING_COL;
CREATE PROCEDURE bodyflex.`SP_CP_ADM_ING_COL`( 
                                                IN vId VARCHAR(10)
                                                , IN vNom VARCHAR(50)
                                                , IN vDes VARCHAR(200)
                                                , IN vGD1 VARCHAR(50)
                                                , IN vGD2 VARCHAR(50)
                                                , IN vGD3 VARCHAR(50)
                                                , OUT codErr INTEGER
                                              )
BEGIN

-- DECLARE EXIT HANDLER FOR SQLEXCEPTION SET codErr=99;

SET codErr=0;

    IF NOT EXISTS(SELECT * FROM COLECCION WHERE COID=vId) THEN
  -- SELECT * FROM PRODUCTO
      -- 2 INSERTAMOS REGISTRO
      INSERT INTO COLECCION(
        CONO
        , CODE
        , COGD
        , COGD2
        , COGD3
      )VALUES(
        vNom        
        , vDes
        , vGD1
        , vGD2
        , vGD3
      );
      
      -- 3 OBTENEMOS ULTIMO DPOID INGRESADO
      SET @id = (SELECT COID FROM COLECCION ORDER BY COID DESC LIMIT 1);   
      
      SELECT @id;
    
    ELSE -- EL REGISTRO EXISTE  
-- SELECT * FROM PRODUCTO
      -- 1 ACTUALIZAR EL REGISTRO
        UPDATE COLECCION 
        SET CONO = vNom
        , CODE = vDes
        , COGD = vGD1
        , COGD2 = vGD2
        , COGD3 = vGD3
        WHERE COID=vId;
        
      SELECT vId;
      
    END IF;
      
END;
