
-- CALL SP_INGRESA_ETIQUETA('13661574','A','PPpp');
-- CALL SP_INGRESA_ETIQUETA('13661574','A','FITNESS');
-- CALL SP_INGRESA_ETIQUETA('13661574','A','fitness');
-- CALL SP_INGRESA_ETIQUETA('13661574','A','OTRA');
   
-- SELECT * FROM PROFESIONAL
-- SELECT * FROM CATEGORIA_ETIQUETA
-- SELECT * FROM ETIQUETA

DROP PROCEDURE IF EXISTS bodyflex.SP_INGRESA_ETIQUETA;
CREATE PROCEDURE bodyflex.`SP_INGRESA_ETIQUETA`( 
                                                    IN rut VARCHAR(20)
                                                  , IN cat VARCHAR(50)
                                                  , IN eti VARCHAR(50)
                                                )
BEGIN

    -- 1 DETERMINAR EXISTENCIA DEL REGISTRO
    IF NOT EXISTS(SELECT ETNOM FROM ETIQUETA WHERE ETNOM=upper(eti)) THEN

      INSERT INTO ETIQUETA(
        ETNOM
      , CATETINOM
      , PRUT
      )VALUES(
        UPPER(eti)
        , UPPER(cat)
        , rut
      );
      
      SELECT 1;

    ELSE -- ETIQUETA YA EXISTE  
      SELECT 8;      
    END IF;
      
END;
