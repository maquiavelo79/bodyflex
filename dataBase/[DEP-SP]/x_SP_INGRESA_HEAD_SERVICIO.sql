
-- CALL SP_INGRESA_MODIFICA_HEAD_SERVICIO(0,'13661574','TITULO','TEXTO'); -- INGRESO
-- CALL SP_INGRESA_MODIFICA_HEAD_SERVICIO(3,'13661574','TITULX','TEXTX'); -- MODIFICACION
   
-- SELECT * FROM SERVICIO;

DROP PROCEDURE IF EXISTS bodyflex.SP_INGRESA_MODIFICA_HEAD_SERVICIO;
CREATE PROCEDURE bodyflex.`SP_INGRESA_MODIFICA_HEAD_SERVICIO`( 
                                                IN id  integer,
                                                IN rut VARCHAR(20),
                                                IN tit VARCHAR(50),
                                                IN tex VARCHAR(360)
                                              )
BEGIN
 
    IF NOT EXISTS(SELECT SEID FROM SERVICIO S WHERE S.PRUT=rut ORDER BY S.SEID DESC LIMIT 1) THEN
      INSERT INTO SERVICIO(PRUT, SETIT, SEPAR, SEEST) VALUES (rut, tit, tex, 0);    
    ELSE
      UPDATE SERVICIO SET SETIT=tit, SEPAR=tex WHERE SEID=id;
    END IF;
    
    SELECT SEID FROM SERVICIO WHERE PRUT=rut ORDER BY SEID DESC LIMIT 1;
      
END;
