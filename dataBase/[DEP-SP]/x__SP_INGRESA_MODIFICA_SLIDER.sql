
-- CALL SP_INGRESA_MODIFICA_SLIDER(0, '13661574','A','01234567891','Z');
-- CALL SP_INGRESA_MODIFICA_SLIDER(0, '13661574','B','99999999999','Y');
-- CALL SP_INGRESA_MODIFICA_SLIDER(0, '13661574','C','44444444444','Y');
-- CALL SP_INGRESA_MODIFICA_SLIDER(0, '13661574','C','55555555555','Y');
-- CALL SP_INGRESA_MODIFICA_SLIDER(0, '13661574','C','66666666666','Y');
-- CALL SP_INGRESA_MODIFICA_SLIDER(0, '13661574','C','77777777777','Y');
-- CALL SP_INGRESA_MODIFICA_SLIDER(0, '13661574','C','88888888888','Y');
-- CALL SP_INGRESA_MODIFICA_SLIDER(0, '13661574','C','99999999999','Y');

-- CALL SP_INGRESA_MODIFICA_SLIDER(77, '13661574','AAAAAAAAAA','01234567891','Z');
-- CALL SP_INGRESA_MODIFICA_SLIDER(78, '13661574','BBBBBBBBBB','99999999999','Y');
-- CALL SP_INGRESA_MODIFICA_SLIDER(79, '13661574','CCCCCCCCCC','44444444444','Y');
-- CALL SP_INGRESA_MODIFICA_SLIDER(80, '13661574','DDDDDDDDDD','55555555555','Y');
-- CALL SP_INGRESA_MODIFICA_SLIDER(81, '13661574','EEEEEEEEEE','66666666666','Y');
-- CALL SP_INGRESA_MODIFICA_SLIDER(82, '13661574','FFFFFFFFFF','77777777777','Y');
-- CALL SP_INGRESA_MODIFICA_SLIDER(83, '13661574','GGGGGGGGGG','88888888888','Y');
-- CALL SP_INGRESA_MODIFICA_SLIDER(84, '13661574','HHHHHHHHHH','99999999999','Y');
   
-- SELECT * FROM SLIDER;

DROP PROCEDURE IF EXISTS bodyflex.SP_INGRESA_MODIFICA_SLIDER;
CREATE PROCEDURE bodyflex.`SP_INGRESA_MODIFICA_SLIDER`( 
                                                IN id VARCHAR(20)  ,
                                                IN rut VARCHAR(20)  ,
                                                IN tit1 VARCHAR(30) ,
                                                IN flic VARCHAR(20) ,
                                                IN tex VARCHAR(235)
                                              )
BEGIN

    -- 1 DETERMINAR EXISTENCIA DEL REGISTRO
    IF (SELECT COUNT(*) FROM SLIDER WHERE PRUT=rut AND SID=id)=0 THEN
      -- 1.1 RESOLVEMOS POSICION
      IF NOT EXISTS(SELECT SID FROM SLIDER WHERE PRUT=rut ORDER BY SID DESC LIMIT 1) THEN
        SET @POS=1;
      ELSE
        -- SET @POS=(SELECT SID FROM SLIDER WHERE PRUT=rut ORDER BY SID DESC LIMIT 1)+1;
        SET @POS=(SELECT count(*) FROM SLIDER WHERE PRUT=rut)+1;
      END IF;
      -- select * from SLIDER
      -- 2 INSERTAMOS REGISTRO
      INSERT INTO SLIDER(
        PRUT
        , STIT1
        , STIT2
        , SDES
        , SPOS
        , SEST
        , SDFL
      )VALUES(
        rut
        , tit1
        , ''
        , tex
        , @POS
        , 0
        , flic
      );
      
      -- 3 OBTENEMOS ULTIMO DPOID INGRESADO
      SET @id = (SELECT SID FROM SLIDER WHERE PRUT=rut ORDER BY SID DESC LIMIT 1);   
      
      -- 4 SELECCIONAMOS CAMPOS NECESARIOS
      SELECT SID
        , STIT1
        -- , '' as 'STIT2'
        , SDES
        , SDFL
        , @id AS id
      FROM SLIDER
      WHERE PRUT=rut
      ORDER BY SID DESC;
    
    ELSE -- EL REGISTRO EXISTE  
      -- SELECT * FROM SLIDER
      -- 1 ACTUALIZAR EL REGISTRO
        UPDATE SLIDER 
        SET STIT1=tit1
        -- , STIT2=''
        , SDES=tex
        , SDFL=flic
        WHERE PRUT=rut AND SID=id;
        
      -- SELECT * FROM SLIDER
        SET @id=id;
        SELECT SID
          , STIT1
          -- , '' as 'STIT2'
          , SDES
          , SDFL
          , @id AS id
        FROM SLIDER
        WHERE PRUT=rut 
        ORDER BY SID DESC;
      
    END IF;
      
END;
