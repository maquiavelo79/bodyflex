DROP PROCEDURE IF EXISTS bodyflex.SP_CP_PRO_PORTAFOLIO_CONSULTA;
CREATE PROCEDURE bodyflex.`SP_CP_PRO_PORTAFOLIO_CONSULTA`(
                                              IN rut VARCHAR(20)
                                              , OUT codErr INTEGER
                                            )
BEGIN
DECLARE EXIT HANDLER FOR SQLEXCEPTION SET codErr=99;
SET codErr=0;
    SET @CANT=(SELECT COUNT(*) FROM PORTAFOLIO WHERE PRUT=rut);
    IF @CANT>0 THEN 
      SELECT POID
      , PONOMCAP
      , PONOMIMG
      , POIDFLI
      , @CANT AS 'CANT'
      FROM PORTAFOLIO 
      WHERE PRUT=rut;
    ELSE
      SET codErr=98;
    END IF;
      
END;