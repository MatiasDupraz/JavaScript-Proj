/* Saludo según tiempo

let tuNombre = prompt("Ingrese su nombre");
let tiempo = prompt("Ingrese el momento del día");
tiempo = tiempo.toLowerCase();
function Saludar(nombre, tiempo) {
    try{
        if (tiempo == "dia") {
            alert(`Buenos ${tiempo}s ${nombre}!`);  
        }
        else if (tiempo == "tarde" || tiempo == "noche") {
            alert(`Buenas ${tiempo}s ${nombre}!`);
        }
        else {
            alert(`Tiempo ingresado no es correcto, intente nuevamente.`);

        }
        return tiempo;
    } catch (error) {
        alert(`Error al ingresar el tiempo, intente nuevamente.`);
    }
}

tiempo = Saludar(tuNombre, tiempo);
console.log(tiempo);

*/
numero1 = parseInt(prompt("Ingrese el primer número"));
operacion = prompt("Ingrese la operación");
if(operacion !== "!"){
    numero2 = parseInt(prompt("Ingrese el segundo número"));
}else{
    numero2 = 0;
}
function Calculadora(Fnumb,Snumb,Op){
    switch (Op) {
        case "+":
            return Fnumb + Snumb;
        case "-":
            return Fnumb - Snumb;
        case "*":
            return Fnumb * Snumb;
        case "/":
            return Fnumb / Snumb;
        case "%":
            return Fnumb % Snumb;
        case "^":
            return Math.pow(Fnumb, Snumb);
        case "!":
            let factorial = 1;
            for(let i = Fnumb; i > 0; i--){
                factorial *= i;
                if(i === 1){
                    return factorial;
                }
            }
        default:

    }
}
resultado = Calculadora(numero1,numero2,operacion);
if(resultado !== undefined && resultado !== NaN){
    alert(`El resultado de la operación es ${resultado}`);
}else{
    alert(`Hubo un error en la operación`);
}

//Función flecha o "arrow function"
/*
const resta = (a,b) => (a**b);
console.log(resta(10,5));
*/
const message = (message) => alert(message);

const iva = (precio) => precio * 0.21; //agregar el 21% de IVA
const descContado = (precio) => precio * 0.15; //descuento del 15%
const precioTotal = (precio) => precio + iva(precio) - descContado(precio);
message(precioTotal(1800));
