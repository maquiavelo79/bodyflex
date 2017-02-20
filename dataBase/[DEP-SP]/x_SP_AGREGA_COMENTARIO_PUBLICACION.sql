
-- SELECT * FROM COMENTARIO_PUBLICACION;
-- CALL SP_AGREGA_COMENTARIO_PUBLICACION('35', 'Francisco', 'Calderon', 'fjcalderon@uc.cl', 'un comentario aqui');
-- CALL SP_AGREGA_COMENTARIO_PUBLICACION('35', 'Francisco', 'Calderon', 'fjcalderon@uc.cl', 'otro comentario aqui');
-- CALL SP_AGREGA_COMENTARIO_PUBLICACION('35', 'Francisco', 'Calderon', 'fjcalderon@uc.cl', 'otro comentario mas aqui');


DROP PROCEDURE IF EXISTS bodyflex.SP_AGREGA_COMENTARIO_PUBLICACION;
CREATE PROCEDURE bodyflex.`SP_AGREGA_COMENTARIO_PUBLICACION`( 
                                                    IN pu VARCHAR(20)
                                                  , IN no VARCHAR(100)
                                                  , IN ap VARCHAR(100)
                                                  , IN ma VARCHAR(100)
                                                  , IN co VARCHAR(1000)
                                                )
BEGIN
DECLARE EXIT HANDLER FOR SQLEXCEPTION SELECT '99';

  IF EXISTS(SELECT CPORD FROM PUBLICACION_COMENTARIO WHERE PUID=pu ORDER BY CPORD DESC LIMIT 1) THEN
    SET @POS = (SELECT CPORD FROM PUBLICACION_COMENTARIO WHERE PUID=pu ORDER BY CPORD DESC LIMIT 1)+1;
  ELSE
    SET @POS = 1;
  END IF;

  INSERT INTO PUBLICACION_COMENTARIO(
    PUID
  , CPFEC
  , CPDET
  , CPORD
  , CPNOM
  , CPAPE
  , CPEML
  )VALUES(
    pu
    , NOW()
    , co
    , @POS
    , no
    , ap
    , ma
  );
  
  SELECT 1;

END;
