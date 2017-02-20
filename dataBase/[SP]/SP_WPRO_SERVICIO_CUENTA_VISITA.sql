
-- CALL SP_WPRO_SERVICIO_CUENTA_VISITA('51','06fgtth7pd4o2m2laqler8nee0','pro@bo.cl','9386703');
   
-- SELECT * FROM SERVICIO_VISITA
-- SELECT * FROM CURRICULUM
-- SELECT * FROM OTRO;

DROP PROCEDURE IF EXISTS bodyflex.SP_WPRO_SERVICIO_CUENTA_VISITA;
CREATE PROCEDURE bodyflex.`SP_WPRO_SERVICIO_CUENTA_VISITA`( 
                                                          IN serId VARCHAR(20)
                                                          , IN sesion VARCHAR(30)
                                                          , IN email VARCHAR(100)
                                                          , IN rut VARCHAR(20)
                                                          , OUT codErr INTEGER
                                                      )
BEGIN
DECLARE EXIT HANDLER FOR SQLEXCEPTION SET codErr=99;
SET codErr=0;

    IF NOT EXISTS(SELECT * FROM SERVICIO_VISITA WHERE SEID=serId AND SEVISE=sesion) THEN  
      INSERT INTO SERVICIO_VISITA(
        seId
        , seViFe
        , seViSe
        , seViemail
        , seRutPro
      )VALUES(
        serId
        , NOW()
        , sesion
        , email
        , rut
      );
      SELECT 1;
    ELSE
      SET codErr=98;
    END IF;  
        
END;
