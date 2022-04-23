window.addEventListener("load", function() {
    let formulario = document.querySelector("form.reservation");

    formulario.addEventListener("submit", function(e){
        e.preventDefault();

        let campoNombre = document.querySelector("input.name");

        if(campoNombre.value == ""){
        alert("El campo debe de estar completo")
        } else if (campoNombre.value.length < 2){
            alert("El campo debe de tener al menos 3 carácteress")
        }
    })
} )