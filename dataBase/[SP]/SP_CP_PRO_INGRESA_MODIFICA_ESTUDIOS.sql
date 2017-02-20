
-- CALL SP_CP_PRO_INGRESA_MODIFICA_ESTUDIOS('13661574','0','NOM1','TIP1','INS1','CON1',1,'01/01/2000',1);
-- CALL SP_CP_PRO_INGRESA_MODIFICA_ESTUDIOS('13661574','0','NOM1','TIP1','INS1','CON1',1,'01-01-2000',1);
-- CALL SP_CP_PRO_INGRESA_MODIFICA_ESTUDIOS('13661574','9','NOM2','TIP2','INS2','CON2',2,'01/01/2000',5);
-- CALL SP_CP_PRO_INGRESA_MODIFICA_ESTUDIOS('13661574','0','NOM2','TIP2','INS2','CON2',2,'01/01/2000',6);
   
-- SELECT * FROM PROFESIONAL
-- SELECT * FROM CURRICULUM
-- SELECT * FROM ESTUDIOS;

DROP PROCEDURE IF EXISTS bodyflex.SP_CP_PRO_INGRESA_MODIFICA_ESTUDIOS;
CREATE PROCEDURE bodyflex.`SP_CP_PRO_INGRESA_MODIFICA_ESTUDIOS`( 
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
                                                            , OUT codErr INTEGER
                                                        )
BEGIN

DECLARE EXIT HANDLER FOR SQLEXCEPTION SET codErr=99;
SET codErr=0;

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
      SET codErr=1;
      SELECT @idEs;
         
    ELSE -- EL REGISTRO EXISTE  
    
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
        
      SET codErr=2;
      SELECT id;

    END IF;
      
END;
