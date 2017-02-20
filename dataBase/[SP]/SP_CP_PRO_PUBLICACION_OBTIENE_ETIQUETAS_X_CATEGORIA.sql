-- CALL SP_PUBLICACION_OBTIENE_ETIQUETAS_X_CATEGORIA('','');
-- CALL SP_PUBLICACION_OBTIENE_ETIQUETAS_X_CATEGORIA('CATEGORIA1');
-- CALL SP_PUBLICACION_OBTIENE_ETIQUETAS_X_CATEGORIA('CATEGORIA2');
-- CALL SP_PUBLICACION_OBTIENE_ETIQUETAS_X_CATEGORIA('CATEGORIA3');
-- CALL SP_PUBLICACION_OBTIENE_ETIQUETAS_X_CATEGORIA('CATEGORIA4');
-- CALL SP_PUBLICACION_OBTIENE_ETIQUETAS_X_CATEGORIA('CATEGORIA5');

-- CALL SP_PUBLICACION_CONSULTA_ETIQUETA('A','XXX');
-- SELECT * FROM PROFESIONAL;
-- SELECT * FROM PUBLICACION_LIST_ETIQUETAS;
-- SELECT * FROM ETIQUETA;

DROP PROCEDURE IF EXISTS delta.SP_CP_PRO_PUBLICACION_OBTIENE_ETIQUETAS_X_CATEGORIA;
CREATE PROCEDURE delta.`SP_CP_PRO_PUBLICACION_OBTIENE_ETIQUETAS_X_CATEGORIA`(
                                                  IN categ VARCHAR(50)
                                                  , OUT codErr INTEGER
                                                )
BEGIN

  DECLARE EXIT HANDLER FOR SQLEXCEPTION SET codErr=99;
  SET codErr=99;
  SET @CANT=(SELECT count(*) FROM PUBLICACION_LIST_ETIQUETAS);
  IF(@CANT>0)THEN
    IF EXISTS(SELECT * FROM PUBLICACION_LIST_ETIQUETAS WHERE CATETINOM=categ) THEN
      SELECT CONCAT(CATETINOM, '|', ETNOM) AS CATEGORIA_ETIQUETA
      FROM PUBLICACION_LIST_ETIQUETAS
      WHERE CATETINOM = categ
      ORDER BY ETNOM ASC;  
    ELSE
      SET codErr=97; -- CATEGORIA SIN ETIQUETAS ASOCIADAS
    END IF;
  ELSE
    SET codErr=98;
  END IF;
  
END

-- select * from PUBLICACION_LIST_ETIQUETAS


