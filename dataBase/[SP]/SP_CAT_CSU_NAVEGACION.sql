CALL SP_CAT_CSU_NAVEGACION(1, 0, 0, @codErr);
SELECT @codErr;

-- SELECT * FROM PRODUCTO_CONTENIDO;

DROP PROCEDURE IF EXISTS bodyflex.SP_CAT_CSU_NAVEGACION;
CREATE PROCEDURE bodyflex.`SP_CAT_CSU_NAVEGACION`(
                                                    IN idCo VARCHAR(5)
                                                    , IN cat2 VARCHAR(5)
                                                    , IN cat3 VARCHAR(5)
                                                    , OUT codErr INTEGER
                                                  )
BEGIN
  
  DECLARE EXIT HANDLER FOR SQLEXCEPTION SET codErr=99;
  SET codErr=0;
  
  SET @nomCol=(SELECT CONO FROM COLECCION WHERE COID=idCo);
  
  IF(LENGTH(cat2)>0 AND cat2<>0)THEN
    SET @nomCat2=(SELECT PCP2_NOM FROM PRODUCTO_CATEGORIA2 WHERE PCP2_ID=cat2);
  ELSE
    SET @nomCat2='SC2';
  END IF;
  
  IF(LENGTH(cat3)>0 AND cat3<>0)THEN
    SET @nomCat3=(SELECT PCP3_NOM FROM PRODUCTO_CATEGORIA3 WHERE PCP3_ID=cat3);
  ELSE
    SET @nomCat3='SC3';  
  END IF;
  
  SELECT @nomCol, @nomCat2, @nomCat3;  
    
END




