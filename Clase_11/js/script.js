let catalogo = [];

const inputTitulo = document.querySelector("#inputTitle"),
inputAutor = document.querySelector("#inputAuthor"),
inputAnio = document.querySelector("#inputYear"),
inputURLimagen = document.querySelector("#inputSourceURL"),
textareaResumen = document.querySelector("#textareaSummary"),
selectCategoria = document.querySelector("#selectCategory"),
selectValoracion = document.querySelector("#selectRating"),
btnAgregar = document.querySelector("#btnAdd"),
contTarjetas = document.querySelector("#cardContainer");

class Libro{
    constructor(titulo, autor, anio, genero, valoracion, cover, id){
        this.titulo = titulo.toUpperCase();
        this.autor = autor.toUpperCase();
        this.anio = parseInt(anio);
        this.genero = genero;
        this.valoracion = parseInt(valoracion);
        this.id = id
        this.resumen;
        if (cover==""){
            this.cover = "https://via.placeholder.com/300x450";
        }
        this.cover = cover;

        
    }
    asignarId(array){
        this.id = array.length;
    }

    asignarCover(sourceURL){
        this.cover = sourceURL;
    }
    
    valorar(valoracion){
        this.valoracion = valoracion;
    }

    agregarResumen(resumen){
        this.resumen = resumen;
    }
}

function guardarLibro(catalogo){

    const ejemplar = new Libro(inputTitulo.value, inputAutor.value, inputAnio.value, selectCategoria.value, selectValoracion.value, inputURLimagen.value);

    ejemplar.agregarResumen(textareaResumen.value);

    catalogo.push(ejemplar);

    ejemplar.asignarId(catalogo);
}

function guardarEnStorage(catalogo){
    localStorage.setItem("catalogoLibros", JSON.stringify(catalogo));
}

function crearTarjetas(arrayElementos, contenedorHTML){
    contenedorHTML.innerHTML = "";

    for( const elemento of arrayElementos){
        if (elemento.resumen === ''){
            elemento.resumen = "Sin resumen";
        }

        let divColTarjeta = document.createElement("div");
        divColTarjeta.className = 'col';

        divColTarjeta.innerHTML = `
        <div class="card" id = "${elemento.id}">
            <h4 class="card-header">${elemento.titulo}</h4>
            <img src="${elemento.cover}" class="coverLibro" alt="Portada del libro ${elemento.titulo}">
            <div class="card-body">
                <h6 class="card-text">${elemento.autor}</h6>
                <p class="card-text">${elemento.resumen}</p>
            </div>
            <div class="card-footer">
                <span>Valoración: ${elemento.valoracion}</span>
            </div>
        </div>
        `
        contenedorHTML.append(divColTarjeta);
    }
}

btnAgregar.onclick = (e)=>{ //e se refiere a la acción del evento
    e.preventDefault(); //Evitar el comportamiento por defecto del botón
    guardarLibro(catalogo);
    guardarEnStorage(catalogo);
    crearTarjetas(catalogo, contTarjetas);
}

window.onload = ()=>{
    catalogo = JSON.parse(localStorage.getItem("catalogoLibros"));
    if (catalogo !== null){
        crearTarjetas(catalogo, contTarjetas);
    }else{
        catalogo = [];
    }
}