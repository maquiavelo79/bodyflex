
-- CALL SP_PORTAFOLIO_CONSULTA('13661574');
   
-- SELECT * FROM PORTAFOLIO;

DROP PROCEDURE IF EXISTS bodyflex.SP_PORTAFOLIO_CONSULTA;
CREATE PROCEDURE bodyflex.`SP_PORTAFOLIO_CONSULTA`(IN rut VARCHAR(20))
BEGIN
DECLARE EXIT HANDLER FOR SQLEXCEPTION SELECT '99';

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
      SELECT 98;
    END IF;
      
END;