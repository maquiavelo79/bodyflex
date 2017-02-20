DROP PROCEDURE IF EXISTS bodyflex.SP_CP_PRO_PORTAFOLIO_INGRESA_MODIFICA;
CREATE PROCEDURE bodyflex.`SP_CP_PRO_PORTAFOLIO_INGRESA_MODIFICA`( 
                                                IN id VARCHAR(20)  ,
                                                IN rut VARCHAR(20)  ,
                                                IN eti VARCHAR(30) ,
                                                IN fli VARCHAR(30)  ,
                                                OUT codErr INTEGER
                                              )
BEGIN
DECLARE EXIT HANDLER FOR SQLEXCEPTION SET codErr=99;
SET codErr=0;
    -- 1 DETERMINAR EXISTENCIA DEL REGISTRO
    IF (SELECT COUNT(*) FROM PORTAFOLIO WHERE PRUT=rut AND POID=id)=0 THEN
      
      -- 1.1 RESOLVEMOS POSICION
      IF NOT EXISTS(SELECT POID FROM PORTAFOLIO WHERE PRUT=rut ORDER BY POID DESC LIMIT 1) THEN
        SET @POS=1;
      ELSE
        SET @POS=(SELECT count(*) FROM PORTAFOLIO WHERE PRUT=rut)+1;
      END IF;
      
      -- 2 INSERTAMOS REGISTRO
      INSERT INTO PORTAFOLIO(
        PRUT
        , PONOMCAP
        , PONOMIMG
        , POIDFLI
      )VALUES(
        rut
        , eti
        , 'NOIMAGEN'
        , fli
      );
      
      -- 3 OBTENEMOS ULTIMO DPOID INGRESADO
      SET @id = (SELECT POID FROM PORTAFOLIO WHERE PRUT=rut ORDER BY POID DESC LIMIT 1);   
      
      -- 4 SELECCIONAMOS CAMPOS NECESARIOS
      SELECT POID
        , PONOMCAP
        , POIDFLI
        , @id AS id
      FROM PORTAFOLIO
      WHERE PRUT=rut
      ORDER BY POID DESC;
    
    ELSE -- EL REGISTRO EXISTE  

      -- 1 ACTUALIZAR EL REGISTRO
        UPDATE PORTAFOLIO 
        SET PONOMCAP=eti
        , POIDFLI=fli
        WHERE PRUT=rut AND POID=id;
        
        SELECT POID
          , PONOMCAP
          , POIDFLI
          , id
        FROM PORTAFOLIO
        WHERE PRUT=rut
        ORDER BY POID DESC;
      
    END IF;
      
END;
