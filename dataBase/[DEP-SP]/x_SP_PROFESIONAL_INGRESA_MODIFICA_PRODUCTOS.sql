
-- CALL SP_PROFESIONAL_INGRESA_MODIFICA_PRODUCTOS('12','NUEVO','wwwwwwwwwwwww','2222222','wwwwwwwwwwwww','2','0','0','wwwwwwwwwwwww','9386703');
-- CALL SP_PROFESIONAL_INGRESA_MODIFICA_PRODUCTOS('13','NUEVO','xxxxxxxxxxxxx','2222222','xxxxxxxxxxxxx','2','0','0','xxxxxxxxxxxxx','9386703');
-- CALL SP_PROFESIONAL_INGRESA_MODIFICA_PRODUCTOS('13','NUEVO','yyyyyyyyyyyyy','2222222','yyyyyyyyyyyyy','2','0','0','yyyyyyyyyyyyy','9386703');
-- CALL SP_PROFESIONAL_INGRESA_MODIFICA_PRODUCTOS('14','NUEVO','zzzzzzzzzzzzz','2222222','zzzzzzzzzzzzz','2','0','0','zzzzzzzzzzzzz','9386703');
-- CALL SP_PROFESIONAL_INGRESA_MODIFICA_PRODUCTOS('0','NUEVO','nuevo','2222222','nuevo','2','0','0','nuevo','9386703');
-- CALL SP_PROFESIONAL_INGRESA_MODIFICA_PRODUCTOS('18','noNuevo','nuevo','2222222','noNuevo','2','0','0','noNuevo','9386703');


-- select * from profesional_producto
-- select * from profesional_producto_categoria1
-- select * from profesional_producto_categoria2
-- select * from profesional_producto_categoria3

DROP PROCEDURE IF EXISTS bodyflex.SP_PROFESIONAL_INGRESA_MODIFICA_PRODUCTOS;
CREATE PROCEDURE bodyflex.`SP_PROFESIONAL_INGRESA_MODIFICA_PRODUCTOS`( 
                                                              IN proId VARCHAR(20)
                                                            , IN cmbCon VARCHAR(20)
                                                            , IN proNom VARCHAR(100)
                                                            , IN proPre VARCHAR(20)
                                                            , IN proDes VARCHAR(100)
                                                            , IN cmbCat1 VARCHAR(10)
                                                            , IN cmbCat2 VARCHAR(10)
                                                            , IN cmbCat3 VARCHAR(10)
                                                            , IN detPro VARCHAR(3000)
                                                            , IN rut VARCHAR(10)
                                                            , IN marca VARCHAR(50)
                                                            , IN proPreRef VARCHAR(20)
                                                        )
BEGIN

-- DECLARE EXIT HANDLER FOR SQLEXCEPTION SELECT '99';
 
    IF NOT EXISTS(SELECT * FROM PROFESIONAL_PRODUCTO WHERE proPID=proId) THEN
  -- SELECT * FROM PROFESIONAL_PRODUCTO
      -- 2 INSERTAMOS REGISTRO
      INSERT INTO PROFESIONAL_PRODUCTO(
        PCP2_ID
        , PRUT
        , PCP3_ID
        , PCP1_ID
        , PROPNOM
        , PROPDESCOR
        , PROPDESLAR
        , PROPPREBRU
        , PROPEST
        , PROPCON
        , PROPFECING
        , proPMar
        , proPUni
        , proPPreRef
        , proPVenta
      )VALUES(
        cmbCat2
        , rut
        , cmbCat3
        , cmbCat1
        , proNom
        , proDes
        , detPro
        , proPre
        , 'INGRESADO'
        , cmbCon
        , NOW()
        , marca
        , 0
        , proPreRef
        , 0
      );
      
      -- 3 OBTENEMOS ULTIMO DPOID INGRESADO
      SET @id = (SELECT PROPID FROM PROFESIONAL_PRODUCTO ORDER BY PROPID DESC LIMIT 1);   
      
      -- 4 SELECCIONAMOS CAMPOS NECESARIOS
      SELECT PROPID
        , PROPNOM
        , PROPEST
        , PROPCON
        , PROPPREBRU
        , PROPDESCOR
        , PCP1_ID
        , PCP2_ID
        , PCP3_ID
        , PROPDESLAR
        , proPMar
        , proPPreRef
        , @id AS id
      FROM PROFESIONAL_PRODUCTO
      WHERE PRUT=rut AND PROPEST<>'ELIMINADO'
      ORDER BY PROPID DESC;
    
    ELSE -- EL REGISTRO EXISTE  
-- SELECT * FROM ESTUDIOS
      -- 1 ACTUALIZAR EL REGISTRO
        UPDATE PROFESIONAL_PRODUCTO 
        SET PROPCON = cmbCon
        , PROPNOM = proNom
        , PROPPREBRU = proPre
        , PCP1_ID = cmbCat1
        , PCP2_ID = cmbCat2
        , PCP3_ID = cmbCat3
        , PROPDESCOR = proDes
        , PROPDESLAR = detPro
        , proPMar = marca
        , proPPreRef = proPreRef
        WHERE PROPID=proId;
        
       -- 4 SELECCIONAMOS CAMPOS NECESARIOS
      SELECT PROPID
        , PROPNOM
        , PROPEST
        , PROPCON
        , PROPPREBRU
        , PROPDESCOR
        , PCP1_ID
        , PCP2_ID
        , PCP3_ID
        , PROPDESLAR
        , proPMar
        , proPPreRef
        , proId AS id
      FROM PROFESIONAL_PRODUCTO
      WHERE PRUT=rut AND PROPEST<>'ELIMINADO'
      ORDER BY PROPID DESC;
    END IF;
      
END;
