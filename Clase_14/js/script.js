/*
let tiempo = 3000;
console.log('Soy el primer log! - 1');

// Después de determinado un tiempo ejecuta una acción
setTimeout(() => {
    console.log('Soy un proceso asincrónico! - 2');
}, tiempo)

console.log("Soy el log final! - 3");
*/
/*
let contador = 0;
let interval = 3000;

// Cada determinado un tiempo ejecuta una acción
setInterval(() => {
    console.log("Tic");
    console.log(contador);
    contador++;
},interval)
*/

//////////////////////////////////////////////////////////////
//PROMESAS


let hamburguesa = true;
let noHayHamburguesa = false;

const pedirHamburguesa = (respuesta) => {
    return new Promise((resolve, reject) => {
        if (respuesta){
            resolve("Busca tu hamburguesa");
        }else{
            reject("No hay hamburguesa");
        }
    })
}

/*console.log(pedirHamburguesa(hamburguesa));
console.log(pedirHamburguesa(noHayHamburguesa));
*/

//Try - catch de js
pedirHamburguesa(noHayHamburguesa).then((respuesta) => {
    console.log(respuesta);
    console.log("Éxito");
}).catch((respuesta) => {
    console.log(respuesta);
    console.log("Error");
}).finally(() => {
    console.log("Esto se ejecuta siempre");
})