CALL SP_CAT_CSU_PRO_COL(0,3,'','','',1,0,0,0,0,@codErr);
SELECT @codErr;

CALL SP_CAT_CSU_PRO_COL(0,3,'','','',5,0,0,0,0,@codErr);
SELECT @codErr;

CALL SP_CAT_CSU_PRO_COL(0,0,'','','',1,0,0,0,2,@codErr);
SELECT @codErr;

CALL SP_CAT_CSU_PRO_COL(48,0,'','','39',1,0,0,0,0,@codErr);
SELECT @codErr;

DROP PROCEDURE IF EXISTS bodyflex.SP_CAT_CSU_PRO_COL;
CREATE PROCEDURE bodyflex.`SP_CAT_CSU_PRO_COL`(
                                            IN ultimo VARCHAR(10)
                                            , IN rangos VARCHAR(100)
                                            , IN marcas VARCHAR(1000)
                                            , IN colores VARCHAR(1000)
                                            , IN etiquetas VARCHAR(1000)
                                            , IN coleccion VARCHAR(10)
                                            , IN categoria1 VARCHAR(10)
                                            , IN categoria2 VARCHAR(10)
                                            , IN categoria3 VARCHAR(10)
                                            , IN opcion VARCHAR(10)
                                            , OUT codErr INTEGER
                                          )
BEGIN
  
  -- DECLARE EXIT HANDLER FOR SQLEXCEPTION SET codErr=99;
  
  DECLARE CONT INT DEFAULT 0;
  DECLARE CANT INT DEFAULT 0;
  DECLARE PAG INT DEFAULT 0;
  DECLARE ULTIMOS VARCHAR(1000) DEFAULT '';
  DECLARE id INT DEFAULT 0;
  DECLARE pr INT DEFAULT 0;
  
  SET codErr=0;
  SET @numero1=0;  
  SET @numero2=0;  
  SET @URL_DRIVE=(SELECT PARVAL FROM PARAMETROS WHERE PARNOM='DRIVE');
    
  -- opcion =[0|1|2|3] 
  -- 0 = Menor a Mayor
  -- 1 = Mayor a Menor
  -- 2 = Mejor Evaluados
    
  IF EXISTS( 
    
    SELECT *
    FROM PRODUCTO P, COLECCION_PRODUCTO CP 
    WHERE CP.PROID=P.PROID 
    AND P.PROPE=1 
    AND (P.ran_id_pro=rangos OR rangos=0)
    AND (FIND_IN_SET(P.marId, marcas) OR marcas='')
    AND (FIND_IN_SET(P.PETID, etiquetas) OR etiquetas='')
    AND CP.COID=coleccion 
    AND (P.PCP1_ID=categoria1 OR categoria1=0) 
    AND (P.PCP2_ID=categoria2 OR categoria2=0) 
    AND (P.PCP3_ID=categoria3 OR categoria3=0) 
        
  )THEN 
   
    -- 1° DETERMINAR NUMERO DE PAGINACIONES
    SET @CANT=(
      SELECT COUNT(*)
      FROM PRODUCTO P, COLECCION_PRODUCTO CP 
      WHERE CP.PROID=P.PROID 
      AND P.PROPE=1 
      AND (P.ran_id_pro=rangos OR rangos=0)
      AND (FIND_IN_SET(P.marId, marcas) OR marcas='')
      AND (FIND_IN_SET(P.PETID, etiquetas) OR etiquetas='')
      AND CP.COID=coleccion 
      AND (P.PCP1_ID=categoria1 OR categoria1=0) 
      AND (P.PCP2_ID=categoria2 OR categoria2=0) 
      AND (P.PCP3_ID=categoria3 OR categoria3=0)
    ); 
       
    -- 2° DETERMINAR ULTIMOS POR PAGINACIÓN
    SET CANT=@CANT;
    SET PAG=CEILING(CANT/12);

    WHILE CONT<PAG DO
      IF CONT=0 THEN            
        CREATE TEMPORARY TABLE TMP_Pag1 
        SELECT P.PROID
        FROM PRODUCTO P, COLECCION_PRODUCTO CP 
        WHERE CP.PROID=P.PROID 
        AND P.PROPE=1 
        AND (P.ran_id_pro=rangos OR rangos=0)
        AND (FIND_IN_SET(P.marId, marcas) OR marcas='')
        AND (FIND_IN_SET(P.PETID, etiquetas) OR etiquetas='')
        AND CP.COID=coleccion 
        AND (P.PCP1_ID=categoria1 OR categoria1=0) 
        AND (P.PCP2_ID=categoria2 OR categoria2=0) 
        AND (P.PCP3_ID=categoria3 OR categoria3=0)
        ORDER BY P.PROID DESC LIMIT 12; 
      ELSE
        CREATE TEMPORARY TABLE TMP_Pag1 
        SELECT P.PROID
        FROM PRODUCTO P, COLECCION_PRODUCTO CP 
        WHERE CP.PROID=P.PROID 
        AND P.PROPE=1 
        AND P.proId<id 
        AND (P.ran_id_pro=rangos OR rangos=0)
        AND (FIND_IN_SET(P.marId, marcas) OR marcas='')
        AND (FIND_IN_SET(P.PETID, etiquetas) OR etiquetas='')
        AND CP.COID=coleccion 
        AND (P.PCP1_ID=categoria1 OR categoria1=0) 
        AND (P.PCP2_ID=categoria2 OR categoria2=0) 
        AND (P.PCP3_ID=categoria3 OR categoria3=0)
        ORDER BY P.PROID DESC LIMIT 12; 
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
    
    -- 3° OBTENEMOS LOS PRODUCTOS
    IF ultimo=0 THEN
    
      CREATE TEMPORARY TABLE TMP_productos1
      SELECT P.PROID
      , REPLACE(@URL_DRIVE, 'FILEID', (SELECT PC.PCO_DRI FROM PRODUCTO_CONTENIDO PC WHERE P.PROID=PC.PROID AND PC.PCO_PRI=1 LIMIT 1)) AS DRIVE
      , P.PRONO
      , P.PRODE
      , CONCAT('$',REPLACE(FORMAT(P.PROPVP,0),',','.')) AS PROPVP
      , CONCAT('$',REPLACE(FORMAT(P.PROPVAPRO,0),',','.')) AS PROPVAPRO
      , (SELECT petCon FROM PRODUCTO_ETIQUETA WHERE PETID=P.PETID) AS ETIQUETA
      , case P.marId when 0 then 'SIN MARCA' else (SELECT MARNOM FROM MARCAS WHERE MARID=P.marId) end as PROMA
      , P.ran_id_pro
      , P.MARID
      , P.PETID
      , CANT
      , PAG 
      , ULTIMOS
      , P.PROPVP AS PROPVP2
      FROM PRODUCTO P, COLECCION_PRODUCTO CP 
      WHERE CP.PROID=P.PROID 
      AND P.PROPE=1 
      AND (P.ran_id_pro=rangos OR rangos=0)
      AND (FIND_IN_SET(P.marId, marcas) OR marcas='')
      AND (FIND_IN_SET(P.PETID, etiquetas) OR etiquetas='')
      AND CP.COID=coleccion 
      AND (P.PCP1_ID=categoria1 OR categoria1=0) 
      AND (P.PCP2_ID=categoria2 OR categoria2=0) 
      AND (P.PCP3_ID=categoria3 OR categoria3=0)
      ORDER BY P.PROID DESC LIMIT 12; 
      
    ELSE
    
      CREATE TEMPORARY TABLE TMP_productos1
      SELECT P.PROID
      , REPLACE(@URL_DRIVE, 'FILEID', (SELECT PC.PCO_DRI FROM PRODUCTO_CONTENIDO PC WHERE P.PROID=PC.PROID AND PC.PCO_PRI=1 LIMIT 1)) AS DRIVE
      , P.PRONO
      , P.PRODE
      , CONCAT('$',REPLACE(FORMAT(P.PROPVP,0),',','.')) AS PROPVP
      , CONCAT('$',REPLACE(FORMAT(P.PROPVAPRO,0),',','.')) AS PROPVAPRO
      , (SELECT petCon FROM PRODUCTO_ETIQUETA WHERE PETID=P.PETID) AS ETIQUETA
      , case P.marId when 0 then 'SIN MARCA' else (SELECT MARNOM FROM MARCAS WHERE MARID=P.marId) end as PROMA
      , P.ran_id_pro
      , P.MARID
      , P.PETID
      , CANT
      , PAG 
      , ULTIMOS
      , P.PROPVP AS PROPVP2
      FROM PRODUCTO P, COLECCION_PRODUCTO CP 
      WHERE CP.PROID=P.PROID 
      AND P.PROPE=1 
      AND P.PROID<=ultimo
      AND (P.ran_id_pro=rangos OR rangos=0)
      AND (FIND_IN_SET(P.marId, marcas) OR marcas='')
      AND (FIND_IN_SET(P.PETID, etiquetas) OR etiquetas='')
      AND CP.COID=coleccion 
      AND (P.PCP1_ID=categoria1 OR categoria1=0) 
      AND (P.PCP2_ID=categoria2 OR categoria2=0) 
      AND (P.PCP3_ID=categoria3 OR categoria3=0)
      ORDER BY P.PROID DESC LIMIT 12; 
    
    END IF;
    
    -- 4° AGREGAMOS UN INDICE INCREMENTAL
    CREATE TEMPORARY TABLE TMP_productos
    SELECT @numero1:=@numero1+1 AS POS
    , PROID
    , DRIVE
    , PRONO
    , PRODE
    , PROPVP
    , PROPVAPRO
    , ETIQUETA
    , PROMA
    , ran_id_pro
    , MARID
    , PETID
    , CANT
    , PAG
    , ULTIMOS
    , PROPVP2 
    FROM TMP_productos1
    ORDER BY POS ASC;
    
    -- 5° CREAMOS TABLA TEMPORAL PARA MEDIDAS
    CREATE TEMPORARY TABLE tmp_pro_med (
      PROID VARCHAR(10) NOT NULL
      , SMEDIDAS VARCHAR(100) NOT NULL
    );
    
    -- 5° RECORREMOS TABLA TEMPORAL
    SET @REGISTROS=(SELECT COUNT(*) FROM TMP_productos);
    SET @CONT=1;   
    WHILE @CONT<=@REGISTROS DO
    
      -- 1° Obtenemos ID & N°
      SET @ID=(SELECT PROID FROM TMP_productos WHERE POS=@CONT);  
      SET @NC=(SELECT COUNT(*) FROM PRODUCTO_MEDIDA WHERE PROID=@ID); 
          
      -- 2° Creamos tbl_tmp
      CREATE TEMPORARY TABLE TMP_proMedidas
      SELECT @numero2:=@numero2+1 AS POS
      , M.MEDVA
      FROM PRODUCTO_MEDIDA PM, MEDIDA M
      WHERE PM.MEDID = M.MEDID AND PROID=@ID;
      
        -- 3° Obtenemos Colores
        SET @SC='';
        SET @TC='';
        SET @CC=1;
        
        WHILE @CC<=@NC DO
          IF @CC<>@NC THEN  
            SET @SC=CONCAT((SELECT MEDVA FROM TMP_proMedidas WHERE POS=@CC),' | ');
          ELSE
            SET @SC=CONCAT((SELECT MEDVA FROM TMP_proMedidas WHERE POS=@CC),' ');
          END IF;  
          SET @TC=CONCAT(@TC,@SC);
          SET @SC='';
          SET @CC=@CC+1;
        END WHILE;
      
      INSERT INTO tmp_pro_med(PROID, SMEDIDAS) VALUES (@ID, @TC);
      DROP TABLE TMP_proMedidas;
                
      SET @TC='';
      SET @ID='';
      SET @NC='';
      SET @numero2=0;  
      SET @CONT=@CONT+1;
    
    END WHILE;
    
    -- 6° UNIMOS PRODUCTOS CON SUS MEDIDAS  
    CREATE TEMPORARY TABLE TMP_registros
    SELECT t1.PROID
    , t1.DRIVE
    , t1.PRONO
    , t1.PRODE
    , t1.PROPVP
    , t1.ETIQUETA
    , t2.SMEDIDAS
    , t1.PROPVAPRO
    , t1.PROMA
    , t1.ran_id_pro
    , t1.MARID
    , t1.PETID
    , t1.CANT
    , t1.PAG
    , t1.ULTIMOS
    , t1.PROPVP2 
    FROM TMP_productos t1, tmp_pro_med t2
    WHERE t1.PROID=t2.PROID
    ORDER BY t1.PROID ASC;    
           
    -- 7° CREAMOS TABLA TEMPORAL DE RESULTADOS
    CREATE TEMPORARY TABLE TMP_resultado
    SELECT * 
    FROM TMP_registros t1;
   
    -- 8° MOSTRAMOS RESULTADO
    IF colores='' THEN
      CREATE TEMPORARY TABLE TMP_ORDEN
      SELECT * FROM TMP_resultado ORDER BY PROID ASC;    
    ELSE
      CREATE TEMPORARY TABLE TMP_ORDEN
      SELECT * FROM TMP_resultado t1
      WHERE t1.PROID IN (SELECT PROID FROM PRODUCTO_COLOR WHERE FIND_IN_SET(PCON, colores)) 
      ORDER BY PROID ASC;
    END IF;
   
    CASE opcion
      WHEN 0 THEN 
        SELECT * FROM TMP_ORDEN ORDER BY PROPVP2 ASC;
      WHEN 1 THEN 
        SELECT * FROM TMP_ORDEN ORDER BY PROPVP2 DESC;
      WHEN 2 THEN 
      
        CREATE TEMPORARY TABLE TMP_SUMAS
        SELECT PROID
        , SUM(PCOPPU) AS SUMA 
        FROM PRODUCTO_COMENTARIO_PROFESIONAL
        GROUP BY PROID
        ORDER BY SUMA DESC;
          
        SELECT O.PROID
        , O.DRIVE
        , O.PRONO
        , O.PRODE
        , O.PROPVP
        , O.ETIQUETA
        , O.SMEDIDAS
        , O.PROPVAPRO
        , O.PROMA
        , O.ran_id_pro
        , O.MARID
        , O.PETID
        , O.CANT
        , O.PAG
        , O.ULTIMOS
        , O.PROPVP2 
        , IFNULL(S.SUMA,0) AS SUMA
        FROM TMP_ORDEN O LEFT JOIN TMP_SUMAS S ON O.PROID = S.PROID
        ORDER BY SUMA DESC;
                
    END CASE;
        
    DROP TABLE IF EXISTS TMP_productos1;        
    DROP TABLE IF EXISTS TMP_productos; 
    DROP TABLE IF EXISTS tmp_pro_med;  
    DROP TABLE IF EXISTS TMP_registros;
    DROP TABLE IF EXISTS TMP_resultado;
    DROP TABLE IF EXISTS TMP_ORDEN;
    DROP TABLE IF EXISTS TMP_SUMAS;
    
  ELSE
    SET codErr=98;
  END IF;
  
END




