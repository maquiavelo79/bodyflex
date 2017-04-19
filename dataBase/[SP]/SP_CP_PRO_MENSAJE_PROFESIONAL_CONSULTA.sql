-- [PRIMERA LLAMADA]
CALL SP_CP_PRO_MENSAJE_PROFESIONAL_CONSULTA('adm@bo.cl',0,'0',@codErr);
SELECT @codErr;

CALL SP_CP_PRO_MENSAJE_PROFESIONAL_CONSULTA('pro@bo.cl',0,'0',@codErr);
SELECT @codErr;


DROP PROCEDURE IF EXISTS bodyflex.SP_CP_PRO_MENSAJE_PROFESIONAL_CONSULTA;
CREATE PROCEDURE bodyflex.`SP_CP_PRO_MENSAJE_PROFESIONAL_CONSULTA`(
                                                    IN email VARCHAR(50)
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
    DECLARE EXIT HANDLER FOR SQLEXCEPTION SET codErr=99;

    SET codErr=0;

    IF EXISTS(SELECT * FROM PROFESIONAL_MENSAJE PM WHERE PM.MMAILDES=email) THEN
      
      SET CANT=(SELECT count(*) FROM PROFESIONAL_MENSAJE WHERE MMAILDES=email);
      SET PAG=CEILING(CANT/12);
          
      WHILE CONT<PAG DO
        
        IF CONT=0 THEN            
          CREATE TEMPORARY TABLE TMP_Pag1 
          SELECT PM.MID 
          FROM PROFESIONAL_MENSAJE PM
          WHERE PM.MMAILDES=email
          ORDER BY PM.MFEC DESC LIMIT 12;                     
        ELSE
          CREATE TEMPORARY TABLE TMP_Pag1 
          SELECT PM.MID
          FROM PROFESIONAL_MENSAJE PM
          WHERE PM.MMAILDES=email AND PM.MID<id
          ORDER BY PM.MFEC DESC LIMIT 12;     
        END IF;

        SET id = (SELECT MID FROM TMP_Pag1 ORDER BY MID DESC LIMIT 1); -- último paginación
        SET pr = (SELECT MID FROM TMP_Pag1 ORDER BY MID ASC LIMIT 1); -- primero paginación
        
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
      
      -- OBTENEMOS ULTIMO MENSAJE LEIDO
      IF EXISTS(SELECT * FROM PROFESIONAL_MENSAJE WHERE MLEI=1 AND MMAILDES=email) THEN
      -- u= de ultimo correo
        SET @EXISTE_LEIDO=1;
        SET @uId  = (SELECT PM.MID FROM PROFESIONAL_MENSAJE PM WHERE PM.MLEI=1 AND PM.MMAILDES=email ORDER BY PM.MFEC, PM.MID DESC LIMIT 1);  
        SET @uAsu = (SELECT concat('ASUNTO: ', '[', PM.MID, '] ' ,PM.MASU) AS ASUNTO FROM PROFESIONAL_MENSAJE PM WHERE PM.MLEI=1 AND PM.MMAILDES=email ORDER BY PM.MFEC, PM.MID DESC LIMIT 1);
        SET @uAli = (SELECT PM.MAORI FROM PROFESIONAL_MENSAJE PM WHERE PM.MLEI=1 AND PM.MMAILDES=email ORDER BY PM.MFEC, PM.MID DESC LIMIT 1); 
        SET @uMai = (SELECT PM.MMAIL FROM PROFESIONAL_MENSAJE PM WHERE PM.MLEI=1 AND PM.MMAILDES=email ORDER BY PM.MFEC, PM.MID DESC LIMIT 1);
        SET @uFec = (SELECT PM.MFEC FROM PROFESIONAL_MENSAJE PM WHERE PM.MLEI=1 AND PM.MMAILDES=email ORDER BY PM.MFEC, PM.MID DESC LIMIT 1);
        SET @uMsg = (SELECT PM.MMEN FROM PROFESIONAL_MENSAJE PM WHERE PM.MLEI=1 AND PM.MMAILDES=email ORDER BY PM.MFEC, PM.MID DESC LIMIT 1); 
        SET @uLei = (SELECT PM.MLEI FROM PROFESIONAL_MENSAJE PM WHERE PM.MLEI=1 AND PM.MMAILDES=email ORDER BY PM.MFEC, PM.MID DESC LIMIT 1); 
        SET @uTip = (SELECT PM.MTIP FROM PROFESIONAL_MENSAJE PM WHERE PM.MLEI=1 AND PM.MMAILDES=email ORDER BY PM.MFEC, PM.MID DESC LIMIT 1); 
        SET @uCor = (SELECT PM.MCOR FROM PROFESIONAL_MENSAJE PM WHERE PM.MLEI=1 AND PM.MMAILDES=email ORDER BY PM.MFEC, PM.MID DESC LIMIT 1);
        SET @uKey = (SELECT PM.MKEY FROM PROFESIONAL_MENSAJE PM WHERE PM.MLEI=1 AND PM.MMAILDES=email ORDER BY PM.MFEC, PM.MID DESC LIMIT 1);
        SET @uRor = (SELECT PM.MRORI FROM PROFESIONAL_MENSAJE PM WHERE PM.MLEI=1 AND PM.MMAILDES=email ORDER BY PM.MFEC, PM.MID DESC LIMIT 1);
        SET @uIncidente = IFNULL((SELECT PM.incId FROM PROFESIONAL_MENSAJE PM WHERE PM.MLEI=1 AND PM.MMAILDES=email ORDER BY PM.MFEC, PM.MID DESC LIMIT 1),0);
              
      ELSE
      
        SET @uId  = '';
        SET @uAsu = '';
        SET @uAli = ''; 
        SET @uMai = '';
        SET @uFec = '';
        SET @uMsg = ''; 
        SET @EXISTE_LEIDO=0;
        SET @uLei = ''; 
        SET @uTip = ''; 
        SET @uCor = ''; 
        SET @uKey = ''; 
        SET @uRor = ''; 
        SET @uIncidente =0;
        
      END IF;

      CASE
        WHEN sw=0 THEN -- PRIMERA LLAMADA       
          IF(ULTIMO<>0)THEN  
            SELECT PM.MID
            , PM.MFEC
            , PM.MLEI
            , PM.MTIP
            , PM.MCOR
            , PM.MKEY
            , PM.MMEN
            , concat('ASUNTO: ', '[', PM.MID, '] ' ,PM.MASU) AS ASUNTO
            , PM.MAORI
            , PM.MMAIL
            , CANT AS 'CANT'
            , PAG AS 'PAG'
            , ULTIMOS AS 'ULT'
            , CONCAT('[',PM.MID,']',' ',SUBSTRING(PM.MMEN,1,20),'...') as MRES
            , (SELECT COUNT(*) FROM PROFESIONAL_MENSAJE WHERE MLEI=0 AND PM.MMAILDES=email) AS NUEVOS            
            , IF(LENGTH(@uId)=0,'',concat('ASUNTO: ', '[', @uId, '] ' ,PM.MASU)) AS UASUNTO
            , @uAli AS UALIAS
            , @uMai AS UMAIL 
            , @uFec AS UFECHA
            , @uMsg AS UMSG
            , @EXISTE_LEIDO AS EXISTE_LEIDO
            , PM.MRORI
            , @uId AS uId
            , @uLei AS uLei
            , @uTip AS uTip
            , @uCor AS uCor
            , @uKey AS uKey  
            , IF(LENGTH(@uRor)=0,0,@uRor) AS uRor
            , IFNULL(IF(LENGTH(PM.incId)=0 OR PM.incId=null,0,PM.incId),0) AS idIncidente
            , @uIncidente as uIncidente -- ID de incidente del ultimo mensaje leido
            FROM PROFESIONAL_MENSAJE PM
            WHERE PM.MMAILDES=email AND 
                  PM.MID<=ULTIMO
            ORDER BY PM.MFEC DESC
            LIMIT 12;
          ELSE
             SELECT PM.MID
            , PM.MFEC
            , PM.MLEI
            , PM.MTIP
            , PM.MCOR
            , PM.MKEY
            , PM.MMEN
            , concat('ASUNTO: ', '[', PM.MID, '] ' ,PM.MASU) AS ASUNTO
            , PM.MAORI
            , PM.MMAIL
            , CANT AS 'CANT'
            , PAG AS 'PAG'
            , ULTIMOS AS 'ULT'
            , CONCAT('[',PM.MID,']',' ',SUBSTRING(PM.MMEN,1,20),'...') as MRES
            , (SELECT COUNT(*) FROM PROFESIONAL_MENSAJE WHERE MLEI=0 AND PM.MMAILDES=email) AS NUEVOS
            , IF(LENGTH(@uId)=0,'',concat('ASUNTO: ', '[', @uId, '] ' ,PM.MASU)) AS UASUNTO
            , @uAli AS UALIAS
            , @uMai AS UMAIL 
            , @uFec AS UFECHA
            , @uMsg AS UMSG
            , @EXISTE_LEIDO AS EXISTE_LEIDO
            , PM.MRORI
            , @uId AS uId
            , @uLei AS uLei
            , @uTip AS uTip
            , @uCor AS uCor
            , @uKey AS uKey  
            , IF(LENGTH(@uRor)=0,0,@uRor) AS uRor
            , IFNULL(IF(LENGTH(PM.incId)=0 OR PM.incId=null,0,PM.incId),0) AS idIncidente
            , @uIncidente as uIncidente -- ID de incidente del ultimo mensaje leido
            FROM PROFESIONAL_MENSAJE PM
            WHERE PM.MMAILDES=email 
            ORDER BY PM.MFEC DESC
            LIMIT 12;
          END IF;
      END CASE;
    
    ELSE
      SET codErr=98;
    END IF;
END




