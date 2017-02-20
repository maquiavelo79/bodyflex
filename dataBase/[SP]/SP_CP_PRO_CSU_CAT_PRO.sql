-- CALL SP_CP_PRO_CSU_CAT_PRO('13661574','0','0', @codErr);
-- SELECT @codErr;

-- SELECT * FROM PRODUCTO WHERE PROID=50
-- SELECT * FROM PARAMETROS

-- CALL SP_CP_PRO_CSU_CAT_PRO(9386703,0,0,@codErr);
-- SELECT @codErr AS corErr;

DROP PROCEDURE IF EXISTS bodyflex.SP_CP_PRO_CSU_CAT_PRO;
CREATE PROCEDURE bodyflex.`SP_CP_PRO_CSU_CAT_PRO`(
                                                     IN rut VARCHAR(10)
                                                    , IN sw INTEGER
                                                    , IN ULTIMO VARCHAR(10)
                                                    , OUT codErr INTEGER
                                                 )
BEGIN

  DECLARE CONT INT DEFAULT 0;
  DECLARE CANT INT DEFAULT 0;
  DECLARE PAG INT DEFAULT 0;
  DECLARE ULTIMOS VARCHAR(1000) DEFAULT '';
  DECLARE id INT DEFAULT 0;
  DECLARE pr INT DEFAULT 0;
  -- DECLARE EXIT HANDLER FOR SQLEXCEPTION SET codErr=99;

  SET codErr=0;

  -- CANTIDAD DE PRODUCTOS
    SET @CANT=(
                SELECT COUNT(*) 
                FROM PRODUCTO P, PRODUCTO_PROFESIONAL PP 
                WHERE P.PROID=PP.PROID 
                AND P.PROPE=1 
                AND PP.PRUT=rut
              );

    IF(@CANT)>0 THEN
      
      SET CANT=(
                  SELECT COUNT(*) 
                  FROM PRODUCTO P, PRODUCTO_PROFESIONAL PP 
                  WHERE P.PROID=PP.PROID 
                  AND P.PROPE=1 
                  AND PP.PRUT=rut
                );
                
      SET PAG=CEILING(CANT/10);
          
      WHILE CONT<PAG DO
        -- SELECT * FROM PRODUCTO
        IF CONT=0 THEN            
          CREATE TEMPORARY TABLE TMP_Pag1 
          SELECT P.PROID 
          FROM PRODUCTO P, PRODUCTO_PROFESIONAL PP
          WHERE P.PROID=PP.PROID  AND
                PP.PRUT=rut       AND
                P.proPE = 1 -- REPRESENTA UN PRODUCTO INGRESADO POR EL ADM PARA SER VENVIDO EN PLATAFORMA
          ORDER BY P.PROID DESC LIMIT 10;                     
        ELSE
          CREATE TEMPORARY TABLE TMP_Pag1 
          SELECT P.PROID
          FROM PRODUCTO P, PRODUCTO_PROFESIONAL PP
          WHERE P.PROID=PP.PROID  AND
                PP.PRUT=rut       AND 
                P.PROID<id        AND
                P.proPE = 1 -- REPRESENTA UN PRODUCTO INGRESADO POR EL ADM PARA SER VENVIDO EN PLATAFORMA
          ORDER BY P.PROID DESC LIMIT 10;
        END IF;

        SET id = (SELECT PROID FROM TMP_Pag1 ORDER BY PROID DESC LIMIT 1); -- último paginación
        SET pr = (SELECT PROID FROM TMP_Pag1 ORDER BY PROID ASC LIMIT 1); -- primero paginación
        
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
            SELECT P.PROID
            , P.PRONO
            , case P.marId when 0 then 'SIN MARCA' else (SELECT MARNOM FROM MARCAS WHERE MARID=P.marId) end as PROMA
            , P.PCP1_ID
            , P.PCP2_ID
            , P.PCP3_ID
            , P.PRODE
            , P.PROES
            , CONCAT('$',REPLACE(FORMAT(P.PROPV,0),',','.')) AS PROPV
            , CONCAT('$',REPLACE(FORMAT(P.PROPVP,0),',','.')) AS PROPVP 
            , CONCAT('$',REPLACE(FORMAT(P.PROMC,0),',','.')) AS PROMC 
            , P.PROPO
            , CANT AS 'CANT'
            , PAG AS 'PAG'
            , ULTIMOS AS 'ULT'
            , CONCAT('$',REPLACE(FORMAT(P.PROIV,0),',','.')) AS PROIV 
            , CONCAT('$',REPLACE(FORMAT(P.PROPN,0),',','.')) AS PROPN
            , CONCAT('$',REPLACE(FORMAT(P.PROCT,0),',','.')) AS PROCT
            , CONCAT('$',REPLACE(FORMAT(P.PROPV - P.PROPVP,0),',','.')) as PROMAR
            FROM PRODUCTO P, PRODUCTO_PROFESIONAL PP 
            WHERE P.PROID=PP.PROID  AND 
                  PP.PRUT=rut       AND 
                  P.PROID<=ULTIMO   AND 
                  P.PROPE=1
            ORDER BY P.PROID DESC
            LIMIT 10;
          ELSE
            SELECT P.PROID
            , P.PRONO
            , case P.marId when 0 then 'SIN MARCA' else (SELECT MARNOM FROM MARCAS WHERE MARID=P.marId) end as PROMA
            , P.PCP1_ID
            , P.PCP2_ID
            , P.PCP3_ID
            , P.PRODE
            , P.PROES
            , CONCAT('$',REPLACE(FORMAT(P.PROPV,0),',','.')) AS PROPV
            , CONCAT('$',REPLACE(FORMAT(P.PROPVP,0),',','.')) AS PROPVP 
            , CONCAT('$',REPLACE(FORMAT(P.PROMC,0),',','.')) AS PROMC 
            , P.PROPO
            , CANT AS 'CANT'
            , PAG AS 'PAG'
            , ULTIMOS AS 'ULT'
            , CONCAT('$',REPLACE(FORMAT(P.PROIV,0),',','.')) AS PROIV 
            , CONCAT('$',REPLACE(FORMAT(P.PROPN,0),',','.')) AS PROPN
            , CONCAT('$',REPLACE(FORMAT(P.PROCT,0),',','.')) AS PROCT
            , CONCAT('$',REPLACE(FORMAT(P.PROPV - P.PROPVP,0),',','.')) as PROMAR
            FROM PRODUCTO P, PRODUCTO_PROFESIONAL PP  
            WHERE P.PROID=PP.PROID  AND 
                  PP.PRUT=rut       AND 
                  P.PROPE=1
            ORDER BY P.PROID DESC
            LIMIT 10;
          END IF;
      END CASE;
      
    ELSE
      SET codErr=98;
    END IF;
  
END




