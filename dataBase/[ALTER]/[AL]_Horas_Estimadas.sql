-- select * from horas_estimadas


ALTER TABLE horas_estimadas MODIFY hrs_sef_IPF decimal(11,1);
ALTER TABLE horas_estimadas MODIFY hrs_sef_ISF decimal(11,1); 
ALTER TABLE horas_estimadas MODIFY hrs_sef_ILN decimal(11,1);
ALTER TABLE horas_estimadas MODIFY hrs_sef_IC decimal(11,1); 
ALTER TABLE horas_estimadas MODIFY hrs_sef_IV decimal(11,1); 
ALTER TABLE horas_estimadas MODIFY hrs_usr_IPF decimal(11,1);
ALTER TABLE horas_estimadas MODIFY hrs_usr_ISF decimal(11,1);
ALTER TABLE horas_estimadas MODIFY hrs_usr_ILN decimal(11,1);
ALTER TABLE horas_estimadas MODIFY hrs_usr_IC decimal(11,1);
ALTER TABLE horas_estimadas MODIFY hrs_usr_IV decimal(11,1); 
ALTER TABLE horas_estimadas MODIFY hrs_dias_SEF decimal(11,1);
ALTER TABLE horas_estimadas MODIFY hrs_dias_USR decimal(11,1);


-- decimal(11,1)