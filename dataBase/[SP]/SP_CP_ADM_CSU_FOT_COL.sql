
-- SELECT * FROM COLECCION

CALL SP_CP_ADM_CSU_FOT_COL(@codErr
, @foto1
, @foto2
, @foto3
, @foto4
, @foto5
, @foto6
, @foto7
, @foto8
, @foto9
, @foto10
, @foto11
, @foto12
, @foto13
, @foto14
, @foto15
, @foto16
, @foto17
, @foto18
, @foto19
, @foto20
);

SELECT @codErr, @foto1, @foto2, @foto3, @foto4, @foto5, @foto6, @foto7, @foto8, @foto9, @foto10
, @foto11, @foto12, @foto13, @foto14, @foto15, @foto16, @foto17, @foto18, @foto19, @foto20;

DROP PROCEDURE IF EXISTS bodyflex.SP_CP_ADM_CSU_FOT_COL;
CREATE PROCEDURE bodyflex.`SP_CP_ADM_CSU_FOT_COL`(
                                                    OUT codErr INTEGER
                                                  , OUT foto1 VARCHAR(50)  
                                                  , OUT foto2 VARCHAR(50)
                                                  , OUT foto3 VARCHAR(50)
                                                  , OUT foto4 VARCHAR(50)
                                                  , OUT foto5 VARCHAR(50)
                                                  , OUT foto6 VARCHAR(50)
                                                  , OUT foto7 VARCHAR(50)
                                                  , OUT foto8 VARCHAR(50)
                                                  , OUT foto9 VARCHAR(50)
                                                  , OUT foto10 VARCHAR(50)
                                                  , OUT foto11 VARCHAR(50)
                                                  , OUT foto12 VARCHAR(50)
                                                  , OUT foto13 VARCHAR(50)
                                                  , OUT foto14 VARCHAR(50)
                                                  , OUT foto15 VARCHAR(50)
                                                  , OUT foto16 VARCHAR(50)
                                                  , OUT foto17 VARCHAR(50)
                                                  , OUT foto18 VARCHAR(50)
                                                  , OUT foto19 VARCHAR(50)
                                                  , OUT foto20 VARCHAR(50)
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
   
    SET foto1=(SELECT PARVAL FROM PARAMETROS WHERE PARNOM='FCATP1');
    SET foto2=(SELECT PARVAL FROM PARAMETROS WHERE PARNOM='FCATP2');
    SET foto3=(SELECT PARVAL FROM PARAMETROS WHERE PARNOM='FCATP3');
    SET foto4=(SELECT PARVAL FROM PARAMETROS WHERE PARNOM='FCATP4');
    SET foto5=(SELECT PARVAL FROM PARAMETROS WHERE PARNOM='FCATP5');
    SET foto6=(SELECT PARVAL FROM PARAMETROS WHERE PARNOM='FCATP6');
    SET foto7=(SELECT PARVAL FROM PARAMETROS WHERE PARNOM='FCATP7');
    SET foto8=(SELECT PARVAL FROM PARAMETROS WHERE PARNOM='FCATP8');
    SET foto9=(SELECT PARVAL FROM PARAMETROS WHERE PARNOM='FCATP9');
    SET foto10=(SELECT PARVAL FROM PARAMETROS WHERE PARNOM='FCATP10');
                
    SET foto11=(SELECT PARVAL FROM PARAMETROS WHERE PARNOM='FCATD1');
    SET foto12=(SELECT PARVAL FROM PARAMETROS WHERE PARNOM='FCATD2');
    SET foto13=(SELECT PARVAL FROM PARAMETROS WHERE PARNOM='FCATD3');
    SET foto14=(SELECT PARVAL FROM PARAMETROS WHERE PARNOM='FCATD4');
    SET foto15=(SELECT PARVAL FROM PARAMETROS WHERE PARNOM='FCATD5');
    SET foto16=(SELECT PARVAL FROM PARAMETROS WHERE PARNOM='FCATD6');
    SET foto17=(SELECT PARVAL FROM PARAMETROS WHERE PARNOM='FCATD7');
    SET foto18=(SELECT PARVAL FROM PARAMETROS WHERE PARNOM='FCATD8');
    SET foto19=(SELECT PARVAL FROM PARAMETROS WHERE PARNOM='FCATD9');
    SET foto20=(SELECT PARVAL FROM PARAMETROS WHERE PARNOM='FCATD10');
    
  ELSE
    SET codErr=98;
  END IF;
END;
