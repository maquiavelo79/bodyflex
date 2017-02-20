
-- select * from publicacion

-- CALL SP_CP_ADM_PUBLICACION_INGRESA_MODIFICA('9386703','0','TITULO1','PUBLICACION1','111111111','BAJADA1','ARTICULO');
-- CALL SP_CP_ADM_PUBLICACION_INGRESA_MODIFICA('9386703','44','TITULO1','PUBLICACION1','111111111','BAJADA1','ARTICULO');

-- NOT EXISTS(SELECT COUNT(*) FROM PUBLICACION WHERE PRUT=13661574 AND PUID=0)
   
-- SELECT * FROM PUBLICACION
-- SELECT * FROM PUBLICACION_PROFESIONAL

DROP PROCEDURE IF EXISTS bodyflex.SP_CP_ADM_PUBLICACION_INGRESA_MODIFICA;
CREATE PROCEDURE bodyflex.`SP_CP_ADM_PUBLICACION_INGRESA_MODIFICA`( 
                                                                IN rut VARCHAR(20)
                                                              , IN id VARCHAR(20)
                                                              , IN tit VARCHAR(100)
                                                              , IN pu VARCHAR(3000)
                                                              , IN fli VARCHAR(50)
                                                              , IN baj VARCHAR(500)
                                                              , IN tip VARCHAR(100)
                                                              , OUT codErr INTEGER
                                                            )
BEGIN

DECLARE EXIT HANDLER FOR SQLEXCEPTION SET codErr=99;
SET codErr=0;

    -- 1 DETERMINAR EXISTENCIA DEL REGISTRO
    IF (SELECT COUNT(*) FROM PUBLICACION_PROFESIONAL WHERE PRUT=rut AND PUID=id)=0 THEN

      -- 2 INSERTAMOS REGISTRO
      INSERT INTO PUBLICACION(
        PUEST
        , PUTITULO
        , PUPUBLICACION
        , PUFEPUB
        , PUFEMOD
        , PUFECRE
        , PUIMG
        , PUBAJ
        , PUTIP
        , PUPOSIMG
      )VALUES(
        'EDITANDO'
        , tit
        , pu
        , ''
        , NOW()
        , NOW()
        , fli
        , baj
        , tip
        , 1
      );
      
      -- 3 OBTENEMOS ULTIMO DPOID INGRESADO
      SET @idPub = (SELECT PUID FROM PUBLICACION ORDER BY PUID DESC LIMIT 1);       
      
      INSERT INTO PUBLICACION_PROFESIONAL(
        PUID
        , PRUT
      )VALUES(
        @idPub
        , rut
      );
      
      -- 1. ACCION = [ INGRESO | MODIFICACION ]
      -- 2. IDPUB
      -- 3. ESTADO 
      -- 4. FECHA CREACIÓN
      -- 5. FECHA MODIFICACIÓN
      -- 6. FECHA PUBLICACION
      -- 7. TITULO
      -- 8. PUBLICACION
      -- 9. FLICKR
      -- 10. BAJADA
      -- 11. TIPO
      
      SELECT 1 AS ACCION
      , @idPub AS IDPUB
      , 'EDITANDO' AS ESTADO
      , NOW() AS FCRE
      , NOW() AS FMOD
      , '#' AS FPUB
      , tit AS TITULO
      , pu AS PUBLICACION
      , fli AS FLICKR
      , baj AS BAJADA
      , tip AS TIPO;
                
    ELSE -- EL REGISTRO EXISTE  
    
     -- 1 ACTUALIZAR EL REGISTRO
        UPDATE PUBLICACION 
        SET PUTITULO=tit
        , PUPUBLICACION=pu
        , PUFEMOD=NOW()
        , PUIMG=fli
        , PUBAJ=baj
        , PUTIP=tip
        WHERE PUID=id;
    
        -- 1. RESPUESTA
        -- 2. IDPUB
        -- 3. ESTADO 
        -- 4. FECHA CREACIÓN
        -- 5. FECHA MODIFICACIÓN
        -- 6. FECHA PUBLICACION
        -- 7. TITULO
        -- 8. PUBLICACION
        -- 9. FLICKR
        -- 10. BAJADA
        -- 11. TIPO
    
        SET @PUEST = (SELECT PUEST FROM PUBLICACION WHERE PUID=id);
        SET @PUFECRE = (SELECT PUFECRE FROM PUBLICACION WHERE PUID=id);
        SET @PUFEMOD = (SELECT PUFEMOD FROM PUBLICACION WHERE PUID=id);
        SET @PUFEPUB = (SELECT PUFEPUB FROM PUBLICACION WHERE PUID=id);
        SET @PUTITULO = (SELECT PUTITULO FROM PUBLICACION WHERE PUID=id);
        SET @PUPUBLICACION = (SELECT PUPUBLICACION FROM PUBLICACION WHERE PUID=id);
        SET @PUIMG = (SELECT PUIMG FROM PUBLICACION WHERE PUID=id);
        SET @PUBAJ = (SELECT PUBAJ FROM PUBLICACION WHERE PUID=id);
        SET @PUTIP = (SELECT PUTIP FROM PUBLICACION WHERE PUID=id);
        
        SELECT 2 AS ACCION
        , id AS IDPUB
        , @PUEST AS ESTADO
        , IFNULL(@PUFECRE,'#') AS FCRE
        , IFNULL(@PUFEMOD,'#') AS FMOD
        , IFNULL(@PUFEPUB,'#') AS FPUB
        , @PUTITULO AS TITULO
        , @PUPUBLICACION AS PUBLICACION
        , @PUIMG AS FLICKR
        , @PUBAJ AS BAJADA
        , @PUTIP AS TIPO;
            
      
    END IF;
      
END;
