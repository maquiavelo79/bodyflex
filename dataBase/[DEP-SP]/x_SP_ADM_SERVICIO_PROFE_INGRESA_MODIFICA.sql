


-- CALL SP_ADM_SERVICIO_PROFE_INGRESA_MODIFICA(13661574, 0, 'admin@bodyflex.cl', 'servicio1', '111111111', 'CORTA', 'LARGA', 'CLASE');
-- CALL SP_ADM_SERVICIO_PROFE_INGRESA_MODIFICA(13661574, 5, 'admin@bodyflex.cl', 'servicio1', '111111111', 'LACORTA', 'LALARGA', 'LACLASE');

-- select * from interno
-- SELECT * FROM SERVICIO

DROP PROCEDURE IF EXISTS bodyflex.SP_ADM_SERVICIO_PROFE_INGRESA_MODIFICA;
CREATE PROCEDURE bodyflex.`SP_ADM_SERVICIO_PROFE_INGRESA_MODIFICA`( 
                                                IN rut VARCHAR(10)  ,
                                                IN id VARCHAR(20)  ,
                                                IN mail VARCHAR(50)  ,
                                                IN nom VARCHAR(50) ,
                                                IN fli VARCHAR(50) ,
                                                IN dc VARCHAR(100) ,
                                                IN dt VARCHAR(1000),
                                                IN ci VARCHAR(50) 
                                              )
BEGIN
-- RMAILDECLARE EXIT HANDLER FOR SQLEXCEPTION SELECT '99';

    -- 1 DETERMINAR EXISTENCIA DEL REGISTRO
    IF (SELECT COUNT(*) FROM SERVICIO WHERE SEID=id)=0 THEN
      
      -- 2 INSERTAMOS REGISTRO
      INSERT INTO SERVICIO(
        RRUT
        , SENOM
        , SECAT
        , SEEST
        , SEDESCOR
        , SEDESLAR
        , SEIMGAWE
        , SEIMGSER
        , SEIDFLI
      )VALUES(
        rut
        , nom
        , 'PROFESIONAL'
        , 'VIGENTE'
        , dc
        , dt
        , ci
        , 'NOIMAGE'
        , fli
      );
      
      -- 3 OBTENEMOS ULTIMO DPOID INGRESADO
      SET @id = (SELECT SEID FROM SERVICIO ORDER BY SEID DESC LIMIT 1);   
      
      -- 4 SELECCIONAMOS CAMPOS NECESARIOS
      SELECT SEID
      , SENOM
      , SEDESCOR
      , SEDESLAR
      , SEIMGAWE
      , SEIMGSER
      , SEIDFLI
      , @id
      FROM SERVICIO
      ORDER BY SEID DESC;
    
    ELSE -- EL REGISTRO EXISTE  
      -- SELECT * FROM SERVICIO
      -- 1 ACTUALIZAR EL REGISTRO
        UPDATE SERVICIO 
        SET SENOM=nom
        , SEDESCOR=dc
        , SEDESLAR=dt
        , SEIMGAWE=ci
        , SEIDFLI=fli
        WHERE SEID=id;
        
      -- SELECT * FROM SLIDER
        SET @id=id;
        SELECT SEID
        , SENOM
        , SEDESCOR
        , SEDESLAR
        , SEIMGAWE
        , SEIMGSER
        , SEIDFLI
        , @id
        FROM SERVICIO
        ORDER BY SEID DESC;
      
    END IF;
      
END;
