
-- CALL SP_PUBLICACION_ELIMINA_CATEGORIA_ETIQUETA('9386703','CATEGORIA4');
-- CALL SP_PUBLICACION_ELIMINA_CATEGORIA_ETIQUETA('9386703','CATEGORIA3');
-- CALL SP_PUBLICACION_ELIMINA_CATEGORIA_ETIQUETA('9386703','CATEGORIA2');
-- CALL SP_PUBLICACION_ELIMINA_CATEGORIA_ETIQUETA('9386703','CATEGORIA1');

   
-- SELECT * FROM PROFESIONAL
-- SELECT * FROM PUBLICACION_CATEGORIA_ETIQUETA
-- SELECT * FROM ETIQUETA
-- SELECT * FROM PUBLICACION_ETIQUETA


DROP PROCEDURE IF EXISTS bodyflex.SP_CP_PRO_PUBLICACION_ELIMINA_CATEGORIA_ETIQUETA;
CREATE PROCEDURE bodyflex.`SP_CP_PRO_PUBLICACION_ELIMINA_CATEGORIA_ETIQUETA`( 
                                                                IN rut VARCHAR(20)
                                                              , IN cat VARCHAR(50)
                                                              , OUT codErr INTEGER
                                                            )
BEGIN
DECLARE EXIT HANDLER FOR SQLEXCEPTION SET codErr=99;
SET codErr=0;
    -- 1 DETERMINAR EXISTENCIA DEL REGISTRO
    IF EXISTS(SELECT CATETINOM FROM PUBLICACION_CATEGORIA_ETIQUETA WHERE CATETINOM=upper(cat)) THEN
      IF NOT EXISTS(SELECT CATETINOM FROM PUBLICACION_ETIQUETA WHERE CATETINOM=cat) THEN
          IF EXISTS(SELECT CATETINOM FROM PUBLICACION_CATEGORIA_ETIQUETA WHERE CATETINOM=upper(cat) AND CATRUT=rut) THEN
            IF NOT EXISTS(SELECT * FROM PUBLICACION_LIST_ETIQUETAS WHERE CATETINOM=upper(cat) AND ETRUT=rut) THEN
              DELETE FROM PUBLICACION_LIST_ETIQUETAS WHERE CATETINOM=cat;
              DELETE FROM PUBLICACION_CATEGORIA_ETIQUETA WHERE CATETINOM=cat;
              SELECT 1;
            ELSE
              SET codErr=95; -- ES NECESARIO ELIMINAR ETIQUETAS ASOCIADAS ANTES DE ELIMINAR CATEGOR�A
            END IF;
          ELSE
            SET codErr=96; -- NO ES POSIBLE ELIMINAR UNA CATEGOR�A DE OTRO USUARIO
          END IF;
      ELSE
        SET codErr=97; -- NO ES POSIBLE ELIMINAR UNA CATEGOR�A ASOCIADA A UNA PUBLICACI�N
      END IF;
    ELSE -- EL REGISTRO NO EXISTE  
      SET codErr=98;     
    END IF;
      
END;
