DROP PROCEDURE IF EXISTS bodyflex.SP_INGRESA_MODIFICA_BODY_PORTAFOLIO;
CREATE PROCEDURE bodyflex.`SP_INGRESA_MODIFICA_BODY_PORTAFOLIO`( 
                                                IN idhead  integer,
                                                IN idbody  integer,
                                                IN labelB VARCHAR(20),
                                                IN captionB VARCHAR(20),
                                                IN nImgB VARCHAR(50),
                                                IN tituloB VARCHAR(40),
                                                IN tipoB VARCHAR(50),
                                                IN disciplinaB VARCHAR(50),
                                                IN contextoB VARCHAR(50),
                                                IN parrafoB VARCHAR(390)
                                              )
BEGIN
 
    -- 1� DETERMINAR EXISTENCIA DEL REGISTRO
    IF (SELECT COUNT(*) FROM DETALLE_PORTAFOLIO WHERE POID=idhead AND DPOID=idbody)=0 THEN
      -- 1� RESOLVEMOS POSICION
      IF NOT EXISTS(SELECT DPOID FROM DETALLE_PORTAFOLIO WHERE POID=idhead ORDER BY DPOID DESC LIMIT 1) THEN
        SET @POS=1;
      ELSE
        -- SET @POS=(SELECT DPOID FROM DETALLE_PORTAFOLIO WHERE POID=idhead ORDER BY DPOID DESC LIMIT 1)+1;
        SET @POS=(SELECT count(*) FROM DETALLE_PORTAFOLIO WHERE POID=idhead)+1;
      END IF;
      
      -- 2� INSERTAMOS REGISTRO
      INSERT INTO DETALLE_PORTAFOLIO(
        POID
        , DPOLABEL
        , DPOCAPTION
        , DPOIMG
        , DPOTITULO
        , DPOTIPO
        , DPODISCIPLINA
        , DPOCONTEXTO
        , DPOPARRAFO
        , DPOPOS
      )VALUES(
        idhead
        , labelB
        , captionB
        , nImgB
        , tituloB
        , tipoB
        , disciplinaB
        , contextoB
        , parrafoB
        , @POS
      );
      
      -- 3� OBTENEMOS ULTIMO DPOID INGRESADO
      SET @idbody = (SELECT DPOID FROM DETALLE_PORTAFOLIO WHERE POID=idhead ORDER BY DPOID DESC LIMIT 1);   
      
      -- 4� SELECCIONAMOS CAMPOS NECESARIOS
      SELECT DPOID
        , DPOLABEL
        , DPOCAPTION
        , DPOIMG
        , DPOTITULO
        , DPOTIPO
        , DPODISCIPLINA
        , DPOCONTEXTO
        , DPOPARRAFO
        , @idbody AS idbody 
      FROM DETALLE_PORTAFOLIO 
      WHERE POID=idhead 
      ORDER BY DPOID DESC;
    
    ELSE -- EL REGISTRO EXISTE  
      
      -- 1� ACTUALIZAR EL REGISTRO
        UPDATE DETALLE_PORTAFOLIO 
        SET DPOLABEL=labelB
        , DPOCAPTION=captionB
        , DPOIMG=nImgB
        , DPOTITULO=tituloB
        , DPOPARRAFO=parrafoB
        , DPOTIPO=tipoB
        , DPODISCIPLINA=disciplinaB
        , DPOCONTEXTO=contextoB
        WHERE POID=idhead AND DPOID=idbody;
        
        SET @idbody=idbody;
        SELECT DPOID
          , DPOLABEL
          , DPOCAPTION
          , DPOIMG
          , DPOTITULO
          , DPOTIPO
          , DPODISCIPLINA
          , DPOCONTEXTO
          , DPOPARRAFO
          , @idbody AS idbody 
        FROM DETALLE_PORTAFOLIO 
        WHERE POID=idhead 
        ORDER BY DPOID DESC;
      
    END IF;

END;
