-- SELECT * FROM PRODUCTO

CALL SP_CP_ADM_CONSULTA_PRODUCTO(0,0,@codErr);
SELECT @codErr AS corErr;




DROP PROCEDURE IF EXISTS bodyflex.SP_CP_ADM_CONSULTA_PRODUCTO ;
CREATE PROCEDURE bodyflex.`SP_CP_ADM_CONSULTA_PRODUCTO`(
                                                    IN sw INTEGER
                                                    , IN ULTIMO VARCHAR(100)
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
        
        SET id = pr;            
        DROP TABLE TMP_Pag1;      
        SET CONT = CONT+1;
              
      END WHILE;

      CASE
        WHEN sw=0 THEN -- PRIMERA LLAMADA       
          IF(ULTIMO<>0)THEN  
            SELECT proId
            , proCo
            , proNo
            , proDe
            , pcp1_id
            , pcp2_id
            , pcp3_id
            , proEs
            , proMa
            , proRu
            , CONCAT('$',REPLACE(FORMAT(proPv,0),',','.')) AS proPv
            , CONCAT('$',REPLACE(FORMAT(proIv,0),',','.')) AS proIv
            , CONCAT('$',REPLACE(FORMAT(proPn,0),',','.')) AS proIv
            , CONCAT('$',REPLACE(FORMAT(proCt,0),',','.')) AS proCt
            , proPo
            , CONCAT('$',REPLACE(FORMAT(proMc,0),',','.')) AS proMc
            , CONCAT('$',REPLACE(FORMAT(proUt,0),',','.')) AS proUt
            , proFi
            , proEt
            , proUn
            , CANT AS 'CANT'
            , PAG AS 'PAG'
            , ULTIMOS AS 'ULT'
            FROM PRODUCTO 
            WHERE proId<=ULTIMO AND proPE=1
            ORDER BY proId DESC
            LIMIT 10;
          ELSE
            SELECT proId
            , proCo
            , proNo
            , proDe
            , pcp1_id
            , pcp2_id
            , pcp3_id
            , proEs
            , proMa
            , proRu
            , CONCAT('$',REPLACE(FORMAT(proPv,0),',','.')) AS proPv
            , CONCAT('$',REPLACE(FORMAT(proIv,0),',','.')) AS proIv
            , CONCAT('$',REPLACE(FORMAT(proPn,0),',','.')) AS proIv
            , CONCAT('$',REPLACE(FORMAT(proCt,0),',','.')) AS proCt
            , proPo
            , CONCAT('$',REPLACE(FORMAT(proMc,0),',','.')) AS proMc
            , CONCAT('$',REPLACE(FORMAT(proUt,0),',','.')) AS proUt
            , proFi
            , proEt
            , proUn
            , CANT AS 'CANT'
            , PAG AS 'PAG'
            , ULTIMOS AS 'ULT'
            FROM PRODUCTO 
            WHERE proPE=1
            ORDER BY proId DESC
            LIMIT 10;
          END IF;
      END CASE;
      
    ELSE
      SET codErr=98;
    END IF;
  
END




