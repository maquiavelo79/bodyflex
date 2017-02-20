
-- CALL SP_WAPP_AGREGA_VOTACION_PUBLICACION('109', 'fjcalderon@uc.cl', 1, 0);
-- CALL SP_WAPP_AGREGA_VOTACION_PUBLICACION('109', 'fjcalderon@uc.cl', 0, 1);
-- SELECT * FROM PUBLICACION_VOTACION


DROP PROCEDURE IF EXISTS bodyflex.SP_WAPP_AGREGA_VOTACION_PUBLICACION;
CREATE PROCEDURE bodyflex.`SP_WAPP_AGREGA_VOTACION_PUBLICACION`( 
                                                    IN pu VARCHAR(20)
                                                  , IN em VARCHAR(100)
                                                  , IN li INTEGER -- LO QUE APRETÓ EL USUARIO, NO PUEDEN SER AMBOS
                                                  , IN ul INTEGER -- LO QUE APRETÓ EL USUARIO, NO PUEDEN SER AMBOS
                                                  , OUT codErr INTEGER
                                                )
BEGIN
DECLARE EXIT HANDLER FOR SQLEXCEPTION SET codErr=99;
SET codErr=0;

  IF NOT EXISTS(SELECT * FROM PUBLICACION_VOTACION WHERE PUID=pu AND VMA=em) THEN
    IF (li=1) THEN
      INSERT INTO PUBLICACION_VOTACION(PUID, VLI, VUL, VMA, VFE) VALUES (pu, 1, 0, em, now());
      SET @SW=2;
    ELSE
      INSERT INTO PUBLICACION_VOTACION(PUID, VLI, VUL, VMA, VFE) VALUES (pu, 0, 1, em, now());
      SET @SW=4;
    END IF;
    
  ELSE
    
    SET @LI=(SELECT VLI FROM PUBLICACION_VOTACION WHERE PUID=pu AND VMA=em);
    SET @UL=(SELECT VUL FROM PUBLICACION_VOTACION WHERE PUID=pu AND VMA=em);
    SET @SW=0;
    
    IF(li=1 AND @LI=1)THEN -- VLI = SE SETEA EN CERO
      DELETE FROM PUBLICACION_VOTACION WHERE PUID=pu AND VMA=em;
      INSERT INTO PUBLICACION_VOTACION(PUID, VLI, VUL, VMA, VFE) VALUES (pu, 0, 0, em, now());
      SET @SW=1;
    ELSE
      IF(li=1 AND @LI=0)THEN
        DELETE FROM PUBLICACION_VOTACION WHERE PUID=pu AND VMA=em;
        INSERT INTO PUBLICACION_VOTACION(PUID, VLI, VUL, VMA, VFE) VALUES (pu, 1, 0, em, now());
        SET @SW=2;
      END IF;
      IF(@SW=0)THEN
        IF(ul=1 AND @UL=1)THEN
          DELETE FROM PUBLICACION_VOTACION WHERE PUID=pu AND VMA=em;
          INSERT INTO PUBLICACION_VOTACION(PUID, VLI, VUL, VMA, VFE) VALUES (pu, 0, 0, em, now());
          SET @SW=3;
        END IF;
      END IF;
      IF(@SW=0)THEN
        IF(ul=1 AND @UL=0)THEN
          DELETE FROM PUBLICACION_VOTACION WHERE PUID=pu AND VMA=em;
          INSERT INTO PUBLICACION_VOTACION(PUID, VLI, VUL, VMA, VFE) VALUES (pu, 0, 1, em, now());
          SET @SW=4;
        END IF;
      END IF;
    END IF;
  END IF;

  SELECT @SW;

END;
