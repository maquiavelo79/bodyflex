
-- CALL SP_CP_PRO_PORTAFOLIO_INGRESA_MODIFICA(0, '13661574','A','01234567891','Z');
-- CALL SP_CP_PRO_PORTAFOLIO_INGRESA_MODIFICA(0, '13661574','B','99999999999','Y');
-- CALL SP_CP_PRO_PORTAFOLIO_INGRESA_MODIFICA(0, '13661574','C','44444444444','Y');PONOMIMG
-- CALL SP_CP_PRO_PORTAFOLIO_INGRESA_MODIFICA(0, '13661574','C','55555555555','Y');
-- CALL SP_CP_PRO_PORTAFOLIO_INGRESA_MODIFICA(0, '13661574','C','66666666666','Y');
-- CALL SP_CP_PRO_PORTAFOLIO_INGRESA_MODIFICA(0, '13661574','C','77777777777','Y');
-- CALL SP_CP_PRO_PORTAFOLIO_INGRESA_MODIFICA(0, '13661574','C','88888888888','Y');
-- CALL SP_CP_PRO_PORTAFOLIO_INGRESA_MODIFICA(0, '13661574','C','99999999999','Y');

-- CALL SP_PORTAFOLIO_INGRESA_MODIFICA(22, '13661574','AAAAAAAAAA','12345');  
-- SELECT * FROM PORTAFOLIO;

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
      SELECT @id, 1;    
          
    ELSE -- EL REGISTRO EXISTE  

      -- 1 ACTUALIZAR EL REGISTRO
        UPDATE PORTAFOLIO 
        SET PONOMCAP=eti
        , POIDFLI=fli
        WHERE PRUT=rut AND POID=id;
        
        SELECT id, 2;  
      
    END IF;
      
END;
