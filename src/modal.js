import supabase from "./supabaseconfig.js" 

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
        event.preventDefault()
        const crearnuevo = new FormData(event.target)
        const nuevoObjeto = Object.fromEntries(crearnuevo)
        test(nuevoObjeto.nombreespacio,nuevoObjeto.nombreplataforma,nuevoObjeto.cantidadinicial,nuevoObjeto.notas)    
    } );

    class CrearNuevoEspacio{
        constructor(nombre, plataforma, cantidad, notas){
            this.nombreEspacio = nombre
            this.nombrePlataforma = plataforma
            this.cantidadInicial = cantidad
            this.notasAdicionales = notas
        }    
    }

    async function test (nombre,plataforma,cantidad,notas){
        const nuevoespacio = new CrearNuevoEspacio(nombre,plataforma,cantidad,notas)
        const { error } = await supabase
            .from('espacios')
            .insert({ id: 1, space_nombre: nuevoespacio.nombreEspacio})
        if (error) {
            console.error('Error inserting data:', error);
        } else {
            console.log('Data inserted successfully');
        }
    }

    
}





