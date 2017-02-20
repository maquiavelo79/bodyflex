DROP PROCEDURE IF EXISTS bodyflex.SP_CP_PRO_SERVICIO_PROFESIONAL_AGREGA;
CREATE PROCEDURE bodyflex.`SP_CP_PRO_SERVICIO_PROFESIONAL_AGREGA`( 
                                                IN id VARCHAR(20),
                                                IN rut VARCHAR(10),
                                                OUT codErr INTEGER
                                              )
BEGIN

DECLARE EXIT HANDLER FOR SQLEXCEPTION SET codErr=99;  
SET codErr=0;  
    -- 1 DETERMINAR EXISTENCIA DEL REGISTRO
    IF (SELECT COUNT(*) FROM PROFESIONAL_SERVICIO WHERE SEID=id AND PRUT=rut)=0 THEN
      
      -- 2 INSERTAMOS REGISTRO
      INSERT INTO PROFESIONAL_SERVICIO(
        PRUT
        , SEID
      )VALUES(
        rut
        , id
      );
      
      -- 3 OBTENEMOS ULTIMO DPOID INGRESADO
      SET @id = (SELECT SEID FROM PROFESIONAL_SERVICIO WHERE PRUT=rut ORDER BY PSID DESC LIMIT 1);   
     
      SET codErr=1;
      SELECT @id AS ID;
    
    ELSE -- EL REGISTRO EXISTE  
      
      SET codErr=98;
      
    END IF;
      
END;
