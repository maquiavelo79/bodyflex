

-- alter table revision_in DROP RevIn_Origen; 
alter table revision_in add RevIn_Origen INTEGER DEFAULT 1 COMMENT '1=Revisi�n PAR; 2=Revisi�n QA';
-- select * from revision_in;

