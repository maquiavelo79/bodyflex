-- SELECT * FROM REGION;
-- SELECT * FROM PROVINCIA;
-- SELECT * FROM COMUNA;
-- SELECT * FROM DIRECCION;
-- SELECT * FROM PROFESIONAL_DIRECCION;
-- SELECT * FROM PROFESIONAL;
-- SELECT * FROM POSTULACION;

-- CALL SP_CP_PRO_CSU_POS_PRO_DIR(1,@codErr,@estado,@rut,@nombres,@apellidos);
-- SELECT @codErr,@estado,@rut,@nombres,@apellidos;

-- CALL SP_CP_PRO_CSU_POS_PRO_DIR(12,@codErr,@estado,@rut,@nombres,@apellidos);
-- SELECT @codErr,@estado,@rut,@nombres,@apellidos;

DROP PROCEDURE IF EXISTS bodyflex.SP_CP_PRO_CSU_POS_PRO_DIR;
CREATE PROCEDURE bodyflex.`SP_CP_PRO_CSU_POS_PRO_DIR`(
                                                        IN id VARCHAR(20)
                                                        , OUT codErr INTEGER
                                                        , OUT estado VARCHAR(20)
                                                        , OUT rut VARCHAR(20)
                                                        , OUT nombres VARCHAR(100)
                                                        , OUT apellidos VARCHAR(100)
                                                      ) 
BEGIN
  
  DECLARE EXIT HANDLER FOR SQLEXCEPTION SET codErr=99;
  SET codErr=0;
    IF EXISTS(SELECT * FROM PROFESIONAL WHERE pId = id) THEN
      
      SET @ESTADO=(SELECT PEST FROM PROFESIONAL WHERE PID=id);
      SET @RUT=(SELECT CONCAT(PRUT,'-',PDV) FROM PROFESIONAL WHERE PID=id);
      SET @NOMBRES=(SELECT PNOM FROM PROFESIONAL WHERE PID=id);
      SET @APELLIDOS=(SELECT PAPE FROM PROFESIONAL WHERE PID=id);
            
      SET estado = @ESTADO;
      SET rut = @RUT;
      SET nombres = @NOMBRES;
      SET apellidos = @APELLIDOS;
            
      SET @vPRUT = (SELECT PRUT FROM PROFESIONAL WHERE PID=id); 
            
      IF EXISTS(SELECT * FROM PROFESIONAL_DIRECCION WHERE PRUT=@vPRUT) THEN
      
        SELECT D.DCOD AS ID
        , (SELECT RNOM FROM REGION WHERE RCOD=D.RCOD) AS NOMREGION
        , (SELECT PROVNOM FROM PROVINCIA WHERE PROVCOD=D.PROVCOD) AS NOMPROVINCIA 
        , (SELECT CNOM FROM COMUNA WHERE CCOD=D.CCOD) AS NOMCOMUNA
        , D.DNOMTIPO AS NOMTIPO
        , D.DCALLE AS CALLE
        , D.DVILLAPOB AS VILLA
        , D.DNUMERO AS NUMERO
        , D.DPUBLICA AS PUBLICA
        , D.RCOD AS CODREGION
        , D.PROVCOD AS CODPROVINCIA
        , D.CCOD AS CODCOMUNA
        , D.DCODTIPO AS CODTIPO
        , D.DFECING AS FECHAING
        FROM DIRECCION D, PROFESIONAL_DIRECCION DP 
        WHERE D.DCOD=DP.DCOD AND DP.PRUT=@vPRUT
        ORDER BY D.DFECING DESC;
      
      ELSE
        SET codErr=97; -- SIN DIRECCIONES ASOCIADAS
      END IF;
              
    ELSE
      SET codErr=98; -- POSTULANTE NO REGISTRADO
    END IF;
  
END




