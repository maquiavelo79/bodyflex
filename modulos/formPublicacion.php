<main id="main" class="container"> <!-- style=" border-color: blue; border-style: solid;" -->
            <aside class="widget widget_ci_schedule_widget three columns">
                <h3>Criterios de búsqueda</h3>
                <table>
                    <tr>
                        <td colspan='3' style="width: 99%;">
                            <input style="float: left; width: 99%;" type="text" id="search-box-prof" placeholder="[NOMBRE O APELLIDO DEL PROFESIONAL]" />
                            <div id="suggesstion-box-prof"></div>    
                        </td>
                    </tr>
                    <tr>
                        <td colspan='3' style="width: 99%;">
                            <input style="float: left; width: 99%;" type="text" id="search-box" placeholder="[NOMBRE PUBLICACIÓN O PALABRA CLAVE]" />
                            <input type="hidden" id="puIdBsq">
                            <div id="suggesstion-box"></div>    
                        </td>
                    </tr>
                    <tr>
                        <td style="width: 33%;">
                            <input type="text" id="search-categoria" placeholder="[ INGRESE CATEGORÍA ]" />
                        </td>
                        <td style="width: 33%;">
                            <input type="text" id="search-etiqueta" placeholder="[ INGRESE ETIQUETA ]" />
                        </td>
                        <td style="width: 33%;">
                            <input type="text" id="search-referencia" placeholder="[ INGRESE TIPO REFERENCIA ]" />
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <div style="width: 100%;" id="suggesstion-box-categoria"></div>
                        </td>
                        <td>
                            <div style="width: 100%;" id="suggesstion-box-etiqueta"></div>
                        </td>
                        <td>
                            <div style="width: 100%;" id="suggesstion-box-referencia"></div>
                        </td>
                    </tr>
                </table>
                   
                <input id="buscar" 
                       style="margin-left: 33%; width: 33%; height: 30px;" 
                       type="submit" 
                       value="Buscar" 
                       name="buscar" 
                       class="bottom"
                       onclick='consultaPublicacionesRsm($("#rutPro").val(),0,0,1,1)'>
                
                
                <div id='espera' style="width: 99%; height: 60px; display: none;"></div>
                <div id="warningBsq" class="box-content alerts" style="text-align: center; display: none;"></div>

            </aside>    
        </main>   
        <script src='../controller/publicacionFormBsq.js'></script>