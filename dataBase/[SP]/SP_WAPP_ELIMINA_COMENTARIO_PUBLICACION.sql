
-- SELECT * FROM COMENTARIO_PUBLICACION;
-- CALL SP_AGREGA_COMENTARIO_PUBLICACION('35', 'Francisco', 'Calderon', 'a@a.cl', 'un comentario aqui');


DROP PROCEDURE IF EXISTS bodyflex.SP_WAPP_ELIMINA_COMENTARIO_PUBLICACION;
CREATE PROCEDURE bodyflex.`SP_WAPP_ELIMINA_COMENTARIO_PUBLICACION`( 
                                                  IN id VARCHAR(100)
                                                  , OUT codErr INTEGER  
                                                )
BEGIN
DECLARE EXIT HANDLER FOR SQLEXCEPTION SET codErr=99;

  SET codErr=0;
  DELETE FROM PUBLICACION_COMENTARIO WHERE CPID=id;
  SELECT 1;

END;
