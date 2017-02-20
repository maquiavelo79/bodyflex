


DROP PROCEDURE IF EXISTS bodyflex.SP_CP_ADM_PUBLICACION_CONSULTA_CATEGORIA_ETIQUETA2;
CREATE PROCEDURE bodyflex.`SP_CP_ADM_PUBLICACION_CONSULTA_CATEGORIA_ETIQUETA2`(
                                                              IN query VARCHAR(50)
                                                            )
BEGIN

    SELECT CATETINOM
    FROM CATEGORIA_ETIQUETA
    WHERE CATETINOM LIKE CONCAT('%', query ,'%') 
    ORDER BY CATETINOM ASC;
    
END
