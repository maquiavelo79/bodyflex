
-- CALL SP_AGREGA_VOTACION_PROFESIONAL_PRODUCTO('9386703','1','1','0','pro@bo.cl');
-- SELECT * FROM PROFESIONAL_PRODUCTO_VOTACION

DROP PROCEDURE IF EXISTS bodyflex.SP_WPRO_AGREGA_VOTACION_PROFESIONAL_PRODUCTO;
CREATE PROCEDURE bodyflex.`SP_WPRO_AGREGA_VOTACION_PROFESIONAL_PRODUCTO`( 
                                                    IN rut VARCHAR(20)
                                                  , IN id VARCHAR(20)
                                                  , IN li INTEGER -- LO QUE APRETÓ EL USUARIO, NO PUEDEN SER AMBOS
                                                  , IN ul INTEGER -- LO QUE APRETÓ EL USUARIO, NO PUEDEN SER AMBOS
                                                  , IN ma VARCHAR(100) -- MAIL DEL USUARIO SI ESTE SE REGISTRO
                                                  , IN se VARCHAR(50) -- SESION DEL USUARIO
                                                  , OUT codErr INTEGER
                                                )
BEGIN
-- DECLARE EXIT HANDLER FOR SQLEXCEPTION SET codErr=99;
SET codErr=0;

  IF NOT EXISTS(
  
    SELECT * 
    FROM PRODUCTO P, PRODUCTO_VOTACION PV, PRODUCTO_PROFESIONAL PP 
    WHERE P.PROID=PP.PROID AND P.PROID=PV.proID 
    AND PP.PRUT=rut
    AND P.PROID=id
    AND (PV.PVO_ML=ma OR PV.PVO_SE=se)
  
  ) 
  THEN
  
    IF (li=1) THEN
      INSERT INTO PRODUCTO_VOTACION(proID, pvo_li, pvo_ul, pvo_ml, pvo_fe, pvo_se) VALUES (id, 1, 0, ma, now(), se);
      SET @SW=2;
    ELSE
      INSERT INTO PRODUCTO_VOTACION(proID, pvo_li, pvo_ul, pvo_ml, pvo_fe, pvo_se) VALUES (id, 0, 1, ma, now(), se);
      SET @SW=4;
    END IF;
    
  ELSE
    
    SET @LI=(
      SELECT pvo_li 
      FROM PRODUCTO P,
           PRODUCTO_PROFESIONAL PP,  
           PRODUCTO_VOTACION PV 
      WHERE P.PROID=PP.PROID AND P.PROID=PV.proID 
      AND PP.PRUT=rut
      AND P.PROID=id
      AND (PV.PVO_ML=ma OR PV.PVO_SE=se)
    );
    
    SET @UL=(
      SELECT pvo_ul 
      FROM PRODUCTO P, 
           PRODUCTO_PROFESIONAL PP,  
           PRODUCTO_VOTACION PV 
      WHERE P.PROID=PP.PROID AND P.PROID=PV.proID 
      AND PP.PRUT=rut
      AND P.PROID=id
      AND (PV.PVO_ML=ma OR PV.PVO_SE=se)
    );
    
    SET @SW=0;
    
    IF(li=1 AND @LI=1)THEN -- ya le gustaba y apreto lo mismo, queda en nada
      
      DELETE FROM PRODUCTO_VOTACION
      WHERE PROID=id
      AND (PVO_ML=ma OR PVO_SE=se);
      INSERT INTO PRODUCTO_VOTACION(proID, pvo_li, pvo_ul, pvo_ml, pvo_fe, pvo_se) VALUES (id, 0, 0, ma, now(), se);
      SET @SW=1;
      
    ELSE
    
      IF(li=1 AND @LI=0)THEN -- no le gustaba, ahora le gusta queda en like
        DELETE FROM PRODUCTO_VOTACION
        WHERE PROID=id
        AND (PVO_ML=ma OR PVO_SE=se);
        INSERT INTO PRODUCTO_VOTACION(proID, pvo_li, pvo_ul, pvo_ml, pvo_fe, pvo_se) VALUES (id, 1, 0, ma, now(), se);
        SET @SW=2;
      END IF;
      IF(@SW=0)THEN
        IF(ul=1 AND @UL=1)THEN -- no le gustaba y apreto lo mismo, queda en nada
          DELETE FROM PRODUCTO_VOTACION
          WHERE PROID=id
          AND (PVO_ML=ma OR PVO_SE=se);
          INSERT INTO PRODUCTO_VOTACION(proID, pvo_li, pvo_ul, pvo_ml, pvo_fe, pvo_se) VALUES (id, 0, 0, ma, now(), se);
          SET @SW=3;
        END IF;
      END IF;
      IF(@SW=0)THEN
        IF(ul=1 AND @UL=0)THEN
          DELETE FROM PRODUCTO_VOTACION
          WHERE PROID=id
          AND (PVO_ML=ma OR PVO_SE=se);
          INSERT INTO PRODUCTO_VOTACION(proID, pvo_li, pvo_ul, pvo_ml, pvo_fe, pvo_se) VALUES (id, 0, 1, ma, now(), se);
          SET @SW=4;
        END IF;
      END IF;
    END IF;
    
  END IF;

  SELECT @SW;

END;
