
-- CALL SP_RU_REGULARIZA_CUENTA_CODIGO('a@a.cl');
-- SELECT * FROM USUARIO;

DROP PROCEDURE IF EXISTS bodyflex.SP_RU_REGULARIZA_CUENTA_CODIGO;
CREATE PROCEDURE bodyflex.`SP_RU_REGULARIZA_CUENTA_CODIGO`( 
                                                    IN codigo VARCHAR(50) 
                                                    , IN mail VARCHAR(50)
                                                    , IN pass VARCHAR(50)
                                                    , OUT codErr INTEGER
                                                  )
BEGIN
  
  DECLARE EXIT HANDLER FOR SQLEXCEPTION SET codErr=99;
  SET codErr=0;
  SET @regulariza=0;
  
  IF(@regulariza=0)THEN
    IF EXISTS(SELECT * FROM USUARIO WHERE UMAIL=mail)THEN
      UPDATE USUARIO 
      SET uEstClaRec=1 
      , upass=pass
      WHERE umail=UPPER(mail) 
      AND uClaRec=UPPER(codigo);
      SET @regulariza=1;
    END IF;  
  END IF;
  
  IF(@regulariza=0)THEN
    IF EXISTS(SELECT * FROM PROFESIONAL WHERE PMAIL=mail)THEN
      UPDATE PROFESIONAL 
      SET PEstClaRec=1 
      , ppass=pass
      WHERE pmail=UPPER(mail) 
      AND pClaRec=UPPER(codigo);
      SET @regulariza=1;
    END IF;  
  END IF;
  
  IF(@regulariza=0)THEN
    IF EXISTS(SELECT * FROM INTERNO WHERE RMAIL=mail)THEN
      UPDATE INTERNO 
      SET rEstClaRec=1 
      , rpass=pass
      WHERE rmail=UPPER(mail) 
      AND rClaRec=UPPER(codigo);
      SET @regulariza=1;
    END IF;  
  END IF;
  
  IF(@regulariza=0)THEN
    IF EXISTS(SELECT * FROM COMPLEMENTADOR WHERE compMail=mail)THEN
      UPDATE COMPLEMENTADOR 
      SET compEstClaRec=1 
      , compPass=pass
      WHERE compMail=UPPER(mail) 
      AND compClaRec=UPPER(codigo);
      SET @regulariza=1;
    END IF;  
  END IF;
  
  SELECT @regulariza;
    
END;
