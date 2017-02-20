
-- CALL SP_WAPP_CONSULTA_PROF_FORM_PUBLICACION('a', @codErr);
-- SELECT @codErr;


-- CALL SP_WAPP_CONSULTA_PROF_FORM_PUBLICACION('A');
-- SELECT * FROM PROFESIONAL

DROP PROCEDURE IF EXISTS delta.SP_WAPP_CONSULTA_PROF_FORM_PUBLICACION;
CREATE PROCEDURE delta.`SP_WAPP_CONSULTA_PROF_FORM_PUBLICACION`(
                                                                      IN keyWord VARCHAR(500)
                                                                      , OUT codErr INTEGER
                                                                   )
BEGIN

  DECLARE EXIT HANDLER FOR SQLEXCEPTION SET codErr=99;
  SET codErr=0;
  IF EXISTS(SELECT * FROM PROFESIONAL WHERE PNOM LIKE CONCAT('%',keyWord,'%') OR PAPE LIKE CONCAT('%',keyWord,'%')) THEN
    
    SELECT CONCAT(UPPER(PNOM),' ',UPPER(PAPE)) AS NOMBRE
    , PRUT
    FROM PROFESIONAL
    WHERE PNOM LIKE CONCAT('%',keyWord,'%') 
    OR PAPE LIKE CONCAT('%',keyWord,'%');
    
  ELSE
     SET codErr=98;
  END IF;
  
END;
