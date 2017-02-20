
-- CALL SP_CARRO_DEL_PROD('200');

-- select * from CARRO_DETALLE
-- select * from CARRO

DROP PROCEDURE IF EXISTS bodyflex.SP_WPRO_CARRO_DEL_PROD;
CREATE PROCEDURE bodyflex.`SP_WPRO_CARRO_DEL_PROD`( 
                                                IN vId VARCHAR(20)
                                                , OUT codErr INTEGER
                                              )
BEGIN

DECLARE EXIT HANDLER FOR SQLEXCEPTION SET codErr=99;
SET codErr=0;
  
  IF EXISTS(SELECT * FROM CARRO_DETALLE WHERE CAD_ID=vId) THEN
    SET @ID = (SELECT CAID FROM CARRO_DETALLE WHERE CAD_ID=vId);
    DELETE FROM CARRO_DETALLE WHERE CAD_ID=vId;
    SET @PROVTA=IFNULL((SELECT SUM(CAD_CAN) FROM CARRO_DETALLE WHERE CAID=@ID),0);
    IF(@PROVTA=0)THEN
      DELETE FROM CARRO WHERE CAID=@ID;
      SET @PROVTA=0;
    END IF;
    SELECT 1, @PROVTA;
  ELSE
    SET codErr=98;
  END IF;
      
END;



