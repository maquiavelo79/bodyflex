
-- CALL SP_CP_ADM_ING_COL_PRO(0,1,4,@codErr);
-- SELECT @codErr;

-- select * from producto
-- select * from COLECCION
-- select * from COLECCION_PRODUCTO

DROP PROCEDURE IF EXISTS bodyflex.SP_CP_ADM_ING_COL_PRO;
CREATE PROCEDURE bodyflex.`SP_CP_ADM_ING_COL_PRO`(
                                                IN idPrId VARCHAR(10)
                                                , IN idCol VARCHAR(10)
                                                , IN idPro VARCHAR(10)
                                                , OUT codErr INTEGER
                                              )
BEGIN

-- DECLARE EXIT HANDLER FOR SQLEXCEPTION SET codErr=99;

SET codErr=0;

    IF NOT EXISTS(SELECT * FROM COLECCION_PRODUCTO WHERE CPRID=idPrId) THEN
  -- SELECT * FROM PRODUCTO
      -- 2 INSERTAMOS REGISTRO
      INSERT INTO COLECCION_PRODUCTO(
        COID
        , PROID
      )VALUES(
        idCol
        , idPro
      );
      
      -- 3 OBTENEMOS ULTIMO DPOID INGRESADO
      SET @id = (SELECT CPRID FROM COLECCION_PRODUCTO ORDER BY CPRID DESC LIMIT 1);   
      
      SELECT @id;
    
    ELSE -- EL REGISTRO EXISTE  
-- SELECT * FROM PRODUCTO
      -- 1 ACTUALIZAR EL REGISTRO
        UPDATE COLECCION_PRODUCTO 
        SET COID=idCol
        , PROID = idPro
        WHERE CPRID=idPrId;
        
      SELECT idPrId;
      
    END IF;
      
END;
