//4
/*
let word1 = prompt("Introduce la primera palabra");
let word2 = prompt("Introduce la segunda palabra");
let dif;


if(word1.length > word2.length){
    dif = word1.length - word2.length;
    demo.innerHTML = "La palabra " + word1 + " es más larga con una diferencia de " + dif + " caracteres";
}else if(word1.length < word2.length){
    dif = word2.length - word1.length;
    demo.innerHTML = "La palabra " + word2 + " es más larga con una diferencia de " + dif + " caracteres";
}else{
    demo.innerHTML = "La dos palabras son iguales en longitud";
}
*/

 

//5
/*

let num = parseInt(prompt("Introduce un número")); //prompt devuelve tipo String
let cont;
let array = [num];
let shorter; 
let longer; 

for (let i=0; i<num; i++){ //se guarda en array
    array[i] = prompt("introduce la palabra");
}

shorter = array[0];
longer = array[0];

for(let i=0; i<array.length; i++){//recorrer el array
    
   
    if(array[i].length < shorter.length){
        shorter = array[i];
    }

    if(array[i].length > longer.length){
        longer = array[i];
    }

    
}


demo.innerHTML = "La palabra más larga es " + longer + "<br>";
demo.innerHTML += "La palabra más corta es " + shorter;
*/



//10

