
-- SELECT * FROM COLECCION

CALL SP_CAT_CSU_FOT(@codErr, @foto1, @foto2);
SELECT @codErr, @foto1, @foto2;

DROP PROCEDURE IF EXISTS bodyflex.SP_CAT_CSU_FOT;
CREATE PROCEDURE bodyflex.`SP_CAT_CSU_FOT`(
                                            OUT codErr INTEGER
                                            , OUT foto1 VARCHAR(500)  
                                            , OUT foto2 VARCHAR(500)
                                          )
BEGIN
    
  DECLARE EXIT HANDLER FOR SQLEXCEPTION SET codErr=99;  
    
  SET codErr=0;
  IF EXISTS(SELECT * FROM PARAMETROS WHERE PARNOM='FCAT1' OR PARNOM='FCAT2') THEN
    IF EXISTS(SELECT * FROM PARAMETROS WHERE PARNOM='FCAT1') THEN
      IF EXISTS(SELECT * FROM PARAMETROS WHERE PARNOM='FCAT2')THEN
        SET @URL_DRIVE=(SELECT PARVAL FROM PARAMETROS WHERE PARNOM='DRIVE');
        
        SET foto1=(SELECT PARVAL FROM PARAMETROS WHERE PARNOM='FCAT1');
        SET foto2=(SELECT PARVAL FROM PARAMETROS WHERE PARNOM='FCAT2');
        
        SET foto1=REPLACE(@URL_DRIVE, 'FILEID', foto1);
        SET foto2=REPLACE(@URL_DRIVE, 'FILEID', foto2);
        
      ELSE
        SET codErr=97;
      END IF;
    ELSE
      SET codErr=98;
    END IF;  
  ELSE
    SET codErr=96;
  END IF;
END;
