
-- CALL SP_PROFESIONAL_CUENTA_CONTACTO('109', 'fjcalderon@uc.cl', 1, 0);
-- SELECT * FROM PROFESIONAL_CONTACTO

DROP PROCEDURE IF EXISTS bodyflex.SP_PROFESIONAL_CUENTA_CONTACTO;
CREATE PROCEDURE bodyflex.`SP_PROFESIONAL_CUENTA_CONTACTO`( 
                                                    IN rutOri VARCHAR(10)
                                                  , IN rutDes VARCHAR(10)
                                                )
BEGIN
DECLARE EXIT HANDLER FOR SQLEXCEPTION SELECT '99';

INSERT INTO PROFESIONAL_CONTACTO (PRUT, PCTFE, PCTUR) VALUES (rutDes, now(), rutOri);
SELECT 1;

END;
