
-- CALL SP_RU_INGRESA_ACTUALIZA_USUARIO('F','C','FC','a@a.cl','1','19790303','M', @codErr);
-- SELECT @codErr;

-- SELECT * FROM usuario;

DROP PROCEDURE IF EXISTS bodyflex.SP_RU_INGRESA_ACTUALIZA_USUARIO;
CREATE PROCEDURE bodyflex.`SP_RU_INGRESA_ACTUALIZA_USUARIO`( 
                                                    IN firstname VARCHAR(100) 
                                                    , IN lastname VARCHAR(100) 
                                                    , IN alias VARCHAR(100) 
                                                    , IN email VARCHAR(100) 
                                                    , IN pass VARCHAR(100) 
                                                    , IN fechaNacimiento DATE 
                                                    , IN sexo VARCHAR(1)
                                                    ,  OUT codErr INTEGER
                                                  )
BEGIN
DECLARE EXIT HANDLER FOR SQLEXCEPTION SET codErr=99;
SET codErr=0;

      IF NOT EXISTS(SELECT * FROM usuario WHERE UCASE(UMAIL)=UCASE(email)) THEN
        INSERT INTO USUARIO(
          UMAIL,
          CPAID,
          UNOMBRE ,
          UAPELLIDO ,
          UALIAS  ,
          UPASS ,
          USEXO ,
          UFECHANAC
        )VALUES(
          UPPER(email) ,
          1         ,
          firstname ,
          lastname  , 
          alias , 
          pass  ,
          sexo  ,
          fechaNacimiento
        );
        SELECT 1;
      ELSE
        UPDATE USUARIO
        SET UNOMBRE=firstname ,
            UAPELLIDO=lastname ,
            UALIAS=alias  ,
            UPASS=pass ,
            USEXO=sexo ,
            UFECHANAC=fechaNacimiento
        WHERE UCASE(UMAIL)=UCASE(email);    
        SELECT 2;
      END IF;
      
END;
