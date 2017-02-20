
-- CALL SP_CP_PRO_INGRESA_MODIFICA_PRODUCTOS('12','NUEVO','wwwwwwwwwwwww','2222222','wwwwwwwwwwwww','2','0','0','wwwwwwwwwwwww','9386703');
-- CALL SP_CP_PRO_INGRESA_MODIFICA_PRODUCTOS('13','NUEVO','xxxxxxxxxxxxx','2222222','xxxxxxxxxxxxx','2','0','0','xxxxxxxxxxxxx','9386703');
-- CALL SP_CP_PRO_INGRESA_MODIFICA_PRODUCTOS('13','NUEVO','yyyyyyyyyyyyy','2222222','yyyyyyyyyyyyy','2','0','0','yyyyyyyyyyyyy','9386703');
-- CALL SP_CP_PRO_INGRESA_MODIFICA_PRODUCTOS('14','NUEVO','zzzzzzzzzzzzz','2222222','zzzzzzzzzzzzz','2','0','0','zzzzzzzzzzzzz','9386703');
-- CALL SP_CP_PRO_INGRESA_MODIFICA_PRODUCTOS('0','NUEVO','nuevo','2222222','nuevo','2','0','0','nuevo','9386703');
-- CALL SP_CP_PRO_INGRESA_MODIFICA_PRODUCTOS('18','noNuevo','nuevo','2222222','noNuevo','2','0','0','noNuevo','9386703');

-- select * from producto
-- select * from profesional_producto_categoria1
-- select * from profesional_producto_categoria2
-- select * from profesional_producto_categoria3

DROP PROCEDURE IF EXISTS bodyflex.SP_CP_PRO_INGRESA_MODIFICA_PRODUCTOS;
CREATE PROCEDURE bodyflex.`SP_CP_PRO_INGRESA_MODIFICA_PRODUCTOS`( 
                                                              IN vpId VARCHAR(20)
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
                                                            , OUT codErr INTEGER
                                                        )
BEGIN

-- DECLARE EXIT HANDLER FOR SQLEXCEPTION SET codErr=99;

SET codErr=0;

    IF NOT EXISTS(SELECT * FROM PRODUCTO WHERE proID=vpId) THEN
  -- SELECT * FROM PRODUCTO
      -- 2 INSERTAMOS REGISTRO
      INSERT INTO PRODUCTO(
        PCP2_ID
        , PCP3_ID
        , PCP1_ID
        , PRONO
        , PRODE
        , PROES
        , PROPV
        , PROET
        , PROCO
        , PROFI
        , PROMA
        , PROUN
        , PROPR
        , PROPE
      )VALUES(
        null        
        , NULLIF(cmbCat3, '')
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
      SET @id = (SELECT PROID FROM PRODUCTO ORDER BY PROID DESC LIMIT 1);   
      
      -- 4 ASOCIAMOS EL PRODUCTO AL PROFESIONAL
      INSERT INTO PRODUCTO_PROFESIONAL(proId, pRut) VALUES (@id, rut);
      
      -- INDICADOR DE INGRESO
      SET codErr=1;
      
      -- 5 SELECCIONAMOS CAMPOS NECESARIOS
      SELECT @id AS id
      FROM PRODUCTO P, PRODUCTO_PROFESIONAL PP
      WHERE P.PROID=PP.PROID AND PP.PRUT=rut 
      ORDER BY P.PROID DESC;
    
    ELSE -- EL REGISTRO EXISTE  
-- SELECT * FROM PRODUCTO
      -- 1 ACTUALIZAR EL REGISTRO
        UPDATE PRODUCTO 
        SET PROCO = cmbCon
        , PRONO = proNom
        , PROPV = proPre
        , PCP1_ID = cmbCat1
        , PCP2_ID = NULLIF(cmbCat2, '')
        , PCP3_ID = NULLIF(cmbCat3, '')
        , PRODE = proDes
        , PROES = detPro
        , PROMA = marca
        , PROPR = proPreRef
        WHERE PROID=vpId;
        
        -- INDICADOR DE ACTUALIZACIÓN
        SET codErr=2;
        
       -- 4 SELECCIONAMOS CAMPOS NECESARIOS
        SELECT vpId AS id
        FROM PRODUCTO P, PRODUCTO_PROFESIONAL PP
        WHERE P.PROID=PP.PROID AND PP.PRUT=rut 
        ORDER BY P.PROID DESC;
      
    END IF;
      
END;
