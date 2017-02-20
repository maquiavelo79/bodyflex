DROP PROCEDURE IF EXISTS bodyflex.SP_CP_PRO_SLIDER_CONSULTA;
CREATE PROCEDURE bodyflex.`SP_CP_PRO_SLIDER_CONSULTA`(
                                        IN rut VARCHAR(20)
                                        , OUT codErr INTEGER
                                      )
BEGIN
DECLARE EXIT HANDLER FOR SQLEXCEPTION SET codErr=99;
SET codErr=0;
    SET @CANT=(SELECT COUNT(*) FROM SLIDER WHERE PRUT=rut);
    IF @CANT>0 THEN
      SELECT SID
      , STIT1
      , STIT2
      , SDES
      , SPOS
      , SDFL 
      , @CANT AS 'CANT'
      FROM slider 
      WHERE prut=rut;
    ELSE
      SET codErr=98;
    END IF;
      
END;
