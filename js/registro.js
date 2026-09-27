const dominiosPermitidos = [
    "@duoc.cl",
    "@profesor.duoc.cl",
    "@gmail.com"
];

const regiones = {
    "Región de Arica y Parinacota": [
        "Arica", "Camarones", "General Lagos", "Putre"
    ],
    "Región de Tarapacá": [
        "Iquique", "Alto Hospicio", "Pozo Almonte",
        "Pica", "Huara", "Camiña", "Colchane"
    ],
    "Región de Antofagasta": [
        "Antofagasta", "Calama", "Tocopilla", "Mejillones",
        "Taltal", "Sierra Gorda", "San Pedro de Atacama",
        "María Elena", "Ollagüe"
    ],
    "Región de Atacama": [
        "Copiapó", "Caldera", "Tierra Amarilla", "Chañaral",
        "Diego de Almagro", "Vallenar", "Freirina",
        "Huasco", "Alto del Carmen"
    ],
    "Región de Coquimbo": [
        "La Serena", "Coquimbo", "Andacollo", "La Higuera",
        "Paihuano", "Vicuña", "Ovalle", "Combarbalá",
        "Monte Patria", "Punitaqui", "Río Hurtado",
        "Illapel", "Canela", "Los Vilos", "Salamanca"
    ],
    "Región de Valparaíso": [
        "Valparaíso", "Viña del Mar", "Concón", "Quilpué",
        "Villa Alemana", "Quillota", "La Cruz", "Calera",
        "Nogales", "Hijuelas", "San Antonio", "Santo Domingo",
        "Cartagena", "El Tabo", "El Quisco", "Algarrobo",
        "San Felipe", "Llaillay", "Catemu", "Santa María",
        "Panquehue", "Putaendo", "Los Andes", "San Esteban",
        "Calle Larga", "Rinconada", "La Ligua", "Cabildo",
        "Zapallar", "Papudo", "Petorca", "Limache", "Olmué",
        "Casablanca", "Puchuncaví", "Quintero",
        "Isla de Pascua", "Juan Fernández"
    ],
    "Región Metropolitana de Santiago": [
        "Santiago", "Cerrillos", "Cerro Navia", "Conchalí",
        "El Bosque", "Estación Central", "Huechuraba",
        "Independencia", "La Cisterna", "La Florida",
        "La Granja", "La Pintana", "La Reina", "Las Condes",
        "Lo Barnechea", "Lo Espejo", "Lo Prado", "Macul",
        "Maipú", "Ñuñoa", "Pedro Aguirre Cerda", "Peñalolén",
        "Providencia", "Pudahuel", "Quilicura", "Quinta Normal",
        "Recoleta", "Renca", "San Joaquín", "San Miguel",
        "San Ramón", "Vitacura", "Puente Alto", "Pirque",
        "San José de Maipo", "San Bernardo", "Calera de Tango",
        "Buin", "Paine", "Melipilla", "Alhué", "Curacaví",
        "María Pinto", "San Pedro", "Talagante", "El Monte",
        "Isla de Maipo", "Padre Hurtado", "Peñaflor",
        "Colina", "Lampa", "Tiltil"
    ],
    "Región del Libertador General Bernardo O'Higgins": [
        "Rancagua", "Machalí", "Graneros", "Mostazal",
        "Doñihue", "Coltauco", "Olivar", "Quinta de Tilcoco",
        "Coinco", "Malloa", "Rengo", "Requínoa", "San Vicente",
        "Pichidegua", "Peumo", "Las Cabras", "San Fernando",
        "Chimbarongo", "Placilla", "Nancagua", "Chépica",
        "Santa Cruz", "Lolol", "Pumanque", "Palmilla",
        "Peralillo", "Navidad", "Litueche", "La Estrella",
        "Pichilemu", "Marchigüe", "Paredones"
    ],
    "Región del Maule": [
        "Talca", "Pelarco", "Río Claro", "San Clemente",
        "Maule", "San Rafael", "Empedrado", "Pencahue",
        "Constitución", "Curepto", "Curicó", "Teno",
        "Romeral", "Molina", "Sagrada Familia", "Hualañé",
        "Licantén", "Vichuquén", "Rauco", "Linares",
        "Yerbas Buenas", "Colbún", "Longaví", "Parral",
        "Retiro", "Villa Alegre", "San Javier", "Cauquenes",
        "Chanco", "Pelluhue"
    ],
    "Región de Ñuble": [
        "Chillán", "Chillán Viejo", "Quirihue", "Cobquecura",
        "Coelemu", "Ninhue", "Portezuelo", "Ránquil",
        "Treguaco", "San Carlos", "Coihueco", "San Nicolás",
        "San Fabián", "San Ignacio", "Bulnes", "El Carmen",
        "Pemuco", "Pinto", "Quillón", "Yungay"
    ],
    "Región del Biobío": [
        "Concepción", "Coronel", "Chiguayante", "Florida",
        "Hualpén", "Hualqui", "Lota", "Penco",
        "San Pedro de la Paz", "Santa Juana", "Talcahuano",
        "Tomé", "Los Ángeles", "Antuco", "Cabrero", "Laja",
        "Mulchén", "Nacimiento", "Negrete", "Quilaco",
        "Quilleco", "San Rosendo", "Santa Bárbara", "Tucapel",
        "Yumbel", "Alto Biobío", "Lebu", "Arauco", "Cañete",
        "Contulmo", "Curanilahue", "Los Álamos", "Tirúa"
    ],
    "Región de La Araucanía": [
        "Temuco", "Carahue", "Cunco", "Curarrehue", "Freire",
        "Galvarino", "Gorbea", "Lautaro", "Loncoche",
        "Melipeuco", "Nueva Imperial", "Padre Las Casas",
        "Perquenco", "Pitrufquén", "Pucón", "Saavedra",
        "Teodoro Schmidt", "Toltén", "Vilcún", "Villarrica",
        "Cholchol", "Angol", "Collipulli", "Curacautín",
        "Ercilla", "Lonquimay", "Los Sauces", "Lumaco",
        "Purén", "Renaico", "Traiguén", "Victoria"
    ],
    "Región de Los Ríos": [
        "Valdivia", "Corral", "Lanco", "Los Lagos", "Máfil",
        "Mariquina", "Paillaco", "Panguipulli", "La Unión",
        "Futrono", "Lago Ranco", "Río Bueno"
    ],
    "Región de Los Lagos": [
        "Puerto Montt", "Calbuco", "Cochamó", "Fresia",
        "Frutillar", "Los Muermos", "Llanquihue", "Maullín",
        "Puerto Varas", "Castro", "Ancud", "Chonchi",
        "Curaco de Vélez", "Dalcahue", "Puqueldón", "Queilén",
        "Quellón", "Quemchi", "Quinchao", "Osorno",
        "Puerto Octay", "Purranque", "Puyehue", "Río Negro",
        "San Juan de la Costa", "San Pablo", "Chaitén",
        "Futaleufú", "Hualaihué", "Palena"
    ],
    "Región de Aysén del General Carlos Ibáñez del Campo": [
        "Coyhaique", "Lago Verde", "Aysén", "Cisnes",
        "Guaitecas", "Cochrane", "O'Higgins", "Tortel",
        "Chile Chico", "Río Ibáñez"
    ],
    "Región de Magallanes y de la Antártica Chilena": [
        "Punta Arenas", "Laguna Blanca", "Río Verde",
        "San Gregorio", "Cabo de Hornos", "Antártica",
        "Porvenir", "Primavera", "Timaukel", "Natales",
        "Torres del Paine"
    ]
};

document.addEventListener("DOMContentLoaded", function() {
    const selectRegion = document.getElementById("region");
    const selectComuna = document.getElementById("comuna");

    // Cargar regiones
    for (const region in regiones) {
        const opcion = document.createElement("option");
        opcion.value = region;
        opcion.textContent = region;
        selectRegion.appendChild(opcion);
    }

    // Cambiar comunas cuando cambia la región
    selectRegion.addEventListener("change", function () {
        const regionSeleccionada = this.value;
        selectComuna.innerHTML = 'Selecciona una comuna';

        if (regionSeleccionada === "") {
            selectComuna.disabled = true;
            return;
        }

        const comunas = regiones[regionSeleccionada];
        comunas.forEach(function (comuna) {
            const opcion = document.createElement("option");
            opcion.value = comuna;
            opcion.textContent = comuna;
            selectComuna.appendChild(opcion);
        });

        selectComuna.disabled = false;
    });
});

const formRegistro = document.getElementById("registroForm");

if (formRegistro) {
    formRegistro.addEventListener("submit", function (event) {
        event.preventDefault();

        const run = document.getElementById("run").value.trim();
        const nombre = document.getElementById("nombre").value.trim();
        const apellidos = document.getElementById("apellidos").value.trim();
        const correo = document.getElementById("correo").value.trim();
        const fechaNacimiento = document.getElementById("fechaNacimiento").value;
        const tipoUsuario = document.getElementById("tipoUsuario").value;
        const region = document.getElementById("region").value;
        const comuna = document.getElementById("comuna").value;
        const direccion = document.getElementById("direccion").value.trim();
        const contrasena = document.getElementById("contrasena").value.trim();
        const errorContrasena = document.getElementById("errorContrasena");
        const errorRun = document.getElementById("errorRun");
        const errorNombre = document.getElementById("errorNombre");
        const errorApellidos = document.getElementById("errorApellidos");
        const errorCorreo = document.getElementById("errorCorreo");
        const errorFecha = document.getElementById("errorFecha");
        const errorTipoUsuario = document.getElementById("errorTipoUsuario");
        const errorRegion = document.getElementById("errorRegion");
        const errorComuna = document.getElementById("errorComuna");
        const errorDireccion = document.getElementById("errorDireccion");
        const mensaje = document.getElementById("mensajeRegistro");

        errorRun.textContent = "";
        errorNombre.textContent = "";
        errorApellidos.textContent = "";
        errorCorreo.textContent = "";
        errorFecha.textContent = "";
        errorTipoUsuario.textContent = "";
        errorRegion.textContent = "";
        errorComuna.textContent = "";
        errorDireccion.textContent = "";
        errorContrasena.textContent = "";
        if (mensaje) {
            mensaje.textContent = "";
        }

        let valido = true;

        if (run === "") {
            errorRun.textContent = "El RUN es obligatorio.";
            valido = false;
        } else if (run.length < 7 || run.length > 9) {
            errorRun.textContent = "El RUN debe tener entre 7 y 9 caracteres.";
            valido = false;
        } else if (!/^[0-9]+[0-9Kk]$/.test(run)) {
            errorRun.textContent = "El RUN debe contener solo números y K.";
            valido = false;
        } else if (!validarRUN(run)) {
            errorRun.textContent = "El RUN no es válido.";
            valido = false;
        }

        if (nombre === "") {
            errorNombre.textContent = "El nombre es obligatorio.";
            valido = false;
        } else if (nombre.length > 50) {
            errorNombre.textContent = "El nombre no puede superar los 50 caracteres.";
            valido = false;
        }

        if (apellidos === "") {
            errorApellidos.textContent = "Los apellidos son obligatorios.";
            valido = false;
        } else if (apellidos.length > 100) {
            errorApellidos.textContent = "Los apellidos no pueden superar los 100 caracteres.";
            valido = false;
        }
        if (contrasena === "") {
          errorContrasena.textContent = "La contraseña es obligatoria.";
          valido = false;
        }   else if (contrasena.length < 4 || contrasena.length > 10) {
          errorContrasena.textContent = "La contraseña debe tener entre 4 y 10 caracteres.";
         valido = false;
        }
        if (correo === "") {
            errorCorreo.textContent = "El correo es obligatorio.";
            valido = false;
        } else if (correo.length > 100) {
            errorCorreo.textContent = "El correo no puede superar los 100 caracteres.";
            valido = false;
        } else if (!correoValido(correo)) {
            errorCorreo.textContent = "Solo se permiten correos @duoc.cl, @profesor.duoc.cl o @gmail.com.";
            valido = false;
        }


        if (region === "") {
            errorRegion.textContent = "Debes seleccionar una región.";
            valido = false;
        }

        if (comuna === "") {
            errorComuna.textContent = "Debes seleccionar una comuna.";
            valido = false;
        }

        if (direccion === "") {
            errorDireccion.textContent = "La dirección es obligatoria.";
            valido = false;
        } else if (direccion.length > 300) {
            errorDireccion.textContent = "La dirección no puede superar los 300 caracteres.";
            valido = false;
        }

        if (!valido) {
            return;
        }

        const usuarios = obtenerUsuarios();

        const correoExiste = usuarios.some(function (usuario) {
            return usuario.correo.toLowerCase() === correo.toLowerCase();
        });

        if (correoExiste) {
            errorCorreo.textContent = "Este correo ya está registrado.";
            return;
        }

        const nuevoUsuario = {
            run: run,
            nombre: nombre,
            apellidos: apellidos,
            correo: correo,
            fechaNacimiento: fechaNacimiento,
            tipoUsuario: "cliente",
            region: region,
            comuna: comuna,
            direccion: direccion,
            contrasena: contrasena
        };

        usuarios.push(nuevoUsuario);
        guardarUsuarios(usuarios);

        if (mensaje) {
            mensaje.textContent = "Usuario registrado correctamente.";
        }

        formRegistro.reset();
        selectComuna.innerHTML = 'Selecciona una comuna';
        selectComuna.disabled = true;
    });
}

function correoValido(correo) {
    const correoMinuscula = correo.toLowerCase();
    return dominiosPermitidos.some(function (dominio) {
        return correoMinuscula.endsWith(dominio);
    });
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

function obtenerUsuarios() {
    const usuariosGuardados = localStorage.getItem("usuarios");
    if (!usuariosGuardados) {
        return [];
    }
    return JSON.parse(usuariosGuardados);
}

function guardarUsuarios(usuarios) {
    localStorage.setItem("usuarios", JSON.stringify(usuarios));
}