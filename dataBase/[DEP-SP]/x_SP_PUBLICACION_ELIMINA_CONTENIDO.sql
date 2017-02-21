
-- CALL SP_PUBLICACION_ELIMINA_REFERENCIA_ASOCIADA(33,8);

DROP PROCEDURE IF EXISTS bodyflex.SP_PUBLICACION_ELIMINA_CONTENIDO;
CREATE PROCEDURE bodyflex.`SP_PUBLICACION_ELIMINA_CONTENIDO`(
                                                            IN puId INTEGER,
                                                            IN conId INTEGER
                                                          )
BEGIN
DECLARE EXIT HANDLER FOR SQLEXCEPTION SELECT '99';

  SET @siguiente = (SELECT IDCONT FROM PUBLICACION_CONTENIDO WHERE IDCONT<>conId ORDER BY IDCONT DESC LIMIT 1);
  
    DELETE FROM PUBLICACION_CONTENIDO
    WHERE PUID=puId AND 
          idCont=conId;
    SELECT 1;     
    
    UPDATE PUBLICACION_CONTENIDO SET PRICONT=1 WHERE IDCONT=@siguiente;
  
END;

-- SELECT * FROM PUBLICACION_REFERENCIA WHERE PUID=33;
