-- SELECT * FROM PRODUCTO

-- CALL SP_CP_PRO_CSU_MAR_PRO('a',@codErr);
-- SELECT @codErr AS corErr;

DROP PROCEDURE IF EXISTS bodyflex.SP_CP_PRO_CSU_MAR_PRO ;
CREATE PROCEDURE bodyflex.`SP_CP_PRO_CSU_MAR_PRO`(
                                                    IN marca VARCHAR(100)
                                                    , OUT codErr INTEGER
                                                 )
BEGIN

  SET @s='%';
  SELECT DISTINCT PROMA FROM PRODUCTO WHERE PROMA LIKE CONCAT(@s, marca, @s );
    
END




