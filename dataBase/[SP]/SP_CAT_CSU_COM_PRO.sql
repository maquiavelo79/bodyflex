CALL SP_CAT_CSU_COM_PRO(7, 0, 1, @codErr, @hayMas, @cant, @promedio);
SELECT @codErr, @hayMas, @cant, @promedio;

CALL SP_CAT_CSU_COM_PRO(7, 0, 2, @codErr, @hayMas, @cant, @promedio);
SELECT @codErr, @hayMas, @cant, @promedio;

CALL SP_CAT_CSU_COM_PRO(7, 38, 1, @codErr, @hayMas, @cant, @promedio);
SELECT @codErr, @hayMas, @cant, @promedio;

CALL SP_CAT_CSU_COM_PRO(7, 12, 2, @codErr, @hayMas, @cant, @promedio);
SELECT @codErr, @hayMas, @cant, @promedio;

DROP PROCEDURE IF EXISTS bodyflex.SP_CAT_CSU_COM_PRO;
CREATE PROCEDURE bodyflex.`SP_CAT_CSU_COM_PRO`(
                                                IN codPro VARCHAR(10)
                                                , IN ultimo VARCHAR(10)
                                                , IN orden INTEGER
                                                , OUT codErr INTEGER
                                                , OUT hayMas INTEGER
                                                , OUT cant INTEGER
                                                , OUT promedio VARCHAR(5)
                                               )
BEGIN
  
  -- DECLARE EXIT HANDLER FOR SQLEXCEPTION SET codErr=99;
  SET codErr=0;
  SET hayMas=0;
  SET cant=0;
  SET @DRIVE=(SELECT PARVAL FROM PARAMETROS WHERE PARID=1);
  SET @numero=0;  
    
  IF EXISTS(
    SELECT * 
    FROM PRODUCTO_COMENTARIO_PROFESIONAL PCP  
    WHERE PROID=codPro
  )THEN
    
    DROP TABLE IF EXISTS `TMP_comentarios`;
    DROP TABLE IF EXISTS `TMP_orden`;
    DROP TABLE IF EXISTS `TMP_ranking`;
        
    IF EXISTS( SELECT ROUND(AVG(PCOPPU),1) FROM PRODUCTO_COMENTARIO_PROFESIONAL WHERE PROID=codPro) THEN
      SET promedio=(
        SELECT ROUND(AVG(PCOPPU),1)
        FROM PRODUCTO_COMENTARIO_PROFESIONAL 
        WHERE PROID=codPro
      );
    ELSE
      SET promedio=0;
    END IF;
        
    -- TODOS LOS COMENTARIOS DEL PRODUCTO   
    CREATE TEMPORARY TABLE TMP_comentarios
    SELECT PCP.PCOPID
    , PCP.PCOPTI
    , PCP.PCOPDE
    , DATE_FORMAT(PCP.PCOPFE,'%d %b %Y %T') AS FECHA
    , PCP.PCOPPU
    , @DRIVE AS URL_DRIVE
    , (SELECT PFOTOPRE FROM PROFESIONAL WHERE PRUT=PCP.PRUT) AS DRIVE
    , (SELECT PNOM FROM PROFESIONAL WHERE PRUT=PCP.PRUT) AS NOM
    , (SELECT PAPE FROM PROFESIONAL WHERE PRUT=PCP.PRUT) AS APE
    FROM PRODUCTO_COMENTARIO_PROFESIONAL PCP  
    WHERE PROID=codPro
    ORDER BY PCOPID DESC; 
    
    IF orden=1 THEN
        
      CREATE TEMPORARY TABLE TMP_orden
      SELECT * 
      , @numero:=@numero+1 AS POS
      FROM TMP_comentarios
      ORDER BY PCOPID DESC;
      
      IF ultimo<>0 THEN
        SET cant=(SELECT COUNT(*) FROM TMP_orden WHERE PCOPID<ultimo);
        SELECT * FROM TMP_orden WHERE PCOPID<ultimo LIMIT 4;
      ELSE
        SET cant=(SELECT COUNT(*) FROM TMP_orden);
        SELECT * FROM TMP_orden LIMIT 4;
      END IF;
      
      SET hayMas=IF(cant-4>0,1,0);
        
    ELSE
      
      CREATE TEMPORARY TABLE TMP_ranking
      SELECT * 
      , @numero:=@numero+1 AS POS
      FROM TMP_comentarios
      ORDER BY PCOPPU DESC;
      
      IF ultimo<>0 THEN
        SET cant=(SELECT COUNT(*) FROM TMP_ranking WHERE POS>ultimo);
        SELECT * FROM TMP_ranking WHERE POS>ultimo LIMIT 4;
      ELSE
        SET cant=(SELECT COUNT(*) FROM TMP_ranking);
        SELECT * FROM TMP_ranking LIMIT 4;
      END IF;
      
      SET hayMas=IF(cant-4>0,1,0);
    
    END IF;

  ELSE
    SET codErr=98;
  END IF;
    
END