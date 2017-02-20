-- CALL SP_PERFIL_PROFESIONAL_GET_PRODUCTOS('9386703',0);
-- CALL SP_PERFIL_PROFESIONAL_GET_PRODUCTOS('9386703',1);

-- SELECT * FROM PROFESIONAL_PRODUCTO_CONTENIDO

                                  
DROP PROCEDURE IF EXISTS bodyflex.SP_PERFIL_PROFESIONAL_GET_PRODUCTOS;
CREATE PROCEDURE bodyflex.`SP_PERFIL_PROFESIONAL_GET_PRODUCTOS`(
                                                                  IN rut VARCHAR(20)
                                                                  , IN prueba INTEGER
                                                                )
BEGIN
-- DECLARE EXIT HANDLER FOR SQLEXCEPTION SELECT '99';

-- prueba = [1 | 0] 1=mustra los ingresados, 0=muestra s�lo los publicados
-- OBTIENE TODOS LOS PRODUCTOS ASOCIADOS AL PROFESIONAL

  IF prueba=0 THEN -- NO ES PRUEBA
    IF EXISTS(SELECT * FROM PROFESIONAL_PRODUCTO WHERE PRUT=rut AND PROPEST='PUBLICADO') THEN
      SELECT P.PROPID
      , P.PROPNOM
      , P.PROPDESCOR
      , CONCAT('$',REPLACE(FORMAT(PROPPREBRU,0),',','.')) AS PRECIO
      , (SELECT PARVAL FROM PARAMETROS WHERE PARNOM='DRIVE') AS URL
      , (SELECT PCO_DRI FROM PROFESIONAL_PRODUCTO_CONTENIDO PPC WHERE PPC.PROPID=P.PROPID AND PPC.PCO_PRI=1 ORDER BY PCO_ID ASC LIMIT 1) AS DRIVE
      , IFNULL((SELECT PCP1_NOM FROM PROFESIONAL_PRODUCTO_CATEGORIA1 PPC1 WHERE PPC1.PCP1_ID=P.PCP1_ID),0) AS CAT1
      , IFNULL((SELECT PCP2_NOM FROM PROFESIONAL_PRODUCTO_CATEGORIA2 PPC2 WHERE PPC2.PCP2_ID=P.PCP2_ID),0) AS CAT2
      , IFNULL((SELECT PCP3_NOM FROM PROFESIONAL_PRODUCTO_CATEGORIA3 PPC3 WHERE PPC3.PCP3_ID=P.PCP3_ID),0) AS CAT3
      , P.PROPDESLAR
      , P.PROPCON
      , P.PRUT
      FROM PROFESIONAL_PRODUCTO P
      WHERE P.PRUT=rut AND P.PROPEST='PUBLICADO'
      ORDER BY P.PROPFECPUB ASC;
    ELSE
      SELECT 98;    
    END IF;
  ELSE -- ES PRUEBA
    IF EXISTS(SELECT * FROM PROFESIONAL_PRODUCTO WHERE PRUT = rut) THEN
     
      SELECT P.PROPID
      , P.PROPNOM
      , P.PROPDESCOR
      , CONCAT('$',REPLACE(FORMAT(PROPPREBRU,0),',','.')) AS PRECIO
      , (SELECT PARVAL FROM PARAMETROS WHERE PARNOM='DRIVE') AS URL
      , (SELECT PCO_DRI FROM PROFESIONAL_PRODUCTO_CONTENIDO PPC WHERE PPC.PROPID=P.PROPID AND PPC.PCO_PRI=1 ORDER BY PCO_ID ASC LIMIT 1) AS DRIVE
      , IFNULL((SELECT PCP1_NOM FROM PROFESIONAL_PRODUCTO_CATEGORIA1 PPC1 WHERE PPC1.PCP1_ID=P.PCP1_ID),0) AS CAT1
      , IFNULL((SELECT PCP2_NOM FROM PROFESIONAL_PRODUCTO_CATEGORIA2 PPC2 WHERE PPC2.PCP2_ID=P.PCP2_ID),0) AS CAT2
      , IFNULL((SELECT PCP3_NOM FROM PROFESIONAL_PRODUCTO_CATEGORIA3 PPC3 WHERE PPC3.PCP3_ID=P.PCP3_ID),0) AS CAT3
      , P.PROPDESLAR
      , P.PROPCON
      , P.PRUT
      FROM PROFESIONAL_PRODUCTO P
      WHERE P.PRUT=rut 
      AND EXISTS(SELECT * FROM PROFESIONAL_PRODUCTO_CONTENIDO WHERE PROPID=P.PROPID)
      AND P.PROPEST<>'ELIMINADO'
      ORDER BY P.proPFecIng ASC;

    ELSE
      SELECT 98;    
    END IF;
  END IF;
END




