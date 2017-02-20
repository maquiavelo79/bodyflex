
<script type="text/javascript">
    $(document).ready(function(){
        
        // Change the selector if needed
        var $table = $('table.scroll'),
            $bodyCells = $table.find('tbody tr:first').children(),
            colWidth;

        // Adjust the width of thead cells when window resizes
        $(window).resize(function() {
            // Get the tbody columns width array
            colWidth = $bodyCells.map(function() {
                return $(this).width();
            }).get();

            // Set the width of thead columns
            $table.find('thead tr').children().each(function(i, v) {
                $(v).width(colWidth[i]);
            });    
        }).resize(); // Trigger resize handler

    });    
</script>
<style>
    
    table.scroll {
        width: 100%;  
        border-collapse: collapse; 
        border-spacing: 0;
        
/*        border-color: red;
        border-style: solid;*/
        height: 350px;
        
/*        border: 2px solid black;*/
    }

    table.scroll tbody,
    table.scroll thead { display: block; }

    thead tr th { 
        height: 50px;
/*        line-height: 30px;*/
        text-align: center; 
    }

    table.scroll tbody {
        height: 350px;
        overflow-y: auto;
        overflow-x: hidden;
    }

/*tbody { border-top: 2px solid black; }*/
tbody { border-top: 2px; }

tbody td, thead th {
/*    width: 20%;*/
/*    border-right: 1px solid black;*/
/*    white-space: nowrap; */
}

tbody td:last-child, thead th:last-child {
    border-right: none;
}
</style>

<br><br>
<section id="carrito">
    <div class="container">
        <div class="section-header">
            <h2 class="section-title text-center wow fadeInDown">Carro de compras</h2>
        </div>
        <div class="row" style="height: 360px; border-color: black; border-style: solid; border-radius: 15px;"> <!-- style="height: 800px; border-color: black; border-style: solid; border-radius: 15px;" -->
            <table class="scroll">
                <tbody>
                    <tr>
                        <td style="width: 200px; text-align: center;">
                            <a href="">
                                <img style="margin-left: 3px; margin-right: 3px; margin-top: 3px; margin-bottom: 3px;" width="110" height="110" src="http://drive.google.com/uc?export=view&id=0BwscgrEmxbyLYmpOQWhQTDlUMWc" alt="">
                            </a>
                        </td>
                        <td style="width: 400px; text-align: center;">
                            <h4><a style="color: black; font-weight: bold;">Colorblock Scuba</a></h4>
                            <p style="font-weight: bold;">ID: 1089772</p>
                        </td>
                        <td style="width: 200px; text-align: center;">
                            <p style="color: black; font-weight: bold;">$59</p>
                        </td>
                        <td style="width: 200px; text-align: center;">
                            <div>
                                <a href=""><i style="color: black;" class="fa fa-minus"></i></a>
                                    <input style="color: black; font-weight: bold; text-align: center; font-size: 14px;" type="text" name="quantity" value="1" autocomplete="off" size="2">
                                <a href=""><i style="color: black;" class="fa fa-plus"></i></a>
                            </div>
                        </td>
                        <td style="width: 200px; text-align: center;">
                            <p style="color: black; font-weight: bold;">$59</p>
                        </td>
                        <td style="width: 200px; text-align: center;">
                            <a href=""><i style="color: black; font-weight: bold;" class="fa fa-times fa-lg"></i></a>
                        </td>
                    </tr>
                    <tr>
                        <td style="width: 200px; text-align: center;">
                            <a href=""><img style="margin-left: 3px; margin-right: 3px; margin-top: 3px; margin-bottom: 3px;" width="110" height="110" src="http://drive.google.com/uc?export=view&id=0BwscgrEmxbyLMXplQkczV0dDU2M" alt=""></a>
                        </td>
                        <td style="width: 400px; text-align: center;">
                            <h4><a style="color: black; font-weight: bold;">Colorblock Scuba</a></h4>
                            <p style="font-weight: bold;">ID: 1089772</p>
                        </td>
                        <td style="width: 200px; text-align: center;">
                            <p style="color: black; font-weight: bold;">$59</p>
                        </td>
                        <td style="width: 200px; text-align: center;">
                            <div>
                                <a href=""><i style="color: black;" class="fa fa-minus"></i></a>
                                    <input style="color: black; font-weight: bold; text-align: center; font-size: 14px;" type="text" name="quantity" value="1" autocomplete="off" size="2">
                                <a href=""><i style="color: black;" class="fa fa-plus"></i></a>
                            </div>
                        </td>
                        <td style="width: 200px; text-align: center;">
                            <p style="color: black; font-weight: bold;">$59</p>
                        </td>
                        <td style="width: 200px; text-align: center;">
                            <a href=""><i style="color: black; font-weight: bold;" class="fa fa-times fa-lg"></i></a>
                        </td>
                    </tr>
                    <tr>
                        <td style="width: 200px; text-align: center;">
                            <a href=""><img style="margin-left: 3px; margin-right: 3px; margin-top: 3px; margin-bottom: 3px;" width="110" height="110" src="http://drive.google.com/uc?export=view&id=0BwscgrEmxbyLdWtSMVdOMVJPWm8" alt=""></a>
                        </td>
                        <td style="width: 400px; text-align: center;">
                            <h4><a style="color: black; font-weight: bold;">Colorblock Scuba</a></h4>
                            <p style="font-weight: bold;">ID: 1089772</p>
                        </td>
                        <td style="width: 200px; text-align: center;">
                            <p style="color: black; font-weight: bold;">$59</p>
                        </td>
                        <td style="width: 200px; text-align: center;">
                            <div>
                                <a href=""><i style="color: black;" class="fa fa-minus"></i></a>
                                    <input style="color: black; font-weight: bold; text-align: center; font-size: 14px;" type="text" name="quantity" value="1" autocomplete="off" size="2">
                                <a href=""><i style="color: black;" class="fa fa-plus"></i></a>
                            </div>
                        </td>
                        <td style="width: 200px; text-align: center;">
                            <p style="color: black; font-weight: bold;">$59</p>
                        </td>
                        <td style="width: 200px; text-align: center;">
                            <a href=""><i style="color: black; font-weight: bold;" class="fa fa-times fa-lg"></i></a>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div> 
        <br>
        <div class="row" style="height: 50px; border-color: black; border-style: solid; border-radius: 15px;">
            <table class="scroll">
                <tbody>
                    <tr>
                        <td style="width: 200px; text-align: center;"></td>
                        <td style="width: 400px; text-align: center;">
                            <h4><a style="color: black; font-weight: bold;">Totales</a></h4>
                        </td>
                        <td style="width: 200px; text-align: center;"></td>
                        <td style="width: 200px; text-align: center;">
                            <div>
                                <input style="background-color: whitesmoke; width: 120px; color: black; font-weight: bold; text-align: center; font-size: 16px;" type="text" id="numTot" name="numTot" value="1" autocomplete="off" size="3" readonly="readonly">
                            </div>
                        </td>
                        <td style="width: 200px; text-align: center;">
                            <div>
                                <input style="background-color: whitesmoke; width: 120px; color: black; font-weight: bold; text-align: center; font-size: 16px;" type="text" id="monTot" name="monTot" value="1" autocomplete="off" size="3" readonly="readonly">
                            </div>
                        </td>
                        <td style="width: 200px; text-align: center;"></td>
                    </tr>
                </tbody>
            </table>
        </div>    
    </div>
</section>
<br><br>