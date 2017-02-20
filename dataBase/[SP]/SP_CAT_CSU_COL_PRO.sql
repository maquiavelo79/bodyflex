CALL SP_CAT_CSU_COL_PRO(7, @codErr);
SELECT @codErr;


DROP PROCEDURE IF EXISTS bodyflex.SP_CAT_CSU_COL_PRO;
CREATE PROCEDURE bodyflex.`SP_CAT_CSU_COL_PRO`(
                                                IN codPro VARCHAR(10)
                                                , OUT codErr INTEGER
                                               )
BEGIN
  
  DECLARE EXIT HANDLER FOR SQLEXCEPTION SET codErr=99;
  SET codErr=0;
  
  IF EXISTS(SELECT * FROM PRODUCTO_COLOR WHERE PROID=codPro )THEN
    SELECT PCON
    , PCOB
    FROM PRODUCTO_COLOR 
    WHERE PROID=codPro 
    ORDER BY PCOID ASC; 
  ELSE
    SET codErr=98;
  END IF;    
END




