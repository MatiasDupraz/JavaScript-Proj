const botonSwal = document.querySelector("#botonSwal");
const botonToast = document.querySelector("#botonToast");

botonSwal.onclick = () => {
    Swal.fire({
        title: '¿Estas seguro?',
        text: "No podrás revertir esto!",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        cancelButtonText: 'Cancelarrrr',
        fontStyle: "san-serif",
        confirmButtonText: 'Si, borrarlo!',
        background: 'black',
        color: 'white',
        
    }).then(result=>{
        if(result.isConfirmed){
            Swal.fire(
                'Borrado!',
                'El registro ha sido borrado.',
                'success'
            )
        }
    })
}
let texto = "put me out of my misery!";
botonToast.onclick = () => {
    Toastify(
        {
        text: texto,
        duration: 3000,
        offset: {
            x: 50,
            y: 10
        },
        height: 80,
        style: {
            background: 'linear-gradient(129deg, rgba(0,0,0,1) 64%, rgba(255,0,0,1) 100%)',
            color: 'white',
            borderRadius: '3px',
            fontFamily: 'sans-serif',
        },
        onClick: () => {
            console.log("click");
        }
        },

    ).showToast();
}


/*
const dateTime = luxon.dateTime;
const ahora = dateTime.now();
console.log(ahora);

const dt = dateTime.local(2023,3,23,20,30);
console.log(dt);

console.log(ahora.toString());

*/