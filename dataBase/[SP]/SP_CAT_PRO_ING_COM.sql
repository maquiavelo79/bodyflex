

-- SELECT * FROM PRODUCTO_COMENTARIO_PROFESIONAL;

DROP PROCEDURE IF EXISTS bodyflex.SP_CAT_PRO_ING_COM;
CREATE PROCEDURE bodyflex.`SP_CAT_PRO_ING_COM`(
                                                IN tit VARCHAR(100)
                                                , IN com VARCHAR(350)
                                                , IN pts VARCHAR(5)
                                                , IN rut VARCHAR(10)
                                                , IN idPro VARCHAR(10)
                                                , OUT codErr INTEGER
                                               )
BEGIN
  
  DECLARE EXIT HANDLER FOR SQLEXCEPTION SET codErr=99;
  SET codErr=0;
  INSERT INTO PRODUCTO_COMENTARIO_PROFESIONAL(PROID, PRUT, PCOPTI, PCOPDE, PCOPFE, PCOPPU) VALUES (idPro, rut, tit, com, now(), pts);
    
END




