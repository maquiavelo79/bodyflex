
-- CALL SP_CP_PRO_PROFESIONAL_PRODUCTO_ELIMINA_CONTENIDO(33,8);

DROP PROCEDURE IF EXISTS bodyflex.SP_CP_PRO_PROFESIONAL_PRODUCTO_ELIMINA_CONTENIDO;
CREATE PROCEDURE bodyflex.`SP_CP_PRO_PROFESIONAL_PRODUCTO_ELIMINA_CONTENIDO`(
                                                            IN puId VARCHAR(20),
                                                            IN conId INTEGER,
                                                            OUT codErr INTEGER
                                                          )
BEGIN
DECLARE EXIT HANDLER FOR SQLEXCEPTION SET codErr=99;
SET codErr=0;

  SET @siguiente = (SELECT pco_id FROM PROFESIONAL_PRODUCTO_CONTENIDO WHERE pco_id<>conId AND pco_tip ='IMAGEN' ORDER BY pco_id DESC LIMIT 1);
  
  DELETE FROM PROFESIONAL_PRODUCTO_CONTENIDO
  WHERE proPID=puId AND 
        pco_id=conId;
  SELECT 1;     
  
  UPDATE PROFESIONAL_PRODUCTO_CONTENIDO SET pco_pri=1 WHERE pco_id=@siguiente;
  
END;

-- SELECT * FROM PUBLICACION_REFERENCIA WHERE PUID=33;

