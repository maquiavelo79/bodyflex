--  CALL SP_PROFESIONAL_CONSULTA_PRODUCTO('9386703','0','0');
-- SELECT * FROM PROFESIONAL_PRODUCTO
-- SELECT * FROM PARAMETROS

DROP PROCEDURE IF EXISTS bodyflex.SP_PROFESIONAL_CONSULTA_PRODUCTO;
CREATE PROCEDURE bodyflex.`SP_PROFESIONAL_CONSULTA_PRODUCTO`(
                                                     IN rut VARCHAR(10)
                                                    , IN sw INTEGER
                                                    , IN ULTIMO VARCHAR(100)
                                                 )
BEGIN

  DECLARE CONT INT DEFAULT 0;
  DECLARE CANT INT DEFAULT 0;
  DECLARE PAG INT DEFAULT 0;
  DECLARE ULTIMOS VARCHAR(1000) DEFAULT '';
  DECLARE id INT DEFAULT 0;
  DECLARE pr INT DEFAULT 0;
  DECLARE EXIT HANDLER FOR SQLEXCEPTION SELECT '99';

  -- CANTIDAD DE PRODUCTOS
    SET @CANT=(SELECT COUNT(*) FROM PROFESIONAL_PRODUCTO WHERE pRut=rut AND PROPEST<>'ELIMINADO');

    IF(@CANT)>0 THEN
      
      SET CANT=(SELECT COUNT(*) FROM PROFESIONAL_PRODUCTO WHERE pRut=rut AND PROPEST<>'ELIMINADO');
      SET PAG=CEILING(CANT/10);
          
      WHILE CONT<PAG DO
        -- SELECT * FROM PROFESIONAL_PRODUCTO
        IF CONT=0 THEN            
          CREATE TEMPORARY TABLE TMP_Pag1 
          SELECT PROPID 
          FROM PROFESIONAL_PRODUCTO
          WHERE PRUT=rut AND PROPEST<>'ELIMINADO'
          ORDER BY PROPID DESC LIMIT 10;                     
        ELSE
          CREATE TEMPORARY TABLE TMP_Pag1 
          SELECT PROPID
          FROM PROFESIONAL_PRODUCTO 
          WHERE PRUT=rut     AND 
                PROPID<id    AND
                PROPEST<>'ELIMINADO'
          ORDER BY PROPID DESC LIMIT 10;
        END IF;

        SET id = (SELECT PROPID FROM TMP_Pag1 ORDER BY PROPID DESC LIMIT 1); -- último paginación
        SET pr = (SELECT PROPID FROM TMP_Pag1 ORDER BY PROPID ASC LIMIT 1); -- primero paginación
        
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
            SELECT PROPID
            , PROPNOM
            , PROPEST
            , PROPCON
            , PROPPREBRU
            , PROPDESCOR
            , PCP1_ID
            , PCP2_ID
            , PCP3_ID
            , PROPDESLAR
            , CANT AS 'CANT'
            , PAG AS 'PAG'
            , ULTIMOS AS 'ULT'
            , proPMar
            , proPPreRef
            FROM PROFESIONAL_PRODUCTO 
            WHERE PRUT=rut AND 
                  PROPEST<>'ELIMINADO' AND
                  PROPID<=ULTIMO
            ORDER BY PROPID DESC
            LIMIT 10;
          ELSE
            SELECT PROPID
            , PROPNOM
            , PROPEST
            , PROPCON
            , PROPPREBRU
            , PROPDESCOR
            , PCP1_ID
            , PCP2_ID
            , PCP3_ID
            , PROPDESLAR
            , CANT AS 'CANT'
            , PAG AS 'PAG'
            , ULTIMOS AS 'ULT'
            , proPMar
            , proPPreRef
            FROM PROFESIONAL_PRODUCTO 
            WHERE PRUT=rut AND
                  PROPEST<>'ELIMINADO'
            ORDER BY PROPID DESC
            LIMIT 10;
          END IF;
      END CASE;
      
    ELSE
      SELECT 98;
    END IF;
  
END




