CALL SP_CAT_PRO_GET_IMG(35, @codErr);
SELECT @codErr;

-- SELECT * FROM PRODUCTO_CONTENIDO;

DROP PROCEDURE IF EXISTS bodyflex.SP_CAT_PRO_GET_IMG;
CREATE PROCEDURE bodyflex.`SP_CAT_PRO_GET_IMG`(
                                                IN idPro VARCHAR(10)
                                                , OUT codErr INTEGER
                                               )
BEGIN
  
  DECLARE EXIT HANDLER FOR SQLEXCEPTION SET codErr=99;
  SET codErr=0;
  SET @URL_DRIVE=(SELECT PARVAL FROM PARAMETROS WHERE PARNOM='DRIVE');

  SELECT PCO_DRI, @URL_DRIVE, PCO_PRI
  FROM PRODUCTO_CONTENIDO
  WHERE PROID=idPro AND PCO_TIP='IMAGEN'
  ORDER BY PCO_ID ASC; 
  
END




