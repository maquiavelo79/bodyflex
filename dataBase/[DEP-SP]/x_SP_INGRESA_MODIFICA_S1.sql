
-- CALL SP_INGRESA_MODIFICA_S1(0, 'TITULO1','/SLIDER/VISTA/contenido1.php',1,'1111111111',1);
-- CALL SP_INGRESA_MODIFICA_S1(0, 'TITULO2','/SLIDER/VISTA/contenido2.php',1,'2222222222',2);
-- CALL SP_INGRESA_MODIFICA_S1(0, 'TITULO3','/SLIDER/VISTA/contenido3.php',1,'3333333333',3);
   
-- CALL SP_INGRESA_MODIFICA_S1(7, 'TITULOX','/SLIDER/VISTA/contenido1.php',1,'9999999999',8);
-- CALL SP_INGRESA_MODIFICA_S1(8, 'TITULOY','/SLIDER/VISTA/contenido2.php',1,'8888888888',7);
-- CALL SP_INGRESA_MODIFICA_S1(9, 'TITULOZ','/SLIDER/VISTA/contenido3.php',1,'7777777777',6);   
   
-- SELECT * FROM SECCION1;

-- SELECT COUNT(*) FROM SECCION1 WHERE IDS1=0;
-- SELECT COUNT(IDS1) FROM SECCION1 WHERE IDS1=0;
-- SELECT * FROM SECCION1 WHERE IDS1=0;


DROP PROCEDURE IF EXISTS bodyflex.SP_INGRESA_MODIFICA_S1;
CREATE PROCEDURE bodyflex.`SP_INGRESA_MODIFICA_S1`( 
                                                IN id INTEGER  ,
                                                IN tit VARCHAR(500) ,
                                                IN url VARCHAR(1000) ,
                                                IN est INTEGER ,
                                                IN img VARCHAR(100),
                                                IN pri INTEGER  
                                              )
BEGIN

    -- 1 DETERMINAR EXISTENCIA DEL REGISTRO
    IF (SELECT COUNT(IDS1) FROM SECCION1 WHERE IDS1=id)=0 THEN
      -- 2 INSERTAMOS REGISTRO
      INSERT INTO SECCION1(
        TITS1
        , URLS1
        , ESTS1
        , IMGS1
        , PRIS1
      )VALUES(
        tit
        , url
        , est
        , img
        , pri
      );
      SELECT 1; -- INGRESO EXITOSO
    ELSE -- EL REGISTRO EXISTE  
        UPDATE SECCION1 
        SET TITS1=tit
        , URLS1=url
        , ESTS1=est
        , IMGS1=img
        , PRIS1=pri
        WHERE IDS1=id;
        SELECT 2; -- ACTUALIZACIÓN EXITOSA
    END IF;
      
END;
