
CALL SP_CP_ADM_ASO_COL_PRO(33,5,@codErr);
SELECT @codErr;

-- select * from producto
-- select * from COLECCION
-- select * from COLECCION_PRODUCTO

DROP PROCEDURE IF EXISTS bodyflex.SP_CP_ADM_ASO_COL_PRO;
CREATE PROCEDURE bodyflex.`SP_CP_ADM_ASO_COL_PRO`( 
                                                    IN id VARCHAR(10)
                                                    , IN col VARCHAR(10)
                                                    , OUT codErr INTEGER
                                                  )
BEGIN

-- DECLARE EXIT HANDLER FOR SQLEXCEPTION SET codErr=99;

  SET codErr=0;
  
  IF NOT EXISTS(SELECT * FROM COLECCION_PRODUCTO WHERE COID=col AND PROID=id) THEN
    INSERT INTO COLECCION_PRODUCTO(
      COID
      , PROID
    )VALUES(
      col   
      , id
    );
    
    -- 3 OBTENEMOS ULTIMO DPOID INGRESADO
    SET @id = (SELECT CPRID FROM COLECCION_PRODUCTO WHERE PROID=id ORDER BY CPRID DESC LIMIT 1);   
    SELECT @id;
  ELSE
    SET codErr=98;
  END IF;       
END;
