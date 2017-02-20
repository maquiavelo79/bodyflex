
-- SELECT * FROM PRODUCTO_COLOR;

DROP PROCEDURE IF EXISTS bodyflex.SP_CP_ADM_ING_COLOR_PRO;
CREATE PROCEDURE bodyflex.`SP_CP_ADM_ING_COLOR_PRO`( 
                                                    IN vcodCol VARCHAR(20)
                                                  , IN vcolor VARCHAR(20)
                                                  , IN vback VARCHAR(20)
                                                  , IN vproId VARCHAR(20)
                                                  , OUT codErr INTEGER
                                                  )
BEGIN

-- DECLARE EXIT HANDLER FOR SQLEXCEPTION SET codErr=99;
SET codErr=0;
   
    -- 1 DETERMINAR EXISTENCIA DEL REGISTRO
    IF NOT EXISTS(SELECT * FROM PRODUCTO_COLOR WHERE PROID=vproId AND PCON=vcolor) THEN

      -- 2 INSERTAMOS REGISTRO
      INSERT INTO PRODUCTO_COLOR(
        PROID
        , PCON
        , PCOB
       )VALUES(
        vproId
        , vcolor
        , vback
      );
      
      -- 3 OBTENEMOS ULTIMO DPOID INGRESADO
      SET @PCOID = (SELECT PCOID FROM PRODUCTO_COLOR ORDER BY PCOID DESC LIMIT 1);       
            
      SELECT @PCOID, 1;
                
    ELSE -- EL REGISTRO EXISTE  
    
        IF EXISTS(SELECT * FROM PRODUCTO_COLOR WHERE PCOID=vcodCol)THEN
          UPDATE PRODUCTO_COLOR 
          SET PCON=vcolor
          , PROID = vproId
          , PCOB = vback
          WHERE pCoId=vcodCol;
      
          SELECT vcodCol, 2;
        
        ELSE
          SET codErr=97;
        END IF;  
    END IF;

END;
