const array = ["Hello", "It's me again", "Hello again"];

console.log(array[1], array[2],array[0]);
for(let x=0; x<array.length; x++){
    console.log(array[x]);
}
//Agregar elemento en determinada posición
array[7] = "Hi!";
console.log(array);

//Agregar elementos a los arrays
array.push("Hola");
console.log(array);

//Agregar elementos al principio del array
array.unshift("Hola");

//Eliminar el último elemento del array
array.pop();

//Eliminar el primer elemento del array
array.shift();

//Eliminar elementos en determinadas posiciones
array.splice(1,2);

//Unir todos los elementos del array separados entre sí por determinado caracter
array.join(" - ");

//Devuelve elementos entre primera y última posición pero sin contar la última
array.slice(1,3); //Devuelve [ "It's me again", "Hello again" ]

//Concatenar arrays
array.concat(array); //Devuelve [ "Hello", "It's me again", "Hello again", "Hello", "It's me again", "Hello again" ]

const listaDeNombres = [];
let cantidad = 5;
do{
    let entrada = prompt("Ingrese un nombre");
    listaDeNombres.push(entrada.toUpperCase());
    debugger;
    console.log(listaDeNombres.length());
}
while (listaNombre.length < cantidad){
    console.log(listaDeNombres);
};

