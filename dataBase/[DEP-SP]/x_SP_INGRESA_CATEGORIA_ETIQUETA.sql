
-- CALL SP_INGRESA_CATEGORIA_ETIQUETA('13661574','PEO');
-- CALL SP_INGRESA_CATEGORIA_ETIQUETA('13661574','FITNESS');
-- CALL SP_INGRESA_CATEGORIA_ETIQUETA('13661574','fitness');
-- CALL SP_INGRESA_CATEGORIA_ETIQUETA('13661574','OTRA');
   
-- SELECT * FROM PROFESIONAL
-- SELECT * FROM CATEGORIA_ETIQUETA

DROP PROCEDURE IF EXISTS bodyflex.SP_INGRESA_CATEGORIA_ETIQUETA;
CREATE PROCEDURE bodyflex.`SP_INGRESA_CATEGORIA_ETIQUETA`( 
                                                                IN rut VARCHAR(20)
                                                              , IN cat VARCHAR(50)
                                                            )
BEGIN

    -- 1 DETERMINAR EXISTENCIA DEL REGISTRO
    IF NOT EXISTS(SELECT CATETINOM FROM CATEGORIA_ETIQUETA WHERE CATETINOM=upper(cat)) THEN

      -- 2 INSERTAMOS REGISTRO
      
      INSERT INTO CATEGORIA_ETIQUETA(
        PRUT
      , CATETINOM
      )VALUES(
        rut
        , UPPER(cat)
      );
      
      
      SELECT 1;
    
      -- select 0;
    
    ELSE -- EL REGISTRO EXISTE  
      SELECT 8;      
    END IF;
      
END;
