
-- CALL SP_CP_ADM_CSU_MED_PRO(77, @codErr, @proNom, @proMar, @proCat1, @proCat2, @proCat3);
-- SELECT @codErr, @proNom, @proMar, @proCat1, @proCat2, @proCat3;

-- select * from MEDIDA
-- select * from PRODUCTO_MEDIDA
-- select * from PRODUCTO WHERE PROID=7;

DROP PROCEDURE IF EXISTS bodyflex.SP_CP_ADM_CSU_MED_PRO;
CREATE PROCEDURE bodyflex.`SP_CP_ADM_CSU_MED_PRO`(
                                                    IN codPro VARCHAR(10)
                                                    , OUT codErr INTEGER
                                                    , OUT proNom VARCHAR(100)
                                                    , OUT proMar VARCHAR(100)
                                                    , OUT proCat1 VARCHAR(100)
                                                    , OUT proCat2 VARCHAR(100)
                                                    , OUT proCat3 VARCHAR(100)
                                                  ) 
BEGIN
  
  -- DECLARE EXIT HANDLER FOR SQLEXCEPTION SET codErr=99;
  SET codErr=0;
  
  IF EXISTS(SELECT * FROM PRODUCTO WHERE PROID = codPro) THEN
  
    SET @proNom=(SELECT PRONO FROM PRODUCTO WHERE PROID=codPro);
    SET @proMar=(SELECT case P.marId when 0 then 'SIN MARCA' else (SELECT MARNOM FROM MARCAS WHERE MARID=P.marId) end FROM PRODUCTO P WHERE P.PROID=codPro);
    
    SET @proCat1=(SELECT PCP1_NOM FROM PRODUCTO_CATEGORIA1 WHERE PCP1_ID = (SELECT PCP1_ID FROM PRODUCTO WHERE PROID=codPro));
    SET @proCat2=(SELECT PCP2_NOM FROM PRODUCTO_CATEGORIA2 WHERE PCP2_ID = (SELECT PCP2_ID FROM PRODUCTO WHERE PROID=codPro));
    SET @proCat3=(SELECT PCP3_NOM FROM PRODUCTO_CATEGORIA3 WHERE PCP3_ID = (SELECT PCP3_ID FROM PRODUCTO WHERE PROID=codPro));
    
    SET proNom=@proNom;
    SET proMar=@proMar;
    SET proCat1=@proCat1;
    SET proCat2=@proCat2;
    SET proCat3=@proCat3;
  
    IF EXISTS(SELECT *
    FROM PRODUCTO P, PRODUCTO_MEDIDA PM, MEDIDA M
    WHERE P.PROID=PM.PROID 
    AND M.MEDID=PM.MEDID 
    AND P.PROID=codPro)THEN
  
      SELECT PM.pMId
      , M.medVa
      , M.medTi
      FROM PRODUCTO P, PRODUCTO_MEDIDA PM, MEDIDA M
      WHERE P.PROID=PM.PROID 
      AND M.MEDID=PM.MEDID 
      AND P.PROID=codPro
      ORDER BY PM.pMId ASC;
    
    ELSE
      SET codErr=97; -- SIN MEDIDAS PARA EL PRODUCTO
    END IF;
        
  ELSE
    SET codErr=98; -- NO EXISTE PRODUCTO
  END IF; 
      
END




