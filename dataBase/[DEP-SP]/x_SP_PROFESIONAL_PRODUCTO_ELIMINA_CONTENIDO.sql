
-- CALL SP_PUBLICACION_ELIMINA_REFERENCIA_ASOCIADA(33,8);

DROP PROCEDURE IF EXISTS bodyflex.SP_PROFESIONAL_PRODUCTO_ELIMINA_CONTENIDO;
CREATE PROCEDURE bodyflex.`SP_PROFESIONAL_PRODUCTO_ELIMINA_CONTENIDO`(
                                                            IN puId INTEGER,
                                                            IN conId INTEGER
                                                          )
BEGIN
DECLARE EXIT HANDLER FOR SQLEXCEPTION SELECT '99';

  SET @siguiente = (SELECT pco_id FROM PROFESIONAL_PRODUCTO_CONTENIDO WHERE pco_id<>conId AND pco_tip ='IMAGEN' ORDER BY pco_id DESC LIMIT 1);
  
  DELETE FROM PROFESIONAL_PRODUCTO_CONTENIDO
  WHERE proPID=puId AND 
        pco_id=conId;
  SELECT 1;     
  
  UPDATE PROFESIONAL_PRODUCTO_CONTENIDO SET pco_pri=1 WHERE pco_id=@siguiente;
  
END;

-- SELECT * FROM PUBLICACION_REFERENCIA WHERE PUID=33;

