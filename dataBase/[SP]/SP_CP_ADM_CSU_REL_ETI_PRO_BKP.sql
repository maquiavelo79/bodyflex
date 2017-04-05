-- SELECT * FROM PRODUCTO
-- SELECT * FROM PRODUCTO_ETIQUETA

CALL SP_CP_ADM_CSU_REL_ETI_PRO(0,0,@codErr);
SELECT @codErr AS corErr;

DROP PROCEDURE IF EXISTS bodyflex.SP_CP_ADM_CSU_REL_ETI_PRO ;
CREATE PROCEDURE bodyflex.`SP_CP_ADM_CSU_REL_ETI_PRO`(
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
    SET @CANT=(SELECT COUNT(*) FROM PRODUCTO WHERE proPE=1 AND PETID<>1);

    IF(@CANT)>0 THEN
      
      SET CANT=(SELECT COUNT(*) FROM PRODUCTO WHERE proPE=1 AND PETID<>1);
      SET PAG=CEILING(CANT/10);
          
      WHILE CONT<PAG DO
        -- SELECT * FROM PRODUCTO
        IF CONT=0 THEN            
          CREATE TEMPORARY TABLE TMP_Pag1 
          SELECT proId 
          FROM PRODUCTO
          WHERE proPE=1 AND PETID<>1
          ORDER BY proId DESC LIMIT 10;                     
        ELSE
          CREATE TEMPORARY TABLE TMP_Pag1 
          SELECT proId
          FROM PRODUCTO 
          WHERE proId<id AND proPE=1 AND PETID<>1  
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
            SELECT P.proId
            , P.proNo
            , (SELECT MARNOM FROM MARCAS WHERE MARID=P.marId) as MARCA
            , (SELECT PETNOM FROM PRODUCTO_ETIQUETA WHERE PETID=P.PETID) AS ETIQUETA
            , CANT AS 'CANT'
            , PAG AS 'PAG'
            , ULTIMOS AS 'ULT'
            , p.proEt
            FROM PRODUCTO P
            WHERE P.proId<=ULTIMO AND P.proPE=1 AND PETID<>1
            ORDER BY P.proId DESC
            LIMIT 10;
          ELSE
            SELECT P.proId
            , P.proNo
            , (SELECT MARNOM FROM MARCAS WHERE MARID=P.marId) as MARCA
            , (SELECT PETNOM FROM PRODUCTO_ETIQUETA WHERE PETID=P.PETID) AS ETIQUETA
            , CANT AS 'CANT'
            , PAG AS 'PAG'
            , ULTIMOS AS 'ULT'
            , p.proEt
            FROM PRODUCTO P
            WHERE P.proPE=1 AND PETID<>1
            ORDER BY P.proId DESC
            LIMIT 10;
          END IF;
      END CASE;
      
    ELSE
      SET codErr=98;
    END IF;
  
END




