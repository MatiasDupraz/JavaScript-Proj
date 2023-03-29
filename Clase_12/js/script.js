const edadUsuario = document.querySelector("#edad");
const btnEnviar = document.querySelector("#btnEnviar");

btnEnviar.onclick = (e) => {
    let edad = parseInt(edadUsuario.value);

    edad >= 18 ? alert("Eres mayor de edad") : alert("Eres menor de edad");

    //Definir una constante cuyo contenido varía de acuerdo a determinada condición
    //Si la edad es mayor a 18, entonces registroUsuario = new Date() 
    //Si la edad es menor a 18, entonces registroUsuario = false
    const registroUsuario = (edad >= 18) &&  new Date();
    console.log(registroUsuario);

    //Si la edad es mayor a 18, entonces registroUsuario2 = true
    //Si la edad es menor a 18, entonces registroUsuario2 = new Date()
    const registroUsuario2 = (edad >= 18) ||  new Date();
    console.log(registroUsuario2);
}
//El operador ternario se utiliza cuando hay no más de una acción después de cada condición

//MUY IMPORTANTE
//VALORES POR DEFAULT

//En la siguiente línea si el carrito existe en local storage, entonces carrito = JSON.parse(localStorage.getItem("carrito"))
//Si no existe, entonces carrito = []
const carrito = JSON.parse(localStorage.getItem("carrito")) || [];


let deudaUsuario = 0;
const deuda = deudaUsuario || "No hay deuda";
console.log(deuda); //Retorna No hay deuda (toma a 0 como false)
const deuda2 = deudaUsuario ?? "No hay deuda";
console.log(deuda2); //Retorna 0

//Desestructuración de un objeto
const Usuario = {
    nombre: "Juan",
    apellido: "Perez",
    edad: 25,
    email: "juan@gmail",
    telefono: {
        fijo: "12345678",
        celular: "123456789"
    }
}
const { nombre, apellido, edad, email, telefono:{fijo} } = Usuario;
console.log(nombre);
console.log(apellido);
console.log(edad);
console.log(email);
console.log(fijo);

//Desestructuración de un array
const array = ["Juan", "Perez", 25, "juan@gmail", "12345678", "123456789"];
const [nombre2, apellido2, edad2, email2, , telefonoCelular2] = array; //Se utiliza el espacio en la posición que no interesa desestructurar
console.log(nombre2);
console.log(apellido2);
console.log(edad2);
console.log(email2);

console.log(telefonoCelular2);

//Imprimir coordenadas del click del usuario
window.addEventListener('click', ({x,y}) => {
    console.log(x + " " + y);
})

//Unir arrays
const array2 = ["Juan", "Perez", 25, "juan@gmail", "12345678", "123456789"];
const array3 = ["Juan", "Perez", 25, "juan@gmail", "12345678", "123456789"];
const array4 = ["Juan", "Perez", 25, "juan@gmail", "12345678", "123456789"];

const nuevoArray = [...array2, ...array3, ...array4]; //Se utiliza el spread operator para unir arrays en un nuevo array
console.log(nuevoArray);

function sumarIndef (...args) {
    return args.reduce((acc, curr) => acc + curr, 0);

}

console.log(sumarIndef(1,2,3,4,5,6,7,8,9,10));
