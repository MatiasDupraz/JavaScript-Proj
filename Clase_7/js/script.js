/*

const libros = [
    {
        id: 1,
        titulo: "Piense y hágase rico",
        anioPub: 1940,
        autor: "Gabriel García Márquez",
    },
    {
        id: 2,
        titulo: "El señor de los anillos",
        anioPub: 1997,
        autor: "J. R. R. Tolkien",
    },
    {
        id: 3,
        titulo: "Eloquent JavaScript",
        anioPub: 2013,
        autor: "Marijn Haverbeke",
    },
    {
        id: 4,
        titulo: "El principito",
        anioPub: 1925,
        autor: "Antoine de Saint-Exupéry",
    }

]

libros.push({id: 5, titulo: "Padre Rico Padre Pobre", anioPub: 2010, autor: "Robert Louis Stevenson"})

idBusqueda = prompt("Ingrese el id del libro que desea buscar")
for(let i=0; i<libros.length; i++){
    if(libros[i].id == idBusqueda){
        console.log(libros[i]);
    }
}
RealfechaActual = 2023;
for(const libro of libros){
    console.log("El libro se llama " + libro.titulo + " y tiene " + (RealfechaActual - libro.anioPub) + " años");
}

function sumarRango(inicio, fin){
    suma = 0
    for(let i=inicio; i<fin; i++){
        suma +=1;
        console.log(suma);
    }
}

sumarRango(20,30);


const numeros = [1,2,3,4,5,6,7,8,9,10];

numeros.forEach(elemento=>{
    console.log(`elemento: ${elemento}`);
    numeros[elemento-1] = elemento * 13;
})

//.find() devuelve el primer elemento que cumpla con la condición
const resultado = numeros.find(elemento=>{
    return elemento % 7 == 0;
})

console.log(resultado);

//.some() devuelve true si alguno de los elementos cumpla con la condición
const resultado2 = numeros.some(elemento=>{
    return elemento % 7 == 0;
})
console.log(resultado2);


//includes() devuelve true si alguno de los elementos cumpla con la condición


*/
/*

titulloBusqueda = prompt("Ingrese el titulo del libro que desea buscar");

const resultado3 = libros.titulo.forEach(cursoincludes(titulloBusqueda) =>{
        return libros.titulo;
    });
console.log(resultado3);


const librosDescuentos = libros.map(libro =>{
    return
})

const disorder = [32, 21, 43, 22, 54, 08];
console.log(disorder);
const disorder2 = disorder.slice(0)
console.log(disorder);

//.sort() ordena los elementos de menor a mayor (a-b)
const order = disorder.sort((a,b) => a-b);
console.log(order);

const PI = Math.PI;
console.log(PI);

let azar = Math.random()*10;
console.log(azar);

//toFixed() redondear valores decimales
console.log(azar.toFixed(2));
//ceil() redondea hacia arriba
console.log(Math.ceil(azar));
//floor() redondea hacia abajo
console.log(Math.floor(azar));
//round() redondea
console.log(Math.round(azar));


let fechaActualReal = new Date();

finDeAño = new Date(2023,12,31,23,59,59);
console.log(finDeAño.getFullYear());
console.log(finDeAño.getMonth());
console.log(finDeAño.getDate());
console.log(finDeAño.getHours());
console.log(finDeAño.getMinutes());
console.log(finDeAño.getSeconds());

*/

function asignarOperacion(op){
    if (op === "suma"){
        return (a,b) => (a + b)
    }
    if (op === "resta"){
        return (a,b) => (a - b)
    }
    if (op === "multiplicacion"){
        return (a,b) => (a * b)
    }
}

let suma = asignarOperacion("suma");
let resta = asignarOperacion("resta");
let multiplicacion = asignarOperacion("multiplicacion");

// console.log(suma(1,2));
// console.log(resta(1,2));
// console.log(multiplicacion(1,2));

function forElement(array, fn){
    for(const of of array){
        fn(of);
    }
}

numeros = [1,2,3,4,5,6,7,8,9,10];
// forElement(numeros, console.log);


// function intereses(producto){
//     switch (producto){
//         case "electrónica":
//             return (precio) => (precio * 1.18);
//         case "decoracion":
//             return (precio) => (precio * 1.21);
//         default:
//             return (precio) => (precio * 1.15);
//     }
// }
// let electronica = intereses("electrónica");
// let decoracion = intereses("decoracion");



// let precioTelevisor = 84900;
// let precioMesada = 50900;

// console.log(electronica(precioTelevisor));
// console.log(decoracion(precioMesada));
let total = 0;
function acumulador(num){
    total += num
}


forElement(numeros, acumulador);
console.log(total);