// import supabase from "./supabaseconfig.js" 

export function openModal(){
    document.addEventListener("DOMContentLoaded",function(){
        const modal = document.getElementById("modal")
        const btnmostrarmodal = document.getElementById("mostrarmodal")
        const btncerrarmodal = document.getElementById("cerrarmodal")
        const body = document.getElementById("bodywindow")

        btnmostrarmodal.addEventListener("click", () => {
            modal.classList.remove("hidden")
            body.classList.add("blur-sm")
        })

        btncerrarmodal.addEventListener("click", () => {
            modal.classList.add("hidden")
            body.classList.remove("blur-sm")

        })
        window.addEventListener('click', (event) => {
            if (event.target === modal) {
            modal.classList.add('hidden');
            body.classList.remove("blur-sm")
            }
        }) 
    })
}

export function crear(){
    const areaparacajas = document.getElementById("areaparacajas")
    const crearespacio = document.getElementById("crearespacio") //esto agarra el form id


    crearespacio.addEventListener("submit", (event) => {
        const modal = document.getElementById("modal")
        const body = document.getElementById("bodywindow")
        body.classList.remove("blur-sm")
        modal.classList.add("hidden")

        event.preventDefault()
        const crearnuevo = new FormData(event.target)
        const nuevoObjeto = Object.fromEntries(crearnuevo)
        const nuevoHtml = `
        <div class="container-caja">
            <div class="ml-6 mt-4 text-primary-verdeclaro">${nuevoObjeto.nombreespacio}</div>
            <div class="ml-6 text-white">baro en ${nuevoObjeto.nombreplataforma}:</div>
            <div class="ml-6 text-2xl mb-4 text-white"> $ ${nuevoObjeto.cantidadinicial}</div>
        </div>
    `;
    areaparacajas.innerHTML += nuevoHtml;
    crearespacio.reset()


    } );


    // class CrearNuevoEspacio{
    //     constructor(nombre, plataforma, cantidad, notas){
    //         this.nombreEspacio = nombre
    //         this.nombrePlataforma = plataforma
    //         this.cantidadInicial = cantidad
    //         this.notasAdicionales = notas
    //     }    
    // }

//     const nuevoHtml = `
//     <div class="container-caja">
//         <div class="ml-6 mt-4 text-primary-verdeclaro">${nombre}]$</div>
//         <div class="ml-6 text-white">baro en ${plataforma}$:</div>
//         <div class="ml-6 text-2xl mb-4 text-white"> $ ${cantidad}$</div>
//     </div>
// `;

// // Agrega el nuevo HTML al contenedor
//     areaparacajas.innerHTML = nuevoHtml;

    
    // async function test (nombre,plataforma,cantidad,notas){
    //     const nuevoespacio = new CrearNuevoEspacio(nombre,plataforma,cantidad,notas)
    
    //     const { error } = await supabase
    //         .from('espacios')
    //         .insert({ id: 1, space_nombre: nuevoespacio.nombreEspacio})
    //     if (error) {
    //         console.error('Error inserting data:', error);
    //     } else {
    //         console.log('Data inserted successfully');
    //     }
    //
}





