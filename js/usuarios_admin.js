const CLAVE_USUARIOS = "usuarios";

const USUARIOS_PRUEBA = [
    {
        run: "123456785",
        nombre: "Juan",
        apellidos: "Pérez González",
        correo: "juan.perez@gmail.com",
        fechaNacimiento: "1995-03-15",
        tipoUsuario: "cliente",
        region: "Región Metropolitana",
        comuna: "Santiago",
        direccion: "Av. Libertador Bernardo O'Higgins 1234",
        contrasena: "1234"
    },
    {
        run: "987654321",
        nombre: "María",
        apellidos: "González Soto",
        correo: "maria.gonzalez@gmail.com",
        fechaNacimiento: "1998-07-22",
        tipoUsuario: "cliente",
        region: "Región Metropolitana",
        comuna: "Maipú",
        direccion: "Av. Pajaritos 2456",
        contrasena: "1234"
    },
    {
        run: "156789438",
        nombre: "Carlos",
        apellidos: "Ramírez Muñoz",
        correo: "carlos.ramirez@gmail.com",
        fechaNacimiento: "1992-11-08",
        tipoUsuario: "cliente",
        region: "Región de Valparaíso",
        comuna: "Viña del Mar",
        direccion: "Calle Valparaíso 890",
        contrasena: "1234"
    },
    {
        run: "184567325",
        nombre: "Ana",
        apellidos: "Martínez Silva",
        correo: "ana.martinez@gmail.com",
        fechaNacimiento: "2000-01-30",
        tipoUsuario: "cliente",
        region: "Región del Biobío",
        comuna: "Concepción",
        direccion: "Av. Los Carrera 567",
        contrasena: "1234"
    },
    {
        run: "167894320",
        nombre: "Pedro",
        apellidos: "Soto Fernández",
        correo: "pedro.soto@duoc.cl",
        fechaNacimiento: "1996-05-17",
        tipoUsuario: "cliente",
        region: "Región de Coquimbo",
        comuna: "La Serena",
        direccion: "Av. Francisco de Aguirre 456",
        contrasena: "1234"
    },
    {
        run: "203456789",
        nombre: "Laura",
        apellidos: "Vargas Rojas",
        correo: "laura.vargas@gmail.com",
        fechaNacimiento: "2001-09-12",
        tipoUsuario: "cliente",
        region: "Región Metropolitana",
        comuna: "Puente Alto",
        direccion: "Av. Concha y Toro 3456",
        contrasena: "1234"
    },
    {
        run: "145678932",
        nombre: "Diego",
        apellidos: "Contreras Pérez",
        correo: "diego.contreras@gmail.com",
        fechaNacimiento: "1994-12-03",
        tipoUsuario: "cliente",
        region: "Región de O'Higgins",
        comuna: "Rancagua",
        direccion: "Av. Brasil 789",
        contrasena: "1234"
    },
    {
        run: "176543218",
        nombre: "Camila",
        apellidos: "Fuentes Morales",
        correo: "camila.fuentes@duoc.cl",
        fechaNacimiento: "1999-04-25",
        tipoUsuario: "cliente",
        region: "Región Metropolitana",
        comuna: "San Bernardo",
        direccion: "Av. Colón 123",
        contrasena: "1234"
    },
    {
        run: "198765432",
        nombre: "Felipe",
        apellidos: "Torres Castillo",
        correo: "felipe.torres@gmail.com",
        fechaNacimiento: "1997-08-19",
        tipoUsuario: "cliente",
        region: "Región de Valparaíso",
        comuna: "Quilpué",
        direccion: "Calle Blanco Encalada 654",
        contrasena: "1234"
    },
    {
        run: "212345678",
        nombre: "Administrador",
        apellidos: "Sistema",
        correo: "admin@duoc.cl",
        fechaNacimiento: "1990-01-01",
        tipoUsuario: "admin",
        region: "Región Metropolitana",
        comuna: "Santiago",
        direccion: "Casa Central",
        contrasena: "admin123"
    }
];


function obtenerUsuarios() {

    const usuariosGuardados =
        localStorage.getItem(CLAVE_USUARIOS);

    if (!usuariosGuardados) {

        guardarUsuarios(USUARIOS_PRUEBA);

        return USUARIOS_PRUEBA;
    }

    return JSON.parse(usuariosGuardados);
}


function guardarUsuarios(usuarios) {

    localStorage.setItem(
        CLAVE_USUARIOS,
        JSON.stringify(usuarios)
    );
}


function validarRUN(run) {

    run = run.toUpperCase();

    const cuerpo = run.slice(0, -1);
    const digitoIngresado = run.slice(-1);

    let suma = 0;
    let multiplicador = 2;

    for (let i = cuerpo.length - 1; i >= 0; i--) {

        suma += parseInt(cuerpo[i]) * multiplicador;

        multiplicador++;

        if (multiplicador > 7) {
            multiplicador = 2;
        }
    }

    const resto = suma % 11;
    const resultado = 11 - resto;

    let digitoEsperado;

    if (resultado === 11) {
        digitoEsperado = "0";

    } else if (resultado === 10) {
        digitoEsperado = "K";

    } else {
        digitoEsperado = resultado.toString();
    }

    return digitoIngresado === digitoEsperado;
}


function correoValido(correo) {

    const dominiosPermitidos = [
        "@duoc.cl",
        "@profesor.duoc.cl",
        "@gmail.com"
    ];

    const correoMinuscula =
        correo.toLowerCase();

    return dominiosPermitidos.some(function (dominio) {

        return correoMinuscula.endsWith(dominio);

    });
}


function mostrarUsuarios() {

    const listaUsuarios =
        document.getElementById("listaUsuarios");

    if (!listaUsuarios) {
        return;
    }

    const usuarios = obtenerUsuarios();

    const busqueda =
        document.getElementById("buscarUsuario").value
            .toLowerCase()
            .trim();

    const usuariosFiltrados =
        usuarios.filter(function (usuario) {

            return (
                usuario.run.toLowerCase().includes(busqueda) ||
                usuario.nombre.toLowerCase().includes(busqueda) ||
                usuario.apellidos.toLowerCase().includes(busqueda) ||
                usuario.correo.toLowerCase().includes(busqueda) ||
                usuario.tipoUsuario.toLowerCase().includes(busqueda)
            );

        });


    listaUsuarios.innerHTML = "";


    if (usuariosFiltrados.length === 0) {

        listaUsuarios.innerHTML = `
            <tr>
                <td colspan="5">
                    No se encontraron usuarios.
                </td>
            </tr>
        `;

        return;
    }


    usuariosFiltrados.forEach(function (usuario) {

        const fila =
            document.createElement("tr");


        fila.innerHTML = `

            <td>${usuario.run}</td>

            <td>
                ${usuario.nombre} ${usuario.apellidos}
            </td>

            <td>
                ${usuario.correo}
            </td>

            <td>

                <select
                    class="cambiar-tipo"
                    data-run="${usuario.run}"
                >

                    <option value="cliente"
                        ${usuario.tipoUsuario === "cliente" ? "selected" : ""}>
                        Cliente
                    </option>

                    <option value="admin"
                        ${usuario.tipoUsuario === "admin" ? "selected" : ""}>
                        Admin
                    </option>

                </select>

            </td>

            <td>

                <button
                    type="button"
                    class="btn-eliminar"
                    data-run="${usuario.run}">
                    Eliminar
                </button>

            </td>
        `;


        listaUsuarios.appendChild(fila);

    });
}


function cambiarTipoUsuario(run, nuevoTipo) {

    const usuarios =
        obtenerUsuarios();


    const usuario =
        usuarios.find(function (usuario) {

            return usuario.run === run;

        });


    if (!usuario) {
        return;
    }


    usuario.tipoUsuario =
        nuevoTipo;


    guardarUsuarios(usuarios);

    mostrarUsuarios();
}


function eliminarUsuario(run) {

    const usuarios =
        obtenerUsuarios();


    const usuario =
        usuarios.find(function (usuario) {

            return usuario.run === run;

        });


    if (!usuario) {
        return;
    }


    const confirmar =
        confirm(
            `¿Seguro que deseas eliminar la cuenta de ${usuario.nombre}?`
        );


    if (!confirmar) {
        return;
    }


    const usuariosActualizados =
        usuarios.filter(function (usuario) {

            return usuario.run !== run;

        });


    guardarUsuarios(usuariosActualizados);

    mostrarUsuarios();
}


function abrirFormulario() {

    const formulario =
        document.getElementById("formularioUsuario");


    if (formulario) {

        formulario.classList.add("activo");

    }
}


function cerrarFormulario() {

    const formulario =
        document.getElementById("formularioUsuario");

    const form =
        document.getElementById("formCrearUsuario");


    if (formulario) {

        formulario.classList.remove("activo");

    }


    if (form) {

        form.reset();

    }


    document.querySelectorAll(
        ".formulario-usuario .error"
    ).forEach(function (error) {

        error.textContent = "";

    });
}


function crearUsuario() {

    const form =
        document.getElementById("formCrearUsuario");


    if (!form) {
        return;
    }


    form.addEventListener(
        "submit",
        function (event) {

            event.preventDefault();


            const run =
                document.getElementById("nuevoRun")
                    .value
                    .trim()
                    .toUpperCase();


            const nombre =
                document.getElementById("nuevoNombre")
                    .value
                    .trim();


            const apellidos =
                document.getElementById("nuevoApellidos")
                    .value
                    .trim();


            const correo =
                document.getElementById("nuevoCorreo")
                    .value
                    .trim();


            const contrasena =
                document.getElementById("nuevoContrasena")
                    .value
                    .trim();


            const tipoUsuario =
                document.getElementById("nuevoTipo")
                    .value;


            document.querySelectorAll(
                ".formulario-usuario .error"
            ).forEach(function (error) {

                error.textContent = "";

            });


            let valido = true;


            if (run === "") {

                document.getElementById(
                    "errorNuevoRun"
                ).textContent =
                    "El RUN es obligatorio.";

                valido = false;

            } else if (
                run.length < 7 ||
                run.length > 9
            ) {

                document.getElementById(
                    "errorNuevoRun"
                ).textContent =
                    "El RUN debe tener entre 7 y 9 caracteres.";

                valido = false;

            } else if (
                !/^[0-9]+[0-9Kk]$/.test(run)
            ) {

                document.getElementById(
                    "errorNuevoRun"
                ).textContent =
                    "El RUN debe contener solo números y K.";

                valido = false;

            } else if (!validarRUN(run)) {

                document.getElementById(
                    "errorNuevoRun"
                ).textContent =
                    "El RUN no es válido.";

                valido = false;
            }


            if (nombre === "") {

                document.getElementById(
                    "errorNuevoNombre"
                ).textContent =
                    "El nombre es obligatorio.";

                valido = false;

            } else if (nombre.length > 50) {

                document.getElementById(
                    "errorNuevoNombre"
                ).textContent =
                    "El nombre no puede superar los 50 caracteres.";

                valido = false;
            }


            if (apellidos === "") {

                document.getElementById(
                    "errorNuevoApellidos"
                ).textContent =
                    "Los apellidos son obligatorios.";

                valido = false;

            } else if (apellidos.length > 100) {

                document.getElementById(
                    "errorNuevoApellidos"
                ).textContent =
                    "Los apellidos no pueden superar los 100 caracteres.";

                valido = false;
            }


            if (correo === "") {

                document.getElementById(
                    "errorNuevoCorreo"
                ).textContent =
                    "El correo es obligatorio.";

                valido = false;

            } else if (correo.length > 100) {

                document.getElementById(
                    "errorNuevoCorreo"
                ).textContent =
                    "El correo no puede superar los 100 caracteres.";

                valido = false;

            } else if (!correoValido(correo)) {

                document.getElementById(
                    "errorNuevoCorreo"
                ).textContent =
                    "Solo se permiten @duoc.cl, @profesor.duoc.cl o @gmail.com.";

                valido = false;
            }


            if (contrasena === "") {

                document.getElementById(
                    "errorNuevoContrasena"
                ).textContent =
                    "La contraseña es obligatoria.";

                valido = false;

            } else if (
                contrasena.length < 4 ||
                contrasena.length > 10
            ) {

                document.getElementById(
                    "errorNuevoContrasena"
                ).textContent =
                    "La contraseña debe tener entre 4 y 10 caracteres.";

                valido = false;
            }


            if (tipoUsuario === "") {

                document.getElementById(
                    "errorNuevoTipo"
                ).textContent =
                    "Debes seleccionar un tipo de usuario.";

                valido = false;
            }


            if (!valido) {
                return;
            }


            const usuarios =
                obtenerUsuarios();


            const runExiste =
                usuarios.some(function (usuario) {

                    return usuario.run.toLowerCase() ===
                        run.toLowerCase();

                });


            if (runExiste) {

                document.getElementById(
                    "errorNuevoRun"
                ).textContent =
                    "Este RUN ya está registrado.";

                return;
            }


            const correoExiste =
                usuarios.some(function (usuario) {

                    return usuario.correo.toLowerCase() ===
                        correo.toLowerCase();

                });


            if (correoExiste) {

                document.getElementById(
                    "errorNuevoCorreo"
                ).textContent =
                    "Este correo ya está registrado.";

                return;
            }


            const nuevoUsuario = {

                run: run,

                nombre: nombre,

                apellidos: apellidos,

                correo: correo,

                fechaNacimiento: "",

                tipoUsuario: tipoUsuario,

                region: "",

                comuna: "",

                direccion: "",

                contrasena: contrasena

            };


            usuarios.push(nuevoUsuario);

            guardarUsuarios(usuarios);

            mostrarUsuarios();

            cerrarFormulario();

        }
    );
}


document.addEventListener(
    "DOMContentLoaded",
    function () {

        mostrarUsuarios();


        const buscarUsuario =
            document.getElementById(
                "buscarUsuario"
            );


        if (buscarUsuario) {

            buscarUsuario.addEventListener(
                "input",
                mostrarUsuarios
            );

        }


        const btnCrearUsuario =
            document.getElementById(
                "btnCrearUsuario"
            );


        if (btnCrearUsuario) {

            btnCrearUsuario.addEventListener(
                "click",
                abrirFormulario
            );

        }


        const btnCerrarFormulario =
            document.getElementById(
                "btnCerrarFormulario"
            );


        if (btnCerrarFormulario) {

            btnCerrarFormulario.addEventListener(
                "click",
                cerrarFormulario
            );

        }


        const btnCancelarFormulario =
            document.getElementById(
                "btnCancelarFormulario"
            );


        if (btnCancelarFormulario) {

            btnCancelarFormulario.addEventListener(
                "click",
                cerrarFormulario
            );

        }


        crearUsuario();


        const listaUsuarios =
            document.getElementById(
                "listaUsuarios"
            );


        if (listaUsuarios) {

            listaUsuarios.addEventListener(
                "change",
                function (event) {

                    if (
                        event.target.classList.contains(
                            "cambiar-tipo"
                        )
                    ) {

                        const run =
                            event.target.dataset.run;

                        const nuevoTipo =
                            event.target.value;

                        cambiarTipoUsuario(
                            run,
                            nuevoTipo
                        );

                    }

                }
            );


            listaUsuarios.addEventListener(
                "click",
                function (event) {

                    if (
                        event.target.classList.contains(
                            "btn-eliminar"
                        )
                    ) {

                        const run =
                            event.target.dataset.run;

                        eliminarUsuario(run);

                    }

                }
            );

        }

    }
);