
-- CALL SP_MODIFICA_SLIDER('23','Z','Z','88888888888','ZZZZZZZZZZZZZZZZ');
   
-- SELECT * FROM SLIDER;

DROP PROCEDURE IF EXISTS bodyflex.SP_MODIFICA_SLIDER;
CREATE PROCEDURE bodyflex.`SP_MODIFICA_SLIDER`( 
                                                IN id VARCHAR(20)  , 
                                                IN tit1 VARCHAR(30) ,
                                                IN tit2 VARCHAR(20) ,
                                                IN flic VARCHAR(20) ,
                                                IN tex VARCHAR(235)
                                              )
BEGIN
 
    UPDATE slider
    SET STIT1=tit1  ,
        STIT2=tit2  ,
        SDES=tex    ,
        SDFL=flic
    WHERE SID=id;
    
    SELECT 1;
          
END;
