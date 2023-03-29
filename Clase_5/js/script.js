function Producto(id, nombre, precio, cantidad) {
    this.id = id;
    this.nombre = nombre;
    this.precio = precio;
    this.cantidad = cantidad;

}
const producto1 = new Producto(1, 'Auriculares Zeus', 5800, 0);
const producto2 = new Producto(2, 'Pendrive 8Gb Sandisk', 2500, 0);
const producto3 = new Producto(3, 'Silla Gamer Corsair', 65000, 0);
const producto4 = new Producto(4, 'Geforce RTX 3080', 89500, 0);
const producto5 = new Producto(5, 'Mini Pc Intel i3', 65000, 0);
//Productos con precios y cantidad
const carrito = [
    producto1, producto2, producto3, producto4, producto5
];


function agregarProducto(id){
    let cantidad = prompt("Ingrese la cantidad del producto que desea agregar al carrito");
    if(isNaN(cantidad)){
        alert("Ingrese un número");
    }
    else if (cantidad <= 0){
        alert("Ingrese una cantidad válida");
    }
    else{
        for (let i = 0; i < carrito.length; i++) {
            if(carrito[i].id === id){
                carrito[i].cantidad += cantidad;
            }
        }    
    }
    
}

function mostrarCarrito(){
    let carritoHTML = "";
    let total = 0;
    for (let i = 0; i <= carrito.length-1; i++){
        if (carrito[i].cantidad > 0){
            carritoHTML += `${carrito[i].nombre} - Cantidad: ${carrito[i].cantidad}  - Precio Final: ${(carrito[i].precio)*(carrito[i].cantidad)}\n`;
        total += (carrito[i].precio)*(carrito[i].cantidad);
        }
    }
    carritoHTML += `---------------------------------------------------------------- \n SubTotal: $${Math.round(total/1.21)} \n IVA: $${Math.round(total * 0.21)} \n Envío: $2500 \n Total: $${total + 3500}`;
    
    alert(carritoHTML);
}

//Menú de logueo
//Cuentas registradas
let cuentas = [{
    correo: 'matias.juarez@gmail.com',
    contrasena: '1234'
},
{
    correo: 'martha.estevanez@gmail.com',
    contrasena: 'abecede'
},
{
    correo: 'monicagiraudo23@gmail.com',
    contrasena: 'moras23'
},
{
    correo: 'admin',
    contrasena: 'admin'
}
];

function loguearse(){
    correo = prompt('Ingrese su correo a continuación');
    for(let i = 0; i < cuentas.length; i++){
        if(correo == cuentas[i].correo){

            contrasena = prompt('Ingrese su contraseña a continuación');
            if(contrasena == cuentas[i].contrasena){
                alert('Bienvenido');
                document.getElementById('tituloLogin').innerHTML = 'Bienvenido!';
                break;
            }
            else{
                alert('Contraseña incorrecta');
                break;
            }
        }
        if(i == cuentas.length - 1){
            alert('Usuario no encontrado');
        }
    }
}

car = prompt('Ingrese lo que quiera ver del producto')
console.log(carrito[1][car]);
//Agregar atributos a los objetos
carrito[0].nuevoAtributo = "nuevo atributo";
console.log(carrito[0].nuevoAtributo);

function Personaje(nombre, edad, peso){
    this.nombre = nombre;
    this.edad = edad;
    this.peso = peso;
    this.saludar = function(){
        alert(`Hola mi nombre es ${this.nombre} y tengo ${this.edad} años`);
    }
}

const personaje1 = new Personaje('Matias', 30, 70);
const personaje2 = new Personaje('Martha', 25, 60);
const personaje3 = new Personaje('Monica', 20, 50);
const personaje4 = new Personaje('Gaston', 30, 70);
const personaje5 = new Personaje('Juan', 20, 50);

personaje1.saludar();



//Operadores IN y FOR IN
//Utilizados para verificar si existe determinado elemento en un conjunto
if('nombre' in personaje1){
    alert(`El nombre del personaje es ${personaje1.nombre}`);
}
for( x in personaje1){
    alert(`El atributo ${x} del personaje es ${personaje1[x]}`);
}

for(const propiedad in personaje3){
    alert(`El atributo ${propiedad} del personaje es ${personaje3[propiedad]}`);
}