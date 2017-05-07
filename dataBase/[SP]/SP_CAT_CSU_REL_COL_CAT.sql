CALL SP_CAT_CSU_REL_COL_CAT(@codErr, @hdr1, @hdr2);
SELECT @codErr, @hdr1, @hdr2;

-- SELECT * FROM COLECCION
-- SELECT * FROM PARAMETROS

DROP PROCEDURE IF EXISTS bodyflex.SP_CAT_CSU_REL_COL_CAT;
CREATE PROCEDURE bodyflex.`SP_CAT_CSU_REL_COL_CAT`(
                                                    OUT codErr INTEGER
                                                    , OUT hdr1 VARCHAR(100)
                                                    , OUT hdr2 VARCHAR(100)
                                                  )
BEGIN
  
  -- CONSULTA IMAGENES COLECCION PARA PORTADA DE CATALOGO
  DECLARE EXIT HANDLER FOR SQLEXCEPTION SET codErr=99;
  
  SET codErr=0;
  SET hdr1=(SELECT PARVAL FROM PARAMETROS WHERE PARNOM='HRD1');
  SET hdr2=(SELECT PARVAL FROM PARAMETROS WHERE PARNOM='HDR2');
  
  IF EXISTS(
      SELECT *
      FROM producto p, coleccion_producto cp
      WHERE p.PROID = cp.PROID
      ORDER BY cp.COID, p.PCP1_ID, p.PCP2_ID, p.PCP3_ID ASC
    ) THEN
   
    SET @numero=0;
    CREATE TEMPORARY TABLE TMP_Pag1  
    SELECT @numero:=@numero+1 AS POS
    , cp.COID AS COID
    , (SELECT CONO FROM COLECCION WHERE COID = cp.COID) CONO
    , IFNULL(p.PCP1_ID,0) AS CAT1
    , IFNULL(p.PCP2_ID,0) AS CAT2
    , (SELECT PCP2_NOM FROM producto_categoria2 WHERE producto_categoria2.PCP2_ID = p.PCP2_ID) AS CAT2_NOM
    , IFNULL(p.PCP3_ID,0) AS CAT3
    FROM producto p, coleccion_producto cp
    WHERE p.PROID = cp.PROID
    ORDER BY cp.COID, p.PCP2_ID ASC;

    CREATE TEMPORARY TABLE tmp_col_cat (
    ID bigint not null auto_increment
    , COID VARCHAR(10) NOT NULL
    , CONO VARCHAR(50) NOT NULL
    , CAT1 VARCHAR(10) NOT NULL
    , CAT2 VARCHAR(10) NOT NULL
    , CAT2_NOM VARCHAR(50) NOT NULL
    , CAT3 VARCHAR(10) NOT NULL
    , primary key (ID)
    );

    SET @COID_AUX=(SELECT COID FROM TMP_Pag1 WHERE POS=1);
    SET @CONO_AUX=(SELECT CONO FROM TMP_Pag1 WHERE POS=1);
    SET @CAT1_AUX=(SELECT CAT1 FROM TMP_Pag1 WHERE POS=1);
    SET @CAT2_AUX=(SELECT CAT2 FROM TMP_Pag1 WHERE POS=1);
    SET @CAT2_NOM_AUX=(SELECT CAT2_NOM FROM TMP_Pag1 WHERE POS=1);
    SET @CAT3_AUX=(SELECT CAT3 FROM TMP_Pag1 WHERE POS=1);
   
    SET @CONT=0;
    SET @CANT=(SELECT COUNT(*) FROM TMP_Pag1);
    WHILE @CONT<=@CANT DO
      SET @CONT=@CONT+1;
      IF(@CONT=1)THEN
      
        INSERT INTO tmp_col_cat(
          COID
          , CONO
          , CAT1
          , CAT2
          , CAT2_NOM
          , CAT3
        ) VALUES (
          @COID_AUX
          , @CONO_AUX
          , @CAT1_AUX
          , @CAT2_AUX
          , @CAT2_NOM_AUX
          , @CAT3_AUX
        );
        
      ELSE

          SET @COID=(SELECT COID FROM TMP_Pag1 WHERE POS=@CONT);
          SET @CONO=(SELECT CONO FROM TMP_Pag1 WHERE POS=@CONT);
          SET @CAT1=(SELECT CAT1 FROM TMP_Pag1 WHERE POS=@CONT);
          SET @CAT2=(SELECT CAT2 FROM TMP_Pag1 WHERE POS=@CONT);
          SET @CAT2_NOM=(SELECT CAT2_NOM FROM TMP_Pag1 WHERE POS=@CONT);
          SET @CAT3=(SELECT CAT3 FROM TMP_Pag1 WHERE POS=@CONT);
          
          IF NOT (@COID IS NULL )THEN        
            IF NOT EXISTS(
              SELECT * 
              FROM tmp_col_cat
              WHERE COID=@COID 
              AND CONO=@CONO 
              AND CAT1=@CAT1 
              AND CAT2=@CAT2 
              AND CAT2_NOM=@CAT2_NOM 
              AND CAT3=@CAT3            
            )THEN

              INSERT INTO tmp_col_cat(
                COID
                , CONO
                , CAT1
                , CAT2
                , CAT2_NOM
                , CAT3
              ) VALUES (
                @COID
                , @CONO
                , @CAT1
                , @CAT2
                , @CAT2_NOM
                , @CAT3
              );
                  
            END IF;
          END IF;
          
          SET @COID_AUX=@COID;
          SET @CONO_AUX=@CONO;
          SET @CAT1_AUX=@CAT1;
          SET @CAT2_AUX=@CAT2;
          SET @CAT2_NOM_AUX=@CAT2_NOM;
          SET @CAT3_AUX=@CAT3;
              
          SET @COID=0;
          SET @CONO='';
          SET @CAT1=0;
          SET @CAT2=0;
          SET @CAT2_NOM='';
          SET @CAT3=0;    
                      
      END IF;
                    
    END WHILE;
          
    SELECT * FROM tmp_col_cat ORDER BY COID, CAT1, CAT2, CAT3 ASC;
    -- SELECT * FROM TMP_Pag1; 
    
    DROP TABLE TMP_Pag1;
    DROP TABLE tmp_col_cat;
    
  ELSE
    SET codErr=98;  
  END IF;
 
END

  



-- SELECT * FROM COLECCION C, COLECCION_PRODUCTO CP WHERE C.COID=CP.COID;
-- SELECT * FROM COLECCION
-- SELECT * FROM COLECCION_PRODUCTO

