
-- CALL SP_INGRESA_MENSAJE_PROFESIONAL('109', 'fjcalderon@uc.cl', 1, 0);
-- CALL SP_INGRESA_MENSAJE_PROFESIONAL('2','9386703','NNNNNN','AAAAAAA','EDITOR','edi@bo.cl','pro@bo.cl');
-- SELECT * FROM PROFESIONAL_MENSAJE

DROP PROCEDURE IF EXISTS bodyflex.SP_INGRESA_MENSAJE_PROFESIONAL;
CREATE PROCEDURE bodyflex.`SP_INGRESA_MENSAJE_PROFESIONAL`( 
                                                    IN rutOri VARCHAR(10)
                                                  , IN rutDes VARCHAR(10)
                                                  , IN msg VARCHAR(2000)
                                                  , IN asu VARCHAR(100)
                                                  , IN rol VARCHAR(100) -- ROL QUE ENVÍA EL MENSAJE
                                                  , IN email VARCHAR(100) -- email de quien contacta al profesional
                                                  , IN emlPro VARCHAR(100) -- email del profesional
                                                )
BEGIN
DECLARE EXIT HANDLER FOR SQLEXCEPTION SELECT '99';

-- OBTENEMOS ALIAS
CASE rol
  WHEN 'PROFESIONAL' THEN
    SET @alOri = (SELECT PALIAS FROM PROFESIONAL WHERE PRUT = rutOri);  
  WHEN 'USUARIO' THEN 
    SET @alOri = (SELECT UALIAS FROM USUARIO WHERE URUT = rutOri);
  WHEN 'COMPLEMENTADOR' THEN
    SET @alOri = (SELECT COMPREALI FROM COMPLEMENTADOR WHERE COMPRUT = rutOri); 
  ELSE 
    SET @alOri = (SELECT RALIAS FROM INTERNO WHERE RRUT = rutOri); 
END CASE;
SET @alDes = (SELECT PALIAS FROM PROFESIONAL);

-- OBTENEMOS KEY DEL CONTACTO
IF EXISTS(SELECT DISTINCT MKEY FROM PROFESIONAL_MENSAJE ORDER BY MKEY DESC LIMIT 1) THEN 
  SET @KEY = (SELECT DISTINCT MKEY FROM PROFESIONAL_MENSAJE ORDER BY MKEY DESC LIMIT 1)+1;
ELSE
  SET @KEY=1;
END IF;

-- INGRESAMOS MENSAJE
INSERT INTO PROFESIONAL_MENSAJE (MRORI, MRDES, MFEC, MLEI, MTIP, MCOR, MKEY, MMEN, MASU, MAORI, MADES, MMAIL, mMailDes) VALUES 
(rutOri, rutDes, NOW(), 0, 'I', 1, @KEY, msg, asu, @alOri, @alDes, email, emlPro);

SELECT 1;

END;
