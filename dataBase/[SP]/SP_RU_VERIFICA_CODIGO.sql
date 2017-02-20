
CALL SP_RU_VERIFICA_CODIGO('BKN940Y1AS', 'pro@bo.cl', @codErr);
SELECT @codErr;

SELECT * FROM PROFESIONAL WHERE PMAIL=upper('pro@bo.cl') AND pClaRec=upper('BKN940Y1AS') AND pEstClaRec=0;


DROP PROCEDURE IF EXISTS bodyflex.SP_RU_VERIFICA_CODIGO;
CREATE PROCEDURE bodyflex.`SP_RU_VERIFICA_CODIGO`( 
                                                    IN codigo VARCHAR(20) 
                                                    , IN mail VARCHAR(50) 
                                                    , OUT codErr INTEGER
                                                  )
BEGIN
  -- DECLARE EXIT HANDLER FOR SQLEXCEPTION SET codErr=99;
  SET codErr=0;
  SET @EXISTE=0;
  
  IF(@EXISTE=0)THEN
    IF EXISTS(
        SELECT *
        FROM USUARIO 
        WHERE UMAIL=upper(mail) 
        AND uClaRec=upper(codigo) 
        AND uEstClaRec=0
    ) THEN
      SET @EXISTE=1;  -- CÓDIGO VALIDO
    ELSE
      SET @EXISTE=0; -- CÓDIGO NO VALIDO
    END IF;  
  END IF;
  
  IF(@EXISTE=0)THEN
    IF EXISTS(
        SELECT *
        FROM PROFESIONAL 
        WHERE PMAIL=upper(mail) 
        AND pClaRec=upper(codigo) 
        AND pEstClaRec=0
    ) THEN
      SET @EXISTE=1;  -- CÓDIGO VALIDO
    ELSE
      SET @EXISTE=0; -- CÓDIGO NO VALIDO
    END IF;  
  END IF;
  
  IF(@EXISTE=0)THEN
    IF EXISTS(
        SELECT *
        FROM INTERNO
        WHERE RMAIL=upper(mail) 
        AND rClaRec=upper(codigo) 
        AND rEstClaRec=0
    ) THEN
      SET @EXISTE=1;  -- CÓDIGO VALIDO
    ELSE
      SET @EXISTE=0; -- CÓDIGO NO VALIDO
    END IF;  
  END IF;
  
  IF(@EXISTE=0)THEN
    IF EXISTS(
        SELECT *
        FROM COMPLEMENTADOR
        WHERE compMail=upper(mail) 
        AND compClaRec=upper(codigo) 
        AND compEstClaRec=0
    ) THEN
      SET @EXISTE=1;  -- CÓDIGO VALIDO
    ELSE
      SET @EXISTE=0; -- CÓDIGO NO VALIDO
    END IF;  
  END IF;
  
  SELECT @EXISTE;
  
END;
