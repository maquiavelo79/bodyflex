/*
CALL SP_CP_ADM_CSU_SLI(1, @codErr);
CALL SP_CP_ADM_CSU_SLI(2, @codErr);
CALL SP_CP_ADM_CSU_SLI(3, @codErr);
CALL SP_CP_ADM_CSU_SLI(4, @codErr);
CALL SP_CP_ADM_CSU_SLI(5, @codErr);
CALL SP_CP_ADM_CSU_SLI(6, @codErr);
CALL SP_CP_ADM_CSU_SLI(7, @codErr);
SELECT @codErr;
*/

-- SELECT * FROM catalogo_slider1
-- SELECT * FROM PARAMETROS

CALL SP_CP_ADM_CSU_SLI(1,@codErr);
SELECT @codErr AS corErr;

DROP PROCEDURE IF EXISTS bodyflex.SP_CP_ADM_CSU_SLI;
CREATE PROCEDURE bodyflex.`SP_CP_ADM_CSU_SLI`(
                                                IN opc VARCHAR(1)
                                                , OUT codErr INTEGER
                                              )
BEGIN
  
  -- DECLARE EXIT HANDLER FOR SQLEXCEPTION SET codErr=99;

  SET codErr=0;

    CASE 
      WHEN opc=1 THEN 
        IF EXISTS(SELECT * FROM catalogo_slider1) THEN
          SELECT CS1ID
          , CS1TI
          , CS1DE
          , CS1GD
          , CS1URL
          , CS1CO
          FROM catalogo_slider1 SL1
          ORDER BY CS1ID DESC;
        ELSE
          SET codErr=98;
        END IF;  
      WHEN opc=2 THEN 
        IF EXISTS(SELECT * FROM catalogo_slider2) THEN
          SELECT CS2ID
          , CS2TI
          , CS2DE
          -- , CONCAT('$',REPLACE(FORMAT(CS2PR,0),',','.')) AS CS2PR 
          , CS2GD1
          , CS2GD2
          , CS2URL1
          , CS2URL2
          , CS2CO
          , CS2PO
          FROM catalogo_slider2 ORDER BY CS2ID DESC;
        ELSE
          SET codErr=98;
        END IF;  
      WHEN opc=3 THEN 
        IF EXISTS(SELECT * FROM catalogo_slider3) THEN
          SELECT * FROM catalogo_slider3 ORDER BY CS3ID DESC;
        ELSE
          SET codErr=98;
        END IF;  
      WHEN opc=4 THEN 
        IF EXISTS(SELECT * FROM catalogo_slider4) THEN
          SELECT * FROM catalogo_slider4 ORDER BY CS4ID DESC;
        ELSE
          SET codErr=98;
        END IF;  
      WHEN opc=5 THEN 
        IF EXISTS(SELECT * FROM catalogo_slider5) THEN
          SELECT * FROM catalogo_slider5 ORDER BY CS5ID DESC;
        ELSE
          SET codErr=98;
        END IF;  
      WHEN opc=6 THEN 
        IF EXISTS(SELECT * FROM catalogo_slider6) THEN
          SELECT CS6ID
          , CS6GD1
          , CS6GD2
          , CS6GD3
          -- , CONCAT('$',REPLACE(FORMAT(CS6P1,0),',','.')) AS CS6P1
          -- , CONCAT('$',REPLACE(FORMAT(CS6P2,0),',','.')) AS CS6P2
          -- , CONCAT('$',REPLACE(FORMAT(CS6P3,0),',','.')) AS CS6P3
          , CS6B1
          , CS6B2
          , CS6B3
          , CS6URL1
          , CS6URL2
          , CS6URL3
          , CS6PO1
          , CS6PO2
          , CS6PO3
          FROM catalogo_slider6 ORDER BY CS6ID DESC;
        ELSE
          SET codErr=98;
        END IF;  
      WHEN opc=7 THEN 
        IF EXISTS(SELECT * FROM catalogo_slider7) THEN
          SELECT * FROM catalogo_slider7 ORDER BY CS7ID DESC;
        ELSE
          SET codErr=98;
        END IF;  
    END CASE;
  
END


-- select * from catalogo_slider6
