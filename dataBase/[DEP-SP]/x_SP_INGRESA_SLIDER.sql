
-- CALL SP_INGRESA_SLIDER('13661574','A','B','01234567891','Z');
-- CALL SP_INGRESA_SLIDER('13661574','C','D','99999999999','Y');
   
-- SELECT * FROM SLIDER;

DROP PROCEDURE IF EXISTS bodyflex.SP_INGRESA_SLIDER;
CREATE PROCEDURE bodyflex.`SP_INGRESA_SLIDER`( 
                                                IN rut VARCHAR(20)  ,
                                                IN tit1 VARCHAR(30) ,
                                                IN tit2 VARCHAR(20) ,
                                                IN flic VARCHAR(20) ,
                                                IN tex VARCHAR(235)
                                              )
BEGIN
 
    IF NOT EXISTS(SELECT SID FROM SLIDER WHERE PRUT=rut ORDER BY SID DESC LIMIT 1) THEN
      SET @POS=1;
    ELSE
      -- SET @POS=(SELECT SID FROM SLIDER WHERE PRUT=rut ORDER BY SID DESC LIMIT 1)+1;
      SET @POS=(SELECT count(*) FROM SLIDER WHERE PRUT=rut)+1;
    END IF;
 
    INSERT INTO slider(
      PRUT,
      STIT1,
      STIT2,
      SDES,
      SPOS,
      SEST,
      SDFL
    )VALUES(
      rut ,
      tit1 ,
      tit2 , 
      tex , 
      @POS ,
      0 ,
      flic
    );
    
    SELECT SID FROM SLIDER WHERE PRUT=rut ORDER BY SID DESC LIMIT 1;
      
END;
