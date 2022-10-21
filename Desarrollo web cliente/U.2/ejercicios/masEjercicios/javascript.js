//4
    /*
    let num = prompt("Introduce un número");

    if(num % 2 == 0){
        demo.innerHTML = "El número es par";
    }else{
        demo.innerHTML = "El número es impar";
    }
    */



//5
/*
    let num = prompt("Introduce un número", "se mostrará la cuenta atras");
    demo.innerHTML = "";

    for(let i=num; i>=0; i--){

        demo.innerHTML += i;
    }
*/



//7
/*
    let num1 = prompt("Introduce el primer número");
    let num2 = prompt("Introduce el segundo número");
    let num3 = prompt("Introduce el tercer número");

 
    if(num1 == num2 || num1 == num3 || num2 == num3){
        demo.innerHTML = "los números no son diferentes";
    }else{

        if((num1>num2 && num1<num3) || (num1<num2 && num1>num3)){
            demo.innerHTML = "El valor medio es: " + num1;

        }else{

            if((num2>num1 && num2<num3) || (num2<num1 && num2>num3)) {
                demo.innerHTML = "El valor medio es: " + num2;

            }else{
                demo.innerHTML = "El valor medio es: " + num3;
            }
        } 
    
    }

*/
    //otra opción:

/*  let num1 = prompt("Introduce el primer número");
    let num2 = prompt("Introduce el segundo número");
    let num3 = prompt("Introduce el tercer número");

    let array = [num1, num2, num3];

  
    if(num1 != "" && num2 != "" && num3 != ""){ //con != null no funciona
        demo.innerHTML = array.sort()[1];
       
    }else{
        
        demo.innerHTML = "no hay número central";
   }
*/
    








//8

/*
    let num1 = prompt("Introduce el primer número");
    let num2 = prompt("Introduce el segundo número");
    let num3 = prompt("Introduce el tercer número");
    let num4 = prompt("Introduce el cuarto número");

    let array = [num1, num2, num3, num4];

  
    if(num1 != "" && num2 != "" && num3 != "" && num4 != ""){ 
        demo.innerHTML = array.sort();
       
    }else{
        
        demo.innerHTML = "no se han introducido todos los números";
   }

*/

//9
/*


    let num;
    let array = []; //array se declara con corchetes
    let contador = 0;
    let suma = 0;

    do{

        num = parseInt(prompt("Introduce un número","negativo para terminar"));
        

        if(parseInt(num) >= 0){
            array[contador] = num; 
        }
        
        contador++;

    }
    while (parseInt(num) >= 0)


    for(let i=0; i<=array.lenght; i++){

        suma += array[i];
    }



    demo.innerHTML = "La media aritmética de los número es: " + suma/array.lenght;

*/    
        


//11

/*
let estatura;
let peso;
let imc;

estatura = parseInt(prompt("introduzca su estatura"));
peso = parseInt(prompt("introduzca su peso"));

imc = peso / (estatura)^2;


if(imc > 18  || imc < 24.9){
    demo.innerHTML = "Normal. Promedio";

}else if(imc > 25 || imc < 29.9){
    demo.innerHTML = "Sobrepeso. Riesgo Aumentado";

}else if(imc > 30 || imc < 34.9){

    demo.innerHTML = "Obesidad grado I. Riesgo Moderado";

}else if(imc > 35 || imc < 39.9){

    demo.innerHTML = "Obesidad grado II. Riesgo severo";

}else if (imc > 40){

    demo.innerHTML = "Obesidad grado III. Riesgo muy severo";

}else{
    
    demo.innerHTML = "IMC no válido";
}

*/