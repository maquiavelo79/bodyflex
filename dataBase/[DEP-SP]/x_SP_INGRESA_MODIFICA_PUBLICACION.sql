
-- SELECT COUNT(*) FROM PUBLICACION WHERE PRUT=13661574 AND PUID=7

-- CALL SP_INGRESA_MODIFICA_PUBLICACION('13661574','0','TITULO1','PUBLICACION1','111111111','BAJADA1');
-- CALL SP_INGRESA_MODIFICA_PUBLICACION('13661574','62','Para reflexionar (Cambio de hAbitos)','ZZZZZZZZZZZZ','111111111','XXXXXXX');

-- NOT EXISTS(SELECT COUNT(*) FROM PUBLICACION WHERE PRUT=13661574 AND PUID=0)
   
-- SELECT * FROM PROFESIONAL
-- SELECT * FROM PUBLICACION

DROP PROCEDURE IF EXISTS bodyflex.SP_INGRESA_MODIFICA_PUBLICACION;
CREATE PROCEDURE bodyflex.`SP_INGRESA_MODIFICA_PUBLICACION`( 
                                                                IN rut VARCHAR(20)
                                                              , IN id VARCHAR(20)
                                                              , IN tit VARCHAR(100)
                                                              , IN pu VARCHAR(3000)
                                                              , IN fli VARCHAR(50)
                                                              , IN baj VARCHAR(500)
                                                              , IN tip VARCHAR(100)
                                                            )
BEGIN

    -- 1 DETERMINAR EXISTENCIA DEL REGISTRO
    IF (SELECT COUNT(*) FROM PUBLICACION WHERE PRUT=rut AND PUID=id)=0 THEN

      -- 2 INSERTAMOS REGISTRO
      INSERT INTO PUBLICACION(
        PRUT
        , PUEST
        , PUTITULO
        , PUPUBLICACION
        , PUFEPUB
        , PUFEMOD
        , PUFECRE
        , PUIMG
        , PUBAJ
        , PUTIP
      )VALUES(
        rut
        , 'EDITANDO'
        , tit
        , pu
        , ''
        , NOW()
        , NOW()
        , fli
        , baj
        , tip
      );
      
      -- 3 OBTENEMOS ULTIMO DPOID INGRESADO
      SET @idPub = (SELECT PUID FROM PUBLICACION WHERE PRUT=rut ORDER BY PUID DESC LIMIT 1);   
      SELECT 1, @idPub;

                
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
        
        SELECT 2, id;
      
    END IF;
      
END;
