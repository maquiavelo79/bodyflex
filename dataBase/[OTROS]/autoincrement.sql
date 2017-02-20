select auto_increment
from information_schema.TABLES
where TABLE_SCHEMA='db_fun' and TABLE_NAME='Det_Revision_QA';



select * from Det_Revision_QA;
SELECT MAX(det_rev_QA_id) FROM Det_Revision_QA

SELECT LAST_INSERT_ID();