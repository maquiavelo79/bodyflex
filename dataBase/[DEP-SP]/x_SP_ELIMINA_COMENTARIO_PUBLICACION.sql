
-- SELECT * FROM COMENTARIO_PUBLICACION;
-- CALL SP_AGREGA_COMENTARIO_PUBLICACION('35', 'Francisco', 'Calderon', 'a@a.cl', 'un comentario aqui');


DROP PROCEDURE IF EXISTS bodyflex.SP_ELIMINA_COMENTARIO_PUBLICACION;
CREATE PROCEDURE bodyflex.`SP_ELIMINA_COMENTARIO_PUBLICACION`( 
                                                    IN id VARCHAR(100)
                                                )
BEGIN
DECLARE EXIT HANDLER FOR SQLEXCEPTION SELECT '99';

  DELETE FROM PUBLICACION_COMENTARIO WHERE CPID=id;
  
  SELECT 1;

END;
