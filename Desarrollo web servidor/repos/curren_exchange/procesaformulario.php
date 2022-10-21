<?php

//hay que poner round y la precision 
//hacer switch si divisa = dolar todo eso

if(empty($_POST)){
                    header("Location: index.php");
}


$amount = filter_input(INPUT_POST, "amount"); //filter_input es una función, viene un número float

$from = filter_input(INPUT_POST, "from"); //sino encuentra post devuelve false

$to = filter_input(INPUT_POST, "to");



if(!$amount || $amount <= 0){
    header("location:index.php");
}



switch ($from){ //switch dentro de otro switch
    case "Euro":
        switch ($to){
            case "Euro":
                $resultado = $amount;
            break;
            case "Dolar":
                $resultado = $amount*0.977; 
            break;
            case "Libra":
                $resultado = $amount*0.879;
            break;
            case "Yuan":
                $resultado = $amount*6.962;
            break;
            }
    break;

    case "Dolar":
        switch ($to){
            case "Euro":
                $resultado = $amount*1.022;
            break;
            case "Libra":
                $resultado = $amount*1.136;
            break;
            case "Yuan":
                $resultado = $amount*0.143;
            break;    
        }
    break;

    case "Libra":
        switch ($to){
            case "Euro":
                $resultado = $amount*1.137;
            break;
            case "Dolar":
                $resultado = $amount*1.111;
            break;
            case "Yuan":
                $resultado = $amount*7.907;
            break;    
        }
    break;

    case "Yuan":
        switch ($to){
            case "Euro":
                $resultado = $amount*0.143;
            break;
            case "Dolar":
                $resultado = $amount*0.140;
            break;
            case "Libra":
                $resultado = $amount*0.126;
            break;    
        }
    break;
    default:
?>

    <p>Excepción</p> <!--En caso de vaya por aquí seguir el rastro-->
<?php

    break;

}

  $cantidadFinal = round($resultado,2); //para redondear a 2


?>


<!DOCTYPE html>
<html>
    <head>
        <title>Currency Exchange</title>
        <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
        <meta name="viewport" content="width=device-width">
        <link rel="stylesheet" href="stylesheet.css">
    </head>
    <body>
            <div class="flex-page">
                <h1>Currency Exchange:</h1>
                <form class="form-font capaform" name="registerform" 
                      action="procesaformulario.php" method="POST">
                    <div class="flex-outer">
                        
                        
                        <div class="form-section">
                            <label for="amount">Amount:</label> 
                            <input id="amount" type="number" name="amount" placeholder="Enter the amount you want to exchange:" value="<?php echo $amount ?>" step="0.01"/> 
                        </div>
                        
                         
                        <div class="form-section">
                            <label for="from">From:</Label> 
                            <select id="from" name="from">
                                
                                <?php if($from == "Euro"){ ?>
                                <option value="Euro" selected>Euro (EUR)</option>
                                <?php }else{ ?>
                                <option value="Euro">Euro (EUR)</option>
                                <?php } 
                                if($from == "Dolar"){ ?>
                                <option value="Dolar" selected>Dólar (USD)</option>
                                <?php }else{ ?>
                                <option value="Dolar">Dólar (USD)</option>
                                <?php } 
                                if($from == "Libra"){ ?>
                                <option value="Libra" selected>Libra Esterlina (GBP)</option>
                                <?php }else{ ?>
                                <option value="Libra">Libra Esterlina (GBP)</option>
                                <?php }
                                if($from == "Yuan"){ ?>
                                <option value="Yuan" selected>Yuan (CNY)</option>
                                <?php }else{ ?>
                                <option value="Yuan">Yuan (CNY)</option>
                                <?php } ?>
                            </select> 
                        </div>
                       
                        <br>
                        <br>
                        <br>

                        <div class="form-section">
                            <label for="result">Result:</label> 
                            <input id="result" type="text" name="result" value="<?php echo $cantidadFinal ?>" readonly=""/> 
                        </div>
                        
                        
                        <!-- hacerlo más corto con if y echo selected -->
                         <div class="form-section">
                            <label for="to">To:</Label> 
                            <select id="to" name="to">
                                <option value="Euro" 
                                <?php 
                                if($to == "Euro"){ 
                                    echo "selected";
                                } 
                                ?> 
                                >Euro (EUR)</option>
                                
                                <option value="Dolar"
                                <?php 
                                if($to == "Dolar") 
                                    echo "selected"
                                ?> 
                                >Dólar (USD)</option>
                                
                                <option value="Libra"
                                <?php
                                if($to == "Libra")
                                    echo "selected"
                                ?>    
                                >Libra Esterlina (GBP)</option>
                                
                                <option value="Yuan"
                                <?php
                                if($to == "Yuan")
                                    echo "selected"
                                ?>        
                                >Yuan (CNY)</option>
                            </select> 
                        </div>
                        
                       
                        <div class="form-section">
                            <div class="submit-section">
                                <input class="submit" type="submit" 
                                       value="Convert" name="sendbutton" /> 
                            </div>
                        </div>
                        
                    </div>
                </form>
            </div>
    </body>
</html>

