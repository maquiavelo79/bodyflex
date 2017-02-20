
<div class="row-fluid sortable">
    <div class="box span12">
        <div class="box-header" data-original-title>
            <h2><i class="halflings-icon edit"></i><span class="break"></span>Datos Usuario</h2>
            <div class="box-icon">
                <a href="#" class="btn-minimize"><i class="halflings-icon chevron-up"></i></a>
            </div>
        </div>
        <div class="box-content" style="height: 50px;">
            <table class="table">
                <tr>
                    <td class="center">
                        <span class="input-xlarge uneditable-input" style="background-color: whitesmoke; box-shadow: 0 0 2px black; margin: 0px 0px 0px 0px; font-weight: bold; color: black; width:190px; text-align: center;"><?= $_SESSION['rut'];?>&nbsp;-&nbsp;<?= $_SESSION['dv'];?></span>
                    </td>
                    <td class="center">
                        <span class="input-xlarge uneditable-input" style="background-color: whitesmoke; box-shadow: 0 0 2px black; margin: 0px 0px 0px 0px; font-weight: bold; color: black; width:190px; text-align: center;"><?= $_SESSION['nombre'];?></span>
                    </td>
                    <td class="center">
                        <span class="input-xlarge uneditable-input" style="background-color: whitesmoke; box-shadow: 0 0 2px black; margin: 0px 0px 0px 0px; font-weight: bold; color: black; width:190px; text-align: center;"><?= $_SESSION['apellido'];?></span>
                    </td>
                    <td class="center">
                        <span class="input-xlarge uneditable-input" style="background-color: whitesmoke; box-shadow: 0 0 2px black; margin: 0px 0px 0px 0px; font-weight: bold; color: black; width:190px; text-align: center;"><?= $_SESSION['rol'];?></span>
                    </td>                                 
                    <td class="center">
                        <span class="input-xlarge uneditable-input" style="background-color: whitesmoke; box-shadow: 0 0 2px black; margin: 0px 0px 0px 0px; font-weight: bold; color: black; width:190px; text-align: center;"><?= $_SESSION['alias'];?></span>
                    </td>
                    <td class="center">
                        <span class="input-xlarge uneditable-input" style="background-color: whitesmoke; box-shadow: 0 0 2px black; margin: 0px 0px 0px 0px; font-weight: bold; color: black; width:190px; text-align: center;"><?= $_SESSION['email'];?></span>
                    </td>
                </tr>                            
             </table>  
        </div>
    </div><!--/span-->
</div><!--/row-->
