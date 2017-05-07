
-- SELECT * FROM COLECCION

CALL SP_CAT_CSU_FOT(@codErr, @principal, @detalle);
SELECT @codErr, @principal, @detalle;

DROP PROCEDURE IF EXISTS bodyflex.SP_CAT_CSU_FOT;
CREATE PROCEDURE bodyflex.`SP_CAT_CSU_FOT`(
                                            OUT codErr INTEGER
                                            , OUT principal VARCHAR(500)  
                                            , OUT detalle VARCHAR(500)
                                          )
BEGIN
    
  DECLARE EXIT HANDLER FOR SQLEXCEPTION SET codErr=99;  
    
  SET codErr=0;
  IF EXISTS(
    SELECT * FROM PARAMETROS 
    WHERE PARNOM='FCATP1' OR 
    PARNOM='FCATP2' OR 
    PARNOM='FCATP3' OR 
    PARNOM='FCATP4' OR 
    PARNOM='FCATP5' OR 
    PARNOM='FCATP6' OR 
    PARNOM='FCATP7' OR 
    PARNOM='FCATP8' OR 
    PARNOM='FCATP9' OR 
    PARNOM='FCATP10' OR 
    PARNOM='FCATD11' OR
    PARNOM='FCATD12' OR
    PARNOM='FCATD13' OR
    PARNOM='FCATD14' OR
    PARNOM='FCATD15' OR
    PARNOM='FCATD16' OR
    PARNOM='FCATD17' OR
    PARNOM='FCATD18' OR
    PARNOM='FCATD19' OR
    PARNOM='FCATD20'
  ) THEN
  
        SET @URL_DRIVE=(SELECT PARVAL FROM PARAMETROS WHERE PARNOM='DRIVE');
        
        SET principal=(SELECT PARVAL FROM PARAMETROS WHERE PARNOM LIKE CONCAT('%', 'FCAT' ,'%') ORDER BY RAND() ASC LIMIT 1); 
        SET detalle=(
          SELECT PARVAL 
          FROM PARAMETROS 
          WHERE PARNOM='FCATD1' OR
          PARNOM='FCATD2' OR
          PARNOM='FCATD3' OR
          PARNOM='FCATD4' OR
          PARNOM='FCATD5' OR
          PARNOM='FCATD6' OR
          PARNOM='FCATD7' OR
          PARNOM='FCATD8' OR
          PARNOM='FCATD9' OR
          PARNOM='FCATD10' 
          ORDER BY RAND() ASC LIMIT 1);
        
        SET principal=REPLACE(@URL_DRIVE, 'FILEID', principal);
        SET detalle=REPLACE(@URL_DRIVE, 'FILEID', detalle);

  ELSE
    SET codErr=98;
  END IF;
END;
