CALL SP_CP_ADM_CSU_PRO_COL_BKP(0,0,0,0,@codErr);
SELECT @codErr;

CALL SP_CP_ADM_CSU_PRO_COL_BKP(1,1,5,0,@codErr);
SELECT @codErr;

DROP PROCEDURE IF EXISTS bodyflex.SP_CP_ADM_CSU_PRO_COL_BKP ;
CREATE PROCEDURE bodyflex.`SP_CP_ADM_CSU_PRO_COL_BKP`(
                                                    IN cat1 INTEGER
                                                    , IN cat2 INTEGER
                                                    , IN cat3 INTEGER
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
  DECLARE sw INT DEFAULT 0;
  
  -- DECLARE EXIT HANDLER FOR SQLEXCEPTION SET codErr=99;
  
    SET codErr=0;

  -- CANTIDAD DE PRODUCTOS
    SET @CANT=(
                SELECT COUNT(*) 
                FROM PRODUCTO P
                LEFT JOIN COLECCION_PRODUCTO CP ON P.PROID = CP.PROID
                WHERE P.PROPE=1 
                AND (P.PCP1_ID=cat1 OR cat1=0) 
                AND (P.PCP2_ID=cat2 OR cat2=0) 
                AND P.PCP3_ID=cat3 OR cat3=0
              );

    IF(@CANT)>0 THEN
                
      SET PAG=CEILING(@CANT/10);
          
      WHILE CONT<PAG DO
        -- SELECT * FROM PRODUCTO
        IF CONT=0 THEN            
          CREATE TEMPORARY TABLE TMP_Pag1 
          SELECT CP.cprId
          FROM PRODUCTO P
          LEFT JOIN COLECCION_PRODUCTO CP ON P.PROID = CP.PROID
          WHERE P.proPE=1 
          AND P.PCP1_ID=cat1 OR cat1=0 
          AND P.PCP2_ID=cat2 OR cat2=0 
          AND P.PCP3_ID=cat3 OR cat3=0
          ORDER BY P.proId DESC LIMIT 10;                     
        ELSE
          CREATE TEMPORARY TABLE TMP_Pag1 
          SELECT CP.cprId
          FROM PRODUCTO P
          LEFT JOIN COLECCION_PRODUCTO CP ON P.PROID = CP.PROID
          WHERE P.proId<id 
          AND P.proPE=1
          AND PCP1_ID=cat1 OR cat1=0 
          AND PCP2_ID=cat2 OR cat2=0 
          AND PCP3_ID=cat3 OR cat3=0
          ORDER BY P.proId DESC LIMIT 10;
        END IF;

        SET id = (SELECT cprId FROM TMP_Pag1 ORDER BY cprId DESC LIMIT 1); -- último paginación
        SET pr = (SELECT cprId FROM TMP_Pag1 ORDER BY cprId ASC LIMIT 1); -- primero paginación
       
        select *, id, pr from TMP_Pag1;

        SET id = pr;            
        DROP TABLE TMP_Pag1;      
        SET CONT = CONT+1;
              
      END WHILE;
      
    ELSE
      SET codErr=98;
    END IF;
   
END
  