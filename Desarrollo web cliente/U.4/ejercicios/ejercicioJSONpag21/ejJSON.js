var superHero = { //es un objeto literal
  "squadName" : "Super Hero Squad",
  "homeTown" : "Metro City",
  "formed" : 2016,
  "secretBase" : "Super tower",
  "active" : true,
  "members" : [
    {
      "name" : "Molecule Man",
      "age" : 29,
      "secretIdentity" : "Dan Jukes",
      "powers" : [ 
        "Radiation resistance",
        "Turning tiny",
        "Radiation blast"
      ]
    },
    {
      "name" : "Madame Uppercut",
      "age" : 39,
      "secretIdentity" : "Jane Wilson",
      "powers" : [ 
        "Million tonne punch",
        "Damage resistance",
        "Superhuman reflexes"
      ]
    },
    {
      "name" : "Eternal Flame",
      "age" : 1000000,
      "secretIdentity" : "Unknown",
      "powers" : [
        "Immortality",
        "Heat Immunity",
        "Inferno",
        "Teleportation",
        "Interdimensional travel"
      ]
    }
  ]
}

//1 La fecha de creación del grupo de superhéroes.
p.innerHTML += "La fecha de creación del grupo es " + superHero.formed + "<br>"; //o superHero["formed"]
//2 El número de miembros del grupo de superhéroes.
p.innerHTML += "El número de miembros del grupo es " + superHero.members.length +"<br>"; //length es propiedad, no lleva paréntesis
//3 La edad del superhéroe Eternal Flame (sin saber qué posición ocupa).


superHero.members.forEach(f1);

function f1(element, index){ //element = elemento completo, index = posición que ocupa el elemento
  if(element.name == "Eternal Flame")
    p.innerHTML += "La edad del superhéroe \"Eternal Flame\" es " + element.age +"<br>";
}


/* otra forma con función fecha
superHero.members.forEach(element => { //element = cada uno de los objetos del array (la primera vez vale el primer objeto)
  if(element.name == "Eternal Flame")
    p.innerHTML += "La edad del superhéroe \"Eternal Flame\" es " + element.age;

});
*/


//4 El nombre del superhéroe que tiene el poder “Radiation blast”.
//no hace falta recorrer el array powers porque con el método indexOf puedo buscarloLa fecha de creación del grupo de superhéroes.

superHero.members.forEach(f2);

function f2(element, index){
  if(element.powers.indexOf("Radiation blast") != -1){
    p.innerHTML += "El nombre del superhéroe con el poder \"Radiation blast\" es " + element.name;
  }
}

//5 El nombre del superhéroe con mayor número de poderes.

var mayorPoderes = 0;
var nombre;

superHero.members.forEach(f3);

function f3(element,index){
  if(element.powers.length > mayorPoderes){
    mayorPoderes = element.powers.length;
    nombre = element.name;

  }
}

p.innerHTML += "<br>El superhéroe con mayor número de poderes es " + nombre;
