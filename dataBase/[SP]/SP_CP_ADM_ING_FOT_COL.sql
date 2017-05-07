


DROP PROCEDURE IF EXISTS bodyflex.SP_CP_ADM_ING_FOT_COL;
CREATE PROCEDURE bodyflex.`SP_CP_ADM_ING_FOT_COL`( 
                                                IN vGD1 VARCHAR(50)
                                                , IN vGD2 VARCHAR(50)
                                                , IN vGD3 VARCHAR(50)
                                                , IN vGD4 VARCHAR(50)
                                                , IN vGD5 VARCHAR(50)
                                                , IN vGD6 VARCHAR(50)
                                                , IN vGD7 VARCHAR(50)
                                                , IN vGD8 VARCHAR(50)
                                                , IN vGD9 VARCHAR(50)
                                                , IN vGD10 VARCHAR(50)
                                                , IN vGD11 VARCHAR(50)
                                                , IN vGD12 VARCHAR(50)
                                                , IN vGD13 VARCHAR(50)
                                                , IN vGD14 VARCHAR(50)
                                                , IN vGD15 VARCHAR(50)
                                                , IN vGD16 VARCHAR(50)
                                                , IN vGD17 VARCHAR(50)
                                                , IN vGD18 VARCHAR(50)
                                                , IN vGD19 VARCHAR(50)
                                                , IN vGD20 VARCHAR(50)
                                                , OUT codErr INTEGER
                                              )
BEGIN

DECLARE EXIT HANDLER FOR SQLEXCEPTION SET codErr=99;
SET codErr=0;

   
      DELETE FROM PARAMETROS 
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
      PARNOM='FCATD1' OR
      PARNOM='FCATD2' OR
      PARNOM='FCATD3' OR
      PARNOM='FCATD4' OR
      PARNOM='FCATD5' OR
      PARNOM='FCATD6' OR
      PARNOM='FCATD7' OR
      PARNOM='FCATD8' OR
      PARNOM='FCATD9' OR
      PARNOM='FCATD10' ;    
      
      IF(LENGTH(TRIM(vGD1))>0)THEN
        INSERT INTO PARAMETROS(
          PARNOM
          , PARVAL
        )VALUES(
          'FCATP1'        
          , vGD1
        );
      END IF;  
      IF(LENGTH(TRIM(vGD2))>0)THEN
        INSERT INTO PARAMETROS(
          PARNOM
          , PARVAL
        )VALUES(
          'FCATP2'        
          , vGD2
        );
      END IF;  
      IF(LENGTH(TRIM(vGD3))>0)THEN
        INSERT INTO PARAMETROS(
          PARNOM
          , PARVAL
        )VALUES(
          'FCATP3'        
          , vGD3
        );
      END IF;
      IF(LENGTH(TRIM(vGD4))>0)THEN
        INSERT INTO PARAMETROS(
          PARNOM
          , PARVAL
        )VALUES(
          'FCATP4'        
          , vGD4
        );
      END IF;
      IF(LENGTH(TRIM(vGD5))>0)THEN
        INSERT INTO PARAMETROS(
          PARNOM
          , PARVAL
        )VALUES(
          'FCATP5'        
          , vGD5
        );
      END IF;
      IF(LENGTH(TRIM(vGD6))>0)THEN
        INSERT INTO PARAMETROS(
          PARNOM
          , PARVAL
        )VALUES(
          'FCATP6'        
          , vGD6
        );
      END IF;
      IF(LENGTH(TRIM(vGD7))>0)THEN
        INSERT INTO PARAMETROS(
          PARNOM
          , PARVAL
        )VALUES(
          'FCATP7'        
          , vGD7
        );
      END IF;
      IF(LENGTH(TRIM(vGD8))>0)THEN
        INSERT INTO PARAMETROS(
          PARNOM
          , PARVAL
        )VALUES(
          'FCATP8'        
          , vGD8
        );
      END IF;
      IF(LENGTH(TRIM(vGD9))>0)THEN
        INSERT INTO PARAMETROS(
          PARNOM
          , PARVAL
        )VALUES(
          'FCATP9'        
          , vGD9
        );
      END IF;
      IF(LENGTH(TRIM(vGD10))>0)THEN
        INSERT INTO PARAMETROS(
          PARNOM
          , PARVAL
        )VALUES(
          'FCATP10'        
          , vGD10
        );
      END IF;
      IF(LENGTH(TRIM(vGD11))>0)THEN
        INSERT INTO PARAMETROS(
          PARNOM
          , PARVAL
        )VALUES(
          'FCATD1'        
          , vGD11
        );
      END IF;
      IF(LENGTH(TRIM(vGD12))>0)THEN
        INSERT INTO PARAMETROS(
          PARNOM
          , PARVAL
        )VALUES(
          'FCATD2'        
          , vGD12
        );
      END IF;
      IF(LENGTH(TRIM(vGD13))>0)THEN
        INSERT INTO PARAMETROS(
          PARNOM
          , PARVAL
        )VALUES(
          'FCATD3'        
          , vGD13
        );
      END IF;
      IF(LENGTH(TRIM(vGD14))>0)THEN
        INSERT INTO PARAMETROS(
          PARNOM
          , PARVAL
        )VALUES(
          'FCATD4'        
          , vGD14
        );
      END IF;
      IF(LENGTH(TRIM(vGD15))>0)THEN
        INSERT INTO PARAMETROS(
          PARNOM
          , PARVAL
        )VALUES(
          'FCATD5'        
          , vGD15
        );
      END IF;
      IF(LENGTH(TRIM(vGD16))>0)THEN
        INSERT INTO PARAMETROS(
          PARNOM
          , PARVAL
        )VALUES(
          'FCATD6'        
          , vGD16
        );
      END IF;  
      IF(LENGTH(TRIM(vGD17))>0)THEN
        INSERT INTO PARAMETROS(
          PARNOM
          , PARVAL
        )VALUES(
          'FCATD7'        
          , vGD17
        );
      END IF;
      IF(LENGTH(TRIM(vGD18))>0)THEN
        INSERT INTO PARAMETROS(
          PARNOM
          , PARVAL
        )VALUES(
          'FCATD8'        
          , vGD18
        );
      END IF;
      IF(LENGTH(TRIM(vGD19))>0)THEN
        INSERT INTO PARAMETROS(
          PARNOM
          , PARVAL
        )VALUES(
          'FCATD9'        
          , vGD19
        );
      END IF;
      IF(LENGTH(TRIM(vGD20))>0)THEN
        INSERT INTO PARAMETROS(
          PARNOM
          , PARVAL
        )VALUES(
          'FCATD10'        
          , vGD20
        );
      END IF;    
         
END;
