<!-- PUBLICACIONES -->
<div class="row-fluid sortable">
    <div class="box span12">
        <div class="box-header" data-original-title>
            <h2><i class="halflings-icon edit"></i><span class="break"></span>Publicaciones</h2>
            <div class="box-icon">
                <a href="#" class="btn-minimize"><i class="halflings-icon chevron-up"></i></a>  
            </div>
        </div>
        <div class="box-content">
            <!-- <input type="text" id="estPub"> --> <!-- Estado publicación en cuento a etiquetas y referencias-->
            <button style="display: none;" type="button" class="btn btn-info btn-setting" id="btnPublicaciones">Publicaciones</button>
            <table id="tblPublicaciones" class="table table-striped table-bordered bootstrap-datatable">
                <thead>
                    <tr>
                        <th style="text-align:center;">Identificador</th>
                        <th style="text-align:center;">Estado</th>
                        <th style="text-align:center;">F. Creación</th>
                        <th style="text-align:center;">F. Modificación</th>
                        <th style="text-align:center;">F. Publicación</th>
                        <th>Título</th>
                        <th style="text-align:center;">ID google drive</th>
                        <th style="text-align:center;">Tipo</th>
                    </tr>
                </thead>   
                <tbody id="tbody" style="cursor:pointer;">

                </tbody>
            </table>   
            <div id='idPag' class="pagination pagination-centered">

            </div>     
        </div>
    </div>
</div>
<!-- PUBLICACIONES -->