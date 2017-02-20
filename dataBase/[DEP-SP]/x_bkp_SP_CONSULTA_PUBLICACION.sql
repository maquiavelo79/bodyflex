-- CALL SP_CONSULTA_PUBLICACION('13661574');
-- SELECT * FROM PROFESIONAL;
-- SELECT * FROM PUBLICACION;


DROP PROCEDURE IF EXISTS bodyflex.SP_CONSULTA_PUBLICACION;
CREATE PROCEDURE bodyflex.`SP_CONSULTA_PUBLICACION`(
                                                      IN rut VARCHAR(20)
                                                    )
BEGIN

    SELECT PUID
    , PUEST
    -- , DATE_FORMAT(PUFECRE,'%d-%m-%Y') as PUFECRE
    -- , DATE_FORMAT(PUFEMOD,'%d-%m-%Y') as PUFEMOD
    -- , DATE_FORMAT(PUFEPUB,'%d-%m-%Y') as PUFEPUB
    , PUFECRE
    , PUFEMOD
    , PUFEPUB
    , PUTITULO
    , PUIMG
    FROM PUBLICACION
    WHERE PRUT=rut
    ORDER BY PUID, PUFECRE, PUFEPUB DESC;
    
END




