
-- CALL SP_ELIMINA_CATEGORIA_ETIQUETA('13661574','PEO');
-- CALL SP_ELIMINA_CATEGORIA_ETIQUETA('13661574','FITNESS');
-- CALL SP_ELIMINA_CATEGORIA_ETIQUETA('13661574','fitness');
-- CALL SP_ELIMINA_CATEGORIA_ETIQUETA('13661574','OTRA');
-- CALL SP_ELIMINA_CATEGORIA_ETIQUETA('13661574','CATEGORIA5');
   
-- SELECT * FROM PROFESIONAL
-- SELECT * FROM CATEGORIA_ETIQUETA
-- SELECT * FROM ETIQUETA
-- SELECT * FROM PUBLICACION_ETIQUETA


DROP PROCEDURE IF EXISTS bodyflex.SP_ELIMINA_CATEGORIA_ETIQUETA;
CREATE PROCEDURE bodyflex.`SP_ELIMINA_CATEGORIA_ETIQUETA`( 
                                                                IN rut VARCHAR(20)
                                                              , IN cat VARCHAR(50)
                                                            )
BEGIN

    -- 1 DETERMINAR EXISTENCIA DEL REGISTRO
    IF EXISTS(SELECT CATETINOM FROM CATEGORIA_ETIQUETA WHERE CATETINOM=upper(cat)) THEN
      IF NOT EXISTS(SELECT CATETINOM FROM PUBLICACION_ETIQUETA WHERE CATETINOM=cat) THEN
          IF EXISTS(SELECT CATETINOM FROM CATEGORIA_ETIQUETA WHERE CATETINOM=upper(cat) AND PRUT=rut) THEN
            DELETE FROM ETIQUETA WHERE CATETINOM=cat;
            DELETE FROM CATEGORIA_ETIQUETA WHERE CATETINOM=cat;
            SELECT 1;
          ELSE
            SELECT 7; -- NO ES POSIBLE ELIMINAR UNA CATEGORÍA DE OTRO USUARIO
          END IF;
      ELSE
        SELECT 6; -- NO ES POSIBLE ELIMINAR UNA CATEGORÍA ASOCIADA A UNA PUBLICACIÓN
      END IF;
    ELSE -- EL REGISTRO NO EXISTE  
      SELECT 8;      
    END IF;
      
END;
