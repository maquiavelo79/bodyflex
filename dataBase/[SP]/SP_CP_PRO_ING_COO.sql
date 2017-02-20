
-- CALL SP_CP_PRO_ING_COO('TARAPACA',@codErr);
-- SELECT @codErr;

DROP PROCEDURE IF EXISTS bodyflex.SP_CP_PRO_ING_COO;
CREATE PROCEDURE bodyflex.`SP_CP_PRO_ING_COO`(
                                                    IN cDir VARCHAR(20)
                                                    , IN lat VARCHAR(50)
                                                    , IN lon VARCHAR(50)
                                                    ,  OUT codErr INTEGER
                                                  )
BEGIN
DECLARE EXIT HANDLER FOR SQLEXCEPTION SET codErr=99;
SET codErr=0;

  IF EXISTS(SELECT * FROM COORDENADAS WHERE DCOD=cDir) THEN
    DELETE FROM COORDENADAS WHERE DCOD=cDir;
  END IF;
  
  INSERT INTO COORDENADAS (DCOD, COOLAT, COOLON) VALUES (cDir, lat, lon);
  SELECT 1;

END


-- select * from coordenadas

