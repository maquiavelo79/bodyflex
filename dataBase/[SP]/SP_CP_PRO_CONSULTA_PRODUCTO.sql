--  CALL SP_CP_PRO_CONSULTA_PRODUCTO('13661574','0','0', @codErr);
-- SELECT * FROM PRODUCTO
-- SELECT * FROM PARAMETROS

-- CALL SP_CP_PRO_CONSULTA_PRODUCTO(9386703,0,0,@codErr);
-- SELECT @codErr AS corErr;

DROP PROCEDURE IF EXISTS bodyflex.SP_CP_PRO_CONSULTA_PRODUCTO;
CREATE PROCEDURE bodyflex.`SP_CP_PRO_CONSULTA_PRODUCTO`(
                                                     IN rut VARCHAR(10)
                                                    , IN sw INTEGER
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
    SET @CANT=( 
                SELECT COUNT(*) 
                FROM PRODUCTO P, PRODUCTO_PROFESIONAL PP 
                WHERE  P.PROID=PP.PROID  AND
                PP.PRUT=rut              AND
                P.proPE = 0
              );

    IF(@CANT)>0 THEN
      
      SET CANT=(
                  SELECT COUNT(*) 
                  FROM PRODUCTO P, PRODUCTO_PROFESIONAL PP 
                  WHERE  P.PROID=PP.PROID  AND
                  PP.PRUT=rut              AND
                  P.proPE = 0
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
                P.proPE = 0 -- REPRESENTA UN PRODUCTO INGRESADO POR EL PROFESIONAL NO VENVIDO EN PLATAFORMA
          ORDER BY P.PROID DESC LIMIT 10;                     
        ELSE
          CREATE TEMPORARY TABLE TMP_Pag1 
          SELECT P.PROID
          FROM PRODUCTO P, PRODUCTO_PROFESIONAL PP
          WHERE P.PROID=PP.PROID  AND
                PP.PRUT=rut       AND 
                P.PROID<id        AND
                P.proPE = 0 -- REPRESENTA UN PRODUCTO INGRESADO POR EL PROFESIONAL NO VENVIDO EN PLATAFORMA
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
            , P.PROET
            , P.PROCO
            , CONCAT('$',REPLACE(FORMAT(P.PROPV,0),',','.')) AS PROPV
            , P.PRODE
            , P.PCP1_ID
            , P.PCP2_ID
            , P.PCP3_ID
            , P.PROES
            , CANT AS 'CANT'
            , PAG AS 'PAG'
            , ULTIMOS AS 'ULT'
            , P.PROMA
            , CONCAT('$',REPLACE(FORMAT(P.PROPR,0),',','.')) AS PROPR
            FROM PRODUCTO P, PRODUCTO_PROFESIONAL PP 
            WHERE P.PROID=PP.PROID 
            AND PP.PRUT=rut 
            AND P.PROID<=ULTIMO
            AND P.proPE=0
            ORDER BY P.PROID DESC
            LIMIT 10;
          ELSE
            SELECT P.PROID
            , P.PRONO
            , P.PROET
            , P.PROCO
            , CONCAT('$',REPLACE(FORMAT(P.PROPV,0),',','.')) AS PROPV
            , P.PRODE
            , P.PCP1_ID
            , P.PCP2_ID
            , P.PCP3_ID
            , P.PROES
            , CANT AS 'CANT'
            , PAG AS 'PAG'
            , ULTIMOS AS 'ULT'
            , P.PROMA
            , CONCAT('$',REPLACE(FORMAT(P.PROPR,0),',','.')) AS PROPR
            FROM PRODUCTO P, PRODUCTO_PROFESIONAL PP  
            WHERE P.PROID=PP.PROID 
            AND PP.PRUT=rut
            AND P.proPE=0
            ORDER BY P.PROID DESC
            LIMIT 10;
          END IF;
      END CASE;
      
    ELSE
      SET codErr=98;
    END IF;
  
END




