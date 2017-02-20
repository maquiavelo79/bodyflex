
-- CALL SP_INGRESA_MODIFICA_ESTUDIOS('13661574','0','1NOM','1','1INS',1,'1','01/01/2000',1);
-- CALL SP_INGRESA_MODIFICA_ESTUDIOS('13661574','0','2NOM','2','2INS',2,'2','01/01/2000',2);
-- CALL SP_INGRESA_MODIFICA_ESTUDIOS('13661574','0','3NOM','3','3INS',3,'3','01/01/2000',3);
   
-- SELECT * FROM PROFESIONAL
-- SELECT * FROM CURRICULUM
-- SELECT * FROM ESTUDIOS;

DROP PROCEDURE IF EXISTS bodyflex.SP_INGRESA_MODIFICA_ESTUDIOS;
CREATE PROCEDURE bodyflex.`SP_INGRESA_MODIFICA_ESTUDIOS`( 
                                                              IN rut VARCHAR(20)
                                                            , IN id VARCHAR(20)
                                                            , IN nom VARCHAR(100)
                                                            , IN tip VARCHAR(50)
                                                            , IN ins VARCHAR(100)
                                                            , IN con INTEGER
                                                            , IN pos VARCHAR(2)
                                                            , IN fec VARCHAR(10)
                                                            , IN dur INTEGER
                                                        )
BEGIN

    -- RGL: USUARIO NO DEBERÍA PODER GUARDAR SI NO EXISTE UN REGISTRO EN CURRICULUM, ESTO DEBE SER CONTROLADO EN PRESENTACIÓN
    SET @fecha=STR_TO_DATE(fec,'%d/%m/%Y');
    
    -- 1 DETERMINAR EXISTENCIA DEL REGISTRO
    IF (SELECT COUNT(*) FROM ESTUDIOS WHERE CURID=@idCur AND ESID=id)=0 THEN
  -- SELECT * FROM ESTUDIOS
      -- 2 INSERTAMOS REGISTRO
      INSERT INTO ESTUDIOS(
        PRUT
        , ESNOM
        , ESTIPO
        , ESINST
        , ESNOMCON
        , ESPOS
        , ESFECHA
        , ESANOSEST
      )VALUES(
        rut
        , nom
        , tip
        , ins
        , con
        , pos
        , @fecha
        , dur
      );
      
      -- 3 OBTENEMOS ULTIMO DPOID INGRESADO
      SET @idEs = (SELECT ESID FROM ESTUDIOS WHERE CURID=@idCur ORDER BY ESID DESC LIMIT 1);   
      
      -- 4 SELECCIONAMOS CAMPOS NECESARIOS
      SELECT ESID
        , ESNOM
        , ESTIPO
        , ESINST
        , ESCODCON
        , ESPOS
        , DATE_FORMAT(ESFECHA,'%d-%m-%Y') AS FECHA
        , ESANOSEST
        , @idEs AS idEs
      FROM ESTUDIOS
      WHERE ESID=@idEs
      ORDER BY ESID DESC;
    
    ELSE -- EL REGISTRO EXISTE  
-- SELECT * FROM ESTUDIOS
      -- 1 ACTUALIZAR EL REGISTRO
        UPDATE ESTUDIOS 
        SET ESNOM=nom
        , ESTIPO=tip
        , ESINST=ins
        , ESNOMCON=@cOndicion
        , ESCODCON=con
        , ESPOS=pos
        , ESFECHA=@fecha
        , ESANOSEST=dur
        WHERE ESID=id;
        
       -- 4 SELECCIONAMOS CAMPOS NECESARIOS
      SELECT ESID
        , ESNOM
        , ESTIPO
        , ESINST
        , ESCODCON
        , ESPOS
        , DATE_FORMAT(ESFECHA,'%d-%m-%Y')
        , ESANOSEST
        , id AS idEs
      FROM ESTUDIOS
      WHERE ESID=id
      ORDER BY ESID DESC;
      
    END IF;
      
END;
