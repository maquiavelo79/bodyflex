
-- CALL SP_PROFESIONAL_ADD_CARRITO('9386703','482v425q6ofr79enp27na39ii0','9386703','5','1000','1');
-- CALL SP_PROFESIONAL_ADD_CARRITO('9386703','482v425q6ofr79enp27na39ii0','9386703','5','1000','3');

-- CALL SP_WPRO_PROFESIONAL_ADD_CARRITO('9386703','482v425q6ofr79enp27na39ii0','9386703','10','1000','1');
-- CALL SP_WPRO_PROFESIONAL_ADD_CARRITO('9386703','482v425q6ofr79enp27na39ii0','9386703','10','1000','2');
-- CALL SP_WPRO_PROFESIONAL_ADD_CARRITO('9386703','482v425q6ofr79enp27na39ii0','9386703','10','1000','3');

-- CALL SP_WPRO_PROFESIONAL_ADD_CARRITO('9386703','482v425q6ofr79enp27na39ii0','9386703','4','1000','1');
-- CALL SP_WPRO_PROFESIONAL_ADD_CARRITO('9386703','482v425q6ofr79enp27na39ii0','9386703','4','1000','3');
-- CALL SP_WPRO_PROFESIONAL_ADD_CARRITO('9386703','482v425q6ofr79enp27na39ii0','9386703','4','1000','6');

-- select * from CARRO_DETALLE
-- select * from CARRO

DROP PROCEDURE IF EXISTS bodyflex.SP_WPRO_PROFESIONAL_ADD_CARRITO;
CREATE PROCEDURE bodyflex.`SP_WPRO_PROFESIONAL_ADD_CARRITO`(
                                                              IN rutPro VARCHAR(20)
                                                            , IN sesion VARCHAR(50)
                                                            , IN rutCli VARCHAR(20)
                                                            , IN codPro VARCHAR(20)
                                                            , IN prePro INTEGER
                                                            , IN cantidad INTEGER
                                                            , OUT codErr INTEGER
                                                            
                                                      )
BEGIN

DECLARE EXIT HANDLER FOR SQLEXCEPTION SET codErr=99;
SET codErr=0;
  
    SET @PRENET = FLOOR(prePro/1.19);
    SET @IVA = (prePro-@PRENET);
    SET @NOMPRO = (SELECT PROPNOM FROM PROFESIONAL_PRODUCTO WHERE PROPID=codPro);

    IF NOT EXISTS(SELECT * FROM CARRO WHERE caSesion=sesion) THEN
  
      -- 2 INSERTAMOS REGISTRO
      INSERT INTO CARRO(
        caFeCr
        , caRutPro
        , caSesion
        , caRutCom
        , caMtoBru
        , caMtoNet
        , caIva
        , caEst
      )VALUES(
        now()
        , rutPro
        , sesion
        , rutCli
        , prePro
        , @PRENET
        , @IVA
        , 'VIGENTE'
      );
         
      SET @CAID=(SELECT CAID FROM CARRO WHERE CASESION=sesion);   
         
      INSERT INTO CARRO_DETALLE(
        caId
        , cad_cod
        , cad_can
        , cad_det
        , cad_pbr
        , cad_tbr
      )VALUES(
        @CAID
        , codPro
        , cantidad
        , CONCAT('[ ',codPro,' ] ',@NOMPRO)
        , prePro -- monto bruto
        , (prePro * cantidad) -- subtotal bruto
      );   
      
      SELECT cantidad AS CANTIDAD
      , codPro as CODPRO
      , cantidad AS TOTPRO -- TOTAL DE PRODUCTOS EN CARRO DE COMPRAS
      , CONCAT('$',REPLACE(FORMAT(prePro,0),',','.')) AS PREPRO
      , CONCAT('$',REPLACE(FORMAT(prePro * cantidad,0),',','.')) AS SUBTOT
      , (SELECT PROPNOM FROM PROFESIONAL_PRODUCTO WHERE PROPID=codPro) AS NOMPRO;
         
    ELSE -- EL REGISTRO EXISTE  
        
      IF EXISTS( -- EXISTE EL PRODUCTO?
      
        SELECT * FROM CARRO C, CARRO_DETALLE CD 
        WHERE C.CAID=CD.CAID 
        AND caSesion=sesion 
        AND CD.cad_cod=codPro
        
      ) THEN
             
        -- OBTENER CANTIDAD Y ID  
        SET @CANT = (SELECT SUM(CD.CAD_CAN) FROM CARRO C, CARRO_DETALLE CD WHERE C.CAID=CD.CAID AND C.caSesion=sesion AND CD.cad_cod=codPro);
        SET @CADID = (SELECT cad_id FROM CARRO C, CARRO_DETALLE CD WHERE C.CAID=CD.CAID AND C.caSesion=sesion AND CD.cad_cod=codPro);
                
        -- SUMAMOS
        SET @CANT=@CANT+cantidad;
        
        -- CALCULAMOS NUEVO SUBTOTAL BRUTO DEL PRODUCTO
        SET @SUBTOT=(prePro * @CANT);
        
        -- ACTUALIZAMOS EL REGISTRo
        UPDATE CARRO_DETALLE SET CAD_CAN=@CANT, CAD_TBR=@SUBTOT WHERE CAD_ID=@CADID;
                        
      ELSE
      
        SET @CAID=(SELECT CAID FROM CARRO WHERE CASESION=sesion);   
        INSERT INTO CARRO_DETALLE(
          caId
          , cad_cod
          , cad_can
          , cad_det
          , cad_pbr
          , cad_tbr
        )VALUES(
          @CAID
          , codPro
          , cantidad
          , CONCAT('[ ',codPro,' ] ',@NOMPRO)
          , prePro
          , (prePro * cantidad)
        );   
        
      END IF;
        
      -- ACTUALIZAMOS TOTALES EN TABLA CARRO
      -- SET @TBRUTO = FLOOR(@TNETO * 1.19);
      
      SET @TBRUTO = (SELECT SUM(CD.cad_tbr) FROM CARRO C, CARRO_DETALLE CD WHERE C.caId=CD.caId AND C.caSesion=sesion);
      SET @TNETO = FLOOR(@TBRUTO / 1.19);
      SET @TIVA = (@TBRUTO-@TNETO);
      UPDATE CARRO SET caMtoNet=@TNETO, caIva=@TIVA, caMtoBru=@TBRUTO WHERE CASESION=sesion;     
      
      SELECT cantidad AS CANTIDAD
      , codPro as CODPRO
      , (SELECT SUM(CD.cad_can) AS CANTIDAD FROM CARRO C, CARRO_DETALLE CD WHERE C.CAID=CD.CAID AND C.caSesion=sesion) AS TOTPRO -- TOTAL DE PRODUCTOS EN CARRO DE COMPRAS
      , CONCAT('$',REPLACE(FORMAT(prePro,0),',','.')) AS PREPRO
      , CONCAT('$',REPLACE(FORMAT(prePro * cantidad,0),',','.')) AS SUBTOT
      , (SELECT PROPNOM FROM PROFESIONAL_PRODUCTO WHERE PROPID=codPro) AS NOMPRO;    
            
    END IF;
      
END;
