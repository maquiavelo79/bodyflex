CALL SP_CAT_CSU_VIT(@codErr);
SELECT @codErr;

-- SELECT * FROM PRODUCTO_CONTENIDO
-- SELECT * FROM PRODUCTO_MEDIDA
-- SELECT * FROM PRODUCTO
-- REPLACE(string_column, 'search', 'replace')

DROP PROCEDURE IF EXISTS bodyflex.SP_CAT_CSU_VIT;
CREATE PROCEDURE bodyflex.`SP_CAT_CSU_VIT`(OUT codErr INTEGER)
BEGIN
  
  -- DECLARE EXIT HANDLER FOR SQLEXCEPTION SET codErr=99;
  SET codErr=0;
  SET @numero1=0;  
  SET @numero2=0;  
  SET @URL_DRIVE=(SELECT PARVAL FROM PARAMETROS WHERE PARNOM='DRIVE');
  
  CREATE TEMPORARY TABLE tmp_pro_med (
    PROID VARCHAR(10) NOT NULL
    , SMEDIDAS VARCHAR(100) NOT NULL
  );

  IF EXISTS(SELECT * FROM PRODUCTO WHERE PROPE=1 AND PROENVI=1) THEN
    
    CREATE TEMPORARY TABLE TMP_proVit
    SELECT @numero1:=@numero1+1 AS POS
    , P.PROID
    , REPLACE(@URL_DRIVE, 'FILEID', PC.PCO_DRI) AS DRIVE
    , P.PRONO
    , P.PRODE
    , CONCAT('$',REPLACE(FORMAT(P.PROPVP,0),',','.')) AS PROPVP
    , CONCAT('$',REPLACE(FORMAT(P.PROPVAPRO,0),',','.')) AS PROPVAPRO
    , (SELECT petCon FROM PRODUCTO_ETIQUETA WHERE PETID=P.PETID) AS ETIQUETA
    , case P.marId when 0 then 'SIN MARCA' else (SELECT MARNOM FROM MARCAS WHERE MARID=P.marId) end as PROMA
    FROM PRODUCTO P, PRODUCTO_CONTENIDO PC 
    WHERE P.PROID=PC.PROID AND PC.PCO_PRI=1 AND P.PROPE=1 AND P.PROENVI=1
    ORDER BY PROID ASC; 
    
    -- 2° RECORREMOS TABLA TEMPORAL
    SET @REGISTROS=(SELECT COUNT(*) FROM TMP_proVit);
    SET @CONT=1;   
    WHILE @CONT<=@REGISTROS DO
    
      -- 1° Obtenemos ID & N°
      SET @ID=(SELECT PROID FROM TMP_proVit WHERE POS=@CONT);
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
    
    -- MOSTRAMOS RESULTADOS
    SELECT t1.PROID
    , t1.DRIVE
    , t1.PRONO
    , t1.PRODE
    , t1.PROPVP
    , t1.ETIQUETA
    , t2.SMEDIDAS
    , t1.PROPVAPRO
    , t1.PROMA
    FROM TMP_proVit t1, tmp_pro_med t2
    WHERE t1.PROID=t2.PROID
    ORDER BY t1.PROID ASC;
    
    DROP TABLE TMP_proVit;
    DROP TABLE tmp_pro_med;  

  ELSE
    SET codErr=98;  
  END IF;
 
END




