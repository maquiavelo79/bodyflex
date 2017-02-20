SET PAG=CEILING(@CANT/10);
      -- SELECT * FROM COLECCION_PRODUCTO;    
      WHILE CONT<PAG DO
        IF CONT=0 THEN            
          CREATE TEMPORARY TABLE TMP_Pag1 
          SELECT CP.cprId
          FROM PRODUCTO P, COLECCION_PRODUCTO CP 
          WHERE CP.PROID = P.PROID AND P.proPE=1 
          AND (P.PCP1_ID=cat1 OR cat1=0) 
          AND (P.PCP2_ID=cat2 OR cat2=0) 
          AND (P.PCP3_ID=cat3 OR cat3=0)
          ORDER BY CP.cprId DESC LIMIT 10;                     
        ELSE
          CREATE TEMPORARY TABLE TMP_Pag1 
          SELECT CP.cprId
          FROM PRODUCTO P, COLECCION_PRODUCTO CP 
          WHERE CP.PROID = P.PROID AND P.proId<id 
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
            SELECT CP.cprId
            , P.proId
            , P.proNo
            , P.proMa
            , P.proEt
            , @CANT AS 'CANT'
            , PAG AS 'PAG'
            , ULTIMOS AS 'ULT'
            , (SELECT CONO FROM COLECCION WHERE COID=CP.COID) AS NOMCOL
            , (SELECT COID FROM COLECCION WHERE COID=CP.COID) AS CODCOL
            FROM PRODUCTO P, COLECCION_PRODUCTO CP 
            WHERE CP.PROID = P.PROID AND P.proId<=ULTIMO 
            AND P.proPE=1
            AND (P.PCP1_ID=cat1 OR cat1=0) 
            AND (P.PCP2_ID=cat2 OR cat2=0) 
            AND (P.PCP3_ID=cat3 OR cat3=0)
            ORDER BY CP.cprId DESC
            LIMIT 10;
          ELSE
            CREATE TEMPORARY TABLE TMP_Pag2
            SELECT CP.cprId
            , P.proId
            , P.proNo
            , P.proMa
            , P.proEt
            , @CANT AS 'CANT'
            , PAG AS 'PAG'
            , ULTIMOS AS 'ULT'
            , (SELECT CONO FROM COLECCION WHERE COID=CP.COID) AS NOMCOL
            , (SELECT COID FROM COLECCION WHERE COID=CP.COID) AS CODCOL
            FROM PRODUCTO P, COLECCION_PRODUCTO CP
            WHERE CP.PROID = P.PROID AND proPE=1
            AND (P.PCP1_ID=cat1 OR cat1=0) 
            AND (P.PCP2_ID=cat2 OR cat2=0) 
            AND (P.PCP3_ID=cat3 OR cat3=0)
            ORDER BY CP.cprId DESC
            LIMIT 10;
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