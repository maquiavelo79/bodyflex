-- SELECT * FROM PROFESIONAL
-- SELECT * FROM CURRICULUM
-- SP_INGRESA_MODIFICA_CURRICULUM(0,'13661574','XXXXXXXXXXXX','XXXXXXXXXXXX');
-- SP_INGRESA_MODIFICA_CURRICULUM(6,'13661574','YYYYYYYYYYYY','YYYYYYYYYYYY');


DROP PROCEDURE IF EXISTS bodyflex.SP_INGRESA_MODIFICA_CURRICULUM;
CREATE PROCEDURE bodyflex.`SP_INGRESA_MODIFICA_CURRICULUM`( 
                                                IN id  integer,
                                                IN rut VARCHAR(20),
                                                IN tit VARCHAR(50),
                                                IN des VARCHAR(360)
                                              )
BEGIN
 
    IF NOT EXISTS(SELECT CURID FROM CURRICULUM WHERE PRUT=rut AND CURID=id) THEN
      INSERT INTO CURRICULUM(
        PRUT
        , CURFECING
        , CURFECMOD
        , CURTIT
        , CURDES
        , CUREST
        )VALUES(
        rut
        , CURDATE()
        , CURDATE()
        , tit
        , des
        , 0
      );
    ELSE
      UPDATE CURRICULUM 
      SET CURFECMOD=CURDATE()
        , CURTIT=tit
        , CURDES=des
      WHERE CURID=id;
    END IF;
    
    SELECT CURID, CURFECING, CURFECMOD, CURTIT, CURDES FROM CURRICULUM WHERE PRUT=rut ORDER BY CURID DESC LIMIT 1;
      
END;


