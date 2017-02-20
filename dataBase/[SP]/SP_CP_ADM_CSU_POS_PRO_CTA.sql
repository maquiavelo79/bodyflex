/*
SELECT * FROM PROFESIONAL_CUENTAS;
SELECT * FROM PROFESIONAL_DIRECCION;
SELECT * FROM PROFESIONAL;

CALL SP_CP_ADM_CSU_POS_PRO_CTA(1,@codErr,@estado,@rut,@nombres,@apellidos);
SELECT @codErr,@estado,@rut,@nombres,@apellidos;

CALL SP_CP_ADM_CSU_POS_PRO_CTA(12,@codErr,@estado,@rut,@nombres,@apellidos);
SELECT @codErr,@estado,@rut,@nombres,@apellidos;
*/
DROP PROCEDURE IF EXISTS bodyflex.SP_CP_ADM_CSU_POS_PRO_CTA;
CREATE PROCEDURE bodyflex.`SP_CP_ADM_CSU_POS_PRO_CTA`(
                                                        IN vId VARCHAR(20)
                                                        , OUT codErr INTEGER
                                                        , OUT estado VARCHAR(20)
                                                        , OUT rut VARCHAR(20)
                                                        , OUT nombres VARCHAR(100)
                                                        , OUT apellidos VARCHAR(100)
                                                      ) 
BEGIN
  
  DECLARE EXIT HANDLER FOR SQLEXCEPTION SET codErr=99;
  SET codErr=0;
    -- PROFESIONALES CON DIRECCIONES REGISTRADAS
    IF EXISTS(SELECT * FROM PROFESIONAL WHERE pId = vId) THEN
      
      SET @ESTADO=(SELECT PEST FROM PROFESIONAL WHERE PID=vId);
      SET @RUT=(SELECT CONCAT(PRUT,'-',PDV) FROM PROFESIONAL WHERE PID=vId);
      SET @NOMBRES=(SELECT PNOM FROM PROFESIONAL WHERE PID=vId);
      SET @APELLIDOS=(SELECT PAPE FROM PROFESIONAL WHERE PID=vId);
            
      SET estado = @ESTADO;
      SET rut = @RUT;
      SET nombres = @NOMBRES;
      SET apellidos = @APELLIDOS;
            
      SET @vPRUT = (SELECT PRUT FROM PROFESIONAL WHERE PID=vId); 
            
      IF EXISTS(SELECT * FROM PROFESIONAL_CUENTAS WHERE PRUT=@vPRUT) THEN
      
        SELECT PC.proCtaId AS ID
        , (SELECT BCONOM FROM BANCOS WHERE BCOID=PC.BCOID) AS BANCO
        , PC.proCtaNum AS NUMERO
        , PC.proCtaTip AS TIPO
        FROM PROFESIONAL P, PROFESIONAL_CUENTAS PC
        WHERE P.PRUT=PC.PRUT AND P.PRUT=@vPRUT
        ORDER BY PC.proCtaId ASC;
      
      ELSE
        SET codErr=97; -- SIN CUENTAS REGISTRADAS
      END IF;
              
    ELSE
      SET codErr=98; -- POSTULANTE NO REGISTRADO
    END IF;
  
END




