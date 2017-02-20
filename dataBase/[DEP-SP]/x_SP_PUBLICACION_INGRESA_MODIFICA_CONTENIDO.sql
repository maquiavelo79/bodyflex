
-- CALL SP_PUBLICACION_INGRESA_MODIFICA_CONTENIDO('69', 'IMAGEN', '0BwscgrEmxbyLb3NIYk1PSDFCMEU', 0);
-- CALL SP_PUBLICACION_INGRESA_MODIFICA_CONTENIDO('69', 'IMAGEN', '0BwscgrEmxbyLZTVONVU2SmVQTGs', 0);
-- CALL SP_PUBLICACION_INGRESA_MODIFICA_CONTENIDO('69', 'IMAGEN', '0BwscgrEmxbyLbklEMWZBZDdkUUU', 0);

-- SELECT * FROM PUBLICACION_CONTENIDO WHERE PUID=69;
-- SELECT * FROM PUBLICACION_CONTENIDO WHERE PUID=69 AND TIPCONT='IMAGEN';
-- SELECT COUNT(*) FROM PUBLICACION_CONTENIDO WHERE PUID=69 AND TIPCONT='IMAGEN';

DROP PROCEDURE IF EXISTS bodyflex.SP_PUBLICACION_INGRESA_MODIFICA_CONTENIDO;
CREATE PROCEDURE bodyflex.`SP_PUBLICACION_INGRESA_MODIFICA_CONTENIDO`( 
                                                    IN pId VARCHAR(100) ,
                                                    IN tipCon VARCHAR(20) ,
                                                    IN url VARCHAR(200) ,
                                                    IN id VARCHAR(100)
                                                  )
BEGIN

  DECLARE EXIT HANDLER FOR SQLEXCEPTION SELECT '99';
  
    SET @principal=0;

    IF NOT EXISTS(SELECT * FROM PUBLICACION_CONTENIDO WHERE IDCONT=id AND PUID=pId) THEN
      
      IF NOT EXISTS(SELECT * FROM PUBLICACION_CONTENIDO WHERE PUID=pId AND TIPCONT='IMAGEN') THEN
        IF tipCon='IMAGEN' THEN
          SET @principal=1;
        END IF;
      END IF;
      
      INSERT INTO PUBLICACION_CONTENIDO(
        PUID,
        URLCONT,
        PRICONT,
        TIPCONT
      )VALUES(
        pId, 
        url,
        @principal,
        tipCon
      );
      
      SELECT 1;
    ELSE
      UPDATE PUBLICACION_CONTENIDO
      SET URLCONT=url,
          TIPCONT=tipCon
      WHERE IDCONT=id;    
      SELECT 2;
    END IF;
      
END;
