
-- CALL SP_INGRESA_MODIFICA_HEAD_PORTAFOLIO(0,'13661574','TITULO','TEXTO'); -- INGRESO
-- CALL SP_INGRESA_MODIFICA_HEAD_PORTAFOLIO(2,'13661574','XXXXXX','TTTTT'); -- MODIFICACION
   
-- SELECT * FROM PORTAFOLIO;
-- SELECT * FROM DETALLE_PORTAFOLIO;

DROP PROCEDURE IF EXISTS bodyflex.SP_INGRESA_MODIFICA_HEAD_PORTAFOLIO;
CREATE PROCEDURE bodyflex.`SP_INGRESA_MODIFICA_HEAD_PORTAFOLIO`( 
                                                IN id INTEGER,
                                                IN rut VARCHAR(20),
                                                IN tit VARCHAR(50),
                                                IN tex VARCHAR(360)
                                              )
BEGIN
 
    IF NOT EXISTS(SELECT POID FROM PORTAFOLIO WHERE PRUT=rut) THEN
      INSERT INTO PORTAFOLIO(
        PRUT
        , POTIT
        , POPA
        , POEST
        )VALUES(
        rut
        , tit
        , tex
        , 0
      );
    ELSE
      UPDATE PORTAFOLIO 
      SET POTIT=tit
        , POPA=tex 
        , POEST=0 
      WHERE POID=id;
    END IF;
    
    SELECT POID FROM PORTAFOLIO WHERE PRUT=rut ORDER BY POID DESC LIMIT 1;
      
END;
