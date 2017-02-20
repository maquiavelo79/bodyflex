
-- CALL SP_CP_PRO_PUBLICACION_ELIMINA_CONTENIDO(33,8);

DROP PROCEDURE IF EXISTS delta.SP_CP_PRO_PUBLICACION_ELIMINA_CONTENIDO;
CREATE PROCEDURE delta.`SP_CP_PRO_PUBLICACION_ELIMINA_CONTENIDO`(
                                                            IN puId VARCHAR(20),
                                                            IN conId INTEGER,
                                                            OUT codErr INTEGER
                                                          )
BEGIN
DECLARE EXIT HANDLER FOR SQLEXCEPTION SET codErr=99;
SET codErr=0;
  SET @siguiente = (SELECT IDCONT FROM PUBLICACION_CONTENIDO WHERE IDCONT<>conId ORDER BY IDCONT DESC LIMIT 1);
  
    DELETE FROM PUBLICACION_CONTENIDO WHERE PUID=puId AND idCont=conId;
    UPDATE PUBLICACION_CONTENIDO SET PRICONT=1 WHERE IDCONT=@siguiente;
    SELECT 1;
  
END;

-- SELECT * FROM PUBLICACION_REFERENCIA WHERE PUID=33;

