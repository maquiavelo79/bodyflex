

DROP PROCEDURE IF EXISTS bodyflex.SP_WAPP_CONSULTA_COMENTARIOS_PUBLICACION;
CREATE PROCEDURE bodyflex.`SP_WAPP_CONSULTA_COMENTARIOS_PUBLICACION`(
                                                              IN id VARCHAR(20)
                                                              , OUT codErr INTEGER
                                                            )
BEGIN

DECLARE EXIT HANDLER FOR SQLEXCEPTION SET codErr=99; 
SET codErr=0;
  IF EXISTS(SELECT * FROM PUBLICACION_COMENTARIO WHERE PUID=id ) THEN
    SELECT CP.CPID
      , CP.CPNOM AS 'NOMBRE'
      , CP.CPAPE AS 'APELLIDO' 
      , DATE_FORMAT(CP.CPFEC,'%b %d %Y %h:%i %p') AS FECHA
      , CP.CPDET AS COMENTARIO
      , CP.CPEML AS EMAIL
    FROM PUBLICACION_COMENTARIO CP 
    WHERE PUID=id 
    ORDER BY CPORD ASC;
  ELSE
    SET codErr=98;
  END IF;
  
END;
