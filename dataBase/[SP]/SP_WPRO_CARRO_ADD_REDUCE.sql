
-- CALL SP_WPRO_CARRO_ADD_REDUCE('89',1,0);

-- select * from CARRO_DETALLE
-- select * from CARRO

DROP PROCEDURE IF EXISTS bodyflex.SP_WPRO_CARRO_ADD_REDUCE;
CREATE PROCEDURE bodyflex.`SP_WPRO_CARRO_ADD_REDUCE`( 
                                                  IN vId VARCHAR(20)
                                                  , IN vMas INTEGER
                                                  , IN vMenos INTEGER
                                                  , OUT codErr INTEGER
                                                )
BEGIN

DECLARE EXIT HANDLER FOR SQLEXCEPTION SET codErr=99;
SET codErr=0;
  
  IF EXISTS(SELECT * FROM CARRO_DETALLE WHERE CAD_ID=vId) THEN
    IF vMas=1 THEN
    
      -- 1� AUMENTAMOS CANTIDAD
      SET @CANT = (SELECT CAD_CAN FROM CARRO_DETALLE WHERE CAD_ID=vId);
      SET @CANT = @CANT + 1;
      
      -- 2� CALCULAMOS NUEVO SUBTOTAL
      SET @PRECIO = (SELECT CAD_PBR FROM CARRO_DETALLE WHERE CAD_ID=vId);
      SET @SUBTOTAL = @CANT *@PRECIO;
      
      -- 3� ACTUALIZAMOS CANTIDAD Y SUBTOTAL
      UPDATE CARRO_DETALLE SET CAD_CAN = @CANT, CAD_TBR=@SUBTOTAL WHERE CAD_ID=vId;
      
      -- 4� GET ID Y ACTALIZAMOS CARRO
      SET @ID = (SELECT CAID FROM CARRO_DETALLE WHERE CAD_ID=vId);
      SET @TOTBRU = (SELECT SUM(CAD_TBR) FROM CARRO_DETALLE WHERE CAID=@ID);
      SET @TOTNET = FLOOR(@TOTBRU/1.19); 
      SET @IVA = @TOTBRU - @TOTNET;
      UPDATE CARRO SET CAMTOBRU = @TOTBRU, CAMTONET = @TOTNET, CAIVA = @IVA WHERE CAID = @ID;
      
      -- 5� RETORNAMOS DATOS ACTUALIZADOS
      SET @PROVTA=(SELECT SUM(CAD_CAN) FROM CARRO_DETALLE WHERE CAID=@ID);
      SELECT CD.CAD_CAN AS CANT
      , CONCAT('$',REPLACE(FORMAT(CAD_TBR,0),',','.')) AS SUBTOT
      , CONCAT('$',REPLACE(FORMAT(CAMTOBRU,0),',','.')) AS TOTAL
      , @PROVTA AS PROTOT
      FROM CARRO C, CARRO_DETALLE CD 
      WHERE C.CAID=CD.CAID AND CD.CAD_ID = vId;     
            
    ELSE
    
      -- 1� OBTENEMOS CANTIDAD Y EVALUAMOS
      SET @CANT = (SELECT CAD_CAN FROM CARRO_DETALLE WHERE CAD_ID=vId);
      SET @ID = (SELECT CAID FROM CARRO_DETALLE WHERE CAD_ID=vId);
      
      IF @CANT <= 1 THEN -- SIN ACCI�N
        SET @PROVTA=(SELECT SUM(CAD_CAN) FROM CARRO_DETALLE WHERE CAID=@ID);
        SELECT CD.CAD_CAN AS CANT
        , CONCAT('$',REPLACE(FORMAT(CAD_TBR,0),',','.')) AS SUBTOT
        , CONCAT('$',REPLACE(FORMAT(CAMTOBRU,0),',','.')) AS TOTAL
        , @PROVTA AS PROTOT
        FROM CARRO C, CARRO_DETALLE CD 
        WHERE C.CAID=CD.CAID AND CD.CAD_ID = vId;  
      ELSE
        -- 1� RESTAMOS UNIDAD Y CALCULAMOS NUEVO SUBTOTAL
        SET @CANT = @CANT - 1; 
        SET @PRECIO = (SELECT CAD_PBR FROM CARRO_DETALLE WHERE CAD_ID=vId);
        SET @SUBTOTAL = @CANT * @PRECIO;
        
        -- 2� ACTUALIZAMOS CANTIDAD Y SUBTOTAL
        UPDATE CARRO_DETALLE SET CAD_CAN = @CANT, CAD_TBR=@SUBTOTAL WHERE CAD_ID=vId;
        
        -- 3� GET ID Y ACTALIZAMOS CARRO
        -- SET @ID = (SELECT CAID FROM CARRO_DETALLE WHERE CAD_ID=vId);
        SET @TOTBRU = (SELECT SUM(CAD_TBR) FROM CARRO_DETALLE WHERE CAID=@ID);
        SET @TOTNET = FLOOR(@TOTBRU/1.19); 
        SET @IVA = @TOTBRU - @TOTNET;
        UPDATE CARRO SET CAMTOBRU = @TOTBRU, CAMTONET = @TOTNET, CAIVA = @IVA WHERE CAID = @ID;
        
        -- 5� RETORNAMOS DATOS ACTUALIZADOS
        SET @PROVTA=(SELECT SUM(CAD_CAN) FROM CARRO_DETALLE WHERE CAID=@ID);
        SELECT CD.CAD_CAN AS CANT
        , CONCAT('$',REPLACE(FORMAT(CAD_TBR,0),',','.')) AS SUBTOT
        , CONCAT('$',REPLACE(FORMAT(CAMTOBRU,0),',','.')) AS TOTAL
        , @PROVTA AS PROTOT
        FROM CARRO C, CARRO_DETALLE CD 
        WHERE C.CAID=CD.CAID AND CD.CAD_ID = vId;  
        
      END IF;
    END IF;
    
  ELSE
    SET codErr=98;
  END IF;
      
END;
