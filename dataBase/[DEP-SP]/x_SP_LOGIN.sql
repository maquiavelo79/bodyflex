
-- CALL SP_LOGIN('admin@bo.cl','12345');
-- CALL SP_LOGIN('edi@b.cl','12345');
-- CALL SP_LOGIN('com@b.cl','12345');
-- CALL SP_LOGIN('adm@b.cl','12345');
-- CALL SP_LOGIN('usr@b.cl','12345');

-- select * from login
-- SELECT * FROM CPANEL
-- SELECT * FROM INTERNO


DROP PROCEDURE IF EXISTS bodyflex.SP_LOGIN;
CREATE PROCEDURE bodyflex.`SP_LOGIN`( 
                                      IN mail VARCHAR(100)
                                      , IN pass VARCHAR(100)
                                    )
BEGIN
 
  -- @RESP=10 > NO ES USUARIO
  -- @RESP= 9 > CONTRASEÑA DE USUARIO INCORRECTA
  -- @RESP= 8 > USUARIO VALIDADO EXITOSAMENTE
  -- @RESP= 7 > CONTRASEÑA DE PROFESIONAL INCORRECTA
  -- @RESP= 6 > PROFESIONAL VALIDADO EXITOSAMENTE
  -- @RESP= 5 > CONTRASEÑA DE ROL INCORRECTA
  -- @RESP= 4 > ROL VALIDADO EXITOSAMENTE
  -- @RESP= 3 > CONTRASEÑA DE COMPLEMENTADOR INCORRECTA
  -- @RESP= 2 > COMPLEMENTADOR VALIDADO EXITOSAMENTE
  
  SET @RESP=0;
   
  -- 1° EVALUACION EN TABLA USUARIO 
  IF(EXISTS(SELECT * FROM USUARIO WHERE UMAIL=upper(mail)))THEN
    IF(EXISTS(SELECT * FROM USUARIO WHERE UMAIL=upper(mail) AND UPASS=pass)) THEN
      SET @MAIL=(SELECT UMAIL FROM USUARIO WHERE UMAIL=upper(mail) AND UPASS=pass);
      SET @RESP=8; 
    ELSE
      SET @RESP=9;
    END IF;
  ELSE
    SET @RESP=10;
  END IF;
 
  -- 2° EVALUACION EN TABLA PROFESIONAL
  IF(@RESP=10) THEN
    IF(EXISTS(SELECT * FROM PROFESIONAL WHERE PMAIL=upper(mail)))THEN
      IF(EXISTS(SELECT * FROM PROFESIONAL WHERE PMAIL=upper(mail) AND PPASS=pass)) THEN
        SET @RUT=(SELECT PRUT FROM PROFESIONAL WHERE PMAIL=upper(mail) AND PPASS=pass);
        SET @RESP=6; 
      ELSE
        SET @RESP=7;
      END IF;
    ELSE
      SET @RESP=10;
    END IF;
  END IF;
    
  -- 3° EVALUACION EN TABLA INTERNO
  IF(@RESP=10) THEN
    IF(EXISTS(SELECT * FROM INTERNO WHERE RMAIL=upper(mail)))THEN
      IF(EXISTS(SELECT * FROM INTERNO WHERE RMAIL=upper(mail) AND RPASS=pass)) THEN
        SET @RUT=(SELECT RRUT FROM INTERNO WHERE RMAIL=upper(mail) AND RPASS=pass);
        SET @RESP=4; 
      ELSE
        SET @RESP=5;
      END IF;
    ELSE
      SET @RESP=10;
    END IF;
  END IF;  
    
  -- 4° EVALUACION EN TABLA COMPLEMENTADOR
  IF(@RESP=10) THEN
    IF(EXISTS(SELECT * FROM COMPLEMENTADOR WHERE COMPMAIL=upper(mail)))THEN
      IF(EXISTS(SELECT * FROM COMPLEMENTADOR WHERE COMPMAIL=upper(mail) AND COMPPASS=pass)) THEN
        SET @RUT=(SELECT COMPRUT FROM COMPLEMENTADOR WHERE COMPMAIL=upper(mail) AND COMPPASS=pass);
        SET @RESP=2; 
      ELSE
        SET @RESP=3;
      END IF;
    ELSE
      SET @RESP=10;
    END IF;
  END IF;    
    
    -- 3° SELECCION DE RESULTADOS
    IF(@RESP=8 OR @RESP=6 OR @RESP=4 OR @RESP=2)THEN
    
      CASE
        WHEN @RESP=8 THEN 

          INSERT INTO LOGIN_USUARIO(UMAIL, LUFE) VALUES (@MAIL, NOW());
          SELECT @RESP
          , UMAIL
          , UNOMBRE
          , UAPELLIDO
          , UALIAS
          , 'USUARIO' AS ROL
          , URUT
          , UDV
          , (SELECT CPARU FROM CPANEL WHERE CPARO='USUARIO') AS URL
          FROM USUARIO 
          WHERE upper(UMAIL)=upper(mail);
          
        WHEN @RESP=6 THEN 
        
          INSERT INTO LOGIN(LRUT, LFEC, LTIP) VALUES (@RUT, NOW(), 1);
          SELECT @RESP
          , PMAIL
          , PNOM1
          , PAPE1
          , PALIAS
          , 'PROFESIONAL' AS ROL
          , PRUT AS RUT
          , PDV AS DV 
          , (SELECT CPARU FROM CPANEL WHERE CPARO='PROFESIONAL') AS URL
          FROM PROFESIONAL 
          WHERE upper(PMAIL)=upper(mail);
        
        WHEN @RESP=2 THEN 
        
          INSERT INTO LOGIN(LRUT, LFEC, LTIP) VALUES (@RUT, NOW(), 4);
          SELECT @RESP
          , compMail
          , compReNom
          , compReApe
          , compReAli
          , 'COMPLEMENTADOR' AS ROL
          , compRut AS RUT
          , compDv AS DV 
          , (SELECT CPARU FROM CPANEL WHERE CPARO='COMPLEMENTADOR') AS URL
          FROM COMPLEMENTADOR 
          WHERE upper(compMail)=upper(mail);
          
        ELSE
        
          -- ROLES INTERNOS COMO ADMINISTRADOR Y PERIODISTA
          SET @ROL = (SELECT rTip FROM INTERNO WHERE RMAIL=upper(mail));
          SET @RUT = (SELECT rRut FROM INTERNO WHERE RMAIL=upper(mail));
          SET @DV = (SELECT rDv FROM INTERNO WHERE RMAIL=upper(mail));
          
          INSERT INTO LOGIN(LRUT, LFEC, LTIP) VALUES (@RUT, NOW(), 3);
          SELECT @RESP
          , RMAIL
          , RNOM1
          , RAPE1
          , RALIAS
          , @ROL AS ROL
          , @RUT AS RUT
          , @DV AS DV 
          , (SELECT CPARU FROM CPANEL WHERE CPARO=@ROL) AS URL
          FROM INTERNO 
          WHERE upper(RMAIL)=upper(mail);
      END CASE;
        
  ELSE
    SELECT @RESP;
  END IF;
  
END;
