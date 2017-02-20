<aside class="widget widget_ci_schedule_widget three columns">
    <fieldset style="border-style: solid; border-width:5px;">
        <legend>Sesion Usuario</legend>
        <div style="margin-left: 20px;">
            
            <label>Aleas</label>
            <input type="alias" name="salias" id="salias" value="<?= $_SESSION['alias'];?>" readonly="true"><br>
            
            <label>Email</label>
            <input type="correo" name="scorreo" name="scorreo" value= "<?= $_SESSION['email'];?>" readonly="true"><br>
            
            <br>
            <div class="entry-meta">
                <span class="entry-categories">
                    <a href="./modulos/cerrarSesion.php">Cerrar Sesion</a> 
                </span>
            </div>
        </div>
    </fieldset>    
</aside>