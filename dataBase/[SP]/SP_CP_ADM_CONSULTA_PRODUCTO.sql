-- SELECT * FROM PRODUCTO
-- SELECT * FROM MARCAS

CALL SP_CP_ADM_CONSULTA_PRODUCTO(0,0,@codErr);
SELECT @codErr AS corErr;

DROP PROCEDURE IF EXISTS bodyflex.SP_CP_ADM_CONSULTA_PRODUCTO ;
CREATE PROCEDURE bodyflex.`SP_CP_ADM_CONSULTA_PRODUCTO`(
                                                    IN sw INTEGER
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
    SET @CANT=(SELECT COUNT(*) FROM PRODUCTO WHERE PROPE=1);

    IF(@CANT)>0 THEN
      
      SET CANT=(SELECT COUNT(*) FROM PRODUCTO WHERE PROPE=1);
      SET PAG=CEILING(CANT/10);
          
      WHILE CONT<PAG DO
        -- SELECT * FROM PRODUCTO
        IF CONT=0 THEN            
          CREATE TEMPORARY TABLE TMP_Pag1 
          SELECT proId 
          FROM PRODUCTO
          WHERE proPE=1
          ORDER BY proId DESC LIMIT 10;                     
        ELSE
          CREATE TEMPORARY TABLE TMP_Pag1 
          SELECT proId
          FROM PRODUCTO 
          WHERE proId<id AND proPE=1   
          ORDER BY proId DESC LIMIT 10;
        END IF;

        SET id = (SELECT proId FROM TMP_Pag1 ORDER BY proId DESC LIMIT 1); -- último paginación
        SET pr = (SELECT proId FROM TMP_Pag1 ORDER BY proId ASC LIMIT 1); -- primero paginación
       
        SET @DIF=PAG-CONT;
        IF(@DIF<>1)THEN
          SET ULTIMOS = CONCAT(ULTIMOS, CONCAT(CAST(id AS CHAR), '|'));
        ELSE
          SET ULTIMOS = CONCAT(ULTIMOS, CAST(id AS CHAR));
        END IF;
        
        -- SELECT PAG, CONT, ULTIMOS;
        
        SET id = pr;            
        DROP TABLE TMP_Pag1;      
        SET CONT = CONT+1;
              
      END WHILE;

      CASE
        WHEN sw=0 THEN -- PRIMERA LLAMADA       
          IF(ULTIMO<>0)THEN  
            SELECT P.proId
            , P.proCo
            , P.proNo
            , P.proDe
            , P.pcp1_id
            , P.pcp2_id
            , P.pcp3_id
            , P.proEs
            , case marId when 0 then 'SIN MARCA' else (SELECT MARNOM FROM MARCAS WHERE MARID=P.marId) end as marca
            , P.proRu
            , CONCAT('$',REPLACE(FORMAT(P.proPv,0),',','.')) AS proPv
            , CONCAT('$',REPLACE(FORMAT(P.proIv,0),',','.')) AS proIv
            , CONCAT('$',REPLACE(FORMAT(P.proPn,0),',','.')) AS proIv
            , CONCAT('$',REPLACE(FORMAT(P.proCt,0),',','.')) AS proCt
            , P.proPo
            , CONCAT('$',REPLACE(FORMAT(P.proMc,0),',','.')) AS proMc
            , CONCAT('$',REPLACE(FORMAT(P.proUt1,0),',','.')) AS proUt1
            , P.proFi
            , P.proEt
            , P.proUn
            , CANT AS 'CANT'
            , PAG AS 'PAG'
            , ULTIMOS AS 'ULT'
            , CONCAT('$',REPLACE(FORMAT(P.proPvp,0),',','.')) AS proPvp
            , CONCAT('$',REPLACE(FORMAT(P.proPvpIva,0),',','.')) AS proPvpIva 
            , CONCAT('$',REPLACE(FORMAT(P.proPvpNet,0),',','.')) AS proPvpNet
            , CONCAT('$',REPLACE(FORMAT(P.proCt2,0),',','.')) AS proCt2 
            , CONCAT('$',REPLACE(FORMAT(P.proUt2,0),',','.')) AS proUt2 
            , CONCAT('$',REPLACE(FORMAT(P.proUt3,0),',','.')) AS proUt3 
            , CONCAT('$',REPLACE(FORMAT(P.proPc,0),',','.')) AS proPc 
            , CONCAT('$',REPLACE(FORMAT(P.proPvaPub,0),',','.')) AS proPvaPub 
            , CONCAT('$',REPLACE(FORMAT(P.proPvaPro,0),',','.')) AS proPvaPro 
            , P.ran_id
            , P.cat_ran_id
            , P.marId
            FROM PRODUCTO P
            WHERE P.proId<=ULTIMO 
            AND P.proPE=1
            ORDER BY P.proId DESC
            LIMIT 10;
          ELSE
            SELECT P.proId
            , P.proCo
            , P.proNo
            , P.proDe
            , P.pcp1_id
            , P.pcp2_id
            , P.pcp3_id
            , P.proEs
            , case marId when 0 then 'SIN MARCA' else (SELECT MARNOM FROM MARCAS WHERE MARID=P.marId) end as marca
            , P.proRu
            , CONCAT('$',REPLACE(FORMAT(P.proPv,0),',','.')) AS proPv
            , CONCAT('$',REPLACE(FORMAT(P.proIv,0),',','.')) AS proIv
            , CONCAT('$',REPLACE(FORMAT(P.proPn,0),',','.')) AS proIv
            , CONCAT('$',REPLACE(FORMAT(P.proCt,0),',','.')) AS proCt
            , P.proPo
            , CONCAT('$',REPLACE(FORMAT(P.proMc,0),',','.')) AS proMc
            , CONCAT('$',REPLACE(FORMAT(P.proUt1,0),',','.')) AS proUt1
            , P.proFi
            , P.proEt
            , P.proUn
            , CANT AS 'CANT'
            , PAG AS 'PAG'
            , ULTIMOS AS 'ULT'
            , CONCAT('$',REPLACE(FORMAT(P.proPvp,0),',','.')) AS proPvp
            , CONCAT('$',REPLACE(FORMAT(P.proPvpIva,0),',','.')) AS proPvpIva 
            , CONCAT('$',REPLACE(FORMAT(P.proPvpNet,0),',','.')) AS proPvpNet
            , CONCAT('$',REPLACE(FORMAT(P.proCt2,0),',','.')) AS proCt2 
            , CONCAT('$',REPLACE(FORMAT(P.proUt2,0),',','.')) AS proUt2 
            , CONCAT('$',REPLACE(FORMAT(P.proUt3,0),',','.')) AS proUt3 
            , CONCAT('$',REPLACE(FORMAT(P.proPc,0),',','.')) AS proPc 
            , CONCAT('$',REPLACE(FORMAT(P.proPvaPub,0),',','.')) AS proPvaPub 
            , CONCAT('$',REPLACE(FORMAT(P.proPvaPro,0),',','.')) AS proPvaPro 
            , P.ran_id
            , P.cat_ran_id
            , P.marId
            FROM PRODUCTO P
            WHERE P.proPE=1
            ORDER BY P.proId DESC
            LIMIT 10;
          END IF;
      END CASE;
      
    ELSE
      SET codErr=98;
    END IF;
  
END




