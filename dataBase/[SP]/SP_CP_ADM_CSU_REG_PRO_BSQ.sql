-- SELECT * FROM REGION;
-- SELECT * FROM PROVINCIA;
-- SELECT * FROM COMUNA;
-- SELECT * FROM DIRECCION;
-- SELECT * FROM PROFESIONAL_DIRECCION;
-- SELECT * FROM PROFESIONAL;
-- SELECT * FROM POSTULACION;

CALL SP_CP_ADM_CSU_REG_PRO_BSQ('fra',@codErr);
SELECT @codErr;
CALL SP_CP_ADM_CSU_REG_PRO_BSQ('1',@codErr);
SELECT @codErr;


-- CALL SP_CP_ADM_CSU_REG_PRO_BSQ(12,@codErr);
-- SELECT @codErr;

DROP PROCEDURE IF EXISTS bodyflex.SP_CP_ADM_CSU_REG_PRO_BSQ;
CREATE PROCEDURE bodyflex.`SP_CP_ADM_CSU_REG_PRO_BSQ`(
                                                        IN bsq VARCHAR(80)
                                                        , OUT codErr INTEGER
                                                      ) 
BEGIN
  
  DECLARE EXIT HANDLER FOR SQLEXCEPTION SET codErr=99;
  SET codErr=0;
  
  /*
  1. ESTADOS POSTULACIÓN:
    1=INGRESADA
    2=EVALUANDO
    3=DETENIDA
    4=APROBANDO
    5=RECHAZANDO
    6=APROBADA
    7=RECHAZADA
    
  2. ESTADOS REGISTRO:  
    8. REGISTRADO
    9. DIRECCIONES
    10. CUENTAS
    11. PERFILADO
    12. ALTA
    
  Solo muestra postulaciones APROBADAS para su registro
  */
    
  SET @ID=bsq;
  SET @BSQ=CONCAT('%',bsq,'%');
  
  IF EXISTS(
    SELECT * 
    FROM POSTULACION
    WHERE POSEMA LIKE @BSQ OR 
    POSNOM LIKE @BSQ OR 
    POSAPE LIKE @BSQ AND
    POSEST IN (6, 8, 9, 10, 11, 12)
  ) THEN
  
    SELECT POSID
    , POSNOM
    , POSAPE
    , POSEMA
    , POSFEC
    , case POSEST 
      when 6 then 'APROBADA'
      when 8 then 'REGISTRADO'
      when 9 then 'DIRECCIONES'
      when 10 then 'CUENTAS'
      when 11 then 'PERFILADO'
      when 12 then 'ALTA'
    end as POSEST
    FROM POSTULACION 
    WHERE POSEMA LIKE @BSQ OR 
    POSNOM LIKE @BSQ OR 
    POSAPE LIKE @BSQ AND
    POSEST IN (6, 8, 9, 10, 11, 12)
    ORDER BY POSFEC, POSNOM, POSAPE DESC;
    
  ELSE
    
    IF EXISTS(
      SELECT * 
      FROM POSTULACION
      WHERE POSID=@ID AND
      POSEST IN (6, 8, 9, 10, 11, 12)
    ) THEN
    
      SELECT POSID
      , POSNOM
      , POSAPE
      , POSEMA
      , POSFEC
      , case POSEST 
        when 6 then 'APROBADA'
        when 8 then 'REGISTRADO'
        when 9 then 'DIRECCIONES'
        when 10 then 'CUENTAS'
        when 11 then 'PERFILADO'
        when 12 then 'ALTA'
      end as POSEST
      FROM POSTULACION 
      WHERE POSID=@ID AND
      POSEST IN (6, 8, 9, 10, 11, 12)
      ORDER BY POSFEC, POSNOM, POSAPE DESC;
    
    ELSE
      SET codErr=98;
    END IF;
    
  END IF;
        
END




