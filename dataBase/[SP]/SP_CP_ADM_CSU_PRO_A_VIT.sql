-- BUSCA UN PRODUCTO PARA AGREGAR A LA VITRINA, ESTE PRODUCTO DEBE ESTAR ASOCIADO A UNA COLECCIÓN
/*
CALL SP_CP_ADM_CSU_PRO_A_VIT(3,@codErr,@estado,@nombre,@marca);
SELECT @codErr,@estado,@nombre,@marca;

CALL SP_CP_ADM_CSU_PRO_A_VIT(40,@codErr,@estado,@nombre,@marca);
SELECT @codErr,@estado,@nombre,@marca;
*/

DROP PROCEDURE IF EXISTS bodyflex.SP_CP_ADM_CSU_PRO_A_VIT;
CREATE PROCEDURE bodyflex.`SP_CP_ADM_CSU_PRO_A_VIT`(
                                                        IN vId VARCHAR(20)
                                                        , OUT codErr INTEGER
                                                        , OUT estado VARCHAR(20)
                                                        , OUT nombre VARCHAR(20)
                                                        , OUT marca VARCHAR(100)
                                                      ) 
BEGIN
  
  -- DECLARE EXIT HANDLER FOR SQLEXCEPTION SET codErr=99;
  SET codErr=0;
  SET estado='';
  SET nombre='';
  SET marca='';

  IF EXISTS(SELECT * FROM COLECCION_PRODUCTO WHERE PROID=vId)THEN
    IF EXISTS(SELECT * FROM PRODUCTO WHERE PROID = vId) THEN
      SET @ESTADO=(SELECT PROET FROM PRODUCTO WHERE PROID=vId);
      SET @NOMBRE=(SELECT PRONO FROM PRODUCTO WHERE PROID=vId);
      SET @MARCA=(SELECT PROMA FROM PRODUCTO WHERE PROID=vId);
                  
      SET estado = @ESTADO;
      SET nombre = @NOMBRE;
      SET marca = @MARCA;
    ELSE
      SET codErr=98;
    END IF;
  ELSE
    SET codErr=97;
  END IF;
END




