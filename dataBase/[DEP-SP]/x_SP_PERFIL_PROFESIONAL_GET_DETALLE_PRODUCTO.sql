-- CALL SP_PERFIL_PROFESIONAL_GET_DETALLE_PRODUCTO('9386703');
-- SELECT * FROM PROFESIONAL_PRODUCTO;

DROP PROCEDURE IF EXISTS bodyflex.SP_PERFIL_PROFESIONAL_GET_DETALLE_PRODUCTO;
CREATE PROCEDURE bodyflex.`SP_PERFIL_PROFESIONAL_GET_DETALLE_PRODUCTO`(
                                                                  IN rut VARCHAR(20)
                                                                  , IN id VARCHAR(20)
                                                                )
BEGIN
DECLARE EXIT HANDLER FOR SQLEXCEPTION SELECT '99';

  IF EXISTS(SELECT * FROM PROFESIONAL_PRODUCTO WHERE PRUT=rut AND PROPEST='PUBLICADO' AND PROPID=id) THEN
    SET @URL = (SELECT PARVAL FROM PARAMETROS WHERE PARNOM='DRIVE');
    SELECT P.PROPID
    , P.PROPNOM
    , P.PROPDESCOR
    , CONCAT('$',REPLACE(FORMAT(PROPPRENET,0),',','.')) AS PRECIO
    , @URL
    , (SELECT PCO_DRI FROM PROFESIONAL_PRODUCTO_CONTENIDO WHERE PROPID=P.PROPID AND PCO_PRI=1) AS DRIVE
      , IFNULL((SELECT PCP1_NOM FROM PROFESIONAL_PRODUCTO_CATEGORIA1 PPC1 WHERE PPC1.PCP1_ID=P.PCP1_ID),0) AS CAT1
      , IFNULL((SELECT PCP2_NOM FROM PROFESIONAL_PRODUCTO_CATEGORIA2 PPC2 WHERE PPC2.PCP2_ID=P.PCP2_ID),0) AS CAT2
      , IFNULL((SELECT PCP3_NOM FROM PROFESIONAL_PRODUCTO_CATEGORIA3 PPC3 WHERE PPC3.PCP3_ID=P.PCP3_ID),0) AS CAT3
    , P.PROPDESLAR
    , P.PROPCON
    , P.PRUT
    , P.PROPFECPUB
    FROM PROFESIONAL_PRODUCTO P
    WHERE PRUT=rut 
    ORDER BY PROPFECPUB ASC;
  ELSE
    SELECT 98;    
  END IF;
 
END




