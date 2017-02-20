
-- CALL SP_INGRESA_PUBLICACION_REFERENCIA('XXXX');

-- select * from usuario

DROP PROCEDURE IF EXISTS bodyflex.SP_INGRESA_PUBLICACION_REFERENCIA;
CREATE PROCEDURE bodyflex.`SP_INGRESA_PUBLICACION_REFERENCIA`( 
                                                    IN puId VARCHAR(100) ,
                                                    IN tipRef VARCHAR(100) ,
                                                    IN ref VARCHAR(100) ,
                                                    IN desRef VARCHAR(100)
                                                  )
BEGIN
  -- [RU: INGRESA_USUARIO]
      IF NOT EXISTS(SELECT * FROM PUBLICACION_REFERENCIA WHERE UCASE(PRID)=UCASE(puId)) THEN
        INSERT INTO PUBLICACION_REFERENCIA(
          PUID,
          REID,
          USEXO,
          UFECHANAC
        )VALUES(
          puId, 
          tipRef,
          ref,
          desRef
        );
      ELSE
        UPDATE PUBLICACION_REFERENCIA
        SET UNOMBRE=firstname,
            UAPELLIDO=lastname,
            UALIAS=alias,
            UPASSWORD=pass,
            USEXO=sexo,
            UFECHANAC=fechaNacimiento
        WHERE UCASE(UMAIL)=UCASE(email);    
      END IF;
END;
