CALL SP_CP_ADM_CSU_PRO_COL(1,0,0,0,@codErr);
SELECT @codErr;

CALL SP_CP_ADM_CSU_PRO_COL(1,1,0,0,@codErr);
SELECT @codErr;

CALL SP_CP_ADM_CSU_PRO_COL(1,1,4,0,@codErr);
SELECT @codErr;

CALL SP_CP_ADM_CSU_PRO_COL(2,0,0,0,@codErr);
SELECT @codErr;

CALL SP_CP_ADM_CSU_PRO_COL(3,0,0,0,@codErr);
SELECT @codErr;

-- SELECT * FROM COLECCION_PRODUCTO;'CP.COID
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
                WHERE P.PROPE=1 
                AND (P.PCP1_ID=cat1 OR cat1=0) 
                AND (P.PCP2_ID=cat2 OR cat2=0) 
                AND (P.PCP3_ID=cat3 OR cat3=0)
              );
  
    IF(@CANT)>0 THEN
                
      SET PAG=CEILING(@CANT/10);
          
      WHILE CONT<PAG DO

        IF CONT=0 THEN            
          CREATE TEMPORARY TABLE TMP_Pag1 
          SELECT P.proId
          FROM PRODUCTO P
          WHERE P.proPE=1 
          AND (P.PCP1_ID=cat1 OR cat1=0) 
          AND (P.PCP2_ID=cat2 OR cat2=0)
          AND (P.PCP3_ID=cat3 OR cat3=0)
          ORDER BY P.proId DESC LIMIT 10;                     
        ELSE
          CREATE TEMPORARY TABLE TMP_Pag1 
          SELECT P.proId
          FROM PRODUCTO P
          WHERE P.proId<id 
          AND P.proPE=1
          AND (PCP1_ID=cat1 OR cat1=0) 
          AND (PCP2_ID=cat2 OR cat2=0) 
          AND (PCP3_ID=cat3 OR cat3=0)
          ORDER BY P.proId DESC LIMIT 10;
        END IF;

        SET id = (SELECT proId FROM TMP_Pag1 ORDER BY proId DESC LIMIT 1); -- último paginación
        SET pr = (SELECT proId FROM TMP_Pag1 ORDER BY proId ASC LIMIT 1); -- primero paginación

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
               
      IF(ULTIMO<>0)THEN  

        CREATE TEMPORARY TABLE TMP_Pag2
        SELECT P.proId
        , P.proNo
        , case P.marId when 0 then 'SIN MARCA' else (SELECT MARNOM FROM MARCAS WHERE MARID=P.marId) end as PROMA
        , P.proEt
        , @CANT AS 'CANT'
        , PAG AS 'PAG'
        , ULTIMOS AS 'ULT'
        , (SELECT PCO_DRI FROM PRODUCTO_CONTENIDO PC WHERE PC.PROID=P.PROID AND PC.PCO_PRI=1 ORDER BY PC.proId DESC LIMIT 1) AS GD
        , (SELECT PCP1_ID FROM PRODUCTO_CATEGORIA1 WHERE PCP1_ID=P.PCP1_ID) AS CAT1_COD
        , (SELECT PCP2_ID FROM PRODUCTO_CATEGORIA2 WHERE PCP2_ID=P.PCP2_ID) AS CAT2_COD
        , (SELECT PCP3_ID FROM PRODUCTO_CATEGORIA3 WHERE PCP3_ID=P.PCP3_ID) AS CAT3_COD
        , (SELECT PCP1_NOM FROM PRODUCTO_CATEGORIA1 WHERE PCP1_ID=P.PCP1_ID) AS CAT1_NOM
        , (SELECT PCP2_NOM FROM PRODUCTO_CATEGORIA2 WHERE PCP2_ID=P.PCP2_ID) AS CAT2_NOM
        , (SELECT PCP3_NOM FROM PRODUCTO_CATEGORIA3 WHERE PCP3_ID=P.PCP3_ID) AS CAT3_NOM
        FROM PRODUCTO P
        WHERE P.proId<id 
        AND P.proPE=1
        AND (PCP1_ID=cat1 OR cat1=0) 
        AND (PCP2_ID=cat2 OR cat2=0) 
        AND (PCP3_ID=cat3 OR cat3=0)
        ORDER BY P.proId DESC LIMIT 10;
        
      ELSE

        CREATE TEMPORARY TABLE TMP_Pag2
        SELECT P.proId
        , P.proNo
        , case P.marId when 0 then 'SIN MARCA' else (SELECT MARNOM FROM MARCAS WHERE MARID=P.marId) end as PROMA
        , P.proEt
        , @CANT AS 'CANT'
        , PAG AS 'PAG'
        , ULTIMOS AS 'ULT'
        , (SELECT PCO_DRI FROM PRODUCTO_CONTENIDO PC WHERE PC.PROID=P.PROID AND PC.PCO_PRI=1 ORDER BY PC.proId DESC LIMIT 1) AS GD
        , (SELECT PCP1_ID FROM PRODUCTO_CATEGORIA1 WHERE PCP1_ID=P.PCP1_ID) AS CAT1_COD
        , (SELECT PCP2_ID FROM PRODUCTO_CATEGORIA2 WHERE PCP2_ID=P.PCP2_ID) AS CAT2_COD
        , (SELECT PCP3_ID FROM PRODUCTO_CATEGORIA3 WHERE PCP3_ID=P.PCP3_ID) AS CAT3_COD
        , (SELECT PCP1_NOM FROM PRODUCTO_CATEGORIA1 WHERE PCP1_ID=P.PCP1_ID) AS CAT1_NOM
        , (SELECT PCP2_NOM FROM PRODUCTO_CATEGORIA2 WHERE PCP2_ID=P.PCP2_ID) AS CAT2_NOM
        , (SELECT PCP3_NOM FROM PRODUCTO_CATEGORIA3 WHERE PCP3_ID=P.PCP3_ID) AS CAT3_NOM
        FROM PRODUCTO P
        WHERE P.proPE=1
        AND (PCP1_ID=cat1 OR cat1=0) 
        AND (PCP2_ID=cat2 OR cat2=0) 
        AND (PCP3_ID=cat3 OR cat3=0)
        ORDER BY P.proId DESC LIMIT 10;
        
      END IF;
                    
      SELECT * FROM TMP_Pag2;
      DROP TABLE TMP_Pag2;
                                            
    ELSE
      SET codErr=98;
    END IF;
  
END
  