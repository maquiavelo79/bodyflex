/*
CALL SP_MENSAJE_INGRESA_RESPUESTA('9386703','0','R','26','RESPUESTA RESPUESTA RESPUESTA ','ASUNTO: [28] hggfhgfhgfh','','usr','pro@bo.cl');
*/
-- SELECT * FROM profesional_mensaje

DROP PROCEDURE IF EXISTS bodyflex.SP_MENSAJE_INGRESA_RESPUESTA;
CREATE PROCEDURE bodyflex.`SP_MENSAJE_INGRESA_RESPUESTA`(
                                                    IN rutOri VARCHAR(10)
                                                    , IN rutDes VARCHAR(10)
                                                    , IN tip VARCHAR(1)
                                                    , IN key1 VARCHAR(20)
                                                    , IN msg VARCHAR(2000)
                                                    , IN asu VARCHAR(100)
                                                    , IN aliOri VARCHAR(50)
                                                    , IN aliDes VARCHAR(50)
                                                    , IN maiOri VARCHAR(50)
                                                    , IN maiDes VARCHAR(50)
                                                  )
BEGIN

    DECLARE EXIT HANDLER FOR SQLEXCEPTION SELECT '99';
    
    SET @COR=(SELECT MCOR FROM PROFESIONAL_MENSAJE WHERE MKEY=key1 ORDER BY MCOR DESC LIMIT 1)+1;
    
    INSERT INTO PROFESIONAL_MENSAJE(
      MRORI
      , MRDES
      , MFEC
      , MLEI
      , MTIP
      , MCOR
      , MKEY
      , MMEN
      , MASU
      , MAORI
      , MADES
      , MMAIL
      , mMailDes
  ) 
      VALUES
 (
      rutOri
      , rutDes
      , NOW()
      , 0
      , tip
      , @COR
      , key1
      , msg
      , asu
      , aliOri
      , aliDes
      , maiOri
      , maiDes
    );
    SELECT 1;
    
END






