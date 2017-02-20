
-- CALL SP_CP_PRO_OTROS_INGRESA_MODIFICA('13661574','0','NOM1','01/01/2000','111111111','DESC1',1);
-- CALL SP_CP_PRO_OTROS_INGRESA_MODIFICA('13661574','0','NOM2','01/01/2000','222222222','DESC2',2);
-- CALL SP_CP_PRO_OTROS_INGRESA_MODIFICA('13661574','0','NOM3','01/01/2000','333333333','DESC3',3);

-- CALL SP_CP_PRO_OTROS_INGRESA_MODIFICA('13661574','11','NOM8','01/01/2001','88888888888','DESC8',1);
-- CALL SP_CP_PRO_OTROS_INGRESA_MODIFICA('13661574','12','NOM9','01/02/2002','99999999999','DESC9',2);
-- CALL SP_CP_PRO_OTROS_INGRESA_MODIFICA('13661574','13','NOM10','01/03/2003','77777777777','DESC7',3);
   
-- SELECT * FROM PROFESIONAL
-- SELECT * FROM CURRICULUM
-- SELECT * FROM OTRO;

DROP PROCEDURE IF EXISTS bodyflex.SP_CP_PRO_OTROS_INGRESA_MODIFICA;
CREATE PROCEDURE bodyflex.`SP_CP_PRO_OTROS_INGRESA_MODIFICA`( 
                                                          IN rut VARCHAR(20)
                                                        , IN id VARCHAR(20)
                                                        , IN nom VARCHAR(100)
                                                        , IN fec VARCHAR(10)
                                                        , IN pos INTEGER
                                                        , IN des VARCHAR(500)
                                                        , IN tip VARCHAR(50)
                                                        , OUT codErr INTEGER
                                                      )
BEGIN

DECLARE EXIT HANDLER FOR SQLEXCEPTION SET codErr=99;

SET codErr=0; 
    
    SET @fecha=STR_TO_DATE(fec,'%d/%m/%Y');

    -- 1 DETERMINAR EXISTENCIA DEL REGISTRO
    IF (SELECT COUNT(*) FROM OTROS WHERE OTID=id)=0 THEN

      -- 2 INSERTAMOS REGISTRO
      INSERT INTO OTROS(
        PRUT
        , OTNOM
        , OTTIPO
        , OTDES
        , OTFECHA
        , OTPOS
      )VALUES(
        rut
        , nom
        , tip
        , des
        , @fecha
        , pos
      );
      
      -- 3 OBTENEMOS ULTIMO DPOID INGRESADO
      SET @idOt = (SELECT OTID FROM OTROS WHERE PRUT = rut ORDER BY OTID DESC LIMIT 1);   
      SET codErr=1; 
      SELECT @idOt;
    
    ELSE -- EL REGISTRO EXISTE  

      -- 1 ACTUALIZAR EL REGISTRO
      UPDATE OTROS 
      SET OTNOM=nom
      , OTTIPO=tip
      , OTDES=des
      , OTFECHA=@fecha
      , OTPOS=pos
      WHERE OTID=id;
        
      SET codErr=2; 
      SELECT id;
      
    END IF;
      
END;
