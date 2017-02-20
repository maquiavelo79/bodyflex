
-- SELECT * FROM PRODUCTO_MEDIDA;

-- SELECT * FROM PRODUCTO_MEDIDA WHERE PROID=7 AND MEDID=3;
-- CALL SP_CP_ADM_ING_MED_PRO(0, 3, 7, @codErr);
-- SELECT @codErr;

DROP PROCEDURE IF EXISTS bodyflex.SP_CP_ADM_ING_MED_PRO;
CREATE PROCEDURE bodyflex.`SP_CP_ADM_ING_MED_PRO`( 
                                                    IN vcodMed VARCHAR(10)
                                                  , IN vmedida VARCHAR(10)
                                                  , IN vproId VARCHAR(10)
                                                  , OUT codErr INTEGER
                                                  )
BEGIN

-- DECLARE EXIT HANDLER FOR SQLEXCEPTION SET codErr=99;
SET codErr=0;
   
    -- 1 DETERMINAR EXISTENCIA DEL REGISTRO
    IF NOT EXISTS(SELECT * FROM PRODUCTO_MEDIDA WHERE PROID=vproId AND MEDID=vmedida) THEN

      -- 2 INSERTAMOS REGISTRO
      INSERT INTO PRODUCTO_MEDIDA(
        MEDID
        , PROID
       )VALUES(
        vmedida
        , vproId
      );
      
      -- 3 OBTENEMOS ULTIMO DPOID INGRESADO
      SET @PMID = (SELECT PMID FROM PRODUCTO_MEDIDA ORDER BY PMID DESC LIMIT 1);       
            
      SELECT @PMID, 1;
                
    ELSE -- EL REGISTRO EXISTE  
    
        IF EXISTS(SELECT * FROM PRODUCTO_MEDIDA WHERE PMID=vcodMed)THEN
          UPDATE PRODUCTO_MEDIDA 
          SET MEDID=vmedida
          , PROID = vproId
          WHERE pMId=vCodMed;
      
          SELECT vCodMed, 2;
        
        ELSE
          SET codErr=97;
        END IF;  
    END IF;

END;
