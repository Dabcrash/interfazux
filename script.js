

const formulario = document.getElementById("form-recomendacion");
const mensajeExito = document.getElementById("mensaje-exito");

formulario.addEventListener("submit", function (evento) {
    evento.preventDefault();

    
    limpiarErrores();
    mensajeExito.classList.remove("visible");

    let formularioValido = true;

   
    const nombre = document.getElementById("nombre").value.trim();
    if (nombre === "") {
        mostrarError("error-nombre", "Por favor escribe tu nombre.");
        formularioValido = false;
    }

    
    const correo = document.getElementById("correo").value.trim();
    const correoValido = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(correo);
    if (correo === "") {
        mostrarError("error-correo", "Por favor escribe tu correo electrónico.");
        formularioValido = false;
    } else if (!correoValido) {
        mostrarError("error-correo", "Ese correo no parece válido. Revísalo, por favor.");
        formularioValido = false;
    }

    
    const necesidad = document.getElementById("necesidad").value;
    if (necesidad === "") {
        mostrarError("error-necesidad", "Selecciona una opción de la lista.");
        formularioValido = false;
    }

    
    if (formularioValido) {
        mensajeExito.classList.add("visible");
        formulario.reset();
    }
});

function mostrarError(idElemento, texto) {
    const elemento = document.getElementById(idElemento);
    elemento.textContent = texto;
}

function limpiarErrores() {
    const errores = document.querySelectorAll(".error-message");
    errores.forEach(function (error) {
        error.textContent = "";
    });
}
