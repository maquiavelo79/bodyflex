
-- SELECT * FROM USUARIO;
-- CALL SP_RC_ASOCIA_CODIGO('fcalderonnavarro@gmail.com','1111111111');
-- ﻿CALL SP_RC_ASOCIA_CODIGO('fcalderonnavarro@gmail.com','QE6XTZCO9L')

DROP PROCEDURE IF EXISTS bodyflex.SP_RC_ASOCIA_CODIGO;
CREATE PROCEDURE bodyflex.`SP_RC_ASOCIA_CODIGO`( 
                                                  IN email VARCHAR(100) ,
                                                  IN codigo VARCHAR(100) 
                                                )
BEGIN
  -- [RC: RECUPERA CONTRASEÑA]
  UPDATE USUARIO SET UCLAVERECUPERA=codigo, UESTCLAVERECUPERA=0 WHERE UMAIL = UPPER(email);
  SELECT 1;
    
END;
