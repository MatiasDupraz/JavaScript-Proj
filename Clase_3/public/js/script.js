let savedPass = "password";
function logueo(){
    while (true){
        let userPass = prompt("Ingrese su contraseña");
        if(userPass == savedPass){
            let titulo = document.getElementById("tittle");
            titulo.innerHTML = "Bienvenido";
            break;
        }
        else{
            alert("Contraseña incorrecta");
        }
    }
}

for (let i = 0; i <= 100; i++) {
    for (let j = 2; j < i; j++) {
        if (i % j == 0) {
            break
        }
        if (j == i - 1) {
            console.log(i + " es primo!")
        }
    }
    
}
i= 0;
do{
    console.log("Wir halten " + i);
    i +=1;
}while(i <= 5);

let opcion = prompt("Ingrese una opcion");

switch(opcion){
    case '1':
        alert("Caso 1");
        break;
    case '2':
        alert(`Caso ${100/50}`);
        break;
    case '3':
        alert("Caso 3");
        break;
    case '4':
        alert("Caso 4");
        break;
    default:
        alert("Opcion inválida");
        break;
}