class Producto{
    constructor(nombre, precio, categoria, stock){
        this.nombre = nombre.toUpperCase();
        this.precio = parseFloat(precio);
        this.categoria = categoria;
        this.stock = stock;

    }
    sumarIVA(){
        this.precio = this.precio*1.21;
    }
    vender(cantidad){
        this.stock = this.stock - cantidad;
        prompt("Se ha vendido " + cantidad + " unidades de " + this.nombre + " por " + this.precio + "€ \n Stock actual: " + this.stock + " unidades");
    }
}

let productoIngresado = prompt("Ingrese el nombre del producto");
let precioIngresado = prompt("Ingrese el precio del producto");
let categoriaIngresada = prompt("Ingrese la categoria del producto");
let stockIngresado = prompt("Ingrese el stock del producto");

producto1 = new Producto(productoIngresado, precioIngresado, categoriaIngresada, stockIngresado);
producto1.sumarIVA();
producto1.vender(5);