
-- CALL SP_RU_INGRESA_USUARIO('XXXX');

-- select * from usuario

DROP PROCEDURE IF EXISTS bodyflex.SP_RU_INGRESA_USUARIO;
CREATE PROCEDURE bodyflex.`SP_RU_INGRESA_USUARIO`( 
                                                    IN firstname VARCHAR(100) ,
                                                    IN lastname VARCHAR(100) ,
                                                    IN alias VARCHAR(100) ,
                                                    IN email VARCHAR(100) ,
                                                    IN pass VARCHAR(100) ,
                                                    IN fechaNacimiento DATE ,
                                                    IN sexo VARCHAR(1)
                                                  )
BEGIN
  -- [RU: INGRESA_USUARIO]
      IF NOT EXISTS(SELECT * FROM usuario WHERE UCASE(UMAIL)=UCASE(email)) THEN
        INSERT INTO USUARIO(
          UMAIL,
          UNOMBRE,
          UAPELLIDO,
          UALIAS,
          UPASSWORD,
          USEXO,
          UFECHANAC
        )VALUES(
          ucase(email),
          firstname,
          lastname, 
          alias, 
          pass,
          sexo,
          fechaNacimiento
        );
      ELSE
        UPDATE USUARIO
        SET UNOMBRE=firstname,
            UAPELLIDO=lastname,
            UALIAS=alias,
            UPASSWORD=pass,
            USEXO=sexo,
            UFECHANAC=fechaNacimiento
        WHERE UCASE(UMAIL)=UCASE(email);    
      END IF;
END;
