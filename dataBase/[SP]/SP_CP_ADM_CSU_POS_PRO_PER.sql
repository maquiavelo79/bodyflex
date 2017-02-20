-- SELECT * FROM REGION;
-- SELECT * FROM PROVINCIA;
-- SELECT * FROM COMUNA;
-- SELECT * FROM DIRECCION;
-- SELECT * FROM PROFESIONAL_DIRECCION;
-- SELECT * FROM PROFESIONAL;
-- SELECT * FROM POSTULACION;

-- CALL SP_CP_ADM_CSU_POS_PRO_PER(1,@codErr,@estado,@rut,@nombres,@apellidos,@email);
-- SELECT @codErr,@estado,@rut,@nombres,@apellidos,@email;

-- CALL SP_CP_ADM_CSU_POS_PRO_PER(12,@codErr,@estado,@rut,@nombres,@apellidos,@email);
-- SELECT @codErr,@estado,@rut,@nombres,@apellidos,@email;

DROP PROCEDURE IF EXISTS bodyflex.SP_CP_ADM_CSU_POS_PRO_PER;
CREATE PROCEDURE bodyflex.`SP_CP_ADM_CSU_POS_PRO_PER`(
                                                        IN id VARCHAR(20)
                                                        , OUT codErr INTEGER
                                                        , OUT estado VARCHAR(20)
                                                        , OUT rut VARCHAR(20)
                                                        , OUT nombres VARCHAR(100)
                                                        , OUT apellidos VARCHAR(100)
                                                        , OUT email VARCHAR(100)
                                                      ) 
BEGIN
  
  DECLARE EXIT HANDLER FOR SQLEXCEPTION SET codErr=99;
  SET codErr=0;
    IF EXISTS(SELECT * FROM PROFESIONAL WHERE pId = id) THEN -- VALIDAMOS REGISTRO
      
      SET @ESTADO=(SELECT PEST FROM PROFESIONAL WHERE PID=id);
      SET @RUT=(SELECT CONCAT(PRUT,'-',PDV) FROM PROFESIONAL WHERE PID=id);
      SET @NOMBRES=(SELECT PNOM FROM PROFESIONAL WHERE PID=id);
      SET @APELLIDOS=(SELECT PAPE FROM PROFESIONAL WHERE PID=id);
      SET @MAIL=(SELECT PMAIL FROM PROFESIONAL WHERE PID=id);
            
      SET estado = @ESTADO;
      SET rut = @RUT;
      SET nombres = @NOMBRES;
      SET apellidos = @APELLIDOS;
      SET email = @MAIL;
    
      SET @vPRUT = (SELECT PRUT FROM PROFESIONAL WHERE PID=id); 
            
      IF EXISTS(SELECT * FROM PROFESIONAL_PERFIL WHERE PRUT=@vPRUT) THEN
      
        SELECT PERID
        , PEREST1
        , PEREST2
        , PEREST3
        , PEREST4
        , PEREST5
        , PEREST6
        , PERCER
        , PERDIP
        , PERTOR
        , PERSEX
        , PEREXP
        , PERREG
        , PEREDA
        , PERESP
        FROM PROFESIONAL_PERFIL PP 
        WHERE PP.PRUT=@vPRUT;
              
      ELSE
        SET codErr=97; -- PROFESIONAL SIN PERFIL
      END IF;
              
    ELSE
      SET codErr=98; -- POSTULANTE NO REGISTRADO
    END IF;
  
END




