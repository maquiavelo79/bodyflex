-- SELECT * FROM PRODUCTO;

CALL SP_CP_ADM_CSU_PRO_A_ETI(3,@codErr,@estado,@nombre,@marca);
SELECT @codErr,@estado,@nombre,@marca;

DROP PROCEDURE IF EXISTS bodyflex.SP_CP_ADM_CSU_PRO_A_ETI;
CREATE PROCEDURE bodyflex.`SP_CP_ADM_CSU_PRO_A_ETI`(
                                                        IN vId VARCHAR(20)
                                                        , OUT codErr INTEGER
                                                        , OUT estado VARCHAR(20)
                                                        , OUT nombre VARCHAR(20)
                                                        , OUT marca VARCHAR(100)
                                                      ) 
BEGIN
  
  -- DECLARE EXIT HANDLER FOR SQLEXCEPTION SET codErr=99;
  SET codErr=0;

    IF EXISTS(SELECT * FROM PRODUCTO WHERE PROID = vId) THEN
      
      SET @ESTADO=(SELECT PROET FROM PRODUCTO WHERE PROID=vId);
      SET @NOMBRE=(SELECT PRONO FROM PRODUCTO WHERE PROID=vId);
      SET @MARCA=(SELECT MARNOM FROM MARCAS WHERE MARID=(SELECT marId FROM PRODUCTO WHERE PROID=vId));
                  
      SET estado = @ESTADO;
      SET nombre = @NOMBRE;
      SET marca = @MARCA;
      
    ELSE
      SET codErr=98;
    END IF;
  
END




