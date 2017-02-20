
CALL SP_CP_ADM_ACT_MTO_BFX(77,4500,855,3645,450,3195,@codErr);
SELECT @codErr;

-- select * from producto
-- select * from profesional_producto_categoria1

DROP PROCEDURE IF EXISTS bodyflex.SP_CP_ADM_ACT_MTO_BFX;
CREATE PROCEDURE bodyflex.`SP_CP_ADM_ACT_MTO_BFX`( 
                                                    IN id VARCHAR(20)
                                                  , IN precio VARCHAR(20)
                                                  , IN iva VARCHAR(100)
                                                  , IN neto VARCHAR(20)
                                                  , IN tbk VARCHAR(100)
                                                  , IN utilidad VARCHAR(10)
                                                  , OUT codErr INTEGER
                                                  )
BEGIN

-- DECLARE EXIT HANDLER FOR SQLEXCEPTION SET codErr=99;

SET codErr=0;

    IF EXISTS(SELECT * FROM PRODUCTO WHERE proID=id) THEN
        
        UPDATE PRODUCTO 
        SET PROPV = precio
        , PROIV = iva
        , PROPN = neto
        , PROCT = tbk
        , PROUT3 = utilidad
        WHERE PROID=id;
        
        -- INDICADOR DE ACTUALIZACIÓN
        SET codErr=1;    
    ELSE -- EL REGISTRO EXISTE  
      SET codErr=98;    
    END IF;
      
END;
