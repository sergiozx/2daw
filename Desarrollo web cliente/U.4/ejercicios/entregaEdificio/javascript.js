class Building{

    constructor(street, number, zipCode){
        this.street = street;
        this.number = number;
        this.zipCode = zipCode;
        this.floors = [];
       
    }




    addFloorsAandDoors(floorsNum, doors){

        this.floors = [floorsNum][doors];

    }



    modifyNumber(number){

    }



    modifyStreet(stree){

    }

    modifyZipCode(zipCode){

    }

    printStreet(){

    }


    printNumber(){

    }

    printZipCode(){

    }

    addOwner(name,floor,door){

    }

    printFloors(){

    }




}

var edificioA = new Building("prueba", 3, 28100);
p.innerHTML += "Construido nuevo edificio en la calle: " + edificioA.street + ", No: " + edificioA.number + ", CP: " + edificioA.zipCode +"<br>";
