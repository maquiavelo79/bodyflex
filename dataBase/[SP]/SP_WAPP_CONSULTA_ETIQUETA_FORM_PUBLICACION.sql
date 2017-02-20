
-- CALL SP_WAPP_CONSULTA_ETIQUETA_FORM_PUBLICACION('?');
-- select * from 


DROP PROCEDURE IF EXISTS delta.SP_WAPP_CONSULTA_ETIQUETA_FORM_PUBLICACION;
CREATE PROCEDURE delta.`SP_WAPP_CONSULTA_ETIQUETA_FORM_PUBLICACION`(
                                                                        IN keyWord VARCHAR(500)
                                                                        , OUT codErr INTEGER
                                                                      )
BEGIN

  DECLARE EXIT HANDLER FOR SQLEXCEPTION SET codErr=99;
  SET codErr=0;
  IF EXISTS(SELECT DISTINCT ETNOM FROM PUBLICACION_ETIQUETA WHERE ETNOM LIKE CONCAT('%',keyWord,'%')) THEN 
    SELECT DISTINCT ETNOM
    FROM PUBLICACION_ETIQUETA
    WHERE ETNOM LIKE CONCAT('%',keyWord,'%')
    ORDER BY ETNOM ASC;
  ELSE
    -- SELECT 98, keyWord;
    SET codErr=98;
  END IF;

END;
