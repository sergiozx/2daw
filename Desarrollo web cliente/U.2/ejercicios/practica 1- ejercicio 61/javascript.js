
let num = parseInt(prompt("introduce un número", "valor entre 1-10")); //esto devuelve un string
let resultado = 0;
demo.innerHTML="";

if(num<1 || num>10){
    demo.innerHTML = "No se puede mostrar la tabla para este número";
}else{

    if (num==2 || num==4 || num==8){
        for(let i = 1; i<=10; i++){
            resultado = num*i;
            demo.innerHTML += num + " x " + i + " = " + resultado + "<br>"; 
        }

    }else if(num==3 || num==6 || num==9){
        let i = 1;
        while(i<=10){
            resultado = num + i;
            demo.innerHTML += num + " + " + i + " = " + resultado + "<br>";
            i++;
        }

    }else{
        let i = 1;
        do{
            resultado = num/i;
            demo.innerHTML += num + " / " + i + " = " + resultado + "<br>";
            i++;

        }while(i<=10)
    }
}