
-- CALL SP_INGRESA_MODIFICA_EXPERIENCIA('13661574','0','CARGO1','INST1','01/01/2000','31/01/2000',1,'DESCRIPCION1');
-- CALL SP_INGRESA_MODIFICA_EXPERIENCIA('13661574','0','CARGO2','INST2','01/01/2000','31/01/2003',2,'DESCRIPCION2');
-- CALL SP_INGRESA_MODIFICA_EXPERIENCIA('13661574','0','CARGO3','INST3','01/01/2000','03/03/2007',3,'DESCRIPCION3');

-- CALL SP_INGRESA_MODIFICA_EXPERIENCIA('13661574','1','CARGO4','INST4','01/01/2010','31/07/2015',4,'DESCRIPCION4');
-- CALL SP_INGRESA_MODIFICA_EXPERIENCIA('13661574','2','CARGO5','INST5','01/01/1990','20/09/2003',5,'DESCRIPCION5');
-- CALL SP_INGRESA_MODIFICA_EXPERIENCIA('13661574','3','CARGO6','INST6','01/01/2000','03/03/2007',6,'DESCRIPCION6');
   
-- SELECT * FROM PROFESIONAL
-- SELECT * FROM CURRICULUM
-- SELECT * FROM EXPERIENCIA;

DROP PROCEDURE IF EXISTS bodyflex.SP_INGRESA_MODIFICA_EXPERIENCIA;
CREATE PROCEDURE bodyflex.`SP_INGRESA_MODIFICA_EXPERIENCIA`( 
                                                                          IN rut VARCHAR(20)
                                                                        , IN id VARCHAR(20)
                                                                        , IN car VARCHAR(100)
                                                                        , IN ins VARCHAR(100)
                                                                        , IN des VARCHAR(10)
                                                                        , IN has VARCHAR(10)
                                                                        , IN pos INTEGER
                                                                        , IN descrip VARCHAR(300)
                                                                    )
BEGIN

    -- RGL: USUARIO NO DEBERÍA PODER GUARDAR SI NO EXISTE UN REGISTRO EN CURRICULUM, ESTO DEBE SER CONTROLADO EN PRESENTACIÓN

    -- CONVERTIMOS FECHAS
    SET @fecDes=STR_TO_DATE(des,'%d/%m/%Y');
    SET @fecHas=STR_TO_DATE(has,'%d/%m/%Y');
    
    -- CALCULAMOS AÑOS, MESES Y DIAS 
    SET @anos  = YEAR(@fecHas)-YEAR(@fecDes)-IF(MONTH(@fecHas)<MONTH(@fecDes),1,IF(MONTH(@fecHas)=MONTH(@fecDes),IF(DAY(@fecHas)<DAY(@fecDes),1,0),0));
    SET @meses = MONTH(@fecHas)-MONTH(@fecDes)+12*IF(MONTH(@fecHas)<MONTH(@fecDes),1,IF(MONTH(@fecHas)=MONTH(@fecDes),IF (DAY(@fecHas)<DAY(@fecDes),1,0),0))-IF(MONTH(@fecHas)<>MONTH(@fecDes),(DAY(@fecHas)<DAY(@fecDes)),IF (DAY(@fecHas)<DAY(@fecDes),1,0 )); 
    SET @dias  = DAY(@fecHas)-DAY(@fecDes)+30*(DAY(@fecHas)<DAY(@fecDes));
              
    -- 1 DETERMINAR EXISTENCIA DEL REGISTRO
    IF (SELECT COUNT(*) FROM EXPERIENCIA WHERE EXID=id)=0 THEN

      -- 2 INSERTAMOS REGISTRO
      INSERT INTO EXPERIENCIA(
        PRUT
        , EXCARGO
        , EXINS
        , EXDES
        , EXFECDES
        , EXFECHAS
        , EXPOS
        , EXANOS
        , EXMESES
        , EXDIAS
      )VALUES(
        rut
        , car
        , ins
        , descrip
        , @fecDes
        , @fecHas
        , pos
        , @anos
        , @meses
        , @dias
      );
      
      -- 3 OBTENEMOS ULTIMO DPOID INGRESADO
      SET @idEx = (SELECT EXID FROM EXPERIENCIA ORDER BY EXID DESC LIMIT 1);   
      
      -- 4 SELECCIONAMOS CAMPOS NECESARIOS
      SELECT EXID
        , EXCARGO
        , EXINS
        , DATE_FORMAT(EXFECDES,'%d-%m-%Y') AS 'FECHA_DESDE'
        , DATE_FORMAT(EXFECHAS,'%d-%m-%Y') AS 'FECHA_HASTA'
        , EXPOS
        , EXDES
        , @idEx AS idEx
      FROM EXPERIENCIA
      WHERE PRUT=rut
      ORDER BY EXID DESC;
    
    ELSE -- EL REGISTRO EXISTE  
-- SELECT * FROM EXPERIENCIA
      -- 1 ACTUALIZAR EL REGISTRO
        UPDATE EXPERIENCIA 
        SET EXCARGO=car
        , EXINS=ins
        , EXDES=descrip
        , EXFECDES=@fecDes
        , EXFECHAS=@fecHas
        , EXPOS=pos
        , EXANOS=@anos
        , EXMESES=@meses
        , EXDIAS=@dias
        WHERE EXID=id;
        
      -- 4 SELECCIONAMOS CAMPOS NECESARIOS
      SELECT EXID
        , EXCARGO
        , EXINS
        , DATE_FORMAT(EXFECDES,'%d-%m-%Y') AS 'FECHA_DESDE'
        , DATE_FORMAT(EXFECHAS,'%d-%m-%Y') AS 'FECHA_HASTA'
        , EXPOS
        , EXDES
        , @idEx AS idEx
      FROM EXPERIENCIA
      WHERE PRUT=rut
      ORDER BY EXID DESC;
      
    END IF;
      
END;
