
-- CALL SP_CP_ADM_ELI_COL_PROD('12','NUEVO','wwwwwwwwwwwww','2222222','wwwwwwwwwwwww','2','0','0','wwwwwwwwwwwww','9386703');
-- select * from COLECCION_PRODUCTO

DROP PROCEDURE IF EXISTS bodyflex.SP_CP_ADM_ELI_COL_PROD;
CREATE PROCEDURE bodyflex.`SP_CP_ADM_ELI_COL_PROD`( 
                                                    IN id VARCHAR(10)
                                                    , IN col VARCHAR(10)
                                                    , OUT codErr INTEGER
                                                  )
BEGIN

-- DECLARE EXIT HANDLER FOR SQLEXCEPTION SET codErr=99;

  SET codErr=0;
  IF EXISTS(SELECT * FROM COLECCION_PRODUCTO WHERE PROID=id AND COID=col)THEN
    DELETE FROM COLECCION_PRODUCTO WHERE PROID=id AND COID=col;
  END IF;         
END;
