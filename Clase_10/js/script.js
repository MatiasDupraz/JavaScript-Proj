localStorage.setItem("nombre", "Juan");
localStorage.setItem("apellido", "Perez");
sessionStorage.setItem("edad", "20");

/*let edadUsuario = sessionStorage.getItem("edad");
let nombreUsuario = prompt("Ingresa tu nombre");
localStorage.setItem("nombre", nombreUsuario);
console.log(edadUsuario);
*/
let email = document.getElementById("emailUsuario");
let password = document.getElementById("passUsuario");
function tomarDatos(){
    localStorage.setItem("Mail", email.value);
    localStorage.setItem("Password", password.value);
    console.log(localStorage.getItem("Mail") + " " + localStorage.getItem("Password"));
}
let btnEnviar = document.getElementById("Logueo");

btnEnviar.addEventListener("click", tomarDatos);


//Eliminar un elemento del almacenamiento local
localStorage.removeItem("nombre");
//Eliminar todos los elementos del almacenamiento local
localStorage.clear();


const Usuario = {
    nombre: "Matias",
    apellido: "Perez",
    edad: 20,
}

//Utilizando JSON se puede guardar un objeto en el almacenamiento local manteniendo la información sobre el tipo de cada variable
//Método para guardar un objeto en el almacenamiento local (JSON)
localStorage.setItem("Usuario", JSON.stringify(Usuario));
console.log(localStorage.getItem("Usuario"));

//Método para recuperar un objeto del almacenamiento local (JSON)
console.log(JSON.parse(localStorage.getItem("Usuario")));
