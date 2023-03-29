//Métodos HTML Collection
/*let elementoId = document.getElementById("parrafo");
console.log(elementoId);
*/
let elementosClase = document.getElementsByClassName("span1");
console.log(elementosClase)
/*
elementosClase[0].innerHTML = "Esta es una prueba";

elementosTag = document.getElementsByTagName("h1");
console.log(elementosTag);

//Método querySelector (Node List)
let elementosQs = document.querySelector(".span");
console.log(elementosQs);

let elementosQsAll = document.querySelectorAll(".span");
console.log(elementosQsAll);

elementoId.innerText = "Esta es una prueba";
*/
let contenedor = document.querySelector(".container");
console.log(contenedor);
contenedor.innerHTML += '<p>Esta es una prueba</p>';

//Crear y adjuntar elemento nuevo al código
let newDiv = document.createElement("div");
document.body.appendChild(newDiv);

elementosClase.remove();
