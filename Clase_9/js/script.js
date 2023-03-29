boton = document.getElementById("boton");
boton.addEventListener("click", function () {
    if (boton.innerHTML === "¡Clickeame!"){
        boton.innerHTML = "¡Hola Mundo!";
        saludarGenerico();
    }
    else{
        boton.innerHTML = "¡Clickeame!";
        saludarNombre("Juan");
    }
    
    
})

function saludarGenerico(){
    console.log(`Hola!`);
}

function saludarNombre(nombre){
    console.log(`Hola ${nombre}!`);
}
card = document.getElementsByClassName("card");
card.ondbclick = () =>{
    console.log(`¡Hola Mundo!`);
    boton.style.color = "blue";
}
card.onmouseout = () =>{
    console.log(`¡Hola Mundo!`);
    boton.style.color = "black";
}