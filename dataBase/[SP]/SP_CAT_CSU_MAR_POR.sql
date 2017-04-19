CALL SP_CAT_CSU_MAR_POR(@codErr);
SELECT @codErr;

-- SELECT * FROM MARCAS
-- SELECT * FROM PARAMETROS

DROP PROCEDURE IF EXISTS bodyflex.SP_CAT_CSU_MAR_POR;
CREATE PROCEDURE bodyflex.`SP_CAT_CSU_MAR_POR`(OUT codErr INTEGER)
BEGIN
  -- CONSULTA IMAGENES COLECCION PARA PORTADA DE CATALOGO
  DECLARE EXIT HANDLER FOR SQLEXCEPTION SET codErr=99;
  
  SET @GD=(SELECT PARVAL FROM PARAMETROS WHERE PARNOM='DRIVE');
  
  IF EXISTS(SELECT * FROM COLECCION) THEN
  
    SELECT REPLACE(@GD, 'FILEID', MARGD) AS URL
    FROM MARCAS
    ORDER BY MARID DESC;
    
  ELSE
    SET codErr=98;  
  END IF;
 
END




