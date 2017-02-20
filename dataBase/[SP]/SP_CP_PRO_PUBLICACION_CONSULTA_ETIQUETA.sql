-- CALL SP_CP_PRO_PUBLICACION_CONSULTA_ETIQUETA('','');
-- CALL SP_CP_PRO_PUBLICACION_CONSULTA_ETIQUETA('CATEGORIA1','');
-- CALL SP_CP_PRO_PUBLICACION_CONSULTA_ETIQUETA('CATEGORIA2','');
-- CALL SP_CP_PRO_PUBLICACION_CONSULTA_ETIQUETA('CATEGORIA3','');
-- CALL SP_CP_PRO_PUBLICACION_CONSULTA_ETIQUETA('CATEGORIA4','');
-- CALL SP_CP_PRO_PUBLICACION_CONSULTA_ETIQUETA('CATEGORIA5','');

-- CALL SP_CP_PRO_PUBLICACION_CONSULTA_ETIQUETA('A','XXX');
-- SELECT * FROM PROFESIONAL;
-- SELECT * FROM PUBLICACION_LIST_ETIQUETAS;
-- SELECT * FROM ETIQUETA;

DROP PROCEDURE IF EXISTS delta.SP_CP_PRO_PUBLICACION_CONSULTA_ETIQUETA;
CREATE PROCEDURE delta.`SP_CP_PRO_PUBLICACION_CONSULTA_ETIQUETA`(
                                                  IN categ VARCHAR(50)
                                                  , IN query VARCHAR(50)
                                                  , OUT codErr INTEGER
                                                 )
BEGIN

  DECLARE EXIT HANDLER FOR SQLEXCEPTION SET codErr=99;
  SET codErr=0;
  SET @CANT=(SELECT count(*) FROM PUBLICACION_LIST_ETIQUETAS);
  IF(@CANT>0)THEN
    IF(LENGTH(query)>0)THEN
      IF EXISTS(SELECT * FROM PUBLICACION_LIST_ETIQUETAS WHERE ETNOM LIKE CONCAT('%', query ,'%') AND CATETINOM=categ) THEN
        SELECT ETNOM
        FROM PUBLICACION_LIST_ETIQUETAS
        WHERE ETNOM LIKE CONCAT('%', query ,'%') AND CATETINOM = categ
        ORDER BY ETNOM ASC;
      ELSE
        SET codErr=96; -- SIN COINCIDENCIAS
      END IF;
    ELSE
      IF EXISTS(SELECT * FROM PUBLICACION_LIST_ETIQUETAS WHERE CATETINOM=categ) THEN
        SELECT ETNOM
        FROM PUBLICACION_LIST_ETIQUETAS
        WHERE CATETINOM = categ
        ORDER BY ETNOM ASC;  
      ELSE
        SET codErr=97; -- CATEGORIA SIN ETIQUETAS ASOCIADAS
      END IF;
    END IF;
  ELSE
    SET codErr=98;
  END IF;
  
END

-- select * from PUBLICACION_LIST_ETIQUETAS


