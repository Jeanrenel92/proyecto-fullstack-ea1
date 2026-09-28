function obtenerUsuarios() {

    const usuariosGuardados = localStorage.getItem("usuarios");

    if (!usuariosGuardados) {
        return [];
    }

    return JSON.parse(usuariosGuardados);
}


const formLogin = document.getElementById("loginForm");

if (formLogin) {

    formLogin.addEventListener("submit", function(event) {

        event.preventDefault();

        const correo = document.getElementById("correo").value.trim();
        const contrasena = document.getElementById("contrasena").value.trim();

        const errorCorreo = document.getElementById("errorCorreo");
        const errorContrasena = document.getElementById("errorContrasena");
        const mensajeLogin = document.getElementById("mensajeLogin");

        errorCorreo.textContent = "";
        errorContrasena.textContent = "";
        mensajeLogin.textContent = "";

        let valido = true;

   
        if (correo === "") {
            errorCorreo.textContent = "El correo es obligatorio.";
            valido = false;
        }

   
        if (contrasena === "") {
            errorContrasena.textContent = "La contraseña es obligatoria.";
            valido = false;
        }

        if (!valido) {
            return;
        }

   
        const usuarios = obtenerUsuarios();

     
        const usuarioEncontrado = usuarios.find(function(usuario) {
            return usuario.correo.toLowerCase() === correo.toLowerCase()
                && usuario.contrasena === contrasena;
        });

        if (!usuarioEncontrado) {
            mensajeLogin.textContent = "Correo o contraseña incorrectos.";
            return;
        }

        mensajeLogin.textContent = "Inicio de sesión correcto.";

        console.log("Usuario conectado:", usuarioEncontrado);
    });
}