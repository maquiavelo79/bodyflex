
-- CALL SP_AGREGA_VOTACION_PUBLICACION('109', 'fjcalderon@uc.cl', 1, 0);
-- CALL SP_AGREGA_VOTACION_PUBLICACION('109', 'fjcalderon@uc.cl', 0, 1);
-- SELECT * FROM PUBLICACION_VOTACION


DROP PROCEDURE IF EXISTS bodyflex.SP_AGREGA_VOTACION_PROFESIONAL;
CREATE PROCEDURE bodyflex.`SP_AGREGA_VOTACION_PROFESIONAL`( 
                                                    IN rut VARCHAR(20)
                                                  , IN em VARCHAR(100)
                                                  , IN li INTEGER -- LO QUE APRETÓ EL USUARIO, NO PUEDEN SER AMBOS
                                                  , IN ul INTEGER -- LO QUE APRETÓ EL USUARIO, NO PUEDEN SER AMBOS
                                                )
BEGIN
DECLARE EXIT HANDLER FOR SQLEXCEPTION SELECT '99';

  IF NOT EXISTS(SELECT * FROM PROFESIONAL_VOTACION WHERE PRUT=rut AND pvoMa=em) THEN
    IF (li=1) THEN
      INSERT INTO PROFESIONAL_VOTACION(PRUT, pvoLi, pvoUn, pvoMa, pvoFe) VALUES (rut, 1, 0, em, now());
      SET @SW=2;
    ELSE
      INSERT INTO PROFESIONAL_VOTACION(PRUT, pvoLi, pvoUn, pvoMa, pvoFe) VALUES (rut, 0, 1, em, now());
      SET @SW=4;
    END IF;
    
  ELSE
    
    SET @LI=(SELECT pvoLi FROM PROFESIONAL_VOTACION WHERE PRUT=rut AND pvoMa=em);
    SET @UL=(SELECT pvoUn FROM PROFESIONAL_VOTACION WHERE PRUT=rut AND pvoMa=em);
    SET @SW=0;
    
    IF(li=1 AND @LI=1)THEN -- VLI = SE SETEA EN CERO
      DELETE FROM PROFESIONAL_VOTACION WHERE PRUT=rut AND pvoMa=em;
      INSERT INTO PROFESIONAL_VOTACION(PRUT, pvoLi, pvoUn, pvoMa, pvoFe) VALUES (rut, 0, 0, em, now());
      SET @SW=1;
    ELSE
      IF(li=1 AND @LI=0)THEN
        DELETE FROM PROFESIONAL_VOTACION WHERE PRUT=rut AND pvoMa=em;
        INSERT INTO PROFESIONAL_VOTACION(PRUT, pvoLi, pvoUn, pvoMa, pvoFe) VALUES (rut, 1, 0, em, now());
        SET @SW=2;
      END IF;
      IF(@SW=0)THEN
        IF(ul=1 AND @UL=1)THEN
          DELETE FROM PROFESIONAL_VOTACION WHERE PRUT=rut AND pvoMa=em;
          INSERT INTO PROFESIONAL_VOTACION(PRUT, pvoLi, pvoUn, pvoMa, pvoFe) VALUES (rut, 0, 0, em, now());
          SET @SW=3;
        END IF;
      END IF;
      IF(@SW=0)THEN
        IF(ul=1 AND @UL=0)THEN
          DELETE FROM PROFESIONAL_VOTACION WHERE PRUT=rut AND pvoMa=em;
          INSERT INTO PROFESIONAL_VOTACION(PRUT, pvoLi, pvoUn, pvoMa, pvoFe) VALUES (rut, 0, 1, em, now());
          SET @SW=4;
        END IF;
      END IF;
    END IF;
  END IF;

  SELECT @SW;

END;
