DROP PROCEDURE IF EXISTS bodyflex.SP_INGRESA_MODIFICA_BODY_SERVICIO;
CREATE PROCEDURE bodyflex.`SP_INGRESA_MODIFICA_BODY_SERVICIO`( 
                                                IN idhead  integer,
                                                IN idbody  integer,
                                                IN Tit VARCHAR(35),
                                                IN Tar VARCHAR(140),
                                                IN Fl VARCHAR(50)
                                              )
BEGIN
 
    -- 1� DETERMINAR EXISTENCIA DEL REGISTRO
    IF (SELECT COUNT(*) FROM DETALLE_SERVICIO WHERE SEID=idhead AND DSID=idbody)=0 THEN
      -- 1� RESOLVEMOS POSICION
      IF NOT EXISTS(SELECT DSID FROM DETALLE_SERVICIO WHERE SEID=idhead ORDER BY DSID DESC LIMIT 1) THEN
        SET @POS=1;
      ELSE
        -- SET @POS=(SELECT DSID FROM DETALLE_SERVICIO WHERE DSID=idhead ORDER BY DSID DESC LIMIT 1)+1;
        SET @POS=(SELECT count(*) FROM DETALLE_SERVICIO WHERE DSID=idhead)+1;
      END IF;
      -- SELECT * FROM DETALLE_SERVICIO
      -- 2� INSERTAMOS REGISTRO
      INSERT INTO DETALLE_SERVICIO(
        SEID
        , DSIMG
        , DSTIT
        , DSPAR
        , DEPOS
      )VALUES(
        idhead
        , Fl
        , Tit
        , Tar
        , @POS
      );
      
      -- 3� OBTENEMOS ULTIMO DPOID INGRESADO
      SET @idbody = (SELECT DSID FROM DETALLE_SERVICIO WHERE SEID=idhead ORDER BY DSID DESC LIMIT 1);   
      -- SELECT * FROM DETALLE_SERVICIO
      -- 4� SELECCIONAMOS CAMPOS NECESARIOS
      SELECT DSID
        , DSIMG
        , DSTIT
        , DSPAR
        , @idbody AS idbody 
      FROM DETALLE_SERVICIO 
      WHERE SEID=idhead 
      ORDER BY DSID DESC;
    
    ELSE -- EL REGISTRO EXISTE  
      
      -- 1� ACTUALIZAR EL REGISTRO
        UPDATE DETALLE_SERVICIO 
        SET DSIMG=Fl
        , DSTIT=Tit
        , DSPAR=Tar
        WHERE SEID=idhead AND DSID=idbody;
        
        SET @idbody=idbody;
        SELECT DSID
          , DSIMG
          , DSTIT
          , DSPAR
          , @idbody AS idbody 
        FROM DETALLE_SERVICIO 
        WHERE SEID=idhead 
        ORDER BY DSID DESC;
      
    END IF;
END;
