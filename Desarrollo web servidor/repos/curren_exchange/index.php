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
                            <input id="amount" type="number" name="amount" placeholder="Enter the amount you want to exchange:" step="0.01"/> 
                        </div>
                        
                         
                        <div class="form-section">
                            <label for="from">From:</Label> 
                            <select id="from" name="from">
                                <option value="Euro">Euro (EUR)</option>
                                <option value="Dolar">Dólar (USD)</option>
                                <option value="Libra">Libra Esterlina (GBP)</option>
                                <option value="Yuan">Yuan (CNY)</option>
                            </select> 
                        </div>
                        
                         
                        <br>
                        <br>
                        <br>
                      
                        <div class="form-section">
                            <label for="result">Result:</label> 
                            <input id="result" type="text" name="result"/> 
                        </div>
                        
                        
                         <div class="form-section">
                            <label for="to">To:</Label> 
                            <select id="to" name="to">
                                <option value="Euro">Euro (EUR)</option>
                                <option value="Dolar">Dólar (USD)</option>
                                <option value="Libra">Libra Esterlina (GBP)</option>
                                <option value="Yuan">Yuan (CNY)</option>
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

