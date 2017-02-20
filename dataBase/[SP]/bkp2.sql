CALL SP_CP_ADM_CSU_PRO_COL(1,0,0,0,@codErr);
SELECT @codErr;

CALL SP_CP_ADM_CSU_PRO_COL(3,0,0,0,@codErr);
SELECT @codErr;

CALL SP_CP_ADM_CSU_PRO_COL(2,0,0,0,@codErr);
SELECT @codErr;

-- SELECT * FROM COLECCION_PRODUCTO;
-- SELECT * FROM PRODUCTO_CATEGORIA1

DROP PROCEDURE IF EXISTS bodyflex.SP_CP_ADM_CSU_PRO_COL ;
CREATE PROCEDURE bodyflex.`SP_CP_ADM_CSU_PRO_COL`(
                                                    IN cat1 INTEGER
                                                    , IN cat2 INTEGER
                                                    , IN cat3 INTEGER
                                                    , IN ULTIMO VARCHAR(10)
                                                    , OUT codErr INTEGER
                                                 )
BEGIN

  DECLARE CONT INT DEFAULT 0;
  DECLARE PAG INT DEFAULT 0;
  DECLARE ULTIMOS VARCHAR(1000) DEFAULT '';
  DECLARE id INT DEFAULT 0;
  DECLARE pr INT DEFAULT 0;
  DECLARE sw INT DEFAULT 0;
  -- DECLARE EXIT HANDLER FOR SQLEXCEPTION SET codErr=99;
  
  SET codErr=0;

  -- EXISTENCIA DE PRODUCTOS
    SET @CANT=(
                SELECT COUNT(*) 
                FROM PRODUCTO P
                LEFT JOIN COLECCION_PRODUCTO CP ON P.PROID = CP.PROID
                WHERE P.PROPE=1 
                AND (P.PCP1_ID=cat1 OR cat1=0) 
                AND (P.PCP2_ID=cat2 OR cat2=0) 
                AND (P.PCP3_ID=cat3 OR cat3=0)
              );
              
    -- UNIMOS TABLA
    
    

    IF(@CANT)>0 THEN
                
      SET PAG=CEILING(@CANT/10);
          
      WHILE CONT<PAG DO
        -- SELECT * FROM PRODUCTO
        IF CONT=0 THEN            
          CREATE TEMPORARY TABLE TMP_Pag1 
          SELECT CP.cprId
          FROM PRODUCTO P
          LEFT JOIN COLECCION_PRODUCTO CP ON P.PROID = CP.PROID
          WHERE P.proPE=1 
          AND (P.PCP1_ID=cat1 OR cat1=0) 
          AND (P.PCP2_ID=cat2 OR cat2=0)
          AND (P.PCP3_ID=cat3 OR cat3=0)
          ORDER BY CP.cprId DESC LIMIT 10;                     
        ELSE
          CREATE TEMPORARY TABLE TMP_Pag1 
          SELECT CP.cprId
          FROM PRODUCTO P
          LEFT JOIN COLECCION_PRODUCTO CP ON P.PROID = CP.PROID
          WHERE CP.cprId<id 
          AND P.proPE=1
          AND (PCP1_ID=cat1 OR cat1=0) 
          AND (PCP2_ID=cat2 OR cat2=0) 
          AND (PCP3_ID=cat3 OR cat3=0)
          ORDER BY CP.cprId DESC LIMIT 10;
        END IF;

        SET id = (SELECT cprId FROM TMP_Pag1 ORDER BY cprId DESC LIMIT 1); -- último paginación
        SET pr = (SELECT cprId FROM TMP_Pag1 ORDER BY cprId ASC LIMIT 1); -- primero paginación

        SET @DIF=PAG-CONT;
        IF(@DIF<>1)THEN
          SET ULTIMOS = CONCAT(ULTIMOS, CONCAT(CAST(id AS CHAR), '|'));
        ELSE
          SET ULTIMOS = CONCAT(ULTIMOS, CAST(id AS CHAR));
        END IF;

        SET id = pr;            
        DROP TABLE TMP_Pag1;      
        SET CONT = CONT+1;
              
      END WHILE;
            
      CASE
        WHEN sw=0 THEN -- PRIMERA LLAMADA       
          IF(ULTIMO<>0)THEN  
            CREATE TEMPORARY TABLE TMP_Pag2 
            SELECT IFNULL(CP.cprId,0)
            , P.proId
            , P.proNo
            , P.proMa
            , P.proEt
            , @CANT AS 'CANT'
            , PAG AS 'PAG'
            , ULTIMOS AS 'ULT'
            , (SELECT CONO FROM COLECCION WHERE COID=CP.COID) AS NOMCOL
            , (SELECT COID FROM COLECCION WHERE COID=CP.COID) AS CODCOL
            FROM PRODUCTO P
            LEFT JOIN COLECCION_PRODUCTO CP ON P.PROID = CP.PROID
            WHERE P.proPE=1 
            AND (P.PCP1_ID=cat1 OR cat1=0) 
            AND (P.PCP2_ID=cat2 OR cat2=0)
            AND (P.PCP3_ID=cat3 OR cat3=0)
            ORDER BY CP.cprId DESC LIMIT 10;      
          ELSE
            CREATE TEMPORARY TABLE TMP_Pag2
            SELECT IFNULL(CP.cprId,0)
            , P.proId
            , P.proNo
            , P.proMa
            , P.proEt
            , @CANT AS 'CANT'
            , PAG AS 'PAG'
            , ULTIMOS AS 'ULT'
            , (SELECT CONO FROM COLECCION WHERE COID=CP.COID) AS NOMCOL
            , (SELECT COID FROM COLECCION WHERE COID=CP.COID) AS CODCOL
            FROM PRODUCTO P
            LEFT JOIN COLECCION_PRODUCTO CP ON P.PROID = CP.PROID
            WHERE CP.cprId<id 
            AND P.proPE=1
            AND (PCP1_ID=cat1 OR cat1=0) 
            AND (PCP2_ID=cat2 OR cat2=0) 
            AND (PCP3_ID=cat3 OR cat3=0)
            ORDER BY CP.cprId DESC LIMIT 10;
          END IF;
      END CASE;
      
      SELECT cprId 
      , proId
      , proNo
      , proMa
      , proEt
      , CANT
      , PAG
      , ULTIMOS
      , NOMCOL
      , CODCOL
      , (SELECT PCO_DRI FROM PRODUCTO_CONTENIDO PC WHERE PC.PROID=tt2.PROID AND PC.PCO_PRI=1 ORDER BY proId DESC LIMIT 1) AS GD
      FROM TMP_Pag2 tt2;
      DROP TABLE TMP_Pag2;      
                        
    ELSE
      SET codErr=98;
    END IF;
  
END
  