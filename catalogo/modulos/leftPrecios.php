<div class="panel panel-default">
    <div class="panel-heading">
        <h4 class="panel-title">
            <a class="collapseWill active " data-toggle="collapse" href="#collapsePrice">
                Price <span class="pull-left"> <i class="fa fa-caret-right"></i></span> 
            </a> 
            <span class="pull-right clearFilter  label-danger"> Clear </span>
        </h4>
    </div>
    <div id="collapsePrice" class="panel-collapse collapse in">
        <div class="panel-body priceFilterBody">
            <!-- -->
            <label>
                <input type="radio" name="agree" value="0"/>
                100$ - 500$</label>
            <br>
            <label>
                <input type="radio" name="agree" value="1"/>
                500$ - 1000$</label>
            <br>
            <label>
                <input type="radio" name="agree" value="2"/>
                1000$ - 1500$</label>
            <br>
            <label>
                <input type="radio" name="agree" value="3"/>
                1500$ - 2000$</label>
            <br>
            <label>
                <input type="radio" name="agree" value="4"/>
                2000$ - 2500$</label>
            <br>
            <label>
                <input type="radio" name="agree" value="5"/>
                2500$ - 3000$</label>
            <br>
            <label>
                <input type="radio" name="agree" value="6" disabled checked/>
                Don't know</label>
            <hr>
            <p>Enter a Price range </p>

            <form class="form-inline " role="form">
                <div class="form-group">
                    <input type="text" class="form-control" id="exampleInputEmail2"
                           placeholder="2000 $">
                </div>
                <div class="form-group sp"> -</div>
                <div class="form-group">
                    <input type="text" class="form-control" id="exampleInputPassword2"
                           placeholder="3000 $">
                </div>
                <button type="submit" class="btn btn-default pull-right">check</button>
            </form>
        </div>
    </div>
</div>
<!--/price panel end-->