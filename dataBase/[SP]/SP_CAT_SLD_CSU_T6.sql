CALL SP_CAT_SLD_CSU_T6(@codErr);
SELECT @codErr;

-- select * from CATALOGO_SLIDER6

DROP PROCEDURE IF EXISTS bodyflex.SP_CAT_SLD_CSU_T6;
CREATE PROCEDURE bodyflex.`SP_CAT_SLD_CSU_T6`(OUT codErr INTEGER)
BEGIN
  
  DECLARE EXIT HANDLER FOR SQLEXCEPTION SET codErr=99;
  SET codErr=0;
  
  IF EXISTS(SELECT PARVAL FROM PARAMETROS WHERE PARNOM='DRIVE')THEN
    SET @URL_DRIVE=(SELECT PARVAL FROM PARAMETROS WHERE PARNOM='DRIVE');
  
    -- verificamos si el producto asociado a este slider existe
    SET @ID1=(SELECT CS6PO1 FROM CATALOGO_SLIDER6);
    IF EXISTS(SELECT * FROM PRODUCTO WHERE PROID=@ID1) THEN
      SET @URL_PRODUCTO1=(SELECT CS6URL1 FROM CATALOGO_SLIDER6);
      SET @CS6PO1=(SELECT CS6PO1 FROM CATALOGO_SLIDER6);
    ELSE
      SET @URL_PRODUCTO1=(SELECT PARVAL FROM PARAMETROS WHERE PARNOM='CATALOGO'); -- LA IDEA ES QUE CUANDO EL PRODUCTO NO EXISTA SE REDIRECCIONE AL CATALOGO
      SET @CS6PO1=0;
    END IF;
   
    SET @ID2=(SELECT CS6PO2 FROM CATALOGO_SLIDER6);
    IF EXISTS(SELECT * FROM PRODUCTO WHERE PROID=@ID2) THEN
      SET @URL_PRODUCTO2=(SELECT CS6URL2 FROM CATALOGO_SLIDER6);
      SET @CS6PO2=(SELECT CS6PO2 FROM CATALOGO_SLIDER6);
    ELSE
      SET @URL_PRODUCTO2=(SELECT PARVAL FROM PARAMETROS WHERE PARNOM='CATALOGO'); -- LA IDEA ES QUE CUANDO EL PRODUCTO NO EXISTA SE REDIRECCIONE AL CATALOGO
      SET @CS6PO2=0;
    END IF;
    
    SET @ID3=(SELECT CS6PO3 FROM CATALOGO_SLIDER6);
    IF EXISTS(SELECT * FROM PRODUCTO WHERE PROID=@ID3) THEN
      SET @URL_PRODUCTO3=(SELECT CS6URL3 FROM CATALOGO_SLIDER6);
      SET @CS6PO3=(SELECT CS6PO3 FROM CATALOGO_SLIDER6);
    ELSE
      SET @URL_PRODUCTO3=(SELECT PARVAL FROM PARAMETROS WHERE PARNOM='CATALOGO'); -- LA IDEA ES QUE CUANDO EL PRODUCTO NO EXISTA SE REDIRECCIONE AL CATALOGO
      SET @CS6PO3=0;
    END IF;

    IF EXISTS(SELECT * FROM CATALOGO_SLIDER6)THEN 
      SELECT S6.CS6ID
      , S6.CS6GD1
      , S6.CS6GD2
      , S6.CS6GD3
      , CONCAT('$',REPLACE(FORMAT(IFNULL((SELECT proPvp FROM PRODUCTO WHERE PROID=S6.CS6PO1),0),0),',','.')) AS CS6P1 
      , CONCAT('$',REPLACE(FORMAT(IFNULL((SELECT proPvp FROM PRODUCTO WHERE PROID=S6.CS6PO2),0),0),',','.')) AS CS6P2 
      , CONCAT('$',REPLACE(FORMAT(IFNULL((SELECT proPvp FROM PRODUCTO WHERE PROID=S6.CS6PO3),0),0),',','.')) AS CS6P3 
      , S6.CS6B1
      , S6.CS6B2
      , S6.CS6B3
      , @URL_PRODUCTO1
      , @URL_PRODUCTO2
      , @URL_PRODUCTO3
      , @URL_DRIVE 
      , @CS6PO1
      , @CS6PO2
      , @CS6PO3
      FROM CATALOGO_SLIDER6 S6
      ORDER BY CS6ID ASC; 
    ELSE
      SET codErr=98;
    END IF;
  ELSE
    SET codErr=97;
  END IF;
END

-- SELECT * FROM CATALOGO_SLIDER6


