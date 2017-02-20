CALL SP_CAT_CSU_DET_PRO(37, @codErr);
SELECT @codErr;

-- SELECT * FROM PRODUCTO


DROP PROCEDURE IF EXISTS bodyflex.SP_CAT_CSU_DET_PRO;
CREATE PROCEDURE bodyflex.`SP_CAT_CSU_DET_PRO`(
                                                IN codPro VARCHAR(10)
                                                , OUT codErr INTEGER
                                               )
BEGIN
  
  -- DECLARE EXIT HANDLER FOR SQLEXCEPTION SET codErr=99;
  SET codErr=0;
  
  IF EXISTS(SELECT *
    FROM PRODUCTO
    WHERE PROID=codPro)THEN
    SELECT P.PROID
    , P.PRONO
    , case P.marId when 0 then 'SIN MARCA' else (SELECT MARNOM FROM MARCAS WHERE MARID=P.marId) end as PROMA
    , P.PROES
    , CONCAT('$',REPLACE(FORMAT(P.PROPVP,0),',','.')) AS PROPVP -- PRECIO PROFESIONAL
    , CONCAT(P.PROPO * 100 , '%') AS PROPO1 -- % UTILIDAD VTA CATALOGO
    , CONCAT('$',REPLACE(FORMAT(PROMC,0),',','.')) AS PROMC -- MTO COMISIÓN VTA X CATALOGO 
    , P.PROUN -- unidades maximas para venta en linea
    , CONCAT('$',REPLACE(FORMAT(P.PROPV,0),',','.')) AS PROPV -- PRECIO BODYFLEX
    , CONCAT('$',REPLACE(FORMAT(P.PROPV-P.PROPVP,0),',','.')) AS MTOUT1 -- $ UTILIDAD VTA PRESENCIAL
    , CONCAT('$',REPLACE(FORMAT(P.PROPV*P.PROPO,0),',','.')) AS MTOUT2 -- $ UTILIDAD VTA x catalogo
    , CONCAT(TRUNCATE((((P.PROPV-P.PROPVP)*100)/P.PROPV),1),'%') AS PROPO2 -- % UTILIDAD VTA presencial
    , CONCAT('$',REPLACE(FORMAT(P.PROPVAPRO,0),',','.')) AS PROPVP -- PRECIO ANTERIOR PARA PROFESIONAL
    , P.PRODE
    FROM PRODUCTO P
    WHERE P.PROID=codPro;
  ELSE
    SET codErr=98;  
  END IF;
  
END



