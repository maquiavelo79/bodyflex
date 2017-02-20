
-- CALL SP_CP_PRO_PUBLICACION_INGRESA_ETIQUETA('13661574','CATEGORIA1','ETI1_CAT1');
-- SELECT * FROM PUBLICACION_ETIQUETA
-- SELECT * FROM ETIQUETA
-- SELECT * FROM PUBLICACION_LIST_ETIQUETAS


DROP PROCEDURE IF EXISTS bodyflex.SP_CP_ADM_PUBLICACION_INGRESA_ETIQUETA;
CREATE PROCEDURE bodyflex.`SP_CP_ADM_PUBLICACION_INGRESA_ETIQUETA`( 
                                                                IN rut VARCHAR(10)
                                                              , IN cat VARCHAR(50)
                                                              , IN eti VARCHAR(50)
                                                              , OUT codErr INTEGER
                                                            )
BEGIN
DECLARE EXIT HANDLER FOR SQLEXCEPTION SET codErr=99;
  
  IF NOT EXISTS(SELECT * FROM PUBLICACION_LIST_ETIQUETAS WHERE CATETINOM=cat AND ETNOM=eti) THEN
      INSERT INTO PUBLICACION_LIST_ETIQUETAS(
        ETRUT
        , CATETINOM
        , ETNOM
      )VALUES(
        rut
        , cat
        , eti
      );
      SELECT 1;
  ELSE
    SET codErr=98; -- ETIQUETA YA EXISTE
  END IF;    
  
END;
