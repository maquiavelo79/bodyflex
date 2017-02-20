
-- CALL SP_INGRESA_MODIFICA_ESTUDIOS('13661574','0','NOM1','TIP1','INS1','CON1',1,'01/01/2000',1);
-- CALL SP_INGRESA_MODIFICA_ESTUDIOS('13661574','0','NOM1','TIP1','INS1','CON1',1,'01-01-2000',1);
-- CALL SP_INGRESA_MODIFICA_ESTUDIOS('13661574','9','NOM2','TIP2','INS2','CON2',2,'01/01/2000',5);
-- CALL SP_INGRESA_MODIFICA_ESTUDIOS('13661574','0','NOM2','TIP2','INS2','CON2',2,'01/01/2000',6);


-- CALL SP_INGRESA_MODIFICA_ESTUDIOS('13661574','10','NOM2','PROFESIONAL','INACAP','TITULADO',2,'01/01/2000',5);
-- CALL SP_INGRESA_MODIFICA_ESTUDIOS('13661574','11','NOM2','PROFESIONAL','INACAP','TITULADO',2,'01/01/2000',5);
   
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
                                                            , IN con VARCHAR(50)
                                                            , IN pos INTEGER
                                                            , IN fec VARCHAR(10)
                                                            , IN dur VARCHAR(50)
                                                            , IN des VARCHAR(2000)
                                                        )
BEGIN

DECLARE EXIT HANDLER FOR SQLEXCEPTION SELECT '99';

    -- RGL: USUARIO NO DEBERÍA PODER GUARDAR SI NO EXISTE UN REGISTRO EN CURRICULUM, ESTO DEBE SER CONTROLADO EN PRESENTACIÓN
    SET @fecha=STR_TO_DATE(fec,'%d/%m/%Y');
    
    -- 1 DETERMINAR EXISTENCIA DEL REGISTRO
    IF (SELECT COUNT(*) FROM ESTUDIOS WHERE ESID=id)=0 THEN
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
        , ESDES
      )VALUES(
        rut
        , nom
        , tip
        , ins
        , con
        , pos
        , @fecha
        , dur
        , des
      );
      
      -- 3 OBTENEMOS ULTIMO DPOID INGRESADO
      SET @idEs = (SELECT ESID FROM ESTUDIOS ORDER BY ESID DESC LIMIT 1);   
      
      -- 4 SELECCIONAMOS CAMPOS NECESARIOS
      SELECT ESID
        , ESNOM
        , ESTIPO
        , ESINST
        , ESNOMCON
        , DATE_FORMAT(ESFECHA,'%d-%m-%Y') AS FECHA
        , ESPOS
        , ESANOSEST
        , ESDES
        , @idEs AS idEs
      FROM ESTUDIOS
      WHERE PRUT=rut
      ORDER BY ESID DESC;
    
    ELSE -- EL REGISTRO EXISTE  
-- SELECT * FROM ESTUDIOS
      -- 1 ACTUALIZAR EL REGISTRO
        UPDATE ESTUDIOS 
        SET ESNOM=nom
        , ESTIPO=tip
        , ESINST=ins
        , ESNOMCON=@cOndicion
        , ESNOMCON=con
        , ESPOS=pos
        , ESFECHA=@fecha
        , ESANOSEST=dur
        , ESDES=des
        WHERE ESID=id;
        
       -- 4 SELECCIONAMOS CAMPOS NECESARIOS
      SELECT ESID
        , ESNOM
        , ESTIPO
        , ESINST
        , ESNOMCON
        , DATE_FORMAT(ESFECHA,'%d-%m-%Y') AS FECHA
        , ESPOS
        , ESANOSEST
        , ESDES
        , id AS idEs
      FROM ESTUDIOS
      WHERE PRUT=rut
      ORDER BY ESID DESC;
      -- , DATE_FORMAT(ESFECHA,'%d-%m-%Y') AS FECHA
    END IF;
      
END;
