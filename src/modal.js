export function openmodal(){
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
