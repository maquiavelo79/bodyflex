-- SELECT * FROM PRODUCTO

-- CALL SP_CP_PRO_CSU_NOM_PRO('a',@codErr);
-- SELECT @codErr AS corErr;

DROP PROCEDURE IF EXISTS bodyflex.SP_CP_PRO_CSU_NOM_PRO ;
CREATE PROCEDURE bodyflex.`SP_CP_PRO_CSU_NOM_PRO`(
                                                    IN nombre VARCHAR(100)
                                                    , OUT codErr INTEGER
                                                 )
BEGIN

  SET @s='%';
  SELECT PRONO, PROID FROM PRODUCTO WHERE PRONO LIKE CONCAT(@s, nombre, @s );
    
END




