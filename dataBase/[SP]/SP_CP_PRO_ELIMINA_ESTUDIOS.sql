-- CALL SP_CP_PRO_ELIMINA_ESTUDIOS('25');
   
-- SELECT * FROM ESTUDIOS;

DROP PROCEDURE IF EXISTS bodyflex.SP_CP_PRO_ELIMINA_ESTUDIOS;
CREATE PROCEDURE bodyflex.`SP_CP_PRO_ELIMINA_ESTUDIOS`(
                                                IN id VARCHAR(20)
                                                , OUT codErr INTEGER
                                                )
BEGIN
  
  DECLARE EXIT HANDLER FOR SQLEXCEPTION SET codErr=99;
  SET codErr=0;
  DELETE FROM ESTUDIOS WHERE ESID=id;    
          
END;
