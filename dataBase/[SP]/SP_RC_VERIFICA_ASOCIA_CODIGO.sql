
-- SELECT * FROM USUARIO;
-- DELETE FROM USUARIO;
-- CALL SP_RC_VERIFICA_ASOCIA_CODIGO('1233423234', 'fcalderonnavarro@gmail.com');


DROP PROCEDURE IF EXISTS bodyflex.SP_RU_VERIFICA_ASOCIA_CODIGO;
CREATE PROCEDURE bodyflex.`SP_RU_VERIFICA_ASOCIA_CODIGO`( 
                                                          IN codigo VARCHAR(100) 
                                                          , IN email VARCHAR(100) 
                                                          , OUT codErr INTEGER
                                                        )
BEGIN
DECLARE EXIT HANDLER FOR SQLEXCEPTION SET codErr=99;
SET codErr=0;

  IF NOT EXISTS(
  
      SELECT *
      FROM USUARIO 
      WHERE uClaRec=UPPER(codigo) 
      AND UMAIL=email 
      AND uEstClaRec=0
    
  ) THEN
    set @opc=1;    
    UPDATE USUARIO SET uClaRec=UPPER(codigo), uEstClaRec=0 WHERE UMAIL = UPPER(email);
  ELSE
    set @opc=2;
  END IF;  
  
  SET @nombre=(SELECT UNOMBRE FROM usuario WHERE UMAIL=email);
  SET @apellido=(SELECT UAPELLIDO FROM usuario WHERE UMAIL=email);  
  SELECT @opc, @nombre,@apellido;  
    
END;

-- SELECT * FROM USUARIO;