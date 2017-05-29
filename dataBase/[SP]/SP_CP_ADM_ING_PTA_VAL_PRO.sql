
CALL SP_CP_ADM_ING_PTA_VAL_PRO(0,'a','a','a','a','a',@codErr);
SELECT @codErr;

-- select * from catalogo_slider1
-- select * from producto
-- select * from profesional_producto_categoria1
-- select * from profesional_producto_categoria2
-- select * from profesional_producto_categoria3

DROP PROCEDURE IF EXISTS bodyflex.SP_CP_ADM_ING_PTA_VAL_PRO;
CREATE PROCEDURE bodyflex.`SP_CP_ADM_ING_PTA_VAL_PRO`( 
                                                        IN pId VARCHAR(10)
                                                        , IN pAcr VARCHAR(50)
                                                        , IN pNom VARCHAR(100)
                                                        , IN pTit VARCHAR(200)
                                                        , IN pDes VARCHAR(1000)
                                                        , IN pGd VARCHAR(50)
                                                        , OUT codErr INTEGER
                                                      )
BEGIN

-- DECLARE EXIT HANDLER FOR SQLEXCEPTION SET codErr=99;

SET codErr=0;

    IF NOT EXISTS(SELECT * FROM PROPUESTA_PROFESIONAL WHERE pprId=pId) THEN
  -- SELECT * FROM PRODUCTO
      -- 2 INSERTAMOS REGISTRO
      INSERT INTO PROPUESTA_PROFESIONAL(
        pprAcro
        , pprNom
        , pprTit
        , pprDes
        , pprGD
        , pprTar
      )VALUES(
        pAcr        
        , pNom
        , pTit
        , pDes
        , pGd
        , 'PROFESIONAL'
      );
      
      -- 3 OBTENEMOS ULTIMO DPOID INGRESADO
      SET @id = (SELECT pprId FROM PROPUESTA_PROFESIONAL ORDER BY pprId DESC LIMIT 1);   
      
      SELECT @id;
    
    ELSE -- EL REGISTRO EXISTE  
-- SELECT * FROM PRODUCTO
      -- 1 ACTUALIZAR EL REGISTRO
        UPDATE PROPUESTA_PROFESIONAL 
        SET pprAcro = pAcr
        , pprNom = pNom
        , pprTit = pTit
        , pprDes = pDes
        , pprGD = pGd
        , pprTar = 'PROFESIONAL'
        WHERE pprId=pId;
        
      SELECT pId;
      
    END IF;
      
END;
