
 -- CALL SP_CP_ADM_ELI_COL_PRO(3, @codErr);
 -- SELECT @codErr;

-- SELECT * FROM COLECCION_PRODUCTO

DROP PROCEDURE IF EXISTS bodyflex.SP_CP_ADM_ELI_COL_PRO;
CREATE PROCEDURE bodyflex.`SP_CP_ADM_ELI_COL_PRO`( 
                                                IN idCol VARCHAR(10)
                                                , IN idPro VARCHAR(10)  
                                                , OUT codErr INTEGER
                                              )
BEGIN

-- DECLARE EXIT HANDLER FOR SQLEXCEPTION SET codErr=99;

  SET codErr=0;
  DELETE FROM COLECCION_PRODUCTO WHERE COID=idCol AND PROID=idPro;
          
END;
