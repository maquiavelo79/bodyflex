
-- CALL SP_INGRESA_PUBLICACION_REFERENCIA(32, 'LIBRO', 'EL NOMBRE DEL LIBRO', 'DESCRIPCION DEL LIBRO', 0);
-- CALL SP_INGRESA_PUBLICACION_REFERENCIA(32, 'LIBRO', 'XXXXXXXXXXXXXXXXX', 'YYYYYYYYYYYYYYYY', 1);

-- select * from publicacion
-- select * from referencia
-- select * from publicacion_referencia 




DROP PROCEDURE IF EXISTS bodyflex.SP_INGRESA_PUBLICACION_REFERENCIA;
CREATE PROCEDURE bodyflex.`SP_INGRESA_PUBLICACION_REFERENCIA`( 
                                                    IN puId VARCHAR(100) ,
                                                    IN tipRef VARCHAR(100) ,
                                                    IN ref VARCHAR(100) ,
                                                    IN desRef VARCHAR(200),
                                                    IN idPubRef VARCHAR(100)
                                                  )
BEGIN

  SET @idRef= (SELECT REID FROM referencia WHERE RETIPO=tipRef);
  
  -- select * from PUBLICACION_REFERENCIA;

  -- [RU: INGRESA_USUARIO]
      IF NOT EXISTS(SELECT * FROM PUBLICACION_REFERENCIA WHERE PRID=idPubRef) THEN
        INSERT INTO PUBLICACION_REFERENCIA(
          PUID,
          REID,
          PRNOM,
          PRDES
        )VALUES(
          puId, 
          @idRef,
          ref,
          desRef
        );
        SELECT 1;
      ELSE
        UPDATE PUBLICACION_REFERENCIA
        SET REID=@idRef,
            PRNOM=ref,
            PRDES=desRef
        WHERE PRID=idPubRef;    
        SELECT 2;
      END IF;
END;
