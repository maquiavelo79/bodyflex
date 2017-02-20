DROP PROCEDURE IF EXISTS bodyflex.SP_CP_PRO_SERVICIO_OBTIENE_DETALLE;
CREATE PROCEDURE bodyflex.`SP_CP_PRO_SERVICIO_OBTIENE_DETALLE`(
                                                          IN id VARCHAR(20)
                                                          , OUT codErr INTEGER
                                                          )
BEGIN

DECLARE EXIT HANDLER FOR SQLEXCEPTION SET codErr=99;    
SET codErr=0;

    SET @CANT=(SELECT COUNT(*) FROM SERVICIO);
    SELECT SEID
      , SENOM
      , SEDESCOR
      , SEDESLAR
      , SEIMGAWE
      , SEIMGSER
      , SEIDFLI
      , @CANT
      FROM SERVICIO
      WHERE SEID=id
      ORDER BY SEID DESC;

END;
