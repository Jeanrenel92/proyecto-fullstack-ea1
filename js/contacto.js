const formularioContacto = document.getElementById("formularioContacto");

const nombre = document.getElementById("nombre");
const correo = document.getElementById("correo");
const asunto = document.getElementById("asunto");
const mensaje = document.getElementById("mensaje");
const mensajeFormulario = document.getElementById("mensajeFormulario");

formularioContacto.addEventListener("submit", function (evento) {

    evento.preventDefault();

    limpiarErrores();

    let formularioValido = true;

    if (nombre.value.trim() === "") {
        mostrarError(nombre, "El nombre es obligatorio.");
        formularioValido = false;
    }

    if (correo.value.trim() === "") {
        mostrarError(correo, "El correo electrónico es obligatorio.");
        formularioValido = false;
    } else if (!validarCorreo(correo.value.trim())) {
        mostrarError(correo, "Ingresa un correo electrónico válido.");
        formularioValido = false;
    }

    if (asunto.value.trim() === "") {
        mostrarError(asunto, "El asunto es obligatorio.");
        formularioValido = false;
    }

    if (mensaje.value.trim() === "") {
        mostrarError(mensaje, "El mensaje es obligatorio.");
        formularioValido = false;
    }

    if (!formularioValido) {
        mensajeFormulario.textContent = "Revisa los campos indicados.";
        mensajeFormulario.className = "mensaje-error";
        return;
    }

    mensajeFormulario.textContent = "Mensaje enviado correctamente.";
    mensajeFormulario.className = "mensaje-exito";

    formularioContacto.reset();
});

function validarCorreo(correo) {
    const expresion = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    return expresion.test(correo);
}

function mostrarError(campo, mensaje) {

    const contenedor = campo.parentElement;

    const error = document.createElement("small");

    error.className = "error-campo";
    error.textContent = mensaje;

    contenedor.appendChild(error);

    campo.classList.add("campo-error");
}

function limpiarErrores() {

    const errores = document.querySelectorAll(".error-campo");

    errores.forEach(error => {
        error.remove();
    });

    const campos = document.querySelectorAll(".campo-error");

    campos.forEach(campo => {
        campo.classList.remove("campo-error");
    });

    mensajeFormulario.textContent = "";
    mensajeFormulario.className = "";
}