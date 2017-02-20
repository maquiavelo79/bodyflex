
-- CALL SP_INGRESA_MODIFICA_CURRICULUM_OTROS('13661574','0','NOM1','01/01/2000','111111111','DESC1',1);
-- CALL SP_INGRESA_MODIFICA_CURRICULUM_OTROS('13661574','0','NOM2','01/01/2000','222222222','DESC2',2);
-- CALL SP_INGRESA_MODIFICA_CURRICULUM_OTROS('13661574','0','NOM3','01/01/2000','333333333','DESC3',3);

-- CALL SP_INGRESA_MODIFICA_CURRICULUM_OTROS('13661574','11','NOM8','01/01/2001','88888888888','DESC8',1);
-- CALL SP_INGRESA_MODIFICA_OTROS('13661574','12','NOM9','01/02/2002','99999999999','DESC9',2);
-- CALL SP_INGRESA_MODIFICA_OTROS('13661574','13','NOM10','01/03/2003','77777777777','DESC7',3);
   
-- SELECT * FROM PROFESIONAL
-- SELECT * FROM CURRICULUM
-- SELECT * FROM OTRO;

DROP PROCEDURE IF EXISTS bodyflex.SP_INGRESA_MODIFICA_OTROS;
CREATE PROCEDURE bodyflex.`SP_INGRESA_MODIFICA_OTROS`( 
                                                          IN rut VARCHAR(20)
                                                        , IN id VARCHAR(20)
                                                        , IN nom VARCHAR(100)
                                                        , IN fec VARCHAR(10)
                                                        , IN pos INTEGER
                                                        , IN des VARCHAR(300)
                                                        , IN tip INTEGER
                                                      )
BEGIN

    SET @fecha=STR_TO_DATE(fec,'%d/%m/%Y');

    -- 1 DETERMINAR EXISTENCIA DEL REGISTRO
    IF (SELECT COUNT(*) FROM OTRO WHERE CURID=@idCur AND OTID=id)=0 THEN

      -- 2 INSERTAMOS REGISTRO
      INSERT INTO OTRO(
        CURID
        , OTNOM
        , OTTIPO
        , OTDES
        , OTFECHA
        , OTIMG
      )VALUES(
        @idCur
        , nom
        , tip
        , des
        , @fecha
        , fli
      );
      
      -- 3 OBTENEMOS ULTIMO DPOID INGRESADO
      SET @idOt = (SELECT OTID FROM OTRO WHERE CURID=@idCur ORDER BY OTID DESC LIMIT 1);   
      -- SELECT * FROM OTRO
      -- 4 SELECCIONAMOS CAMPOS NECESARIOS
      SELECT OTID
        , OTNOM
        , OTTIPO
        , OTDES
        , DATE_FORMAT(OTFECHA,'%d-%m-%Y') AS FECHA
        , OTIMG
        , @idOt AS idOt
      FROM OTRO
      WHERE CURID=@idCur
      ORDER BY OTID DESC;
    
    ELSE -- EL REGISTRO EXISTE  
-- SELECT * FROM ESTUDIOS
      -- 1 ACTUALIZAR EL REGISTRO
        UPDATE OTRO 
        SET OTNOM=nom
        , OTTIPO=tip
        , OTDES=des
        , OTFECHA=@fecha
        , OTIMG=fli
        WHERE OTID=id;
        
      -- 4 SELECCIONAMOS CAMPOS NECESARIOS
      SELECT OTID
        , OTNOM
        , OTTIPO
        , OTDES
        , DATE_FORMAT(OTFECHA,'%d-%m-%Y') AS FECHA
        , OTIMG
        , id AS idOt
      FROM OTRO
      WHERE CURID=@idCur
      ORDER BY OTID DESC;
      
    END IF;
      
END;
