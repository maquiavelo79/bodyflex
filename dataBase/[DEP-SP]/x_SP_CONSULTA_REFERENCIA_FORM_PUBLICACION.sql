-- CALL SP_CONSULTA_REFERENCIA_FORM_PUBLICACION('999');
-- CALL SP_CONSULTA_REFERENCIA_FORM_PUBLICACION('LIB');
-- CALL SP_CONSULTA_REFERENCIA_FORM_PUBLICACION('WEB');
-- select * from 


DROP PROCEDURE IF EXISTS bodyflex.SP_CONSULTA_REFERENCIA_FORM_PUBLICACION;
CREATE PROCEDURE bodyflex.`SP_CONSULTA_REFERENCIA_FORM_PUBLICACION`(IN keyWord VARCHAR(500))
BEGIN

  DECLARE EXIT HANDLER FOR SQLEXCEPTION SELECT '99';
  IF EXISTS(SELECT DISTINCT R.RETIPO FROM PUBLICACION_REFERENCIA PR, PUBLICACION_LIST_REFERENCIA R WHERE PR.REID=R.REID AND R.RETIPO LIKE CONCAT('%',keyWord,'%')) THEN
    SELECT DISTINCT R.RETIPO AS TIPO
    FROM PUBLICACION_REFERENCIA PR, PUBLICACION_LIST_REFERENCIA R
    WHERE PR.REID=R.REID AND R.RETIPO LIKE CONCAT('%',keyWord,'%')
    ORDER BY TIPO ASC;
  ELSE
    SELECT 98, keyWord;
  END IF;

END;

-- select * from PUBLICACION_REFERENCIA;
-- select * from PUBLICACION_LIST_REFERENCIA;