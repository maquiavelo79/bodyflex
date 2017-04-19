<style>
    #txtPuId, #txtPuEst, #txtPuFCre, #txtPuFMod, #txtPuFPu{
        background-color: whitesmoke; 
        box-shadow: 0 0 2px black; 
        margin: 0px 0px 0px 0px; 
        font-weight: bold; 
        color: black; 
        width: 240px; 
        text-align: center; 
        background-color: #f9f3f3; 
        font-weight: bold;
    }
</style>

<!-- RESUMEN PUBLICACIÓN -->
<div class="row-fluid sortable">
    <div class="box span12">
        <div class="box-header" data-original-title>
            <h2 class="titH2">
                <i class="halflings-icon edit"></i><span class="break"></span>
                Header
            </h2>
        </div>
        <div class="box-content" style="height: 90px;"> <!-- border-style: solid; border-color: blue;  -->
            <table class="table">
                <tr>
                    <td style="width: 220px; text-align: center;">
                        <label style="font-weight: bold; font-size: 12px; color: blue;">[Identificador]</label>
                        <input id="txtPuId" class="input-xlarge uneditable-input" type="text">
                    </td>
                    <td style="width: 220px; text-align: center;">
                        <label style="font-weight: bold; font-size: 12px; color: blue;">[Estado]</label>
                        <input id="txtPuEst" class="input-xlarge uneditable-input" type="text">
                    </td>
                    <td style="width: 220px; text-align: center;">
                        <label style="font-weight: bold; font-size: 12px; color: blue;">[F. Creación]</label>
                        <input id="txtPuFCre" class="input-xlarge uneditable-input" type="text">
                    </td>
                    <td style="width: 220px; text-align: center;">
                        <label style="font-weight: bold; font-size: 12px; color: blue;">[F. Modificación]</label>
                        <input id="txtPuFMod" class="input-xlarge uneditable-input" type="text">    
                    </td>
                    <td style="width: 220px; text-align: center;">
                        <label style="font-weight: bold; font-size: 12px; color: blue;">[F. Publicación]</label>
                        <input id="txtPuFPu" class="input-xlarge uneditable-input" type="text">
                    </td>
                </tr>                    
             </table>   
        </div>
    </div><!--/span-->
</div><!--/row-->
<!-- RESUMEN PUBLICACIÓN -->