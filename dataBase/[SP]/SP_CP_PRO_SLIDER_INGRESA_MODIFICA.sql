DROP PROCEDURE IF EXISTS bodyflex.SP_CP_PRO_SLIDER_INGRESA_MODIFICA;
CREATE PROCEDURE bodyflex.`SP_CP_PRO_SLIDER_INGRESA_MODIFICA`( 
                                                IN id VARCHAR(20)  ,
                                                IN rut VARCHAR(20)  ,
                                                IN tit1 VARCHAR(30) ,
                                                IN flic VARCHAR(30) ,
                                                IN tex VARCHAR(300) ,
                                                OUT codErr INTEGER
                                              )
BEGIN
DECLARE EXIT HANDLER FOR SQLEXCEPTION SET codErr=99;

SET codErr=0;

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
