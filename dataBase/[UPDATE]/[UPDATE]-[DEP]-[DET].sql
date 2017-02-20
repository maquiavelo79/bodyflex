


select * from dependencia where dEp_eStado = 'ABIERTA';
select * from detenido where dEt_eStado = 'ABIERTA';

update dependencia d 
set d.dEp_fEc_OUT = d.dEp_fEc_IN, d.dEp_hRs_OUT = d.dEp_hRs_IN
where dEp_eStado = 'ABIERTA';

update detenido d 
set d.dEt_fEc_OUT = d.dEt_fEc_IN, d.dEt_hRs_OUT = d.dEt_hRs_IN
where dEt_eStado = 'ABIERTA';