

-- select * from COLECCION

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

    IF NOT EXISTS(SELECT * FROM PARAMETROS WHERE PARNOM='FCAT1' OR PARNOM='FCAT2') THEN

      DELETE FROM PARAMETROS WHERE PARNOM='FCAT1' OR PARNOM='FCAT2';
      INSERT INTO PARAMETROS(
        PARNOM
        , PARVAL
      )VALUES(
        'FCATP1'        
        , vGD1
      );
      INSERT INTO PARAMETROS(
        PARNOM
        , PARVAL
      )VALUES(
        'FCATP2'        
        , vGD2
      );
      INSERT INTO PARAMETROS(
        PARNOM
        , PARVAL
      )VALUES(
        'FCATP3'        
        , vGD3
      );
      INSERT INTO PARAMETROS(
        PARNOM
        , PARVAL
      )VALUES(
        'FCATP4'        
        , vGD4
      );
      INSERT INTO PARAMETROS(
        PARNOM
        , PARVAL
      )VALUES(
        'FCATP5'        
        , vGD5
      );
      INSERT INTO PARAMETROS(
        PARNOM
        , PARVAL
      )VALUES(
        'FCATP6'        
        , vGD6
      );
      INSERT INTO PARAMETROS(
        PARNOM
        , PARVAL
      )VALUES(
        'FCATP7'        
        , vGD7
      );
      INSERT INTO PARAMETROS(
        PARNOM
        , PARVAL
      )VALUES(
        'FCATP8'        
        , vGD8
      );
      INSERT INTO PARAMETROS(
        PARNOM
        , PARVAL
      )VALUES(
        'FCATP9'        
        , vGD9
      );
      INSERT INTO PARAMETROS(
        PARNOM
        , PARVAL
      )VALUES(
        'FCATP10'        
        , vGD10
      );
      INSERT INTO PARAMETROS(
        PARNOM
        , PARVAL
      )VALUES(
        'FCATD1'        
        , vGD11
      );
      INSERT INTO PARAMETROS(
        PARNOM
        , PARVAL
      )VALUES(
        'FCATD2'        
        , vGD12
      );
      INSERT INTO PARAMETROS(
        PARNOM
        , PARVAL
      )VALUES(
        'FCATD3'        
        , vGD13
      );
      INSERT INTO PARAMETROS(
        PARNOM
        , PARVAL
      )VALUES(
        'FCATD4'        
        , vGD14
      );
      INSERT INTO PARAMETROS(
        PARNOM
        , PARVAL
      )VALUES(
        'FCATD5'        
        , vGD15
      );
      INSERT INTO PARAMETROS(
        PARNOM
        , PARVAL
      )VALUES(
        'FCATD6'        
        , vGD16
      );
      INSERT INTO PARAMETROS(
        PARNOM
        , PARVAL
      )VALUES(
        'FCATD7'        
        , vGD17
      );
      INSERT INTO PARAMETROS(
        PARNOM
        , PARVAL
      )VALUES(
        'FCATD8'        
        , vGD18
      );
      INSERT INTO PARAMETROS(
        PARNOM
        , PARVAL
      )VALUES(
        'FCATD9'        
        , vGD19
      );
      INSERT INTO PARAMETROS(
        PARNOM
        , PARVAL
      )VALUES(
        'FCATD10'        
        , vGD20
      );
          
    ELSE -- EL REGISTRO EXISTE  

      UPDATE PARAMETROS 
      SET PARNOM = vGD1
      WHERE PARNOM='FCATP1';
      
      UPDATE PARAMETROS 
      SET PARNOM = vGD2
      WHERE PARNOM='FCATP2';
              
      UPDATE PARAMETROS 
      SET PARNOM = vGD3
      WHERE PARNOM='FCATP3';        
              
      UPDATE PARAMETROS 
      SET PARNOM = vGD4
      WHERE PARNOM='FCATP4';    
              
      UPDATE PARAMETROS 
      SET PARNOM = vGD5
      WHERE PARNOM='FCATP5';        
              
      UPDATE PARAMETROS 
      SET PARNOM = vGD6
      WHERE PARNOM='FCATP6';        
              
      UPDATE PARAMETROS 
      SET PARNOM = vGD7
      WHERE PARNOM='FCATP7'; 
              
      UPDATE PARAMETROS 
      SET PARNOM = vGD8
      WHERE PARNOM='FCATP8';        
              
      UPDATE PARAMETROS 
      SET PARNOM = vGD9
      WHERE PARNOM='FCATP9';        
              
      UPDATE PARAMETROS 
      SET PARNOM = vGD10
      WHERE PARNOM='FCATP10';      
              
      UPDATE PARAMETROS 
      SET PARNOM = vGD11
      WHERE PARNOM='FCATD1';  
      
      UPDATE PARAMETROS 
      SET PARNOM = vGD12
      WHERE PARNOM='FCATD2';
      
      UPDATE PARAMETROS 
      SET PARNOM = vGD13
      WHERE PARNOM='FCATD3';
      
      UPDATE PARAMETROS 
      SET PARNOM = vGD14
      WHERE PARNOM='FCATD4';
              
      UPDATE PARAMETROS 
      SET PARNOM = vGD15
      WHERE PARNOM='FCATD5';        
              
      UPDATE PARAMETROS 
      SET PARNOM = vGD16
      WHERE PARNOM='FCATD6';        
              
      UPDATE PARAMETROS 
      SET PARNOM = vGD17
      WHERE PARNOM='FCATD7';        
              
      UPDATE PARAMETROS 
      SET PARNOM = vGD18
      WHERE PARNOM='FCATD8';
      
      UPDATE PARAMETROS 
      SET PARNOM = vGD19
      WHERE PARNOM='FCATD9';
              
      UPDATE PARAMETROS 
      SET PARNOM = vGD20
      WHERE PARNOM='FCATD10';        
              
    END IF;
      
END;
